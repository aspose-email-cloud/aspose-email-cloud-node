# MapiAttachmentDto

Mapi attachment             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**name** | **string** | Attachment's name              | [optional] [default to undefined]
**dataBase64** | **string** | Attachment data represented as Base64 string.              | [optional] [default to undefined]


## Example
```typescript
let mapiAttachmentDto = Models.mapiAttachmentDto()
    .name('some-file.txt')
    .dataBase64('U29tZSBmaWxlIHRleHQ=')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
