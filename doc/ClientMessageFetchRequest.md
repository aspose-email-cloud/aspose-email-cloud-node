# ClientMessageFetchRequest

Request model for ClientMessageApi.fetch

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**messageId** | **string**| Message identifier |
**account** | **string**| Email account |
**folder** | **string**| Account folder to fetch from (should be specified for some protocols such as IMAP)              | [optional]
**storage** | **string**| Storage name where account file located. | [optional]
**accountStorageFolder** | **string**| Folder in storage where account file located. | [optional]
**type** | **string**| MailMessageBase type. Using this property you can fetch message in different formats (as EmailDto, MapiMessageDto or a file represented as Base64 string).              Enum, available values: Dto, Mapi, Base64 | [optional] [default to 0]
**format** | **string**| Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]

## Example
```typescript
let request = Models.ClientMessageFetchRequest()
    .messageId('<put your message identifier here>')
    .account('email.multi.account')
    .folder('INBOX')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .type('Dto')
    .format('Eml')
    .build();
```
