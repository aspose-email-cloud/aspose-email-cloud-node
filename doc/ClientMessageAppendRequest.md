# ClientMessageAppendRequest

Email client append message request.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**folder** | **string** | Path to folder on email server to append message to.              | [optional] [default to undefined]
**message** | [**MailMessageBase**](MailMessageBase.md) | Message to append.              | [default to undefined]
**markAsSent** | **boolean** | Determines that appended message should be market as sent or not.              | [default to undefined]

 Parent class: [ClientAccountBaseRequest](ClientAccountBaseRequest.md)


## Example
```typescript
let clientMessageAppendRequest = Models.clientMessageAppendRequest()
    .folder('INBOX/SubFolder')
    .message(Models.mailMessageDto()
        .value(Models.emailDto()
            .attachments([
                Models.attachment()
                    .name('some-file.txt')
                    .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                    .build()])
            .body('Some body')
            .bodyType('Html')
            .deliveryNotificationOptions([
                'OnSuccess',
                'Delay'])
            .from(Models.mailAddress()
                .displayName('From Address')
                .address('from@aspose.com')
                .build())
            .htmlBody('<b>Some body</b>')
            .isBodyHtml(true)
            .isDraft(true)
            .subject('Re: Some subject')
            .to([
                Models.mailAddress()
                    .displayName('To Address')
                    .address('to@aspose.com')
                    .build()])
            .build())
        .build())
    .markAsSent(true)
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
