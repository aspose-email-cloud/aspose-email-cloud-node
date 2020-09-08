# MapiCalendarExceptionInfoDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**Array&lt;MapiAttachmentDto&gt;**](MapiAttachmentDto.md) | Attachments in the recurrence exception.              | [optional] [default to undefined]
**body** | **string** | Body.              | [optional] [default to undefined]
**busyStatus** | **string** | Enumerates the mapi calendar possible busy status Enum, available values: Free, Tentative, Busy, OutOfOffice | [default to undefined]
**endDateTime** | **Date** | End date.              | [default to undefined]
**hasAttachment** | **boolean** | Value of this field specifies whether the Exception Embedded Message object contains attachments.              | [default to undefined]
**location** | **string** | Location.              | [optional] [default to undefined]
**meetingType** | **string** | Enumerates the appointment state Enum, available values: Meeting, Received, Canceled | [default to undefined]
**originalStartDate** | **Date** | Original start date.              | [default to undefined]
**overrideFlags** | **Array&lt;string&gt;** | Override flags.              Items: Specifies what data in the MapiCalendarOverride structure has a value different from the recurring series. Enum, available values: Subject, MeetingType, ReminderDelta, Reminder, Location, BusyStatus, Attachment, Subtype, AppointmentColor, ExceptionalBody | [optional] [default to undefined]
**reminderDelta** | **number** | Reminder delta.              | [default to undefined]
**reminderSet** | **boolean** | Value for the PidLidReminderSet property.              | [default to undefined]
**startDateTime** | **Date** | Start date.              | [default to undefined]
**subject** | **string** | Subject.              | [optional] [default to undefined]
**subType** | **number** | SubType.              | [default to undefined]



[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
