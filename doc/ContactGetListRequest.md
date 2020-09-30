# ContactGetListRequest

Request model for ContactApi.getList

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg |
**folder** | **string**| Path to folder in storage. | [optional]
**storage** | **string**| Storage name. | [optional]
**itemsPerPage** | **number**| Count of items on page. | [optional] [default to 10]
**pageNumber** | **number**| Page number. | [optional] [default to 0]

## Example
```typescript
let request = Models.ContactGetListRequest()
    .format('VCard')
    .folder('folder/on/storage')
    .storage('First Storage')
    .itemsPerPage(10)
    .pageNumber(0)
    .build();
```
