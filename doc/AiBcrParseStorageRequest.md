# AiBcrParseStorageRequest

Parse business card images from Storage request             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**outFolder** | [**StorageFolderLocation**](StorageFolderLocation.md) | Parse output folder location on storage              | [default to undefined]
**images** | [**Array&lt;AiBcrImageStorageFile&gt;**](AiBcrImageStorageFile.md) | Images to parse.              | [default to undefined]
**options** | [**AiBcrOptions**](AiBcrOptions.md) | Recognition options.              | [optional] [default to undefined]


## Example
```typescript
let aiBcrParseStorageRequest = Models.aiBcrParseStorageRequest()
    .outFolder(Models.storageFolderLocation()
        .storage('First Storage')
        .folderPath('VCard/files/produced/by/parser/will/be/placed/here')
        .build())
    .images([
        Models.aiBcrImageStorageFile()
            .file(Models.storageFileLocation()
                .fileName('VCardScanImage.jpg')
                .storage('First Storage')
                .folderPath('image/location/on/storage')
                .build())
            .isSingle(true)
            .build()])
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
