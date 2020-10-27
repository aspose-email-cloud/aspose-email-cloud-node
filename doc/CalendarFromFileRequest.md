# CalendarFromFileRequest

Request model for CalendarApi.fromFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**file** | **byte[]**| File to convert |

## Example
```typescript
let request = Models.CalendarFromFileRequest()
    .file(fs.readFileSync('/path/to/calendar.ics'))
    .build();
```
