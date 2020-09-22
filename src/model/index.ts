import { AiBcrImage } from "./ai-bcr-image";
import { AiBcrOptions } from "./ai-bcr-options";
import { AiBcrParseStorageRequest } from "./ai-bcr-parse-storage-request";
import { AiNameComponent } from "./ai-name-component";
import { AiNameCulturalContext } from "./ai-name-cultural-context";
import { AiNameExtracted } from "./ai-name-extracted";
import { AiNameExtractedComponent } from "./ai-name-extracted-component";
import { AiNameFormatted } from "./ai-name-formatted";
import { AiNameGenderHypothesis } from "./ai-name-gender-hypothesis";
import { AiNameMatchResult } from "./ai-name-match-result";
import { AiNameMismatch } from "./ai-name-mismatch";
import { AiNameParsedRequest } from "./ai-name-parsed-request";
import { AiNameWeighted } from "./ai-name-weighted";
import { AiNameWeightedVariants } from "./ai-name-weighted-variants";
import { AssociatedPerson } from "./associated-person";
import { AttachmentBase } from "./attachment-base";
import { CalendarAsAlternateRequest } from "./calendar-as-alternate-request";
import { CalendarAsFileRequest } from "./calendar-as-file-request";
import { CalendarDto } from "./calendar-dto";
import { CalendarReminder } from "./calendar-reminder";
import { ClientAccountBaseRequest } from "./client-account-base-request";
import { ContactAsFileRequest } from "./contact-as-file-request";
import { ContactDto } from "./contact-dto";
import { ContactPhoto } from "./contact-photo";
import { ContentType } from "./content-type";
import { ContentTypeParameter } from "./content-type-parameter";
import { CustomerEvent } from "./customer-event";
import { DiscUsage } from "./disc-usage";
import { DiscoverEmailConfigRequest } from "./discover-email-config-request";
import { EmailAccountConfig } from "./email-account-config";
import { EmailAddress } from "./email-address";
import { EmailAsFileRequest } from "./email-as-file-request";
import { EmailClientAccount } from "./email-client-account";
import { EmailClientAccountCredentials } from "./email-client-account-credentials";
import { EmailClientMultiAccount } from "./email-client-multi-account";
import { EmailDto } from "./email-dto";
import { EmailThread } from "./email-thread";
import { EnumWithCustomOfAssociatedPersonCategory } from "./enum-with-custom-of-associated-person-category";
import { EnumWithCustomOfEmailAddressCategory } from "./enum-with-custom-of-email-address-category";
import { EnumWithCustomOfEventCategory } from "./enum-with-custom-of-event-category";
import { EnumWithCustomOfInstantMessengerCategory } from "./enum-with-custom-of-instant-messenger-category";
import { EnumWithCustomOfPhoneNumberCategory } from "./enum-with-custom-of-phone-number-category";
import { EnumWithCustomOfPostalAddressCategory } from "./enum-with-custom-of-postal-address-category";
import { EnumWithCustomOfUrlCategory } from "./enum-with-custom-of-url-category";
import { ErrorDetails } from "./error-details";
import { FileVersions } from "./file-versions";
import { FilesList } from "./files-list";
import { FilesUploadResult } from "./files-upload-result";
import { InstantMessengerAddress } from "./instant-messenger-address";
import { ListResponseOfAiNameComponent } from "./list-response-of-ai-name-component";
import { ListResponseOfAiNameExtracted } from "./list-response-of-ai-name-extracted";
import { ListResponseOfAiNameGenderHypothesis } from "./list-response-of-ai-name-gender-hypothesis";
import { ListResponseOfContactDto } from "./list-response-of-contact-dto";
import { ListResponseOfEmailAccountConfig } from "./list-response-of-email-account-config";
import { ListResponseOfEmailDto } from "./list-response-of-email-dto";
import { ListResponseOfEmailThread } from "./list-response-of-email-thread";
import { ListResponseOfMailMessageBase } from "./list-response-of-mail-message-base";
import { ListResponseOfMailServerFolder } from "./list-response-of-mail-server-folder";
import { ListResponseOfStorageFileLocation } from "./list-response-of-storage-file-location";
import { ListResponseOfStorageModelOfCalendarDto } from "./list-response-of-storage-model-of-calendar-dto";
import { ListResponseOfStorageModelOfContactDto } from "./list-response-of-storage-model-of-contact-dto";
import { ListResponseOfStorageModelOfEmailDto } from "./list-response-of-storage-model-of-email-dto";
import { MailAddress } from "./mail-address";
import { MailMessageBase } from "./mail-message-base";
import { MailServerFolder } from "./mail-server-folder";
import { MapiAttachmentDto } from "./mapi-attachment-dto";
import { MapiCalendarAsFileRequest } from "./mapi-calendar-as-file-request";
import { MapiCalendarAttendeesDto } from "./mapi-calendar-attendees-dto";
import { MapiCalendarEventRecurrenceDto } from "./mapi-calendar-event-recurrence-dto";
import { MapiCalendarExceptionInfoDto } from "./mapi-calendar-exception-info-dto";
import { MapiCalendarRecurrencePatternDto } from "./mapi-calendar-recurrence-pattern-dto";
import { MapiCalendarTimeZoneDto } from "./mapi-calendar-time-zone-dto";
import { MapiCalendarTimeZoneInfoDto } from "./mapi-calendar-time-zone-info-dto";
import { MapiCalendarTimeZoneRuleDto } from "./mapi-calendar-time-zone-rule-dto";
import { MapiContactAsFileRequest } from "./mapi-contact-as-file-request";
import { MapiContactElectronicAddressDto } from "./mapi-contact-electronic-address-dto";
import { MapiContactElectronicAddressPropertySetDto } from "./mapi-contact-electronic-address-property-set-dto";
import { MapiContactEventPropertySetDto } from "./mapi-contact-event-property-set-dto";
import { MapiContactNamePropertySetDto } from "./mapi-contact-name-property-set-dto";
import { MapiContactOtherPropertySetDto } from "./mapi-contact-other-property-set-dto";
import { MapiContactPersonalInfoPropertySetDto } from "./mapi-contact-personal-info-property-set-dto";
import { MapiContactPhysicalAddressDto } from "./mapi-contact-physical-address-dto";
import { MapiContactPhysicalAddressPropertySetDto } from "./mapi-contact-physical-address-property-set-dto";
import { MapiContactProfessionalPropertySetDto } from "./mapi-contact-professional-property-set-dto";
import { MapiContactTelephonePropertySetDto } from "./mapi-contact-telephone-property-set-dto";
import { MapiElectronicAddressDto } from "./mapi-electronic-address-dto";
import { MapiMessageAsFileRequest } from "./mapi-message-as-file-request";
import { MapiMessageItemBaseDto } from "./mapi-message-item-base-dto";
import { MapiPropertyDescriptor } from "./mapi-property-descriptor";
import { MapiPropertyDto } from "./mapi-property-dto";
import { MapiRecipientDto } from "./mapi-recipient-dto";
import { ModelError } from "./model-error";
import { NameValuePair } from "./name-value-pair";
import { ObjectExist } from "./object-exist";
import { PhoneNumber } from "./phone-number";
import { PostalAddress } from "./postal-address";
import { RecurrencePatternDto } from "./recurrence-pattern-dto";
import { ReminderAttendee } from "./reminder-attendee";
import { ReminderTrigger } from "./reminder-trigger";
import { StorageExist } from "./storage-exist";
import { StorageFile } from "./storage-file";
import { StorageFolderLocation } from "./storage-folder-location";
import { StorageModelOfCalendarDto } from "./storage-model-of-calendar-dto";
import { StorageModelOfContactDto } from "./storage-model-of-contact-dto";
import { StorageModelOfEmailClientAccount } from "./storage-model-of-email-client-account";
import { StorageModelOfEmailClientMultiAccount } from "./storage-model-of-email-client-multi-account";
import { StorageModelOfEmailDto } from "./storage-model-of-email-dto";
import { StorageModelOfMapiCalendarDto } from "./storage-model-of-mapi-calendar-dto";
import { StorageModelOfMapiContactDto } from "./storage-model-of-mapi-contact-dto";
import { StorageModelOfMapiMessageDto } from "./storage-model-of-mapi-message-dto";
import { Url } from "./url";
import { ValueTOfBoolean } from "./value-t-of-boolean";
import { ValueTOfString } from "./value-t-of-string";
import { AiBcrImageStorageFile } from "./ai-bcr-image-storage-file";
import { AiNameComponentList } from "./ai-name-component-list";
import { AiNameExtractedList } from "./ai-name-extracted-list";
import { AiNameGenderHypothesisList } from "./ai-name-gender-hypothesis-list";
import { AiNameMatchParsedRequest } from "./ai-name-match-parsed-request";
import { AlternateView } from "./alternate-view";
import { Attachment } from "./attachment";
import { CalendarSaveRequest } from "./calendar-save-request";
import { CalendarStorageList } from "./calendar-storage-list";
import { ClientAccountSaveMultiRequest } from "./client-account-save-multi-request";
import { ClientAccountSaveRequest } from "./client-account-save-request";
import { ClientFolderCreateRequest } from "./client-folder-create-request";
import { ClientFolderDeleteRequest } from "./client-folder-delete-request";
import { ClientMessageAppendRequest } from "./client-message-append-request";
import { ClientMessageBaseRequest } from "./client-message-base-request";
import { ClientMessageSendRequest } from "./client-message-send-request";
import { ClientThreadBaseRequest } from "./client-thread-base-request";
import { ContactList } from "./contact-list";
import { ContactSaveRequest } from "./contact-save-request";
import { ContactStorageList } from "./contact-storage-list";
import { DailyRecurrencePatternDto } from "./daily-recurrence-pattern-dto";
import { EmailAccountConfigList } from "./email-account-config-list";
import { EmailClientAccountOauthCredentials } from "./email-client-account-oauth-credentials";
import { EmailClientAccountPasswordCredentials } from "./email-client-account-password-credentials";
import { EmailConfigDiscoverOauthRequest } from "./email-config-discover-oauth-request";
import { EmailConfigDiscoverPasswordRequest } from "./email-config-discover-password-request";
import { EmailList } from "./email-list";
import { EmailSaveRequest } from "./email-save-request";
import { EmailStorageList } from "./email-storage-list";
import { EmailThreadList } from "./email-thread-list";
import { FileVersion } from "./file-version";
import { LinkedResource } from "./linked-resource";
import { MailMessageBase64 } from "./mail-message-base64";
import { MailMessageBaseList } from "./mail-message-base-list";
import { MailMessageDto } from "./mail-message-dto";
import { MailMessageMapi } from "./mail-message-mapi";
import { MailServerFolderList } from "./mail-server-folder-list";
import { MapiBinaryPropertyDto } from "./mapi-binary-property-dto";
import { MapiBooleanPropertyDto } from "./mapi-boolean-property-dto";
import { MapiCalendarDailyRecurrencePatternDto } from "./mapi-calendar-daily-recurrence-pattern-dto";
import { MapiCalendarDto } from "./mapi-calendar-dto";
import { MapiCalendarSaveRequest } from "./mapi-calendar-save-request";
import { MapiCalendarWeeklyRecurrencePatternDto } from "./mapi-calendar-weekly-recurrence-pattern-dto";
import { MapiCalendarYearlyAndMonthlyRecurrencePatternDto } from "./mapi-calendar-yearly-and-monthly-recurrence-pattern-dto";
import { MapiContactDto } from "./mapi-contact-dto";
import { MapiContactPhotoDto } from "./mapi-contact-photo-dto";
import { MapiContactSaveRequest } from "./mapi-contact-save-request";
import { MapiDateTimePropertyDto } from "./mapi-date-time-property-dto";
import { MapiFileAsPropertyDto } from "./mapi-file-as-property-dto";
import { MapiImportancePropertyDto } from "./mapi-importance-property-dto";
import { MapiIntPropertyDto } from "./mapi-int-property-dto";
import { MapiKnownPropertyDescriptor } from "./mapi-known-property-descriptor";
import { MapiLegacyFreeBusyPropertyDto } from "./mapi-legacy-free-busy-property-dto";
import { MapiMessageDto } from "./mapi-message-dto";
import { MapiMessageSaveRequest } from "./mapi-message-save-request";
import { MapiMultiIntPropertyDto } from "./mapi-multi-int-property-dto";
import { MapiMultiStringPropertyDto } from "./mapi-multi-string-property-dto";
import { MapiPhysicalAddressIndexPropertyDto } from "./mapi-physical-address-index-property-dto";
import { MapiPidPropertyDescriptor } from "./mapi-pid-property-descriptor";
import { MapiResponseTypePropertyDto } from "./mapi-response-type-property-dto";
import { MapiStringPropertyDto } from "./mapi-string-property-dto";
import { MonthlyRecurrencePatternDto } from "./monthly-recurrence-pattern-dto";
import { StorageFileLocation } from "./storage-file-location";
import { StorageFileLocationList } from "./storage-file-location-list";
import { TaskRegeneratingPatternDto } from "./task-regenerating-pattern-dto";
import { WeeklyRecurrencePatternDto } from "./weekly-recurrence-pattern-dto";
import { YearlyRecurrencePatternDto } from "./yearly-recurrence-pattern-dto";
import { ClientMessageDeleteRequest } from "./client-message-delete-request";
import { ClientMessageMoveRequest } from "./client-message-move-request";
import { ClientMessageSetIsReadRequest } from "./client-message-set-is-read-request";
import { ClientThreadDeleteRequest } from "./client-thread-delete-request";
import { ClientThreadMoveRequest } from "./client-thread-move-request";
import { ClientThreadSetIsReadRequest } from "./client-thread-set-is-read-request";
import { MapiPidLidPropertyDescriptor } from "./mapi-pid-lid-property-descriptor";
import { MapiPidNamePropertyDescriptor } from "./mapi-pid-name-property-descriptor";
import { MapiPidTagPropertyDescriptor } from "./mapi-pid-tag-property-descriptor";
import { typeMap } from "./type-map";
import { AiBcrParseRequest } from "./ai-bcr-parse-request"
import { AiNameCompleteRequest } from "./ai-name-complete-request"
import { AiNameExpandRequest } from "./ai-name-expand-request"
import { AiNameFormatRequest } from "./ai-name-format-request"
import { AiNameGenderizeRequest } from "./ai-name-genderize-request"
import { AiNameMatchRequest } from "./ai-name-match-request"
import { AiNameParseRequest } from "./ai-name-parse-request"
import { AiNameParseEmailAddressRequest } from "./ai-name-parse-email-address-request"
import { CalendarConvertRequest } from "./calendar-convert-request"
import { CalendarFromFileRequest } from "./calendar-from-file-request"
import { CalendarGetRequest } from "./calendar-get-request"
import { CalendarGetAsAlternateRequest } from "./calendar-get-as-alternate-request"
import { CalendarGetAsFileRequest } from "./calendar-get-as-file-request"
import { CalendarGetListRequest } from "./calendar-get-list-request"
import { ClientAccountGetRequest } from "./client-account-get-request"
import { ClientAccountGetMultiRequest } from "./client-account-get-multi-request"
import { ClientFolderGetListRequest } from "./client-folder-get-list-request"
import { ClientMessageAppendFileRequest } from "./client-message-append-file-request"
import { ClientMessageFetchRequest } from "./client-message-fetch-request"
import { ClientMessageFetchFileRequest } from "./client-message-fetch-file-request"
import { ClientMessageListRequest } from "./client-message-list-request"
import { ClientMessageSendFileRequest } from "./client-message-send-file-request"
import { ClientThreadGetListRequest } from "./client-thread-get-list-request"
import { ClientThreadGetMessagesRequest } from "./client-thread-get-messages-request"
import { ContactConvertRequest } from "./contact-convert-request"
import { ContactFromFileRequest } from "./contact-from-file-request"
import { ContactGetRequest } from "./contact-get-request"
import { ContactGetAsFileRequest } from "./contact-get-as-file-request"
import { ContactGetListRequest } from "./contact-get-list-request"
import { DisposableEmailIsDisposableRequest } from "./disposable-email-is-disposable-request"
import { EmailConvertRequest } from "./email-convert-request"
import { EmailFromFileRequest } from "./email-from-file-request"
import { EmailGetRequest } from "./email-get-request"
import { EmailGetAsFileRequest } from "./email-get-as-file-request"
import { EmailGetListRequest } from "./email-get-list-request"
import { EmailConfigDiscoverRequest } from "./email-config-discover-request"
import { CopyFileRequest } from "./copy-file-request"
import { DeleteFileRequest } from "./delete-file-request"
import { DownloadFileRequest } from "./download-file-request"
import { MoveFileRequest } from "./move-file-request"
import { UploadFileRequest } from "./upload-file-request"
import { CopyFolderRequest } from "./copy-folder-request"
import { CreateFolderRequest } from "./create-folder-request"
import { DeleteFolderRequest } from "./delete-folder-request"
import { GetFilesListRequest } from "./get-files-list-request"
import { MoveFolderRequest } from "./move-folder-request"
import { MapiCalendarFromFileRequest } from "./mapi-calendar-from-file-request"
import { MapiCalendarGetRequest } from "./mapi-calendar-get-request"
import { MapiContactFromFileRequest } from "./mapi-contact-from-file-request"
import { MapiContactGetRequest } from "./mapi-contact-get-request"
import { MapiMessageFromFileRequest } from "./mapi-message-from-file-request"
import { MapiMessageGetRequest } from "./mapi-message-get-request"
import { GetDiscUsageRequest } from "./get-disc-usage-request"
import { GetFileVersionsRequest } from "./get-file-versions-request"
import { ObjectExistsRequest } from "./object-exists-request"
import { StorageExistsRequest } from "./storage-exists-request"



export {
    AiBcrImage,
    AiBcrOptions,
    AiBcrParseStorageRequest,
    AiNameComponent,
    AiNameCulturalContext,
    AiNameExtracted,
    AiNameExtractedComponent,
    AiNameFormatted,
    AiNameGenderHypothesis,
    AiNameMatchResult,
    AiNameMismatch,
    AiNameParsedRequest,
    AiNameWeighted,
    AiNameWeightedVariants,
    AssociatedPerson,
    AttachmentBase,
    CalendarAsAlternateRequest,
    CalendarAsFileRequest,
    CalendarDto,
    CalendarReminder,
    ClientAccountBaseRequest,
    ContactAsFileRequest,
    ContactDto,
    ContactPhoto,
    ContentType,
    ContentTypeParameter,
    CustomerEvent,
    DiscUsage,
    DiscoverEmailConfigRequest,
    EmailAccountConfig,
    EmailAddress,
    EmailAsFileRequest,
    EmailClientAccount,
    EmailClientAccountCredentials,
    EmailClientMultiAccount,
    EmailDto,
    EmailThread,
    EnumWithCustomOfAssociatedPersonCategory,
    EnumWithCustomOfEmailAddressCategory,
    EnumWithCustomOfEventCategory,
    EnumWithCustomOfInstantMessengerCategory,
    EnumWithCustomOfPhoneNumberCategory,
    EnumWithCustomOfPostalAddressCategory,
    EnumWithCustomOfUrlCategory,
    ErrorDetails,
    FileVersions,
    FilesList,
    FilesUploadResult,
    InstantMessengerAddress,
    ListResponseOfAiNameComponent,
    ListResponseOfAiNameExtracted,
    ListResponseOfAiNameGenderHypothesis,
    ListResponseOfContactDto,
    ListResponseOfEmailAccountConfig,
    ListResponseOfEmailDto,
    ListResponseOfEmailThread,
    ListResponseOfMailMessageBase,
    ListResponseOfMailServerFolder,
    ListResponseOfStorageFileLocation,
    ListResponseOfStorageModelOfCalendarDto,
    ListResponseOfStorageModelOfContactDto,
    ListResponseOfStorageModelOfEmailDto,
    MailAddress,
    MailMessageBase,
    MailServerFolder,
    MapiAttachmentDto,
    MapiCalendarAsFileRequest,
    MapiCalendarAttendeesDto,
    MapiCalendarEventRecurrenceDto,
    MapiCalendarExceptionInfoDto,
    MapiCalendarRecurrencePatternDto,
    MapiCalendarTimeZoneDto,
    MapiCalendarTimeZoneInfoDto,
    MapiCalendarTimeZoneRuleDto,
    MapiContactAsFileRequest,
    MapiContactElectronicAddressDto,
    MapiContactElectronicAddressPropertySetDto,
    MapiContactEventPropertySetDto,
    MapiContactNamePropertySetDto,
    MapiContactOtherPropertySetDto,
    MapiContactPersonalInfoPropertySetDto,
    MapiContactPhysicalAddressDto,
    MapiContactPhysicalAddressPropertySetDto,
    MapiContactProfessionalPropertySetDto,
    MapiContactTelephonePropertySetDto,
    MapiElectronicAddressDto,
    MapiMessageAsFileRequest,
    MapiMessageItemBaseDto,
    MapiPropertyDescriptor,
    MapiPropertyDto,
    MapiRecipientDto,
    ModelError,
    NameValuePair,
    ObjectExist,
    PhoneNumber,
    PostalAddress,
    RecurrencePatternDto,
    ReminderAttendee,
    ReminderTrigger,
    StorageExist,
    StorageFile,
    StorageFolderLocation,
    StorageModelOfCalendarDto,
    StorageModelOfContactDto,
    StorageModelOfEmailClientAccount,
    StorageModelOfEmailClientMultiAccount,
    StorageModelOfEmailDto,
    StorageModelOfMapiCalendarDto,
    StorageModelOfMapiContactDto,
    StorageModelOfMapiMessageDto,
    Url,
    ValueTOfBoolean,
    ValueTOfString,
    AiBcrImageStorageFile,
    AiNameComponentList,
    AiNameExtractedList,
    AiNameGenderHypothesisList,
    AiNameMatchParsedRequest,
    AlternateView,
    Attachment,
    CalendarSaveRequest,
    CalendarStorageList,
    ClientAccountSaveMultiRequest,
    ClientAccountSaveRequest,
    ClientFolderCreateRequest,
    ClientFolderDeleteRequest,
    ClientMessageAppendRequest,
    ClientMessageBaseRequest,
    ClientMessageSendRequest,
    ClientThreadBaseRequest,
    ContactList,
    ContactSaveRequest,
    ContactStorageList,
    DailyRecurrencePatternDto,
    EmailAccountConfigList,
    EmailClientAccountOauthCredentials,
    EmailClientAccountPasswordCredentials,
    EmailConfigDiscoverOauthRequest,
    EmailConfigDiscoverPasswordRequest,
    EmailList,
    EmailSaveRequest,
    EmailStorageList,
    EmailThreadList,
    FileVersion,
    LinkedResource,
    MailMessageBase64,
    MailMessageBaseList,
    MailMessageDto,
    MailMessageMapi,
    MailServerFolderList,
    MapiBinaryPropertyDto,
    MapiBooleanPropertyDto,
    MapiCalendarDailyRecurrencePatternDto,
    MapiCalendarDto,
    MapiCalendarSaveRequest,
    MapiCalendarWeeklyRecurrencePatternDto,
    MapiCalendarYearlyAndMonthlyRecurrencePatternDto,
    MapiContactDto,
    MapiContactPhotoDto,
    MapiContactSaveRequest,
    MapiDateTimePropertyDto,
    MapiFileAsPropertyDto,
    MapiImportancePropertyDto,
    MapiIntPropertyDto,
    MapiKnownPropertyDescriptor,
    MapiLegacyFreeBusyPropertyDto,
    MapiMessageDto,
    MapiMessageSaveRequest,
    MapiMultiIntPropertyDto,
    MapiMultiStringPropertyDto,
    MapiPhysicalAddressIndexPropertyDto,
    MapiPidPropertyDescriptor,
    MapiResponseTypePropertyDto,
    MapiStringPropertyDto,
    MonthlyRecurrencePatternDto,
    StorageFileLocation,
    StorageFileLocationList,
    TaskRegeneratingPatternDto,
    WeeklyRecurrencePatternDto,
    YearlyRecurrencePatternDto,
    ClientMessageDeleteRequest,
    ClientMessageMoveRequest,
    ClientMessageSetIsReadRequest,
    ClientThreadDeleteRequest,
    ClientThreadMoveRequest,
    ClientThreadSetIsReadRequest,
    MapiPidLidPropertyDescriptor,
    MapiPidNamePropertyDescriptor,
    MapiPidTagPropertyDescriptor,
    AiBcrParseRequest,
    AiNameCompleteRequest,
    AiNameExpandRequest,
    AiNameFormatRequest,
    AiNameGenderizeRequest,
    AiNameMatchRequest,
    AiNameParseRequest,
    AiNameParseEmailAddressRequest,
    CalendarConvertRequest,
    CalendarFromFileRequest,
    CalendarGetRequest,
    CalendarGetAsAlternateRequest,
    CalendarGetAsFileRequest,
    CalendarGetListRequest,
    ClientAccountGetRequest,
    ClientAccountGetMultiRequest,
    ClientFolderGetListRequest,
    ClientMessageAppendFileRequest,
    ClientMessageFetchRequest,
    ClientMessageFetchFileRequest,
    ClientMessageListRequest,
    ClientMessageSendFileRequest,
    ClientThreadGetListRequest,
    ClientThreadGetMessagesRequest,
    ContactConvertRequest,
    ContactFromFileRequest,
    ContactGetRequest,
    ContactGetAsFileRequest,
    ContactGetListRequest,
    DisposableEmailIsDisposableRequest,
    EmailConvertRequest,
    EmailFromFileRequest,
    EmailGetRequest,
    EmailGetAsFileRequest,
    EmailGetListRequest,
    EmailConfigDiscoverRequest,
    CopyFileRequest,
    DeleteFileRequest,
    DownloadFileRequest,
    MoveFileRequest,
    UploadFileRequest,
    CopyFolderRequest,
    CreateFolderRequest,
    DeleteFolderRequest,
    GetFilesListRequest,
    MoveFolderRequest,
    MapiCalendarFromFileRequest,
    MapiCalendarGetRequest,
    MapiContactFromFileRequest,
    MapiContactGetRequest,
    MapiMessageFromFileRequest,
    MapiMessageGetRequest,
    GetDiscUsageRequest,
    GetFileVersionsRequest,
    ObjectExistsRequest,
    StorageExistsRequest,
    typeMap
};

