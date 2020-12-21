# EmailConfigDiscoverRequest

Request model for EmailConfigApi.discover

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**address** | **string**| Email address. |
**fastProcessing** | **boolean**| Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.              | [optional] [default to false]

## Example
```typescript
let request = Models.EmailConfigDiscoverRequest()
    .address('address@gmail.com')
    .build();
```
