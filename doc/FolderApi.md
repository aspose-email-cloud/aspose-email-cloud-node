# FolderApi

                    
<a name="copyFolder"></a>
# **copyFolder**
```typescript
public async copyFolder(request: CopyFolderRequest): Promise< any >
```



### Request Parameters
```typescript
new CopyFolder(
    srcPath,
    destPath,
    srcStorageName=srcStorageName,
    destStorageName=destStorageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **srcPath** | **string**|  |
 **destPath** | **string**|  |
 **srcStorageName** | **string**|  | [optional]
 **destStorageName** | **string**|  | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="createFolder"></a>
# **createFolder**
```typescript
public async createFolder(request: CreateFolderRequest): Promise< any >
```



### Request Parameters
```typescript
new CreateFolder(
    path,
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**|  |
 **storageName** | **string**|  | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="deleteFolder"></a>
# **deleteFolder**
```typescript
public async deleteFolder(request: DeleteFolderRequest): Promise< any >
```



### Request Parameters
```typescript
new DeleteFolder(
    path,
    storageName=storageName,
    recursive=recursive)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**|  |
 **storageName** | **string**|  | [optional]
 **recursive** | **boolean**|  | [optional] [default to false]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getFilesList"></a>
# **getFilesList**
```typescript
public async getFilesList(request: GetFilesListRequest): Promise< FilesList >
```



### Request Parameters
```typescript
new GetFilesList(
    path,
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**|  |
 **storageName** | **string**|  | [optional]

### Return type

Promise< [FilesList](FilesList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="moveFolder"></a>
# **moveFolder**
```typescript
public async moveFolder(request: MoveFolderRequest): Promise< any >
```



### Request Parameters
```typescript
new MoveFolder(
    srcPath,
    destPath,
    srcStorageName=srcStorageName,
    destStorageName=destStorageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **srcPath** | **string**|  |
 **destPath** | **string**|  |
 **srcStorageName** | **string**|  | [optional]
 **destStorageName** | **string**|  | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
