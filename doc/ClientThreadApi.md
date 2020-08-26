# ClientThreadApi

                    
<a name="delete"></a>
# **delete**
```typescript
public async delete(request: model.ClientThreadDeleteRequest): Promise< any >
```

Delete thread by id. All messages from thread will also be deleted.             

### request Parameter

See parameter model documentation at [ClientThreadDeleteRequest](ClientThreadDeleteRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="getList"></a>
# **getList**
```typescript
public async getList(request: ClientThreadGetListRequest): Promise< EmailThreadList >
```

Get message threads from folder. All messages are partly fetched (without email body and some other fields).             

### Request Parameters
```typescript
new ClientThreadGetList(
    folder,
    account,
    storage=storage,
    accountStorageFolder=accountStorageFolder,
    updateFolderCache=updateFolderCache,
    messagesCacheLimit=messagesCacheLimit)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **folder** | **string**| A folder in email account.              |
 **account** | **string**| Email account |
 **storage** | **string**| Storage name where account file located | [optional]
 **accountStorageFolder** | **string**| Folder in storage where account file located | [optional]
 **updateFolderCache** | **boolean**| This parameter is only used in accounts with CacheFile. If true - get new messages and update threads cache for given folder. If false, get only threads from cache without any calls to an email account              | [optional] [default to true]
 **messagesCacheLimit** | **number**| Limit messages cache size if CacheFile is used. Ignored in accounts without limits support              | [optional] [default to 200]

### Return type

Promise< [EmailThreadList](EmailThreadList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getMessages"></a>
# **getMessages**
```typescript
public async getMessages(request: ClientThreadGetMessagesRequest): Promise< EmailList >
```

Get messages from thread by id. All messages are fully fetched. For accounts with CacheFile only cached messages will be returned.             

### Request Parameters
```typescript
new ClientThreadGetMessages(
    threadId,
    account,
    folder=folder,
    storage=storage,
    accountStorageFolder=accountStorageFolder)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **threadId** | **string**| Thread identifier |
 **account** | **string**| Email account |
 **folder** | **string**| Specifies account folder to get thread from              | [optional]
 **storage** | **string**| Storage name where account file located | [optional]
 **accountStorageFolder** | **string**| Folder in storage where account file located | [optional]

### Return type

Promise< [EmailList](EmailList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="move"></a>
# **move**
```typescript
public async move(request: model.ClientThreadMoveRequest): Promise< any >
```

Move thread to another folder.             

### request Parameter

See parameter model documentation at [ClientThreadMoveRequest](ClientThreadMoveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="setIsRead"></a>
# **setIsRead**
```typescript
public async setIsRead(request: model.ClientThreadSetIsReadRequest): Promise< any >
```

Mark all messages in thread as read or unread.             

### request Parameter

See parameter model documentation at [ClientThreadSetIsReadRequest](ClientThreadSetIsReadRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

