# CalendarReminder

Provides a grouping of component properties that define an alarm.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**action** | **string** | Defines the action to be invoked when an alarm is triggered. Enum, available values: Audio, Display, Email, Procedure, None | [default to undefined]
**attachments** | **Array&lt;string&gt;** | Collection of Reminder Attachments. Could be an absolute URI or Base64 string representation of attachment content              | [optional] [default to undefined]
**attendees** | [**Array&lt;ReminderAttendee&gt;**](ReminderAttendee.md) | Contains collection of ReminderAttendee objects.              | [optional] [default to undefined]
**description** | **string** | Provides a more complete description of the alarm. | [optional] [default to undefined]
**duration** | **number** | Specifies the delay period in ticks, after which the alarm will repeat.              | [optional] [default to undefined]
**repeat** | **number** | Defines the number of time the alarm should be repeated, after the initial trigger.              | [default to undefined]
**summary** | **string** | Defines a short summary or subject for the alarm. | [optional] [default to undefined]
**trigger** | [**ReminderTrigger**](ReminderTrigger.md) | Specifies when an alarm will trigger. | [optional] [default to undefined]


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
