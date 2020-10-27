# CopyFileRequest

Request model for FileApi.copyFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**srcPath** | **string**| Source file path e.g. '/folder/file.ext' |
**destPath** | **string**| Destination file path |
**srcStorageName** | **string**| Source storage name | [optional]
**destStorageName** | **string**| Destination storage name | [optional]
**versionId** | **string**| File version ID to copy | [optional]

## Example
```typescript
let request = Models.CopyFileRequest()
    .srcPath('/storage/path/to/source/file.ext')
    .destPath('/storage/path/to/destination/file.ext')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();
```
