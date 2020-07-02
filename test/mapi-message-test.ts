import * as requests from '../src/model/requests/requests';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import uuidv4 from "uuid/v4";


describe('MAPI contact tests', function () {
    let td = suiteBase(this);

    it('Convert MAPI model to EmailDto #pipeline', async () => {
        const mapiMessageDto = getMapiMessageDto();
        const emailDto = await td.api().convertMapiMessageModelToEmailModel(
            new requests.ConvertMapiMessageModelToEmailModelRequest(mapiMessageDto));
        expect(mapiMessageDto.subject).to.be.eq(emailDto.body.subject);
        expect(mapiMessageDto.body).to.be.eq(emailDto.body.body);
    });

    it('Convert MAPI model to file #pipeline', async () => {
        const mapiMessageDto = getMapiMessageDto();
        const emlFile = await td.api().convertMapiMessageModelToFile(
            new requests.ConvertMapiMessageModelToFileRequest('Eml', mapiMessageDto));
        const emlString = emlFile.body.toString();
        expect(emlString).to.contain(mapiMessageDto.subject);
        const mapiMessageDtoConverted = await td.api().getEmailFileAsMapiModel(
            new requests.GetEmailFileAsMapiModelRequest('Eml', emlFile.body));
        expect(mapiMessageDto.subject).to.be.eq(mapiMessageDtoConverted.body.subject);
        //Subject is also available as MapiPropertyDto:
        const subjectProperty = mapiMessageDtoConverted.body.properties
            //There are different Property descriptors supported.
            //Some properties are known to the service:
            .filter(i => i.descriptor.discriminator == 'MapiKnownPropertyDescriptor')
            //So we can find them by name:
            .find(i => (i.descriptor as models.MapiKnownPropertyDescriptor).name == 'TagSubject');
        //Subject is a string, so it is stored in MapiStringPropertyDto:
        const subjectString = (subjectProperty as models.MapiStringPropertyDto).value;
        expect(mapiMessageDto.subject).to.be.eq(subjectString);
    });

    it('Mapi message storage test #pipeline', async () => {
        const mapiMessageDto = getMapiMessageDto();
        const fileName = uuidv4() + '.msg';
        await td.api().saveMapiMessageModel(
            new requests.SaveMapiMessageModelRequest('Msg', fileName,
                new models.StorageModelRqOfMapiMessageDto(mapiMessageDto, td.getStorageFolderLocation())));
        const mapiMessageFromStorage = await td.api().getMapiMessageModel(
            new requests.GetMapiMessageModelRequest('Msg', fileName, td.folder(), td.storage()));
        expect(mapiMessageDto.subject).to.be.eq(mapiMessageFromStorage.body.subject);
    });

    function getMapiMessageDto(): models.MapiMessageDto {
        const mapiMessageDto = new models.MapiMessageDto();
        mapiMessageDto.clientSubmitTime = td.getDate();
        mapiMessageDto.senderAddressType = "SMTP";
        mapiMessageDto.senderEmailAddress = "from@aspose.com";
        mapiMessageDto.senderSmtpAddress = "from@aspose.com";
        mapiMessageDto.messageFormat = "Ascii";
        mapiMessageDto.senderName = "From Address";
        mapiMessageDto.messageBody = "Some body";
        mapiMessageDto.displayTo = "To Address";
        mapiMessageDto.deliveryTime = td.getDate();
        mapiMessageDto.normalizedSubject = "Some subject";
        mapiMessageDto.flags = ["MsgFlagRead", "MsgFlagUnsent", "MsgFlagHasAttach"];
        const recipientDto = new models.MapiRecipientDto();
        recipientDto.addressType = "SMTP";
        recipientDto.displayName = "To address";
        recipientDto.emailAddress = "to@aspose.com";
        recipientDto.recipientType = "MapiTo";
        mapiMessageDto.recipients = [recipientDto];
        const attachment = new models.MapiAttachmentDto();
        attachment.dataBase64 = Buffer.from("Some file text").toString('base64');
        attachment.name = "some-file.txt";
        mapiMessageDto.attachments = [attachment];
        mapiMessageDto.subjectPrefix = "Re: ";
        mapiMessageDto.messageClass = "IPM.Note";
        mapiMessageDto.body = "Some body";
        mapiMessageDto.subject = "Re: Some subject";
        mapiMessageDto.bodyType = "PlainText";
        return mapiMessageDto;
    }
});