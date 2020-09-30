# ContactGetAsFileRequest

Request model for ContactApi.getAsFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**fileName** | **string**| Calendar document file name |
**toFormat** | **string**| File format Enum, available values: VCard, WebDav, Msg |
**fromFormat** | **string**| File format to convert from Enum, available values: VCard, WebDav, Msg |
**storage** | **string**| Storage name | [optional]
**folder** | **string**| Path to folder in storage | [optional]

## Example
```typescript
let request = Models.ContactGetAsFileRequest()
    .fileName('contact.msg')
    .toFormat('VCard')
    .fromFormat('Msg')
    .storage('First Storage')
    .folder('folder/on/storage')
    .build();
```
