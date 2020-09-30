# EmailGetListRequest

Request model for EmailApi.getList

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string**| Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
**folder** | **string**| Path to folder in storage. | [optional]
**storage** | **string**| Storage name. | [optional]
**itemsPerPage** | **number**| Count of items on page. | [optional] [default to 10]
**pageNumber** | **number**| Page number. | [optional] [default to 0]

## Example
```typescript
let request = Models.EmailGetListRequest()
    .format('Eml')
    .folder('folder/on/storage')
    .storage('First Storage')
    .itemsPerPage(10)
    .pageNumber(0)
    .build();
```
