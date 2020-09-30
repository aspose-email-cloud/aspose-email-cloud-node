# ClientFolderApi (EmailCloud.client.folder)

Email client folder operations.

<a name="create"></a>
## **create**

Description: Create new folder in email account             

Method call example:
```typescript
api.client.folder.create(request);
```

### Parameter: request

Description: Create folder request

See parameter model documentation at [ClientFolderCreateRequest](ClientFolderCreateRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.clientFolderCreateRequest()
    .parentFolder('INBOX/SubFolder/ParentFolder')
    .folderName('NewFolder')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
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
let request = Models.clientFolderCreateRequest()
    .parentFolder('INBOX/SubFolder/ParentFolder')
    .folderName('NewFolder')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();

// Call method:
api.client.folder.create(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="delete"></a>
## **delete**

Description: Delete a folder in email account             

Method call example:
```typescript
api.client.folder.delete(request);
```

### Parameter: request

Description: Delete folder request

See parameter model documentation at [ClientFolderDeleteRequest](ClientFolderDeleteRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.clientFolderDeleteRequest()
    .folder('INBOX/SubFolder/FolderToDelete')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
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
let request = Models.clientFolderDeleteRequest()
    .folder('INBOX/SubFolder/FolderToDelete')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();

// Call method:
api.client.folder.delete(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getList"></a>
## **getList**

Description: Get folders list in email account             

Returns: Folders list

Method call example:
```typescript
let result = api.client.folder.getList(request);
```

### Parameter: request

Description: getList method request.

See parameter model documentation at [ClientFolderGetListRequest](ClientFolderGetListRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.ClientFolderGetListRequest()
    .account('email.multi.account')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .parentFolder('INBOX')
    .build();
```

</details>

### Result

Description: Folders list

Return type: Promise< [MailServerFolderList](MailServerFolderList.md) >

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
let request = Models.ClientFolderGetListRequest()
    .account('email.multi.account')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .parentFolder('INBOX')
    .build();

// Call method:
let result = api.client.folder.getList(request);

// Result example:
result = ;
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

