# GetDiscUsageRequest

Request model for StorageApi.getDiscUsage

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**storageName** | **string**| Storage name | [optional]

## Example
```typescript
let request = Models.GetDiscUsageRequest()
    .storageName('First Storage')
    .build();
```
