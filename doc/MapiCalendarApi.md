
# MapiCalendarApi

                    
<a name="asCalendarDto"></a>
# **asCalendarDto**
```typescript
public async asCalendarDto(mapiCalendarDto: model.MapiCalendarDto): Promise< CalendarDto >
```

Converts MAPI calendar model to CalendarDto model.             

### mapiCalendarDto Parameter

See parameter model documentation at [MapiCalendarDto](MapiCalendarDto.md)

### Return type

Promise< [CalendarDto](CalendarDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="asFile"></a>
# **asFile**
```typescript
public async asFile(request: model.MapiCalendarAsFileRequest): Promise< Buffer >
```

Converts MAPI calendar model to specified format and returns as file.             

### request Parameter

See parameter model documentation at [MapiCalendarAsFileRequest](MapiCalendarAsFileRequest.md)

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="fromFile"></a>
# **fromFile**
```typescript
public async fromFile(request: MapiCalendarFromFileRequest): Promise< MapiCalendarDto >
```

Converts calendar file to a MAPI model representation.             

### Request Parameters
```typescript
new MapiCalendarFromFile(
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **file** | **byte[]**| File to convert |

### Return type

Promise< [MapiCalendarDto](MapiCalendarDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="get"></a>
# **get**
```typescript
public async get(request: MapiCalendarGetRequest): Promise< MapiCalendarDto >
```

Get MAPI calendar document.             

### Request Parameters
```typescript
new MapiCalendarGet(
    fileName,
    folder=folder,
    storage=storage)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fileName** | **string**| Calendar file name in storage. |
 **folder** | **string**| Path to folder in storage. | [optional]
 **storage** | **string**| Storage name. | [optional]

### Return type

Promise< [MapiCalendarDto](MapiCalendarDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="save"></a>
# **save**
```typescript
public async save(request: model.MapiCalendarSaveRequest): Promise< any >
```

Save MAPI Calendar to storage.             

### request Parameter

See parameter model documentation at [MapiCalendarSaveRequest](MapiCalendarSaveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

