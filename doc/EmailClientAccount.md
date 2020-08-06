
# EmailClientAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **string** | Mail server host name or IP address              | [default to undefined]
**port** | **number** | Mail server port              | [default to undefined]
**securityOptions** | **string** | Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto | [default to undefined]
**protocolType** | **string** | Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav | [default to undefined]
**credentials** | [**EmailClientAccountCredentials**](EmailClientAccountCredentials.md) | Email client account credentials              | [default to undefined]
**cacheFile** | [**StorageFileLocation**](StorageFileLocation.md) | File with messages cache. Used to provide extra functions, which are not supported by account              | [optional] [default to undefined]



[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
