# MapiCalendarDto

Represents the mapi calendar object             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**appointmentCounterProposal** | **boolean** | Value indicating whether a Meeting Response object is a counter proposal.              | [default to undefined]
**attendees** | [**MapiCalendarAttendeesDto**](MapiCalendarAttendeesDto.md) | Attendees              | [optional] [default to undefined]
**busyStatus** | **string** | Enumerates the mapi calendar possible busy status Enum, available values: Free, Tentative, Busy, OutOfOffice | [default to undefined]
**clientIntent** | **Array&lt;string&gt;** | Actions the user has taken on this Meeting object.              Items: Enumerates the actions the user can taken on the Meeting object Enum, available values: Manager, Delegate, DeletedWithNoResponse, DeletedExceptionWithNoResponse, RespondedTentative, RespondedAccept, RespondedDecline, ModifiedStartTime, ModifiedEndTime, ModifiedLocation, RespondedExceptionDecline, Canceled, ExceptionCanceled | [optional] [default to undefined]
**endDate** | **Date** | End date and time of the event. If the date is not set, default value for DateTime is returned.              | [default to undefined]
**endDateTimeZone** | [**MapiCalendarTimeZoneDto**](MapiCalendarTimeZoneDto.md) | Time zone information that indicates the time zone of the EndDate property.              | [optional] [default to undefined]
**isAllDay** | **boolean** | Value indicating whether the event is an all-day event.              | [default to undefined]
**keyWords** | **string** | Categories of the calendar object.              | [optional] [default to undefined]
**location** | **string** | Location of the event.              | [optional] [default to undefined]
**recurrence** | [**MapiCalendarEventRecurrenceDto**](MapiCalendarEventRecurrenceDto.md) | Recurrence properties.              | [optional] [default to undefined]
**reminderDelta** | **number** | Interval, in minutes, between the time at which the reminder first becomes overdue and the start time of the Calendar object.              | [default to undefined]
**reminderFileParameter** | **string** | Full path of the sound that a client SHOULD play when the reminder becomes overdue.              | [optional] [default to undefined]
**reminderSet** | **boolean** | Value indicating whether a reminder is set on the object.              | [default to undefined]
**sequence** | **number** | Sequence number.              | [default to undefined]
**startDate** | **Date** | Start date and time of the event. If the date is not set, default value for DateTime is returned.              | [default to undefined]
**startDateTimeZone** | [**MapiCalendarTimeZoneDto**](MapiCalendarTimeZoneDto.md) | Time zone information that indicates the time zone of the StartDate property.              | [optional] [default to undefined]
**uid** | **string** | Unique identifier.              | [optional] [default to undefined]
**organizer** | [**MapiElectronicAddressDto**](MapiElectronicAddressDto.md) | Organizer              | [optional] [default to undefined]

 Parent class: [MapiMessageItemBaseDto](MapiMessageItemBaseDto.md)


## Example
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


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
