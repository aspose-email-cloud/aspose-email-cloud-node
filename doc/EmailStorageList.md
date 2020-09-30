# EmailStorageList

Email models list with corresponding storage locations.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----

 Parent class: [ListResponseOfStorageModelOfEmailDto](ListResponseOfStorageModelOfEmailDto.md)


## Example
```typescript
let emailStorageList = Models.emailStorageList()
    .value([
        Models.emailSaveRequest()
            .storageFile(Models.storageFileLocation()
                .fileName('message.eml')
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
            .build()])
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
