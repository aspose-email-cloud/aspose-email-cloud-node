# AiNameFormatted

Formatted name             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**name** | **string** | Formatted name value              | [optional] [default to undefined]
**comments** | **string** | Usually empty; can contain extra message describing some issue occurred during the formatting              | [optional] [default to undefined]


## Example
```typescript
let aiNameFormatted = Models.aiNameFormatted()
    .name('Mr. Cane J. M.')
    .comments('format: %t%L%f%m; source: parsed format')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
