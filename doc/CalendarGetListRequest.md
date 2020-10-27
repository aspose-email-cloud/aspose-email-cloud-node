# CalendarGetListRequest

Request model for CalendarApi.getList

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**folder** | **string**| Path to folder in storage. |
**itemsPerPage** | **number**| Count of items on page. | [optional] [default to 10]
**pageNumber** | **number**| Page number. | [optional] [default to 0]
**storage** | **string**| Storage name. | [optional]

## Example
```typescript
let request = Models.CalendarGetListRequest()
    .folder('some/folder/on/storage')
    .itemsPerPage(10)
    .pageNumber(0)
    .storage('First Storage')
    .build();
```
