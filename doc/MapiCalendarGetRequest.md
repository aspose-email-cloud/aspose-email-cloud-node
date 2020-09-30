# MapiCalendarGetRequest

Request model for MapiCalendarApi.get

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fileName** | **string**| Calendar file name in storage. |
**folder** | **string**| Path to folder in storage. | [optional]
**storage** | **string**| Storage name. | [optional]

## Example
```typescript
let request = Models.MapiCalendarGetRequest()
    .fileName('calendar.msg')
    .folder('calendar/location/on/storage')
    .storage('First Storage')
    .build();
```
