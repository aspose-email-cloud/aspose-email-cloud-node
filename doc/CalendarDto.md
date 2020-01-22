
# CalendarDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) | Document attachments | [optional] [default to undefined]
**attendees** | [**Array&lt;MailAddress&gt;**](MailAddress.md) | Event attendees | [default to undefined]
**description** | **string** | Description | [optional] [default to undefined]
**endDate** | **Date** | End date | [default to undefined]
**endTimeZone** | **string** | End time zone | [optional] [default to undefined]
**flags** | **Array&lt;string&gt;** | Appointment flags | [optional] [default to undefined]
**isDescriptionHtml** | **boolean** | Indicates if description is in HTML format | [default to undefined]
**location** | **string** | Location | [default to undefined]
**method** | **string** | Defines the iCalendar object method type associated with the calendar document. Enum, available values: None, Publish, Request, Reply, Add, Cancel, Refresh, Counter, DeclineCounter | [default to undefined]
**microsoftBusyStatus** | **string** | Specifies the BUSY status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof | [default to undefined]
**microsoftIntendedStatus** | **string** | Specifies the INTENDED status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof | [default to undefined]
**optionalAttendees** | [**Array&lt;MailAddress&gt;**](MailAddress.md) | Optional attendees              | [optional] [default to undefined]
**organizer** | [**MailAddress**](MailAddress.md) | Event organizer              | [default to undefined]
**recurrenceString** | **string** | String representation of recurrence pattern (See iCalendar RFC, \"Recurrence rule\" section). For example:               For daily recurrence:         \"FREQ=DAILY;COUNT=10;WKST=MO\"                   For monthly recurrence:         \"BYSETPOS=1;BYDAY=MO,TU,WE,TH,FR;FREQ=MONTHLY;INTERVAL=10;WKST=MO\"                   For yearly recurrence:         \"BYMONTHDAY=30;BYMONTH=1;FREQ=YEARLY;WKST=MO\"                    | [optional] [default to undefined]
**reminders** | [**Array&lt;CalendarReminder&gt;**](CalendarReminder.md) | Reminders | [optional] [default to undefined]
**sequenceId** | **string** | The sequence id. Read only. | [optional] [default to undefined]
**startDate** | **Date** | Start date | [default to undefined]
**startTimeZone** | **string** | Start time zone | [optional] [default to undefined]
**status** | **string** | Defines the overall status or confirmation for the calendar document. Enum, available values: NotDefined, Cancelled, Tentative, Confirmed | [default to undefined]
**summary** | **string** | Summary | [optional] [default to undefined]
**transparency** | **string** | Specifies whether or not this appointment is intended to be visible in availability searches. Enum, available values: NotDefined, Transparent, Opaque | [default to undefined]



[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
