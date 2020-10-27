# ClientMessageMoveRequest

Email client move message request.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**sourceFolder** | **string** | Folder to move message from.              | [optional] [default to undefined]
**destinationFolder** | **string** | Folder to move message to.              | [default to undefined]

 Parent class: [ClientMessageBaseRequest](ClientMessageBaseRequest.md)


## Example
```typescript
let clientMessageMoveRequest = Models.clientMessageMoveRequest()
    .sourceFolder('INBOX')
    .destinationFolder('INBOX/SubFolder')
    .messageId('5')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
