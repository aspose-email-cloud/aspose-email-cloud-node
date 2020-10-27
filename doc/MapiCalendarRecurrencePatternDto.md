# MapiCalendarRecurrencePatternDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendarType** | **string** | Enumerated the calendar type of the mapi recurrence Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura | [default to undefined]
**deletedInstanceDates** | **Array&lt;Date&gt;** | An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.              | [optional] [default to undefined]
**endDate** | **Date** | End date of an item recurrence pattern.              | [default to undefined]
**endType** | **string** | Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd | [default to undefined]
**exceptions** | [**Array&lt;MapiCalendarExceptionInfoDto&gt;**](MapiCalendarExceptionInfoDto.md) | An exception specifies changes to an instance of a recurring series.              | [optional] [default to undefined]
**frequency** | **string** | Enumerates mapi calendar recurrence frequency Enum, available values: None, Daily, Weekly, Monthly, Yearly | [default to undefined]
**modifiedInstanceDates** | **Array&lt;Date&gt;** | An array of dates, each of which is the date of a modified instance.              | [optional] [default to undefined]
**occurrenceCount** | **number** | Number of occurrences in a recurrence.              | [default to undefined]
**patternType** | **string** | Enumerates the mapi calendar recurrence pattern types Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd | [default to undefined]
**period** | **number** | Interval at which the meeting pattern repeats.              | [default to undefined]
**slidingFlag** | **boolean** | Defines whether pattern is sliding or not.              | [default to undefined]
**startDate** | **Date** | Start date of an item recurrence pattern.              | [default to undefined]
**weekStartDay** | **string** | Day of week. Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday | [default to undefined]
**discriminator** | **string** |  | [default to undefined]



[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
