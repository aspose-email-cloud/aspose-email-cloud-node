# ClientMessageAppendFileRequest

Request model for ClientMessageApi.appendFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**account** | **string**| Email account. |
**file** | **byte[]**| Message file to append. |
**storage** | **string**| Storage name where account file located. | [optional]
**accountStorageFolder** | **string**| Folder in storage where account file located. | [optional]
**format** | **string**| Email file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]
**folder** | **string**| Path to folder on email server to append message to. | [optional]
**markAsSent** | **boolean**| Determines that appended message should be market as sent or not. | [optional] [default to true]

## Example
```typescript
let request = Models.ClientMessageAppendFileRequest()
    .account('email.multi.account')
    .file(fs.readFileSync('/path/to/message.eml'))
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .format('Eml')
    .folder('INBOX')
    .build();
```
