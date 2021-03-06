# YearlyRecurrencePatternDto

Yearly recurrence pattern.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**startDay** | **string** | Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay | [default to undefined]
**startMonth** | **string** | Represents a calendar month. Enum, available values: None, January, February, March, April, May, June, July, August, September, October, November, December | [default to undefined]
**startOffset** | **number** | Start offset.              | [default to undefined]
**startPosition** | **string** | Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last | [default to undefined]

 Parent class: [RecurrencePatternDto](RecurrencePatternDto.md)


## Example
```typescript
let yearlyRecurrencePatternDto = Models.yearlyRecurrencePatternDto()
    .startMonth('January')
    .startOffset(30)
    .interval(-1)
    .weekStart('Monday')
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
