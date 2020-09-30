# AiNameGenderHypothesis

Name gender hypothesis             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**gender** | **string** | Recognized name gender. Enum, available values: Male, Female, Unknown | [default to undefined]
**score** | **number** | Hypothesis score              | [default to undefined]


## Example
```typescript
let aiNameGenderHypothesis = Models.aiNameGenderHypothesis()
    .score(0.8)
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
