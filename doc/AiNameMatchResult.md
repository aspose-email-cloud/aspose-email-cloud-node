# AiNameMatchResult

Two names match result             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**similarity** | **number** | Similarity score              | [default to undefined]
**mismatches** | [**Array&lt;AiNameMismatch&gt;**](AiNameMismatch.md) | Detailed description of mismatches              | [optional] [default to undefined]


## Example
```typescript
let aiNameMatchResult = Models.aiNameMatchResult()
    .similarity(0.6)
    .mismatches([
        Models.aiNameMismatch()
            .category('Gender')
            .explanation('no_match')
            .build()])
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
