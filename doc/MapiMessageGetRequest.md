# MapiMessageGetRequest

Request model for MapiMessageApi.get

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string**| Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
**fileName** | **string**| Email document file name. |
**folder** | **string**| Path to folder in storage. | [optional]
**storage** | **string**| Storage name. | [optional]

## Example
```typescript
let request = Models.MapiMessageGetRequest()
    .format('Eml')
    .fileName('email.eml')
    .folder('folder/on/storage')
    .storage('First Storage')
    .build();
```
