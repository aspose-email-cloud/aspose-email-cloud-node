# Url

Url and its category.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**category** | [**EnumWithCustomOfUrlCategory**](EnumWithCustomOfUrlCategory.md) | Url category.              | [optional] [default to undefined]
**preferred** | **boolean** | Defines whether url is preferred.              | [default to undefined]
**href** | **string** | URL.              | [optional] [default to undefined]


## Example
```typescript
let url = Models.url()
    .category(Models.enumWithCustomOfUrlCategory()
        .value('Work')
        .build())
    .preferred(true)
    .href('https://products.aspose.cloud/email')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
