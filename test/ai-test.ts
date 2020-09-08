import uuidv4 from 'uuid/v4';
import fs from 'fs';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import {
    AiBcrImageStorageFile,
    AiBcrParseRequest,
    AiBcrParseStorageRequest,
    AiNameCompleteRequest,
    AiNameExpandRequest,
    AiNameFormatRequest,
    AiNameGenderizeRequest,
    AiNameMatchRequest,
    AiNameParseEmailAddressRequest,
    CreateFolderRequest,
    DownloadFileRequest,
    StorageFileLocation,
    StorageFolderLocation,
    UploadFileRequest
} from "..";


describe('AI tests', function () {
    let td = suiteBase(this);

    it('Name gender detection #pipeline', async () => {
        const result = await td.api().ai.name.genderize(new AiNameGenderizeRequest('John Cane'));
        expect(result.value.length).to.be.at.least(1);
        expect(result.value[0].gender).to.be.equal('Male');
    });

    it('Name formatting #pipeline', async () => {
        const result = await td.api().ai.name.format(
            new AiNameFormatRequest('Mr. John Michael Cane', undefined, undefined, undefined, undefined, '%t%L%f%m'));
        expect(result.name).to.be.equal('Mr. Cane J. M.');
    });

    it('Name match #pipeline', async function () {
        const first = 'John Michael Cane';
        const second = 'Cane J.';
        const result = await td.api().ai.name.match(new AiNameMatchRequest(
            first, second));
        expect(result.similarity).to.be.at.least(0.5);
    });

    it('Name expand #pipeline', async function () {
        const result = await td.api().ai.name.expand(new AiNameExpandRequest(
            'Smith Bobby'));
        const names = result.names
            .map(weighted => weighted.name);
        expect(names).to.contain('Mr. Smith');
        expect(names).to.contain('B. Smith');
    });

    it('Name complete #pipeline', async function () {
        const prefix = 'Dav';
        const result = await td.api().ai.name.complete(new AiNameCompleteRequest(prefix));
        const names = result.names
            .map(weighted => prefix + weighted.name);
        expect(names).to.contain('David');
        expect(names).to.contain('Davis');
        expect(names).to.contain('Dave');
    });

    it('Parse name from email address #pipeline', async function () {
        const result = await td.api().ai.name.parseEmailAddress(new AiNameParseEmailAddressRequest(
            'john-cane@gmail.com'));
        const extractedValues = result.value
            .map(extracted => extracted.name)
            .reduce((accumulator, value) => accumulator.concat(value));
        const givenName = extractedValues.find(extracted => extracted.category == 'GivenName');
        const surname = extractedValues.find(extracted => extracted.category == 'Surname');
        expect(givenName.value).to.be.equal('John');
        expect(surname.value).to.be.equal('Cane');
    });

    it('Parse business card images to VCard contact files using storage #aiBcr', async function () {
        const imageData = fs.readFileSync('test/data/test_single_0001.png');
        const storageFileName = uuidv4() + '.png';
        // 1) Upload business card image to storage
        await td.api().cloudStorage.file.uploadFile(
            new UploadFileRequest(td.folder() + '/' + storageFileName, imageData, td.storage()));
        const outFolder = uuidv4();
        const outFolderPath = td.folder() + '/' + outFolder;
        await td.api().cloudStorage.folder.createFolder(new CreateFolderRequest(outFolderPath, td.storage()));
        // 2) Call business card recognition action
        const result = await td.api().ai.bcr.parseStorage(
            new AiBcrParseStorageRequest(
                new StorageFolderLocation(td.storage(), outFolderPath),
                [new AiBcrImageStorageFile(true,
                    new StorageFileLocation(td.storage(), td.folder(), storageFileName))]));
        //Check that only one file produced
        expect(result.value.length).to.be.equal(1);
        // 3) Get file name from recognition result
        const contactFile = result.value[0];
        // 4) Download VCard file, produced by recognition method, check it contains text "Thomas"
        const contactBinary = await td.api().cloudStorage.file.downloadFile(new DownloadFileRequest(
            contactFile.folderPath + '/' + contactFile.fileName, td.storage()));
        expect(contactBinary.toString()).to.contain('Thomas');
    });

    it('Business card recognition without storage #aiBcr', async function () {
        const imageData = fs.readFileSync('test/data/test_single_0001.png');
        const result = await td.api().ai.bcr.parse(new AiBcrParseRequest(
            imageData, undefined, undefined, true));
        expect(result.value.length).to.be.equal(1);
        expect(result.value[0].displayName).to.contain("Thomas");
    });
});