# MapiCalendarAsFileRequest

Convert MapiCalendar to file request.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string** | Calendar file format Enum, available values: Ics, Msg | [default to undefined]
**value** | [**MapiCalendarDto**](MapiCalendarDto.md) | MAPI calendar model.              | [default to undefined]


## Example
```typescript
let mapiCalendarAsFileRequest = Models.mapiCalendarAsFileRequest()
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


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
