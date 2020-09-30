# MoveFileRequest

Request model for FileApi.moveFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**srcPath** | **string**| Source file path e.g. '/src.ext' |
**destPath** | **string**| Destination file path e.g. '/dest.ext' |
**srcStorageName** | **string**| Source storage name | [optional]
**destStorageName** | **string**| Destination storage name | [optional]
**versionId** | **string**| File version ID to move | [optional]

## Example
```typescript
let request = Models.MoveFileRequest()
    .srcPath('/storage/path/to/source/file.ext')
    .destPath('/storage/path/to/destination/file.ext')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();
```
