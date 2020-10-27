# ClientThreadGetListRequest

Request model for ClientThreadApi.getList

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**folder** | **string**| A folder in email account.              |
**account** | **string**| Email account |
**storage** | **string**| Storage name where account file located | [optional]
**accountStorageFolder** | **string**| Folder in storage where account file located | [optional]
**updateFolderCache** | **boolean**| This parameter is only used in accounts with CacheFile. If true - get new messages and update threads cache for given folder. If false, get only threads from cache without any calls to an email account              | [optional] [default to true]
**messagesCacheLimit** | **number**| Limit messages cache size if CacheFile is used. Ignored in accounts without limits support              | [optional] [default to 200]

## Example
```typescript
let request = Models.ClientThreadGetListRequest()
    .folder('INBOX/SubFolder')
    .account('email.account')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .build();
```
