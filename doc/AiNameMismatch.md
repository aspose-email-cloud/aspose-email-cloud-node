# AiNameMismatch

Names mismatch detailed description             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**category** | **string** | Mismatch type. Enum, available values: Unknown, FirstName, MiddleName, MiddleLastName, MiddleNickname, Gender, Context | [default to undefined]
**similarity** | **number** | Similarity score              | [default to undefined]
**explanation** | **string** | Explanation or mismatch subtype              | [optional] [default to undefined]


## Example
```typescript
let aiNameMismatch = Models.aiNameMismatch()
    .category('Gender')
    .explanation('no_match')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
