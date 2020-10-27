# MapiMessageFromFileRequest

Request model for MapiMessageApi.fromFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string**| File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
**file** | **byte[]**| File to convert |

## Example
```typescript
let request = Models.MapiMessageFromFileRequest()
    .format('Msg')
    .file(fs.readFileSync('/path/to/message.msg'))
    .build();
```
