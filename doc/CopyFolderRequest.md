# CopyFolderRequest

Request model for FolderApi.copyFolder

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**srcPath** | **string**| Source folder path e.g. '/src' |
**destPath** | **string**| Destination folder path e.g. '/dst' |
**srcStorageName** | **string**| Source storage name | [optional]
**destStorageName** | **string**| Destination storage name | [optional]

## Example
```typescript
let request = Models.CopyFolderRequest()
    .srcPath('/storage/path/to/source/folder')
    .destPath('/storage/path/to/destination/folder')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();
```
