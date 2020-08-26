# FileApi

                    
<a name="copyFile"></a>
# **copyFile**
```typescript
public async copyFile(request: CopyFileRequest): Promise< any >
```



### Request Parameters
```typescript
new CopyFile(
    srcPath,
    destPath,
    srcStorageName=srcStorageName,
    destStorageName=destStorageName,
    versionId=versionId)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **srcPath** | **string**|  |
 **destPath** | **string**|  |
 **srcStorageName** | **string**|  | [optional]
 **destStorageName** | **string**|  | [optional]
 **versionId** | **string**|  | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="deleteFile"></a>
# **deleteFile**
```typescript
public async deleteFile(request: DeleteFileRequest): Promise< any >
```



### Request Parameters
```typescript
new DeleteFile(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**|  |
 **storageName** | **string**|  | [optional]
 **versionId** | **string**|  | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="downloadFile"></a>
# **downloadFile**
```typescript
public async downloadFile(request: DownloadFileRequest): Promise< Buffer >
```



### Request Parameters
```typescript
new DownloadFile(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**|  |
 **storageName** | **string**|  | [optional]
 **versionId** | **string**|  | [optional]

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="moveFile"></a>
# **moveFile**
```typescript
public async moveFile(request: MoveFileRequest): Promise< any >
```



### Request Parameters
```typescript
new MoveFile(
    srcPath,
    destPath,
    srcStorageName=srcStorageName,
    destStorageName=destStorageName,
    versionId=versionId)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **srcPath** | **string**|  |
 **destPath** | **string**|  |
 **srcStorageName** | **string**|  | [optional]
 **destStorageName** | **string**|  | [optional]
 **versionId** | **string**|  | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="uploadFile"></a>
# **uploadFile**
```typescript
public async uploadFile(request: UploadFileRequest): Promise< FilesUploadResult >
```



### Request Parameters
```typescript
new UploadFile(
    path,
    file,
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**|  |
 **file** | **byte[]**| File to upload |
 **storageName** | **string**|  | [optional]

### Return type

Promise< [FilesUploadResult](FilesUploadResult.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
