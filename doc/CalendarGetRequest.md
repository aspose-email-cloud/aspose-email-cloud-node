# CalendarGetRequest

Request model for CalendarApi.get

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fileName** | **string**| iCalendar file name in storage. |
**folder** | **string**| Path to folder in storage. | [optional]
**storage** | **string**| Storage name. | [optional]

## Example
```typescript
let request = Models.CalendarGetRequest()
    .fileName('calendar.ics')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();
```
