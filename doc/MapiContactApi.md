
# MapiContactApi

                    
<a name="asContactDto"></a>
# **asContactDto**
```typescript
public async asContactDto(mapiContactDto: model.MapiContactDto): Promise< ContactDto >
```

Converts MAPI contact model to ContactDto model.             

### mapiContactDto Parameter

See parameter model documentation at [MapiContactDto](MapiContactDto.md)

### Return type

Promise< [ContactDto](ContactDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="asFile"></a>
# **asFile**
```typescript
public async asFile(request: model.MapiContactAsFileRequest): Promise< Buffer >
```

Converts MAPI contact model to specified format and returns as file.             

### request Parameter

See parameter model documentation at [MapiContactAsFileRequest](MapiContactAsFileRequest.md)

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="fromFile"></a>
# **fromFile**
```typescript
public async fromFile(request: MapiContactFromFileRequest): Promise< MapiContactDto >
```

Converts contact file to a MAPI model representation.             

### Request Parameters
```typescript
new MapiContactFromFile(
    format,
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**| File format Enum, available values: VCard, WebDav, Msg |
 **file** | **byte[]**| File to convert |

### Return type

Promise< [MapiContactDto](MapiContactDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="get"></a>
# **get**
```typescript
public async get(request: MapiContactGetRequest): Promise< MapiContactDto >
```

Get MAPI contact document.             

### Request Parameters
```typescript
new MapiContactGet(
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

Promise< [MapiContactDto](MapiContactDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="save"></a>
# **save**
```typescript
public async save(request: model.MapiContactSaveRequest): Promise< any >
```

Save MAPI Contact to storage.             

### request Parameter

See parameter model documentation at [MapiContactSaveRequest](MapiContactSaveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

