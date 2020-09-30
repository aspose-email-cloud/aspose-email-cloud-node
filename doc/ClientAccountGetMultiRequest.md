# ClientAccountGetMultiRequest

Request model for ClientAccountApi.getMulti

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fileName** | **string**| File name on storage |
**folder** | **string**| Folder on storage | [optional]
**storage** | **string**| Storage name | [optional]

## Example
```typescript
let request = Models.ClientAccountGetMultiRequest()
    .fileName('email.multi.account')
    .folder('email/account/location/on/storage')
    .storage('First Storage')
    .build();
```
