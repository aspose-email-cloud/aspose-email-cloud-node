# MapiCalendarFromFileRequest

Request model for MapiCalendarApi.fromFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**file** | **byte[]**| File to convert |

## Example
```typescript
let request = Models.MapiCalendarFromFileRequest()
    .file(fs.readFileSync('/path/to/calendar.msg'))
    .build();
```
