# FilesList

Files list

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**value** | [**Array&lt;StorageFile&gt;**](StorageFile.md) | Files and folders contained by folder StorageFile. | [optional] [default to undefined]


## Example
```typescript
let filesList = Models.filesList()
    .value([
        Models.storageFile()
            .name('file.ext')
            .modifiedDate(new Date())
            .size(1024)
            .path('/path/to/file/on/storage')
            .build()])
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
