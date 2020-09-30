# ContactApi (EmailCloud.contact)

Contact document operations. Supported formats: VCard, MSG, WebDav

<a name="asFile"></a>
## **asFile**

Description: Converts contact model to specified format and returns as file             

Returns: File stream in specified format

Method call example:
```typescript
let result = api.contact.asFile(request);
```

### Parameter: request

Description: Contact model and format to convert

See parameter model documentation at [ContactAsFileRequest](ContactAsFileRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.contactAsFileRequest()
    .value(Models.contactDto()
        .attachments([
            Models.attachment()
                .name('attachment.txt')
                .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                .build()])
        .displayName('Alex Thomas')
        .emailAddresses([
            Models.emailAddress()
                .category(Models.enumWithCustom<EmailAddressCategory>()
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
                .category(Models.enumWithCustom<PhoneNumberCategory>()
                    .value('Office')
                    .build())
                .number('+49 211 4247 21')
                .preferred(true)
                .build()])
        .profession('GENERAL DIRECTOR')
        .surname('Thomas')
        .urls([
            Models.url()
                .category(Models.enumWithCustom<UrlCategory>()
                    .value('Work')
                    .build())
                .preferred(true)
                .href('www.aspose.com')
                .build()])
        .build())
    .build();
```

</details>

### Result

Description: File stream in specified format

Return type: Promise< Buffer >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.contactAsFileRequest()
    .value(Models.contactDto()
        .attachments([
            Models.attachment()
                .name('attachment.txt')
                .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                .build()])
        .displayName('Alex Thomas')
        .emailAddresses([
            Models.emailAddress()
                .category(Models.enumWithCustom<EmailAddressCategory>()
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
                .category(Models.enumWithCustom<PhoneNumberCategory>()
                    .value('Office')
                    .build())
                .number('+49 211 4247 21')
                .preferred(true)
                .build()])
        .profession('GENERAL DIRECTOR')
        .surname('Thomas')
        .urls([
            Models.url()
                .category(Models.enumWithCustom<UrlCategory>()
                    .value('Work')
                    .build())
                .preferred(true)
                .href('www.aspose.com')
                .build()])
        .build())
    .build();

// Call method:
let result = api.contact.asFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="asMapi"></a>
## **asMapi**

Description: Converts ContactDto to MapiContactDto.             

Returns: MAPI model contact representation

Method call example:
```typescript
let result = api.contact.asMapi(contactDto);
```

### Parameter: contactDto

Description: Contact model to convert

See parameter model documentation at [ContactDto](ContactDto.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let contactDto = Models.contactDto()
    .attachments([
        Models.attachment()
            .name('attachment.txt')
            .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
            .build()])
    .displayName('Alex Thomas')
    .emailAddresses([
        Models.emailAddress()
            .category(Models.enumWithCustom<EmailAddressCategory>()
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
            .category(Models.enumWithCustom<PhoneNumberCategory>()
                .value('Office')
                .build())
            .number('+49 211 4247 21')
            .preferred(true)
            .build()])
    .profession('GENERAL DIRECTOR')
    .surname('Thomas')
    .urls([
        Models.url()
            .category(Models.enumWithCustom<UrlCategory>()
                .value('Work')
                .build())
            .preferred(true)
            .href('www.aspose.com')
            .build()])
    .build();
```

</details>

### Result

Description: MAPI model contact representation

Return type: Promise< [MapiContactDto](MapiContactDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.mapiContactDto()
    .electronicAddresses(Models.mapiContactElectronicAddressPropertySetDto()
        .defaultEmailAddress(Models.mapiContactElectronicAddressDto()
            .emailAddress('email@aspose.com')
            .build())
        .build())
    .nameInfo(Models.mapiContactNamePropertySetDto()
        .givenName('Alex')
        .surname('Thomas')
        .build())
    .personalInfo(Models.mapiContactPersonalInfoPropertySetDto()
        .businessHomePage('www.aspose.com')
        .build())
    .professionalInfo(Models.mapiContactProfessionalPropertySetDto()
        .profession('GENERAL DIRECTOR')
        .build())
    .telephones(Models.mapiContactTelephonePropertySetDto()
        .primaryTelephoneNumber('+49 211 4247 21')
        .build())
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let contactDto = Models.contactDto()
    .attachments([
        Models.attachment()
            .name('attachment.txt')
            .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
            .build()])
    .displayName('Alex Thomas')
    .emailAddresses([
        Models.emailAddress()
            .category(Models.enumWithCustom<EmailAddressCategory>()
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
            .category(Models.enumWithCustom<PhoneNumberCategory>()
                .value('Office')
                .build())
            .number('+49 211 4247 21')
            .preferred(true)
            .build()])
    .profession('GENERAL DIRECTOR')
    .surname('Thomas')
    .urls([
        Models.url()
            .category(Models.enumWithCustom<UrlCategory>()
                .value('Work')
                .build())
            .preferred(true)
            .href('www.aspose.com')
            .build()])
    .build();

// Call method:
let result = api.contact.asMapi(contactDto);

// Result example:
result = Models.mapiContactDto()
    .electronicAddresses(Models.mapiContactElectronicAddressPropertySetDto()
        .defaultEmailAddress(Models.mapiContactElectronicAddressDto()
            .emailAddress('email@aspose.com')
            .build())
        .build())
    .nameInfo(Models.mapiContactNamePropertySetDto()
        .givenName('Alex')
        .surname('Thomas')
        .build())
    .personalInfo(Models.mapiContactPersonalInfoPropertySetDto()
        .businessHomePage('www.aspose.com')
        .build())
    .professionalInfo(Models.mapiContactProfessionalPropertySetDto()
        .profession('GENERAL DIRECTOR')
        .build())
    .telephones(Models.mapiContactTelephonePropertySetDto()
        .primaryTelephoneNumber('+49 211 4247 21')
        .build())
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="convert"></a>
## **convert**

Description: Converts contact document to specified format and returns as file             

Returns: File stream in specified destination format

Method call example:
```typescript
let result = api.contact.convert(request);
```

### Parameter: request

Description: convert method request.

See parameter model documentation at [ContactConvertRequest](ContactConvertRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.ContactConvertRequest()
    .toFormat('VCard')
    .fromFormat('Msg')
    .file(fs.readFileSync('/path/to/contact.msg'))
    .build();
```

</details>

### Result

Description: File stream in specified destination format

Return type: Promise< Buffer >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.ContactConvertRequest()
    .toFormat('VCard')
    .fromFormat('Msg')
    .file(fs.readFileSync('/path/to/contact.msg'))
    .build();

// Call method:
let result = api.contact.convert(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="fromFile"></a>
## **fromFile**

Description: Converts contact document to a model representation             

Returns: Contact model

Method call example:
```typescript
let result = api.contact.fromFile(request);
```

### Parameter: request

Description: fromFile method request.

See parameter model documentation at [ContactFromFileRequest](ContactFromFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.ContactFromFileRequest()
    .format('Msg')
    .file(fs.readFileSync('/path/to/contact.msg'))
    .build();
```

</details>

### Result

Description: Contact model

Return type: Promise< [ContactDto](ContactDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.contactDto()
    .attachments([
        Models.attachment()
            .name('attachment.txt')
            .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
            .build()])
    .displayName('Alex Thomas')
    .emailAddresses([
        Models.emailAddress()
            .category(Models.enumWithCustom<EmailAddressCategory>()
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
            .category(Models.enumWithCustom<PhoneNumberCategory>()
                .value('Office')
                .build())
            .number('+49 211 4247 21')
            .preferred(true)
            .build()])
    .profession('GENERAL DIRECTOR')
    .surname('Thomas')
    .urls([
        Models.url()
            .category(Models.enumWithCustom<UrlCategory>()
                .value('Work')
                .build())
            .preferred(true)
            .href('www.aspose.com')
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
let request = Models.ContactFromFileRequest()
    .format('Msg')
    .file(fs.readFileSync('/path/to/contact.msg'))
    .build();

// Call method:
let result = api.contact.fromFile(request);

// Result example:
result = Models.contactDto()
    .attachments([
        Models.attachment()
            .name('attachment.txt')
            .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
            .build()])
    .displayName('Alex Thomas')
    .emailAddresses([
        Models.emailAddress()
            .category(Models.enumWithCustom<EmailAddressCategory>()
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
            .category(Models.enumWithCustom<PhoneNumberCategory>()
                .value('Office')
                .build())
            .number('+49 211 4247 21')
            .preferred(true)
            .build()])
    .profession('GENERAL DIRECTOR')
    .surname('Thomas')
    .urls([
        Models.url()
            .category(Models.enumWithCustom<UrlCategory>()
                .value('Work')
                .build())
            .preferred(true)
            .href('www.aspose.com')
            .build()])
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="get"></a>
## **get**

Description: Get contact document from storage.             

Returns: Contact document.

Method call example:
```typescript
let result = api.contact.get(request);
```

### Parameter: request

Description: get method request.

See parameter model documentation at [ContactGetRequest](ContactGetRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.ContactGetRequest()
    .format('VCard')
    .fileName('contact.vcf')
    .folder('folder/on/storage')
    .storage('First Storage')
    .build();
```

</details>

### Result

Description: Contact document.

Return type: Promise< [ContactDto](ContactDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.contactDto()
    .attachments([
        Models.attachment()
            .name('attachment.txt')
            .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
            .build()])
    .displayName('Alex Thomas')
    .emailAddresses([
        Models.emailAddress()
            .category(Models.enumWithCustom<EmailAddressCategory>()
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
            .category(Models.enumWithCustom<PhoneNumberCategory>()
                .value('Office')
                .build())
            .number('+49 211 4247 21')
            .preferred(true)
            .build()])
    .profession('GENERAL DIRECTOR')
    .surname('Thomas')
    .urls([
        Models.url()
            .category(Models.enumWithCustom<UrlCategory>()
                .value('Work')
                .build())
            .preferred(true)
            .href('www.aspose.com')
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
let request = Models.ContactGetRequest()
    .format('VCard')
    .fileName('contact.vcf')
    .folder('folder/on/storage')
    .storage('First Storage')
    .build();

// Call method:
let result = api.contact.get(request);

// Result example:
result = Models.contactDto()
    .attachments([
        Models.attachment()
            .name('attachment.txt')
            .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
            .build()])
    .displayName('Alex Thomas')
    .emailAddresses([
        Models.emailAddress()
            .category(Models.enumWithCustom<EmailAddressCategory>()
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
            .category(Models.enumWithCustom<PhoneNumberCategory>()
                .value('Office')
                .build())
            .number('+49 211 4247 21')
            .preferred(true)
            .build()])
    .profession('GENERAL DIRECTOR')
    .surname('Thomas')
    .urls([
        Models.url()
            .category(Models.enumWithCustom<UrlCategory>()
                .value('Work')
                .build())
            .preferred(true)
            .href('www.aspose.com')
            .build()])
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getAsFile"></a>
## **getAsFile**

Description: Converts contact document from storage to specified format and returns as file             

Returns: File stream in specified format

Method call example:
```typescript
let result = api.contact.getAsFile(request);
```

### Parameter: request

Description: getAsFile method request.

See parameter model documentation at [ContactGetAsFileRequest](ContactGetAsFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.ContactGetAsFileRequest()
    .fileName('contact.msg')
    .toFormat('VCard')
    .fromFormat('Msg')
    .storage('First Storage')
    .folder('folder/on/storage')
    .build();
```

</details>

### Result

Description: File stream in specified format

Return type: Promise< Buffer >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.ContactGetAsFileRequest()
    .fileName('contact.msg')
    .toFormat('VCard')
    .fromFormat('Msg')
    .storage('First Storage')
    .folder('folder/on/storage')
    .build();

// Call method:
let result = api.contact.getAsFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getList"></a>
## **getList**

Description: Get contact list from storage folder.             

Returns: Contact list.

Method call example:
```typescript
let result = api.contact.getList(request);
```

### Parameter: request

Description: getList method request.

See parameter model documentation at [ContactGetListRequest](ContactGetListRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.ContactGetListRequest()
    .format('VCard')
    .folder('folder/on/storage')
    .storage('First Storage')
    .itemsPerPage(10)
    .pageNumber(0)
    .build();
```

</details>

### Result

Description: Contact list.

Return type: Promise< [ContactStorageList](ContactStorageList.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.contactStorageList()
    .value([
        Models.storageModel<ContactDto>()
            .storageFile(Models.storageFileLocation()
                .fileName('contact.vcf')
                .storage('First Storage')
                .folderPath('file/location/folder/on/storage')
                .build())
            .value(Models.contactDto()
                .attachments([
                    Models.attachment()
                        .name('attachment.txt')
                        .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                        .build()])
                .displayName('Alex Thomas')
                .emailAddresses([
                    Models.emailAddress()
                        .category(Models.enumWithCustom<EmailAddressCategory>()
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
                        .category(Models.enumWithCustom<PhoneNumberCategory>()
                            .value('Office')
                            .build())
                        .number('+49 211 4247 21')
                        .preferred(true)
                        .build()])
                .profession('GENERAL DIRECTOR')
                .surname('Thomas')
                .urls([
                    Models.url()
                        .category(Models.enumWithCustom<UrlCategory>()
                            .value('Work')
                            .build())
                        .preferred(true)
                        .href('www.aspose.com')
                        .build()])
                .build())
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
let request = Models.ContactGetListRequest()
    .format('VCard')
    .folder('folder/on/storage')
    .storage('First Storage')
    .itemsPerPage(10)
    .pageNumber(0)
    .build();

// Call method:
let result = api.contact.getList(request);

// Result example:
result = Models.contactStorageList()
    .value([
        Models.storageModel<ContactDto>()
            .storageFile(Models.storageFileLocation()
                .fileName('contact.vcf')
                .storage('First Storage')
                .folderPath('file/location/folder/on/storage')
                .build())
            .value(Models.contactDto()
                .attachments([
                    Models.attachment()
                        .name('attachment.txt')
                        .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                        .build()])
                .displayName('Alex Thomas')
                .emailAddresses([
                    Models.emailAddress()
                        .category(Models.enumWithCustom<EmailAddressCategory>()
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
                        .category(Models.enumWithCustom<PhoneNumberCategory>()
                            .value('Office')
                            .build())
                        .number('+49 211 4247 21')
                        .preferred(true)
                        .build()])
                .profession('GENERAL DIRECTOR')
                .surname('Thomas')
                .urls([
                    Models.url()
                        .category(Models.enumWithCustom<UrlCategory>()
                            .value('Work')
                            .build())
                        .preferred(true)
                        .href('www.aspose.com')
                        .build()])
                .build())
            .build()])
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="save"></a>
## **save**

Description: Save contact to storage.             

Method call example:
```typescript
api.contact.save(request);
```

### Parameter: request

Description: Create/Update contact request.

See parameter model documentation at [ContactSaveRequest](ContactSaveRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.contactSaveRequest()
    .storageFile(Models.storageFileLocation()
        .fileName('contact.vcf')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .value(Models.contactDto()
        .attachments([
            Models.attachment()
                .name('attachment.txt')
                .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                .build()])
        .displayName('Alex Thomas')
        .emailAddresses([
            Models.emailAddress()
                .category(Models.enumWithCustom<EmailAddressCategory>()
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
                .category(Models.enumWithCustom<PhoneNumberCategory>()
                    .value('Office')
                    .build())
                .number('+49 211 4247 21')
                .preferred(true)
                .build()])
        .profession('GENERAL DIRECTOR')
        .surname('Thomas')
        .urls([
            Models.url()
                .category(Models.enumWithCustom<UrlCategory>()
                    .value('Work')
                    .build())
                .preferred(true)
                .href('www.aspose.com')
                .build()])
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
let request = Models.contactSaveRequest()
    .storageFile(Models.storageFileLocation()
        .fileName('contact.vcf')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .value(Models.contactDto()
        .attachments([
            Models.attachment()
                .name('attachment.txt')
                .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                .build()])
        .displayName('Alex Thomas')
        .emailAddresses([
            Models.emailAddress()
                .category(Models.enumWithCustom<EmailAddressCategory>()
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
                .category(Models.enumWithCustom<PhoneNumberCategory>()
                    .value('Office')
                    .build())
                .number('+49 211 4247 21')
                .preferred(true)
                .build()])
        .profession('GENERAL DIRECTOR')
        .surname('Thomas')
        .urls([
            Models.url()
                .category(Models.enumWithCustom<UrlCategory>()
                    .value('Work')
                    .build())
                .preferred(true)
                .href('www.aspose.com')
                .build()])
        .build())
    .build();

// Call method:
api.contact.save(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

