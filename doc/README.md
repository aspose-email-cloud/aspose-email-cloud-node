
## Documentation for API endpoints

All URIs are relative to *https://api.aspose.cloud/v3.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EmailApi* | [**addCalendarAttachment**](EmailApi.md#addcalendarattachment) | **PUT** /email/Calendar/{name}/attachments/{attachment} | Adds an attachment to iCalendar file             
*EmailApi* | [**addCalendarAttachmentAsync**](EmailApi.md#addcalendarattachmentasync) | **PUT** /email/Calendar/{name}/attachments/{attachment} | Adds an attachment to iCalendar file             . Not available on .NETFramework v2.0
*EmailApi* | [**addContactAttachment**](EmailApi.md#addcontactattachment) | **PUT** /email/Contact/{format}/{name}/attachments/{attachment} | Add attachment to contact document             
*EmailApi* | [**addContactAttachmentAsync**](EmailApi.md#addcontactattachmentasync) | **PUT** /email/Contact/{format}/{name}/attachments/{attachment} | Add attachment to contact document             . Not available on .NETFramework v2.0
*EmailApi* | [**addEmailAttachment**](EmailApi.md#addemailattachment) | **POST** /email/{fileName}/attachments/{attachmentName} | Adds an attachment to Email document             
*EmailApi* | [**addEmailAttachmentAsync**](EmailApi.md#addemailattachmentasync) | **POST** /email/{fileName}/attachments/{attachmentName} | Adds an attachment to Email document             . Not available on .NETFramework v2.0
*EmailApi* | [**addMapiAttachment**](EmailApi.md#addmapiattachment) | **PUT** /email/Mapi/{name}/attachments/{attachment} | Add attachment to document             
*EmailApi* | [**addMapiAttachmentAsync**](EmailApi.md#addmapiattachmentasync) | **PUT** /email/Mapi/{name}/attachments/{attachment} | Add attachment to document             . Not available on .NETFramework v2.0
*EmailApi* | [**aiBcrOcr**](EmailApi.md#aibcrocr) | **POST** /email/AiBcr/ocr | Ocr images             
*EmailApi* | [**aiBcrOcrAsync**](EmailApi.md#aibcrocrasync) | **POST** /email/AiBcr/ocr | Ocr images             . Not available on .NETFramework v2.0
*EmailApi* | [**aiBcrOcrStorage**](EmailApi.md#aibcrocrstorage) | **POST** /email/AiBcr/ocr-storage | Ocr images from storage             
*EmailApi* | [**aiBcrOcrStorageAsync**](EmailApi.md#aibcrocrstorageasync) | **POST** /email/AiBcr/ocr-storage | Ocr images from storage             . Not available on .NETFramework v2.0
*EmailApi* | [**aiBcrParse**](EmailApi.md#aibcrparse) | **POST** /email/AiBcr/parse | Parse images to vCard properties             
*EmailApi* | [**aiBcrParseAsync**](EmailApi.md#aibcrparseasync) | **POST** /email/AiBcr/parse | Parse images to vCard properties             . Not available on .NETFramework v2.0
*EmailApi* | [**aiBcrParseOcrData**](EmailApi.md#aibcrparseocrdata) | **POST** /email/AiBcr/parse-ocr-data | Parse OCR data to vCard properties             
*EmailApi* | [**aiBcrParseOcrDataAsync**](EmailApi.md#aibcrparseocrdataasync) | **POST** /email/AiBcr/parse-ocr-data | Parse OCR data to vCard properties             . Not available on .NETFramework v2.0
*EmailApi* | [**aiBcrParseOcrDataStorage**](EmailApi.md#aibcrparseocrdatastorage) | **POST** /email/AiBcr/parse-ocr-data-storage | Parse vCards from OCR data and save them to Storage             
*EmailApi* | [**aiBcrParseOcrDataStorageAsync**](EmailApi.md#aibcrparseocrdatastorageasync) | **POST** /email/AiBcr/parse-ocr-data-storage | Parse vCards from OCR data and save them to Storage             . Not available on .NETFramework v2.0
*EmailApi* | [**aiBcrParseStorage**](EmailApi.md#aibcrparsestorage) | **POST** /email/AiBcr/parse-storage | Parse images from storage to vCard files             
*EmailApi* | [**aiBcrParseStorageAsync**](EmailApi.md#aibcrparsestorageasync) | **POST** /email/AiBcr/parse-storage | Parse images from storage to vCard files             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameComplete**](EmailApi.md#ainamecomplete) | **GET** /email/AiName/complete | The call proposes k most probable names for given starting characters             
*EmailApi* | [**aiNameCompleteAsync**](EmailApi.md#ainamecompleteasync) | **GET** /email/AiName/complete | The call proposes k most probable names for given starting characters             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameExpand**](EmailApi.md#ainameexpand) | **GET** /email/AiName/expand | Expands a person&#39;s name into a list of possible alternatives using options for expanding instructions             
*EmailApi* | [**aiNameExpandAsync**](EmailApi.md#ainameexpandasync) | **GET** /email/AiName/expand | Expands a person&#39;s name into a list of possible alternatives using options for expanding instructions             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameExpandParsed**](EmailApi.md#ainameexpandparsed) | **POST** /email/AiName/expand-parsed | Expands a person&#39;s parsed name into a list of possible alternatives using options for expanding instructions             
*EmailApi* | [**aiNameExpandParsedAsync**](EmailApi.md#ainameexpandparsedasync) | **POST** /email/AiName/expand-parsed | Expands a person&#39;s parsed name into a list of possible alternatives using options for expanding instructions             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameFormat**](EmailApi.md#ainameformat) | **GET** /email/AiName/format | Formats a person&#39;s name in correct case and name order using options for formatting instructions             
*EmailApi* | [**aiNameFormatAsync**](EmailApi.md#ainameformatasync) | **GET** /email/AiName/format | Formats a person&#39;s name in correct case and name order using options for formatting instructions             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameFormatParsed**](EmailApi.md#ainameformatparsed) | **POST** /email/AiName/format-parsed | Formats a person&#39;s parsed name in correct case and name order using options for formatting instructions             
*EmailApi* | [**aiNameFormatParsedAsync**](EmailApi.md#ainameformatparsedasync) | **POST** /email/AiName/format-parsed | Formats a person&#39;s parsed name in correct case and name order using options for formatting instructions             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameGenderize**](EmailApi.md#ainamegenderize) | **GET** /email/AiName/genderize | Detect person&#39;s gender from name string             
*EmailApi* | [**aiNameGenderizeAsync**](EmailApi.md#ainamegenderizeasync) | **GET** /email/AiName/genderize | Detect person&#39;s gender from name string             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameGenderizeParsed**](EmailApi.md#ainamegenderizeparsed) | **POST** /email/AiName/genderize-parsed | Detect person&#39;s gender from parsed name             
*EmailApi* | [**aiNameGenderizeParsedAsync**](EmailApi.md#ainamegenderizeparsedasync) | **POST** /email/AiName/genderize-parsed | Detect person&#39;s gender from parsed name             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameMatch**](EmailApi.md#ainamematch) | **GET** /email/AiName/match | Compare people&#39;s names. Uses options for comparing instructions             
*EmailApi* | [**aiNameMatchAsync**](EmailApi.md#ainamematchasync) | **GET** /email/AiName/match | Compare people&#39;s names. Uses options for comparing instructions             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameMatchParsed**](EmailApi.md#ainamematchparsed) | **POST** /email/AiName/match-parsed | Compare people&#39;s parsed names and attributes. Uses options for comparing instructions             
*EmailApi* | [**aiNameMatchParsedAsync**](EmailApi.md#ainamematchparsedasync) | **POST** /email/AiName/match-parsed | Compare people&#39;s parsed names and attributes. Uses options for comparing instructions             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameParse**](EmailApi.md#ainameparse) | **GET** /email/AiName/parse | Parse name to components             
*EmailApi* | [**aiNameParseAsync**](EmailApi.md#ainameparseasync) | **GET** /email/AiName/parse | Parse name to components             . Not available on .NETFramework v2.0
*EmailApi* | [**aiNameParseEmailAddress**](EmailApi.md#ainameparseemailaddress) | **GET** /email/AiName/parse-email-address | Parse person&#39;s name out of an email address             
*EmailApi* | [**aiNameParseEmailAddressAsync**](EmailApi.md#ainameparseemailaddressasync) | **GET** /email/AiName/parse-email-address | Parse person&#39;s name out of an email address             . Not available on .NETFramework v2.0
*EmailApi* | [**appendEmailMessage**](EmailApi.md#appendemailmessage) | **PUT** /email/client/Append | Adds an email from *.eml file to specified folder in email account             
*EmailApi* | [**appendEmailMessageAsync**](EmailApi.md#appendemailmessageasync) | **PUT** /email/client/Append | Adds an email from *.eml file to specified folder in email account             . Not available on .NETFramework v2.0
*EmailApi* | [**appendMimeMessage**](EmailApi.md#appendmimemessage) | **PUT** /email/client/AppendMime | Adds an email from MIME to specified folder in email account             
*EmailApi* | [**appendMimeMessageAsync**](EmailApi.md#appendmimemessageasync) | **PUT** /email/client/AppendMime | Adds an email from MIME to specified folder in email account             . Not available on .NETFramework v2.0
*EmailApi* | [**copyFile**](EmailApi.md#copyfile) | **PUT** /email/storage/file/copy/{srcPath} | Copy file
*EmailApi* | [**copyFileAsync**](EmailApi.md#copyfileasync) | **PUT** /email/storage/file/copy/{srcPath} | Copy file. Not available on .NETFramework v2.0
*EmailApi* | [**copyFolder**](EmailApi.md#copyfolder) | **PUT** /email/storage/folder/copy/{srcPath} | Copy folder
*EmailApi* | [**copyFolderAsync**](EmailApi.md#copyfolderasync) | **PUT** /email/storage/folder/copy/{srcPath} | Copy folder. Not available on .NETFramework v2.0
*EmailApi* | [**createCalendar**](EmailApi.md#createcalendar) | **PUT** /email/Calendar/{name} | Create calendar file             
*EmailApi* | [**createCalendarAsync**](EmailApi.md#createcalendarasync) | **PUT** /email/Calendar/{name} | Create calendar file             . Not available on .NETFramework v2.0
*EmailApi* | [**createContact**](EmailApi.md#createcontact) | **PUT** /email/Contact/{format}/{name} | Create contact document             
*EmailApi* | [**createContactAsync**](EmailApi.md#createcontactasync) | **PUT** /email/Contact/{format}/{name} | Create contact document             . Not available on .NETFramework v2.0
*EmailApi* | [**createEmail**](EmailApi.md#createemail) | **PUT** /email/{fileName} | Create an email document             
*EmailApi* | [**createEmailAsync**](EmailApi.md#createemailasync) | **PUT** /email/{fileName} | Create an email document             . Not available on .NETFramework v2.0
*EmailApi* | [**createEmailFolder**](EmailApi.md#createemailfolder) | **PUT** /email/client/CreateFolder | Create new folder in email account             
*EmailApi* | [**createEmailFolderAsync**](EmailApi.md#createemailfolderasync) | **PUT** /email/client/CreateFolder | Create new folder in email account             . Not available on .NETFramework v2.0
*EmailApi* | [**createFolder**](EmailApi.md#createfolder) | **PUT** /email/storage/folder/{path} | Create the folder
*EmailApi* | [**createFolderAsync**](EmailApi.md#createfolderasync) | **PUT** /email/storage/folder/{path} | Create the folder. Not available on .NETFramework v2.0
*EmailApi* | [**createMapi**](EmailApi.md#createmapi) | **PUT** /email/Mapi/{name} | Create new document             
*EmailApi* | [**createMapiAsync**](EmailApi.md#createmapiasync) | **PUT** /email/Mapi/{name} | Create new document             . Not available on .NETFramework v2.0
*EmailApi* | [**deleteCalendarProperty**](EmailApi.md#deletecalendarproperty) | **DELETE** /email/Calendar/{name}/properties/{memberName}/{index} | Deletes indexed property by index and name. To delete Reminder attachment, use path ReminderAttachment/{ReminderIndex}/{AttachmentIndex}             
*EmailApi* | [**deleteCalendarPropertyAsync**](EmailApi.md#deletecalendarpropertyasync) | **DELETE** /email/Calendar/{name}/properties/{memberName}/{index} | Deletes indexed property by index and name. To delete Reminder attachment, use path ReminderAttachment/{ReminderIndex}/{AttachmentIndex}             . Not available on .NETFramework v2.0
*EmailApi* | [**deleteContactProperty**](EmailApi.md#deletecontactproperty) | **DELETE** /email/Contact/{format}/{name}/properties/{memberName}/{index} | Delete property from indexed property list             
*EmailApi* | [**deleteContactPropertyAsync**](EmailApi.md#deletecontactpropertyasync) | **DELETE** /email/Contact/{format}/{name}/properties/{memberName}/{index} | Delete property from indexed property list             . Not available on .NETFramework v2.0
*EmailApi* | [**deleteEmailFolder**](EmailApi.md#deleteemailfolder) | **DELETE** /email/client/DeleteFolder | Delete a folder in email account             
*EmailApi* | [**deleteEmailFolderAsync**](EmailApi.md#deleteemailfolderasync) | **DELETE** /email/client/DeleteFolder | Delete a folder in email account             . Not available on .NETFramework v2.0
*EmailApi* | [**deleteEmailMessage**](EmailApi.md#deleteemailmessage) | **DELETE** /email/client/DeleteMessage | Delete message from email account by id             
*EmailApi* | [**deleteEmailMessageAsync**](EmailApi.md#deleteemailmessageasync) | **DELETE** /email/client/DeleteMessage | Delete message from email account by id             . Not available on .NETFramework v2.0
*EmailApi* | [**deleteFile**](EmailApi.md#deletefile) | **DELETE** /email/storage/file/{path} | Delete file
*EmailApi* | [**deleteFileAsync**](EmailApi.md#deletefileasync) | **DELETE** /email/storage/file/{path} | Delete file. Not available on .NETFramework v2.0
*EmailApi* | [**deleteFolder**](EmailApi.md#deletefolder) | **DELETE** /email/storage/folder/{path} | Delete folder
*EmailApi* | [**deleteFolderAsync**](EmailApi.md#deletefolderasync) | **DELETE** /email/storage/folder/{path} | Delete folder. Not available on .NETFramework v2.0
*EmailApi* | [**deleteMapiAttachment**](EmailApi.md#deletemapiattachment) | **DELETE** /email/Mapi/{name}/attachments/{attachment} | Remove attachment from document             
*EmailApi* | [**deleteMapiAttachmentAsync**](EmailApi.md#deletemapiattachmentasync) | **DELETE** /email/Mapi/{name}/attachments/{attachment} | Remove attachment from document             . Not available on .NETFramework v2.0
*EmailApi* | [**deleteMapiProperties**](EmailApi.md#deletemapiproperties) | **DELETE** /email/Mapi/{name}/properties | Delete document properties             
*EmailApi* | [**deleteMapiPropertiesAsync**](EmailApi.md#deletemapipropertiesasync) | **DELETE** /email/Mapi/{name}/properties | Delete document properties             . Not available on .NETFramework v2.0
*EmailApi* | [**downloadFile**](EmailApi.md#downloadfile) | **GET** /email/storage/file/{path} | Download file
*EmailApi* | [**downloadFileAsync**](EmailApi.md#downloadfileasync) | **GET** /email/storage/file/{path} | Download file. Not available on .NETFramework v2.0
*EmailApi* | [**fetchEmailMessage**](EmailApi.md#fetchemailmessage) | **GET** /email/client/Fetch | Fetch message mime from email account             
*EmailApi* | [**fetchEmailMessageAsync**](EmailApi.md#fetchemailmessageasync) | **GET** /email/client/Fetch | Fetch message mime from email account             . Not available on .NETFramework v2.0
*EmailApi* | [**getCalendar**](EmailApi.md#getcalendar) | **GET** /email/Calendar/{name}/properties | Get calendar file properties             
*EmailApi* | [**getCalendarAsync**](EmailApi.md#getcalendarasync) | **GET** /email/Calendar/{name}/properties | Get calendar file properties             . Not available on .NETFramework v2.0
*EmailApi* | [**getCalendarAttachment**](EmailApi.md#getcalendarattachment) | **GET** /email/Calendar/{name}/attachments/{attachment} | Get iCalendar document attachment by name             
*EmailApi* | [**getCalendarAttachmentAsync**](EmailApi.md#getcalendarattachmentasync) | **GET** /email/Calendar/{name}/attachments/{attachment} | Get iCalendar document attachment by name             . Not available on .NETFramework v2.0
*EmailApi* | [**getCalendarList**](EmailApi.md#getcalendarlist) | **GET** /email/Calendar | Get iCalendar files list in folder on storage             
*EmailApi* | [**getCalendarListAsync**](EmailApi.md#getcalendarlistasync) | **GET** /email/Calendar | Get iCalendar files list in folder on storage             . Not available on .NETFramework v2.0
*EmailApi* | [**getContactAttachment**](EmailApi.md#getcontactattachment) | **GET** /email/Contact/{format}/{name}/attachments/{attachment} | Get attachment file by name             
*EmailApi* | [**getContactAttachmentAsync**](EmailApi.md#getcontactattachmentasync) | **GET** /email/Contact/{format}/{name}/attachments/{attachment} | Get attachment file by name             . Not available on .NETFramework v2.0
*EmailApi* | [**getContactList**](EmailApi.md#getcontactlist) | **GET** /email/Contact/{format} | Get contact list from storage folder             
*EmailApi* | [**getContactListAsync**](EmailApi.md#getcontactlistasync) | **GET** /email/Contact/{format} | Get contact list from storage folder             . Not available on .NETFramework v2.0
*EmailApi* | [**getContactProperties**](EmailApi.md#getcontactproperties) | **GET** /email/Contact/{format}/{name}/properties | Get contact document properties             
*EmailApi* | [**getContactPropertiesAsync**](EmailApi.md#getcontactpropertiesasync) | **GET** /email/Contact/{format}/{name}/properties | Get contact document properties             . Not available on .NETFramework v2.0
*EmailApi* | [**getDiscUsage**](EmailApi.md#getdiscusage) | **GET** /email/storage/disc | Get disc usage
*EmailApi* | [**getDiscUsageAsync**](EmailApi.md#getdiscusageasync) | **GET** /email/storage/disc | Get disc usage. Not available on .NETFramework v2.0
*EmailApi* | [**getEmail**](EmailApi.md#getemail) | **GET** /email/{fileName} | Get email document             
*EmailApi* | [**getEmailAsync**](EmailApi.md#getemailasync) | **GET** /email/{fileName} | Get email document             . Not available on .NETFramework v2.0
*EmailApi* | [**getEmailAttachment**](EmailApi.md#getemailattachment) | **GET** /email/{fileName}/attachments/{attachment} | Get email attachment by name             
*EmailApi* | [**getEmailAttachmentAsync**](EmailApi.md#getemailattachmentasync) | **GET** /email/{fileName}/attachments/{attachment} | Get email attachment by name             . Not available on .NETFramework v2.0
*EmailApi* | [**getEmailProperty**](EmailApi.md#getemailproperty) | **GET** /email/{fileName}/properties/{propertyName} | Get an email document property by its name             
*EmailApi* | [**getEmailPropertyAsync**](EmailApi.md#getemailpropertyasync) | **GET** /email/{fileName}/properties/{propertyName} | Get an email document property by its name             . Not available on .NETFramework v2.0
*EmailApi* | [**getFileVersions**](EmailApi.md#getfileversions) | **GET** /email/storage/version/{path} | Get file versions
*EmailApi* | [**getFileVersionsAsync**](EmailApi.md#getfileversionsasync) | **GET** /email/storage/version/{path} | Get file versions. Not available on .NETFramework v2.0
*EmailApi* | [**getFilesList**](EmailApi.md#getfileslist) | **GET** /email/storage/folder/{path} | Get all files and folders within a folder
*EmailApi* | [**getFilesListAsync**](EmailApi.md#getfileslistasync) | **GET** /email/storage/folder/{path} | Get all files and folders within a folder. Not available on .NETFramework v2.0
*EmailApi* | [**getMapiAttachment**](EmailApi.md#getmapiattachment) | **GET** /email/Mapi/{name}/attachments/{attachment} | Get document attachment as file stream             
*EmailApi* | [**getMapiAttachmentAsync**](EmailApi.md#getmapiattachmentasync) | **GET** /email/Mapi/{name}/attachments/{attachment} | Get document attachment as file stream             . Not available on .NETFramework v2.0
*EmailApi* | [**getMapiAttachments**](EmailApi.md#getmapiattachments) | **GET** /email/Mapi/{name}/attachments | Get document attachment list             
*EmailApi* | [**getMapiAttachmentsAsync**](EmailApi.md#getmapiattachmentsasync) | **GET** /email/Mapi/{name}/attachments | Get document attachment list             . Not available on .NETFramework v2.0
*EmailApi* | [**getMapiList**](EmailApi.md#getmapilist) | **GET** /email/Mapi | Get document list from storage folder             
*EmailApi* | [**getMapiListAsync**](EmailApi.md#getmapilistasync) | **GET** /email/Mapi | Get document list from storage folder             . Not available on .NETFramework v2.0
*EmailApi* | [**getMapiProperties**](EmailApi.md#getmapiproperties) | **GET** /email/Mapi/{name}/properties | Get document properties             
*EmailApi* | [**getMapiPropertiesAsync**](EmailApi.md#getmapipropertiesasync) | **GET** /email/Mapi/{name}/properties | Get document properties             . Not available on .NETFramework v2.0
*EmailApi* | [**listEmailFolders**](EmailApi.md#listemailfolders) | **GET** /email/client/ListFolders | Get folders list in email account             
*EmailApi* | [**listEmailFoldersAsync**](EmailApi.md#listemailfoldersasync) | **GET** /email/client/ListFolders | Get folders list in email account             . Not available on .NETFramework v2.0
*EmailApi* | [**listEmailMessages**](EmailApi.md#listemailmessages) | **GET** /email/client/ListMessages | Get messages from folder, filtered by query             
*EmailApi* | [**listEmailMessagesAsync**](EmailApi.md#listemailmessagesasync) | **GET** /email/client/ListMessages | Get messages from folder, filtered by query             . Not available on .NETFramework v2.0
*EmailApi* | [**moveFile**](EmailApi.md#movefile) | **PUT** /email/storage/file/move/{srcPath} | Move file
*EmailApi* | [**moveFileAsync**](EmailApi.md#movefileasync) | **PUT** /email/storage/file/move/{srcPath} | Move file. Not available on .NETFramework v2.0
*EmailApi* | [**moveFolder**](EmailApi.md#movefolder) | **PUT** /email/storage/folder/move/{srcPath} | Move folder
*EmailApi* | [**moveFolderAsync**](EmailApi.md#movefolderasync) | **PUT** /email/storage/folder/move/{srcPath} | Move folder. Not available on .NETFramework v2.0
*EmailApi* | [**objectExists**](EmailApi.md#objectexists) | **GET** /email/storage/exist/{path} | Check if file or folder exists
*EmailApi* | [**objectExistsAsync**](EmailApi.md#objectexistsasync) | **GET** /email/storage/exist/{path} | Check if file or folder exists. Not available on .NETFramework v2.0
*EmailApi* | [**saveMailAccount**](EmailApi.md#savemailaccount) | **POST** /email/client/SaveMailAccount | Create email account file (*.account) with login/password authentication             
*EmailApi* | [**saveMailAccountAsync**](EmailApi.md#savemailaccountasync) | **POST** /email/client/SaveMailAccount | Create email account file (*.account) with login/password authentication             . Not available on .NETFramework v2.0
*EmailApi* | [**saveMailOAuthAccount**](EmailApi.md#savemailoauthaccount) | **POST** /email/client/SaveMailOAuthAccount | Create email account file (*.account) with OAuth             
*EmailApi* | [**saveMailOAuthAccountAsync**](EmailApi.md#savemailoauthaccountasync) | **POST** /email/client/SaveMailOAuthAccount | Create email account file (*.account) with OAuth             . Not available on .NETFramework v2.0
*EmailApi* | [**sendEmail**](EmailApi.md#sendemail) | **POST** /email/client/Send | Send an email from *.eml file located on storage             
*EmailApi* | [**sendEmailAsync**](EmailApi.md#sendemailasync) | **POST** /email/client/Send | Send an email from *.eml file located on storage             . Not available on .NETFramework v2.0
*EmailApi* | [**sendEmailMime**](EmailApi.md#sendemailmime) | **POST** /email/client/SendMime | Send an email specified by MIME in request             
*EmailApi* | [**sendEmailMimeAsync**](EmailApi.md#sendemailmimeasync) | **POST** /email/client/SendMime | Send an email specified by MIME in request             . Not available on .NETFramework v2.0
*EmailApi* | [**setEmailProperty**](EmailApi.md#setemailproperty) | **PUT** /email/{fileName}/properties/{propertyName} | Set email document property value             
*EmailApi* | [**setEmailPropertyAsync**](EmailApi.md#setemailpropertyasync) | **PUT** /email/{fileName}/properties/{propertyName} | Set email document property value             . Not available on .NETFramework v2.0
*EmailApi* | [**setEmailReadFlag**](EmailApi.md#setemailreadflag) | **POST** /email/client/SetReadFlag | Sets \&quot;Message is read\&quot; flag             
*EmailApi* | [**setEmailReadFlagAsync**](EmailApi.md#setemailreadflagasync) | **POST** /email/client/SetReadFlag | Sets \&quot;Message is read\&quot; flag             . Not available on .NETFramework v2.0
*EmailApi* | [**storageExists**](EmailApi.md#storageexists) | **GET** /email/storage/{storageName}/exist | Check if storage exists
*EmailApi* | [**storageExistsAsync**](EmailApi.md#storageexistsasync) | **GET** /email/storage/{storageName}/exist | Check if storage exists. Not available on .NETFramework v2.0
*EmailApi* | [**updateCalendarProperties**](EmailApi.md#updatecalendarproperties) | **PUT** /email/Calendar/{name}/properties | Update calendar file properties             
*EmailApi* | [**updateCalendarPropertiesAsync**](EmailApi.md#updatecalendarpropertiesasync) | **PUT** /email/Calendar/{name}/properties | Update calendar file properties             . Not available on .NETFramework v2.0
*EmailApi* | [**updateContactProperties**](EmailApi.md#updatecontactproperties) | **PUT** /email/Contact/{format}/{name}/properties | Update contact document properties             
*EmailApi* | [**updateContactPropertiesAsync**](EmailApi.md#updatecontactpropertiesasync) | **PUT** /email/Contact/{format}/{name}/properties | Update contact document properties             . Not available on .NETFramework v2.0
*EmailApi* | [**updateMapiProperties**](EmailApi.md#updatemapiproperties) | **PUT** /email/Mapi/{name}/properties | Update document properties             
*EmailApi* | [**updateMapiPropertiesAsync**](EmailApi.md#updatemapipropertiesasync) | **PUT** /email/Mapi/{name}/properties | Update document properties             . Not available on .NETFramework v2.0
*EmailApi* | [**uploadFile**](EmailApi.md#uploadfile) | **PUT** /email/storage/file/{path} | Upload file
*EmailApi* | [**uploadFileAsync**](EmailApi.md#uploadfileasync) | **PUT** /email/storage/file/{path} | Upload file. Not available on .NETFramework v2.0


## Documentation for Models

 - [AccountBaseRequest](AccountBaseRequest.md)
 - [AddAttachmentRequest](AddAttachmentRequest.md)
 - [AiBcrImage](AiBcrImage.md)
 - [AiBcrOcrData](AiBcrOcrData.md)
 - [AiBcrOcrDataPart](AiBcrOcrDataPart.md)
 - [AiBcrOptions](AiBcrOptions.md)
 - [AiBcrRq](AiBcrRq.md)
 - [AiNameComponent](AiNameComponent.md)
 - [AiNameCulturalContext](AiNameCulturalContext.md)
 - [AiNameExtracted](AiNameExtracted.md)
 - [AiNameExtractedComponent](AiNameExtractedComponent.md)
 - [AiNameFormatted](AiNameFormatted.md)
 - [AiNameGenderHypothesis](AiNameGenderHypothesis.md)
 - [AiNameMatchResult](AiNameMatchResult.md)
 - [AiNameMismatch](AiNameMismatch.md)
 - [AiNameParsedRq](AiNameParsedRq.md)
 - [AiNameWeighted](AiNameWeighted.md)
 - [AiNameWeightedVariants](AiNameWeightedVariants.md)
 - [BaseObject](BaseObject.md)
 - [CreateEmailRequest](CreateEmailRequest.md)
 - [DiscUsage](DiscUsage.md)
 - [EmailAccountRequest](EmailAccountRequest.md)
 - [EmailDocument](EmailDocument.md)
 - [EmailDocumentResponse](EmailDocumentResponse.md)
 - [EmailProperties](EmailProperties.md)
 - [EmailProperty](EmailProperty.md)
 - [EmailPropertyResponse](EmailPropertyResponse.md)
 - [ErrorDetails](ErrorDetails.md)
 - [FileVersions](FileVersions.md)
 - [FilesList](FilesList.md)
 - [FilesUploadResult](FilesUploadResult.md)
 - [HierarchicalObjectRequest](HierarchicalObjectRequest.md)
 - [HierarchicalObjectResponse](HierarchicalObjectResponse.md)
 - [Link](Link.md)
 - [ListResponseOfAiBcrOcrData](ListResponseOfAiBcrOcrData.md)
 - [ListResponseOfAiNameComponent](ListResponseOfAiNameComponent.md)
 - [ListResponseOfAiNameExtracted](ListResponseOfAiNameExtracted.md)
 - [ListResponseOfAiNameGenderHypothesis](ListResponseOfAiNameGenderHypothesis.md)
 - [ListResponseOfHierarchicalObject](ListResponseOfHierarchicalObject.md)
 - [ListResponseOfHierarchicalObjectResponse](ListResponseOfHierarchicalObjectResponse.md)
 - [ListResponseOfMailServerFolder](ListResponseOfMailServerFolder.md)
 - [ListResponseOfStorageFileLocation](ListResponseOfStorageFileLocation.md)
 - [ListResponseOfString](ListResponseOfString.md)
 - [MailServerFolder](MailServerFolder.md)
 - [MimeResponse](MimeResponse.md)
 - [ModelError](ModelError.md)
 - [ObjectExist](ObjectExist.md)
 - [SetEmailPropertyRequest](SetEmailPropertyRequest.md)
 - [StorageExist](StorageExist.md)
 - [StorageFile](StorageFile.md)
 - [StorageFolderLocation](StorageFolderLocation.md)
 - [ValueResponse](ValueResponse.md)
 - [AiBcrBase64Image](AiBcrBase64Image.md)
 - [AiBcrBase64Rq](AiBcrBase64Rq.md)
 - [AiBcrImageStorageFile](AiBcrImageStorageFile.md)
 - [AiBcrParseOcrDataRq](AiBcrParseOcrDataRq.md)
 - [AiBcrStorageImageRq](AiBcrStorageImageRq.md)
 - [AiNameParsedMatchRq](AiNameParsedMatchRq.md)
 - [AppendEmailAccountBaseRequest](AppendEmailAccountBaseRequest.md)
 - [CreateFolderBaseRequest](CreateFolderBaseRequest.md)
 - [DeleteFolderBaseRequest](DeleteFolderBaseRequest.md)
 - [DeleteMessageBaseRequest](DeleteMessageBaseRequest.md)
 - [FileVersion](FileVersion.md)
 - [HierarchicalObject](HierarchicalObject.md)
 - [IndexedHierarchicalObject](IndexedHierarchicalObject.md)
 - [IndexedPrimitiveObject](IndexedPrimitiveObject.md)
 - [PrimitiveObject](PrimitiveObject.md)
 - [SaveEmailAccountRequest](SaveEmailAccountRequest.md)
 - [SaveOAuthEmailAccountRequest](SaveOAuthEmailAccountRequest.md)
 - [SendEmailBaseRequest](SendEmailBaseRequest.md)
 - [SendEmailMimeBaseRequest](SendEmailMimeBaseRequest.md)
 - [SetMessageReadFlagAccountBaseRequest](SetMessageReadFlagAccountBaseRequest.md)
 - [StorageFileLocation](StorageFileLocation.md)
 - [AiBcrParseOcrDataStorageRq](AiBcrParseOcrDataStorageRq.md)
 - [AiBcrParseStorageRq](AiBcrParseStorageRq.md)
 - [AppendEmailBaseRequest](AppendEmailBaseRequest.md)
 - [AppendEmailMimeBaseRequest](AppendEmailMimeBaseRequest.md)


