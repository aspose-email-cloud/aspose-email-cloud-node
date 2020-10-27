# ContactConvertRequest

Request model for ContactApi.convert

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**toFormat** | **string**| File format to convert to Enum, available values: VCard, WebDav, Msg |
**fromFormat** | **string**| File format to convert from Enum, available values: VCard, WebDav, Msg |
**file** | **byte[]**| File to convert |

## Example
```typescript
let request = Models.ContactConvertRequest()
    .toFormat('VCard')
    .fromFormat('Msg')
    .file(fs.readFileSync('/path/to/contact.msg'))
    .build();
```
