import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import {EmailAsFileRequest, EmailConvertRequest, EmailDto, EmailFromFileRequest, MailAddress} from "..";


describe('Email tests', function () {
    let td = suiteBase(this);
    const from = 'from@aspose.com';

    it('Check email converter #pipeline', async () => {
        let emailDto = getEmailDto();
        let mapi = await td.api().email.asFile(new EmailAsFileRequest('Msg', emailDto));
        let eml = await td.api().email.convert(new EmailConvertRequest('Msg', 'Eml', mapi));
        let emlString = eml.toString();
        expect(emlString).to.include(from);
        let dto = await td.api().email.fromFile(new EmailFromFileRequest('Eml', eml));
        expect(dto.from.address).to.be.equal(from);
    });

    it('Convert model to MapiModel #pipeline', async () => {
        const emailDto = getEmailDto();
        const mapiMessageDto = await td.api().email.asMapi(emailDto);
        expect(emailDto.subject).to.be.eq(mapiMessageDto.subject);
    });

    function getEmailDto(): EmailDto {
        let emailDto = new EmailDto();
        emailDto.from = new MailAddress(undefined, from);
        emailDto.to = [new MailAddress(undefined, 'to@aspose.com')];
        emailDto.subject = 'Some subject';
        emailDto.body = 'Some body';
        emailDto.date = new Date();
        return emailDto;
    }
});