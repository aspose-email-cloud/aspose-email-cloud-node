# MapiMessageAsFileRequest

Convert MapiMessage to file request.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string** | Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [default to undefined]
**value** | [**MapiMessageDto**](MapiMessageDto.md) | MAPI message model.              | [default to undefined]


## Example
```typescript
let mapiMessageAsFileRequest = Models.mapiMessageAsFileRequest()
    .format('Msg')
    .value(Models.mapiMessageDto()
        .messageBody('Some body')
        .clientSubmitTime(new Date())
        .deliveryTime(new Date())
        .displayTo('To Address')
        .flags([
            'MsgFlagRead',
            'MsgFlagUnsent',
            'MsgFlagHasAttach'])
        .normalizedSubject('Some subject')
        .senderAddressType('SMTP')
        .senderEmailAddress('from@aspose.com')
        .senderName('From Address')
        .senderSmtpAddress('from@aspose.com')
        .attachments([
            Models.mapiAttachmentDto()
                .name('some-file.txt')
                .dataBase64('U29tZSBmaWxlIHRleHQ=')
                .build()])
        .body('Some body')
        .messageClass('IPM.Note')
        .recipients([
            Models.mapiRecipientDto()
                .emailAddress('to@aspose.com')
                .addressType('SMTP')
                .displayName('To Address')
                .recipientType('MapiTo')
                .build()])
        .subject('Re: Some subject')
        .subjectPrefix('Re: ')
        .build())
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
