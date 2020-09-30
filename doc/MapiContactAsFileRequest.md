# MapiContactAsFileRequest

Convert MapiContact to file request.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string** | Enumerates contact formats. Enum, available values: VCard, WebDav, Msg | [default to undefined]
**value** | [**MapiContactDto**](MapiContactDto.md) | MAPI contact model.              | [default to undefined]


## Example
```typescript
let mapiContactAsFileRequest = Models.mapiContactAsFileRequest()
    .format('Msg')
    .value(Models.mapiContactDto()
        .electronicAddresses(Models.mapiContactElectronicAddressPropertySetDto()
            .defaultEmailAddress(Models.mapiContactElectronicAddressDto()
                .emailAddress('email@aspose.com')
                .build())
            .build())
        .nameInfo(Models.mapiContactNamePropertySetDto()
            .givenName('Alex')
            .surname('Thomas')
            .build())
        .personalInfo(Models.mapiContactPersonalInfoPropertySetDto()
            .businessHomePage('www.aspose.com')
            .build())
        .professionalInfo(Models.mapiContactProfessionalPropertySetDto()
            .profession('GENERAL DIRECTOR')
            .build())
        .telephones(Models.mapiContactTelephonePropertySetDto()
            .primaryTelephoneNumber('+49 211 4247 21')
            .build())
        .build())
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
