# StorageFileLocation

A storage file location information             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fileName** | **string** | A file name in storage              | [default to undefined]

 Parent class: [StorageFolderLocation](StorageFolderLocation.md)


## Example
```typescript
let storageFileLocation = Models.storageFileLocation()
    .fileName('fileOnStorage.txt')
    .storage('First Storage')
    .folderPath('file/location/folder/on/storage')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
