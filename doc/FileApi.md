
# FileApi

                    
<a name="copyFile"></a>
# **copyFile**
```typescript
public async copyFile(request: CopyFileRequest): Promise< any >
```

Copy file

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
 **srcPath** | **string**| Source file path e.g. &#39;/folder/file.ext&#39; |
 **destPath** | **string**| Destination file path |
 **srcStorageName** | **string**| Source storage name | [optional]
 **destStorageName** | **string**| Destination storage name | [optional]
 **versionId** | **string**| File version ID to copy | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="deleteFile"></a>
# **deleteFile**
```typescript
public async deleteFile(request: DeleteFileRequest): Promise< any >
```

Delete file

### Request Parameters
```typescript
new DeleteFile(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**| File path e.g. &#39;/folder/file.ext&#39; |
 **storageName** | **string**| Storage name | [optional]
 **versionId** | **string**| File version ID to delete | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="downloadFile"></a>
# **downloadFile**
```typescript
public async downloadFile(request: DownloadFileRequest): Promise< Buffer >
```

Download file

### Request Parameters
```typescript
new DownloadFile(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**| File path e.g. &#39;/folder/file.ext&#39; |
 **storageName** | **string**| Storage name | [optional]
 **versionId** | **string**| File version ID to download | [optional]

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="moveFile"></a>
# **moveFile**
```typescript
public async moveFile(request: MoveFileRequest): Promise< any >
```

Move file

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
 **srcPath** | **string**| Source file path e.g. &#39;/src.ext&#39; |
 **destPath** | **string**| Destination file path e.g. &#39;/dest.ext&#39; |
 **srcStorageName** | **string**| Source storage name | [optional]
 **destStorageName** | **string**| Destination storage name | [optional]
 **versionId** | **string**| File version ID to move | [optional]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="uploadFile"></a>
# **uploadFile**
```typescript
public async uploadFile(request: UploadFileRequest): Promise< FilesUploadResult >
```

Upload file

### Request Parameters
```typescript
new UploadFile(
    path,
    file,
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**| Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.              |
 **file** | **byte[]**| File to upload |
 **storageName** | **string**| Storage name | [optional]

### Return type

Promise< [FilesUploadResult](FilesUploadResult.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
