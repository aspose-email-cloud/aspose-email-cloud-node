# StorageExistsRequest

Request model for StorageApi.exists

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**storageName** | **string**| Storage name |

## Example
```typescript
let request = Models.StorageExistsRequest()
    .storageName('First Storage')
    .build();
```

