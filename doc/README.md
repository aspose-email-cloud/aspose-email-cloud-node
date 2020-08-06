# Reference documentation for Aspose.Email Cloud API

`EmailCloud` is the main API class. It provides an access to all of Aspose.Email Cloud functions.
`AppKey` and `AppSid` credentials should be obtained from [dashboard](https://dashboard.aspose.cloud/#/) to use `EmailCloud`:

```typescript
String appKey = "Your App Key";
String appSid = "Your App SID";

let api = new EmailCloud(appKey, appSid);
```

All Aspose.Email Cloud functions are divided into groups and represented as `EmailCloud` fields:

API | Description
--- | -----------
[EmailCloud.**mapi**](MapiGroup.md) | MAPI operations.             
[EmailCloud.**client**](ClientGroup.md) | Builtin Email client operations.             
[EmailCloud.**ai**](AiGroup.md) | AI powered operations.             
[EmailCloud.**cloudStorage**](CloudStorageGroup.md) | Cloud file storage operations.             
[EmailCloud.**calendar**](CalendarApi_list.md) | iCalendar document operations.             
[EmailCloud.**contact**](ContactApi_list.md) | Contact document operations. Supported formats: VCard, MSG, WebDav             
[EmailCloud.**email**](EmailApi_list.md) | Email document (*.eml) operations.             
[EmailCloud.**disposableEmail**](DisposableEmailApi_list.md) | Check email address is disposable operations             
[EmailCloud.**emailConfig**](EmailConfigApi_list.md) | Email server configuration discovery.             


List of all available models is available in [Models.md](Models.md) file.