# ClientAccountGetRequest

Request model for ClientAccountApi.get

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fileName** | **string**| File name on storage. |
**folder** | **string**| Folder on storage. | [optional]
**storage** | **string**| Storage name. | [optional]

## Example
```typescript
let request = Models.ClientAccountGetRequest()
    .fileName('email.account')
    .folder('email/account/location/on/storage')
    .storage('First Storage')
    .build();
```
