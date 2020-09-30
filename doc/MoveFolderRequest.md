# MoveFolderRequest

Request model for FolderApi.moveFolder

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**srcPath** | **string**| Folder path to move e.g. '/folder' |
**destPath** | **string**| Destination folder path to move to e.g '/dst' |
**srcStorageName** | **string**| Source storage name | [optional]
**destStorageName** | **string**| Destination storage name | [optional]

## Example
```typescript
let request = Models.MoveFolderRequest()
    .srcPath('/storage/path/to/source/folder')
    .destPath('/storage/path/to/destination/folder')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();
```
