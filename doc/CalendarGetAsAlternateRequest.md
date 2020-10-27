# CalendarGetAsAlternateRequest

Request model for CalendarApi.getAsAlternate

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fileName** | **string**| iCalendar file name in storage |
**calendarAction** | **string**| iCalendar method type Enum, available values: Create, Update, Cancel |
**sequenceId** | **string**| The sequence id | [optional]
**folder** | **string**| Path to folder in storage | [optional]
**storage** | **string**| Storage name | [optional]

## Example
```typescript
let request = Models.CalendarGetAsAlternateRequest()
    .fileName('calendar.ics')
    .calendarAction('Create')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();
```
