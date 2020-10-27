# AiNameWeightedVariants

Name variants             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**names** | [**Array&lt;AiNameWeighted&gt;**](AiNameWeighted.md) | List of name variations              | [optional] [default to undefined]
**comments** | **string** | Usually empty; can contain extra message describing some issue occurred during processing              | [optional] [default to undefined]


## Example
```typescript
let aiNameWeightedVariants = Models.aiNameWeightedVariants()
    .names([
        Models.aiNameWeighted()
            .name('J. Cane')
            .score(1)
            .build(),
        Models.aiNameWeighted()
            .name('Mr. Cane')
            .score(0.75)
            .build()])
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
