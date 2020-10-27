# DiscUsage

Class for disc space information.

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**usedSize** | **number** | Application used disc space. | [default to undefined]
**totalSize** | **number** | Total disc space. | [default to undefined]


## Example
```typescript
let discUsage = Models.discUsage()
    .usedSize(1048576)
    .totalSize(3145728)
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
