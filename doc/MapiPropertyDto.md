# MapiPropertyDto

Mapi property             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**descriptor** | [**MapiPropertyDescriptor**](MapiPropertyDescriptor.md) | Property descriptor              | [optional] [default to undefined]
**discriminator** | **string** |  | [default to undefined]


## Example
```typescript
let mapiPropertyDto = Models.mapiPropertyDto()
    .descriptor(Models.mapiKnownPropertyDescriptor()
        .name('DisplayName')
        .build())
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
