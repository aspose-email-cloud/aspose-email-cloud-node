# EmailThread

Email messages thread             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**id** | **string** | Thread identifier              | [optional] [default to undefined]
**subject** | **string** | Thread subject              | [optional] [default to undefined]
**messages** | [**Array&lt;EmailDto&gt;**](EmailDto.md) | List of messages in thread              | [optional] [default to undefined]
**folder** | **string** | Thread folder location              | [optional] [default to undefined]


## Example
```typescript
let emailThread = Models.emailThread()
    .id('5')
    .subject('Some subject')
    .messages([
        Models.emailDto()
            .attachments([
                Models.attachment()
                    .name('some-file.txt')
                    .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                    .build()])
            .body('Some body')
            .bodyType('Html')
            .date(new Date())
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
            .build(),
        Models.emailDto()
            .attachments([
                Models.attachment()
                    .name('some-file.txt')
                    .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                    .build()])
            .body('Other body')
            .bodyType('Html')
            .date(new Date())
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
            .build()])
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
