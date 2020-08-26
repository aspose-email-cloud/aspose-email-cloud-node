# StorageApi

                    
<a name="getDiscUsage"></a>
# **getDiscUsage**
```typescript
public async getDiscUsage(request: GetDiscUsageRequest): Promise< DiscUsage >
```



### Request Parameters
```typescript
new GetDiscUsage(
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **storageName** | **string**|  | [optional]

### Return type

Promise< [DiscUsage](DiscUsage.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getFileVersions"></a>
# **getFileVersions**
```typescript
public async getFileVersions(request: GetFileVersionsRequest): Promise< FileVersions >
```



### Request Parameters
```typescript
new GetFileVersions(
    path,
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**|  |
 **storageName** | **string**|  | [optional]

### Return type

Promise< [FileVersions](FileVersions.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="objectExists"></a>
# **objectExists**
```typescript
public async objectExists(request: ObjectExistsRequest): Promise< ObjectExist >
```



### Request Parameters
```typescript
new ObjectExists(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**|  |
 **storageName** | **string**|  | [optional]
 **versionId** | **string**|  | [optional]

### Return type

Promise< [ObjectExist](ObjectExist.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="exists"></a>
# **exists**
```typescript
public async exists(request: StorageExistsRequest): Promise< StorageExist >
```



### Request Parameters
```typescript
new StorageExists(
    storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **storageName** | **string**|  |

### Return type

Promise< [StorageExist](StorageExist.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

