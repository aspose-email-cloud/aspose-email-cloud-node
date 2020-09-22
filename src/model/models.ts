
import { AiBcrImage, AiBcrImageBuilder } from "./ai-bcr-image";
import { AiBcrOptions, AiBcrOptionsBuilder } from "./ai-bcr-options";
import { AiBcrParseStorageRequest, AiBcrParseStorageRequestBuilder } from "./ai-bcr-parse-storage-request";
import { AiNameComponent, AiNameComponentBuilder } from "./ai-name-component";
import { AiNameCulturalContext, AiNameCulturalContextBuilder } from "./ai-name-cultural-context";
import { AiNameExtracted, AiNameExtractedBuilder } from "./ai-name-extracted";
import { AiNameExtractedComponent, AiNameExtractedComponentBuilder } from "./ai-name-extracted-component";
import { AiNameFormatted, AiNameFormattedBuilder } from "./ai-name-formatted";
import { AiNameGenderHypothesis, AiNameGenderHypothesisBuilder } from "./ai-name-gender-hypothesis";
import { AiNameMatchResult, AiNameMatchResultBuilder } from "./ai-name-match-result";
import { AiNameMismatch, AiNameMismatchBuilder } from "./ai-name-mismatch";
import { AiNameParsedRequest, AiNameParsedRequestBuilder } from "./ai-name-parsed-request";
import { AiNameWeighted, AiNameWeightedBuilder } from "./ai-name-weighted";
import { AiNameWeightedVariants, AiNameWeightedVariantsBuilder } from "./ai-name-weighted-variants";
import { AssociatedPerson, AssociatedPersonBuilder } from "./associated-person";
import { AttachmentBase, AttachmentBaseBuilder } from "./attachment-base";
import { CalendarAsAlternateRequest, CalendarAsAlternateRequestBuilder } from "./calendar-as-alternate-request";
import { CalendarAsFileRequest, CalendarAsFileRequestBuilder } from "./calendar-as-file-request";
import { CalendarDto, CalendarDtoBuilder } from "./calendar-dto";
import { CalendarReminder, CalendarReminderBuilder } from "./calendar-reminder";
import { ClientAccountBaseRequest, ClientAccountBaseRequestBuilder } from "./client-account-base-request";
import { ContactAsFileRequest, ContactAsFileRequestBuilder } from "./contact-as-file-request";
import { ContactDto, ContactDtoBuilder } from "./contact-dto";
import { ContactPhoto, ContactPhotoBuilder } from "./contact-photo";
import { ContentType, ContentTypeBuilder } from "./content-type";
import { ContentTypeParameter, ContentTypeParameterBuilder } from "./content-type-parameter";
import { CustomerEvent, CustomerEventBuilder } from "./customer-event";
import { DiscUsage, DiscUsageBuilder } from "./disc-usage";
import { DiscoverEmailConfigRequest, DiscoverEmailConfigRequestBuilder } from "./discover-email-config-request";
import { EmailAccountConfig, EmailAccountConfigBuilder } from "./email-account-config";
import { EmailAddress, EmailAddressBuilder } from "./email-address";
import { EmailAsFileRequest, EmailAsFileRequestBuilder } from "./email-as-file-request";
import { EmailClientAccount, EmailClientAccountBuilder } from "./email-client-account";
import { EmailClientAccountCredentials, EmailClientAccountCredentialsBuilder } from "./email-client-account-credentials";
import { EmailClientMultiAccount, EmailClientMultiAccountBuilder } from "./email-client-multi-account";
import { EmailDto, EmailDtoBuilder } from "./email-dto";
import { EmailThread, EmailThreadBuilder } from "./email-thread";
import { EnumWithCustomOfAssociatedPersonCategory, EnumWithCustomOfAssociatedPersonCategoryBuilder } from "./enum-with-custom-of-associated-person-category";
import { EnumWithCustomOfEmailAddressCategory, EnumWithCustomOfEmailAddressCategoryBuilder } from "./enum-with-custom-of-email-address-category";
import { EnumWithCustomOfEventCategory, EnumWithCustomOfEventCategoryBuilder } from "./enum-with-custom-of-event-category";
import { EnumWithCustomOfInstantMessengerCategory, EnumWithCustomOfInstantMessengerCategoryBuilder } from "./enum-with-custom-of-instant-messenger-category";
import { EnumWithCustomOfPhoneNumberCategory, EnumWithCustomOfPhoneNumberCategoryBuilder } from "./enum-with-custom-of-phone-number-category";
import { EnumWithCustomOfPostalAddressCategory, EnumWithCustomOfPostalAddressCategoryBuilder } from "./enum-with-custom-of-postal-address-category";
import { EnumWithCustomOfUrlCategory, EnumWithCustomOfUrlCategoryBuilder } from "./enum-with-custom-of-url-category";
import { ErrorDetails, ErrorDetailsBuilder } from "./error-details";
import { FileVersions, FileVersionsBuilder } from "./file-versions";
import { FilesList, FilesListBuilder } from "./files-list";
import { FilesUploadResult, FilesUploadResultBuilder } from "./files-upload-result";
import { InstantMessengerAddress, InstantMessengerAddressBuilder } from "./instant-messenger-address";
import { ListResponseOfAiNameComponent, ListResponseOfAiNameComponentBuilder } from "./list-response-of-ai-name-component";
import { ListResponseOfAiNameExtracted, ListResponseOfAiNameExtractedBuilder } from "./list-response-of-ai-name-extracted";
import { ListResponseOfAiNameGenderHypothesis, ListResponseOfAiNameGenderHypothesisBuilder } from "./list-response-of-ai-name-gender-hypothesis";
import { ListResponseOfContactDto, ListResponseOfContactDtoBuilder } from "./list-response-of-contact-dto";
import { ListResponseOfEmailAccountConfig, ListResponseOfEmailAccountConfigBuilder } from "./list-response-of-email-account-config";
import { ListResponseOfEmailDto, ListResponseOfEmailDtoBuilder } from "./list-response-of-email-dto";
import { ListResponseOfEmailThread, ListResponseOfEmailThreadBuilder } from "./list-response-of-email-thread";
import { ListResponseOfMailMessageBase, ListResponseOfMailMessageBaseBuilder } from "./list-response-of-mail-message-base";
import { ListResponseOfMailServerFolder, ListResponseOfMailServerFolderBuilder } from "./list-response-of-mail-server-folder";
import { ListResponseOfStorageFileLocation, ListResponseOfStorageFileLocationBuilder } from "./list-response-of-storage-file-location";
import { ListResponseOfStorageModelOfCalendarDto, ListResponseOfStorageModelOfCalendarDtoBuilder } from "./list-response-of-storage-model-of-calendar-dto";
import { ListResponseOfStorageModelOfContactDto, ListResponseOfStorageModelOfContactDtoBuilder } from "./list-response-of-storage-model-of-contact-dto";
import { ListResponseOfStorageModelOfEmailDto, ListResponseOfStorageModelOfEmailDtoBuilder } from "./list-response-of-storage-model-of-email-dto";
import { MailAddress, MailAddressBuilder } from "./mail-address";
import { MailMessageBase, MailMessageBaseBuilder } from "./mail-message-base";
import { MailServerFolder, MailServerFolderBuilder } from "./mail-server-folder";
import { MapiAttachmentDto, MapiAttachmentDtoBuilder } from "./mapi-attachment-dto";
import { MapiCalendarAsFileRequest, MapiCalendarAsFileRequestBuilder } from "./mapi-calendar-as-file-request";
import { MapiCalendarAttendeesDto, MapiCalendarAttendeesDtoBuilder } from "./mapi-calendar-attendees-dto";
import { MapiCalendarEventRecurrenceDto, MapiCalendarEventRecurrenceDtoBuilder } from "./mapi-calendar-event-recurrence-dto";
import { MapiCalendarExceptionInfoDto, MapiCalendarExceptionInfoDtoBuilder } from "./mapi-calendar-exception-info-dto";
import { MapiCalendarRecurrencePatternDto, MapiCalendarRecurrencePatternDtoBuilder } from "./mapi-calendar-recurrence-pattern-dto";
import { MapiCalendarTimeZoneDto, MapiCalendarTimeZoneDtoBuilder } from "./mapi-calendar-time-zone-dto";
import { MapiCalendarTimeZoneInfoDto, MapiCalendarTimeZoneInfoDtoBuilder } from "./mapi-calendar-time-zone-info-dto";
import { MapiCalendarTimeZoneRuleDto, MapiCalendarTimeZoneRuleDtoBuilder } from "./mapi-calendar-time-zone-rule-dto";
import { MapiContactAsFileRequest, MapiContactAsFileRequestBuilder } from "./mapi-contact-as-file-request";
import { MapiContactElectronicAddressDto, MapiContactElectronicAddressDtoBuilder } from "./mapi-contact-electronic-address-dto";
import { MapiContactElectronicAddressPropertySetDto, MapiContactElectronicAddressPropertySetDtoBuilder } from "./mapi-contact-electronic-address-property-set-dto";
import { MapiContactEventPropertySetDto, MapiContactEventPropertySetDtoBuilder } from "./mapi-contact-event-property-set-dto";
import { MapiContactNamePropertySetDto, MapiContactNamePropertySetDtoBuilder } from "./mapi-contact-name-property-set-dto";
import { MapiContactOtherPropertySetDto, MapiContactOtherPropertySetDtoBuilder } from "./mapi-contact-other-property-set-dto";
import { MapiContactPersonalInfoPropertySetDto, MapiContactPersonalInfoPropertySetDtoBuilder } from "./mapi-contact-personal-info-property-set-dto";
import { MapiContactPhysicalAddressDto, MapiContactPhysicalAddressDtoBuilder } from "./mapi-contact-physical-address-dto";
import { MapiContactPhysicalAddressPropertySetDto, MapiContactPhysicalAddressPropertySetDtoBuilder } from "./mapi-contact-physical-address-property-set-dto";
import { MapiContactProfessionalPropertySetDto, MapiContactProfessionalPropertySetDtoBuilder } from "./mapi-contact-professional-property-set-dto";
import { MapiContactTelephonePropertySetDto, MapiContactTelephonePropertySetDtoBuilder } from "./mapi-contact-telephone-property-set-dto";
import { MapiElectronicAddressDto, MapiElectronicAddressDtoBuilder } from "./mapi-electronic-address-dto";
import { MapiMessageAsFileRequest, MapiMessageAsFileRequestBuilder } from "./mapi-message-as-file-request";
import { MapiMessageItemBaseDto, MapiMessageItemBaseDtoBuilder } from "./mapi-message-item-base-dto";
import { MapiPropertyDescriptor, MapiPropertyDescriptorBuilder } from "./mapi-property-descriptor";
import { MapiPropertyDto, MapiPropertyDtoBuilder } from "./mapi-property-dto";
import { MapiRecipientDto, MapiRecipientDtoBuilder } from "./mapi-recipient-dto";
import { ModelError, ModelErrorBuilder } from "./model-error";
import { NameValuePair, NameValuePairBuilder } from "./name-value-pair";
import { ObjectExist, ObjectExistBuilder } from "./object-exist";
import { PhoneNumber, PhoneNumberBuilder } from "./phone-number";
import { PostalAddress, PostalAddressBuilder } from "./postal-address";
import { RecurrencePatternDto, RecurrencePatternDtoBuilder } from "./recurrence-pattern-dto";
import { ReminderAttendee, ReminderAttendeeBuilder } from "./reminder-attendee";
import { ReminderTrigger, ReminderTriggerBuilder } from "./reminder-trigger";
import { StorageExist, StorageExistBuilder } from "./storage-exist";
import { StorageFile, StorageFileBuilder } from "./storage-file";
import { StorageFolderLocation, StorageFolderLocationBuilder } from "./storage-folder-location";
import { StorageModelOfCalendarDto, StorageModelOfCalendarDtoBuilder } from "./storage-model-of-calendar-dto";
import { StorageModelOfContactDto, StorageModelOfContactDtoBuilder } from "./storage-model-of-contact-dto";
import { StorageModelOfEmailClientAccount, StorageModelOfEmailClientAccountBuilder } from "./storage-model-of-email-client-account";
import { StorageModelOfEmailClientMultiAccount, StorageModelOfEmailClientMultiAccountBuilder } from "./storage-model-of-email-client-multi-account";
import { StorageModelOfEmailDto, StorageModelOfEmailDtoBuilder } from "./storage-model-of-email-dto";
import { StorageModelOfMapiCalendarDto, StorageModelOfMapiCalendarDtoBuilder } from "./storage-model-of-mapi-calendar-dto";
import { StorageModelOfMapiContactDto, StorageModelOfMapiContactDtoBuilder } from "./storage-model-of-mapi-contact-dto";
import { StorageModelOfMapiMessageDto, StorageModelOfMapiMessageDtoBuilder } from "./storage-model-of-mapi-message-dto";
import { Url, UrlBuilder } from "./url";
import { ValueTOfBoolean, ValueTOfBooleanBuilder } from "./value-t-of-boolean";
import { ValueTOfString, ValueTOfStringBuilder } from "./value-t-of-string";
import { AiBcrImageStorageFile, AiBcrImageStorageFileBuilder } from "./ai-bcr-image-storage-file";
import { AiNameComponentList, AiNameComponentListBuilder } from "./ai-name-component-list";
import { AiNameExtractedList, AiNameExtractedListBuilder } from "./ai-name-extracted-list";
import { AiNameGenderHypothesisList, AiNameGenderHypothesisListBuilder } from "./ai-name-gender-hypothesis-list";
import { AiNameMatchParsedRequest, AiNameMatchParsedRequestBuilder } from "./ai-name-match-parsed-request";
import { AlternateView, AlternateViewBuilder } from "./alternate-view";
import { Attachment, AttachmentBuilder } from "./attachment";
import { CalendarSaveRequest, CalendarSaveRequestBuilder } from "./calendar-save-request";
import { CalendarStorageList, CalendarStorageListBuilder } from "./calendar-storage-list";
import { ClientAccountSaveMultiRequest, ClientAccountSaveMultiRequestBuilder } from "./client-account-save-multi-request";
import { ClientAccountSaveRequest, ClientAccountSaveRequestBuilder } from "./client-account-save-request";
import { ClientFolderCreateRequest, ClientFolderCreateRequestBuilder } from "./client-folder-create-request";
import { ClientFolderDeleteRequest, ClientFolderDeleteRequestBuilder } from "./client-folder-delete-request";
import { ClientMessageAppendRequest, ClientMessageAppendRequestBuilder } from "./client-message-append-request";
import { ClientMessageBaseRequest, ClientMessageBaseRequestBuilder } from "./client-message-base-request";
import { ClientMessageSendRequest, ClientMessageSendRequestBuilder } from "./client-message-send-request";
import { ClientThreadBaseRequest, ClientThreadBaseRequestBuilder } from "./client-thread-base-request";
import { ContactList, ContactListBuilder } from "./contact-list";
import { ContactSaveRequest, ContactSaveRequestBuilder } from "./contact-save-request";
import { ContactStorageList, ContactStorageListBuilder } from "./contact-storage-list";
import { DailyRecurrencePatternDto, DailyRecurrencePatternDtoBuilder } from "./daily-recurrence-pattern-dto";
import { EmailAccountConfigList, EmailAccountConfigListBuilder } from "./email-account-config-list";
import { EmailClientAccountOauthCredentials, EmailClientAccountOauthCredentialsBuilder } from "./email-client-account-oauth-credentials";
import { EmailClientAccountPasswordCredentials, EmailClientAccountPasswordCredentialsBuilder } from "./email-client-account-password-credentials";
import { EmailConfigDiscoverOauthRequest, EmailConfigDiscoverOauthRequestBuilder } from "./email-config-discover-oauth-request";
import { EmailConfigDiscoverPasswordRequest, EmailConfigDiscoverPasswordRequestBuilder } from "./email-config-discover-password-request";
import { EmailList, EmailListBuilder } from "./email-list";
import { EmailSaveRequest, EmailSaveRequestBuilder } from "./email-save-request";
import { EmailStorageList, EmailStorageListBuilder } from "./email-storage-list";
import { EmailThreadList, EmailThreadListBuilder } from "./email-thread-list";
import { FileVersion, FileVersionBuilder } from "./file-version";
import { LinkedResource, LinkedResourceBuilder } from "./linked-resource";
import { MailMessageBase64, MailMessageBase64Builder } from "./mail-message-base64";
import { MailMessageBaseList, MailMessageBaseListBuilder } from "./mail-message-base-list";
import { MailMessageDto, MailMessageDtoBuilder } from "./mail-message-dto";
import { MailMessageMapi, MailMessageMapiBuilder } from "./mail-message-mapi";
import { MailServerFolderList, MailServerFolderListBuilder } from "./mail-server-folder-list";
import { MapiBinaryPropertyDto, MapiBinaryPropertyDtoBuilder } from "./mapi-binary-property-dto";
import { MapiBooleanPropertyDto, MapiBooleanPropertyDtoBuilder } from "./mapi-boolean-property-dto";
import { MapiCalendarDailyRecurrencePatternDto, MapiCalendarDailyRecurrencePatternDtoBuilder } from "./mapi-calendar-daily-recurrence-pattern-dto";
import { MapiCalendarDto, MapiCalendarDtoBuilder } from "./mapi-calendar-dto";
import { MapiCalendarSaveRequest, MapiCalendarSaveRequestBuilder } from "./mapi-calendar-save-request";
import { MapiCalendarWeeklyRecurrencePatternDto, MapiCalendarWeeklyRecurrencePatternDtoBuilder } from "./mapi-calendar-weekly-recurrence-pattern-dto";
import { MapiCalendarYearlyAndMonthlyRecurrencePatternDto, MapiCalendarYearlyAndMonthlyRecurrencePatternDtoBuilder } from "./mapi-calendar-yearly-and-monthly-recurrence-pattern-dto";
import { MapiContactDto, MapiContactDtoBuilder } from "./mapi-contact-dto";
import { MapiContactPhotoDto, MapiContactPhotoDtoBuilder } from "./mapi-contact-photo-dto";
import { MapiContactSaveRequest, MapiContactSaveRequestBuilder } from "./mapi-contact-save-request";
import { MapiDateTimePropertyDto, MapiDateTimePropertyDtoBuilder } from "./mapi-date-time-property-dto";
import { MapiFileAsPropertyDto, MapiFileAsPropertyDtoBuilder } from "./mapi-file-as-property-dto";
import { MapiImportancePropertyDto, MapiImportancePropertyDtoBuilder } from "./mapi-importance-property-dto";
import { MapiIntPropertyDto, MapiIntPropertyDtoBuilder } from "./mapi-int-property-dto";
import { MapiKnownPropertyDescriptor, MapiKnownPropertyDescriptorBuilder } from "./mapi-known-property-descriptor";
import { MapiLegacyFreeBusyPropertyDto, MapiLegacyFreeBusyPropertyDtoBuilder } from "./mapi-legacy-free-busy-property-dto";
import { MapiMessageDto, MapiMessageDtoBuilder } from "./mapi-message-dto";
import { MapiMessageSaveRequest, MapiMessageSaveRequestBuilder } from "./mapi-message-save-request";
import { MapiMultiIntPropertyDto, MapiMultiIntPropertyDtoBuilder } from "./mapi-multi-int-property-dto";
import { MapiMultiStringPropertyDto, MapiMultiStringPropertyDtoBuilder } from "./mapi-multi-string-property-dto";
import { MapiPhysicalAddressIndexPropertyDto, MapiPhysicalAddressIndexPropertyDtoBuilder } from "./mapi-physical-address-index-property-dto";
import { MapiPidPropertyDescriptor, MapiPidPropertyDescriptorBuilder } from "./mapi-pid-property-descriptor";
import { MapiResponseTypePropertyDto, MapiResponseTypePropertyDtoBuilder } from "./mapi-response-type-property-dto";
import { MapiStringPropertyDto, MapiStringPropertyDtoBuilder } from "./mapi-string-property-dto";
import { MonthlyRecurrencePatternDto, MonthlyRecurrencePatternDtoBuilder } from "./monthly-recurrence-pattern-dto";
import { StorageFileLocation, StorageFileLocationBuilder } from "./storage-file-location";
import { StorageFileLocationList, StorageFileLocationListBuilder } from "./storage-file-location-list";
import { TaskRegeneratingPatternDto, TaskRegeneratingPatternDtoBuilder } from "./task-regenerating-pattern-dto";
import { WeeklyRecurrencePatternDto, WeeklyRecurrencePatternDtoBuilder } from "./weekly-recurrence-pattern-dto";
import { YearlyRecurrencePatternDto, YearlyRecurrencePatternDtoBuilder } from "./yearly-recurrence-pattern-dto";
import { ClientMessageDeleteRequest, ClientMessageDeleteRequestBuilder } from "./client-message-delete-request";
import { ClientMessageMoveRequest, ClientMessageMoveRequestBuilder } from "./client-message-move-request";
import { ClientMessageSetIsReadRequest, ClientMessageSetIsReadRequestBuilder } from "./client-message-set-is-read-request";
import { ClientThreadDeleteRequest, ClientThreadDeleteRequestBuilder } from "./client-thread-delete-request";
import { ClientThreadMoveRequest, ClientThreadMoveRequestBuilder } from "./client-thread-move-request";
import { ClientThreadSetIsReadRequest, ClientThreadSetIsReadRequestBuilder } from "./client-thread-set-is-read-request";
import { MapiPidLidPropertyDescriptor, MapiPidLidPropertyDescriptorBuilder } from "./mapi-pid-lid-property-descriptor";
import { MapiPidNamePropertyDescriptor, MapiPidNamePropertyDescriptorBuilder } from "./mapi-pid-name-property-descriptor";
import { MapiPidTagPropertyDescriptor, MapiPidTagPropertyDescriptorBuilder } from "./mapi-pid-tag-property-descriptor";
import { AiBcrParseRequest, AiBcrParseRequestBuilder } from "./ai-bcr-parse-request"
import { AiNameCompleteRequest, AiNameCompleteRequestBuilder } from "./ai-name-complete-request"
import { AiNameExpandRequest, AiNameExpandRequestBuilder } from "./ai-name-expand-request"
import { AiNameFormatRequest, AiNameFormatRequestBuilder } from "./ai-name-format-request"
import { AiNameGenderizeRequest, AiNameGenderizeRequestBuilder } from "./ai-name-genderize-request"
import { AiNameMatchRequest, AiNameMatchRequestBuilder } from "./ai-name-match-request"
import { AiNameParseRequest, AiNameParseRequestBuilder } from "./ai-name-parse-request"
import { AiNameParseEmailAddressRequest, AiNameParseEmailAddressRequestBuilder } from "./ai-name-parse-email-address-request"
import { CalendarConvertRequest, CalendarConvertRequestBuilder } from "./calendar-convert-request"
import { CalendarFromFileRequest, CalendarFromFileRequestBuilder } from "./calendar-from-file-request"
import { CalendarGetRequest, CalendarGetRequestBuilder } from "./calendar-get-request"
import { CalendarGetAsAlternateRequest, CalendarGetAsAlternateRequestBuilder } from "./calendar-get-as-alternate-request"
import { CalendarGetAsFileRequest, CalendarGetAsFileRequestBuilder } from "./calendar-get-as-file-request"
import { CalendarGetListRequest, CalendarGetListRequestBuilder } from "./calendar-get-list-request"
import { ClientAccountGetRequest, ClientAccountGetRequestBuilder } from "./client-account-get-request"
import { ClientAccountGetMultiRequest, ClientAccountGetMultiRequestBuilder } from "./client-account-get-multi-request"
import { ClientFolderGetListRequest, ClientFolderGetListRequestBuilder } from "./client-folder-get-list-request"
import { ClientMessageAppendFileRequest, ClientMessageAppendFileRequestBuilder } from "./client-message-append-file-request"
import { ClientMessageFetchRequest, ClientMessageFetchRequestBuilder } from "./client-message-fetch-request"
import { ClientMessageFetchFileRequest, ClientMessageFetchFileRequestBuilder } from "./client-message-fetch-file-request"
import { ClientMessageListRequest, ClientMessageListRequestBuilder } from "./client-message-list-request"
import { ClientMessageSendFileRequest, ClientMessageSendFileRequestBuilder } from "./client-message-send-file-request"
import { ClientThreadGetListRequest, ClientThreadGetListRequestBuilder } from "./client-thread-get-list-request"
import { ClientThreadGetMessagesRequest, ClientThreadGetMessagesRequestBuilder } from "./client-thread-get-messages-request"
import { ContactConvertRequest, ContactConvertRequestBuilder } from "./contact-convert-request"
import { ContactFromFileRequest, ContactFromFileRequestBuilder } from "./contact-from-file-request"
import { ContactGetRequest, ContactGetRequestBuilder } from "./contact-get-request"
import { ContactGetAsFileRequest, ContactGetAsFileRequestBuilder } from "./contact-get-as-file-request"
import { ContactGetListRequest, ContactGetListRequestBuilder } from "./contact-get-list-request"
import { DisposableEmailIsDisposableRequest, DisposableEmailIsDisposableRequestBuilder } from "./disposable-email-is-disposable-request"
import { EmailConvertRequest, EmailConvertRequestBuilder } from "./email-convert-request"
import { EmailFromFileRequest, EmailFromFileRequestBuilder } from "./email-from-file-request"
import { EmailGetRequest, EmailGetRequestBuilder } from "./email-get-request"
import { EmailGetAsFileRequest, EmailGetAsFileRequestBuilder } from "./email-get-as-file-request"
import { EmailGetListRequest, EmailGetListRequestBuilder } from "./email-get-list-request"
import { EmailConfigDiscoverRequest, EmailConfigDiscoverRequestBuilder } from "./email-config-discover-request"
import { CopyFileRequest, CopyFileRequestBuilder } from "./copy-file-request"
import { DeleteFileRequest, DeleteFileRequestBuilder } from "./delete-file-request"
import { DownloadFileRequest, DownloadFileRequestBuilder } from "./download-file-request"
import { MoveFileRequest, MoveFileRequestBuilder } from "./move-file-request"
import { UploadFileRequest, UploadFileRequestBuilder } from "./upload-file-request"
import { CopyFolderRequest, CopyFolderRequestBuilder } from "./copy-folder-request"
import { CreateFolderRequest, CreateFolderRequestBuilder } from "./create-folder-request"
import { DeleteFolderRequest, DeleteFolderRequestBuilder } from "./delete-folder-request"
import { GetFilesListRequest, GetFilesListRequestBuilder } from "./get-files-list-request"
import { MoveFolderRequest, MoveFolderRequestBuilder } from "./move-folder-request"
import { MapiCalendarFromFileRequest, MapiCalendarFromFileRequestBuilder } from "./mapi-calendar-from-file-request"
import { MapiCalendarGetRequest, MapiCalendarGetRequestBuilder } from "./mapi-calendar-get-request"
import { MapiContactFromFileRequest, MapiContactFromFileRequestBuilder } from "./mapi-contact-from-file-request"
import { MapiContactGetRequest, MapiContactGetRequestBuilder } from "./mapi-contact-get-request"
import { MapiMessageFromFileRequest, MapiMessageFromFileRequestBuilder } from "./mapi-message-from-file-request"
import { MapiMessageGetRequest, MapiMessageGetRequestBuilder } from "./mapi-message-get-request"
import { GetDiscUsageRequest, GetDiscUsageRequestBuilder } from "./get-disc-usage-request"
import { GetFileVersionsRequest, GetFileVersionsRequestBuilder } from "./get-file-versions-request"
import { ObjectExistsRequest, ObjectExistsRequestBuilder } from "./object-exists-request"
import { StorageExistsRequest, StorageExistsRequestBuilder } from "./storage-exists-request"

export class Models {
    /**
    * Image for recognition             
    */
    public static aiBcrImage(): AiBcrImageBuilder {
        return new AiBcrImageBuilder(new AiBcrImage());
    }
    /**
    * Recognition options.             
    */
    public static aiBcrOptions(): AiBcrOptionsBuilder {
        return new AiBcrOptionsBuilder(new AiBcrOptions());
    }
    /**
    * Parse business card images from Storage request             
    */
    public static aiBcrParseStorageRequest(): AiBcrParseStorageRequestBuilder {
        return new AiBcrParseStorageRequestBuilder(new AiBcrParseStorageRequest());
    }
    /**
    * Parsed name component             
    */
    public static aiNameComponent(): AiNameComponentBuilder {
        return new AiNameComponentBuilder(new AiNameComponent());
    }
    /**
    * AiName cultural context             
    */
    public static aiNameCulturalContext(): AiNameCulturalContextBuilder {
        return new AiNameCulturalContextBuilder(new AiNameCulturalContext());
    }
    /**
    * Extracted name             
    */
    public static aiNameExtracted(): AiNameExtractedBuilder {
        return new AiNameExtractedBuilder(new AiNameExtracted());
    }
    /**
    * Extracted name component             
    */
    public static aiNameExtractedComponent(): AiNameExtractedComponentBuilder {
        return new AiNameExtractedComponentBuilder(new AiNameExtractedComponent());
    }
    /**
    * Formatted name             
    */
    public static aiNameFormatted(): AiNameFormattedBuilder {
        return new AiNameFormattedBuilder(new AiNameFormatted());
    }
    /**
    * Name gender hypothesis             
    */
    public static aiNameGenderHypothesis(): AiNameGenderHypothesisBuilder {
        return new AiNameGenderHypothesisBuilder(new AiNameGenderHypothesis());
    }
    /**
    * Two names match result             
    */
    public static aiNameMatchResult(): AiNameMatchResultBuilder {
        return new AiNameMatchResultBuilder(new AiNameMatchResult());
    }
    /**
    * Names mismatch detailed description             
    */
    public static aiNameMismatch(): AiNameMismatchBuilder {
        return new AiNameMismatchBuilder(new AiNameMismatch());
    }
    /**
    * Parsed name request model             
    */
    public static aiNameParsedRequest(): AiNameParsedRequestBuilder {
        return new AiNameParsedRequestBuilder(new AiNameParsedRequest());
    }
    /**
    * Name with score             
    */
    public static aiNameWeighted(): AiNameWeightedBuilder {
        return new AiNameWeightedBuilder(new AiNameWeighted());
    }
    /**
    * Name variants             
    */
    public static aiNameWeightedVariants(): AiNameWeightedVariantsBuilder {
        return new AiNameWeightedVariantsBuilder(new AiNameWeightedVariants());
    }
    /**
    * Describes associated person.             
    */
    public static associatedPerson(): AssociatedPersonBuilder {
        return new AssociatedPersonBuilder(new AssociatedPerson());
    }
    /**
    * AttachmentBase class             
    */
    public static attachmentBase(): AttachmentBaseBuilder {
        return new AttachmentBaseBuilder(new AttachmentBase());
    }
    /**
    * Convert iCalendar to AlternateView request             
    */
    public static calendarAsAlternateRequest(): CalendarAsAlternateRequestBuilder {
        return new CalendarAsAlternateRequestBuilder(new CalendarAsAlternateRequest());
    }
    /**
    * iCalendar model to file request.             
    */
    public static calendarAsFileRequest(): CalendarAsFileRequestBuilder {
        return new CalendarAsFileRequestBuilder(new CalendarAsFileRequest());
    }
    /**
    * iCalendar document representation.             
    */
    public static calendarDto(): CalendarDtoBuilder {
        return new CalendarDtoBuilder(new CalendarDto());
    }
    /**
    * Provides a grouping of component properties that define an alarm.             
    */
    public static calendarReminder(): CalendarReminderBuilder {
        return new CalendarReminderBuilder(new CalendarReminder());
    }
    /**
    * Base request for Email client. Stores information about email account location.             
    */
    public static clientAccountBaseRequest(): ClientAccountBaseRequestBuilder {
        return new ClientAccountBaseRequestBuilder(new ClientAccountBaseRequest());
    }
    /**
    * Convert contact model to file request.             
    */
    public static contactAsFileRequest(): ContactAsFileRequestBuilder {
        return new ContactAsFileRequestBuilder(new ContactAsFileRequest());
    }
    /**
    * VCard document representation.             
    */
    public static contactDto(): ContactDtoBuilder {
        return new ContactDtoBuilder(new ContactDto());
    }
    /**
    * Person's photo.             
    */
    public static contactPhoto(): ContactPhotoBuilder {
        return new ContactPhotoBuilder(new ContactPhoto());
    }
    /**
    * Represents a Content-Type header.             
    */
    public static contentType(): ContentTypeBuilder {
        return new ContentTypeBuilder(new ContentType());
    }
    /**
    * Content-Type header parameter             
    */
    public static contentTypeParameter(): ContentTypeParameterBuilder {
        return new ContentTypeParameterBuilder(new ContentTypeParameter());
    }
    /**
    * Event.             
    */
    public static customerEvent(): CustomerEventBuilder {
        return new CustomerEventBuilder(new CustomerEvent());
    }
    /**
    * Class for disc space information.
    */
    public static discUsage(): DiscUsageBuilder {
        return new DiscUsageBuilder(new DiscUsage());
    }
    /**
    * Discover email configuration request.             
    */
    public static discoverEmailConfigRequest(): DiscoverEmailConfigRequestBuilder {
        return new DiscoverEmailConfigRequestBuilder(new DiscoverEmailConfigRequest());
    }
    /**
    * Email account configuration.             
    */
    public static emailAccountConfig(): EmailAccountConfigBuilder {
        return new EmailAccountConfigBuilder(new EmailAccountConfig());
    }
    /**
    * Email address.             
    */
    public static emailAddress(): EmailAddressBuilder {
        return new EmailAddressBuilder(new EmailAddress());
    }
    /**
    * Convert email model to file request.             
    */
    public static emailAsFileRequest(): EmailAsFileRequestBuilder {
        return new EmailAsFileRequestBuilder(new EmailAsFileRequest());
    }
    /**
    * A universal email client account             
    */
    public static emailClientAccount(): EmailClientAccountBuilder {
        return new EmailClientAccountBuilder(new EmailClientAccount());
    }
    /**
    * Represents email client account credentials             
    */
    public static emailClientAccountCredentials(): EmailClientAccountCredentialsBuilder {
        return new EmailClientAccountCredentialsBuilder(new EmailClientAccountCredentials());
    }
    /**
    * Email client virtual account, which contains several accounts             
    */
    public static emailClientMultiAccount(): EmailClientMultiAccountBuilder {
        return new EmailClientMultiAccountBuilder(new EmailClientMultiAccount());
    }
    /**
    * Email message representation.             
    */
    public static emailDto(): EmailDtoBuilder {
        return new EmailDtoBuilder(new EmailDto());
    }
    /**
    * Email messages thread             
    */
    public static emailThread(): EmailThreadBuilder {
        return new EmailThreadBuilder(new EmailThread());
    }
    public static enumWithCustomOfAssociatedPersonCategory(): EnumWithCustomOfAssociatedPersonCategoryBuilder {
        return new EnumWithCustomOfAssociatedPersonCategoryBuilder(new EnumWithCustomOfAssociatedPersonCategory());
    }
    public static enumWithCustomOfEmailAddressCategory(): EnumWithCustomOfEmailAddressCategoryBuilder {
        return new EnumWithCustomOfEmailAddressCategoryBuilder(new EnumWithCustomOfEmailAddressCategory());
    }
    public static enumWithCustomOfEventCategory(): EnumWithCustomOfEventCategoryBuilder {
        return new EnumWithCustomOfEventCategoryBuilder(new EnumWithCustomOfEventCategory());
    }
    public static enumWithCustomOfInstantMessengerCategory(): EnumWithCustomOfInstantMessengerCategoryBuilder {
        return new EnumWithCustomOfInstantMessengerCategoryBuilder(new EnumWithCustomOfInstantMessengerCategory());
    }
    public static enumWithCustomOfPhoneNumberCategory(): EnumWithCustomOfPhoneNumberCategoryBuilder {
        return new EnumWithCustomOfPhoneNumberCategoryBuilder(new EnumWithCustomOfPhoneNumberCategory());
    }
    public static enumWithCustomOfPostalAddressCategory(): EnumWithCustomOfPostalAddressCategoryBuilder {
        return new EnumWithCustomOfPostalAddressCategoryBuilder(new EnumWithCustomOfPostalAddressCategory());
    }
    public static enumWithCustomOfUrlCategory(): EnumWithCustomOfUrlCategoryBuilder {
        return new EnumWithCustomOfUrlCategoryBuilder(new EnumWithCustomOfUrlCategory());
    }
    /**
    * The error details
    */
    public static errorDetails(): ErrorDetailsBuilder {
        return new ErrorDetailsBuilder(new ErrorDetails());
    }
    /**
    * File versions FileVersion.
    */
    public static fileVersions(): FileVersionsBuilder {
        return new FileVersionsBuilder(new FileVersions());
    }
    /**
    * Files list
    */
    public static filesList(): FilesListBuilder {
        return new FilesListBuilder(new FilesList());
    }
    /**
    * File upload result
    */
    public static filesUploadResult(): FilesUploadResultBuilder {
        return new FilesUploadResultBuilder(new FilesUploadResult());
    }
    /**
    * Instant messenger address.             
    */
    public static instantMessengerAddress(): InstantMessengerAddressBuilder {
        return new InstantMessengerAddressBuilder(new InstantMessengerAddress());
    }
    public static listResponseOfAiNameComponent(): ListResponseOfAiNameComponentBuilder {
        return new ListResponseOfAiNameComponentBuilder(new ListResponseOfAiNameComponent());
    }
    public static listResponseOfAiNameExtracted(): ListResponseOfAiNameExtractedBuilder {
        return new ListResponseOfAiNameExtractedBuilder(new ListResponseOfAiNameExtracted());
    }
    public static listResponseOfAiNameGenderHypothesis(): ListResponseOfAiNameGenderHypothesisBuilder {
        return new ListResponseOfAiNameGenderHypothesisBuilder(new ListResponseOfAiNameGenderHypothesis());
    }
    public static listResponseOfContactDto(): ListResponseOfContactDtoBuilder {
        return new ListResponseOfContactDtoBuilder(new ListResponseOfContactDto());
    }
    public static listResponseOfEmailAccountConfig(): ListResponseOfEmailAccountConfigBuilder {
        return new ListResponseOfEmailAccountConfigBuilder(new ListResponseOfEmailAccountConfig());
    }
    public static listResponseOfEmailDto(): ListResponseOfEmailDtoBuilder {
        return new ListResponseOfEmailDtoBuilder(new ListResponseOfEmailDto());
    }
    public static listResponseOfEmailThread(): ListResponseOfEmailThreadBuilder {
        return new ListResponseOfEmailThreadBuilder(new ListResponseOfEmailThread());
    }
    public static listResponseOfMailMessageBase(): ListResponseOfMailMessageBaseBuilder {
        return new ListResponseOfMailMessageBaseBuilder(new ListResponseOfMailMessageBase());
    }
    public static listResponseOfMailServerFolder(): ListResponseOfMailServerFolderBuilder {
        return new ListResponseOfMailServerFolderBuilder(new ListResponseOfMailServerFolder());
    }
    public static listResponseOfStorageFileLocation(): ListResponseOfStorageFileLocationBuilder {
        return new ListResponseOfStorageFileLocationBuilder(new ListResponseOfStorageFileLocation());
    }
    public static listResponseOfStorageModelOfCalendarDto(): ListResponseOfStorageModelOfCalendarDtoBuilder {
        return new ListResponseOfStorageModelOfCalendarDtoBuilder(new ListResponseOfStorageModelOfCalendarDto());
    }
    public static listResponseOfStorageModelOfContactDto(): ListResponseOfStorageModelOfContactDtoBuilder {
        return new ListResponseOfStorageModelOfContactDtoBuilder(new ListResponseOfStorageModelOfContactDto());
    }
    public static listResponseOfStorageModelOfEmailDto(): ListResponseOfStorageModelOfEmailDtoBuilder {
        return new ListResponseOfStorageModelOfEmailDtoBuilder(new ListResponseOfStorageModelOfEmailDto());
    }
    /**
    * Represents the address of a message.
    */
    public static mailAddress(): MailAddressBuilder {
        return new MailAddressBuilder(new MailAddress());
    }
    /**
    * Universal object that stores email messages in different formats.             
    */
    public static mailMessageBase(): MailMessageBaseBuilder {
        return new MailMessageBaseBuilder(new MailMessageBase());
    }
    /**
    * Email account folder             
    */
    public static mailServerFolder(): MailServerFolderBuilder {
        return new MailServerFolderBuilder(new MailServerFolder());
    }
    /**
    * Mapi attachment             
    */
    public static mapiAttachmentDto(): MapiAttachmentDtoBuilder {
        return new MapiAttachmentDtoBuilder(new MapiAttachmentDto());
    }
    /**
    * Convert MapiCalendar to file request.             
    */
    public static mapiCalendarAsFileRequest(): MapiCalendarAsFileRequestBuilder {
        return new MapiCalendarAsFileRequestBuilder(new MapiCalendarAsFileRequest());
    }
    /**
    * Mapi calendar attendees.             
    */
    public static mapiCalendarAttendeesDto(): MapiCalendarAttendeesDtoBuilder {
        return new MapiCalendarAttendeesDtoBuilder(new MapiCalendarAttendeesDto());
    }
    /**
    * Recurrence properties of calendar object.             
    */
    public static mapiCalendarEventRecurrenceDto(): MapiCalendarEventRecurrenceDtoBuilder {
        return new MapiCalendarEventRecurrenceDtoBuilder(new MapiCalendarEventRecurrenceDto());
    }
    /**
    * An exception specifies changes to an instance of a recurring series.             
    */
    public static mapiCalendarExceptionInfoDto(): MapiCalendarExceptionInfoDtoBuilder {
        return new MapiCalendarExceptionInfoDtoBuilder(new MapiCalendarExceptionInfoDto());
    }
    /**
    * Mapi recurrence pattern.             
    */
    public static mapiCalendarRecurrencePatternDto(): MapiCalendarRecurrencePatternDtoBuilder {
        return new MapiCalendarRecurrencePatternDtoBuilder(new MapiCalendarRecurrencePatternDto());
    }
    /**
    * Represents the mapi calendar time zone information.             
    */
    public static mapiCalendarTimeZoneDto(): MapiCalendarTimeZoneDtoBuilder {
        return new MapiCalendarTimeZoneDtoBuilder(new MapiCalendarTimeZoneDto());
    }
    /**
    * Represents the mapi calendar time zone rule.             
    */
    public static mapiCalendarTimeZoneInfoDto(): MapiCalendarTimeZoneInfoDtoBuilder {
        return new MapiCalendarTimeZoneInfoDtoBuilder(new MapiCalendarTimeZoneInfoDto());
    }
    /**
    * Represents time zone rule that indicate when to begin using the Standard/Daylight time.             
    */
    public static mapiCalendarTimeZoneRuleDto(): MapiCalendarTimeZoneRuleDtoBuilder {
        return new MapiCalendarTimeZoneRuleDtoBuilder(new MapiCalendarTimeZoneRuleDto());
    }
    /**
    * Convert MapiContact to file request.             
    */
    public static mapiContactAsFileRequest(): MapiContactAsFileRequestBuilder {
        return new MapiContactAsFileRequestBuilder(new MapiContactAsFileRequest());
    }
    /**
    * Refers to the group of properties that define the e-mail address or fax address for a contact.             
    */
    public static mapiContactElectronicAddressDto(): MapiContactElectronicAddressDtoBuilder {
        return new MapiContactElectronicAddressDtoBuilder(new MapiContactElectronicAddressDto());
    }
    /**
    * Specify properties for up to three different e-mail addresses (Email1, Email2, and Email3) and three different fax addresses (Primary Fax, Business Fax, and Home Fax)             
    */
    public static mapiContactElectronicAddressPropertySetDto(): MapiContactElectronicAddressPropertySetDtoBuilder {
        return new MapiContactElectronicAddressPropertySetDtoBuilder(new MapiContactElectronicAddressPropertySetDto());
    }
    /**
    * Specify events associated with a contact.             
    */
    public static mapiContactEventPropertySetDto(): MapiContactEventPropertySetDtoBuilder {
        return new MapiContactEventPropertySetDtoBuilder(new MapiContactEventPropertySetDto());
    }
    /**
    * The properties are used to specify the name of the person represented by the contact             
    */
    public static mapiContactNamePropertySetDto(): MapiContactNamePropertySetDtoBuilder {
        return new MapiContactNamePropertySetDtoBuilder(new MapiContactNamePropertySetDto());
    }
    /**
    * The properties are used to specify additional properties of contact.             
    */
    public static mapiContactOtherPropertySetDto(): MapiContactOtherPropertySetDtoBuilder {
        return new MapiContactOtherPropertySetDtoBuilder(new MapiContactOtherPropertySetDto());
    }
    /**
    * Specify other additional contact information.             
    */
    public static mapiContactPersonalInfoPropertySetDto(): MapiContactPersonalInfoPropertySetDtoBuilder {
        return new MapiContactPersonalInfoPropertySetDtoBuilder(new MapiContactPersonalInfoPropertySetDto());
    }
    /**
    * Refers to the group of properties that define physical address for a contact.             
    */
    public static mapiContactPhysicalAddressDto(): MapiContactPhysicalAddressDtoBuilder {
        return new MapiContactPhysicalAddressDtoBuilder(new MapiContactPhysicalAddressDto());
    }
    /**
    * Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address             
    */
    public static mapiContactPhysicalAddressPropertySetDto(): MapiContactPhysicalAddressPropertySetDtoBuilder {
        return new MapiContactPhysicalAddressPropertySetDtoBuilder(new MapiContactPhysicalAddressPropertySetDto());
    }
    /**
    * Properties are used to store professional details for the person represented by the contact             
    */
    public static mapiContactProfessionalPropertySetDto(): MapiContactProfessionalPropertySetDtoBuilder {
        return new MapiContactProfessionalPropertySetDtoBuilder(new MapiContactProfessionalPropertySetDto());
    }
    /**
    * Specify optional telephone numbers for the contact.             
    */
    public static mapiContactTelephonePropertySetDto(): MapiContactTelephonePropertySetDtoBuilder {
        return new MapiContactTelephonePropertySetDtoBuilder(new MapiContactTelephonePropertySetDto());
    }
    /**
    * Refers to the group of properties that define the e-mail address or fax address.             
    */
    public static mapiElectronicAddressDto(): MapiElectronicAddressDtoBuilder {
        return new MapiElectronicAddressDtoBuilder(new MapiElectronicAddressDto());
    }
    /**
    * Convert MapiMessage to file request.             
    */
    public static mapiMessageAsFileRequest(): MapiMessageAsFileRequestBuilder {
        return new MapiMessageAsFileRequestBuilder(new MapiMessageAsFileRequest());
    }
    /**
    * Base Dto for MapiMessage, MapiCalendar or MapiContact             
    */
    public static mapiMessageItemBaseDto(): MapiMessageItemBaseDtoBuilder {
        return new MapiMessageItemBaseDtoBuilder(new MapiMessageItemBaseDto());
    }
    /**
    * Mapi property descriptor             
    */
    public static mapiPropertyDescriptor(): MapiPropertyDescriptorBuilder {
        return new MapiPropertyDescriptorBuilder(new MapiPropertyDescriptor());
    }
    /**
    * Mapi property             
    */
    public static mapiPropertyDto(): MapiPropertyDtoBuilder {
        return new MapiPropertyDtoBuilder(new MapiPropertyDto());
    }
    /**
    * Represents the recipient information in the Microsoft Outlook Message.             
    */
    public static mapiRecipientDto(): MapiRecipientDtoBuilder {
        return new MapiRecipientDtoBuilder(new MapiRecipientDto());
    }
    /**
    * Error
    */
    public static modelError(): ModelErrorBuilder {
        return new ModelErrorBuilder(new ModelError());
    }
    /**
    * Name-Value property             
    */
    public static nameValuePair(): NameValuePairBuilder {
        return new NameValuePairBuilder(new NameValuePair());
    }
    /**
    * Object exists
    */
    public static objectExist(): ObjectExistBuilder {
        return new ObjectExistBuilder(new ObjectExist());
    }
    /**
    * A phone number.             
    */
    public static phoneNumber(): PhoneNumberBuilder {
        return new PhoneNumberBuilder(new PhoneNumber());
    }
    /**
    * A postal address             
    */
    public static postalAddress(): PostalAddressBuilder {
        return new PostalAddressBuilder(new PostalAddress());
    }
    /**
    * iCalendar recurrence pattern.             
    */
    public static recurrencePatternDto(): RecurrencePatternDtoBuilder {
        return new RecurrencePatternDtoBuilder(new RecurrencePatternDto());
    }
    /**
    * Defines an \"Attendee\" within a alarm.
    */
    public static reminderAttendee(): ReminderAttendeeBuilder {
        return new ReminderAttendeeBuilder(new ReminderAttendee());
    }
    /**
    * Specifies when an alarm will trigger.
    */
    public static reminderTrigger(): ReminderTriggerBuilder {
        return new ReminderTriggerBuilder(new ReminderTrigger());
    }
    /**
    * Storage exists
    */
    public static storageExist(): StorageExistBuilder {
        return new StorageExistBuilder(new StorageExist());
    }
    /**
    * File or folder information
    */
    public static storageFile(): StorageFileBuilder {
        return new StorageFileBuilder(new StorageFile());
    }
    /**
    * A storage folder location information             
    */
    public static storageFolderLocation(): StorageFolderLocationBuilder {
        return new StorageFolderLocationBuilder(new StorageFolderLocation());
    }
    public static storageModelOfCalendarDto(): StorageModelOfCalendarDtoBuilder {
        return new StorageModelOfCalendarDtoBuilder(new StorageModelOfCalendarDto());
    }
    public static storageModelOfContactDto(): StorageModelOfContactDtoBuilder {
        return new StorageModelOfContactDtoBuilder(new StorageModelOfContactDto());
    }
    public static storageModelOfEmailClientAccount(): StorageModelOfEmailClientAccountBuilder {
        return new StorageModelOfEmailClientAccountBuilder(new StorageModelOfEmailClientAccount());
    }
    public static storageModelOfEmailClientMultiAccount(): StorageModelOfEmailClientMultiAccountBuilder {
        return new StorageModelOfEmailClientMultiAccountBuilder(new StorageModelOfEmailClientMultiAccount());
    }
    public static storageModelOfEmailDto(): StorageModelOfEmailDtoBuilder {
        return new StorageModelOfEmailDtoBuilder(new StorageModelOfEmailDto());
    }
    public static storageModelOfMapiCalendarDto(): StorageModelOfMapiCalendarDtoBuilder {
        return new StorageModelOfMapiCalendarDtoBuilder(new StorageModelOfMapiCalendarDto());
    }
    public static storageModelOfMapiContactDto(): StorageModelOfMapiContactDtoBuilder {
        return new StorageModelOfMapiContactDtoBuilder(new StorageModelOfMapiContactDto());
    }
    public static storageModelOfMapiMessageDto(): StorageModelOfMapiMessageDtoBuilder {
        return new StorageModelOfMapiMessageDtoBuilder(new StorageModelOfMapiMessageDto());
    }
    /**
    * Url and its category.             
    */
    public static url(): UrlBuilder {
        return new UrlBuilder(new Url());
    }
    public static valueTOfBoolean(): ValueTOfBooleanBuilder {
        return new ValueTOfBooleanBuilder(new ValueTOfBoolean());
    }
    public static valueTOfString(): ValueTOfStringBuilder {
        return new ValueTOfStringBuilder(new ValueTOfString());
    }
    /**
    * Image from storage for recognition             
    */
    public static aiBcrImageStorageFile(): AiBcrImageStorageFileBuilder {
        return new AiBcrImageStorageFileBuilder(new AiBcrImageStorageFile());
    }
    /**
    * List of name components             
    */
    public static aiNameComponentList(): AiNameComponentListBuilder {
        return new AiNameComponentListBuilder(new AiNameComponentList());
    }
    /**
    * Extracted name list.             
    */
    public static aiNameExtractedList(): AiNameExtractedListBuilder {
        return new AiNameExtractedListBuilder(new AiNameExtractedList());
    }
    /**
    * Hypotheses about person's gender             
    */
    public static aiNameGenderHypothesisList(): AiNameGenderHypothesisListBuilder {
        return new AiNameGenderHypothesisListBuilder(new AiNameGenderHypothesisList());
    }
    /**
    * Two parsed names to match request             
    */
    public static aiNameMatchParsedRequest(): AiNameMatchParsedRequestBuilder {
        return new AiNameMatchParsedRequestBuilder(new AiNameMatchParsedRequest());
    }
    /**
    * Represents the format to view a message.             
    */
    public static alternateView(): AlternateViewBuilder {
        return new AlternateViewBuilder(new AlternateView());
    }
    /**
    * Document attachment.             
    */
    public static attachment(): AttachmentBuilder {
        return new AttachmentBuilder(new Attachment());
    }
    /**
    * Save iCalendar to storage request.             
    */
    public static calendarSaveRequest(): CalendarSaveRequestBuilder {
        return new CalendarSaveRequestBuilder(new CalendarSaveRequest());
    }
    /**
    * iCalendar models list with corresponding storage locations.             
    */
    public static calendarStorageList(): CalendarStorageListBuilder {
        return new CalendarStorageListBuilder(new CalendarStorageList());
    }
    /**
    * Email client multi account save request.             
    */
    public static clientAccountSaveMultiRequest(): ClientAccountSaveMultiRequestBuilder {
        return new ClientAccountSaveMultiRequestBuilder(new ClientAccountSaveMultiRequest());
    }
    /**
    * Email client account save request             
    */
    public static clientAccountSaveRequest(): ClientAccountSaveRequestBuilder {
        return new ClientAccountSaveRequestBuilder(new ClientAccountSaveRequest());
    }
    /**
    * Email Client create folder request.             
    */
    public static clientFolderCreateRequest(): ClientFolderCreateRequestBuilder {
        return new ClientFolderCreateRequestBuilder(new ClientFolderCreateRequest());
    }
    /**
    * Email client delete folder request.             
    */
    public static clientFolderDeleteRequest(): ClientFolderDeleteRequestBuilder {
        return new ClientFolderDeleteRequestBuilder(new ClientFolderDeleteRequest());
    }
    /**
    * Email client append message request.             
    */
    public static clientMessageAppendRequest(): ClientMessageAppendRequestBuilder {
        return new ClientMessageAppendRequestBuilder(new ClientMessageAppendRequest());
    }
    /**
    * Email client message request.             
    */
    public static clientMessageBaseRequest(): ClientMessageBaseRequestBuilder {
        return new ClientMessageBaseRequestBuilder(new ClientMessageBaseRequest());
    }
    /**
    * Email client send message request.             
    */
    public static clientMessageSendRequest(): ClientMessageSendRequestBuilder {
        return new ClientMessageSendRequestBuilder(new ClientMessageSendRequest());
    }
    /**
    * Email client thread request.             
    */
    public static clientThreadBaseRequest(): ClientThreadBaseRequestBuilder {
        return new ClientThreadBaseRequestBuilder(new ClientThreadBaseRequest());
    }
    /**
    * List of VCard documents             
    */
    public static contactList(): ContactListBuilder {
        return new ContactListBuilder(new ContactList());
    }
    /**
    * Contact save to storage request             
    */
    public static contactSaveRequest(): ContactSaveRequestBuilder {
        return new ContactSaveRequestBuilder(new ContactSaveRequest());
    }
    /**
    * Contact models list with corresponding storage locations.             
    */
    public static contactStorageList(): ContactStorageListBuilder {
        return new ContactStorageListBuilder(new ContactStorageList());
    }
    /**
    * Daily recurrence.             
    */
    public static dailyRecurrencePatternDto(): DailyRecurrencePatternDtoBuilder {
        return new DailyRecurrencePatternDtoBuilder(new DailyRecurrencePatternDto());
    }
    /**
    * List of email accounts             
    */
    public static emailAccountConfigList(): EmailAccountConfigListBuilder {
        return new EmailAccountConfigListBuilder(new EmailAccountConfigList());
    }
    /**
    * Represents email client account OAuth 2.0 credentials             
    */
    public static emailClientAccountOauthCredentials(): EmailClientAccountOauthCredentialsBuilder {
        return new EmailClientAccountOauthCredentialsBuilder(new EmailClientAccountOauthCredentials());
    }
    /**
    * Represents email client account password credentials             
    */
    public static emailClientAccountPasswordCredentials(): EmailClientAccountPasswordCredentialsBuilder {
        return new EmailClientAccountPasswordCredentialsBuilder(new EmailClientAccountPasswordCredentials());
    }
    public static emailConfigDiscoverOauthRequest(): EmailConfigDiscoverOauthRequestBuilder {
        return new EmailConfigDiscoverOauthRequestBuilder(new EmailConfigDiscoverOauthRequest());
    }
    public static emailConfigDiscoverPasswordRequest(): EmailConfigDiscoverPasswordRequestBuilder {
        return new EmailConfigDiscoverPasswordRequestBuilder(new EmailConfigDiscoverPasswordRequest());
    }
    /**
    * Email document list.             
    */
    public static emailList(): EmailListBuilder {
        return new EmailListBuilder(new EmailList());
    }
    /**
    * Email save to storage request             
    */
    public static emailSaveRequest(): EmailSaveRequestBuilder {
        return new EmailSaveRequestBuilder(new EmailSaveRequest());
    }
    /**
    * Email models list with corresponding storage locations.             
    */
    public static emailStorageList(): EmailStorageListBuilder {
        return new EmailStorageListBuilder(new EmailStorageList());
    }
    /**
    * List of email threads             
    */
    public static emailThreadList(): EmailThreadListBuilder {
        return new EmailThreadListBuilder(new EmailThreadList());
    }
    /**
    * File Version
    */
    public static fileVersion(): FileVersionBuilder {
        return new FileVersionBuilder(new FileVersion());
    }
    /**
    * Represents an embedded resource in a message.             
    */
    public static linkedResource(): LinkedResourceBuilder {
        return new LinkedResourceBuilder(new LinkedResource());
    }
    /**
    * Email message represented as file, encoded to Base64 format.             
    */
    public static mailMessageBase64(): MailMessageBase64Builder {
        return new MailMessageBase64Builder(new MailMessageBase64());
    }
    /**
    * List of messages.             
    */
    public static mailMessageBaseList(): MailMessageBaseListBuilder {
        return new MailMessageBaseListBuilder(new MailMessageBaseList());
    }
    /**
    * Represents email message, stored as an EmailDto object.             
    */
    public static mailMessageDto(): MailMessageDtoBuilder {
        return new MailMessageDtoBuilder(new MailMessageDto());
    }
    /**
    * Email message represented as MAPI object.             
    */
    public static mailMessageMapi(): MailMessageMapiBuilder {
        return new MailMessageMapiBuilder(new MailMessageMapi());
    }
    /**
    * List of email client folders.             
    */
    public static mailServerFolderList(): MailServerFolderListBuilder {
        return new MailServerFolderListBuilder(new MailServerFolderList());
    }
    /**
    * Mapi property with Binary value represented as a Base64 string             
    */
    public static mapiBinaryPropertyDto(): MapiBinaryPropertyDtoBuilder {
        return new MapiBinaryPropertyDtoBuilder(new MapiBinaryPropertyDto());
    }
    /**
    * Mapi property with Boolean value             
    */
    public static mapiBooleanPropertyDto(): MapiBooleanPropertyDtoBuilder {
        return new MapiBooleanPropertyDtoBuilder(new MapiBooleanPropertyDto());
    }
    /**
    * Represents the daily recurrence pattern of the mapi calendar.             
    */
    public static mapiCalendarDailyRecurrencePatternDto(): MapiCalendarDailyRecurrencePatternDtoBuilder {
        return new MapiCalendarDailyRecurrencePatternDtoBuilder(new MapiCalendarDailyRecurrencePatternDto());
    }
    /**
    * Represents the mapi calendar object             
    */
    public static mapiCalendarDto(): MapiCalendarDtoBuilder {
        return new MapiCalendarDtoBuilder(new MapiCalendarDto());
    }
    /**
    * Save MapiCalendar to storage request.             
    */
    public static mapiCalendarSaveRequest(): MapiCalendarSaveRequestBuilder {
        return new MapiCalendarSaveRequestBuilder(new MapiCalendarSaveRequest());
    }
    /**
    * Represents the weekly recurrence pattern of the mapi calendar             
    */
    public static mapiCalendarWeeklyRecurrencePatternDto(): MapiCalendarWeeklyRecurrencePatternDtoBuilder {
        return new MapiCalendarWeeklyRecurrencePatternDtoBuilder(new MapiCalendarWeeklyRecurrencePatternDto());
    }
    /**
    * Represents the yearly and monthly recurrence pattern of the mapi calendar             
    */
    public static mapiCalendarYearlyAndMonthlyRecurrencePatternDto(): MapiCalendarYearlyAndMonthlyRecurrencePatternDtoBuilder {
        return new MapiCalendarYearlyAndMonthlyRecurrencePatternDtoBuilder(new MapiCalendarYearlyAndMonthlyRecurrencePatternDto());
    }
    /**
    * Represents outlook contact information.             
    */
    public static mapiContactDto(): MapiContactDtoBuilder {
        return new MapiContactDtoBuilder(new MapiContactDto());
    }
    /**
    * Contains data and type of contact's photo.             
    */
    public static mapiContactPhotoDto(): MapiContactPhotoDtoBuilder {
        return new MapiContactPhotoDtoBuilder(new MapiContactPhotoDto());
    }
    /**
    * MapiContact save to storage request.             
    */
    public static mapiContactSaveRequest(): MapiContactSaveRequestBuilder {
        return new MapiContactSaveRequestBuilder(new MapiContactSaveRequest());
    }
    /**
    * Mapi property with DateTime value             
    */
    public static mapiDateTimePropertyDto(): MapiDateTimePropertyDtoBuilder {
        return new MapiDateTimePropertyDtoBuilder(new MapiDateTimePropertyDto());
    }
    /**
    * Mapi property with FileAsMapping value             
    */
    public static mapiFileAsPropertyDto(): MapiFileAsPropertyDtoBuilder {
        return new MapiFileAsPropertyDtoBuilder(new MapiFileAsPropertyDto());
    }
    /**
    * Mapi property with ImportanceChoicesType value             
    */
    public static mapiImportancePropertyDto(): MapiImportancePropertyDtoBuilder {
        return new MapiImportancePropertyDtoBuilder(new MapiImportancePropertyDto());
    }
    /**
    * Mapi property with Integer value             
    */
    public static mapiIntPropertyDto(): MapiIntPropertyDtoBuilder {
        return new MapiIntPropertyDtoBuilder(new MapiIntPropertyDto());
    }
    /**
    * Known Mapi Property descriptor             
    */
    public static mapiKnownPropertyDescriptor(): MapiKnownPropertyDescriptorBuilder {
        return new MapiKnownPropertyDescriptorBuilder(new MapiKnownPropertyDescriptor());
    }
    /**
    * Mapi property with LegacyFreeBusyType value             
    */
    public static mapiLegacyFreeBusyPropertyDto(): MapiLegacyFreeBusyPropertyDtoBuilder {
        return new MapiLegacyFreeBusyPropertyDtoBuilder(new MapiLegacyFreeBusyPropertyDto());
    }
    /**
    * Represents an Outlook Message format document.             
    */
    public static mapiMessageDto(): MapiMessageDtoBuilder {
        return new MapiMessageDtoBuilder(new MapiMessageDto());
    }
    /**
    * MapiMessage save to storage request.             
    */
    public static mapiMessageSaveRequest(): MapiMessageSaveRequestBuilder {
        return new MapiMessageSaveRequestBuilder(new MapiMessageSaveRequest());
    }
    /**
    * Mapi property with Multiple Integer values             
    */
    public static mapiMultiIntPropertyDto(): MapiMultiIntPropertyDtoBuilder {
        return new MapiMultiIntPropertyDtoBuilder(new MapiMultiIntPropertyDto());
    }
    /**
    * Mapi property with Multiple String values             
    */
    public static mapiMultiStringPropertyDto(): MapiMultiStringPropertyDtoBuilder {
        return new MapiMultiStringPropertyDtoBuilder(new MapiMultiStringPropertyDto());
    }
    /**
    * Mapi property with PhysicalAddressIndexType value             
    */
    public static mapiPhysicalAddressIndexPropertyDto(): MapiPhysicalAddressIndexPropertyDtoBuilder {
        return new MapiPhysicalAddressIndexPropertyDtoBuilder(new MapiPhysicalAddressIndexPropertyDto());
    }
    /**
    * Mapi pid property descriptor base class             
    */
    public static mapiPidPropertyDescriptor(): MapiPidPropertyDescriptorBuilder {
        return new MapiPidPropertyDescriptorBuilder(new MapiPidPropertyDescriptor());
    }
    /**
    * Mapi property with response type value             
    */
    public static mapiResponseTypePropertyDto(): MapiResponseTypePropertyDtoBuilder {
        return new MapiResponseTypePropertyDtoBuilder(new MapiResponseTypePropertyDto());
    }
    /**
    * Mapi property with string value             
    */
    public static mapiStringPropertyDto(): MapiStringPropertyDtoBuilder {
        return new MapiStringPropertyDtoBuilder(new MapiStringPropertyDto());
    }
    /**
    * Monthly recurrence pattern.             
    */
    public static monthlyRecurrencePatternDto(): MonthlyRecurrencePatternDtoBuilder {
        return new MonthlyRecurrencePatternDtoBuilder(new MonthlyRecurrencePatternDto());
    }
    /**
    * A storage file location information             
    */
    public static storageFileLocation(): StorageFileLocationBuilder {
        return new StorageFileLocationBuilder(new StorageFileLocation());
    }
    /**
    * List of files located on storage.             
    */
    public static storageFileLocationList(): StorageFileLocationListBuilder {
        return new StorageFileLocationListBuilder(new StorageFileLocationList());
    }
    /**
    * Represents the regenerating recurrence pattern that specifies how many days, weeks, months or years after the completion of the current task the next occurrence will be due.             
    */
    public static taskRegeneratingPatternDto(): TaskRegeneratingPatternDtoBuilder {
        return new TaskRegeneratingPatternDtoBuilder(new TaskRegeneratingPatternDto());
    }
    /**
    * Weekly recurrence pattern.             
    */
    public static weeklyRecurrencePatternDto(): WeeklyRecurrencePatternDtoBuilder {
        return new WeeklyRecurrencePatternDtoBuilder(new WeeklyRecurrencePatternDto());
    }
    /**
    * Yearly recurrence pattern.             
    */
    public static yearlyRecurrencePatternDto(): YearlyRecurrencePatternDtoBuilder {
        return new YearlyRecurrencePatternDtoBuilder(new YearlyRecurrencePatternDto());
    }
    /**
    * Email client delete message request.             
    */
    public static clientMessageDeleteRequest(): ClientMessageDeleteRequestBuilder {
        return new ClientMessageDeleteRequestBuilder(new ClientMessageDeleteRequest());
    }
    /**
    * Email client move message request.             
    */
    public static clientMessageMoveRequest(): ClientMessageMoveRequestBuilder {
        return new ClientMessageMoveRequestBuilder(new ClientMessageMoveRequest());
    }
    /**
    * Email client mark message is read/unread request.             
    */
    public static clientMessageSetIsReadRequest(): ClientMessageSetIsReadRequestBuilder {
        return new ClientMessageSetIsReadRequestBuilder(new ClientMessageSetIsReadRequest());
    }
    /**
    * Delete email client thread request.             
    */
    public static clientThreadDeleteRequest(): ClientThreadDeleteRequestBuilder {
        return new ClientThreadDeleteRequestBuilder(new ClientThreadDeleteRequest());
    }
    /**
    * Email client move thread request.             
    */
    public static clientThreadMoveRequest(): ClientThreadMoveRequestBuilder {
        return new ClientThreadMoveRequestBuilder(new ClientThreadMoveRequest());
    }
    /**
    * Mark thread messages as read or unread request.             
    */
    public static clientThreadSetIsReadRequest(): ClientThreadSetIsReadRequestBuilder {
        return new ClientThreadSetIsReadRequestBuilder(new ClientThreadSetIsReadRequest());
    }
    /**
    * Property identified by an unsigned 32-bit quantity along with a property set             
    */
    public static mapiPidLidPropertyDescriptor(): MapiPidLidPropertyDescriptorBuilder {
        return new MapiPidLidPropertyDescriptorBuilder(new MapiPidLidPropertyDescriptor());
    }
    /**
    * Property identified by a string name along with a property set             
    */
    public static mapiPidNamePropertyDescriptor(): MapiPidNamePropertyDescriptorBuilder {
        return new MapiPidNamePropertyDescriptorBuilder(new MapiPidNamePropertyDescriptor());
    }
    /**
    * A property that is defined by a 16-bit property ID and a 16-bit property type. The property ID for a tagged property is in the range 0x001 - 0x7FFF. Property IDs in the range 0x8000 - 0x8FFF are reserved for assignment to named properties             
    */
    public static mapiPidTagPropertyDescriptor(): MapiPidTagPropertyDescriptorBuilder {
        return new MapiPidTagPropertyDescriptorBuilder(new MapiPidTagPropertyDescriptor());
    }
    public static aiBcrParseRequest(): AiBcrParseRequestBuilder {
        return new AiBcrParseRequestBuilder(new AiBcrParseRequest());
    }
    public static aiNameCompleteRequest(): AiNameCompleteRequestBuilder {
        return new AiNameCompleteRequestBuilder(new AiNameCompleteRequest());
    }
    public static aiNameExpandRequest(): AiNameExpandRequestBuilder {
        return new AiNameExpandRequestBuilder(new AiNameExpandRequest());
    }
    public static aiNameFormatRequest(): AiNameFormatRequestBuilder {
        return new AiNameFormatRequestBuilder(new AiNameFormatRequest());
    }
    public static aiNameGenderizeRequest(): AiNameGenderizeRequestBuilder {
        return new AiNameGenderizeRequestBuilder(new AiNameGenderizeRequest());
    }
    public static aiNameMatchRequest(): AiNameMatchRequestBuilder {
        return new AiNameMatchRequestBuilder(new AiNameMatchRequest());
    }
    public static aiNameParseRequest(): AiNameParseRequestBuilder {
        return new AiNameParseRequestBuilder(new AiNameParseRequest());
    }
    public static aiNameParseEmailAddressRequest(): AiNameParseEmailAddressRequestBuilder {
        return new AiNameParseEmailAddressRequestBuilder(new AiNameParseEmailAddressRequest());
    }
    public static calendarConvertRequest(): CalendarConvertRequestBuilder {
        return new CalendarConvertRequestBuilder(new CalendarConvertRequest());
    }
    public static calendarFromFileRequest(): CalendarFromFileRequestBuilder {
        return new CalendarFromFileRequestBuilder(new CalendarFromFileRequest());
    }
    public static calendarGetRequest(): CalendarGetRequestBuilder {
        return new CalendarGetRequestBuilder(new CalendarGetRequest());
    }
    public static calendarGetAsAlternateRequest(): CalendarGetAsAlternateRequestBuilder {
        return new CalendarGetAsAlternateRequestBuilder(new CalendarGetAsAlternateRequest());
    }
    public static calendarGetAsFileRequest(): CalendarGetAsFileRequestBuilder {
        return new CalendarGetAsFileRequestBuilder(new CalendarGetAsFileRequest());
    }
    public static calendarGetListRequest(): CalendarGetListRequestBuilder {
        return new CalendarGetListRequestBuilder(new CalendarGetListRequest());
    }
    public static clientAccountGetRequest(): ClientAccountGetRequestBuilder {
        return new ClientAccountGetRequestBuilder(new ClientAccountGetRequest());
    }
    public static clientAccountGetMultiRequest(): ClientAccountGetMultiRequestBuilder {
        return new ClientAccountGetMultiRequestBuilder(new ClientAccountGetMultiRequest());
    }
    public static clientFolderGetListRequest(): ClientFolderGetListRequestBuilder {
        return new ClientFolderGetListRequestBuilder(new ClientFolderGetListRequest());
    }
    public static clientMessageAppendFileRequest(): ClientMessageAppendFileRequestBuilder {
        return new ClientMessageAppendFileRequestBuilder(new ClientMessageAppendFileRequest());
    }
    public static clientMessageFetchRequest(): ClientMessageFetchRequestBuilder {
        return new ClientMessageFetchRequestBuilder(new ClientMessageFetchRequest());
    }
    public static clientMessageFetchFileRequest(): ClientMessageFetchFileRequestBuilder {
        return new ClientMessageFetchFileRequestBuilder(new ClientMessageFetchFileRequest());
    }
    public static clientMessageListRequest(): ClientMessageListRequestBuilder {
        return new ClientMessageListRequestBuilder(new ClientMessageListRequest());
    }
    public static clientMessageSendFileRequest(): ClientMessageSendFileRequestBuilder {
        return new ClientMessageSendFileRequestBuilder(new ClientMessageSendFileRequest());
    }
    public static clientThreadGetListRequest(): ClientThreadGetListRequestBuilder {
        return new ClientThreadGetListRequestBuilder(new ClientThreadGetListRequest());
    }
    public static clientThreadGetMessagesRequest(): ClientThreadGetMessagesRequestBuilder {
        return new ClientThreadGetMessagesRequestBuilder(new ClientThreadGetMessagesRequest());
    }
    public static contactConvertRequest(): ContactConvertRequestBuilder {
        return new ContactConvertRequestBuilder(new ContactConvertRequest());
    }
    public static contactFromFileRequest(): ContactFromFileRequestBuilder {
        return new ContactFromFileRequestBuilder(new ContactFromFileRequest());
    }
    public static contactGetRequest(): ContactGetRequestBuilder {
        return new ContactGetRequestBuilder(new ContactGetRequest());
    }
    public static contactGetAsFileRequest(): ContactGetAsFileRequestBuilder {
        return new ContactGetAsFileRequestBuilder(new ContactGetAsFileRequest());
    }
    public static contactGetListRequest(): ContactGetListRequestBuilder {
        return new ContactGetListRequestBuilder(new ContactGetListRequest());
    }
    public static disposableEmailIsDisposableRequest(): DisposableEmailIsDisposableRequestBuilder {
        return new DisposableEmailIsDisposableRequestBuilder(new DisposableEmailIsDisposableRequest());
    }
    public static emailConvertRequest(): EmailConvertRequestBuilder {
        return new EmailConvertRequestBuilder(new EmailConvertRequest());
    }
    public static emailFromFileRequest(): EmailFromFileRequestBuilder {
        return new EmailFromFileRequestBuilder(new EmailFromFileRequest());
    }
    public static emailGetRequest(): EmailGetRequestBuilder {
        return new EmailGetRequestBuilder(new EmailGetRequest());
    }
    public static emailGetAsFileRequest(): EmailGetAsFileRequestBuilder {
        return new EmailGetAsFileRequestBuilder(new EmailGetAsFileRequest());
    }
    public static emailGetListRequest(): EmailGetListRequestBuilder {
        return new EmailGetListRequestBuilder(new EmailGetListRequest());
    }
    public static emailConfigDiscoverRequest(): EmailConfigDiscoverRequestBuilder {
        return new EmailConfigDiscoverRequestBuilder(new EmailConfigDiscoverRequest());
    }
    public static copyFileRequest(): CopyFileRequestBuilder {
        return new CopyFileRequestBuilder(new CopyFileRequest());
    }
    public static deleteFileRequest(): DeleteFileRequestBuilder {
        return new DeleteFileRequestBuilder(new DeleteFileRequest());
    }
    public static downloadFileRequest(): DownloadFileRequestBuilder {
        return new DownloadFileRequestBuilder(new DownloadFileRequest());
    }
    public static moveFileRequest(): MoveFileRequestBuilder {
        return new MoveFileRequestBuilder(new MoveFileRequest());
    }
    public static uploadFileRequest(): UploadFileRequestBuilder {
        return new UploadFileRequestBuilder(new UploadFileRequest());
    }
    public static copyFolderRequest(): CopyFolderRequestBuilder {
        return new CopyFolderRequestBuilder(new CopyFolderRequest());
    }
    public static createFolderRequest(): CreateFolderRequestBuilder {
        return new CreateFolderRequestBuilder(new CreateFolderRequest());
    }
    public static deleteFolderRequest(): DeleteFolderRequestBuilder {
        return new DeleteFolderRequestBuilder(new DeleteFolderRequest());
    }
    public static getFilesListRequest(): GetFilesListRequestBuilder {
        return new GetFilesListRequestBuilder(new GetFilesListRequest());
    }
    public static moveFolderRequest(): MoveFolderRequestBuilder {
        return new MoveFolderRequestBuilder(new MoveFolderRequest());
    }
    public static mapiCalendarFromFileRequest(): MapiCalendarFromFileRequestBuilder {
        return new MapiCalendarFromFileRequestBuilder(new MapiCalendarFromFileRequest());
    }
    public static mapiCalendarGetRequest(): MapiCalendarGetRequestBuilder {
        return new MapiCalendarGetRequestBuilder(new MapiCalendarGetRequest());
    }
    public static mapiContactFromFileRequest(): MapiContactFromFileRequestBuilder {
        return new MapiContactFromFileRequestBuilder(new MapiContactFromFileRequest());
    }
    public static mapiContactGetRequest(): MapiContactGetRequestBuilder {
        return new MapiContactGetRequestBuilder(new MapiContactGetRequest());
    }
    public static mapiMessageFromFileRequest(): MapiMessageFromFileRequestBuilder {
        return new MapiMessageFromFileRequestBuilder(new MapiMessageFromFileRequest());
    }
    public static mapiMessageGetRequest(): MapiMessageGetRequestBuilder {
        return new MapiMessageGetRequestBuilder(new MapiMessageGetRequest());
    }
    public static getDiscUsageRequest(): GetDiscUsageRequestBuilder {
        return new GetDiscUsageRequestBuilder(new GetDiscUsageRequest());
    }
    public static getFileVersionsRequest(): GetFileVersionsRequestBuilder {
        return new GetFileVersionsRequestBuilder(new GetFileVersionsRequest());
    }
    public static objectExistsRequest(): ObjectExistsRequestBuilder {
        return new ObjectExistsRequestBuilder(new ObjectExistsRequest());
    }
    public static storageExistsRequest(): StorageExistsRequestBuilder {
        return new StorageExistsRequestBuilder(new StorageExistsRequest());
    }

}
