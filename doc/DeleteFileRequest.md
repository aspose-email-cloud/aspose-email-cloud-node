# DeleteFileRequest

Request model for FileApi.deleteFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**path** | **string**| File path e.g. '/folder/file.ext' |
**storageName** | **string**| Storage name | [optional]
**versionId** | **string**| File version ID to delete | [optional]

## Example
```typescript
let request = Models.DeleteFileRequest()
    .path('/storage/path/to/file.ext')
    .storageName('First Storage')
    .build();
```
