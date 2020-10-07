# FolderApi (EmailCloud.cloudStorage.folder)

Folder operations controller

<a name="copyFolder"></a>
## **copyFolder**

Description: Copy folder

Method call example:
```typescript
await api.cloudStorage.folder.copyFolder(request);
```

### Parameter: request

Description: copyFolder method request.

See parameter model documentation at [CopyFolderRequest](CopyFolderRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CopyFolderRequest()
    .srcPath('/storage/path/to/source/folder')
    .destPath('/storage/path/to/destination/folder')
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
let request = Models.CopyFolderRequest()
    .srcPath('/storage/path/to/source/folder')
    .destPath('/storage/path/to/destination/folder')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();

// Call method:
await api.cloudStorage.folder.copyFolder(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="createFolder"></a>
## **createFolder**

Description: Create the folder

Method call example:
```typescript
await api.cloudStorage.folder.createFolder(request);
```

### Parameter: request

Description: createFolder method request.

See parameter model documentation at [CreateFolderRequest](CreateFolderRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CreateFolderRequest()
    .path('/storage/path/to/new/folder')
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
let request = Models.CreateFolderRequest()
    .path('/storage/path/to/new/folder')
    .storageName('First Storage')
    .build();

// Call method:
await api.cloudStorage.folder.createFolder(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="deleteFolder"></a>
## **deleteFolder**

Description: Delete folder

Method call example:
```typescript
await api.cloudStorage.folder.deleteFolder(request);
```

### Parameter: request

Description: deleteFolder method request.

See parameter model documentation at [DeleteFolderRequest](DeleteFolderRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.DeleteFolderRequest()
    .path('/storage/path/to/folder')
    .storageName('First Storage')
    .recursive(true)
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
let request = Models.DeleteFolderRequest()
    .path('/storage/path/to/folder')
    .storageName('First Storage')
    .recursive(true)
    .build();

// Call method:
await api.cloudStorage.folder.deleteFolder(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getFilesList"></a>
## **getFilesList**

Description: Get all files and folders within a folder

Returns: Returns all files and folders contained by the folder.

Method call example:
```typescript
let result = await api.cloudStorage.folder.getFilesList(request);
```

### Parameter: request

Description: getFilesList method request.

See parameter model documentation at [GetFilesListRequest](GetFilesListRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.GetFilesListRequest()
    .path('/storage/path/to/folder')
    .storageName('First Storage')
    .build();
```

</details>

### Result

Description: Returns all files and folders contained by the folder.

Return type: Promise< [FilesList](FilesList.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.filesList()
    .value([
        Models.storageFile()
            .name('file.ext')
            .modifiedDate(new Date())
            .size(1024)
            .path('/path/to/file/on/storage')
            .build()])
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.GetFilesListRequest()
    .path('/storage/path/to/folder')
    .storageName('First Storage')
    .build();

// Call method:
let result = await api.cloudStorage.folder.getFilesList(request);

// Result example:
result = Models.filesList()
    .value([
        Models.storageFile()
            .name('file.ext')
            .modifiedDate(new Date())
            .size(1024)
            .path('/path/to/file/on/storage')
            .build()])
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="moveFolder"></a>
## **moveFolder**

Description: Move folder

Method call example:
```typescript
await api.cloudStorage.folder.moveFolder(request);
```

### Parameter: request

Description: moveFolder method request.

See parameter model documentation at [MoveFolderRequest](MoveFolderRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.MoveFolderRequest()
    .srcPath('/storage/path/to/source/folder')
    .destPath('/storage/path/to/destination/folder')
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
let request = Models.MoveFolderRequest()
    .srcPath('/storage/path/to/source/folder')
    .destPath('/storage/path/to/destination/folder')
    .srcStorageName('First Storage')
    .destStorageName('Other Storage')
    .build();

// Call method:
await api.cloudStorage.folder.moveFolder(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

