# CalendarGetAsFileRequest

Request model for CalendarApi.getAsFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fileName** | **string**| Calendar document file name. |
**format** | **string**| File format. Enum, available values: Ics, Msg |
**storage** | **string**| Storage name. | [optional]
**folder** | **string**| Path to folder in storage. | [optional]

## Example
```typescript
let request = Models.CalendarGetAsFileRequest()
    .fileName('calendar.msg')
    .format('Ics')
    .storage('First Storage')
    .folder('calendar/file/location/on/storage')
    .build();
```
