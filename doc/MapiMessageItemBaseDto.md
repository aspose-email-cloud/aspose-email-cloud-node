# MapiMessageItemBaseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**Array&lt;MapiAttachmentDto&gt;**](MapiAttachmentDto.md) | Message item attachments.              | [optional] [default to undefined]
**billing** | **string** | Billing information associated with an item.              | [optional] [default to undefined]
**body** | **string** | Message text.              | [optional] [default to undefined]
**bodyHtml** | **string** | Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.              | [optional] [default to undefined]
**bodyRtf** | **string** | RTF formatted message text.              | [optional] [default to undefined]
**bodyType** | **string** | The content type of message body. Enum, available values: PlainText, Html, Rtf | [default to undefined]
**categories** | **Array&lt;string&gt;** | Contains keywords or categories for the message object.              | [optional] [default to undefined]
**companies** | **Array&lt;string&gt;** | Contains the names of the companies that are associated with an item.              | [optional] [default to undefined]
**itemId** | **string** | The item id, uses with a server.              | [optional] [default to undefined]
**messageClass** | **string** | Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.              | [optional] [default to undefined]
**mileage** | **string** | Contains the mileage information that is associated with an item.              | [optional] [default to undefined]
**recipients** | [**Array&lt;MapiRecipientDto&gt;**](MapiRecipientDto.md) | Recipients of the message.              | [optional] [default to undefined]
**sensitivity** | **string** | Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential | [default to undefined]
**subject** | **string** | Subject of the message.              | [optional] [default to undefined]
**subjectPrefix** | **string** | Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.              | [optional] [default to undefined]
**properties** | [**Array&lt;MapiPropertyDto&gt;**](MapiPropertyDto.md) | List of MAPI properties              | [optional] [default to undefined]
**discriminator** | **string** |  | [default to undefined]



[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
