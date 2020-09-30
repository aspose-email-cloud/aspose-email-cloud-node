# DeleteFolderRequest

Request model for FolderApi.deleteFolder

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**path** | **string**| Folder path e.g. '/folder' |
**storageName** | **string**| Storage name | [optional]
**recursive** | **boolean**| Enable to delete folders, subfolders and files | [optional] [default to false]

## Example
```typescript
let request = Models.DeleteFolderRequest()
    .path('/storage/path/to/folder')
    .storageName('First Storage')
    .recursive(true)
    .build();
```
