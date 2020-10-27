# MapiCalendarTimeZoneInfoDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bias** | **number** | Time zone's offset in minutes from UTC.              | [default to undefined]
**daylightBias** | **number** | Offset in minutes from lBias during daylight saving time.              | [default to undefined]
**daylightDate** | [**MapiCalendarTimeZoneRuleDto**](MapiCalendarTimeZoneRuleDto.md) | Date and local time that indicate when to begin using the DaylightBias.              | [optional] [default to undefined]
**standardBias** | **number** | Offset in minutes from lBias during standard time.              | [default to undefined]
**standardDate** | [**MapiCalendarTimeZoneRuleDto**](MapiCalendarTimeZoneRuleDto.md) | Date and local time that indicate when to begin using the StandardBias.              | [optional] [default to undefined]
**timeZoneFlags** | **Array&lt;string&gt;** | Individual bit flags that specify information about this TimeZoneRule.              Items: Enumerates the individual bit flags that specify information about TimeZoneRule Enum, available values: TzRuleFlagRecurCurrentTzReg, TzRuleFlagEffectiveTzReg | [optional] [default to undefined]
**year** | **number** | Year in which this rule is scheduled to take effect.              | [default to undefined]



[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
