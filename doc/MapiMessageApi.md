# MapiMessageApi (EmailCloud.mapi.message)

MAPI message operations

<a name="asEmailDto"></a>
## **asEmailDto**

Description: Converts MAPI message model to EmailDto model             

Returns: EmailDto model

Method call example:
```typescript
let result = await api.mapi.message.asEmailDto(mapiMessage);
```

### Parameter: mapiMessage

Description: MAPI message model to convert

See parameter model documentation at [MapiMessageDto](MapiMessageDto.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let mapiMessage = Models.mapiMessageDto()
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
    .build();
```

</details>

### Result

Description: EmailDto model

Return type: Promise< [EmailDto](EmailDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.emailDto()
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
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let mapiMessage = Models.mapiMessageDto()
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
    .build();

// Call method:
let result = await api.mapi.message.asEmailDto(mapiMessage);

// Result example:
result = Models.emailDto()
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
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="asFile"></a>
## **asFile**

Description: Converts MAPI message model to specified format and returns as file.             

Returns: File stream in specified format.

Method call example:
```typescript
let result = await api.mapi.message.asFile(request);
```

### Parameter: request

Description: MAPI message model to convert.

See parameter model documentation at [MapiMessageAsFileRequest](MapiMessageAsFileRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.mapiMessageAsFileRequest()
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

</details>

### Result

Description: File stream in specified format.

Return type: Promise< Buffer >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.mapiMessageAsFileRequest()
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

// Call method:
let result = await api.mapi.message.asFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="fromFile"></a>
## **fromFile**

Description: Converts email file to a MAPI model representation             

Returns: MAPI model

Method call example:
```typescript
let result = await api.mapi.message.fromFile(request);
```

### Parameter: request

Description: fromFile method request.

See parameter model documentation at [MapiMessageFromFileRequest](MapiMessageFromFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.MapiMessageFromFileRequest()
    .format('Msg')
    .file(fs.readFileSync('/path/to/message.msg'))
    .build();
```

</details>

### Result

Description: MAPI model

Return type: Promise< [MapiMessageDto](MapiMessageDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.mapiMessageDto()
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
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.MapiMessageFromFileRequest()
    .format('Msg')
    .file(fs.readFileSync('/path/to/message.msg'))
    .build();

// Call method:
let result = await api.mapi.message.fromFile(request);

// Result example:
result = Models.mapiMessageDto()
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
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="get"></a>
## **get**

Description: Get MAPI message document.             

Returns: MAPI message document.

Method call example:
```typescript
let result = await api.mapi.message.get(request);
```

### Parameter: request

Description: get method request.

See parameter model documentation at [MapiMessageGetRequest](MapiMessageGetRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.MapiMessageGetRequest()
    .format('Eml')
    .fileName('email.eml')
    .folder('folder/on/storage')
    .storage('First Storage')
    .build();
```

</details>

### Result

Description: MAPI message document.

Return type: Promise< [MapiMessageDto](MapiMessageDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.mapiMessageDto()
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
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.MapiMessageGetRequest()
    .format('Eml')
    .fileName('email.eml')
    .folder('folder/on/storage')
    .storage('First Storage')
    .build();

// Call method:
let result = await api.mapi.message.get(request);

// Result example:
result = Models.mapiMessageDto()
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
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="save"></a>
## **save**

Description: Save MAPI message to storage.             

Method call example:
```typescript
await api.mapi.message.save(request);
```

### Parameter: request

Description: Message create/update request.

See parameter model documentation at [MapiMessageSaveRequest](MapiMessageSaveRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.mapiMessageSaveRequest()
    .format('Msg')
    .storageFile(Models.storageFileLocation()
        .fileName('message.msg')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
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

</details>

### Result

Return type: Promise< any >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.mapiMessageSaveRequest()
    .format('Msg')
    .storageFile(Models.storageFileLocation()
        .fileName('message.msg')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
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

// Call method:
await api.mapi.message.save(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

