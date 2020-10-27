# TaskRegeneratingPatternDto

Represents the regenerating recurrence pattern that specifies how many days, weeks, months or years after the completion of the current task the next occurrence will be due.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**regeneratingType** | **string** | Enumerates the types of regenerating pattern. Enum, available values: Daily, Weekly, Monthly, Yearly | [default to undefined]

 Parent class: [RecurrencePatternDto](RecurrencePatternDto.md)


## Example
```typescript
let taskRegeneratingPatternDto = Models.taskRegeneratingPatternDto()
    .interval(1)
    .occurs(2)
    .endDate(new Date())
    .weekStart('Sunday')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
