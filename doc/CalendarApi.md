# CalendarApi

                    
<a name="asAlternate"></a>
# **asAlternate**
```typescript
public async asAlternate(request: model.CalendarAsAlternateRequest): Promise< AlternateView >
```

Convert iCalendar to AlternateView             

### request Parameter

See parameter model documentation at [CalendarAsAlternateRequest](CalendarAsAlternateRequest.md)

### Return type

Promise< [AlternateView](AlternateView.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="asFile"></a>
# **asFile**
```typescript
public async asFile(request: model.CalendarAsFileRequest): Promise< Buffer >
```

Converts calendar model to specified format and returns as file.             

### request Parameter

See parameter model documentation at [CalendarAsFileRequest](CalendarAsFileRequest.md)

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="asMapi"></a>
# **asMapi**
```typescript
public async asMapi(calendarDto: model.CalendarDto): Promise< MapiCalendarDto >
```

Converts CalendarDto to MapiCalendarDto.             

### calendarDto Parameter

See parameter model documentation at [CalendarDto](CalendarDto.md)

### Return type

Promise< [MapiCalendarDto](MapiCalendarDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="convert"></a>
# **convert**
```typescript
public async convert(request: CalendarConvertRequest): Promise< Buffer >
```

Converts calendar document to specified format and returns as file.             

### Request Parameters
```typescript
new CalendarConvert(
    format,
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **format** | **string**| File format. Enum, available values: Ics, Msg |
 **file** | **byte[]**| File to convert |

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="fromFile"></a>
# **fromFile**
```typescript
public async fromFile(request: CalendarFromFileRequest): Promise< CalendarDto >
```

Converts calendar document to a model representation.             

### Request Parameters
```typescript
new CalendarFromFile(
    file)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **file** | **byte[]**| File to convert |

### Return type

Promise< [CalendarDto](CalendarDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="get"></a>
# **get**
```typescript
public async get(request: CalendarGetRequest): Promise< CalendarDto >
```

Get calendar file from storage.             

### Request Parameters
```typescript
new CalendarGet(
    fileName,
    folder=folder,
    storage=storage)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fileName** | **string**| iCalendar file name in storage. |
 **folder** | **string**| Path to folder in storage. | [optional]
 **storage** | **string**| Storage name. | [optional]

### Return type

Promise< [CalendarDto](CalendarDto.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getAsAlternate"></a>
# **getAsAlternate**
```typescript
public async getAsAlternate(request: CalendarGetAsAlternateRequest): Promise< AlternateView >
```

Get iCalendar from storage as AlternateView             

### Request Parameters
```typescript
new CalendarGetAsAlternate(
    fileName,
    calendarAction,
    sequenceId=sequenceId,
    folder=folder,
    storage=storage)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fileName** | **string**| iCalendar file name in storage |
 **calendarAction** | **string**| iCalendar method type Enum, available values: Create, Update, Cancel |
 **sequenceId** | **string**| The sequence id | [optional]
 **folder** | **string**| Path to folder in storage | [optional]
 **storage** | **string**| Storage name | [optional]

### Return type

Promise< [AlternateView](AlternateView.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getAsFile"></a>
# **getAsFile**
```typescript
public async getAsFile(request: CalendarGetAsFileRequest): Promise< Buffer >
```

Converts calendar document from storage to specified format and returns as file.             

### Request Parameters
```typescript
new CalendarGetAsFile(
    fileName,
    format,
    storage=storage,
    folder=folder)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **fileName** | **string**| Calendar document file name. |
 **format** | **string**| File format. Enum, available values: Ics, Msg |
 **storage** | **string**| Storage name. | [optional]
 **folder** | **string**| Path to folder in storage. | [optional]

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getList"></a>
# **getList**
```typescript
public async getList(request: CalendarGetListRequest): Promise< CalendarStorageList >
```

Get iCalendar list from storage folder.             

### Request Parameters
```typescript
new CalendarGetList(
    folder,
    itemsPerPage=itemsPerPage,
    pageNumber=pageNumber,
    storage=storage)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **folder** | **string**| Path to folder in storage. |
 **itemsPerPage** | **number**| Count of items on page. | [optional] [default to 10]
 **pageNumber** | **number**| Page number. | [optional] [default to 0]
 **storage** | **string**| Storage name. | [optional]

### Return type

Promise< [CalendarStorageList](CalendarStorageList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="save"></a>
# **save**
```typescript
public async save(request: model.CalendarSaveRequest): Promise< any >
```

Save iCalendar             

### request Parameter

See parameter model documentation at [CalendarSaveRequest](CalendarSaveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

