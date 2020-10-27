# CalendarConvertRequest

Request model for CalendarApi.convert

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string**| File format. Enum, available values: Ics, Msg |
**file** | **byte[]**| File to convert |

## Example
```typescript
let request = Models.CalendarConvertRequest()
    .format('Ics')
    .file(fs.readFileSync('/path/to/calendar.msg'))
    .build();
```
