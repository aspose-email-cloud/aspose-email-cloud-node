# EmailConvertRequest

Request model for EmailApi.convert

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fromFormat** | **string**| File format to convert to Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
**toFormat** | **string**| File format to convert from Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
**file** | **byte[]**| File to convert |

## Example
```typescript
let request = Models.EmailConvertRequest()
    .fromFormat('Msg')
    .toFormat('Mhtml')
    .file(fs.readFileSync('/path/to/message.msg'))
    .build();
```
