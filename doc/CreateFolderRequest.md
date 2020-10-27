# CreateFolderRequest

Request model for FolderApi.createFolder

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**path** | **string**| Folder path to create e.g. 'folder_1/folder_2/' |
**storageName** | **string**| Storage name | [optional]

## Example
```typescript
let request = Models.CreateFolderRequest()
    .path('/storage/path/to/new/folder')
    .storageName('First Storage')
    .build();
```
