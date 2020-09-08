import uuidv4 from 'uuid/v4';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import {
    ContactAsFileRequest,
    ContactConvertRequest,
    ContactDto,
    ContactFromFileRequest,
    ContactSaveRequest,
    EmailAddress,
    ObjectExistsRequest,
    PhoneNumber,
    StorageFileLocation
} from "..";

describe('Contact tests', function () {
    let td = suiteBase(this);
    const surname = 'Cane';

    it('Save contact model #pipeline', async function () {
        const contact = getContactDto();
        const contactFile = uuidv4() + '.vcf';
        await td.api().contact.save(
            new ContactSaveRequest(new StorageFileLocation(td.storage(), td.folder(), contactFile), contact, 'VCard'));
        const exists = await td.api().cloudStorage.storage.objectExists(
            new ObjectExistsRequest(td.folder() + '/' + contactFile, td.storage()));
        expect(exists.exists).to.be.ok;
    });

    it('Check contact converter #pipeline', async function () {
        let contactDto = getContactDto();
        let mapi = await td.api().contact.asFile(new ContactAsFileRequest('Msg', contactDto));
        let vcard = await td.api().contact.convert(new ContactConvertRequest(
            'VCard', 'Msg', mapi));
        let vcardString = vcard.toString();
        expect(vcardString).to.include(surname);
        let dto = await td.api().contact.fromFile(new ContactFromFileRequest('VCard', vcard));
        expect(dto.surname).to.be.equal(surname);
    });

    it('Convert model to MapiModel #pipeline', async () => {
        const contactDto = getContactDto();
        const mapiContactDto = await td.api().contact.asMapi(contactDto);
        expect(contactDto.surname).to.be.eq(mapiContactDto.nameInfo.surname);
    });

    function getContactDto(): ContactDto {
        let contactDto = new ContactDto();
        contactDto.surname = surname;
        contactDto.givenName = 'John';
        contactDto.gender = 'Male';
        const emailAddress = new EmailAddress();
        emailAddress.address = 'address@aspose.com'
        contactDto.emailAddresses = [emailAddress];
        contactDto.phoneNumbers = [new PhoneNumber(undefined, '+47234325344')];
        return contactDto;
    }
});