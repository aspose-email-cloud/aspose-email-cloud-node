# ClientMessageFetchFileRequest

Request model for ClientMessageApi.fetchFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**messageId** | **string**| Message identifier |
**account** | **string**| Email account |
**folder** | **string**| Account folder to fetch from (should be specified for some protocols such as IMAP)              | [optional]
**storage** | **string**| Storage name where account file located. | [optional]
**accountStorageFolder** | **string**| Folder in storage where account file located. | [optional]
**format** | **string**| Fetched message file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]

## Example
```typescript
let request = Models.ClientMessageFetchFileRequest()
    .messageId('<put your message identifier here>')
    .account('email.multi.account')
    .folder('INBOX')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .format('Eml')
    .build();
```
