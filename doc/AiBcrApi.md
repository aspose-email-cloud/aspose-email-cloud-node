
# AiBcrApi

                    
<a name="parse"></a>
# **parse**
```typescript
public async parse(request: AiBcrParseRequest): Promise< ContactList >
```

Parse images to vCard document models             

### Request Parameters
```typescript
new AiBcrParse(
    file,
    countries=countries,
    languages=languages,
    isSingle=isSingle)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **file** | **byte[]**| File to parse |
 **countries** | **string**| Comma-separated codes of countries. | [optional] [default to ]
 **languages** | **string**| Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \&quot;it\&quot; or \&quot;ita\&quot; for Italian); it&#39;s \&quot;\&quot; by default.              | [optional] [default to ]
 **isSingle** | **boolean**| Determines that image contains single VCard or more. | [optional] [default to true]

### Return type

Promise< [ContactList](ContactList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="parseStorage"></a>
# **parseStorage**
```typescript
public async parseStorage(request: model.AiBcrParseStorageRequest): Promise< StorageFileLocationList >
```

Parse images from storage to vCard files             

### request Parameter

See parameter model documentation at [AiBcrParseStorageRequest](AiBcrParseStorageRequest.md)

### Return type

Promise< [StorageFileLocationList](StorageFileLocationList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

