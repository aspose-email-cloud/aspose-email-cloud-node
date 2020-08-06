
# ClientAccountApi

                    
<a name="get"></a>
# **get**
```typescript
public async get(request: ClientAccountGetRequest): Promise< EmailClientAccount >
```

Get email client account from storage.             

### Request Parameters
```typescript
new ClientAccountGet(
    fileName,
    folder=folder,
    storage=storage)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fileName** | **string**| File name on storage. |
 **folder** | **string**| Folder on storage. | [optional]
 **storage** | **string**| Storage name. | [optional]

### Return type

Promise< [EmailClientAccount](EmailClientAccount.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getMulti"></a>
# **getMulti**
```typescript
public async getMulti(request: ClientAccountGetMultiRequest): Promise< EmailClientMultiAccount >
```

Get email client multi account file (*.multi.account). Will respond error if file extension is not \&quot;.multi.account\&quot;.             

### Request Parameters
```typescript
new ClientAccountGetMulti(
    fileName,
    folder=folder,
    storage=storage)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fileName** | **string**| File name on storage |
 **folder** | **string**| Folder on storage | [optional]
 **storage** | **string**| Storage name | [optional]

### Return type

Promise< [EmailClientMultiAccount](EmailClientMultiAccount.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="save"></a>
# **save**
```typescript
public async save(request: model.ClientAccountSaveRequest): Promise< any >
```

Create/update email client account file (*.account) with credentials             

### request Parameter

See parameter model documentation at [ClientAccountSaveRequest](ClientAccountSaveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="saveMulti"></a>
# **saveMulti**
```typescript
public async saveMulti(request: model.ClientAccountSaveMultiRequest): Promise< any >
```

Create email client multi account file (*.multi.account). Will respond error if file extension is not \&quot;.multi.account\&quot;.             

### request Parameter

See parameter model documentation at [ClientAccountSaveMultiRequest](ClientAccountSaveMultiRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

