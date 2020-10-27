# ClientMessageSetIsReadRequest

Email client mark message is read/unread request.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**isRead** | **boolean** | Message is read flag.              | [default to undefined]

 Parent class: [ClientMessageBaseRequest](ClientMessageBaseRequest.md)


## Example
```typescript
let clientMessageSetIsReadRequest = Models.clientMessageSetIsReadRequest()
    .isRead(true)
    .messageId('5')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
