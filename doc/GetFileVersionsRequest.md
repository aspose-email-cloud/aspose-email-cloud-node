# GetFileVersionsRequest

Request model for StorageApi.getFileVersions

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**path** | **string**| File path e.g. '/file.ext' |
**storageName** | **string**| Storage name | [optional]

## Example
```typescript
let request = Models.GetFileVersionsRequest()
    .path('/storage/path/to/file.ext')
    .storageName('First Storage')
    .build();
```
