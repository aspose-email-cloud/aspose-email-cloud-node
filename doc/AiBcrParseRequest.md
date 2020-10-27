# AiBcrParseRequest

Request model for AiBcrApi.parse

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**file** | **byte[]**| File to parse |
**countries** | **string**| Comma-separated codes of countries. | [optional] [default to ]
**languages** | **string**| Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default.              | [optional] [default to ]
**isSingle** | **boolean**| Determines that image contains single VCard or more. | [optional] [default to true]

## Example
```typescript
let request = Models.AiBcrParseRequest()
    .file(fs.readFileSync('/path/to/image.png'))
    .countries('us')
    .languages('en')
    .isSingle(true)
    .build();
```
