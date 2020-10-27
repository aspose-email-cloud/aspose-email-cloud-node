# EmailSaveRequest

Email save to storage request             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string** | Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [default to undefined]

 Parent class: [StorageModelOfEmailDto](StorageModelOfEmailDto.md)


## Example
```typescript
let emailSaveRequest = Models.emailSaveRequest()
    .format('Msg')
    .storageFile(Models.storageFileLocation()
        .fileName('email.eml')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
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
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
