# CalendarStorageList

iCalendar models list with corresponding storage locations.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----

 Parent class: [ListResponseOfStorageModelOfCalendarDto](ListResponseOfStorageModelOfCalendarDto.md)


## Example
```typescript
let calendarStorageList = Models.calendarStorageList()
    .value([
        Models.storageModel<CalendarDto>()
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


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
