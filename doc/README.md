
## Documentation for API endpoints

All URIs are relative to *https://api.aspose.cloud/v3.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EmailApi* | [**addCalendarAttachment**](EmailApi.md#addcalendarattachment) | **PUT** /email/Calendar/{name}/attachments/{attachment} | Adds an attachment to iCalendar file             
*EmailApi* | [**addContactAttachment**](EmailApi.md#addcontactattachment) | **PUT** /email/Contact/{format}/{name}/attachments/{attachment} | Add attachment to contact document             
*EmailApi* | [**addEmailAttachment**](EmailApi.md#addemailattachment) | **POST** /email/{fileName}/attachments/{attachmentName} | Adds an attachment to Email document             
*EmailApi* | [**addMapiAttachment**](EmailApi.md#addmapiattachment) | **PUT** /email/Mapi/{name}/attachments/{attachment} | Add attachment to document             
*EmailApi* | [**aiBcrOcr**](EmailApi.md#aibcrocr) | **POST** /email/AiBcr/ocr | Ocr images             
*EmailApi* | [**aiBcrOcrStorage**](EmailApi.md#aibcrocrstorage) | **POST** /email/AiBcr/ocr-storage | Ocr images from storage             
*EmailApi* | [**aiBcrParse**](EmailApi.md#aibcrparse) | **POST** /email/AiBcr/parse | Parse images to vCard properties             
*EmailApi* | [**aiBcrParseModel**](EmailApi.md#aibcrparsemodel) | **POST** /email/AiBcr/parse-model | Parse images to vCard document models             
*EmailApi* | [**aiBcrParseOcrDataModel**](EmailApi.md#aibcrparseocrdatamodel) | **POST** /email/AiBcr/parse-ocr-data-model | Parse OCR data to vCard document models             
*EmailApi* | [**aiBcrParseStorage**](EmailApi.md#aibcrparsestorage) | **POST** /email/AiBcr/parse-storage | Parse images from storage to vCard files             
*EmailApi* | [**aiNameComplete**](EmailApi.md#ainamecomplete) | **GET** /email/AiName/complete | The call proposes k most probable names for given starting characters             
*EmailApi* | [**aiNameExpand**](EmailApi.md#ainameexpand) | **GET** /email/AiName/expand | Expands a person&#39;s name into a list of possible alternatives using options for expanding instructions             
*EmailApi* | [**aiNameExpandParsed**](EmailApi.md#ainameexpandparsed) | **POST** /email/AiName/expand-parsed | Expands a person&#39;s parsed name into a list of possible alternatives using options for expanding instructions             
*EmailApi* | [**aiNameFormat**](EmailApi.md#ainameformat) | **GET** /email/AiName/format | Formats a person&#39;s name in correct case and name order using options for formatting instructions             
*EmailApi* | [**aiNameFormatParsed**](EmailApi.md#ainameformatparsed) | **POST** /email/AiName/format-parsed | Formats a person&#39;s parsed name in correct case and name order using options for formatting instructions             
*EmailApi* | [**aiNameGenderize**](EmailApi.md#ainamegenderize) | **GET** /email/AiName/genderize | Detect person&#39;s gender from name string             
*EmailApi* | [**aiNameGenderizeParsed**](EmailApi.md#ainamegenderizeparsed) | **POST** /email/AiName/genderize-parsed | Detect person&#39;s gender from parsed name             
*EmailApi* | [**aiNameMatch**](EmailApi.md#ainamematch) | **GET** /email/AiName/match | Compare people&#39;s names. Uses options for comparing instructions             
*EmailApi* | [**aiNameMatchParsed**](EmailApi.md#ainamematchparsed) | **POST** /email/AiName/match-parsed | Compare people&#39;s parsed names and attributes. Uses options for comparing instructions             
*EmailApi* | [**aiNameParse**](EmailApi.md#ainameparse) | **GET** /email/AiName/parse | Parse name to components             
*EmailApi* | [**aiNameParseEmailAddress**](EmailApi.md#ainameparseemailaddress) | **GET** /email/AiName/parse-email-address | Parse person&#39;s name out of an email address             
*EmailApi* | [**appendEmailMessage**](EmailApi.md#appendemailmessage) | **PUT** /email/client/Append | Adds an email from *.eml file to specified folder in email account             
*EmailApi* | [**appendEmailModelMessage**](EmailApi.md#appendemailmodelmessage) | **PUT** /email/client/AppendModel | Adds an email from model to specified folder in email account             
*EmailApi* | [**appendMimeMessage**](EmailApi.md#appendmimemessage) | **PUT** /email/client/AppendMime | Adds an email from MIME to specified folder in email account             
*EmailApi* | [**convertCalendarModelToAlternate**](EmailApi.md#convertcalendarmodeltoalternate) | **PUT** /email/CalendarModel/as-alternate | Convert iCalendar to AlternateView             
*EmailApi* | [**convertEmail**](EmailApi.md#convertemail) | **PUT** /email/convert/{format} | Converts email document to specified format and returns as file             
*EmailApi* | [**copyFile**](EmailApi.md#copyfile) | **PUT** /email/storage/file/copy/{srcPath} | Copy file
*EmailApi* | [**copyFolder**](EmailApi.md#copyfolder) | **PUT** /email/storage/folder/copy/{srcPath} | Copy folder
*EmailApi* | [**createCalendar**](EmailApi.md#createcalendar) | **PUT** /email/Calendar/{name} | Create calendar file             
*EmailApi* | [**createContact**](EmailApi.md#createcontact) | **PUT** /email/Contact/{format}/{name} | Create contact document             
*EmailApi* | [**createEmail**](EmailApi.md#createemail) | **PUT** /email/{fileName} | Create an email document             
*EmailApi* | [**createEmailFolder**](EmailApi.md#createemailfolder) | **PUT** /email/client/CreateFolder | Create new folder in email account             
*EmailApi* | [**createFolder**](EmailApi.md#createfolder) | **PUT** /email/storage/folder/{path} | Create the folder
*EmailApi* | [**createMapi**](EmailApi.md#createmapi) | **PUT** /email/Mapi/{name} | Create new document             
*EmailApi* | [**deleteCalendarProperty**](EmailApi.md#deletecalendarproperty) | **DELETE** /email/Calendar/{name}/properties/{memberName}/{index} | Deletes indexed property by index and name. To delete Reminder attachment, use path ReminderAttachment/{ReminderIndex}/{AttachmentIndex}             
*EmailApi* | [**deleteContactProperty**](EmailApi.md#deletecontactproperty) | **DELETE** /email/Contact/{format}/{name}/properties/{memberName}/{index} | Delete property from indexed property list             
*EmailApi* | [**deleteEmailFolder**](EmailApi.md#deleteemailfolder) | **DELETE** /email/client/DeleteFolder | Delete a folder in email account             
*EmailApi* | [**deleteEmailMessage**](EmailApi.md#deleteemailmessage) | **DELETE** /email/client/DeleteMessage | Delete message from email account by id             
*EmailApi* | [**deleteFile**](EmailApi.md#deletefile) | **DELETE** /email/storage/file/{path} | Delete file
*EmailApi* | [**deleteFolder**](EmailApi.md#deletefolder) | **DELETE** /email/storage/folder/{path} | Delete folder
*EmailApi* | [**deleteMapiAttachment**](EmailApi.md#deletemapiattachment) | **DELETE** /email/Mapi/{name}/attachments/{attachment} | Remove attachment from document             
*EmailApi* | [**deleteMapiProperties**](EmailApi.md#deletemapiproperties) | **DELETE** /email/Mapi/{name}/properties | Delete document properties             
*EmailApi* | [**discoverEmailConfig**](EmailApi.md#discoveremailconfig) | **GET** /email/config/discover | Discover email accounts by email address. Does not validate discovered accounts.             
*EmailApi* | [**discoverEmailConfigOauth**](EmailApi.md#discoveremailconfigoauth) | **POST** /email/config/discover/oauth | Discover email accounts by email address. Validates discovered accounts using OAuth 2.0.             
*EmailApi* | [**discoverEmailConfigPassword**](EmailApi.md#discoveremailconfigpassword) | **POST** /email/config/discover/password | Discover email accounts by email address. Validates discovered accounts using login and password.             
*EmailApi* | [**downloadFile**](EmailApi.md#downloadfile) | **GET** /email/storage/file/{path} | Download file
*EmailApi* | [**fetchEmailMessage**](EmailApi.md#fetchemailmessage) | **GET** /email/client/Fetch | Fetch message mime from email account             
*EmailApi* | [**fetchEmailModel**](EmailApi.md#fetchemailmodel) | **GET** /email/client/FetchModel | Fetch message model from email account             
*EmailApi* | [**getCalendar**](EmailApi.md#getcalendar) | **GET** /email/Calendar/{name}/properties | Get calendar file properties             
*EmailApi* | [**getCalendarAttachment**](EmailApi.md#getcalendarattachment) | **GET** /email/Calendar/{name}/attachments/{attachment} | Get iCalendar document attachment by name             
*EmailApi* | [**getCalendarList**](EmailApi.md#getcalendarlist) | **GET** /email/Calendar | Get iCalendar files list in folder on storage             
*EmailApi* | [**getCalendarModel**](EmailApi.md#getcalendarmodel) | **GET** /email/CalendarModel/{name} | Get calendar file             
*EmailApi* | [**getCalendarModelAsAlternate**](EmailApi.md#getcalendarmodelasalternate) | **GET** /email/CalendarModel/{name}/as-alternate/{calendarAction} | Get iCalendar from storage as AlternateView             
*EmailApi* | [**getCalendarModelList**](EmailApi.md#getcalendarmodellist) | **GET** /email/CalendarModel | Get iCalendar list from storage folder             
*EmailApi* | [**getContactAttachment**](EmailApi.md#getcontactattachment) | **GET** /email/Contact/{format}/{name}/attachments/{attachment} | Get attachment file by name             
*EmailApi* | [**getContactList**](EmailApi.md#getcontactlist) | **GET** /email/Contact/{format} | Get contact list from storage folder             
*EmailApi* | [**getContactModel**](EmailApi.md#getcontactmodel) | **GET** /email/ContactModel/{format}/{name} | Get contact document.             
*EmailApi* | [**getContactModelList**](EmailApi.md#getcontactmodellist) | **GET** /email/ContactModel/{format} | Get contact list from storage folder.             
*EmailApi* | [**getContactProperties**](EmailApi.md#getcontactproperties) | **GET** /email/Contact/{format}/{name}/properties | Get contact document properties             
*EmailApi* | [**getDiscUsage**](EmailApi.md#getdiscusage) | **GET** /email/storage/disc | Get disc usage
*EmailApi* | [**getEmail**](EmailApi.md#getemail) | **GET** /email/{fileName} | Get email document             
*EmailApi* | [**getEmailAsFile**](EmailApi.md#getemailasfile) | **GET** /email/{fileName}/as-file/{format} | Converts email document from storage to specified format and returns as file             
*EmailApi* | [**getEmailAttachment**](EmailApi.md#getemailattachment) | **GET** /email/{fileName}/attachments/{attachment} | Get email attachment by name             
*EmailApi* | [**getEmailClientAccount**](EmailApi.md#getemailclientaccount) | **GET** /email/client/email-client-account | Get email client account from storage             
*EmailApi* | [**getEmailClientMultiAccount**](EmailApi.md#getemailclientmultiaccount) | **GET** /email/client/multi-account | Get email client multi account file (*.multi.account). Will respond error if file extension is not \&quot;.multi.account\&quot;.             
*EmailApi* | [**getEmailModel**](EmailApi.md#getemailmodel) | **GET** /email/model/{format}/{name} | Get email document.             
*EmailApi* | [**getEmailModelList**](EmailApi.md#getemailmodellist) | **GET** /email/model/{format} | Get email list from storage folder.             
*EmailApi* | [**getEmailProperty**](EmailApi.md#getemailproperty) | **GET** /email/{fileName}/properties/{propertyName} | Get an email document property by its name             
*EmailApi* | [**getEmailThread**](EmailApi.md#getemailthread) | **GET** /email/client/threads/{threadId} | Get message thread by id. All messages are fully fetched. For accounts with CacheFile only cached messages will be returned.             
*EmailApi* | [**getFileVersions**](EmailApi.md#getfileversions) | **GET** /email/storage/version/{path} | Get file versions
*EmailApi* | [**getFilesList**](EmailApi.md#getfileslist) | **GET** /email/storage/folder/{path} | Get all files and folders within a folder
*EmailApi* | [**getMapiAttachment**](EmailApi.md#getmapiattachment) | **GET** /email/Mapi/{name}/attachments/{attachment} | Get document attachment as file stream             
*EmailApi* | [**getMapiAttachments**](EmailApi.md#getmapiattachments) | **GET** /email/Mapi/{name}/attachments | Get document attachment list             
*EmailApi* | [**getMapiList**](EmailApi.md#getmapilist) | **GET** /email/Mapi | Get document list from storage folder             
*EmailApi* | [**getMapiProperties**](EmailApi.md#getmapiproperties) | **GET** /email/Mapi/{name}/properties | Get document properties             
*EmailApi* | [**isEmailAddressDisposable**](EmailApi.md#isemailaddressdisposable) | **GET** /email/disposable/isDisposable/{address} | Check email address is disposable             
*EmailApi* | [**listEmailFolders**](EmailApi.md#listemailfolders) | **GET** /email/client/ListFolders | Get folders list in email account             
*EmailApi* | [**listEmailMessages**](EmailApi.md#listemailmessages) | **GET** /email/client/ListMessages | Get messages from folder, filtered by query             
*EmailApi* | [**listEmailModels**](EmailApi.md#listemailmodels) | **GET** /email/client/ListMessagesModel | Get messages from folder, filtered by query             
*EmailApi* | [**listEmailThreads**](EmailApi.md#listemailthreads) | **GET** /email/client/threads | Get message threads from folder. All messages are partly fetched (without email body and other fields)             
*EmailApi* | [**moveFile**](EmailApi.md#movefile) | **PUT** /email/storage/file/move/{srcPath} | Move file
*EmailApi* | [**moveFolder**](EmailApi.md#movefolder) | **PUT** /email/storage/folder/move/{srcPath} | Move folder
*EmailApi* | [**objectExists**](EmailApi.md#objectexists) | **GET** /email/storage/exist/{path} | Check if file or folder exists
*EmailApi* | [**saveCalendarModel**](EmailApi.md#savecalendarmodel) | **PUT** /email/CalendarModel/{name} | Save iCalendar             
*EmailApi* | [**saveContactModel**](EmailApi.md#savecontactmodel) | **PUT** /email/ContactModel/{format}/{name} | Save contact.             
*EmailApi* | [**saveEmailClientAccount**](EmailApi.md#saveemailclientaccount) | **PUT** /email/client/email-client-account | Create email client account file (*.account) with any of supported credentials             
*EmailApi* | [**saveEmailClientMultiAccount**](EmailApi.md#saveemailclientmultiaccount) | **PUT** /email/client/multi-account | Create email client multi account file (*.multi.account). Will respond error if file extension is not \&quot;.multi.account\&quot;.             
*EmailApi* | [**saveEmailModel**](EmailApi.md#saveemailmodel) | **PUT** /email/model/{format}/{name} | Save email document.             
*EmailApi* | [**saveMailAccount**](EmailApi.md#savemailaccount) | **POST** /email/client/SaveMailAccount | Create email account file (*.account) with login/password authentication             
*EmailApi* | [**saveMailOAuthAccount**](EmailApi.md#savemailoauthaccount) | **POST** /email/client/SaveMailOAuthAccount | Create email account file (*.account) with OAuth             
*EmailApi* | [**sendEmail**](EmailApi.md#sendemail) | **POST** /email/client/Send | Send an email from *.eml file located on storage             
*EmailApi* | [**sendEmailMime**](EmailApi.md#sendemailmime) | **POST** /email/client/SendMime | Send an email specified by MIME in request             
*EmailApi* | [**sendEmailModel**](EmailApi.md#sendemailmodel) | **POST** /email/client/SendModel | Send an email specified by model in request             
*EmailApi* | [**setEmailProperty**](EmailApi.md#setemailproperty) | **PUT** /email/{fileName}/properties/{propertyName} | Set email document property value             
*EmailApi* | [**setEmailReadFlag**](EmailApi.md#setemailreadflag) | **POST** /email/client/SetReadFlag | Sets \&quot;Message is read\&quot; flag             
*EmailApi* | [**storageExists**](EmailApi.md#storageexists) | **GET** /email/storage/{storageName}/exist | Check if storage exists
*EmailApi* | [**updateCalendarProperties**](EmailApi.md#updatecalendarproperties) | **PUT** /email/Calendar/{name}/properties | Update calendar file properties             
*EmailApi* | [**updateContactProperties**](EmailApi.md#updatecontactproperties) | **PUT** /email/Contact/{format}/{name}/properties | Update contact document properties             
*EmailApi* | [**updateMapiProperties**](EmailApi.md#updatemapiproperties) | **PUT** /email/Mapi/{name}/properties | Update document properties             
*EmailApi* | [**uploadFile**](EmailApi.md#uploadfile) | **PUT** /email/storage/file/{path} | Upload file


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
 - [AssociatedPerson](AssociatedPerson.md)
 - [AttachmentBase](AttachmentBase.md)
 - [BaseObject](BaseObject.md)
 - [CalendarDto](CalendarDto.md)
 - [CalendarDtoAlternateRq](CalendarDtoAlternateRq.md)
 - [CalendarReminder](CalendarReminder.md)
 - [ContactDto](ContactDto.md)
 - [ContactPhoto](ContactPhoto.md)
 - [ContentType](ContentType.md)
 - [ContentTypeParameter](ContentTypeParameter.md)
 - [CreateEmailRequest](CreateEmailRequest.md)
 - [CustomerEvent](CustomerEvent.md)
 - [DiscUsage](DiscUsage.md)
 - [DiscoverEmailConfigRq](DiscoverEmailConfigRq.md)
 - [EmailAccountConfig](EmailAccountConfig.md)
 - [EmailAccountRequest](EmailAccountRequest.md)
 - [EmailAddress](EmailAddress.md)
 - [EmailClientAccount](EmailClientAccount.md)
 - [EmailClientAccountCredentials](EmailClientAccountCredentials.md)
 - [EmailClientMultiAccount](EmailClientMultiAccount.md)
 - [EmailDocument](EmailDocument.md)
 - [EmailDocumentResponse](EmailDocumentResponse.md)
 - [EmailDto](EmailDto.md)
 - [EmailProperties](EmailProperties.md)
 - [EmailProperty](EmailProperty.md)
 - [EmailPropertyResponse](EmailPropertyResponse.md)
 - [EmailThread](EmailThread.md)
 - [EnumWithCustomOfAssociatedPersonCategory](EnumWithCustomOfAssociatedPersonCategory.md)
 - [EnumWithCustomOfEmailAddressCategory](EnumWithCustomOfEmailAddressCategory.md)
 - [EnumWithCustomOfEventCategory](EnumWithCustomOfEventCategory.md)
 - [EnumWithCustomOfInstantMessengerCategory](EnumWithCustomOfInstantMessengerCategory.md)
 - [EnumWithCustomOfPhoneNumberCategory](EnumWithCustomOfPhoneNumberCategory.md)
 - [EnumWithCustomOfPostalAddressCategory](EnumWithCustomOfPostalAddressCategory.md)
 - [EnumWithCustomOfUrlCategory](EnumWithCustomOfUrlCategory.md)
 - [ErrorDetails](ErrorDetails.md)
 - [FileVersions](FileVersions.md)
 - [FilesList](FilesList.md)
 - [FilesUploadResult](FilesUploadResult.md)
 - [HierarchicalObjectRequest](HierarchicalObjectRequest.md)
 - [HierarchicalObjectResponse](HierarchicalObjectResponse.md)
 - [InstantMessengerAddress](InstantMessengerAddress.md)
 - [Link](Link.md)
 - [ListResponseOfAiBcrOcrData](ListResponseOfAiBcrOcrData.md)
 - [ListResponseOfAiNameComponent](ListResponseOfAiNameComponent.md)
 - [ListResponseOfAiNameExtracted](ListResponseOfAiNameExtracted.md)
 - [ListResponseOfAiNameGenderHypothesis](ListResponseOfAiNameGenderHypothesis.md)
 - [ListResponseOfContactDto](ListResponseOfContactDto.md)
 - [ListResponseOfEmailAccountConfig](ListResponseOfEmailAccountConfig.md)
 - [ListResponseOfEmailDto](ListResponseOfEmailDto.md)
 - [ListResponseOfEmailThread](ListResponseOfEmailThread.md)
 - [ListResponseOfHierarchicalObject](ListResponseOfHierarchicalObject.md)
 - [ListResponseOfHierarchicalObjectResponse](ListResponseOfHierarchicalObjectResponse.md)
 - [ListResponseOfMailServerFolder](ListResponseOfMailServerFolder.md)
 - [ListResponseOfStorageFileLocation](ListResponseOfStorageFileLocation.md)
 - [ListResponseOfStorageModelOfCalendarDto](ListResponseOfStorageModelOfCalendarDto.md)
 - [ListResponseOfStorageModelOfContactDto](ListResponseOfStorageModelOfContactDto.md)
 - [ListResponseOfStorageModelOfEmailDto](ListResponseOfStorageModelOfEmailDto.md)
 - [ListResponseOfString](ListResponseOfString.md)
 - [MailAddress](MailAddress.md)
 - [MailServerFolder](MailServerFolder.md)
 - [MimeResponse](MimeResponse.md)
 - [ModelError](ModelError.md)
 - [NameValuePair](NameValuePair.md)
 - [ObjectExist](ObjectExist.md)
 - [PhoneNumber](PhoneNumber.md)
 - [PostalAddress](PostalAddress.md)
 - [ReminderAttendee](ReminderAttendee.md)
 - [ReminderTrigger](ReminderTrigger.md)
 - [SetEmailPropertyRequest](SetEmailPropertyRequest.md)
 - [StorageExist](StorageExist.md)
 - [StorageFile](StorageFile.md)
 - [StorageFileRqOfEmailClientAccount](StorageFileRqOfEmailClientAccount.md)
 - [StorageFileRqOfEmailClientMultiAccount](StorageFileRqOfEmailClientMultiAccount.md)
 - [StorageFolderLocation](StorageFolderLocation.md)
 - [StorageModelOfCalendarDto](StorageModelOfCalendarDto.md)
 - [StorageModelOfContactDto](StorageModelOfContactDto.md)
 - [StorageModelOfEmailDto](StorageModelOfEmailDto.md)
 - [StorageModelRqOfCalendarDto](StorageModelRqOfCalendarDto.md)
 - [StorageModelRqOfContactDto](StorageModelRqOfContactDto.md)
 - [StorageModelRqOfEmailDto](StorageModelRqOfEmailDto.md)
 - [Url](Url.md)
 - [ValueResponse](ValueResponse.md)
 - [ValueTOfBoolean](ValueTOfBoolean.md)
 - [AiBcrBase64Image](AiBcrBase64Image.md)
 - [AiBcrBase64Rq](AiBcrBase64Rq.md)
 - [AiBcrImageStorageFile](AiBcrImageStorageFile.md)
 - [AiBcrParseOcrDataRq](AiBcrParseOcrDataRq.md)
 - [AiBcrStorageImageRq](AiBcrStorageImageRq.md)
 - [AiNameParsedMatchRq](AiNameParsedMatchRq.md)
 - [AlternateView](AlternateView.md)
 - [AppendEmailAccountBaseRequest](AppendEmailAccountBaseRequest.md)
 - [Attachment](Attachment.md)
 - [CalendarDtoList](CalendarDtoList.md)
 - [ContactDtoList](ContactDtoList.md)
 - [CreateFolderBaseRequest](CreateFolderBaseRequest.md)
 - [DeleteFolderBaseRequest](DeleteFolderBaseRequest.md)
 - [DeleteMessageBaseRequest](DeleteMessageBaseRequest.md)
 - [DiscoverEmailConfigOauth](DiscoverEmailConfigOauth.md)
 - [DiscoverEmailConfigPassword](DiscoverEmailConfigPassword.md)
 - [EmailAccountConfigList](EmailAccountConfigList.md)
 - [EmailClientAccountOauthCredentials](EmailClientAccountOauthCredentials.md)
 - [EmailClientAccountPasswordCredentials](EmailClientAccountPasswordCredentials.md)
 - [EmailDtoList](EmailDtoList.md)
 - [EmailThreadList](EmailThreadList.md)
 - [FileVersion](FileVersion.md)
 - [HierarchicalObject](HierarchicalObject.md)
 - [IndexedHierarchicalObject](IndexedHierarchicalObject.md)
 - [IndexedPrimitiveObject](IndexedPrimitiveObject.md)
 - [LinkedResource](LinkedResource.md)
 - [PrimitiveObject](PrimitiveObject.md)
 - [SaveEmailAccountRequest](SaveEmailAccountRequest.md)
 - [SaveOAuthEmailAccountRequest](SaveOAuthEmailAccountRequest.md)
 - [SendEmailBaseRequest](SendEmailBaseRequest.md)
 - [SendEmailMimeBaseRequest](SendEmailMimeBaseRequest.md)
 - [SendEmailModelRq](SendEmailModelRq.md)
 - [SetMessageReadFlagAccountBaseRequest](SetMessageReadFlagAccountBaseRequest.md)
 - [StorageFileLocation](StorageFileLocation.md)
 - [AiBcrParseStorageRq](AiBcrParseStorageRq.md)
 - [AppendEmailBaseRequest](AppendEmailBaseRequest.md)
 - [AppendEmailMimeBaseRequest](AppendEmailMimeBaseRequest.md)
 - [AppendEmailModelRq](AppendEmailModelRq.md)


