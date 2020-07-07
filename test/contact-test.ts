import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";

describe('Contact tests', function() {
    let td = suiteBase(this);
    const surname = 'Cane';

    /**
     * Contact format specified as Enum, but SDK represents it as an advanced type of string constants a string.
     * Test checks that value parsing works properly
     */
    it('Contact format #pipeline', async function () {
        for (const format of ['VCard', 'Msg']) {
            const extension = (format == 'Msg') ? '.msg' : '.vcf';
            const fileName = uuidv4() + extension;
            await td.api().createContact(new requests.CreateContactRequest(
                format as 'VCard' | 'Msg',
                fileName,
                new models.HierarchicalObjectRequest(
                    new models.HierarchicalObject('CONTACT', undefined, []),
                    new models.StorageFolderLocation(td.storage(), td.folder())
                )));
            const exists = await td.api().objectExists(new requests.ObjectExistsRequest(td.folder() + '/' + fileName, td.storage()));
            expect(exists.body.exists).to.be.ok;
        }
    });

    it('Save contact model #pipeline', async function () {
        const contact = getContactDto();

        const contactFile = uuidv4() + '.vcf';
        await td.api().saveContactModel(
            new requests.SaveContactModelRequest(
                'VCard', contactFile, new models.StorageModelRqOfContactDto(
                    contact, new models.StorageFolderLocation(td.storage(), td.folder()))));
        const exists = await td.api().objectExists(
            new requests.ObjectExistsRequest(
                td.folder() + '/' + contactFile, td.storage()));
        expect(exists.body.exists).to.be.ok;
    });

    it('Check contact converter #pipeline', async function () {
        let contactDto = getContactDto();
        let mapi = await td.api().convertContactModelToFile(new requests.ConvertContactModelToFileRequest(
            'Msg', contactDto));
        let vcard = await td.api().convertContact(new requests.ConvertContactRequest(
            'VCard', 'Msg', mapi.body));
        let vcardString = vcard.body.toString();
        expect(vcardString).to.include(surname);
        let dto = await td.api().getContactFileAsModel(new requests.GetContactFileAsModelRequest('VCard', vcard.body));
        expect(dto.body.surname).to.be.equal(surname);
    });

    it('Convert model to MapiModel #pipeline', async () => {
        const contactDto = getContactDto();
        const mapiContactDto = await td.api().convertContactModelToMapiModel(
            new requests.ConvertContactModelToMapiModelRequest(contactDto));
        expect(contactDto.surname).to.be.eq(mapiContactDto.body.nameInfo.surname);
    });

    function getContactDto() {
        let contactDto = new models.ContactDto();
        contactDto.surname = surname;
        contactDto.givenName = 'John';
        contactDto.gender = 'Male';
        const emailAddress = new models.EmailAddress();
        emailAddress.address = 'address@aspose.com'
        contactDto.emailAddresses = [emailAddress];
        contactDto.phoneNumbers = [new models.PhoneNumber(undefined, '+47234325344')];
        return contactDto;
    }
});