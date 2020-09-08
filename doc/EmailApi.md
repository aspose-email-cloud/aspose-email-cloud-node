# EmailApi

                    
<a name="asFile"></a>
# **asFile**
```typescript
public async asFile(request: model.EmailAsFileRequest): Promise< Buffer >
```

Converts Email model to specified format and returns as file.             

### request Parameter

See parameter model documentation at [EmailAsFileRequest](EmailAsFileRequest.md)

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="asMapi"></a>
# **asMapi**
```typescript
public async asMapi(emailDto: model.EmailDto): Promise< MapiMessageDto >
```

Converts EmailDto to MapiMessageDto.             

### emailDto Parameter

See parameter model documentation at [EmailDto](EmailDto.md)

### Return type

Promise< [MapiMessageDto](MapiMessageDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="convert"></a>
# **convert**
```typescript
public async convert(request: EmailConvertRequest): Promise< Buffer >
```

Converts email document to specified format and returns as file             

### Request Parameters
```typescript
new EmailConvert(
    fromFormat,
    toFormat,
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fromFormat** | **string**| File format to convert to Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
 **toFormat** | **string**| File format to convert from Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
 **file** | **byte[]**| File to convert |

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="fromFile"></a>
# **fromFile**
```typescript
public async fromFile(request: EmailFromFileRequest): Promise< EmailDto >
```

Converts email document to a model representation             

### Request Parameters
```typescript
new EmailFromFile(
    format,
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**|  Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
 **file** | **byte[]**| File to convert |

### Return type

Promise< [EmailDto](EmailDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="get"></a>
# **get**
```typescript
public async get(request: EmailGetRequest): Promise< EmailDto >
```

Get email document from storage.             

### Request Parameters
```typescript
new EmailGet(
    format,
    fileName,
    folder=folder,
    storage=storage)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**| Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
 **fileName** | **string**| Email document file name. |
 **folder** | **string**| Path to folder in storage. | [optional]
 **storage** | **string**| Storage name. | [optional]

### Return type

Promise< [EmailDto](EmailDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getAsFile"></a>
# **getAsFile**
```typescript
public async getAsFile(request: EmailGetAsFileRequest): Promise< Buffer >
```

Converts email document from storage to specified format and returns as file             

### Request Parameters
```typescript
new EmailGetAsFile(
    fileName,
    format,
    storage=storage,
    folder=folder)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fileName** | **string**| Email document file name |
 **format** | **string**| File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
 **storage** | **string**| Storage name | [optional]
 **folder** | **string**| Path to folder in storage | [optional]

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getList"></a>
# **getList**
```typescript
public async getList(request: EmailGetListRequest): Promise< EmailStorageList >
```

Get email list from storage folder.             

### Request Parameters
```typescript
new EmailGetList(
    format,
    folder=folder,
    storage=storage,
    itemsPerPage=itemsPerPage,
    pageNumber=pageNumber)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**| Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
 **folder** | **string**| Path to folder in storage. | [optional]
 **storage** | **string**| Storage name. | [optional]
 **itemsPerPage** | **number**| Count of items on page. | [optional] [default to 10]
 **pageNumber** | **number**| Page number. | [optional] [default to 0]

### Return type

Promise< [EmailStorageList](EmailStorageList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="save"></a>
# **save**
```typescript
public async save(request: model.EmailSaveRequest): Promise< any >
```

Save email document to storage.             

### request Parameter

See parameter model documentation at [EmailSaveRequest](EmailSaveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

