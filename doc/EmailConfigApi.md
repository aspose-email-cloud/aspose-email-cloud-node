# EmailConfigApi

                    
<a name="discover"></a>
# **discover**
```typescript
public async discover(request: EmailConfigDiscoverRequest): Promise< EmailAccountConfigList >
```

Discover email accounts by email address. Does not validate discovered accounts.             

### Request Parameters
```typescript
new EmailConfigDiscover(
    address,
    fastProcessing=fastProcessing)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **address** | **string**| Email address. |
 **fastProcessing** | **boolean**| Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.              | [optional] [default to false]

### Return type

Promise< [EmailAccountConfigList](EmailAccountConfigList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="discoverOauth"></a>
# **discoverOauth**
```typescript
public async discoverOauth(request: model.EmailConfigDiscoverOauthRequest): Promise< EmailAccountConfigList >
```

Discover email accounts by email address. Validates discovered accounts using OAuth 2.0.             

### request Parameter

See parameter model documentation at [EmailConfigDiscoverOauthRequest](EmailConfigDiscoverOauthRequest.md)

### Return type

Promise< [EmailAccountConfigList](EmailAccountConfigList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="discoverPassword"></a>
# **discoverPassword**
```typescript
public async discoverPassword(request: model.EmailConfigDiscoverPasswordRequest): Promise< EmailAccountConfigList >
```

Discover email accounts by email address. Validates discovered accounts using login and password.             

### request Parameter

See parameter model documentation at [EmailConfigDiscoverPasswordRequest](EmailConfigDiscoverPasswordRequest.md)

### Return type

Promise< [EmailAccountConfigList](EmailAccountConfigList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

