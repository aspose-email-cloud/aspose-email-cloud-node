# ClientMessageApi

                    
<a name="append"></a>
# **append**
```typescript
public async append(request: model.ClientMessageAppendRequest): Promise< ValueTOfString >
```

Add email message to specified folder in email account.             

### request Parameter

See parameter model documentation at [ClientMessageAppendRequest](ClientMessageAppendRequest.md)

### Return type

Promise< [ValueTOfString](ValueTOfString.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="appendFile"></a>
# **appendFile**
```typescript
public async appendFile(request: ClientMessageAppendFileRequest): Promise< ValueTOfString >
```

Add email message from file to specified folder in email account.             

### Request Parameters
```typescript
new ClientMessageAppendFile(
    account,
    file,
    storage=storage,
    accountStorageFolder=accountStorageFolder,
    format=format,
    folder=folder,
    markAsSent=markAsSent)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **account** | **string**| Email account. |
 **file** | **byte[]**| Message file to append. |
 **storage** | **string**| Storage name where account file located. | [optional]
 **accountStorageFolder** | **string**| Folder in storage where account file located. | [optional]
 **format** | **string**| Email file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]
 **folder** | **string**| Path to folder on email server to append message to. | [optional]
 **markAsSent** | **boolean**| Determines that appended message should be market as sent or not. | [optional] [default to true]

### Return type

Promise< [ValueTOfString](ValueTOfString.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="delete"></a>
# **delete**
```typescript
public async delete(request: model.ClientMessageDeleteRequest): Promise< any >
```

Delete message.             

### request Parameter

See parameter model documentation at [ClientMessageDeleteRequest](ClientMessageDeleteRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="fetch"></a>
# **fetch**
```typescript
public async fetch(request: ClientMessageFetchRequest): Promise< MailMessageBase >
```

Fetch message from email account             

### Request Parameters
```typescript
new ClientMessageFetch(
    messageId,
    account,
    folder=folder,
    storage=storage,
    accountStorageFolder=accountStorageFolder,
    type=type,
    format=format)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **messageId** | **string**| Message identifier |
 **account** | **string**| Email account |
 **folder** | **string**| Account folder to fetch from (should be specified for some protocols such as IMAP)              | [optional]
 **storage** | **string**| Storage name where account file located. | [optional]
 **accountStorageFolder** | **string**| Folder in storage where account file located. | [optional]
 **type** | **string**| MailMessageBase type. Using this property you can fetch message in different formats (as EmailDto, MapiMessageDto or a file represented as Base64 string).              Enum, available values: Dto, Mapi, Base64 | [optional] [default to 0]
 **format** | **string**| Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]

### Return type

Promise< [MailMessageBase](MailMessageBase.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="fetchFile"></a>
# **fetchFile**
```typescript
public async fetchFile(request: ClientMessageFetchFileRequest): Promise< Buffer >
```

Fetch message as file from email account             

### Request Parameters
```typescript
new ClientMessageFetchFile(
    messageId,
    account,
    folder=folder,
    storage=storage,
    accountStorageFolder=accountStorageFolder,
    format=format)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **messageId** | **string**| Message identifier |
 **account** | **string**| Email account |
 **folder** | **string**| Account folder to fetch from (should be specified for some protocols such as IMAP)              | [optional]
 **storage** | **string**| Storage name where account file located. | [optional]
 **accountStorageFolder** | **string**| Folder in storage where account file located. | [optional]
 **format** | **string**| Fetched message file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]

### Return type

Promise< Buffer >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="list"></a>
# **list**
```typescript
public async list(request: ClientMessageListRequest): Promise< MailMessageBaseList >
```

Get messages from folder, filtered by query             
    The query string should have the following view.      The example of a simple expression:       &#39;&lt;Field name&gt;&#39; &lt;Comparison operator&gt; &#39;&lt;Field value&gt;&#39;,  where &amp;lt;Field Name&amp;gt; - the name of a message field through which filtering is made, &amp;lt;Comparison operator&amp;gt; - comparison operators, as their name implies, allow to compare message field and specified value, &amp;lt;Field value&amp;gt; - value to be compared with a message field.      The number of simple expressions can make a compound one, ex.:     (&lt;Simple expression 1&gt; &amp; &lt;Simple expression 2&gt;) | &lt;Simple expression 3     &gt;,  where \&quot;&amp;amp;\&quot; - logical-AND operator, \&quot;|\&quot; - logical-OR operator      At present the following values are allowed as a field name (&lt;Field name&gt;):  \&quot;To\&quot; - represents a TO field of message, \&quot;Text\&quot; - represents string in the header or body of the message, \&quot;Bcc\&quot; - represents a BCC field of message, \&quot;Body\&quot; - represents a string in the body of message, \&quot;Cc\&quot; - represents a CC field of message, \&quot;From\&quot; - represents a From field of message, \&quot;Subject\&quot; - represents a string in the subject of message, \&quot;InternalDate\&quot; - represents an internal date of message, \&quot;SentDate\&quot; - represents a sent date of message      Additionally, the following field names are allowed for IMAP-protocol:  \&quot;Answered\&quot; - represents an /Answered flag of message \&quot;Seen\&quot; - represents a /Seen flag of message \&quot;Flagged\&quot; - represents a /Flagged flag of message \&quot;Draft\&quot; - represents a /Draft flag of message \&quot;Deleted\&quot; - represents a Deleted/ flag of message \&quot;Recent\&quot; - represents a Deleted/ flag of message \&quot;MessageSize\&quot; - represents a size (in bytes) of message      Additionally, the following field names are allowed for Exchange:  \&quot;IsRead\&quot; - Indicates whether the message has been read \&quot;HasAttachment\&quot; - Indicates whether or not the message has attachments \&quot;IsSubmitted\&quot; - Indicates whether the message has been submitted to the Outbox \&quot;ContentClass\&quot; - represents a content class of item      Additionally, the following field names are allowed for pst/ost files:  \&quot;MessageClass\&quot; - Represents a message class \&quot;ContainerClass\&quot; - Represents a folder container class \&quot;Importance\&quot; - Represents a message importance \&quot;MessageSize\&quot; - represents a size (in bytes) of message \&quot;FolderName\&quot; - represents a folder name \&quot;ContentsCount\&quot; - represents a total number of items in the folder \&quot;UnreadContentsCount\&quot; - represents the number of unread items in the folder. \&quot;Subfolders\&quot; - Indicates whether or not the folder has subfolders \&quot;Read\&quot; - the message is marked as having been read \&quot;HasAttachment\&quot; - the message has at least one attachment \&quot;Unsent\&quot; - the message is still being composed \&quot;Unmodified\&quot; - the message has not been modified since it was first saved (if unsent) or it was delivered (if sent) \&quot;FromMe\&quot; - the user receiving the message was also the user who sent the message \&quot;Resend\&quot; - the message includes a request for a resend operation with a non-delivery report \&quot;NotifyRead\&quot; - the user who sent the message has requested notification when a recipient first reads it \&quot;NotifyUnread\&quot; - the user who sent the message has requested notification when a recipient deletes it before reading or the Message object expires \&quot;EverRead\&quot; - the message has been read at least once      The field value (&lt;Field value&gt;) can take the following values:     For text fields - any string,     For date type fields - the string of \&quot;d-MMM-yyy\&quot; format, ex. \&quot;10-Feb-2009\&quot;,     For flags (fields of boolean type) - either \&quot;True\&quot;, or \&quot;False\&quot;              

### Request Parameters
```typescript
new ClientMessageList(
    folder,
    account,
    queryString=queryString,
    storage=storage,
    accountStorageFolder=accountStorageFolder,
    recursive=recursive,
    type=type,
    format=format)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **folder** | **string**| A folder in email account |
 **account** | **string**| Email account |
 **queryString** | **string**| A MailQuery search string | [optional]
 **storage** | **string**| Storage name where account file located | [optional]
 **accountStorageFolder** | **string**| Folder in storage where account file located | [optional]
 **recursive** | **boolean**| Specifies that should message be searched in subfolders recursively | [optional] [default to false]
 **type** | **string**| MailMessageBase type. Using this property you can get messages in different formats (as EmailDto, MapiMessageDto or a file represented as Base64 string).              Enum, available values: Dto, Mapi, Base64 | [optional] [default to 0]
 **format** | **string**| Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]

### Return type

Promise< [MailMessageBaseList](MailMessageBaseList.md) >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="move"></a>
# **move**
```typescript
public async move(request: model.ClientMessageMoveRequest): Promise< any >
```

Move message to another folder.             

### request Parameter

See parameter model documentation at [ClientMessageMoveRequest](ClientMessageMoveRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="send"></a>
# **send**
```typescript
public async send(request: model.ClientMessageSendRequest): Promise< any >
```

Send an email specified by model in request.             

### request Parameter

See parameter model documentation at [ClientMessageSendRequest](ClientMessageSendRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

                    
<a name="sendFile"></a>
# **sendFile**
```typescript
public async sendFile(request: ClientMessageSendFileRequest): Promise< any >
```

Send an email file.             

### Request Parameters
```typescript
new ClientMessageSendFile(
    account,
    file,
    storage=storage,
    accountStorageFolder=accountStorageFolder,
    format=format)
```

Name | Type | Description | Notes
---- | ---- | ----------- | -----
 **account** | **string**| Email account |
 **file** | **byte[]**| File to send |
 **storage** | **string**| Storage name where account file located. | [optional]
 **accountStorageFolder** | **string**| Folder in storage where account file located. | [optional]
 **format** | **string**| Email file format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft | [optional] [default to 0]

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)
                    
<a name="setIsRead"></a>
# **setIsRead**
```typescript
public async setIsRead(request: model.ClientMessageSetIsReadRequest): Promise< any >
```

Mark message as read or unread.             

### request Parameter

See parameter model documentation at [ClientMessageSetIsReadRequest](ClientMessageSetIsReadRequest.md)

### Return type

Promise< any >

[[Back to top]](#) [[Back to Model list]](Models.md) [[Back to API README]](README.md)

