import * as requests from '../src/model/requests/requests';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import uuidv4 from "uuid/v4";


describe('MAPI contact tests', function() {
    let td = suiteBase(this);

    it('Convert MAPI model to ContactDto #pipeline', async () => {
        const mapiContactDto = getMapiContactDto();
        const contactDto = await td.api().convertMapiContactModelToContactModel(
            new requests.ConvertMapiContactModelToContactModelRequest(mapiContactDto));
        expect(mapiContactDto.nameInfo.givenName).to.be.eq(contactDto.body.givenName);
        expect(mapiContactDto.nameInfo.surname).to.be.eq(contactDto.body.surname);
    });

    it('Convert MAPI model to file #pipeline', async () => {
        const mapiContactDto = getMapiContactDto();
        const vcardFile = await td.api().convertMapiContactModelToFile(
            new requests.ConvertMapiContactModelToFileRequest('VCard', mapiContactDto));
        const vcardString = vcardFile.body.toString();
        expect(vcardString).to.contain(mapiContactDto.nameInfo.givenName);
        const mapiContactDtoConverted = await td.api().getContactFileAsMapiModel(
            new requests.GetContactFileAsMapiModelRequest('VCard', vcardFile.body));
        expect(mapiContactDto.nameInfo.surname).to.be.eq(mapiContactDtoConverted.body.nameInfo.surname);
    });

    it('Mapi contact storage test #pipeline', async () => {
        const mapiContactDto = getMapiContactDto();
        const fileName = uuidv4() + '.msg';
        await td.api().saveMapiContactModel(
            new requests.SaveMapiContactModelRequest('Msg', fileName,
                new models.StorageModelRqOfMapiContactDto(mapiContactDto, td.getStorageFolderLocation())));
        const mapiContactFromStorage = await td.api().getMapiContactModel(
            new requests.GetMapiContactModelRequest('Msg', fileName, td.folder(), td.storage()));
        expect(mapiContactDto.nameInfo.surname).to.be.eq(mapiContactFromStorage.body.nameInfo.surname);
    });

    function getMapiContactDto(): models.MapiContactDto {
        const mapiContactDto = new models.MapiContactDto();
        mapiContactDto.electronicAddresses = new models.MapiContactElectronicAddressPropertySetDto();
        mapiContactDto.electronicAddresses.defaultEmailAddress = new models.MapiContactElectronicAddressDto();
        mapiContactDto.electronicAddresses.defaultEmailAddress.emailAddress = "email@aspose.com";
        mapiContactDto.nameInfo = new models.MapiContactNamePropertySetDto();
        mapiContactDto.nameInfo.givenName = "Alex";
        mapiContactDto.nameInfo.surname = "Thomas";
        mapiContactDto.personalInfo = new models.MapiContactPersonalInfoPropertySetDto();
        mapiContactDto.personalInfo.businessHomePage = "www.aspose.com";
        mapiContactDto.professionalInfo = new models.MapiContactProfessionalPropertySetDto();
        mapiContactDto.professionalInfo.profession = "GENERAL DIRECTOR";
        mapiContactDto.telephones = new models.MapiContactTelephonePropertySetDto();
        mapiContactDto.telephones.primaryTelephoneNumber = "+49 211 4247 21";
        return mapiContactDto;
    }
});