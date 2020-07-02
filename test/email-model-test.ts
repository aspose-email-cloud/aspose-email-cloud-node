import * as requests from '../src/model/requests/requests';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";


describe('Email model tests', function() {
    let td = suiteBase(this);
    const from = 'from@aspose.com';

    it('Check email converter #pipeline', async () => {
        let emailDto = getEmailDto();
        let mapi = await td.api().convertEmailModelToFile(new requests.ConvertEmailModelToFileRequest(
            'Msg', emailDto));
        let eml = await td.api().convertEmail(new requests.ConvertEmailRequest(
            'Eml', mapi.body));
        let emlString = eml.body.toString();
        expect(emlString).to.include(from);
        let dto = await td.api().getEmailFileAsModel(new requests.GetEmailFileAsModelRequest(eml.body));
        expect(dto.body.from.address).to.be.equal(from);
    });

    it('Convert model to MapiModel #pipeline', async () => {
        const emailDto = getEmailDto();
        const mapiMessageDto = await td.api().convertEmailModelToMapiModel(
            new requests.ConvertEmailModelToMapiModelRequest(emailDto));
        expect(emailDto.subject).to.be.eq(mapiMessageDto.body.subject);
    });

    function getEmailDto() {
        let emailDto = new models.EmailDto();
        emailDto.from = new models.MailAddress(undefined, from);
        emailDto.to = [new models.MailAddress(undefined, 'to@aspose.com')];
        emailDto.subject = 'Some subject';
        emailDto.body = 'Some body';
        emailDto.date = new Date();
        return emailDto;
    }
});