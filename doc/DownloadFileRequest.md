# DownloadFileRequest

Request model for FileApi.downloadFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**path** | **string**| File path e.g. '/folder/file.ext' |
**storageName** | **string**| Storage name | [optional]
**versionId** | **string**| File version ID to download | [optional]

## Example
```typescript
let request = Models.DownloadFileRequest()
    .path('/storage/path/to/file.ext')
    .storageName('First Storage')
    .build();
```
