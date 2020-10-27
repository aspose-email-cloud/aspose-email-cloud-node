# EmailFromFileRequest

Request model for EmailApi.fromFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string**|  Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft |
**file** | **byte[]**| File to convert |

## Example
```typescript
let request = Models.EmailFromFileRequest()
    .format('Eml')
    .file(fs.readFileSync('/path/to/message.eml'))
    .build();
```
