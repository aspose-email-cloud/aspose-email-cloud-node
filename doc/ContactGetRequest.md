# ContactGetRequest

Request model for ContactApi.get

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg |
**fileName** | **string**| Contact document file name. |
**folder** | **string**| Path to folder in storage. | [optional]
**storage** | **string**| Storage name. | [optional]

## Example
```typescript
let request = Models.ContactGetRequest()
    .format('VCard')
    .fileName('contact.vcf')
    .folder('folder/on/storage')
    .storage('First Storage')
    .build();
```
