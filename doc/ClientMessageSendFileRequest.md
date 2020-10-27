# ClientMessageSendFileRequest

Request model for ClientMessageApi.sendFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**account** | **string**| Email account |
**file** | **byte[]**| File to send |
**storage** | **string**| Storage name where account file located. | [optional]
**accountStorageFolder** | **string**| Folder in storage where account file located. | [optional]
**format** | **string**| Email file format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]

## Example
```typescript
let request = Models.ClientMessageSendFileRequest()
    .account('email.multi.account')
    .file(fs.readFileSync('/path/to/message.eml'))
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .format('Eml')
    .build();
```
