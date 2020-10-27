# ClientThreadGetMessagesRequest

Request model for ClientThreadApi.getMessages

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**threadId** | **string**| Thread identifier |
**account** | **string**| Email account |
**folder** | **string**| Specifies account folder to get thread from              | [optional]
**storage** | **string**| Storage name where account file located | [optional]
**accountStorageFolder** | **string**| Folder in storage where account file located | [optional]

## Example
```typescript
let request = Models.ClientThreadGetMessagesRequest()
    .threadId('5')
    .account('email.account')
    .folder('INBOX')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .build();
```
