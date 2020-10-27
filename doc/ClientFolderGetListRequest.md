# ClientFolderGetListRequest

Request model for ClientFolderApi.getList

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**account** | **string**| Email account |
**storage** | **string**| Storage name where account file located | [optional]
**accountStorageFolder** | **string**| Folder in storage where account file located | [optional]
**parentFolder** | **string**| Folder in which subfolders should be listed | [optional]

## Example
```typescript
let request = Models.ClientFolderGetListRequest()
    .account('email.multi.account')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .parentFolder('INBOX')
    .build();
```
