# FileApi (EmailCloud.cloudStorage.file)

File operations controller

<a name="copyFile"></a>
## **copyFile**

Description: Copy file

Method call example:
```typescript
await api.cloudStorage.file.copyFile(request);
```

### Parameter: request

Description: copyFile method request.

See parameter model documentation at [CopyFileRequest](CopyFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CopyFileRequest()
    .srcPath('/storage/path/to/source/file.ext')
    .destPath('/storage/path/to/destination/file.ext')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();
```

</details>

### Result

Return type: Promise< any >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.CopyFileRequest()
    .srcPath('/storage/path/to/source/file.ext')
    .destPath('/storage/path/to/destination/file.ext')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();

// Call method:
await api.cloudStorage.file.copyFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="deleteFile"></a>
## **deleteFile**

Description: Delete file

Method call example:
```typescript
await api.cloudStorage.file.deleteFile(request);
```

### Parameter: request

Description: deleteFile method request.

See parameter model documentation at [DeleteFileRequest](DeleteFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.DeleteFileRequest()
    .path('/storage/path/to/file.ext')
    .storageName('First Storage')
    .build();
```

</details>

### Result

Return type: Promise< any >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.DeleteFileRequest()
    .path('/storage/path/to/file.ext')
    .storageName('First Storage')
    .build();

// Call method:
await api.cloudStorage.file.deleteFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="downloadFile"></a>
## **downloadFile**

Description: Download file

Returns: The raw data of the file.

Method call example:
```typescript
let result = await api.cloudStorage.file.downloadFile(request);
```

### Parameter: request

Description: downloadFile method request.

See parameter model documentation at [DownloadFileRequest](DownloadFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.DownloadFileRequest()
    .path('/storage/path/to/file.ext')
    .storageName('First Storage')
    .build();
```

</details>

### Result

Description: The raw data of the file.

Return type: Promise< Buffer >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.DownloadFileRequest()
    .path('/storage/path/to/file.ext')
    .storageName('First Storage')
    .build();

// Call method:
let result = await api.cloudStorage.file.downloadFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="moveFile"></a>
## **moveFile**

Description: Move file

Method call example:
```typescript
await api.cloudStorage.file.moveFile(request);
```

### Parameter: request

Description: moveFile method request.

See parameter model documentation at [MoveFileRequest](MoveFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.MoveFileRequest()
    .srcPath('/storage/path/to/source/file.ext')
    .destPath('/storage/path/to/destination/file.ext')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();
```

</details>

### Result

Return type: Promise< any >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.MoveFileRequest()
    .srcPath('/storage/path/to/source/file.ext')
    .destPath('/storage/path/to/destination/file.ext')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();

// Call method:
await api.cloudStorage.file.moveFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="uploadFile"></a>
## **uploadFile**

Description: Upload file

Returns: Empty error list if the upload is successful.

Method call example:
```typescript
let result = await api.cloudStorage.file.uploadFile(request);
```

### Parameter: request

Description: uploadFile method request.

See parameter model documentation at [UploadFileRequest](UploadFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.UploadFileRequest()
    .path('/storage/path/to/file.ext')
    .file(fs.readFileSync('/local/file/system/path/to/file.ext'))
    .storageName('First Storage')
    .build();
```

</details>

### Result

Description: Empty error list if the upload is successful.

Return type: Promise< [FilesUploadResult](FilesUploadResult.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = ;
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.UploadFileRequest()
    .path('/storage/path/to/file.ext')
    .file(fs.readFileSync('/local/file/system/path/to/file.ext'))
    .storageName('First Storage')
    .build();

// Call method:
let result = await api.cloudStorage.file.uploadFile(request);

// Result example:
result = ;
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

