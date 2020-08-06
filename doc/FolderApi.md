
# FolderApi

                    
<a name="copyFolder"></a>
# **copyFolder**
```typescript
public async copyFolder(request: CopyFolderRequest): Promise< any >
```

Copy folder

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
 **srcPath** | **string**| Source folder path e.g. &#39;/src&#39; |
 **destPath** | **string**| Destination folder path e.g. &#39;/dst&#39; |
 **srcStorageName** | **string**| Source storage name | [optional]
 **destStorageName** | **string**| Destination storage name | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="createFolder"></a>
# **createFolder**
```typescript
public async createFolder(request: CreateFolderRequest): Promise< any >
```

Create the folder

### Request Parameters
```typescript
new CreateFolder(
    path,
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**| Folder path to create e.g. &#39;folder_1/folder_2/&#39; |
 **storageName** | **string**| Storage name | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="deleteFolder"></a>
# **deleteFolder**
```typescript
public async deleteFolder(request: DeleteFolderRequest): Promise< any >
```

Delete folder

### Request Parameters
```typescript
new DeleteFolder(
    path,
    storageName=storageName,
    recursive=recursive)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**| Folder path e.g. &#39;/folder&#39; |
 **storageName** | **string**| Storage name | [optional]
 **recursive** | **boolean**| Enable to delete folders, subfolders and files | [optional] [default to false]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getFilesList"></a>
# **getFilesList**
```typescript
public async getFilesList(request: GetFilesListRequest): Promise< FilesList >
```

Get all files and folders within a folder

### Request Parameters
```typescript
new GetFilesList(
    path,
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**| Folder path e.g. &#39;/folder&#39; |
 **storageName** | **string**| Storage name | [optional]

### Return type

Promise< [FilesList](FilesList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="moveFolder"></a>
# **moveFolder**
```typescript
public async moveFolder(request: MoveFolderRequest): Promise< any >
```

Move folder

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
 **srcPath** | **string**| Folder path to move e.g. &#39;/folder&#39; |
 **destPath** | **string**| Destination folder path to move to e.g &#39;/dst&#39; |
 **srcStorageName** | **string**| Source storage name | [optional]
 **destStorageName** | **string**| Destination storage name | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
