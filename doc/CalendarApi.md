# CalendarApi (EmailCloud.calendar)

iCalendar document operations.

<a name="asAlternate"></a>
## **asAlternate**

Description: Convert iCalendar to AlternateView             

Returns: iCalendar document represented as AlternateView

Method call example:
```typescript
let result = api.calendar.asAlternate(request);
```

### Parameter: request

Description: iCalendar to AlternateView request

See parameter model documentation at [CalendarAsAlternateRequest](CalendarAsAlternateRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.calendarAsAlternateRequest()
    .value(Models.calendarDto()
        .attendees([
            Models.mailAddress()
                .displayName('Attendee Name')
                .address('attendee@aspose.com')
                .participationStatus('Accepted')
                .build()])
        .description('Some description')
        .endDate(new Date())
        .location('Some location')
        .organizer(Models.mailAddress()
            .displayName('Organizer Name')
            .address('organizer@aspose.com')
            .build())
        .recurrence(Models.dailyRecurrencePatternDto()
            .interval(-1)
            .occurs(10)
            .weekStart('Monday')
            .build())
        .startDate(new Date())
        .summary('Some summary')
        .build())
    .sequenceId('cf4ffb6c-895d-4e58-bdb4-0a3918e96a43')
    .build();
```

</details>

### Result

Description: iCalendar document represented as AlternateView

Return type: Promise< [AlternateView](AlternateView.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.alternateView()
    .base64Data('<File content represented as Base64 string>')
    .contentId('fa7a8948-4af1-432a-b4d9-ee0c28542e75')
    .contentType(Models.contentType()
        .charSet('utf-8')
        .mediaType('text/calendar')
        .name('meeting.ics')
        .parameters([
            Models.contentTypeParameter()
                .name('Method')
                .value('REQUEST')
                .build(),
            Models.contentTypeParameter()
                .name('Name')
                .value('meeting.ics')
                .build(),
            Models.contentTypeParameter()
                .name('charset')
                .value('utf-8')
                .build()])
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
let request = Models.calendarAsAlternateRequest()
    .value(Models.calendarDto()
        .attendees([
            Models.mailAddress()
                .displayName('Attendee Name')
                .address('attendee@aspose.com')
                .participationStatus('Accepted')
                .build()])
        .description('Some description')
        .endDate(new Date())
        .location('Some location')
        .organizer(Models.mailAddress()
            .displayName('Organizer Name')
            .address('organizer@aspose.com')
            .build())
        .recurrence(Models.dailyRecurrencePatternDto()
            .interval(-1)
            .occurs(10)
            .weekStart('Monday')
            .build())
        .startDate(new Date())
        .summary('Some summary')
        .build())
    .sequenceId('cf4ffb6c-895d-4e58-bdb4-0a3918e96a43')
    .build();

// Call method:
let result = api.calendar.asAlternate(request);

// Result example:
result = Models.alternateView()
    .base64Data('<File content represented as Base64 string>')
    .contentId('fa7a8948-4af1-432a-b4d9-ee0c28542e75')
    .contentType(Models.contentType()
        .charSet('utf-8')
        .mediaType('text/calendar')
        .name('meeting.ics')
        .parameters([
            Models.contentTypeParameter()
                .name('Method')
                .value('REQUEST')
                .build(),
            Models.contentTypeParameter()
                .name('Name')
                .value('meeting.ics')
                .build(),
            Models.contentTypeParameter()
                .name('charset')
                .value('utf-8')
                .build()])
        .build())
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="asFile"></a>
## **asFile**

Description: Converts calendar model to specified format and returns as file.             

Returns: File stream in specified format.

Method call example:
```typescript
let result = api.calendar.asFile(request);
```

### Parameter: request

Description: Calendar model and format to convert.

See parameter model documentation at [CalendarAsFileRequest](CalendarAsFileRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.calendarAsFileRequest()
    .value(Models.calendarDto()
        .attendees([
            Models.mailAddress()
                .displayName('Attendee Name')
                .address('attendee@aspose.com')
                .participationStatus('Accepted')
                .build()])
        .description('Some description')
        .endDate(new Date())
        .location('Some location')
        .organizer(Models.mailAddress()
            .displayName('Organizer Name')
            .address('organizer@aspose.com')
            .build())
        .recurrence(Models.dailyRecurrencePatternDto()
            .interval(-1)
            .occurs(10)
            .weekStart('Monday')
            .build())
        .startDate(new Date())
        .summary('Some summary')
        .build())
    .build();
```

</details>

### Result

Description: File stream in specified format.

Return type: Promise< Buffer >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.calendarAsFileRequest()
    .value(Models.calendarDto()
        .attendees([
            Models.mailAddress()
                .displayName('Attendee Name')
                .address('attendee@aspose.com')
                .participationStatus('Accepted')
                .build()])
        .description('Some description')
        .endDate(new Date())
        .location('Some location')
        .organizer(Models.mailAddress()
            .displayName('Organizer Name')
            .address('organizer@aspose.com')
            .build())
        .recurrence(Models.dailyRecurrencePatternDto()
            .interval(-1)
            .occurs(10)
            .weekStart('Monday')
            .build())
        .startDate(new Date())
        .summary('Some summary')
        .build())
    .build();

// Call method:
let result = api.calendar.asFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="asMapi"></a>
## **asMapi**

Description: Converts CalendarDto to MapiCalendarDto.             

Returns: MAPI model calendar representation.

Method call example:
```typescript
let result = api.calendar.asMapi(calendarDto);
```

### Parameter: calendarDto

Description: iCalendar model calendar representation.

See parameter model documentation at [CalendarDto](CalendarDto.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let calendarDto = Models.calendarDto()
    .attendees([
        Models.mailAddress()
            .displayName('Attendee Name')
            .address('attendee@aspose.com')
            .participationStatus('Accepted')
            .build()])
    .description('Some description')
    .endDate(new Date())
    .location('Some location')
    .organizer(Models.mailAddress()
        .displayName('Organizer Name')
        .address('organizer@aspose.com')
        .build())
    .recurrence(Models.dailyRecurrencePatternDto()
        .interval(-1)
        .occurs(10)
        .weekStart('Monday')
        .build())
    .startDate(new Date())
    .summary('Some summary')
    .build();
```

</details>

### Result

Description: MAPI model calendar representation.

Return type: Promise< [MapiCalendarDto](MapiCalendarDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.mapiCalendarDto()
    .attendees(Models.mapiCalendarAttendeesDto()
        .appointmentRecipients([
            Models.mapiRecipientDto()
                .emailAddress('organizer@aspose.com')
                .addressType('SMTP')
                .displayName('Organizer Name')
                .recipientType('MapiTo')
                .build(),
            Models.mapiRecipientDto()
                .emailAddress('attendee@aspose.com')
                .addressType('SMTP')
                .displayName('Attendee Name')
                .recipientType('MapiTo')
                .build()])
        .build())
    .busyStatus('Tentative')
    .clientIntent([
        'Manager'])
    .endDate(new Date())
    .location('Some location')
    .recurrence(Models.mapiCalendarEventRecurrenceDto()
        .recurrencePattern(Models.mapiCalendarDailyRecurrencePatternDto()
            .frequency('Daily')
            .occurrenceCount(10)
            .weekStartDay('Monday')
            .build())
        .build())
    .startDate(new Date())
    .organizer(Models.mapiElectronicAddressDto()
        .emailAddress('organizer@aspose.com')
        .build())
    .body('Some description')
    .subject('Some summary')
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let calendarDto = Models.calendarDto()
    .attendees([
        Models.mailAddress()
            .displayName('Attendee Name')
            .address('attendee@aspose.com')
            .participationStatus('Accepted')
            .build()])
    .description('Some description')
    .endDate(new Date())
    .location('Some location')
    .organizer(Models.mailAddress()
        .displayName('Organizer Name')
        .address('organizer@aspose.com')
        .build())
    .recurrence(Models.dailyRecurrencePatternDto()
        .interval(-1)
        .occurs(10)
        .weekStart('Monday')
        .build())
    .startDate(new Date())
    .summary('Some summary')
    .build();

// Call method:
let result = api.calendar.asMapi(calendarDto);

// Result example:
result = Models.mapiCalendarDto()
    .attendees(Models.mapiCalendarAttendeesDto()
        .appointmentRecipients([
            Models.mapiRecipientDto()
                .emailAddress('organizer@aspose.com')
                .addressType('SMTP')
                .displayName('Organizer Name')
                .recipientType('MapiTo')
                .build(),
            Models.mapiRecipientDto()
                .emailAddress('attendee@aspose.com')
                .addressType('SMTP')
                .displayName('Attendee Name')
                .recipientType('MapiTo')
                .build()])
        .build())
    .busyStatus('Tentative')
    .clientIntent([
        'Manager'])
    .endDate(new Date())
    .location('Some location')
    .recurrence(Models.mapiCalendarEventRecurrenceDto()
        .recurrencePattern(Models.mapiCalendarDailyRecurrencePatternDto()
            .frequency('Daily')
            .occurrenceCount(10)
            .weekStartDay('Monday')
            .build())
        .build())
    .startDate(new Date())
    .organizer(Models.mapiElectronicAddressDto()
        .emailAddress('organizer@aspose.com')
        .build())
    .body('Some description')
    .subject('Some summary')
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="convert"></a>
## **convert**

Description: Converts calendar document to specified format and returns as file.             

Returns: File stream in specified format.

Method call example:
```typescript
let result = api.calendar.convert(request);
```

### Parameter: request

Description: convert method request.

See parameter model documentation at [CalendarConvertRequest](CalendarConvertRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CalendarConvertRequest()
    .format('Ics')
    .file(fs.readFileSync('/path/to/calendar.msg'))
    .build();
```

</details>

### Result

Description: File stream in specified format.

Return type: Promise< Buffer >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.CalendarConvertRequest()
    .format('Ics')
    .file(fs.readFileSync('/path/to/calendar.msg'))
    .build();

// Call method:
let result = api.calendar.convert(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="fromFile"></a>
## **fromFile**

Description: Converts calendar document to a model representation.             

Returns: iCalendar model.

Method call example:
```typescript
let result = api.calendar.fromFile(request);
```

### Parameter: request

Description: fromFile method request.

See parameter model documentation at [CalendarFromFileRequest](CalendarFromFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CalendarFromFileRequest()
    .file(fs.readFileSync('/path/to/calendar.ics'))
    .build();
```

</details>

### Result

Description: iCalendar model.

Return type: Promise< [CalendarDto](CalendarDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.calendarDto()
    .attendees([
        Models.mailAddress()
            .displayName('Attendee Name')
            .address('attendee@aspose.com')
            .participationStatus('Accepted')
            .build()])
    .description('Some description')
    .endDate(new Date())
    .location('Some location')
    .organizer(Models.mailAddress()
        .displayName('Organizer Name')
        .address('organizer@aspose.com')
        .build())
    .recurrence(Models.dailyRecurrencePatternDto()
        .interval(-1)
        .occurs(10)
        .weekStart('Monday')
        .build())
    .startDate(new Date())
    .summary('Some summary')
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.CalendarFromFileRequest()
    .file(fs.readFileSync('/path/to/calendar.ics'))
    .build();

// Call method:
let result = api.calendar.fromFile(request);

// Result example:
result = Models.calendarDto()
    .attendees([
        Models.mailAddress()
            .displayName('Attendee Name')
            .address('attendee@aspose.com')
            .participationStatus('Accepted')
            .build()])
    .description('Some description')
    .endDate(new Date())
    .location('Some location')
    .organizer(Models.mailAddress()
        .displayName('Organizer Name')
        .address('organizer@aspose.com')
        .build())
    .recurrence(Models.dailyRecurrencePatternDto()
        .interval(-1)
        .occurs(10)
        .weekStart('Monday')
        .build())
    .startDate(new Date())
    .summary('Some summary')
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="get"></a>
## **get**

Description: Get calendar file from storage.             

Returns: iCalendar model.

Method call example:
```typescript
let result = api.calendar.get(request);
```

### Parameter: request

Description: get method request.

See parameter model documentation at [CalendarGetRequest](CalendarGetRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CalendarGetRequest()
    .fileName('calendar.ics')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();
```

</details>

### Result

Description: iCalendar model.

Return type: Promise< [CalendarDto](CalendarDto.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.calendarDto()
    .attendees([
        Models.mailAddress()
            .displayName('Attendee Name')
            .address('attendee@aspose.com')
            .participationStatus('Accepted')
            .build()])
    .description('Some description')
    .endDate(new Date())
    .location('Some location')
    .organizer(Models.mailAddress()
        .displayName('Organizer Name')
        .address('organizer@aspose.com')
        .build())
    .recurrence(Models.dailyRecurrencePatternDto()
        .interval(-1)
        .occurs(10)
        .weekStart('Monday')
        .build())
    .startDate(new Date())
    .summary('Some summary')
    .build();
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.CalendarGetRequest()
    .fileName('calendar.ics')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();

// Call method:
let result = api.calendar.get(request);

// Result example:
result = Models.calendarDto()
    .attendees([
        Models.mailAddress()
            .displayName('Attendee Name')
            .address('attendee@aspose.com')
            .participationStatus('Accepted')
            .build()])
    .description('Some description')
    .endDate(new Date())
    .location('Some location')
    .organizer(Models.mailAddress()
        .displayName('Organizer Name')
        .address('organizer@aspose.com')
        .build())
    .recurrence(Models.dailyRecurrencePatternDto()
        .interval(-1)
        .occurs(10)
        .weekStart('Monday')
        .build())
    .startDate(new Date())
    .summary('Some summary')
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getAsAlternate"></a>
## **getAsAlternate**

Description: Get iCalendar from storage as AlternateView             

Returns: iCalendar document represented as AlternateView

Method call example:
```typescript
let result = api.calendar.getAsAlternate(request);
```

### Parameter: request

Description: getAsAlternate method request.

See parameter model documentation at [CalendarGetAsAlternateRequest](CalendarGetAsAlternateRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CalendarGetAsAlternateRequest()
    .fileName('calendar.ics')
    .calendarAction('Create')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();
```

</details>

### Result

Description: iCalendar document represented as AlternateView

Return type: Promise< [AlternateView](AlternateView.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.alternateView()
    .base64Data('<File content represented as Base64 string>')
    .contentId('fa7a8948-4af1-432a-b4d9-ee0c28542e75')
    .contentType(Models.contentType()
        .charSet('utf-8')
        .mediaType('text/calendar')
        .name('meeting.ics')
        .parameters([
            Models.contentTypeParameter()
                .name('Method')
                .value('REQUEST')
                .build(),
            Models.contentTypeParameter()
                .name('Name')
                .value('meeting.ics')
                .build(),
            Models.contentTypeParameter()
                .name('charset')
                .value('utf-8')
                .build()])
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
let request = Models.CalendarGetAsAlternateRequest()
    .fileName('calendar.ics')
    .calendarAction('Create')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();

// Call method:
let result = api.calendar.getAsAlternate(request);

// Result example:
result = Models.alternateView()
    .base64Data('<File content represented as Base64 string>')
    .contentId('fa7a8948-4af1-432a-b4d9-ee0c28542e75')
    .contentType(Models.contentType()
        .charSet('utf-8')
        .mediaType('text/calendar')
        .name('meeting.ics')
        .parameters([
            Models.contentTypeParameter()
                .name('Method')
                .value('REQUEST')
                .build(),
            Models.contentTypeParameter()
                .name('Name')
                .value('meeting.ics')
                .build(),
            Models.contentTypeParameter()
                .name('charset')
                .value('utf-8')
                .build()])
        .build())
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getAsFile"></a>
## **getAsFile**

Description: Converts calendar document from storage to specified format and returns as file.             

Returns: File stream in specified format.

Method call example:
```typescript
let result = api.calendar.getAsFile(request);
```

### Parameter: request

Description: getAsFile method request.

See parameter model documentation at [CalendarGetAsFileRequest](CalendarGetAsFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CalendarGetAsFileRequest()
    .fileName('calendar.msg')
    .format('Ics')
    .storage('First Storage')
    .folder('calendar/file/location/on/storage')
    .build();
```

</details>

### Result

Description: File stream in specified format.

Return type: Promise< Buffer >

### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.CalendarGetAsFileRequest()
    .fileName('calendar.msg')
    .format('Ics')
    .storage('First Storage')
    .folder('calendar/file/location/on/storage')
    .build();

// Call method:
let result = api.calendar.getAsFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="getList"></a>
## **getList**

Description: Get iCalendar list from storage folder.             

Returns: iCalendar document list.

Method call example:
```typescript
let result = api.calendar.getList(request);
```

### Parameter: request

Description: getList method request.

See parameter model documentation at [CalendarGetListRequest](CalendarGetListRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.CalendarGetListRequest()
    .folder('some/folder/on/storage')
    .itemsPerPage(10)
    .pageNumber(0)
    .storage('First Storage')
    .build();
```

</details>

### Result

Description: iCalendar document list.

Return type: Promise< [CalendarStorageList](CalendarStorageList.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = Models.calendarStorageList()
    .value([
        Models.storageModelOfCalendarDto()
            .storageFile(Models.storageFileLocation()
                .fileName('calendar.ics')
                .storage('First Storage')
                .folderPath('file/location/folder/on/storage')
                .build())
            .value(Models.calendarDto()
                .attendees([
                    Models.mailAddress()
                        .displayName('Attendee Name')
                        .address('attendee@aspose.com')
                        .participationStatus('Accepted')
                        .build()])
                .description('Some description')
                .endDate(new Date())
                .location('Some location')
                .organizer(Models.mailAddress()
                    .displayName('Organizer Name')
                    .address('organizer@aspose.com')
                    .build())
                .recurrence(Models.dailyRecurrencePatternDto()
                    .interval(-1)
                    .occurs(10)
                    .weekStart('Monday')
                    .build())
                .startDate(new Date())
                .summary('Some summary')
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
let request = Models.CalendarGetListRequest()
    .folder('some/folder/on/storage')
    .itemsPerPage(10)
    .pageNumber(0)
    .storage('First Storage')
    .build();

// Call method:
let result = api.calendar.getList(request);

// Result example:
result = Models.calendarStorageList()
    .value([
        Models.storageModelOfCalendarDto()
            .storageFile(Models.storageFileLocation()
                .fileName('calendar.ics')
                .storage('First Storage')
                .folderPath('file/location/folder/on/storage')
                .build())
            .value(Models.calendarDto()
                .attendees([
                    Models.mailAddress()
                        .displayName('Attendee Name')
                        .address('attendee@aspose.com')
                        .participationStatus('Accepted')
                        .build()])
                .description('Some description')
                .endDate(new Date())
                .location('Some location')
                .organizer(Models.mailAddress()
                    .displayName('Organizer Name')
                    .address('organizer@aspose.com')
                    .build())
                .recurrence(Models.dailyRecurrencePatternDto()
                    .interval(-1)
                    .occurs(10)
                    .weekStart('Monday')
                    .build())
                .startDate(new Date())
                .summary('Some summary')
                .build())
            .build()])
    .build();
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="save"></a>
## **save**

Description: Save iCalendar             

Method call example:
```typescript
api.calendar.save(request);
```

### Parameter: request

Description: iCalendar create/update request

See parameter model documentation at [CalendarSaveRequest](CalendarSaveRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.calendarSaveRequest()
    .storageFile(Models.storageFileLocation()
        .fileName('calendar.ics')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .value(Models.calendarDto()
        .attendees([
            Models.mailAddress()
                .displayName('Attendee Name')
                .address('attendee@aspose.com')
                .participationStatus('Accepted')
                .build()])
        .description('Some description')
        .endDate(new Date())
        .location('Some location')
        .organizer(Models.mailAddress()
            .displayName('Organizer Name')
            .address('organizer@aspose.com')
            .build())
        .recurrence(Models.dailyRecurrencePatternDto()
            .interval(-1)
            .occurs(10)
            .weekStart('Monday')
            .build())
        .startDate(new Date())
        .summary('Some summary')
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
let request = Models.calendarSaveRequest()
    .storageFile(Models.storageFileLocation()
        .fileName('calendar.ics')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .value(Models.calendarDto()
        .attendees([
            Models.mailAddress()
                .displayName('Attendee Name')
                .address('attendee@aspose.com')
                .participationStatus('Accepted')
                .build()])
        .description('Some description')
        .endDate(new Date())
        .location('Some location')
        .organizer(Models.mailAddress()
            .displayName('Organizer Name')
            .address('organizer@aspose.com')
            .build())
        .recurrence(Models.dailyRecurrencePatternDto()
            .interval(-1)
            .occurs(10)
            .weekStart('Monday')
            .build())
        .startDate(new Date())
        .summary('Some summary')
        .build())
    .build();

// Call method:
api.calendar.save(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

