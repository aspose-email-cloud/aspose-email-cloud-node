# MapiContactFromFileRequest

Request model for MapiContactApi.fromFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string**| File format Enum, available values: VCard, WebDav, Msg |
**file** | **byte[]**| File to convert |

## Example
```typescript
let request = Models.MapiContactFromFileRequest()
    .format('Msg')
    .file(fs.readFileSync('/path/to/contact.msg'))
    .build();
```
