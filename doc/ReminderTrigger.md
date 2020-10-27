# ReminderTrigger

Specifies when an alarm will trigger.

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**dateTime** | **Date** | A trigger set to an absolute date/time. | [default to undefined]
**duration** | **number** | Specifies a relative time in ticks for the trigger of the alarm.              | [optional] [default to undefined]
**related** | **string** | Specify the relationship of the alarm trigger with respect to the start or end of the event. Enum, available values: Start, End | [default to undefined]


## Example
```typescript
let reminderTrigger = Models.reminderTrigger()
    .dateTime(new Date())
    .duration(600000000)
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
