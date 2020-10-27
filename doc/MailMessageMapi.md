# MailMessageMapi

Email message represented as MAPI object.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**value** | [**MapiMessageDto**](MapiMessageDto.md) | Email message object.              | [default to undefined]

 Parent class: [MailMessageBase](MailMessageBase.md)


## Example
```typescript
let mailMessageMapi = Models.mailMessageMapi()
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
