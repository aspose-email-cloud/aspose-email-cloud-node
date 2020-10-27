# AiNameParseRequest

Request model for AiNameApi.parse

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**name** | **string**| A name to parse. |
**language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian).              | [optional] [default to ]
**location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France.              | [optional] [default to ]
**encoding** | **string**| A character encoding name. | [optional] [default to ]
**script** | **string**| A writing system code; starts with the ISO-15924 script name. | [optional] [default to ]
**style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

## Example
```typescript
let request = Models.AiNameParseRequest()
    .name('John Cane')
    .language('eng')
    .location('USA')
    .build();
```
