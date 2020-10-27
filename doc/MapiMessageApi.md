# MapiMessageApi

                    
<a name="asEmailDto"></a>
# **asEmailDto**
```typescript
public async asEmailDto(mapiMessage: model.MapiMessageDto): Promise< EmailDto >
```

Converts MAPI message model to EmailDto model             

### mapiMessage Parameter

See parameter model documentation at [MapiMessageDto](MapiMessageDto.md)

### Return type

Promise< [EmailDto](EmailDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="asFile"></a>
# **asFile**
```typescript
public async asFile(request: model.MapiMessageAsFileRequest): Promise< Buffer >
```

Converts MAPI message model to specified format and returns as file.             

### request Parameter

See parameter model documentation at [MapiMessageAsFileRequest](MapiMessageAsFileRequest.md)

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="fromFile"></a>
# **fromFile**
```typescript
public async fromFile(request: MapiMessageFromFileRequest): Promise< MapiMessageDto >
```

Converts email file to a MAPI model representation             

### Request Parameters
```typescript
new MapiMessageFromFile(
    format,
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**| File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
 **file** | **byte[]**| File to convert |

### Return type

Promise< [MapiMessageDto](MapiMessageDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="get"></a>
# **get**
```typescript
public async get(request: MapiMessageGetRequest): Promise< MapiMessageDto >
```

Get MAPI message document.             

### Request Parameters
```typescript
new MapiMessageGet(
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

Promise< [MapiMessageDto](MapiMessageDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="save"></a>
# **save**
```typescript
public async save(request: model.MapiMessageSaveRequest): Promise< any >
```

Save MAPI message to storage.             

### request Parameter

See parameter model documentation at [MapiMessageSaveRequest](MapiMessageSaveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

