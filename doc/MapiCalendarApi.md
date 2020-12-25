# MapiCalendarApi (EmailCloud.mapi.calendar)

MAPI calendar operations.

<a name="asCalendarDto"></a>
## **asCalendarDto**

Description: Converts MAPI calendar model to CalendarDto model.             

Returns: CalendarDto model.

Method call example:
```typescript
let result = await api.mapi.calendar.asCalendarDto(mapiCalendarDto);
```

### Parameter: mapiCalendarDto

Description: MAPI calendar model to convert.

See parameter model documentation at [MapiCalendarDto](MapiCalendarDto.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let mapiCalendarDto = Models.mapiCalendarDto()
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

### Result

Description: CalendarDto model.

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
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let mapiCalendarDto = Models.mapiCalendarDto()
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

// Call method:
let result = await api.mapi.calendar.asCalendarDto(mapiCalendarDto);

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

<a name="asFile"></a>
## **asFile**

Description: Converts MAPI calendar model to specified format and returns as file.             

Returns: File stream in specified format.

Method call example:
```typescript
let result = await api.mapi.calendar.asFile(request);
```

### Parameter: request

Description: MAPI calendar model to convert.

See parameter model documentation at [MapiCalendarAsFileRequest](MapiCalendarAsFileRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.mapiCalendarAsFileRequest()
    .format('Msg')
    .value(Models.mapiCalendarDto()
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
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.mapiCalendarAsFileRequest()
    .format('Msg')
    .value(Models.mapiCalendarDto()
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
        .build())
    .build();

// Call method:
let result = await api.mapi.calendar.asFile(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

<a name="fromFile"></a>
## **fromFile**

Description: Converts calendar file to a MAPI model representation.             

Returns: MAPI model.

Method call example:
```typescript
let result = await api.mapi.calendar.fromFile(request);
```

### Parameter: request

Description: fromFile method request.

See parameter model documentation at [MapiCalendarFromFileRequest](MapiCalendarFromFileRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.MapiCalendarFromFileRequest()
    .file(fs.readFileSync('/path/to/calendar.msg'))
    .build();
```

</details>

### Result

Description: MAPI model.

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
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.MapiCalendarFromFileRequest()
    .file(fs.readFileSync('/path/to/calendar.msg'))
    .build();

// Call method:
let result = await api.mapi.calendar.fromFile(request);

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

<a name="get"></a>
## **get**

Description: Get MAPI calendar document.             

Returns: MAPI Calendar model.

Method call example:
```typescript
let result = await api.mapi.calendar.get(request);
```

### Parameter: request

Description: get method request.

See parameter model documentation at [MapiCalendarGetRequest](MapiCalendarGetRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.MapiCalendarGetRequest()
    .fileName('calendar.msg')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();
```

</details>

### Result

Description: MAPI Calendar model.

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
const api = new EmailCloud(clientSecret, clientId);

// Prepare parameters:
let request = Models.MapiCalendarGetRequest()
    .fileName('calendar.msg')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();

// Call method:
let result = await api.mapi.calendar.get(request);

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

<a name="save"></a>
## **save**

Description: Save MAPI Calendar to storage.             

Method call example:
```typescript
await api.mapi.calendar.save(request);
```

### Parameter: request

Description: Calendar create/update request.

See parameter model documentation at [MapiCalendarSaveRequest](MapiCalendarSaveRequest.md)

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.mapiCalendarSaveRequest()
    .format('Msg')
    .storageFile(Models.storageFileLocation()
        .fileName('calendar.msg')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .value(Models.mapiCalendarDto()
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
let request = Models.mapiCalendarSaveRequest()
    .format('Msg')
    .storageFile(Models.storageFileLocation()
        .fileName('calendar.msg')
        .storage('First Storage')
        .folderPath('file/location/folder/on/storage')
        .build())
    .value(Models.mapiCalendarDto()
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
        .build())
    .build();

// Call method:
await api.mapi.calendar.save(request);
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

