
# AiNameApi

                    
<a name="complete"></a>
# **complete**
```typescript
public async complete(request: AiNameCompleteRequest): Promise< AiNameWeightedVariants >
```

The call proposes k most probable names for given starting characters.             

### Request Parameters
```typescript
new AiNameComplete(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **name** | **string**| A name to complete. |
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian).              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France.              | [optional] [default to ]
 **encoding** | **string**| A character encoding name. | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name. | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

### Return type

Promise< [AiNameWeightedVariants](AiNameWeightedVariants.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="expand"></a>
# **expand**
```typescript
public async expand(request: AiNameExpandRequest): Promise< AiNameWeightedVariants >
```

Expands a person&#39;s name into a list of possible alternatives using options for expanding instructions.             

### Request Parameters
```typescript
new AiNameExpand(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **name** | **string**| A name to expand. |
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian).              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France.              | [optional] [default to ]
 **encoding** | **string**| A character encoding name. | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name. | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

### Return type

Promise< [AiNameWeightedVariants](AiNameWeightedVariants.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="expandParsed"></a>
# **expandParsed**
```typescript
public async expandParsed(request: model.AiNameParsedRequest): Promise< AiNameWeightedVariants >
```

Expands a person&#39;s parsed name into a list of possible alternatives using options for expanding instructions.             

### request Parameter

See parameter model documentation at [AiNameParsedRequest](AiNameParsedRequest.md)

### Return type

Promise< [AiNameWeightedVariants](AiNameWeightedVariants.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="format"></a>
# **format**
```typescript
public async format(request: AiNameFormatRequest): Promise< AiNameFormatted >
```

Formats a person&#39;s name in correct case and name order using options for formatting instructions.             

### Request Parameters
```typescript
new AiNameFormat(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    format=format,
    style=style)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **name** | **string**| A name to format. |
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian).              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France.              | [optional] [default to ]
 **encoding** | **string**| A character encoding name. | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name. | [optional] [default to ]
 **format** | **string**| Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (&#x3D; &#39;%t%F%m%N%L%p&#39;)     /format/FN+LN/ (&#x3D; &#39;%F%L&#39;)     /format/title+FN+LN/ (&#x3D; &#39;%t%F%L&#39;)     /format/FN+MN+LN/ (&#x3D; &#39;%F%M%N%L&#39;)     /format/title+FN+MN+LN/ (&#x3D; &#39;%t%F%M%N%L&#39;)     /format/FN+MI+LN/ (&#x3D; &#39;%F%m%N%L&#39;)     /format/title+FN+MI+LN/ (&#x3D; &#39;%t%F%m%N%L&#39;)     /format/LN/ (&#x3D; &#39;%L&#39;)     /format/title+LN/ (&#x3D; &#39;%t%L&#39;)     /format/LN+FN+MN/ (&#x3D; &#39;%L,%F%M%N&#39;)     /format/LN+title+FN+MN/ (&#x3D; &#39;%L,%t%F%M%N&#39;)     /format/LN+FN+MI/ (&#x3D; &#39;%L,%F%m%N&#39;)     /format/LN+title+FN+MI/ (&#x3D; &#39;%L,%t%F%m%N&#39;)  Custom format string - custom combination of characters and the next term placeholders:      &#39;%t&#39; - Title (prefix)     &#39;%F&#39; - First name     &#39;%f&#39; - First initial     &#39;%M&#39; - Middle name(s)     &#39;%m&#39; - Middle initial(s)     &#39;%N&#39; - Nickname     &#39;%L&#39; - Last name     &#39;%l&#39; - Last initial     &#39;%p&#39; - Postfix  If no value for format option was provided, its default value is &#39;%t%F%m%N%L%p&#39;              | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

### Return type

Promise< [AiNameFormatted](AiNameFormatted.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="formatParsed"></a>
# **formatParsed**
```typescript
public async formatParsed(request: model.AiNameParsedRequest): Promise< AiNameFormatted >
```

Formats a person&#39;s parsed name in correct case and name order using options for formatting instructions.             

### request Parameter

See parameter model documentation at [AiNameParsedRequest](AiNameParsedRequest.md)

### Return type

Promise< [AiNameFormatted](AiNameFormatted.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="genderize"></a>
# **genderize**
```typescript
public async genderize(request: AiNameGenderizeRequest): Promise< AiNameGenderHypothesisList >
```

Detect person&#39;s gender from name string.             

### Request Parameters
```typescript
new AiNameGenderize(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **name** | **string**| A name to genderize. |
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian).              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France.              | [optional] [default to ]
 **encoding** | **string**| A character encoding name. | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name. | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

### Return type

Promise< [AiNameGenderHypothesisList](AiNameGenderHypothesisList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="genderizeParsed"></a>
# **genderizeParsed**
```typescript
public async genderizeParsed(request: model.AiNameParsedRequest): Promise< AiNameGenderHypothesisList >
```

Detect person&#39;s gender from parsed name.             

### request Parameter

See parameter model documentation at [AiNameParsedRequest](AiNameParsedRequest.md)

### Return type

Promise< [AiNameGenderHypothesisList](AiNameGenderHypothesisList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="match"></a>
# **match**
```typescript
public async match(request: AiNameMatchRequest): Promise< AiNameMatchResult >
```

Compare people&#39;s names. Uses options for comparing instructions.             

### Request Parameters
```typescript
new AiNameMatch(
    name,
    otherName,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **name** | **string**| A name to match. |
 **otherName** | **string**| Another name to match. |
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian).              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France.              | [optional] [default to ]
 **encoding** | **string**| A character encoding name. | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name. | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

### Return type

Promise< [AiNameMatchResult](AiNameMatchResult.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="matchParsed"></a>
# **matchParsed**
```typescript
public async matchParsed(request: model.AiNameMatchParsedRequest): Promise< AiNameMatchResult >
```

Compare people&#39;s parsed names and attributes. Uses options for comparing instructions.             

### request Parameter

See parameter model documentation at [AiNameMatchParsedRequest](AiNameMatchParsedRequest.md)

### Return type

Promise< [AiNameMatchResult](AiNameMatchResult.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="parse"></a>
# **parse**
```typescript
public async parse(request: AiNameParseRequest): Promise< AiNameComponentList >
```

Parse name to components.             

### Request Parameters
```typescript
new AiNameParse(
    name,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **name** | **string**| A name to parse. |
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian).              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France.              | [optional] [default to ]
 **encoding** | **string**| A character encoding name. | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name. | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

### Return type

Promise< [AiNameComponentList](AiNameComponentList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="parseEmailAddress"></a>
# **parseEmailAddress**
```typescript
public async parseEmailAddress(request: AiNameParseEmailAddressRequest): Promise< AiNameExtractedList >
```

Parse person&#39;s name out of an email address.             

### Request Parameters
```typescript
new AiNameParseEmailAddress(
    emailAddress,
    language=language,
    location=location,
    encoding=encoding,
    script=script,
    style=style)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **emailAddress** | **string**| Email address to parse. |
 **language** | **string**| An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \&quot;it\&quot; or \&quot;ita\&quot; for Italian).              | [optional] [default to ]
 **location** | **string**| A geographic code such as an ISO-3166 two letter country code, for example \&quot;FR\&quot; for France.              | [optional] [default to ]
 **encoding** | **string**| A character encoding name. | [optional] [default to ]
 **script** | **string**| A writing system code; starts with the ISO-15924 script name. | [optional] [default to ]
 **style** | **string**| Name writing style. Enum, available values: Formal, Informal, Legal, Academic | [optional] [default to 0]

### Return type

Promise< [AiNameExtractedList](AiNameExtractedList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
