# AiBcrImageStorageFile

Image from storage for recognition             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**file** | [**StorageFileLocation**](StorageFileLocation.md) | Image location              | [default to undefined]

 Parent class: [AiBcrImage](AiBcrImage.md)


## Example
```typescript
let aiBcrImageStorageFile = Models.aiBcrImageStorageFile()
    .file(Models.storageFileLocation()
        .fileName('VCardScanImage.jpg')
        .storage('First Storage')
        .folderPath('image/location/on/storage')
        .build())
    .isSingle(true)
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
