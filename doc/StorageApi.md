# StorageApi

                    
<a name="getDiscUsage"></a>
# **getDiscUsage**
```typescript
public async getDiscUsage(request: GetDiscUsageRequest): Promise< DiscUsage >
```

Get disc usage

### Request Parameters
```typescript
new GetDiscUsage(
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **storageName** | **string**| Storage name | [optional]

### Return type

Promise< [DiscUsage](DiscUsage.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="getFileVersions"></a>
# **getFileVersions**
```typescript
public async getFileVersions(request: GetFileVersionsRequest): Promise< FileVersions >
```

Get file versions

### Request Parameters
```typescript
new GetFileVersions(
    path,
    storageName=storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**| File path e.g. &#39;/file.ext&#39; |
 **storageName** | **string**| Storage name | [optional]

### Return type

Promise< [FileVersions](FileVersions.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="objectExists"></a>
# **objectExists**
```typescript
public async objectExists(request: ObjectExistsRequest): Promise< ObjectExist >
```

Check if file or folder exists

### Request Parameters
```typescript
new ObjectExists(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **path** | **string**| File or folder path e.g. &#39;/file.ext&#39; or &#39;/folder&#39; |
 **storageName** | **string**| Storage name | [optional]
 **versionId** | **string**| File version ID | [optional]

### Return type

Promise< [ObjectExist](ObjectExist.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="exists"></a>
# **exists**
```typescript
public async exists(request: StorageExistsRequest): Promise< StorageExist >
```

Check if storage exists

### Request Parameters
```typescript
new StorageExists(
    storageName)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **storageName** | **string**| Storage name |

### Return type

Promise< [StorageExist](StorageExist.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

