# ClientFolderApi

                    
<a name="create"></a>
# **create**
```typescript
public async create(request: model.ClientFolderCreateRequest): Promise< any >
```

Create new folder in email account             

### request Parameter

See parameter model documentation at [ClientFolderCreateRequest](ClientFolderCreateRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="delete"></a>
# **delete**
```typescript
public async delete(request: model.ClientFolderDeleteRequest): Promise< any >
```

Delete a folder in email account             

### request Parameter

See parameter model documentation at [ClientFolderDeleteRequest](ClientFolderDeleteRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="getList"></a>
# **getList**
```typescript
public async getList(request: ClientFolderGetListRequest): Promise< MailServerFolderList >
```

Get folders list in email account             

### Request Parameters
```typescript
new ClientFolderGetList(
    account,
    storage=storage,
    accountStorageFolder=accountStorageFolder,
    parentFolder=parentFolder)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **account** | **string**| Email account |
 **storage** | **string**| Storage name where account file located | [optional]
 **accountStorageFolder** | **string**| Folder in storage where account file located | [optional]
 **parentFolder** | **string**| Folder in which subfolders should be listed | [optional]

### Return type

Promise< [MailServerFolderList](MailServerFolderList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
