
# EmailApi

<a name="addcalendarattachment"></a>
# **addCalendarAttachment**

```typescript
public async addCalendarAttachment(requestObj: AddCalendarAttachmentRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Adds an attachment to iCalendar file             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new AddCalendarAttachmentRequest(
    name,
    attachment,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Calendar file name in storage | 
 **attachment** | **string**| Attachment file name in storage | 
 **request** | [**AddAttachmentRequest**](AddAttachmentRequest.md)| Storage name and folder path for calendar and attachment files | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="addcontactattachment"></a>
# **addContactAttachment**

```typescript
public async addContactAttachment(requestObj: AddContactAttachmentRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Add attachment to contact document             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new AddContactAttachmentRequest(
    format,
    name,
    attachment,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format Enum, available values: VCard, WebDav, Msg | 
 **name** | **string**| Contact document file name | 
 **attachment** | **string**| Attachment name | 
 **request** | [**AddAttachmentRequest**](AddAttachmentRequest.md)| Add attachment request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="addemailattachment"></a>
# **addEmailAttachment**

```typescript
public async addEmailAttachment(requestObj: AddEmailAttachmentRequest) : Promise<{response: RequestResponse, body: EmailDocumentResponse; }>
```

Adds an attachment to Email document             

### Return type

`Promise<{response: RequestResponse, body: EmailDocumentResponse; }>`

### Request Parameters
```typescript
new AddEmailAttachmentRequest(
    attachmentName,
    fileName,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentName** | **string**| Attachment file name | 
 **fileName** | **string**| Email document file name | 
 **request** | [**AddAttachmentRequest**](AddAttachmentRequest.md)| Storage info to specify location of email document and attachment files | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="addmapiattachment"></a>
# **addMapiAttachment**

```typescript
public async addMapiAttachment(requestObj: AddMapiAttachmentRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Add attachment to document             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new AddMapiAttachmentRequest(
    name,
    attachment,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Document file name | 
 **attachment** | **string**| Attachment file name | 
 **request** | [**AddAttachmentRequest**](AddAttachmentRequest.md)| Add attachment request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="aibcrocr"></a>
# **aiBcrOcr**

```typescript
public async aiBcrOcr(requestObj: AiBcrOcrRequest) : Promise<{response: RequestResponse, body: ListResponseOfAiBcrOcrData; }>
```

Ocr images             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfAiBcrOcrData; }>`

### Request Parameters
```typescript
new AiBcrOcrRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiBcrBase64Rq**](AiBcrBase64Rq.md)| Request with base64 images data | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="aibcrocrstorage"></a>
# **aiBcrOcrStorage**

```typescript
public async aiBcrOcrStorage(requestObj: AiBcrOcrStorageRequest) : Promise<{response: RequestResponse, body: ListResponseOfAiBcrOcrData; }>
```

Ocr images from storage             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfAiBcrOcrData; }>`

### Request Parameters
```typescript
new AiBcrOcrStorageRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiBcrStorageImageRq**](AiBcrStorageImageRq.md)| Request with images located on storage | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="aibcrparse"></a>
# **aiBcrParse**

```typescript
public async aiBcrParse(requestObj: AiBcrParseRequest) : Promise<{response: RequestResponse, body: ListResponseOfHierarchicalObject; }>
```

Parse images to vCard properties             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfHierarchicalObject; }>`

### Request Parameters
```typescript
new AiBcrParseRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiBcrBase64Rq**](AiBcrBase64Rq.md)| Request with base64 images data | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="aibcrparsemodel"></a>
# **aiBcrParseModel**

```typescript
public async aiBcrParseModel(requestObj: AiBcrParseModelRequest) : Promise<{response: RequestResponse, body: ListResponseOfContactDto; }>
```

Parse images to vCard document models             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfContactDto; }>`

### Request Parameters
```typescript
new AiBcrParseModelRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiBcrBase64Rq**](AiBcrBase64Rq.md)| Request with base64 images data | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="aibcrparseocrdatamodel"></a>
# **aiBcrParseOcrDataModel**

```typescript
public async aiBcrParseOcrDataModel(requestObj: AiBcrParseOcrDataModelRequest) : Promise<{response: RequestResponse, body: ListResponseOfContactDto; }>
```

Parse OCR data to vCard document models             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfContactDto; }>`

### Request Parameters
```typescript
new AiBcrParseOcrDataModelRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiBcrParseOcrDataRq**](AiBcrParseOcrDataRq.md)|  | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="aibcrparsestorage"></a>
# **aiBcrParseStorage**

```typescript
public async aiBcrParseStorage(requestObj: AiBcrParseStorageRequest) : Promise<{response: RequestResponse, body: ListResponseOfStorageFileLocation; }>
```

Parse images from storage to vCard files             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfStorageFileLocation; }>`

### Request Parameters
```typescript
new AiBcrParseStorageRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiBcrParseStorageRq**](AiBcrParseStorageRq.md)| Request with images located on storage | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainamecomplete"></a>
# **aiNameComplete**

```typescript
public async aiNameComplete(requestObj: AiNameCompleteRequest) : Promise<{response: RequestResponse, body: AiNameWeightedVariants; }>
```

The call proposes k most probable names for given starting characters             

### Return type

`Promise<{response: RequestResponse, body: AiNameWeightedVariants; }>`

### Request Parameters
```typescript
new AiNameCompleteRequest(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| A name to complete (required) | 
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian)              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France              | [optional] [default to ]
 **encoding** | **string**| A character encoding name | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainameexpand"></a>
# **aiNameExpand**

```typescript
public async aiNameExpand(requestObj: AiNameExpandRequest) : Promise<{response: RequestResponse, body: AiNameWeightedVariants; }>
```

Expands a person's name into a list of possible alternatives using options for expanding instructions             

### Return type

`Promise<{response: RequestResponse, body: AiNameWeightedVariants; }>`

### Request Parameters
```typescript
new AiNameExpandRequest(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| A name to format (required) | 
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian)              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France              | [optional] [default to ]
 **encoding** | **string**| A character encoding name | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainameexpandparsed"></a>
# **aiNameExpandParsed**

```typescript
public async aiNameExpandParsed(requestObj: AiNameExpandParsedRequest) : Promise<{response: RequestResponse, body: AiNameWeightedVariants; }>
```

Expands a person's parsed name into a list of possible alternatives using options for expanding instructions             

### Return type

`Promise<{response: RequestResponse, body: AiNameWeightedVariants; }>`

### Request Parameters
```typescript
new AiNameExpandParsedRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiNameParsedRq**](AiNameParsedRq.md)| Parsed name with options | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainameformat"></a>
# **aiNameFormat**

```typescript
public async aiNameFormat(requestObj: AiNameFormatRequest) : Promise<{response: RequestResponse, body: AiNameFormatted; }>
```

Formats a person's name in correct case and name order using options for formatting instructions             

### Return type

`Promise<{response: RequestResponse, body: AiNameFormatted; }>`

### Request Parameters
```typescript
new AiNameFormatRequest(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    format=format,
    style=style)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| A name to format (required) | 
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian)              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France              | [optional] [default to ]
 **encoding** | **string**| A character encoding name | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name | [optional] [default to ]
 **format** | **string**| Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (&#x3D; &#39;%t%F%m%N%L%p&#39;)     /format/FN+LN/ (&#x3D; &#39;%F%L&#39;)     /format/title+FN+LN/ (&#x3D; &#39;%t%F%L&#39;)     /format/FN+MN+LN/ (&#x3D; &#39;%F%M%N%L&#39;)     /format/title+FN+MN+LN/ (&#x3D; &#39;%t%F%M%N%L&#39;)     /format/FN+MI+LN/ (&#x3D; &#39;%F%m%N%L&#39;)     /format/title+FN+MI+LN/ (&#x3D; &#39;%t%F%m%N%L&#39;)     /format/LN/ (&#x3D; &#39;%L&#39;)     /format/title+LN/ (&#x3D; &#39;%t%L&#39;)     /format/LN+FN+MN/ (&#x3D; &#39;%L,%F%M%N&#39;)     /format/LN+title+FN+MN/ (&#x3D; &#39;%L,%t%F%M%N&#39;)     /format/LN+FN+MI/ (&#x3D; &#39;%L,%F%m%N&#39;)     /format/LN+title+FN+MI/ (&#x3D; &#39;%L,%t%F%m%N&#39;)  Custom format string - custom combination of characters and the next term placeholders:      &#39;%t&#39; - Title (prefix)     &#39;%F&#39; - First name     &#39;%f&#39; - First initial     &#39;%M&#39; - Middle name(s)     &#39;%m&#39; - Middle initial(s)     &#39;%N&#39; - Nickname     &#39;%L&#39; - Last name     &#39;%l&#39; - Last initial     &#39;%p&#39; - Postfix  If no value for format option was provided, its default value is &#39;%t%F%m%N%L%p&#39;              | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainameformatparsed"></a>
# **aiNameFormatParsed**

```typescript
public async aiNameFormatParsed(requestObj: AiNameFormatParsedRequest) : Promise<{response: RequestResponse, body: AiNameFormatted; }>
```

Formats a person's parsed name in correct case and name order using options for formatting instructions             

### Return type

`Promise<{response: RequestResponse, body: AiNameFormatted; }>`

### Request Parameters
```typescript
new AiNameFormatParsedRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiNameParsedRq**](AiNameParsedRq.md)| Parsed name with options | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainamegenderize"></a>
# **aiNameGenderize**

```typescript
public async aiNameGenderize(requestObj: AiNameGenderizeRequest) : Promise<{response: RequestResponse, body: ListResponseOfAiNameGenderHypothesis; }>
```

Detect person's gender from name string             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfAiNameGenderHypothesis; }>`

### Request Parameters
```typescript
new AiNameGenderizeRequest(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| A name to parse (required) | 
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian)              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France              | [optional] [default to ]
 **encoding** | **string**| A character encoding name | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainamegenderizeparsed"></a>
# **aiNameGenderizeParsed**

```typescript
public async aiNameGenderizeParsed(requestObj: AiNameGenderizeParsedRequest) : Promise<{response: RequestResponse, body: ListResponseOfAiNameGenderHypothesis; }>
```

Detect person's gender from parsed name             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfAiNameGenderHypothesis; }>`

### Request Parameters
```typescript
new AiNameGenderizeParsedRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiNameParsedRq**](AiNameParsedRq.md)| Gender detection request data | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainamematch"></a>
# **aiNameMatch**

```typescript
public async aiNameMatch(requestObj: AiNameMatchRequest) : Promise<{response: RequestResponse, body: AiNameMatchResult; }>
```

Compare people's names. Uses options for comparing instructions             

### Return type

`Promise<{response: RequestResponse, body: AiNameMatchResult; }>`

### Request Parameters
```typescript
new AiNameMatchRequest(
    name,
    otherName,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| A name to match (required) | 
 **otherName** | **string**| Another name to match (required) | 
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian)              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France              | [optional] [default to ]
 **encoding** | **string**| A character encoding name | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainamematchparsed"></a>
# **aiNameMatchParsed**

```typescript
public async aiNameMatchParsed(requestObj: AiNameMatchParsedRequest) : Promise<{response: RequestResponse, body: AiNameMatchResult; }>
```

Compare people's parsed names and attributes. Uses options for comparing instructions             

### Return type

`Promise<{response: RequestResponse, body: AiNameMatchResult; }>`

### Request Parameters
```typescript
new AiNameMatchParsedRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AiNameParsedMatchRq**](AiNameParsedMatchRq.md)| Parsed names to match | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainameparse"></a>
# **aiNameParse**

```typescript
public async aiNameParse(requestObj: AiNameParseRequest) : Promise<{response: RequestResponse, body: ListResponseOfAiNameComponent; }>
```

Parse name to components             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfAiNameComponent; }>`

### Request Parameters
```typescript
new AiNameParseRequest(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| A name to parse (required) | 
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian)              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France              | [optional] [default to ]
 **encoding** | **string**| A character encoding name | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name | [optional] [default to ]
 **style** | **string**| Name writing style Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="ainameparseemailaddress"></a>
# **aiNameParseEmailAddress**

```typescript
public async aiNameParseEmailAddress(requestObj: AiNameParseEmailAddressRequest) : Promise<{response: RequestResponse, body: ListResponseOfAiNameExtracted; }>
```

Parse person's name out of an email address             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfAiNameExtracted; }>`

### Request Parameters
```typescript
new AiNameParseEmailAddressRequest(
    emailAddress,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailAddress** | **string**| Email address to parse (required) | 
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian)              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France              | [optional] [default to ]
 **encoding** | **string**| A character encoding name | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="appendemailmessage"></a>
# **appendEmailMessage**

```typescript
public async appendEmailMessage(requestObj: AppendEmailMessageRequest) : Promise<{response: RequestResponse, body: EmailPropertyResponse; }>
```

Adds an email from *.eml file to specified folder in email account             

### Return type

`Promise<{response: RequestResponse, body: EmailPropertyResponse; }>`

### Request Parameters
```typescript
new AppendEmailMessageRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**AppendEmailBaseRequest**](AppendEmailBaseRequest.md)| Append email request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="appendemailmodelmessage"></a>
# **appendEmailModelMessage**

```typescript
public async appendEmailModelMessage(requestObj: AppendEmailModelMessageRequest) : Promise<{response: RequestResponse, body: ValueResponse; }>
```

Adds an email from model to specified folder in email account             

### Return type

`Promise<{response: RequestResponse, body: ValueResponse; }>`

### Request Parameters
```typescript
new AppendEmailModelMessageRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**AppendEmailModelRq**](AppendEmailModelRq.md)| Append email request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="appendmimemessage"></a>
# **appendMimeMessage**

```typescript
public async appendMimeMessage(requestObj: AppendMimeMessageRequest) : Promise<{response: RequestResponse, body: ValueResponse; }>
```

Adds an email from MIME to specified folder in email account             

### Return type

`Promise<{response: RequestResponse, body: ValueResponse; }>`

### Request Parameters
```typescript
new AppendMimeMessageRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**AppendEmailMimeBaseRequest**](AppendEmailMimeBaseRequest.md)| Append email request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="convertcalendar"></a>
# **convertCalendar**

```typescript
public async convertCalendar(requestObj: ConvertCalendarRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts calendar document to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new ConvertCalendarRequest(
    format,
    file)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| File format Enum, available values: Ics, Msg | 
 **file** | **Buffer**| File to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="convertcalendarmodeltoalternate"></a>
# **convertCalendarModelToAlternate**

```typescript
public async convertCalendarModelToAlternate(requestObj: ConvertCalendarModelToAlternateRequest) : Promise<{response: RequestResponse, body: AlternateView; }>
```

Convert iCalendar to AlternateView             

### Return type

`Promise<{response: RequestResponse, body: AlternateView; }>`

### Request Parameters
```typescript
new ConvertCalendarModelToAlternateRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**CalendarDtoAlternateRq**](CalendarDtoAlternateRq.md)| iCalendar to AlternateView request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="convertcalendarmodeltofile"></a>
# **convertCalendarModelToFile**

```typescript
public async convertCalendarModelToFile(requestObj: ConvertCalendarModelToFileRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts calendar model to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new ConvertCalendarModelToFileRequest(
    format,
    calendarDto)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| File format Enum, available values: Ics, Msg | 
 **calendarDto** | [**CalendarDto**](CalendarDto.md)| Calendar model to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="convertcontact"></a>
# **convertContact**

```typescript
public async convertContact(requestObj: ConvertContactRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts contact document to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new ConvertContactRequest(
    destinationFormat,
    format,
    file)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destinationFormat** | **string**| File format to convert to Enum, available values: VCard, WebDav, Msg | 
 **format** | **string**| File format to convert from Enum, available values: VCard, WebDav, Msg | 
 **file** | **Buffer**| File to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="convertcontactmodeltofile"></a>
# **convertContactModelToFile**

```typescript
public async convertContactModelToFile(requestObj: ConvertContactModelToFileRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts contact model to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new ConvertContactModelToFileRequest(
    destinationFormat,
    contactDto)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destinationFormat** | **string**| File format Enum, available values: VCard, WebDav, Msg | 
 **contactDto** | [**ContactDto**](ContactDto.md)| Contact model to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="convertemail"></a>
# **convertEmail**

```typescript
public async convertEmail(requestObj: ConvertEmailRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts email document to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new ConvertEmailRequest(
    format,
    file)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html | 
 **file** | **Buffer**| File to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="convertemailmodeltofile"></a>
# **convertEmailModelToFile**

```typescript
public async convertEmailModelToFile(requestObj: ConvertEmailModelToFileRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts Email model to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new ConvertEmailModelToFileRequest(
    destinationFormat,
    emailDto)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destinationFormat** | **string**| File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html | 
 **emailDto** | [**EmailDto**](EmailDto.md)| Email model to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="copyfile"></a>
# **copyFile**

```typescript
public async copyFile(requestObj: CopyFileRequest) : Promise<{response: RequestResponse, body?: any; }>
```



### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new CopyFileRequest(
    srcPath,
    destPath,
    srcStorageName=srcStorageName,
    destStorageName=destStorageName,
    versionId=versionId)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **string**|  | 
 **destPath** | **string**|  | 
 **srcStorageName** | **string**|  | [optional] 
 **destStorageName** | **string**|  | [optional] 
 **versionId** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="copyfolder"></a>
# **copyFolder**

```typescript
public async copyFolder(requestObj: CopyFolderRequest) : Promise<{response: RequestResponse, body?: any; }>
```



### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new CopyFolderRequest(
    srcPath,
    destPath,
    srcStorageName=srcStorageName,
    destStorageName=destStorageName)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **string**|  | 
 **destPath** | **string**|  | 
 **srcStorageName** | **string**|  | [optional] 
 **destStorageName** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="createcalendar"></a>
# **createCalendar**

```typescript
public async createCalendar(requestObj: CreateCalendarRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Create calendar file             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new CreateCalendarRequest(
    name,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Calendar file name in storage | 
 **request** | [**HierarchicalObjectRequest**](HierarchicalObjectRequest.md)|  | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="createcontact"></a>
# **createContact**

```typescript
public async createContact(requestObj: CreateContactRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Create contact document             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new CreateContactRequest(
    format,
    name,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format Enum, available values: VCard, WebDav, Msg | 
 **name** | **string**| Contact document file name | 
 **request** | [**HierarchicalObjectRequest**](HierarchicalObjectRequest.md)| Create contact request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="createemail"></a>
# **createEmail**

```typescript
public async createEmail(requestObj: CreateEmailRequest) : Promise<{response: RequestResponse, body: EmailDocumentResponse; }>
```

Create an email document             

### Return type

`Promise<{response: RequestResponse, body: EmailDocumentResponse; }>`

### Request Parameters
```typescript
new CreateEmailRequest(
    fileName,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **string**| Email document file name in storage | 
 **request** | [**CreateEmailRequest**](CreateEmailRequest.md)| An email document and optional Storage info to specify where the file should be located              | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="createemailfolder"></a>
# **createEmailFolder**

```typescript
public async createEmailFolder(requestObj: CreateEmailFolderRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Create new folder in email account             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new CreateEmailFolderRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateFolderBaseRequest**](CreateFolderBaseRequest.md)| Create folder request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="createfolder"></a>
# **createFolder**

```typescript
public async createFolder(requestObj: CreateFolderRequest) : Promise<{response: RequestResponse, body?: any; }>
```



### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new CreateFolderRequest(
    path,
    storageName=storageName)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**|  | 
 **storageName** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="createmapi"></a>
# **createMapi**

```typescript
public async createMapi(requestObj: CreateMapiRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Create new document             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new CreateMapiRequest(
    name,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Document file name | 
 **request** | [**HierarchicalObjectRequest**](HierarchicalObjectRequest.md)| Create document request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deletecalendarproperty"></a>
# **deleteCalendarProperty**

```typescript
public async deleteCalendarProperty(requestObj: DeleteCalendarPropertyRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Deletes indexed property by index and name. To delete Reminder attachment, use path ReminderAttachment/{ReminderIndex}/{AttachmentIndex}             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteCalendarPropertyRequest(
    name,
    memberName,
    index,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| iCalendar file name in storage | 
 **memberName** | **string**| Indexed property name | 
 **index** | **string**| Property index path | 
 **request** | [**StorageFolderLocation**](StorageFolderLocation.md)| Storage detail to specify iCalendar file location | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deletecontactproperty"></a>
# **deleteContactProperty**

```typescript
public async deleteContactProperty(requestObj: DeleteContactPropertyRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Delete property from indexed property list             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteContactPropertyRequest(
    format,
    name,
    memberName,
    index,
    folder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format Enum, available values: VCard, WebDav, Msg | 
 **name** | **string**| Contact document file name | 
 **memberName** | **string**| Indexed property name | 
 **index** | **number**| Property index | 
 **folder** | [**StorageFolderLocation**](StorageFolderLocation.md)| Calendar document location in storage information | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deleteemailfolder"></a>
# **deleteEmailFolder**

```typescript
public async deleteEmailFolder(requestObj: DeleteEmailFolderRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Delete a folder in email account             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteEmailFolderRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DeleteFolderBaseRequest**](DeleteFolderBaseRequest.md)| Delete folder request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deleteemailmessage"></a>
# **deleteEmailMessage**

```typescript
public async deleteEmailMessage(requestObj: DeleteEmailMessageRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Delete message from email account by id             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteEmailMessageRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DeleteMessageBaseRequest**](DeleteMessageBaseRequest.md)| Delete message request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deleteemailthread"></a>
# **deleteEmailThread**

```typescript
public async deleteEmailThread(requestObj: DeleteEmailThreadRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Delete thread by id. All messages from thread will also be deleted             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteEmailThreadRequest(
    threadId,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **string**| Thread id | 
 **request** | [**DeleteEmailThreadAccountRq**](DeleteEmailThreadAccountRq.md)| Email account specifier | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deletefile"></a>
# **deleteFile**

```typescript
public async deleteFile(requestObj: DeleteFileRequest) : Promise<{response: RequestResponse, body?: any; }>
```



### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteFileRequest(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**|  | 
 **storageName** | **string**|  | [optional] 
 **versionId** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deletefolder"></a>
# **deleteFolder**

```typescript
public async deleteFolder(requestObj: DeleteFolderRequest) : Promise<{response: RequestResponse, body?: any; }>
```



### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteFolderRequest(
    path,
    storageName=storageName,
    recursive=recursive)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**|  | 
 **storageName** | **string**|  | [optional] 
 **recursive** | **boolean**|  | [optional] [default to false]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deletemapiattachment"></a>
# **deleteMapiAttachment**

```typescript
public async deleteMapiAttachment(requestObj: DeleteMapiAttachmentRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Remove attachment from document             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteMapiAttachmentRequest(
    name,
    attachment,
    storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Document file name | 
 **attachment** | **string**| Attachment name or index | 
 **storage** | [**StorageFolderLocation**](StorageFolderLocation.md)| Document file storage location info | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="deletemapiproperties"></a>
# **deleteMapiProperties**

```typescript
public async deleteMapiProperties(requestObj: DeleteMapiPropertiesRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Delete document properties             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new DeleteMapiPropertiesRequest(
    name,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Document file name | 
 **request** | [**HierarchicalObjectRequest**](HierarchicalObjectRequest.md)| Properties that should be deleted | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="discoveremailconfig"></a>
# **discoverEmailConfig**

```typescript
public async discoverEmailConfig(requestObj: DiscoverEmailConfigRequest) : Promise<{response: RequestResponse, body: EmailAccountConfigList; }>
```

Discover email accounts by email address. Does not validate discovered accounts.             

### Return type

`Promise<{response: RequestResponse, body: EmailAccountConfigList; }>`

### Request Parameters
```typescript
new DiscoverEmailConfigRequest(
    address,
    fastProcessing=fastProcessing)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **string**| Email address | 
 **fastProcessing** | **boolean**| Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned              | [optional] [default to false]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="discoveremailconfigoauth"></a>
# **discoverEmailConfigOauth**

```typescript
public async discoverEmailConfigOauth(requestObj: DiscoverEmailConfigOauthRequest) : Promise<{response: RequestResponse, body: EmailAccountConfigList; }>
```

Discover email accounts by email address. Validates discovered accounts using OAuth 2.0.             

### Return type

`Promise<{response: RequestResponse, body: EmailAccountConfigList; }>`

### Request Parameters
```typescript
new DiscoverEmailConfigOauthRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**DiscoverEmailConfigOauth**](DiscoverEmailConfigOauth.md)| Discover email configuration request. | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="discoveremailconfigpassword"></a>
# **discoverEmailConfigPassword**

```typescript
public async discoverEmailConfigPassword(requestObj: DiscoverEmailConfigPasswordRequest) : Promise<{response: RequestResponse, body: EmailAccountConfigList; }>
```

Discover email accounts by email address. Validates discovered accounts using login and password.             

### Return type

`Promise<{response: RequestResponse, body: EmailAccountConfigList; }>`

### Request Parameters
```typescript
new DiscoverEmailConfigPasswordRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**DiscoverEmailConfigPassword**](DiscoverEmailConfigPassword.md)| Discover email configuration request. | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="downloadfile"></a>
# **downloadFile**

```typescript
public async downloadFile(requestObj: DownloadFileRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```



### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new DownloadFileRequest(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**|  | 
 **storageName** | **string**|  | [optional] 
 **versionId** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="fetchemailmessage"></a>
# **fetchEmailMessage**

```typescript
public async fetchEmailMessage(requestObj: FetchEmailMessageRequest) : Promise<{response: RequestResponse, body: MimeResponse; }>
```

Fetch message mime from email account             

### Return type

`Promise<{response: RequestResponse, body: MimeResponse; }>`

### Request Parameters
```typescript
new FetchEmailMessageRequest(
    messageId,
    firstAccount,
    secondAccount=secondAccount,
    folder=folder,
    storage=storage,
    storageFolder=storageFolder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **string**| Message identifier | 
 **firstAccount** | **string**| Email account | 
 **secondAccount** | **string**| Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)              | [optional] 
 **folder** | **string**| Account folder to fetch from (should be specified for some protocols such as IMAP)              | [optional] 
 **storage** | **string**| Storage name where account file(s) located | [optional] 
 **storageFolder** | **string**| Folder in storage where account file(s) located | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="fetchemailmodel"></a>
# **fetchEmailModel**

```typescript
public async fetchEmailModel(requestObj: FetchEmailModelRequest) : Promise<{response: RequestResponse, body: EmailDto; }>
```

Fetch message model from email account             

### Return type

`Promise<{response: RequestResponse, body: EmailDto; }>`

### Request Parameters
```typescript
new FetchEmailModelRequest(
    messageId,
    firstAccount,
    secondAccount=secondAccount,
    folder=folder,
    storage=storage,
    storageFolder=storageFolder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | **string**| Message identifier | 
 **firstAccount** | **string**| Email account | 
 **secondAccount** | **string**| Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)              | [optional] 
 **folder** | **string**| Account folder to fetch from (should be specified for some protocols such as IMAP)              | [optional] 
 **storage** | **string**| Storage name where account file(s) located | [optional] 
 **storageFolder** | **string**| Folder in storage where account file(s) located | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="fetchemailthreadmessages"></a>
# **fetchEmailThreadMessages**

```typescript
public async fetchEmailThreadMessages(requestObj: FetchEmailThreadMessagesRequest) : Promise<{response: RequestResponse, body: ListResponseOfEmailDto; }>
```

Get messages from thread by id. All messages are fully fetched. For accounts with CacheFile only cached messages will be returned.             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfEmailDto; }>`

### Request Parameters
```typescript
new FetchEmailThreadMessagesRequest(
    threadId,
    firstAccount,
    secondAccount=secondAccount,
    folder=folder,
    storage=storage,
    storageFolder=storageFolder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **string**| Thread identifier | 
 **firstAccount** | **string**| Email account | 
 **secondAccount** | **string**| Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)              | [optional] 
 **folder** | **string**| Specifies account folder to get thread from              | [optional] 
 **storage** | **string**| Storage name where account file(s) located | [optional] 
 **storageFolder** | **string**| Folder in storage where account file(s) located | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcalendar"></a>
# **getCalendar**

```typescript
public async getCalendar(requestObj: GetCalendarRequest) : Promise<{response: RequestResponse, body: HierarchicalObject; }>
```

Get calendar file properties             

### Return type

`Promise<{response: RequestResponse, body: HierarchicalObject; }>`

### Request Parameters
```typescript
new GetCalendarRequest(
    name,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| iCalendar file name in storage | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcalendarasfile"></a>
# **getCalendarAsFile**

```typescript
public async getCalendarAsFile(requestObj: GetCalendarAsFileRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts calendar document from storage to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new GetCalendarAsFileRequest(
    fileName,
    format,
    storage=storage,
    folder=folder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **string**| Calendar document file name | 
 **format** | **string**| File format Enum, available values: Ics, Msg | 
 **storage** | **string**| Storage name | [optional] 
 **folder** | **string**| Path to folder in storage | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcalendarattachment"></a>
# **getCalendarAttachment**

```typescript
public async getCalendarAttachment(requestObj: GetCalendarAttachmentRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Get iCalendar document attachment by name             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new GetCalendarAttachmentRequest(
    name,
    attachment,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| iCalendar document file name | 
 **attachment** | **string**| Attachment name or index | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcalendarfileasmodel"></a>
# **getCalendarFileAsModel**

```typescript
public async getCalendarFileAsModel(requestObj: GetCalendarFileAsModelRequest) : Promise<{response: RequestResponse, body: CalendarDto; }>
```

Converts calendar document to a model representation             

### Return type

`Promise<{response: RequestResponse, body: CalendarDto; }>`

### Request Parameters
```typescript
new GetCalendarFileAsModelRequest(
    file)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **Buffer**| File to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcalendarlist"></a>
# **getCalendarList**

```typescript
public async getCalendarList(requestObj: GetCalendarListRequest) : Promise<{response: RequestResponse, body: ListResponseOfHierarchicalObjectResponse; }>
```

Get iCalendar files list in folder on storage             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfHierarchicalObjectResponse; }>`

### Request Parameters
```typescript
new GetCalendarListRequest(
    folder,
    itemsPerPage,
    pageNumber,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder** | **string**| Path to folder in storage | 
 **itemsPerPage** | **number**| Count of items on page | 
 **pageNumber** | **number**| Page number | 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcalendarmodel"></a>
# **getCalendarModel**

```typescript
public async getCalendarModel(requestObj: GetCalendarModelRequest) : Promise<{response: RequestResponse, body: CalendarDto; }>
```

Get calendar file             

### Return type

`Promise<{response: RequestResponse, body: CalendarDto; }>`

### Request Parameters
```typescript
new GetCalendarModelRequest(
    name,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| iCalendar file name in storage | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcalendarmodelasalternate"></a>
# **getCalendarModelAsAlternate**

```typescript
public async getCalendarModelAsAlternate(requestObj: GetCalendarModelAsAlternateRequest) : Promise<{response: RequestResponse, body: AlternateView; }>
```

Get iCalendar from storage as AlternateView             

### Return type

`Promise<{response: RequestResponse, body: AlternateView; }>`

### Request Parameters
```typescript
new GetCalendarModelAsAlternateRequest(
    name,
    calendarAction,
    sequenceId=sequenceId,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| iCalendar file name in storage | 
 **calendarAction** | **string**| iCalendar method type Enum, available values: Create, Update, Cancel | 
 **sequenceId** | **string**| The sequence id | [optional] 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcalendarmodellist"></a>
# **getCalendarModelList**

```typescript
public async getCalendarModelList(requestObj: GetCalendarModelListRequest) : Promise<{response: RequestResponse, body: CalendarDtoList; }>
```

Get iCalendar list from storage folder             

### Return type

`Promise<{response: RequestResponse, body: CalendarDtoList; }>`

### Request Parameters
```typescript
new GetCalendarModelListRequest(
    folder,
    itemsPerPage=itemsPerPage,
    pageNumber=pageNumber,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder** | **string**| Path to folder in storage | 
 **itemsPerPage** | **number**| Count of items on page | [optional] [default to 10]
 **pageNumber** | **number**| Page number | [optional] [default to 0]
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcontactasfile"></a>
# **getContactAsFile**

```typescript
public async getContactAsFile(requestObj: GetContactAsFileRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts calendar document from storage to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new GetContactAsFileRequest(
    fileName,
    destinationFormat,
    format,
    storage=storage,
    folder=folder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **string**| Calendar document file name | 
 **destinationFormat** | **string**| File format Enum, available values: VCard, WebDav, Msg | 
 **format** | **string**| File format to convert from Enum, available values: VCard, WebDav, Msg | 
 **storage** | **string**| Storage name | [optional] 
 **folder** | **string**| Path to folder in storage | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcontactattachment"></a>
# **getContactAttachment**

```typescript
public async getContactAttachment(requestObj: GetContactAttachmentRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Get attachment file by name             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new GetContactAttachmentRequest(
    format,
    name,
    attachment,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg | 
 **name** | **string**| Contact document file name | 
 **attachment** | **string**| Attachment name or index | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcontactfileasmodel"></a>
# **getContactFileAsModel**

```typescript
public async getContactFileAsModel(requestObj: GetContactFileAsModelRequest) : Promise<{response: RequestResponse, body: ContactDto; }>
```

Converts contact document to a model representation             

### Return type

`Promise<{response: RequestResponse, body: ContactDto; }>`

### Request Parameters
```typescript
new GetContactFileAsModelRequest(
    format,
    file)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| File format Enum, available values: VCard, WebDav, Msg | 
 **file** | **Buffer**| File to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcontactlist"></a>
# **getContactList**

```typescript
public async getContactList(requestObj: GetContactListRequest) : Promise<{response: RequestResponse, body: ListResponseOfHierarchicalObjectResponse; }>
```

Get contact list from storage folder             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfHierarchicalObjectResponse; }>`

### Request Parameters
```typescript
new GetContactListRequest(
    format,
    folder=folder,
    storage=storage,
    itemsPerPage=itemsPerPage,
    pageNumber=pageNumber)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 
 **itemsPerPage** | **number**| Count of items on page | [optional] [default to 10]
 **pageNumber** | **number**| Page number | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcontactmodel"></a>
# **getContactModel**

```typescript
public async getContactModel(requestObj: GetContactModelRequest) : Promise<{response: RequestResponse, body: ContactDto; }>
```

Get contact document.             

### Return type

`Promise<{response: RequestResponse, body: ContactDto; }>`

### Request Parameters
```typescript
new GetContactModelRequest(
    format,
    name,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg | 
 **name** | **string**| Contact document file name. | 
 **folder** | **string**| Path to folder in storage. | [optional] 
 **storage** | **string**| Storage name. | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcontactmodellist"></a>
# **getContactModelList**

```typescript
public async getContactModelList(requestObj: GetContactModelListRequest) : Promise<{response: RequestResponse, body: ContactDtoList; }>
```

Get contact list from storage folder.             

### Return type

`Promise<{response: RequestResponse, body: ContactDtoList; }>`

### Request Parameters
```typescript
new GetContactModelListRequest(
    format,
    folder=folder,
    storage=storage,
    itemsPerPage=itemsPerPage,
    pageNumber=pageNumber)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg | 
 **folder** | **string**| Path to folder in storage. | [optional] 
 **storage** | **string**| Storage name. | [optional] 
 **itemsPerPage** | **number**| Count of items on page. | [optional] [default to 10]
 **pageNumber** | **number**| Page number. | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getcontactproperties"></a>
# **getContactProperties**

```typescript
public async getContactProperties(requestObj: GetContactPropertiesRequest) : Promise<{response: RequestResponse, body: HierarchicalObject; }>
```

Get contact document properties             

### Return type

`Promise<{response: RequestResponse, body: HierarchicalObject; }>`

### Request Parameters
```typescript
new GetContactPropertiesRequest(
    format,
    name,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg | 
 **name** | **string**| Contact document file name | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getdiscusage"></a>
# **getDiscUsage**

```typescript
public async getDiscUsage(requestObj: GetDiscUsageRequest) : Promise<{response: RequestResponse, body: DiscUsage; }>
```



### Return type

`Promise<{response: RequestResponse, body: DiscUsage; }>`

### Request Parameters
```typescript
new GetDiscUsageRequest(
    storageName=storageName)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageName** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemail"></a>
# **getEmail**

```typescript
public async getEmail(requestObj: GetEmailRequest) : Promise<{response: RequestResponse, body: EmailDocument; }>
```

Get email document             

### Return type

`Promise<{response: RequestResponse, body: EmailDocument; }>`

### Request Parameters
```typescript
new GetEmailRequest(
    fileName,
    storage=storage,
    folder=folder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **string**| Email document file name in storage | 
 **storage** | **string**| Storage name | [optional] 
 **folder** | **string**| Path to folder in storage | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemailasfile"></a>
# **getEmailAsFile**

```typescript
public async getEmailAsFile(requestObj: GetEmailAsFileRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Converts email document from storage to specified format and returns as file             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new GetEmailAsFileRequest(
    fileName,
    format,
    storage=storage,
    folder=folder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **string**| Email document file name | 
 **format** | **string**| File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html | 
 **storage** | **string**| Storage name | [optional] 
 **folder** | **string**| Path to folder in storage | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemailattachment"></a>
# **getEmailAttachment**

```typescript
public async getEmailAttachment(requestObj: GetEmailAttachmentRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Get email attachment by name             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new GetEmailAttachmentRequest(
    attachment,
    fileName,
    storage=storage,
    folder=folder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachment** | **string**| Attachment name | 
 **fileName** | **string**| Email document file name | 
 **storage** | **string**| Storage name | [optional] 
 **folder** | **string**| Path to folder in storage | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemailclientaccount"></a>
# **getEmailClientAccount**

```typescript
public async getEmailClientAccount(requestObj: GetEmailClientAccountRequest) : Promise<{response: RequestResponse, body: EmailClientAccount; }>
```

Get email client account from storage             

### Return type

`Promise<{response: RequestResponse, body: EmailClientAccount; }>`

### Request Parameters
```typescript
new GetEmailClientAccountRequest(
    name,
    folder,
    storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| File name on storage | 
 **folder** | **string**| Folder on storage | 
 **storage** | **string**| Storage name | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemailclientmultiaccount"></a>
# **getEmailClientMultiAccount**

```typescript
public async getEmailClientMultiAccount(requestObj: GetEmailClientMultiAccountRequest) : Promise<{response: RequestResponse, body: EmailClientMultiAccount; }>
```

Get email client multi account file (*.multi.account). Will respond error if file extension is not \".multi.account\".             

### Return type

`Promise<{response: RequestResponse, body: EmailClientMultiAccount; }>`

### Request Parameters
```typescript
new GetEmailClientMultiAccountRequest(
    name,
    folder,
    storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| File name on storage | 
 **folder** | **string**| Folder on storage | 
 **storage** | **string**| Storage name | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemailfileasmodel"></a>
# **getEmailFileAsModel**

```typescript
public async getEmailFileAsModel(requestObj: GetEmailFileAsModelRequest) : Promise<{response: RequestResponse, body: EmailDto; }>
```

Converts email document to a model representation             

### Return type

`Promise<{response: RequestResponse, body: EmailDto; }>`

### Request Parameters
```typescript
new GetEmailFileAsModelRequest(
    file)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **Buffer**| File to convert | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemailmodel"></a>
# **getEmailModel**

```typescript
public async getEmailModel(requestObj: GetEmailModelRequest) : Promise<{response: RequestResponse, body: EmailDto; }>
```

Get email document.             

### Return type

`Promise<{response: RequestResponse, body: EmailDto; }>`

### Request Parameters
```typescript
new GetEmailModelRequest(
    format,
    name,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html | 
 **name** | **string**| Email document file name. | 
 **folder** | **string**| Path to folder in storage. | [optional] 
 **storage** | **string**| Storage name. | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemailmodellist"></a>
# **getEmailModelList**

```typescript
public async getEmailModelList(requestObj: GetEmailModelListRequest) : Promise<{response: RequestResponse, body: EmailDtoList; }>
```

Get email list from storage folder.             

### Return type

`Promise<{response: RequestResponse, body: EmailDtoList; }>`

### Request Parameters
```typescript
new GetEmailModelListRequest(
    format,
    folder=folder,
    storage=storage,
    itemsPerPage=itemsPerPage,
    pageNumber=pageNumber)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html | 
 **folder** | **string**| Path to folder in storage. | [optional] 
 **storage** | **string**| Storage name. | [optional] 
 **itemsPerPage** | **number**| Count of items on page. | [optional] [default to 10]
 **pageNumber** | **number**| Page number. | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getemailproperty"></a>
# **getEmailProperty**

```typescript
public async getEmailProperty(requestObj: GetEmailPropertyRequest) : Promise<{response: RequestResponse, body: EmailPropertyResponse; }>
```

Get an email document property by its name             

### Return type

`Promise<{response: RequestResponse, body: EmailPropertyResponse; }>`

### Request Parameters
```typescript
new GetEmailPropertyRequest(
    propertyName,
    fileName,
    storage=storage,
    folder=folder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyName** | **string**| A property name | 
 **fileName** | **string**| Email document file name | 
 **storage** | **string**| Storage name | [optional] 
 **folder** | **string**| Path to folder in storage | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getfileversions"></a>
# **getFileVersions**

```typescript
public async getFileVersions(requestObj: GetFileVersionsRequest) : Promise<{response: RequestResponse, body: FileVersions; }>
```



### Return type

`Promise<{response: RequestResponse, body: FileVersions; }>`

### Request Parameters
```typescript
new GetFileVersionsRequest(
    path,
    storageName=storageName)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**|  | 
 **storageName** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getfileslist"></a>
# **getFilesList**

```typescript
public async getFilesList(requestObj: GetFilesListRequest) : Promise<{response: RequestResponse, body: FilesList; }>
```



### Return type

`Promise<{response: RequestResponse, body: FilesList; }>`

### Request Parameters
```typescript
new GetFilesListRequest(
    path,
    storageName=storageName)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**|  | 
 **storageName** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getmapiattachment"></a>
# **getMapiAttachment**

```typescript
public async getMapiAttachment(requestObj: GetMapiAttachmentRequest) : Promise<{response: RequestResponse, body: Buffer; }>
```

Get document attachment as file stream             

### Return type

`Promise<{response: RequestResponse, body: Buffer; }>`

### Request Parameters
```typescript
new GetMapiAttachmentRequest(
    name,
    attachment,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Document file name | 
 **attachment** | **string**| Attachment name or index | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getmapiattachments"></a>
# **getMapiAttachments**

```typescript
public async getMapiAttachments(requestObj: GetMapiAttachmentsRequest) : Promise<{response: RequestResponse, body: ListResponseOfString; }>
```

Get document attachment list             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfString; }>`

### Request Parameters
```typescript
new GetMapiAttachmentsRequest(
    name,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Document file name | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getmapilist"></a>
# **getMapiList**

```typescript
public async getMapiList(requestObj: GetMapiListRequest) : Promise<{response: RequestResponse, body: ListResponseOfHierarchicalObjectResponse; }>
```

Get document list from storage folder             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfHierarchicalObjectResponse; }>`

### Request Parameters
```typescript
new GetMapiListRequest(
    folder=folder,
    storage=storage,
    itemsPerPage=itemsPerPage,
    pageNumber=pageNumber)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 
 **itemsPerPage** | **number**| Count of items on page | [optional] [default to 10]
 **pageNumber** | **number**| Page number | [optional] [default to 0]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="getmapiproperties"></a>
# **getMapiProperties**

```typescript
public async getMapiProperties(requestObj: GetMapiPropertiesRequest) : Promise<{response: RequestResponse, body: HierarchicalObjectResponse; }>
```

Get document properties             

### Return type

`Promise<{response: RequestResponse, body: HierarchicalObjectResponse; }>`

### Request Parameters
```typescript
new GetMapiPropertiesRequest(
    name,
    folder=folder,
    storage=storage)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Document file name | 
 **folder** | **string**| Path to folder in storage | [optional] 
 **storage** | **string**| Storage name | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="isemailaddressdisposable"></a>
# **isEmailAddressDisposable**

```typescript
public async isEmailAddressDisposable(requestObj: IsEmailAddressDisposableRequest) : Promise<{response: RequestResponse, body: ValueTOfBoolean; }>
```

Check email address is disposable             

### Return type

`Promise<{response: RequestResponse, body: ValueTOfBoolean; }>`

### Request Parameters
```typescript
new IsEmailAddressDisposableRequest(
    address)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **string**| An email address to check | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="listemailfolders"></a>
# **listEmailFolders**

```typescript
public async listEmailFolders(requestObj: ListEmailFoldersRequest) : Promise<{response: RequestResponse, body: ListResponseOfMailServerFolder; }>
```

Get folders list in email account             

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfMailServerFolder; }>`

### Request Parameters
```typescript
new ListEmailFoldersRequest(
    firstAccount,
    secondAccount=secondAccount,
    storage=storage,
    storageFolder=storageFolder,
    parentFolder=parentFolder)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstAccount** | **string**| Email account | 
 **secondAccount** | **string**| Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)              | [optional] 
 **storage** | **string**| Storage name where account file(s) located | [optional] 
 **storageFolder** | **string**| Folder in storage where account file(s) located | [optional] 
 **parentFolder** | **string**| Folder in which subfolders should be listed | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="listemailmessages"></a>
# **listEmailMessages**

```typescript
public async listEmailMessages(requestObj: ListEmailMessagesRequest) : Promise<{response: RequestResponse, body: ListResponseOfString; }>
```

Get messages from folder, filtered by query             

The query string should have the following view.      The example of a simple expression:       '<Field name>' <Comparison operator> '<Field value>',  where &lt;Field Name&gt; - the name of a message field through which filtering is made, &lt;Comparison operator&gt; - comparison operators, as their name implies, allow to compare message field and specified value, &lt;Field value&gt; - value to be compared with a message field.      The number of simple expressions can make a compound one, ex.:     (<Simple expression 1> & <Simple expression 2>) | <Simple expression 3     >,  where \"&amp;\" - logical-AND operator, \"|\" - logical-OR operator      At present the following values are allowed as a field name (<Field name>):  \"To\" - represents a TO field of message, \"Text\" - represents string in the header or body of the message, \"Bcc\" - represents a BCC field of message, \"Body\" - represents a string in the body of message, \"Cc\" - represents a CC field of message, \"From\" - represents a From field of message, \"Subject\" - represents a string in the subject of message, \"InternalDate\" - represents an internal date of message, \"SentDate\" - represents a sent date of message      Additionally, the following field names are allowed for IMAP-protocol:  \"Answered\" - represents an /Answered flag of message \"Seen\" - represents a /Seen flag of message \"Flagged\" - represents a /Flagged flag of message \"Draft\" - represents a /Draft flag of message \"Deleted\" - represents a Deleted/ flag of message \"Recent\" - represents a Deleted/ flag of message \"MessageSize\" - represents a size (in bytes) of message      Additionally, the following field names are allowed for Exchange:  \"IsRead\" - Indicates whether the message has been read \"HasAttachment\" - Indicates whether or not the message has attachments \"IsSubmitted\" - Indicates whether the message has been submitted to the Outbox \"ContentClass\" - represents a content class of item      Additionally, the following field names are allowed for pst/ost files:  \"MessageClass\" - Represents a message class \"ContainerClass\" - Represents a folder container class \"Importance\" - Represents a message importance \"MessageSize\" - represents a size (in bytes) of message \"FolderName\" - represents a folder name \"ContentsCount\" - represents a total number of items in the folder \"UnreadContentsCount\" - represents the number of unread items in the folder. \"Subfolders\" - Indicates whether or not the folder has subfolders \"Read\" - the message is marked as having been read \"HasAttachment\" - the message has at least one attachment \"Unsent\" - the message is still being composed \"Unmodified\" - the message has not been modified since it was first saved (if unsent) or it was delivered (if sent) \"FromMe\" - the user receiving the message was also the user who sent the message \"Resend\" - the message includes a request for a resend operation with a non-delivery report \"NotifyRead\" - the user who sent the message has requested notification when a recipient first reads it \"NotifyUnread\" - the user who sent the message has requested notification when a recipient deletes it before reading or the Message object expires \"EverRead\" - the message has been read at least once      The field value (<Field value>) can take the following values:     For text fields - any string,     For date type fields - the string of \"d-MMM-yyy\" format, ex. \"10-Feb-2009\",     For flags (fields of boolean type) - either \"True\", or \"False\"              

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfString; }>`

### Request Parameters
```typescript
new ListEmailMessagesRequest(
    folder,
    queryString,
    firstAccount,
    secondAccount=secondAccount,
    storage=storage,
    storageFolder=storageFolder,
    recursive=recursive)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder** | **string**| A folder in email account | 
 **queryString** | **string**| A MailQuery search string | 
 **firstAccount** | **string**| Email account | 
 **secondAccount** | **string**| Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)              | [optional] 
 **storage** | **string**| Storage name where account file(s) located | [optional] 
 **storageFolder** | **string**| Folder in storage where account file(s) located | [optional] 
 **recursive** | **boolean**| Specifies that should message be searched in subfolders recursively | [optional] [default to false]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="listemailmodels"></a>
# **listEmailModels**

```typescript
public async listEmailModels(requestObj: ListEmailModelsRequest) : Promise<{response: RequestResponse, body: ListResponseOfEmailDto; }>
```

Get messages from folder, filtered by query             

The query string should have the following view.      The example of a simple expression:       '<Field name>' <Comparison operator> '<Field value>',  where &lt;Field Name&gt; - the name of a message field through which filtering is made, &lt;Comparison operator&gt; - comparison operators, as their name implies, allow to compare message field and specified value, &lt;Field value&gt; - value to be compared with a message field.      The number of simple expressions can make a compound one, ex.:     (<Simple expression 1> & <Simple expression 2>) | <Simple expression 3     >,  where \"&amp;\" - logical-AND operator, \"|\" - logical-OR operator      At present the following values are allowed as a field name (<Field name>):  \"To\" - represents a TO field of message, \"Text\" - represents string in the header or body of the message, \"Bcc\" - represents a BCC field of message, \"Body\" - represents a string in the body of message, \"Cc\" - represents a CC field of message, \"From\" - represents a From field of message, \"Subject\" - represents a string in the subject of message, \"InternalDate\" - represents an internal date of message, \"SentDate\" - represents a sent date of message      Additionally, the following field names are allowed for IMAP-protocol:  \"Answered\" - represents an /Answered flag of message \"Seen\" - represents a /Seen flag of message \"Flagged\" - represents a /Flagged flag of message \"Draft\" - represents a /Draft flag of message \"Deleted\" - represents a Deleted/ flag of message \"Recent\" - represents a Deleted/ flag of message \"MessageSize\" - represents a size (in bytes) of message      Additionally, the following field names are allowed for Exchange:  \"IsRead\" - Indicates whether the message has been read \"HasAttachment\" - Indicates whether or not the message has attachments \"IsSubmitted\" - Indicates whether the message has been submitted to the Outbox \"ContentClass\" - represents a content class of item      Additionally, the following field names are allowed for pst/ost files:  \"MessageClass\" - Represents a message class \"ContainerClass\" - Represents a folder container class \"Importance\" - Represents a message importance \"MessageSize\" - represents a size (in bytes) of message \"FolderName\" - represents a folder name \"ContentsCount\" - represents a total number of items in the folder \"UnreadContentsCount\" - represents the number of unread items in the folder. \"Subfolders\" - Indicates whether or not the folder has subfolders \"Read\" - the message is marked as having been read \"HasAttachment\" - the message has at least one attachment \"Unsent\" - the message is still being composed \"Unmodified\" - the message has not been modified since it was first saved (if unsent) or it was delivered (if sent) \"FromMe\" - the user receiving the message was also the user who sent the message \"Resend\" - the message includes a request for a resend operation with a non-delivery report \"NotifyRead\" - the user who sent the message has requested notification when a recipient first reads it \"NotifyUnread\" - the user who sent the message has requested notification when a recipient deletes it before reading or the Message object expires \"EverRead\" - the message has been read at least once      The field value (<Field value>) can take the following values:     For text fields - any string,     For date type fields - the string of \"d-MMM-yyy\" format, ex. \"10-Feb-2009\",     For flags (fields of boolean type) - either \"True\", or \"False\"              

### Return type

`Promise<{response: RequestResponse, body: ListResponseOfEmailDto; }>`

### Request Parameters
```typescript
new ListEmailModelsRequest(
    folder,
    firstAccount,
    queryString=queryString,
    secondAccount=secondAccount,
    storage=storage,
    storageFolder=storageFolder,
    recursive=recursive)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder** | **string**| A folder in email account | 
 **firstAccount** | **string**| Email account | 
 **queryString** | **string**| A MailQuery search string | [optional] 
 **secondAccount** | **string**| Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)              | [optional] 
 **storage** | **string**| Storage name where account file(s) located | [optional] 
 **storageFolder** | **string**| Folder in storage where account file(s) located | [optional] 
 **recursive** | **boolean**| Specifies that should message be searched in subfolders recursively | [optional] [default to false]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="listemailthreads"></a>
# **listEmailThreads**

```typescript
public async listEmailThreads(requestObj: ListEmailThreadsRequest) : Promise<{response: RequestResponse, body: EmailThreadList; }>
```

Get message threads from folder. All messages are partly fetched (without email body and other fields)             

### Return type

`Promise<{response: RequestResponse, body: EmailThreadList; }>`

### Request Parameters
```typescript
new ListEmailThreadsRequest(
    folder,
    firstAccount,
    secondAccount=secondAccount,
    storage=storage,
    storageFolder=storageFolder,
    updateFolderCache=updateFolderCache,
    messagesCacheLimit=messagesCacheLimit)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder** | **string**| A folder in email account.              | 
 **firstAccount** | **string**| Email account | 
 **secondAccount** | **string**| Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)              | [optional] 
 **storage** | **string**| Storage name where account file(s) located | [optional] 
 **storageFolder** | **string**| Folder in storage where account file(s) located | [optional] 
 **updateFolderCache** | **boolean**| This parameter is only used in accounts with CacheFile. If true - get new messages and update threads cache for given folder. If false, get only threads from cache without any calls to an email account              | [optional] [default to true]
 **messagesCacheLimit** | **number**| Limit messages cache size if CacheFile is used. Ignored in accounts without limits support              | [optional] [default to 200]

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="moveemailmessage"></a>
# **moveEmailMessage**

```typescript
public async moveEmailMessage(requestObj: MoveEmailMessageRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Move message to another folder             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new MoveEmailMessageRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**MoveEmailMessageRq**](MoveEmailMessageRq.md)| Email account, folder and message specifier | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="moveemailthread"></a>
# **moveEmailThread**

```typescript
public async moveEmailThread(requestObj: MoveEmailThreadRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Move thread to another folder             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new MoveEmailThreadRequest(
    threadId,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **string**| Thread identifier | 
 **request** | [**MoveEmailThreadRq**](MoveEmailThreadRq.md)| Move thread request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="movefile"></a>
# **moveFile**

```typescript
public async moveFile(requestObj: MoveFileRequest) : Promise<{response: RequestResponse, body?: any; }>
```



### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new MoveFileRequest(
    srcPath,
    destPath,
    srcStorageName=srcStorageName,
    destStorageName=destStorageName,
    versionId=versionId)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **string**|  | 
 **destPath** | **string**|  | 
 **srcStorageName** | **string**|  | [optional] 
 **destStorageName** | **string**|  | [optional] 
 **versionId** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="movefolder"></a>
# **moveFolder**

```typescript
public async moveFolder(requestObj: MoveFolderRequest) : Promise<{response: RequestResponse, body?: any; }>
```



### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new MoveFolderRequest(
    srcPath,
    destPath,
    srcStorageName=srcStorageName,
    destStorageName=destStorageName)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **srcPath** | **string**|  | 
 **destPath** | **string**|  | 
 **srcStorageName** | **string**|  | [optional] 
 **destStorageName** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="objectexists"></a>
# **objectExists**

```typescript
public async objectExists(requestObj: ObjectExistsRequest) : Promise<{response: RequestResponse, body: ObjectExist; }>
```



### Return type

`Promise<{response: RequestResponse, body: ObjectExist; }>`

### Request Parameters
```typescript
new ObjectExistsRequest(
    path,
    storageName=storageName,
    versionId=versionId)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**|  | 
 **storageName** | **string**|  | [optional] 
 **versionId** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="savecalendarmodel"></a>
# **saveCalendarModel**

```typescript
public async saveCalendarModel(requestObj: SaveCalendarModelRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Save iCalendar             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SaveCalendarModelRequest(
    name,
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| iCalendar file name in storage | 
 **rq** | [**StorageModelRqOfCalendarDto**](StorageModelRqOfCalendarDto.md)| Calendar properties update request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="savecontactmodel"></a>
# **saveContactModel**

```typescript
public async saveContactModel(requestObj: SaveContactModelRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Save contact.             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SaveContactModelRequest(
    format,
    name,
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format. Enum, available values: VCard, WebDav, Msg | 
 **name** | **string**| Contact document file name. | 
 **rq** | [**StorageModelRqOfContactDto**](StorageModelRqOfContactDto.md)| Create contact request. | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="saveemailclientaccount"></a>
# **saveEmailClientAccount**

```typescript
public async saveEmailClientAccount(requestObj: SaveEmailClientAccountRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Create email client account file (*.account) with any of supported credentials             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SaveEmailClientAccountRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**StorageFileRqOfEmailClientAccount**](StorageFileRqOfEmailClientAccount.md)| Email account information | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="saveemailclientmultiaccount"></a>
# **saveEmailClientMultiAccount**

```typescript
public async saveEmailClientMultiAccount(requestObj: SaveEmailClientMultiAccountRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Create email client multi account file (*.multi.account). Will respond error if file extension is not \".multi.account\".             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SaveEmailClientMultiAccountRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**StorageFileRqOfEmailClientMultiAccount**](StorageFileRqOfEmailClientMultiAccount.md)| Email accounts information | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="saveemailmodel"></a>
# **saveEmailModel**

```typescript
public async saveEmailModel(requestObj: SaveEmailModelRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Save email document.             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SaveEmailModelRequest(
    format,
    name,
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| File format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html | 
 **name** | **string**| Email document file name in storage. | 
 **rq** | [**StorageModelRqOfEmailDto**](StorageModelRqOfEmailDto.md)| Calendar properties update request. | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="savemailaccount"></a>
# **saveMailAccount**

```typescript
public async saveMailAccount(requestObj: SaveMailAccountRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Create email account file (*.account) with login/password authentication             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SaveMailAccountRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveEmailAccountRequest**](SaveEmailAccountRequest.md)| Email account information | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="savemailoauthaccount"></a>
# **saveMailOAuthAccount**

```typescript
public async saveMailOAuthAccount(requestObj: SaveMailOAuthAccountRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Create email account file (*.account) with OAuth             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SaveMailOAuthAccountRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SaveOAuthEmailAccountRequest**](SaveOAuthEmailAccountRequest.md)| Email account information | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="sendemail"></a>
# **sendEmail**

```typescript
public async sendEmail(requestObj: SendEmailRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Send an email from *.eml file located on storage             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SendEmailRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SendEmailBaseRequest**](SendEmailBaseRequest.md)| Send email request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="sendemailmime"></a>
# **sendEmailMime**

```typescript
public async sendEmailMime(requestObj: SendEmailMimeRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Send an email specified by MIME in request             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SendEmailMimeRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SendEmailMimeBaseRequest**](SendEmailMimeBaseRequest.md)| Send email request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="sendemailmodel"></a>
# **sendEmailModel**

```typescript
public async sendEmailModel(requestObj: SendEmailModelRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Send an email specified by model in request             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SendEmailModelRequest(
    rq)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rq** | [**SendEmailModelRq**](SendEmailModelRq.md)| Send email request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="setemailproperty"></a>
# **setEmailProperty**

```typescript
public async setEmailProperty(requestObj: SetEmailPropertyRequest) : Promise<{response: RequestResponse, body: EmailPropertyResponse; }>
```

Set email document property value             

### Return type

`Promise<{response: RequestResponse, body: EmailPropertyResponse; }>`

### Request Parameters
```typescript
new SetEmailPropertyRequest(
    propertyName,
    fileName,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyName** | **string**| A property name that should be changed | 
 **fileName** | **string**| Email document file name | 
 **request** | [**SetEmailPropertyRequest**](SetEmailPropertyRequest.md)| A property that should be changed and optional Storage info to specify where the file located              | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="setemailreadflag"></a>
# **setEmailReadFlag**

```typescript
public async setEmailReadFlag(requestObj: SetEmailReadFlagRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Sets \"Message is read\" flag             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SetEmailReadFlagRequest(
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**SetMessageReadFlagAccountBaseRequest**](SetMessageReadFlagAccountBaseRequest.md)| Message is read request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="setemailthreadreadflag"></a>
# **setEmailThreadReadFlag**

```typescript
public async setEmailThreadReadFlag(requestObj: SetEmailThreadReadFlagRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Mark all messages in thread as read or unread             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new SetEmailThreadReadFlagRequest(
    threadId,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **string**| Thread id | 
 **request** | [**EmailThreadReadFlagRq**](EmailThreadReadFlagRq.md)| Email account specifier and IsRead flag | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="storageexists"></a>
# **storageExists**

```typescript
public async storageExists(requestObj: StorageExistsRequest) : Promise<{response: RequestResponse, body: StorageExist; }>
```



### Return type

`Promise<{response: RequestResponse, body: StorageExist; }>`

### Request Parameters
```typescript
new StorageExistsRequest(
    storageName)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storageName** | **string**|  | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="updatecalendarproperties"></a>
# **updateCalendarProperties**

```typescript
public async updateCalendarProperties(requestObj: UpdateCalendarPropertiesRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Update calendar file properties             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new UpdateCalendarPropertiesRequest(
    name,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| iCalendar file name in storage | 
 **request** | [**HierarchicalObjectRequest**](HierarchicalObjectRequest.md)| Calendar properties update request | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="updatecontactproperties"></a>
# **updateContactProperties**

```typescript
public async updateContactProperties(requestObj: UpdateContactPropertiesRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Update contact document properties             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new UpdateContactPropertiesRequest(
    format,
    name,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **string**| Contact document format Enum, available values: VCard, WebDav, Msg | 
 **name** | **string**| Contact document file name | 
 **request** | [**HierarchicalObjectRequest**](HierarchicalObjectRequest.md)| Properties that should be updated/added | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="updatemapiproperties"></a>
# **updateMapiProperties**

```typescript
public async updateMapiProperties(requestObj: UpdateMapiPropertiesRequest) : Promise<{response: RequestResponse, body?: any; }>
```

Update document properties             

### Return type

`Promise<{response: RequestResponse, body?: any; }>`

### Request Parameters
```typescript
new UpdateMapiPropertiesRequest(
    name,
    request)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| Document file name | 
 **request** | [**HierarchicalObjectRequest**](HierarchicalObjectRequest.md)| Properties that should be updated/added | 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

<a name="uploadfile"></a>
# **uploadFile**

```typescript
public async uploadFile(requestObj: UploadFileRequest) : Promise<{response: RequestResponse, body: FilesUploadResult; }>
```



### Return type

`Promise<{response: RequestResponse, body: FilesUploadResult; }>`

### Request Parameters
```typescript
new UploadFileRequest(
    path,
    file,
    storageName=storageName)
```

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**|  | 
 **file** | **Buffer**| File to upload | 
 **storageName** | **string**|  | [optional] 

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


