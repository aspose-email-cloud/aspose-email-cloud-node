# ObjectExistsRequest

Request model for StorageApi.objectExists

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**path** | **string**| File or folder path e.g. '/file.ext' or '/folder' |
**storageName** | **string**| Storage name | [optional]
**versionId** | **string**| File version ID | [optional]

## Example
```typescript
let request = Models.ObjectExistsRequest()
    .path('/storage/path/to/folder/or/file.ext')
    .storageName('First Storage')
    .build();
```
