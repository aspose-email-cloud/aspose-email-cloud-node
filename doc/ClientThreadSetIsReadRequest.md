# ClientThreadSetIsReadRequest

Mark thread messages as read or unread request.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**isRead** | **boolean** | Message is read flag.              | [default to undefined]
**folder** | **string** | Folder on email server, where thread is stored.              | [optional] [default to undefined]

 Parent class: [ClientThreadBaseRequest](ClientThreadBaseRequest.md)


## Example
```typescript
let clientThreadSetIsReadRequest = Models.clientThreadSetIsReadRequest()
    .isRead(true)
    .folder('INBOX')
    .threadId('5')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
