# EmailAccountConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **string** | Email account display name              | [optional] [default to undefined]
**protocolType** | **string** | Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav | [default to undefined]
**host** | **string** | Email account host.              | [optional] [default to undefined]
**port** | **number** | Port.              | [optional] [default to undefined]
**socketType** | **string** | Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto | [default to undefined]
**authenticationTypes** | **Array&lt;string&gt;** | Supported authentication types.              Items: Email account authentication types. Enum, available values: NoAuth, OAuth2, PasswordCleartext, PasswordEncrypted, SmtpAfterPop, ClientIpAddress | [optional] [default to undefined]
**extraInfo** | [**Array&lt;NameValuePair&gt;**](NameValuePair.md) | Extra account information.              | [optional] [default to undefined]
**isValidated** | **boolean** | Determines that configuration validated. Set to false if validation skipped.              | [default to undefined]



[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
