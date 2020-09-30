# DisposableEmailIsDisposableRequest

Request model for DisposableEmailApi.isDisposable

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**address** | **string**| An email address to check |

## Example
```typescript
let request = Models.DisposableEmailIsDisposableRequest()
    .address('example@mailcatch.com')
    .build();
```
