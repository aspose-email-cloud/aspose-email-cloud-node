# PhoneNumber

A phone number.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**category** | [**EnumWithCustomOfPhoneNumberCategory**](EnumWithCustomOfPhoneNumberCategory.md) | Phone number category.              | [optional] [default to undefined]
**number** | **string** | Phone number.              | [optional] [default to undefined]
**preferred** | **boolean** | Defines whether phone number is preferred.              | [default to undefined]


## Example
```typescript
let phoneNumber = Models.phoneNumber()
    .category(Models.enumWithCustomOfPhoneNumberCategory()
        .value('Company')
        .build())
    .number('+44 141 628 8900')
    .preferred(true)
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
