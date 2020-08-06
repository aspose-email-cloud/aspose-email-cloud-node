
/*
* MIT License

* Copyright (c) 2018-2020 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

// @ts-ignore
import * as model from "./index";

/**
 * Represents the weekly recurrence pattern of the mapi calendar             
 */
export class MapiCalendarWeeklyRecurrencePatternDto extends model.MapiCalendarRecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "dayOfWeek",
            baseName: "dayOfWeek",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiCalendarWeeklyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Days of week at which the event occurs.              Items: Enumerates the days of week of the mapi calendar recurrence pattern Enum, available values: Saturday, Friday, Thursday, Wednesday, Tuesday, Monday, Sunday
     */
    public dayOfWeek: Array<string>;
    

    /**
     * Represents the weekly recurrence pattern of the mapi calendar             
     * @param calendarType Enumerated the calendar type of the mapi recurrence Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
     * @param deletedInstanceDates An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
     * @param endDate End date of an item recurrence pattern.             
     * @param endType Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
     * @param exceptions An exception specifies changes to an instance of a recurring series.             
     * @param frequency Enumerates mapi calendar recurrence frequency Enum, available values: None, Daily, Weekly, Monthly, Yearly
     * @param modifiedInstanceDates An array of dates, each of which is the date of a modified instance.             
     * @param occurrenceCount Number of occurrences in a recurrence.             
     * @param patternType Enumerates the mapi calendar recurrence pattern types Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
     * @param period Interval at which the meeting pattern repeats.             
     * @param slidingFlag Defines whether pattern is sliding or not.             
     * @param startDate Start date of an item recurrence pattern.             
     * @param weekStartDay Day of week. Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     * @param discriminator 
     * @param dayOfWeek Days of week at which the event occurs.             
     */
    public constructor(
        calendarType?: string,
        deletedInstanceDates?: Array<Date>,
        endDate?: Date,
        endType?: string,
        exceptions?: Array< model.MapiCalendarExceptionInfoDto >,
        frequency?: string,
        modifiedInstanceDates?: Array<Date>,
        occurrenceCount?: number,
        patternType?: string,
        period?: number,
        slidingFlag?: boolean,
        startDate?: Date,
        weekStartDay?: string,
        discriminator?: string,
        dayOfWeek?: Array<string>) {
        super();
        this.calendarType = calendarType;
        this.deletedInstanceDates = deletedInstanceDates;
        this.endDate = endDate;
        this.endType = endType;
        this.exceptions = exceptions;
        this.frequency = frequency;
        this.modifiedInstanceDates = modifiedInstanceDates;
        this.occurrenceCount = occurrenceCount;
        this.patternType = patternType;
        this.period = period;
        this.slidingFlag = slidingFlag;
        this.startDate = startDate;
        this.weekStartDay = weekStartDay;
        this.discriminator = discriminator;
        this.dayOfWeek = dayOfWeek;
    }
}

