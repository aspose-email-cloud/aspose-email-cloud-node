# ClientThreadApi (EmailCloud.client.thread)

Email client thread operations.

<a name="delete"></a>
## **delete**

Description: Delete thread by id. All messages from thread will also be deleted.             

Method call example:
```typescript
await api.client.thread.delete(request);
```

### Parameter: request

Description: Delete email thread request.

See parameter model documentation at [ClientThreadDeleteRequest](ClientThreadDeleteRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.clientThreadDeleteRequest()
    .folder('INBOX/SubFolder')
    .threadId('5')
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
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.clientThreadDeleteRequest()
    .folder('INBOX/SubFolder')
    .threadId('5')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();

// Call method:
await api.client.thread.delete(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getList"></a>
## **getList**

Description: Get message threads from folder. All messages are partly fetched (without email body and some other fields).             

Returns: List of threads

Method call example:
```typescript
let result = await api.client.thread.getList(request);
```

### Parameter: request

Description: getList method request.

See parameter model documentation at [ClientThreadGetListRequest](ClientThreadGetListRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.ClientThreadGetListRequest()
    .folder('INBOX/SubFolder')
    .account('email.account')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .build();
```

</details>

### Result

Description: List of threads

Return type: Promise< [EmailThreadList](EmailThreadList.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.emailThreadList()
    .value([
        Models.emailThread()
            .id('123')
            .subject('Some email subject')
            .messages([
                Models.emailDto()
                    .date(new Date())
                    .from(Models.mailAddress()
                        .address('from@aspose.com')
                        .build())
                    .messageId('1')
                    .subject('Some email subject')
                    .to([
                        Models.mailAddress()
                            .address('to@aspose.com')
                            .build()])
                    .build(),
                Models.emailDto()
                    .date(new Date())
                    .from(Models.mailAddress()
                        .address('from@aspose.com')
                        .build())
                    .messageId('3')
                    .subject('Re: Some email subject')
                    .to([
                        Models.mailAddress()
                            .address('to@aspose.com')
                            .build()])
                    .build()])
            .build()])
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.ClientThreadGetListRequest()
    .folder('INBOX/SubFolder')
    .account('email.account')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .build();

// Call method:
let result = await api.client.thread.getList(request);

// Result example:
result = Models.emailThreadList()
    .value([
        Models.emailThread()
            .id('123')
            .subject('Some email subject')
            .messages([
                Models.emailDto()
                    .date(new Date())
                    .from(Models.mailAddress()
                        .address('from@aspose.com')
                        .build())
                    .messageId('1')
                    .subject('Some email subject')
                    .to([
                        Models.mailAddress()
                            .address('to@aspose.com')
                            .build()])
                    .build(),
                Models.emailDto()
                    .date(new Date())
                    .from(Models.mailAddress()
                        .address('from@aspose.com')
                        .build())
                    .messageId('3')
                    .subject('Re: Some email subject')
                    .to([
                        Models.mailAddress()
                            .address('to@aspose.com')
                            .build()])
                    .build()])
            .build()])
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getMessages"></a>
## **getMessages**

Description: Get messages from thread by id. All messages are fully fetched. For accounts with CacheFile only cached messages will be returned.             

Returns: Requested thread with fully fetched messages

Method call example:
```typescript
let result = await api.client.thread.getMessages(request);
```

### Parameter: request

Description: getMessages method request.

See parameter model documentation at [ClientThreadGetMessagesRequest](ClientThreadGetMessagesRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.ClientThreadGetMessagesRequest()
    .threadId('5')
    .account('email.account')
    .folder('INBOX')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .build();
```

</details>

### Result

Description: Requested thread with fully fetched messages

Return type: Promise< [EmailList](EmailList.md) >

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
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.ClientThreadGetMessagesRequest()
    .threadId('5')
    .account('email.account')
    .folder('INBOX')
    .storage('First Storage')
    .accountStorageFolder('email/account/location/on/storage')
    .build();

// Call method:
let result = await api.client.thread.getMessages(request);

// Result example:
result = ;
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="move"></a>
## **move**

Description: Move thread to another folder.             

Method call example:
```typescript
await api.client.thread.move(request);
```

### Parameter: request

Description: Move thread request.

See parameter model documentation at [ClientThreadMoveRequest](ClientThreadMoveRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.clientThreadMoveRequest()
    .destinationFolder('INBOX/SubFolder')
    .sourceFolder('INBOX')
    .threadId('5')
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
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.clientThreadMoveRequest()
    .destinationFolder('INBOX/SubFolder')
    .sourceFolder('INBOX')
    .threadId('5')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();

// Call method:
await api.client.thread.move(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="setIsRead"></a>
## **setIsRead**

Description: Mark all messages in thread as read or unread.             

Method call example:
```typescript
await api.client.thread.setIsRead(request);
```

### Parameter: request

Description: Email account specifier and IsRead flag.

See parameter model documentation at [ClientThreadSetIsReadRequest](ClientThreadSetIsReadRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.clientThreadSetIsReadRequest()
    .isRead(true)
    .folder('INBOX')
    .threadId('5')
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
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.clientThreadSetIsReadRequest()
    .isRead(true)
    .folder('INBOX')
    .threadId('5')
    .accountLocation(Models.storageFileLocation()
        .fileName('email.account')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .build();

// Call method:
await api.client.thread.setIsRead(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

