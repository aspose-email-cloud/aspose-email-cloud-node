# MapiRecipientDto

Represents the recipient information in the Microsoft Outlook Message.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**emailAddress** | **string** | Email address of the message recipient or sender.              | [optional] [default to undefined]
**addressType** | **string** | Type of the address of the message recipient or sender.              | [optional] [default to undefined]
**displayName** | **string** | Display name of the message recipient or sender.              | [optional] [default to undefined]
**recipientType** | **string** | Represent the PR_RECIPIENT_TYPE property which contains the recipient type for a message recipient. Enum, available values: Unknown, MapiBcc, MapiCc, MapiP1, MapiSubmitted, MapiTo | [default to undefined]


## Example
```typescript
let mapiRecipientDto = Models.mapiRecipientDto()
    .emailAddress('to@aspose.com')
    .addressType('SMTP')
    .displayName('To Address')
    .recipientType('MapiTo')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
