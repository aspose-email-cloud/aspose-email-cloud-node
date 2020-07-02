import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";

describe('Contact tests', function() {
    let td = suiteBase(this);

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
        const surname = 'Cane';
        let contactDto = new models.ContactDto();
        contactDto.surname = surname;
        contactDto.givenName = 'John';
        contactDto.gender = 'Male';
        contactDto.emailAddresses = [new models.EmailAddress(undefined, undefined, undefined, undefined,
            'address@aspose.com')];
        contactDto.phoneNumbers = [new models.PhoneNumber(undefined, '+47234325344')];
        let mapi = await td.api().convertContactModelToFile(new requests.ConvertContactModelToFileRequest(
            'Msg', contactDto));
        let vcard = await td.api().convertContact(new requests.ConvertContactRequest(
            'VCard', 'Msg', mapi.body));
        let vcardString = vcard.body.toString();
        expect(vcardString).to.include(surname);
        let dto = await td.api().getContactFileAsModel(new requests.GetContactFileAsModelRequest('VCard', vcard.body));
        expect(dto.body.surname).to.be.equal(surname);
    });
});