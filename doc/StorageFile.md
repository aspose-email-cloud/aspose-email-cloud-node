# StorageFile

File or folder information

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**name** | **string** | File or folder name. | [optional] [default to undefined]
**isFolder** | **boolean** | True if it is a folder. | [default to undefined]
**modifiedDate** | **Date** | File or folder last modified DateTime. | [optional] [default to undefined]
**size** | **number** | File or folder size. | [default to undefined]
**path** | **string** | File or folder path. | [optional] [default to undefined]


## Example
```typescript
let storageFile = Models.storageFile()
    .name('file.ext')
    .modifiedDate(new Date())
    .size(4096)
    .path('/storage/path/to')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
