# AiNameExtracted

Extracted name             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**name** | [**Array&lt;AiNameExtractedComponent&gt;**](AiNameExtractedComponent.md) | Extracted name components              | [optional] [default to undefined]
**score** | **number** | Extracted name score              | [default to undefined]


## Example
```typescript
let aiNameExtracted = Models.aiNameExtracted()
    .name([
        Models.aiNameExtractedComponent()
            .category('Surname')
            .value('Cane')
            .build(),
        Models.aiNameExtractedComponent()
            .category('SomeName')
            .value('John')
            .build()])
    .score(0.5)
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
