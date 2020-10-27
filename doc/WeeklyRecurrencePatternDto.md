# WeeklyRecurrencePatternDto

Weekly recurrence pattern.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**startDays** | **Array&lt;string&gt;** | Start days              Items: Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay | [optional] [default to undefined]

 Parent class: [RecurrencePatternDto](RecurrencePatternDto.md)


## Example
```typescript
let weeklyRecurrencePatternDto = Models.weeklyRecurrencePatternDto()
    .startDays([
        'Tuesday',
        'Thursday'])
    .interval(-1)
    .occurs(10)
    .weekStart('Sunday')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
