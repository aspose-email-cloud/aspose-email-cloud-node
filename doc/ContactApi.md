# ContactApi

                    
<a name="asFile"></a>
# **asFile**
```typescript
public async asFile(request: model.ContactAsFileRequest): Promise< Buffer >
```

Converts contact model to specified format and returns as file             

### request Parameter

See parameter model documentation at [ContactAsFileRequest](ContactAsFileRequest.md)

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="asMapi"></a>
# **asMapi**
```typescript
public async asMapi(contactDto: model.ContactDto): Promise< MapiContactDto >
```

Converts ContactDto to MapiContactDto.             

### contactDto Parameter

See parameter model documentation at [ContactDto](ContactDto.md)

### Return type

Promise< [MapiContactDto](MapiContactDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="convert"></a>
# **convert**
```typescript
public async convert(request: ContactConvertRequest): Promise< Buffer >
```

Converts contact document to specified format and returns as file             

### Request Parameters
```typescript
new ContactConvert(
    toFormat,
    fromFormat,
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **toFormat** | **string**| File format to convert to Enum, available values: VCard, WebDav, Msg |
 **fromFormat** | **string**| File format to convert from Enum, available values: VCard, WebDav, Msg |
 **file** | **byte[]**| File to convert |

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="fromFile"></a>
# **fromFile**
```typescript
public async fromFile(request: ContactFromFileRequest): Promise< ContactDto >
```

Converts contact document to a model representation             

### Request Parameters
```typescript
new ContactFromFile(
    format,
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**| File format Enum, available values: VCard, WebDav, Msg |
 **file** | **byte[]**| File to convert |

### Return type

Promise< [ContactDto](ContactDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="get"></a>
# **get**
```typescript
public async get(request: ContactGetRequest): Promise< ContactDto >
```

Get contact document from storage.             

### Request Parameters
```typescript
new ContactGet(
    format,
    fileName,
    folder=folder,
    storage=storage)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg |
 **fileName** | **string**| Contact document file name. |
 **folder** | **string**| Path to folder in storage. | [optional]
 **storage** | **string**| Storage name. | [optional]

### Return type

Promise< [ContactDto](ContactDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getAsFile"></a>
# **getAsFile**
```typescript
public async getAsFile(request: ContactGetAsFileRequest): Promise< Buffer >
```

Converts contact document from storage to specified format and returns as file             

### Request Parameters
```typescript
new ContactGetAsFile(
    fileName,
    toFormat,
    fromFormat,
    storage=storage,
    folder=folder)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fileName** | **string**| Calendar document file name |
 **toFormat** | **string**| File format Enum, available values: VCard, WebDav, Msg |
 **fromFormat** | **string**| File format to convert from Enum, available values: VCard, WebDav, Msg |
 **storage** | **string**| Storage name | [optional]
 **folder** | **string**| Path to folder in storage | [optional]

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getList"></a>
# **getList**
```typescript
public async getList(request: ContactGetListRequest): Promise< ContactStorageList >
```

Get contact list from storage folder.             

### Request Parameters
```typescript
new ContactGetList(
    format,
    folder=folder,
    storage=storage,
    itemsPerPage=itemsPerPage,
    pageNumber=pageNumber)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg |
 **folder** | **string**| Path to folder in storage. | [optional]
 **storage** | **string**| Storage name. | [optional]
 **itemsPerPage** | **number**| Count of items on page. | [optional] [default to 10]
 **pageNumber** | **number**| Page number. | [optional] [default to 0]

### Return type

Promise< [ContactStorageList](ContactStorageList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="save"></a>
# **save**
```typescript
public async save(request: model.ContactSaveRequest): Promise< any >
```

Save contact to storage.             

### request Parameter

See parameter model documentation at [ContactSaveRequest](ContactSaveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

