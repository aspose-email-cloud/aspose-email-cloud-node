# AiBcrApi (EmailCloud.ai.bcr)

AI Business card recognition operations.

<a name="parse"></a>
## **parse**

Description: Parse images to vCard document models             

Returns: List of vCards

Method call example:
```typescript
let result = await api.ai.bcr.parse(request);
```

### Parameter: request

Description: parse method request.

See parameter model documentation at [AiBcrParseRequest](AiBcrParseRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.AiBcrParseRequest()
    .file(fs.readFileSync('/path/to/image.png'))
    .countries('us')
    .languages('en')
    .isSingle(true)
    .build();
```

</details>

### Result

Description: List of vCards

Return type: Promise< [ContactList](ContactList.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.contactList()
    .value([
        Models.contactDto()
            .attachments([
                Models.attachment()
                    .name('attachment.txt')
                    .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                    .build()])
            .displayName('Alex Thomas')
            .emailAddresses([
                Models.emailAddress()
                    .category(Models.enumWithCustomOfEmailAddressCategory()
                        .value('Custom')
                        .description('Partners')
                        .build())
                    .displayName('Alex Thomas Partners')
                    .preferred(true)
                    .address('email@aspose.com')
                    .build()])
            .gender('Male')
            .givenName('Alex')
            .phoneNumbers([
                Models.phoneNumber()
                    .category(Models.enumWithCustomOfPhoneNumberCategory()
                        .value('Office')
                        .build())
                    .number('+49 211 4247 21')
                    .preferred(true)
                    .build()])
            .profession('GENERAL DIRECTOR')
            .surname('Thomas')
            .urls([
                Models.url()
                    .category(Models.enumWithCustomOfUrlCategory()
                        .value('Work')
                        .build())
                    .preferred(true)
                    .href('www.aspose.com')
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
let request = Models.AiBcrParseRequest()
    .file(fs.readFileSync('/path/to/image.png'))
    .countries('us')
    .languages('en')
    .isSingle(true)
    .build();

// Call method:
let result = await api.ai.bcr.parse(request);

// Result example:
result = Models.contactList()
    .value([
        Models.contactDto()
            .attachments([
                Models.attachment()
                    .name('attachment.txt')
                    .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                    .build()])
            .displayName('Alex Thomas')
            .emailAddresses([
                Models.emailAddress()
                    .category(Models.enumWithCustomOfEmailAddressCategory()
                        .value('Custom')
                        .description('Partners')
                        .build())
                    .displayName('Alex Thomas Partners')
                    .preferred(true)
                    .address('email@aspose.com')
                    .build()])
            .gender('Male')
            .givenName('Alex')
            .phoneNumbers([
                Models.phoneNumber()
                    .category(Models.enumWithCustomOfPhoneNumberCategory()
                        .value('Office')
                        .build())
                    .number('+49 211 4247 21')
                    .preferred(true)
                    .build()])
            .profession('GENERAL DIRECTOR')
            .surname('Thomas')
            .urls([
                Models.url()
                    .category(Models.enumWithCustomOfUrlCategory()
                        .value('Work')
                        .build())
                    .preferred(true)
                    .href('www.aspose.com')
                    .build()])
            .build()])
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="parseStorage"></a>
## **parseStorage**

Description: Parse images from storage to vCard files             

Returns: List of vCard files located on storage

Method call example:
```typescript
let result = await api.ai.bcr.parseStorage(request);
```

### Parameter: request

Description: Request with images located on storage

See parameter model documentation at [AiBcrParseStorageRequest](AiBcrParseStorageRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.aiBcrParseStorageRequest()
    .outFolder(Models.storageFolderLocation()
        .storage('First Storage')
        .folderPath('VCard/files/produced/by/parser/will/be/placed/here')
        .build())
    .images([
        Models.aiBcrImageStorageFile()
            .file(Models.storageFileLocation()
                .fileName('VCardScanImage.jpg')
                .storage('First Storage')
                .folderPath('image/location/on/storage')
                .build())
            .isSingle(true)
            .build()])
    .build();
```

</details>

### Result

Description: List of vCard files located on storage

Return type: Promise< [StorageFileLocationList](StorageFileLocationList.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.storageFileLocationList()
    .value([
        Models.storageFileLocation()
            .fileName('fileOnStorage.txt')
            .storage('First Storage')
            .folderPath('file/location/folder/on/storage')
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
let request = Models.aiBcrParseStorageRequest()
    .outFolder(Models.storageFolderLocation()
        .storage('First Storage')
        .folderPath('VCard/files/produced/by/parser/will/be/placed/here')
        .build())
    .images([
        Models.aiBcrImageStorageFile()
            .file(Models.storageFileLocation()
                .fileName('VCardScanImage.jpg')
                .storage('First Storage')
                .folderPath('image/location/on/storage')
                .build())
            .isSingle(true)
            .build()])
    .build();

// Call method:
let result = await api.ai.bcr.parseStorage(request);

// Result example:
result = Models.storageFileLocationList()
    .value([
        Models.storageFileLocation()
            .fileName('fileOnStorage.txt')
            .storage('First Storage')
            .folderPath('file/location/folder/on/storage')
            .build()])
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

