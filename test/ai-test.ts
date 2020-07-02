import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';
import fs from 'fs';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";


describe('AI tests', function () {
    let td = suiteBase(this);

    it('Name gender detection #pipeline', async () => {
        const result = await td.api().aiNameGenderize(new requests.AiNameGenderizeRequest('John Cane'));
        expect(result.body.value.length).to.be.at.least(1);
        expect(result.body.value[0].gender).to.be.equal('Male');
    });

    it('Name formatting #pipeline', async () => {
        const result = await td.api().aiNameFormat(new requests.AiNameFormatRequest(
            'Mr. John Michael Cane', undefined, undefined, undefined, undefined, '%t%L%f%m'));
        expect(result.body.name).to.be.equal('Mr. Cane J. M.');
    });

    it('Name match #pipeline', async function () {
        const first = 'John Michael Cane';
        const second = 'Cane J.';
        const result = await td.api().aiNameMatch(new requests.AiNameMatchRequest(
            first, second));
        expect(result.body.similarity).to.be.at.least(0.5);
    });

    it('Name expand #pipeline', async function () {
        const result = await td.api().aiNameExpand(new requests.AiNameExpandRequest(
            'Smith Bobby'));
        const names = result.body.names
            .map(weighted => weighted.name);
        expect(names).to.contain('Mr. Smith');
        expect(names).to.contain('B. Smith');
    });

    it('Name complete #pipeline', async function () {
        const prefix = 'Dav';
        const result = await td.api().aiNameComplete(new requests.AiNameCompleteRequest(
            prefix));
        const names = result.body.names
            .map(weighted => prefix + weighted.name);
        expect(names).to.contain('David');
        expect(names).to.contain('Davis');
        expect(names).to.contain('Dave');
    });

    it('Parse name from email address #pipeline', async function () {
        const result = await td.api().aiNameParseEmailAddress(new requests.AiNameParseEmailAddressRequest(
            'john-cane@gmail.com'));
        const extractedValues = result.body.value
            .map(extracted => extracted.name)
            .reduce((accumulator, value) => accumulator.concat(value));
        const givenName = extractedValues.find(extracted => extracted.category == 'GivenName');
        const surname = extractedValues.find(extracted => extracted.category == 'Surname');
        expect(givenName.value).to.be.equal('John');
        expect(surname.value).to.be.equal('Cane');
    });

    it('Parse business card images to VCard contact files #aiBcr', async function () {
        const imageData = fs.readFileSync('test/td/test_single_0001.png');
        const storageFileName = uuidv4() + '.png';
        // 1) Upload business card image to storage
        await td.api().uploadFile(
            new requests.UploadFileRequest(td.folder() + '/' + storageFileName, imageData, td.storage()));
        const outFolder = uuidv4();
        const outFolderPath = td.folder() + '/' + outFolder;
        await td.api().createFolder(new requests.CreateFolderRequest(outFolderPath, td.storage()));
        // 2) Call business card recognition action
        const result = await td.api().aiBcrParseStorage(
            new requests.AiBcrParseStorageRequest(new models.AiBcrParseStorageRq(
                null,
                [new models.AiBcrImageStorageFile(
                    true,
                    new models.StorageFileLocation(td.storage(), td.folder(), storageFileName))],
                new models.StorageFolderLocation(td.storage(), outFolderPath))));
        //Check that only one file produced
        expect(result.body.value.length).to.be.equal(1);
        // 3) Get file name from recognition result
        const contactFile = result.body.value[0];
        // 4) Download VCard file, produced by recognition method, check it contains text "Thomas"
        const contactBinary = await td.api().downloadFile(new requests.DownloadFileRequest(
            contactFile.folderPath + '/' + contactFile.fileName, td.storage()));
        expect(contactBinary.body.toString()).to.contain('Thomas');
        // 5) Get VCard object properties list, check that there are 3 properties or more
        const contactProperties = await td.api().getContactProperties(new requests.GetContactPropertiesRequest(
            'vcard', contactFile.fileName, contactFile.folderPath, contactFile.storage));
        expect(contactProperties.body.internalProperties.length).to.be.at.least(3);
    });

    it('Business card recognition without storage #aiBcr', async function () {
        const imageData = fs.readFileSync('test/td/test_single_0001.png').toString('base64');
        const result = await td.api().aiBcrParse(new requests.AiBcrParseRequest(
            new models.AiBcrBase64Rq(undefined, [new models.AiBcrBase64Image(true, imageData)])));
        expect(result.body.value.length).to.be.equal(1);
        const displayName = result.body.value[0].internalProperties
            .find(property => property.name == 'DISPLAYNAME') as models.PrimitiveObject;
        expect(displayName.value).to.contain("Thomas");
    });

    it('Parse contact model from image #aiBcr', async function () {
        const imageData = fs.readFileSync('test/data/test_single_0001.png').toString('base64');
        const result = await td.api().aiBcrParseModel(new requests.AiBcrParseModelRequest(
            new models.AiBcrBase64Rq(undefined, [new models.AiBcrBase64Image(true, imageData)])));
        expect(result.body.value.length).to.be.equal(1);
        expect(result.body.value[0].displayName).to.contain("Thomas");
    });
});