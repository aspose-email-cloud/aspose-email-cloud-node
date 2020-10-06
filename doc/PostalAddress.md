# PostalAddress

A postal address             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**address** | **string** | Address.              | [optional] [default to undefined]
**category** | [**EnumWithCustomOfPostalAddressCategory**](EnumWithCustomOfPostalAddressCategory.md) | Address category.              | [optional] [default to undefined]
**city** | **string** | Address's city.              | [optional] [default to undefined]
**country** | **string** | Address's country.              | [optional] [default to undefined]
**countryCode** | **string** | Country code.              | [optional] [default to undefined]
**isMailingAddress** | **boolean** | Defines whether address may be used for mailing.              | [default to undefined]
**postalCode** | **string** | Postal code.              | [optional] [default to undefined]
**postOfficeBox** | **string** | Post Office box.              | [optional] [default to undefined]
**preferred** | **boolean** | Defines whether postal address is preferred.              | [default to undefined]
**stateOrProvince** | **string** | Address's region.              | [optional] [default to undefined]
**street** | **string** | Address's street.              | [optional] [default to undefined]


## Example
```typescript
let postalAddress = Models.postalAddress()
    .address('221b')
    .category(Models.enumWithCustomOfPostalAddressCategory()
        
        .build())
    .city('London')
    .country('United Kingdom')
    .isMailingAddress(true)
    .postalCode('NW1 6XE')
    .preferred(true)
    .street('Baker St')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
