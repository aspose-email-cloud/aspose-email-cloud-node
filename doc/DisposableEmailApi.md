# DisposableEmailApi (EmailCloud.disposableEmail)

Check email address is disposable operations

<a name="isDisposable"></a>
## **isDisposable**

Description: Check email address is disposable             

Returns: true if address is disposable

Method call example:
```typescript
let result = await api.disposableEmail.isDisposable(request);
```

### Parameter: request

Description: isDisposable method request.

See parameter model documentation at [DisposableEmailIsDisposableRequest](DisposableEmailIsDisposableRequest.md).

<details>
    <summary>Parameter initialization example:</summary>
    
```typescript
let request = Models.DisposableEmailIsDisposableRequest()
    .address('example@mailcatch.com')
    .build();
```

</details>

### Result

Description: true if address is disposable

Return type: Promise< [ValueTOfBoolean](ValueTOfBoolean.md) >

<details>
    <summary>Result example</summary>

```typescript
let result = ;
```

</details>


### Complete example

<details>
    <summary>Method call example:</summary>

```typescript
const api = new EmailCloud(app_key, app_sid);

// Prepare parameters:
let request = Models.DisposableEmailIsDisposableRequest()
    .address('example@mailcatch.com')
    .build();

// Call method:
let result = await api.disposableEmail.isDisposable(request);

// Result example:
result = ;
```

</details>

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

