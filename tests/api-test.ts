import { EmailApi } from '../src/api'
import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';
import fs from 'fs';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('EmailApi', function() {
    var api :EmailApi;
    var folder :string;
    var storage = 'First Storage';

    beforeAll(async function() {
        api = new EmailApi(process.env.appSid, process.env.appKey, process.env.apiBaseUrl);
        var authUrl = process.env.authUrl;
        if (authUrl != null) api.configuration.authUrl = authUrl;
        folder = uuidv4();
        await api.createFolder(new requests.CreateFolderRequest(folder, storage));
    })

    afterAll(async function() {
        await api.deleteFolder(new requests.DeleteFolderRequest(folder, storage, true));
    })

    /*
     * HierarchicalObject serialization and deserialization test.
     * This test checks that BaseObject.Type field filled automatically by SDK
     * and properly used in serialization and deserialization
     */
    it('HierarchicalObject #pipeline', async function() {
        var calendarFile = await createCalendar();
        var calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        expect(calendar.body.name).toBe('CALENDAR');
        var filtered = calendar.body.internalProperties.filter(item => item.type == 'PrimitiveObject');
        expect(filtered.length).toBeGreaterThanOrEqual(3);
        var primitive = filtered[0] as models.PrimitiveObject;
        expect(primitive.value).toBeDefined();
    });

    /**
     * Buffer support test
     */
    it('FileTest #pipeline', async function() {
        var calendarFile = await createCalendar();
        var path = folder + '/' + calendarFile;
        var downloaded = await api.downloadFile(new requests.DownloadFileRequest(path, storage));
        var calendarRaw = downloaded.body.toString()
        expect(calendarRaw).toContain('Organizer')
        calendarFile = uuidv4() + '.ics'
        path = folder + '/' + calendarFile;
        await api.uploadFile(new requests.UploadFileRequest(path, downloaded.body, storage));
        var exist = await api.objectExists(new requests.ObjectExistsRequest(path, storage));
        expect(exist.body.exists).toBeTrue();
        var calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        var location = calendar.body.internalProperties
            .find(item => item.type == 'PrimitiveObject' && item.name == 'LOCATION') as models.PrimitiveObject;
        expect(location.value).toEqual('location');
    });

    /**
     * Contact format specified as Enum, but SDK represents it as an advanced type of string constants a string.
     * Test checks that value parsing works properly
     */
    it('Contact format #pipeline', async function() {
        for(var format of ['VCard', 'Msg']) {
            var extension = (format == 'Msg') ? '.msg' : '.vcf';
            var fileName = uuidv4() + extension;
            await api.createContact(new requests.CreateContactRequest(
                format as 'VCard' | 'Msg',
                fileName,
                new models.HierarchicalObjectRequest(
                    new models.HierarchicalObject('CONTACT', undefined, []),
                    new models.StorageFolderLocation(storage, folder)
                )));
            var exists = await api.objectExists(new requests.ObjectExistsRequest(folder + '/' + fileName, storage));
            expect(exists.body.exists).toBeTrue();
        }
    });

    /**
     * Test Date serialization and deserialization.
     * Checks that SDK and Backend do not change Date during processing.
     * In most cases developer should carefully serialize and deserialize Date
     */
    it('Date #pipeline', async function() {
        var startDate = getDate(undefined, 24);
        startDate.setMilliseconds(0);
        var calendarFile = await createCalendar(startDate);
        var calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        var startDateProperty = calendar.body.internalProperties.find(item => item.name == 'STARTDATE') as models.PrimitiveObject;
        var factStartDate = new Date(startDateProperty.value);
        expect(factStartDate).toEqual(startDate);
    });

    it('Name gender detection', async function() {
        var result = await api.aiNameGenderize(new requests.AiNameGenderizeRequest('John Cane'));
        expect(result.body.value.length).toBeGreaterThanOrEqual(1);
        expect(result.body.value[0].gender).toEqual('Male');
    });

    it('Name formatting', async function() {
        var result = await api.aiNameFormat(new requests.AiNameFormatRequest(
            'Mr. John Michael Cane', undefined, undefined, undefined, undefined, '%t%L%f%m'));
        expect(result.body.name).toEqual('Mr. Cane J. M.');
    });

    it('Name match', async function() {
        var first = 'John Michael Cane';
        var second = 'Cane J.';
        var result = await api.aiNameMatch(new requests.AiNameMatchRequest(
            first, second));
        expect(result.body.similarity).toBeGreaterThanOrEqual(0.5);
    });

    it('Name expand', async function() {
        var result = await api.aiNameExpand(new requests.AiNameExpandRequest(
            'Smith Bobby'));
        var names = result.body.names
            .map(weighted => weighted.name);
        expect(names).toContain('Mr. Smith');
        expect(names).toContain('B. Smith');
    });

    it('Name complete', async function() {
        var prefix = 'Dav';
        var result = await api.aiNameComplete(new requests.AiNameCompleteRequest(
            prefix));
        var names = result.body.names
            .map(weighted => prefix + weighted.name);
        expect(names).toContain('David');
        expect(names).toContain('Davis');
        expect(names).toContain('Dave');
    });

    it('Parse name from email address', async function() {
        var result = await api.aiNameParseEmailAddress(new requests.AiNameParseEmailAddressRequest(
            'john-cane@gmail.com'));
        var extractedValues = result.body.value
            .map(extracted => extracted.name)
            .reduce((accumulator, value) => accumulator.concat(value));
        var givenName = extractedValues.find(extracted => extracted.category == 'GivenName');
        var surname = extractedValues.find(extracted => extracted.category == 'Surname');
        expect(givenName.value).toEqual('John');
        expect(surname.value).toEqual('Cane');
    });

    it('Parse business card images to VCard contact files', async function() {
        var imageData = fs.readFileSync('tests/data/test_single_0001.png');
        var storageFileName = uuidv4() + '.png';
        // 1) Upload business card image to storage
        await api.uploadFile(new requests.UploadFileRequest(folder + '/' + storageFileName, imageData, storage));
        var outFolder = uuidv4();
        var outFolderPath = folder + '/' + outFolder;
        await api.createFolder(new requests.CreateFolderRequest(outFolderPath, storage));
        // 2) Call business card recognition action
        var result = await api.aiBcrParseStorage(
            new requests.AiBcrParseStorageRequest(new models.AiBcrParseStorageRq(
                null,
                [new models.AiBcrImageStorageFile(
                    true,
                    new models.StorageFileLocation(storage, folder, storageFileName))],
                new models.StorageFolderLocation(storage, outFolderPath))));
        //Check that only one file produced
        expect(result.body.value.length).toBe(1);
        // 3) Get file name from recognition result
        var contactFile = result.body.value[0];
        // 4) Download VCard file, produced by recognition method, check it contains text "Thomas"
        var contactBinary = await api.downloadFile(new requests.DownloadFileRequest(
            contactFile.folderPath + '/' + contactFile.fileName, storage));
        expect(contactBinary.body.toString()).toContain('Thomas');
        // 5) Get VCard object properties list, check that there are 3 properties or more
        var contactProperties = await api.getContactProperties(new requests.GetContactPropertiesRequest(
            'vcard', contactFile.fileName, contactFile.folderPath, contactFile.storage));
        expect(contactProperties.body.internalProperties.length).toBeGreaterThanOrEqual(3);
    });

    it('Business card recognition without storage', async function() {
        var imageData = fs.readFileSync('tests/data/test_single_0001.png').toString('base64');
        var result = await api.aiBcrParse(new requests.AiBcrParseRequest(
            new models.AiBcrBase64Rq(undefined, [new models.AiBcrBase64Image(true, imageData)])));
        expect(result.body.value.length).toEqual(1);
        var displayName = result.body.value[0].internalProperties
            .find(property => property.name == 'DISPLAYNAME') as models.PrimitiveObject;
        expect(displayName.value).toContain("Thomas");
    });

    it('Create calendar email #pipeline', async function() {
        var calendar = new models.CalendarDto();
        calendar.attendees = [
            new models.MailAddress('Attendee Name', 'attendee@am.ru', 'Accepted')
        ];
        calendar.description = 'Some description';
        calendar.summary = 'Some summary';
        calendar.organizer = new models.MailAddress('Organizer Name', 'organizer@am.ru');
        calendar.startDate = getDate(undefined, 1);
        calendar.endDate = getDate(calendar.startDate, 1);
        calendar.location = 'Some location';
        var folderLocation = new models.StorageFolderLocation(storage, folder);
        var calendarFile = uuidv4() + '.ics';
        await api.saveCalendarModel(
            new requests.SaveCalendarModelRequest(
                calendarFile,
                new models.StorageModelRqOfCalendarDto(
                    calendar,
                    folderLocation)));
        var exists = await api.objectExists(
            new requests.ObjectExistsRequest(folder + '/' + calendarFile, storage));
        expect(exists.body.exists).toBeTrue();

        var alternate = await api.convertCalendarModelToAlternate(
            new requests.ConvertCalendarModelToAlternateRequest(
                new models.CalendarDtoAlternateRq(calendar, 'Create')));

        var email = new models.EmailDto();
        email.alternateViews = [alternate.body];
        email.from = new models.MailAddress('From address', 'cloud.em@yandex.ru');
        email.to = [new models.MailAddress('To address', 'cloud.em@yandex.ru')];
        email.subject = 'Some subject';
        email.body = 'Some body';

        var emailFile = uuidv4() + '.eml';
        await api.saveEmailModel(
            new requests.SaveEmailModelRequest(
                'Eml', emailFile, new models.StorageModelRqOfEmailDto(
                    email, folderLocation)));

        var downloaded = await api.downloadFile(
            new requests.DownloadFileRequest(
                folder + '/' + emailFile, storage));
        var downloadedRaw = downloaded.body.toString();
        expect(downloadedRaw).toContain('cloud.em@yandex.ru');
    });

    it('Save contact model #pipeline', async function() {
        var contact = new models.ContactDto();
        contact.gender = 'Male';
        contact.surname = 'Thomas';
        contact.givenName = 'Alex';
        contact.emailAddresses = [new models.EmailAddress(
            new models.EnumWithCustomOfEmailAddressCategory('Work'),
            'Alex Thomas', true, undefined, 'alex.thomas@work.com')];
        contact.phoneNumbers = [new models.PhoneNumber(
            new models.EnumWithCustomOfPhoneNumberCategory('Work'),
            '+49211424721', true)];

        var contactFile = uuidv4() + '.vcf';
        await api.saveContactModel(
            new requests.SaveContactModelRequest(
                'VCard', contactFile, new models.StorageModelRqOfContactDto(
                    contact, new models.StorageFolderLocation(storage, folder))));
        var exists = await api.objectExists(
            new requests.ObjectExistsRequest(
                folder + '/' + contactFile, storage));
        expect(exists.body.exists).toBeTrue();
    });

    it('Parse contact model from image', async function() {
        var imageData = fs.readFileSync('tests/data/test_single_0001.png').toString('base64');
        var result = await api.aiBcrParseModel(new requests.AiBcrParseModelRequest(
            new models.AiBcrBase64Rq(undefined, [new models.AiBcrBase64Image(true, imageData)])));
        expect(result.body.value.length).toEqual(1);
        expect(result.body.value[0].displayName).toContain("Thomas");
    });

    async function createCalendar(startDate? : Date) :Promise<string> {
        var fileName = uuidv4() + '.ics';
        startDate = (startDate == null) ? getDate(undefined, 1) : startDate;
        var endDate = getDate(startDate, 1);
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
        var hour = 60*60*1000;
        var result = new Date();
        result.setTime(baseDate.getTime() + addHours * hour);
        return result;
    }
  });