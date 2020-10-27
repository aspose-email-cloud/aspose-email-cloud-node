# AlternateView

Represents the format to view a message.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**baseUri** | **string** | Base URI.              | [optional] [default to undefined]
**linkedResources** | [**Array&lt;LinkedResource&gt;**](LinkedResource.md) | Embedded resources referred to by this alternate view.              | [optional] [default to undefined]

 Parent class: [AttachmentBase](AttachmentBase.md)


## Example
```typescript
let alternateView = Models.alternateView()
    .base64Data('<File content represented as Base64 string>')
    .contentId('fa7a8948-4af1-432a-b4d9-ee0c28542e75')
    .contentType(Models.contentType()
        .charSet('utf-8')
        .mediaType('text/calendar')
        .name('meeting.ics')
        .parameters([
            Models.contentTypeParameter()
                .name('Method')
                .value('REQUEST')
                .build(),
            Models.contentTypeParameter()
                .name('Name')
                .value('meeting.ics')
                .build(),
            Models.contentTypeParameter()
                .name('charset')
                .value('utf-8')
                .build()])
        .build())
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
