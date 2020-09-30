# GetFilesListRequest

Request model for FolderApi.getFilesList

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**path** | **string**| Folder path e.g. '/folder' |
**storageName** | **string**| Storage name | [optional]

## Example
```typescript
let request = Models.GetFilesListRequest()
    .path('/storage/path/to/folder')
    .storageName('First Storage')
    .build();
```
