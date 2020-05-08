import { EmailApi } from '../src/api'
import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';
import fs from 'fs';
import 'mocha';
import { expect } from 'chai';

describe('EmailApi', function() {
    let api: EmailApi;
    let folder: string;
    const storage = 'First Storage';
    this.timeout(100000)

    before(async function() {
        api = new EmailApi(process.env.appSid, process.env.appKey, process.env.apiBaseUrl);
        const authUrl = process.env.authUrl;
        if (authUrl != null) api.configuration.authUrl = authUrl;
        folder = uuidv4();
        await api.createFolder(new requests.CreateFolderRequest(folder, storage));
    })

    after(async function() {
        await api.deleteFolder(new requests.DeleteFolderRequest(folder, storage, true));
    })

    /*
     * HierarchicalObject serialization and deserialization test.
     * This test checks that BaseObject.Type field filled automatically by SDK
     * and properly used in serialization and deserialization
     */
    it('HierarchicalObject #pipeline', async function() {
        const calendarFile = await createCalendar();
        const calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        expect(calendar.body.name).to.be.equal('CALENDAR');
        const filtered = calendar.body.internalProperties.filter(item => item.type == 'PrimitiveObject');
        expect(filtered.length).to.be.at.least(3);
        const primitive = filtered[0] as models.PrimitiveObject;
        expect(primitive.value).to.not.be.undefined;
    });

    /**
     * Buffer support test
     */
    it('FileTest #pipeline', async function() {
        let calendarFile = await createCalendar();
        let path = folder + '/' + calendarFile;
        const downloaded = await api.downloadFile(new requests.DownloadFileRequest(path, storage));
        const calendarRaw = downloaded.body.toString();
        expect(calendarRaw).to.contain('Organizer')
        calendarFile = uuidv4() + '.ics'
        path = folder + '/' + calendarFile;
        await api.uploadFile(new requests.UploadFileRequest(path, downloaded.body, storage));
        const exist = await api.objectExists(new requests.ObjectExistsRequest(path, storage));
        expect(exist.body.exists).to.be.ok;
        const calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        const location = calendar.body.internalProperties
            .find(item => item.type == 'PrimitiveObject' && item.name == 'LOCATION') as models.PrimitiveObject;
        expect(location.value).to.equal('location');
    });

    /**
     * Contact format specified as Enum, but SDK represents it as an advanced type of string constants a string.
     * Test checks that value parsing works properly
     */
    it('Contact format #pipeline', async function() {
        for(const format of ['VCard', 'Msg']) {
            const extension = (format == 'Msg') ? '.msg' : '.vcf';
            const fileName = uuidv4() + extension;
            await api.createContact(new requests.CreateContactRequest(
                format as 'VCard' | 'Msg',
                fileName,
                new models.HierarchicalObjectRequest(
                    new models.HierarchicalObject('CONTACT', undefined, []),
                    new models.StorageFolderLocation(storage, folder)
                )));
            const exists = await api.objectExists(new requests.ObjectExistsRequest(folder + '/' + fileName, storage));
            expect(exists.body.exists).to.be.ok;
        }
    });

    /**
     * Test Date serialization and deserialization.
     * Checks that SDK and Backend do not change Date during processing.
     * In most cases developer should carefully serialize and deserialize Date
     */
    it('Date #pipeline', async function() {
        const startDate = getDate(undefined, 24);
        startDate.setMilliseconds(0);
        const calendarFile = await createCalendar(startDate);
        const calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        const startDateProperty = calendar.body.internalProperties.find(item => item.name == 'STARTDATE') as models.PrimitiveObject;
        const factStartDate = new Date(startDateProperty.value);
        expect(factStartDate.getTime()).to.equal(startDate.getTime());
    });

    it('Name gender detection #pipeline', async function() {
        const result = await api.aiNameGenderize(new requests.AiNameGenderizeRequest('John Cane'));
        expect(result.body.value.length).to.be.at.least(1);
        expect(result.body.value[0].gender).to.be.equal('Male');
    });

    it('Name formatting #pipeline', async function() {
        const result = await api.aiNameFormat(new requests.AiNameFormatRequest(
            'Mr. John Michael Cane', undefined, undefined, undefined, undefined, '%t%L%f%m'));
        expect(result.body.name).to.be.equal('Mr. Cane J. M.');
    });

    it('Name match #pipeline', async function() {
        const first = 'John Michael Cane';
        const second = 'Cane J.';
        const result = await api.aiNameMatch(new requests.AiNameMatchRequest(
            first, second));
        expect(result.body.similarity).to.be.at.least(0.5);
    });

    it('Name expand #pipeline', async function() {
        const result = await api.aiNameExpand(new requests.AiNameExpandRequest(
            'Smith Bobby'));
        const names = result.body.names
            .map(weighted => weighted.name);
        expect(names).to.contain('Mr. Smith');
        expect(names).to.contain('B. Smith');
    });

    it('Name complete #pipeline', async function() {
        const prefix = 'Dav';
        const result = await api.aiNameComplete(new requests.AiNameCompleteRequest(
            prefix));
        const names = result.body.names
            .map(weighted => prefix + weighted.name);
        expect(names).to.contain('David');
        expect(names).to.contain('Davis');
        expect(names).to.contain('Dave');
    });

    it('Parse name from email address #pipeline', async function() {
        const result = await api.aiNameParseEmailAddress(new requests.AiNameParseEmailAddressRequest(
            'john-cane@gmail.com'));
        const extractedValues = result.body.value
            .map(extracted => extracted.name)
            .reduce((accumulator, value) => accumulator.concat(value));
        const givenName = extractedValues.find(extracted => extracted.category == 'GivenName');
        const surname = extractedValues.find(extracted => extracted.category == 'Surname');
        expect(givenName.value).to.be.equal('John');
        expect(surname.value).to.be.equal('Cane');
    });

    it('Parse business card images to VCard contact files #pipeline', async function() {
        const imageData = fs.readFileSync('test/data/test_single_0001.png');
        const storageFileName = uuidv4() + '.png';
        // 1) Upload business card image to storage
        await api.uploadFile(new requests.UploadFileRequest(folder + '/' + storageFileName, imageData, storage));
        const outFolder = uuidv4();
        const outFolderPath = folder + '/' + outFolder;
        await api.createFolder(new requests.CreateFolderRequest(outFolderPath, storage));
        // 2) Call business card recognition action
        const result = await api.aiBcrParseStorage(
            new requests.AiBcrParseStorageRequest(new models.AiBcrParseStorageRq(
                null,
                [new models.AiBcrImageStorageFile(
                    true,
                    new models.StorageFileLocation(storage, folder, storageFileName))],
                new models.StorageFolderLocation(storage, outFolderPath))));
        //Check that only one file produced
        expect(result.body.value.length).to.be.equal(1);
        // 3) Get file name from recognition result
        const contactFile = result.body.value[0];
        // 4) Download VCard file, produced by recognition method, check it contains text "Thomas"
        const contactBinary = await api.downloadFile(new requests.DownloadFileRequest(
            contactFile.folderPath + '/' + contactFile.fileName, storage));
        expect(contactBinary.body.toString()).to.contain('Thomas');
        // 5) Get VCard object properties list, check that there are 3 properties or more
        const contactProperties = await api.getContactProperties(new requests.GetContactPropertiesRequest(
            'vcard', contactFile.fileName, contactFile.folderPath, contactFile.storage));
        expect(contactProperties.body.internalProperties.length).to.be.at.least(3);
    });

    it('Business card recognition without storage #pipeline', async function() {
        const imageData = fs.readFileSync('test/data/test_single_0001.png').toString('base64');
        const result = await api.aiBcrParse(new requests.AiBcrParseRequest(
            new models.AiBcrBase64Rq(undefined, [new models.AiBcrBase64Image(true, imageData)])));
        expect(result.body.value.length).to.be.equal(1);
        const displayName = result.body.value[0].internalProperties
            .find(property => property.name == 'DISPLAYNAME') as models.PrimitiveObject;
        expect(displayName.value).to.contain("Thomas");
    });

    it('Create calendar email #pipeline', async function() {
        const calendar = new models.CalendarDto();
        calendar.attendees = [
            new models.MailAddress('Attendee Name', 'attendee@am.ru', 'Accepted')
        ];
        calendar.description = 'Some description';
        calendar.summary = 'Some summary';
        calendar.organizer = new models.MailAddress('Organizer Name', 'organizer@am.ru');
        calendar.startDate = getDate(undefined, 1);
        calendar.endDate = getDate(calendar.startDate, 1);
        calendar.location = 'Some location';
        const folderLocation = new models.StorageFolderLocation(storage, folder);
        const calendarFile = uuidv4() + '.ics';
        await api.saveCalendarModel(
            new requests.SaveCalendarModelRequest(
                calendarFile,
                new models.StorageModelRqOfCalendarDto(
                    calendar,
                    folderLocation)));
        const exists = await api.objectExists(
            new requests.ObjectExistsRequest(folder + '/' + calendarFile, storage));
        expect(exists.body.exists).to.be.ok;

        const alternate = await api.convertCalendarModelToAlternate(
            new requests.ConvertCalendarModelToAlternateRequest(
                new models.CalendarDtoAlternateRq(calendar, 'Create')));

        const email = new models.EmailDto();
        email.alternateViews = [alternate.body];
        email.from = new models.MailAddress('From address', 'cloud.em@yandex.ru');
        email.to = [new models.MailAddress('To address', 'cloud.em@yandex.ru')];
        email.subject = 'Some subject';
        email.body = 'Some body';

        const emailFile = uuidv4() + '.eml';
        await api.saveEmailModel(
            new requests.SaveEmailModelRequest(
                'Eml', emailFile, new models.StorageModelRqOfEmailDto(
                    email, folderLocation)));

        const downloaded = await api.downloadFile(
            new requests.DownloadFileRequest(
                folder + '/' + emailFile, storage));
        const downloadedRaw = downloaded.body.toString();
        expect(downloadedRaw).to.contain('cloud.em@yandex.ru');
    });

    it('Save contact model #pipeline', async function() {
        const contact = new models.ContactDto();
        contact.gender = 'Male';
        contact.surname = 'Thomas';
        contact.givenName = 'Alex';
        contact.emailAddresses = [new models.EmailAddress(
            new models.EnumWithCustomOfEmailAddressCategory('Work'),
            'Alex Thomas', true, undefined, 'alex.thomas@work.com')];
        contact.phoneNumbers = [new models.PhoneNumber(
            new models.EnumWithCustomOfPhoneNumberCategory('Work'),
            '+49211424721', true)];

        const contactFile = uuidv4() + '.vcf';
        await api.saveContactModel(
            new requests.SaveContactModelRequest(
                'VCard', contactFile, new models.StorageModelRqOfContactDto(
                    contact, new models.StorageFolderLocation(storage, folder))));
        const exists = await api.objectExists(
            new requests.ObjectExistsRequest(
                folder + '/' + contactFile, storage));
        expect(exists.body.exists).to.be.ok;
    });

    it('Parse contact model from image #pipeline', async function() {
        const imageData = fs.readFileSync('test/data/test_single_0001.png').toString('base64');
        const result = await api.aiBcrParseModel(new requests.AiBcrParseModelRequest(
            new models.AiBcrBase64Rq(undefined, [new models.AiBcrBase64Image(true, imageData)])));
        expect(result.body.value.length).to.be.equal(1);
        expect(result.body.value[0].displayName).to.contain("Thomas");
    });

    it('Create MAPI file #pipeline', async function() {
        const fileName = uuidv4() + '.msg';
        await api.createMapi(new requests.CreateMapiRequest(
            fileName, new models.HierarchicalObjectRequest(
                new models.HierarchicalObject("IPM.Contact", undefined, [
                    new models.PrimitiveObject("Tag:'PidTagMessageClass':0x1A:String", undefined, "IPM.Contact"),
                    new models.PrimitiveObject("Tag:'PidTagSubject':0x37:String"),
                    new models.PrimitiveObject("Tag:'PidTagSubjectPrefix':0x3D:String"),
                    new models.PrimitiveObject("Tag:'PidTagMessageFlags':0xE07:Integer32", undefined, "8"),
                    new models.PrimitiveObject("Tag:'PidTagNormalizedSubject':0xE1D:String"),
                    new models.PrimitiveObject("Tag:'PidTagBody':0x1000:String"),
                    new models.PrimitiveObject("Tag:'PidTagStoreSupportMask':0x340D:Integer32", undefined, "265849"),
                    new models.PrimitiveObject("Tag:'PidTagSurname':0x3A11:String", undefined, "Surname"),
                    new models.PrimitiveObject("Tag:'PidTagOtherTelephoneNumber':0x3A1F:String", undefined, "+79123456789"),
                    new models.PrimitiveObject("Tag:'':0x6662:Integer32", undefined, "0"),
                    new models.PrimitiveObject(
                        "Lid:'PidLidAddressBookProviderArrayType':0x8029:Integer32:00062004-0000-0000-c000-000000000046",
                        undefined, "1")
                ]),
                new models.StorageFolderLocation(storage, folder))));
        const exist = await api.objectExists(new requests.ObjectExistsRequest(folder + "/" + fileName, storage));
        expect(exist.body.exists).to.be.ok;
    });

    it('Add attachment to MAPI #pipeline', async function() {
        const fileName = await createCalendar();
        const attachmentName = await createCalendar();
        await api.addMapiAttachment(new requests.AddMapiAttachmentRequest(
            fileName, attachmentName, new models.AddAttachmentRequest(
                new models.StorageFolderLocation(storage, folder),
                new models.StorageFolderLocation(storage, folder))));
        const downloaded = await api.getCalendarAttachment(new requests.GetCalendarAttachmentRequest(
            fileName, attachmentName, folder, storage));
        const calendarRaw = downloaded.body.toString();
        expect(calendarRaw).to.contain('Aspose Ltd')
    });

    it('Get MAPI properties #pipeline', async function () {
        const fileName = await createCalendar();
        const properties = await api.getMapiProperties(new requests.GetMapiPropertiesRequest(
            fileName, folder, storage));
        expect(properties.body.hierarchicalObject.name).to.contain("IPM.Schedule");
    });

    it('Discover email config #pipeline', async function() {
        const configs = await api.discoverEmailConfig(new requests.DiscoverEmailConfigRequest(
            'example@gmail.com', true));
        expect(configs.body.value.length).to.be.at.least(2);
        const smtp = configs.body.value.filter(item => item.protocolType == 'SMTP')[0];
        expect(smtp.host).to.be.equal('smtp.gmail.com');
    });

    it('Check disposable email #pipeline', async function() {
        const disposable = await api.isEmailAddressDisposable(
            new requests.IsEmailAddressDisposableRequest('example@mailcatch.com'));
        expect(disposable.body.value).to.be.ok;
        const regular = await api.isEmailAddressDisposable(
            new requests.IsEmailAddressDisposableRequest('example@gmail.com'));
        expect(regular.body.value).to.not.be.ok;
    });

    it('Check EmailClientAccount #pipeline', async function() {
        const accountCredentials =
            new models.EmailClientAccountPasswordCredentials(
                'login', undefined, 'password');
        const account = new models.EmailClientAccount(
            'smtp.gmail.com',
            551,
            'SSLAuto',
            'SMTP',
            accountCredentials);
        const fileName = uuidv4() + '.account';
        await api.saveEmailClientAccount(new requests.SaveEmailClientAccountRequest(
            new models.StorageFileRqOfEmailClientAccount(
                account, new models.StorageFileLocation(storage, folder, fileName))));
        const result = await api.getEmailClientAccount(new requests.GetEmailClientAccountRequest(
            fileName, folder, storage));
        expect(result.body.credentials.discriminator).to.be.equal(account.credentials.discriminator);
        const resultCredentials = result.body.credentials as models.EmailClientAccountPasswordCredentials;
        expect(resultCredentials.password).to.be.equal(accountCredentials.password);
        expect(result.body.host).to.be.equal(account.host);
    });

    it('Check EmailClientMultiAccount #pipeline', async function() {
        // Create multi account object
        const multiAccount = new models.EmailClientMultiAccount(
            [new models.EmailClientAccount('imap.gmail.com', 993, 'SSLAuto', 'IMAP',
                new models.EmailClientAccountPasswordCredentials(
                    'example@gmail.com', undefined, 'password')),
                new models.EmailClientAccount('exchange.outlook.com', 443, 'SSLAuto', 'EWS',
                    new models.EmailClientAccountOauthCredentials(
                        'example@gmail.com', undefined, 'clientId', 'clientSecret', 'refreshToken'))],
            new models.EmailClientAccount('smtp.gmail.com', 465, 'SSLAuto', 'SMTP',
                new models.EmailClientAccountPasswordCredentials(
                    'example@gmail.com', undefined, 'password')));
        const fileName = uuidv4() + '.multi.account';
        // Save multi account
        await api.saveEmailClientMultiAccount(new requests.SaveEmailClientMultiAccountRequest(
            new models.StorageFileRqOfEmailClientMultiAccount(
                multiAccount,
                new models.StorageFileLocation(storage, folder, fileName))));
        // Get multi account object from storage
        const multiAccountFromStorage = await api.getEmailClientMultiAccount(
            new requests.GetEmailClientMultiAccountRequest(
                fileName, folder, storage));

        expect(multiAccountFromStorage.body.receiveAccounts.length).to.be.equal(2);
        expect(multiAccountFromStorage.body.sendAccount.credentials.discriminator)
            .to.be.equal(multiAccount.sendAccount.credentials.discriminator);
    });

    async function createCalendar(startDate? : Date) :Promise<string> {
        const fileName = uuidv4() + '.ics';
        startDate = (startDate == null) ? getDate(undefined, 1) : startDate;
        const endDate = getDate(startDate, 1);
        await api.createCalendar(new requests.CreateCalendarRequest(
            fileName,
            new models.HierarchicalObjectRequest(
                new models.HierarchicalObject(
                    'CALENDAR',
                    undefined, [
                        new models.PrimitiveObject("LOCATION", undefined, "location"),
                        new models.PrimitiveObject("STARTDATE", undefined, startDate.toUTCString()),
                        new models.PrimitiveObject("ENDDATE", undefined, endDate.toUTCString()),
                        new models.HierarchicalObject("ORGANIZER", undefined, [
                                new models.PrimitiveObject("ADDRESS", undefined, "organizer@am.ru"),
                                new models.PrimitiveObject("DISPLAYNAME", undefined, "Organizer Name")
                            ]),
                        new models.HierarchicalObject("ATTENDEES", undefined, [
                            new models.IndexedHierarchicalObject("ATTENDEE", undefined, 0, [
                                new models.PrimitiveObject("ADDRESS", undefined, "attendee@am.ru"),
                                new models.PrimitiveObject("DISPLAYNAME", undefined, "Attendee Name")
                            ])
                        ])]
                ),
                new models.StorageFolderLocation(storage, folder)
            )
        ));
        return fileName;
    }

    function getDate(baseDate?: Date, addHours?:number) : Date {
        baseDate = (baseDate == null) ? new Date() : baseDate;
        addHours = (addHours == null) ? 0 : addHours;
        const hour = 60 * 60 * 1000;
        const result = new Date();
        result.setTime(baseDate.getTime() + addHours * hour);
        return result;
    }
  });