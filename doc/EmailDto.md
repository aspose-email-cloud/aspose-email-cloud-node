# EmailDto

Email message representation.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**alternateViews** | [**Array&lt;AlternateView&gt;**](AlternateView.md) | Collection of alternate views of message.              | [optional] [default to undefined]
**attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) | Email message attachments.              | [optional] [default to undefined]
**bcc** | [**Array&lt;MailAddress&gt;**](MailAddress.md) | BCC recipients.              | [optional] [default to undefined]
**body** | **string** | Email message body as plain text.              | [optional] [default to undefined]
**bodyEncoding** | **string** | Body encoding.              | [optional] [default to undefined]
**bodyType** | **string** | The content type of message body. Enum, available values: PlainText, Html, Rtf | [default to undefined]
**cc** | [**Array&lt;MailAddress&gt;**](MailAddress.md) | CC recipients.              | [optional] [default to undefined]
**date** | **Date** | Message date.              | [default to undefined]
**deliveryNotificationOptions** | **Array&lt;string&gt;** | Delivery notifications. Items: Email delivery notification options. Enum, available values: Delay, Never, None, OnFailure, OnSuccess | [optional] [default to undefined]
**from** | [**MailAddress**](MailAddress.md) | From address.              | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | Document headers.              | [optional] [default to undefined]
**htmlBody** | **string** | HTML body.              | [optional] [default to undefined]
**htmlBodyText** | **string** | Html body as plain text. Read only.              | [optional] [default to undefined]
**isBodyHtml** | **boolean** | Indicates whether the message body is in Html.              | [default to undefined]
**isDraft** | **boolean** | Indicates whether or not a message has been sent.              | [default to undefined]
**isEncrypted** | **boolean** | Indicates whether the message is encrypted. Read only.              | [default to undefined]
**isSigned** | **boolean** | Indicates whether the message is signed. Read only.              | [default to undefined]
**linkedResources** | [**Array&lt;LinkedResource&gt;**](LinkedResource.md) | Linked resources of message.              | [optional] [default to undefined]
**messageId** | **string** | Message id.              | [optional] [default to undefined]
**originalIsTnef** | **boolean** | Indicates whether original EML message is in TNEF format. Read only.              | [default to undefined]
**preferredTextEncoding** | **string** | Preferred encoding.              | [optional] [default to undefined]
**priority** | **string** | Email priority status. Enum, available values: High, Low, Normal | [default to undefined]
**readReceiptTo** | [**Array&lt;MailAddress&gt;**](MailAddress.md) | Read receipt addresses.              | [optional] [default to undefined]
**replyToList** | [**Array&lt;MailAddress&gt;**](MailAddress.md) | The list of addresses to reply to for the mail message.              | [optional] [default to undefined]
**reversePath** | [**MailAddress**](MailAddress.md) | ReversePath address.              | [optional] [default to undefined]
**sender** | [**MailAddress**](MailAddress.md) | Sender address.              | [optional] [default to undefined]
**sensitivity** | **string** | Specifies the sensitivity of a MailMessage. Enum, available values: None, Normal, Personal, Private, CompanyConfidential | [default to undefined]
**subject** | **string** | Message subject.              | [optional] [default to undefined]
**subjectEncoding** | **string** | Subject encoding.              | [optional] [default to undefined]
**timeZoneOffset** | **number** | Coordinated Universal Time (UTC) offset for the message dates. This property defines the time zone difference, between the local time and UTC represented as count of ticks (10 000 per millisecond).              | [optional] [default to undefined]
**to** | [**Array&lt;MailAddress&gt;**](MailAddress.md) | The address collection that contains the recipients of message.              | [optional] [default to undefined]
**xMailer** | **string** | The X-Mailer the software that created the e-mail message.              | [optional] [default to undefined]


## Example
```typescript
let emailDto = Models.emailDto()
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


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
