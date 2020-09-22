import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import uuidv4 from "uuid/v4";
import {
    MapiContactAsFileRequest,
    MapiContactDto,
    MapiContactFromFileRequest,
    MapiContactGetRequest,
    MapiContactSaveRequest,
    Models,
    StorageFileLocation
} from "..";


describe('MAPI contact tests', function () {
    let td = suiteBase(this);

    it('Convert MAPI model to ContactDto #pipeline', async () => {
        const mapiContactDto = getMapiContactDto();
        const contactDto = await td.api().mapi.contact.asContactDto(mapiContactDto);
        expect(mapiContactDto.nameInfo.givenName).to.be.eq(contactDto.givenName);
        expect(mapiContactDto.nameInfo.surname).to.be.eq(contactDto.surname);
    });

    it('Convert MAPI model to file #pipeline', async () => {
        const mapiContactDto = getMapiContactDto();
        const vcardFile = await td.api().mapi.contact.asFile(new MapiContactAsFileRequest('VCard', mapiContactDto));
        const vcardString = vcardFile.toString();
        expect(vcardString).to.contain(mapiContactDto.nameInfo.givenName);
        const mapiContactDtoConverted = await td.api().mapi.contact.fromFile(
            new MapiContactFromFileRequest('VCard', vcardFile));
        expect(mapiContactDto.nameInfo.surname).to.be.eq(mapiContactDtoConverted.nameInfo.surname);
    });

    it('Mapi contact storage test #pipeline', async () => {
        const mapiContactDto = getMapiContactDto();
        const fileName = uuidv4() + '.msg';
        await td.api().mapi.contact.save(
            new MapiContactSaveRequest(new StorageFileLocation(td.storage(), td.folder(), fileName), mapiContactDto,
                'Msg'));
        const mapiContactFromStorage = await td.api().mapi.contact.get(
            new MapiContactGetRequest('Msg', fileName, td.folder(), td.storage()));
        expect(mapiContactDto.nameInfo.surname).to.be.eq(mapiContactFromStorage.nameInfo.surname);
    });

    function getMapiContactDto(): MapiContactDto {
        return Models.mapiContactDto()
            .electronicAddresses(Models.mapiContactElectronicAddressPropertySetDto()
                .defaultEmailAddress(Models.mapiContactElectronicAddressDto()
                    .emailAddress('email@aspose.com')
                    .build())
                .build())
            .nameInfo(Models.mapiContactNamePropertySetDto()
                .givenName('Alex')
                .surname('Thomas')
                .build())
            .personalInfo(Models.mapiContactPersonalInfoPropertySetDto()
                .businessHomePage('www.aspose.com')
                .build())
            .professionalInfo(Models.mapiContactProfessionalPropertySetDto()
                .profession('GENERAL DIRECTOR')
                .build())
            .telephones(Models.mapiContactTelephonePropertySetDto()
                .primaryTelephoneNumber('+49 211 4247 21')
                .build())
            .build();
    }
});