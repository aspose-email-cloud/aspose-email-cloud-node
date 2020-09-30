# EmailConfigDiscoverOauthRequest

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**clientId** | **string** | OAuth client id.              | [default to undefined]
**clientSecret** | **string** | OAuth client secret.              | [default to undefined]
**refreshToken** | **string** | OAuth refresh token.              | [default to undefined]
**requestUrl** | **string** | The url to obtain access token. If not specified, will be discovered from email configuration.              | [optional] [default to undefined]

 Parent class: [DiscoverEmailConfigRequest](DiscoverEmailConfigRequest.md)


## Example
```typescript
let emailConfigDiscoverOauthRequest = Models.emailConfigDiscoverOauthRequest()
    .clientId('ClientId')
    .clientSecret('ClientSecret')
    .refreshToken('RefreshToken')
    .address('example@aspose.com')
    .fastProcessing(true)
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
