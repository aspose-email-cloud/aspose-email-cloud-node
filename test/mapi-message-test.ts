import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import uuidv4 from "uuid/v4";
import {
    MapiAttachmentDto,
    MapiKnownPropertyDescriptor,
    MapiMessageAsFileRequest,
    MapiMessageDto,
    MapiMessageFromFileRequest,
    MapiMessageGetRequest,
    MapiMessageSaveRequest,
    MapiRecipientDto,
    MapiStringPropertyDto,
    StorageFileLocation
} from "..";


describe('MAPI contact tests', function () {
    let td = suiteBase(this);

    it('Convert MAPI model to EmailDto #pipeline', async () => {
        const mapiMessageDto = getMapiMessageDto();
        const emailDto = await td.api().mapi.message.asEmailDto(mapiMessageDto);
        expect(mapiMessageDto.subject).to.be.eq(emailDto.subject);
        expect(mapiMessageDto.body).to.be.eq(emailDto.body);
    });

    it('Convert MAPI model to file #pipeline', async () => {
        const mapiMessageDto = getMapiMessageDto();
        const emlFile = await td.api().mapi.message.asFile(new MapiMessageAsFileRequest('Eml', mapiMessageDto));
        const emlString = emlFile.toString();
        expect(emlString).to.contain(mapiMessageDto.subject);
        const mapiMessageDtoConverted = await td.api().mapi.message.fromFile(
            new MapiMessageFromFileRequest('Eml', emlFile));
        expect(mapiMessageDto.subject).to.be.eq(mapiMessageDtoConverted.subject);
        //Subject is also available as MapiPropertyDto:
        const subjectProperty = mapiMessageDtoConverted.properties
            //There are different Property descriptors supported.
            //Some properties are known to the service:
            .filter(i => i.descriptor.discriminator == 'MapiKnownPropertyDescriptor')
            //So we can find them by name:
            .find(i => (i.descriptor as MapiKnownPropertyDescriptor).name == 'TagSubject');
        //Subject is a string, so it is stored in MapiStringPropertyDto:
        const subjectString = (subjectProperty as MapiStringPropertyDto).value;
        expect(mapiMessageDto.subject).to.be.eq(subjectString);
    });

    it('Mapi message storage test #pipeline', async () => {
        const mapiMessageDto = getMapiMessageDto();
        const fileName = uuidv4() + '.msg';
        await td.api().mapi.message.save(
            new MapiMessageSaveRequest(new StorageFileLocation(td.storage(), td.folder(), fileName), mapiMessageDto,
                'Msg'));
        const mapiMessageFromStorage = await td.api().mapi.message.get(
            new MapiMessageGetRequest('Msg', fileName, td.folder(), td.storage()));
        expect(mapiMessageDto.subject).to.be.eq(mapiMessageFromStorage.subject);
    });

    function getMapiMessageDto(): MapiMessageDto {
        const mapiMessageDto = new MapiMessageDto();
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
        const recipientDto = new MapiRecipientDto();
        recipientDto.addressType = "SMTP";
        recipientDto.displayName = "To address";
        recipientDto.emailAddress = "to@aspose.com";
        recipientDto.recipientType = "MapiTo";
        mapiMessageDto.recipients = [recipientDto];
        const attachment = new MapiAttachmentDto();
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