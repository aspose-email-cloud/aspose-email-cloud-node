
# MapiMessageDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageBody** | **string** | Message text              | [optional] [default to undefined]
**clientSubmitTime** | **Date** | Date and time the message sender submitted a message.              | [default to undefined]
**conversationTopic** | **string** | Topic of the first message in a conversation thread.              | [optional] [default to undefined]
**deliveryTime** | **Date** | Date and time a message was delivered.              | [default to undefined]
**displayBcc** | **string** | List of the display names of any blind carbon copy (BCC) message recipients, separated by semicolons (;).              | [optional] [default to undefined]
**displayCc** | **string** | List of the display names of any carbon copy (CC) message recipients, separated by semicolons (;).              | [optional] [default to undefined]
**displayName** | **string** | Display name for the message.              | [optional] [default to undefined]
**displayNamePrefix** | **string** | Prefix of the display name.              | [optional] [default to undefined]
**displayTo** | **string** | List of the display names of the primary (To) message recipients, separated by semicolons (;).              | [optional] [default to undefined]
**flags** | **Array&lt;string&gt;** | Message flags.              Items: Mapi message flags. Enum, available values: MsgFlagZero, MsgFlagRead, MsgFlagUnmodified, MsgFlagSubmit, MsgFlagUnsent, MsgFlagHasAttach, MsgFlagFromMe, MsgFlagAssociated, MsgFlagResend, MsgFlagNotifyRead, MsgFlagNotifyUnread, MsgFlagEverRead, MsgFlagOriginX400, MsgFlagOriginInternet, MsgFlagOriginMiscExt | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** | Transport message headers              | [optional] [default to undefined]
**internetMessageId** | **string** | Internet message id of the message.              | [optional] [default to undefined]
**messageFormat** | **string** | Represents outlook message format. Enum, available values: Ascii, Unicode | [default to undefined]
**normalizedSubject** | **string** | Normalized subject of the message.              | [optional] [default to undefined]
**readReceiptRequested** | **boolean** | Value indicating whether the read receipt is requested. | [default to undefined]
**replyTo** | **string** | Reply to names. | [optional] [default to undefined]
**senderAddressType** | **string** | Message sender's e-mail address type. | [optional] [default to undefined]
**senderEmailAddress** | **string** | Message sender's e-mail address. | [optional] [default to undefined]
**senderName** | **string** | Message sender's display name. | [optional] [default to undefined]
**senderSmtpAddress** | **string** | Message sender's e-mail address. | [optional] [default to undefined]
**sentRepresentingAddressType** | **string** | Address type for the messaging user represented by the sender. | [optional] [default to undefined]
**sentRepresentingEmailAddress** | **string** | E-mail address for the messaging user represented by the sender. | [optional] [default to undefined]
**sentRepresentingName** | **string** | Display name for the messaging user represented by the sender. | [optional] [default to undefined]
**sentRepresentingSmtpAddress** | **string** | E-mail address for the messaging user represented by the sender. | [optional] [default to undefined]
**transportMessageHeaders** | **string** | Transport-specific message envelope information. | [optional] [default to undefined]

 Parent class: [MapiMessageItemBaseDto](MapiMessageItemBaseDto.md)

[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
