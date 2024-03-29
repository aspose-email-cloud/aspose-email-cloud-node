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
 * Mapi recurrence pattern.             
 */
export class MapiCalendarRecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calendarType",
            baseName: "calendarType",
            type: "string",
        },
        {
            name: "deletedInstanceDates",
            baseName: "deletedInstanceDates",
            type: "Array<Date>",
        },
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        },
        {
            name: "endType",
            baseName: "endType",
            type: "string",
        },
        {
            name: "exceptions",
            baseName: "exceptions",
            type: "Array<MapiCalendarExceptionInfoDto>",
        },
        {
            name: "frequency",
            baseName: "frequency",
            type: "string",
        },
        {
            name: "modifiedInstanceDates",
            baseName: "modifiedInstanceDates",
            type: "Array<Date>",
        },
        {
            name: "occurrenceCount",
            baseName: "occurrenceCount",
            type: "number",
        },
        {
            name: "patternType",
            baseName: "patternType",
            type: "string",
        },
        {
            name: "period",
            baseName: "period",
            type: "number",
        },
        {
            name: "slidingFlag",
            baseName: "slidingFlag",
            type: "boolean",
        },
        {
            name: "startDate",
            baseName: "startDate",
            type: "Date",
        },
        {
            name: "weekStartDay",
            baseName: "weekStartDay",
            type: "string",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarRecurrencePatternDto.attributeTypeMap;
    }

    /**
     * Enumerated the calendar type of the mapi recurrence. Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
     */
    public calendarType: string;
    /**
     * An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
     */
    public deletedInstanceDates: Array<Date>;
    /**
     * End date of an item recurrence pattern.             
     */
    public endDate: Date;
    /**
     * Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
     */
    public endType: string;
    /**
     * An exception specifies changes to an instance of a recurring series.             
     */
    public exceptions: Array< model.MapiCalendarExceptionInfoDto >;
    /**
     * Enumerates mapi calendar recurrence frequency. Enum, available values: None, Daily, Weekly, Monthly, Yearly
     */
    public frequency: string;
    /**
     * An array of dates, each of which is the date of a modified instance.             
     */
    public modifiedInstanceDates: Array<Date>;
    /**
     * Number of occurrences in a recurrence.             
     */
    public occurrenceCount: number;
    /**
     * Enumerates the mapi calendar recurrence pattern types. Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
     */
    public patternType: string;
    /**
     * Interval at which the meeting pattern repeats.             
     */
    public period: number;
    /**
     * Defines whether pattern is sliding or not.             
     */
    public slidingFlag: boolean;
    /**
     * Start date of an item recurrence pattern.             
     */
    public startDate: Date;
    /**
     * Day of week. Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     */
    public weekStartDay: string;
    /**
     * Model type discriminator. Used for serialization purposes. Field is set automatically by SDK.
     */
    public get discriminator(): string {
        return this.constructor.name;
    }
    public set discriminator(_newType: string) {
        /* do nothing */
    };


    /**
     * Mapi recurrence pattern.             
     * @param calendarType Enumerated the calendar type of the mapi recurrence. Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
     * @param deletedInstanceDates An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
     * @param endDate End date of an item recurrence pattern.             
     * @param endType Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
     * @param exceptions An exception specifies changes to an instance of a recurring series.             
     * @param frequency Enumerates mapi calendar recurrence frequency. Enum, available values: None, Daily, Weekly, Monthly, Yearly
     * @param modifiedInstanceDates An array of dates, each of which is the date of a modified instance.             
     * @param occurrenceCount Number of occurrences in a recurrence.             
     * @param patternType Enumerates the mapi calendar recurrence pattern types. Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
     * @param period Interval at which the meeting pattern repeats.             
     * @param slidingFlag Defines whether pattern is sliding or not.             
     * @param startDate Start date of an item recurrence pattern.             
     * @param weekStartDay Day of week. Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
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
        weekStartDay?: string
        
    ) {
        
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
        
    }
}

/**
 *  MapiCalendarRecurrencePatternDto model builder
 */
export class MapiCalendarRecurrencePatternDtoBuilder {
    private readonly model: MapiCalendarRecurrencePatternDto;
    public constructor(model: MapiCalendarRecurrencePatternDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiCalendarRecurrencePatternDto {
        return this.model;
    }

    /**
    * Enumerated the calendar type of the mapi recurrence. Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
    */
    public calendarType(calendarType: string): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.calendarType = calendarType;
        return this;
    }
    /**
    * An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
    */
    public deletedInstanceDates(deletedInstanceDates: Array<Date>): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.deletedInstanceDates = deletedInstanceDates;
        return this;
    }
    /**
    * End date of an item recurrence pattern.             
    */
    public endDate(endDate: Date): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.endDate = endDate;
        return this;
    }
    /**
    * Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
    */
    public endType(endType: string): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.endType = endType;
        return this;
    }
    /**
    * An exception specifies changes to an instance of a recurring series.             
    */
    public exceptions(exceptions: Array< model.MapiCalendarExceptionInfoDto >): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.exceptions = exceptions;
        return this;
    }
    /**
    * Enumerates mapi calendar recurrence frequency. Enum, available values: None, Daily, Weekly, Monthly, Yearly
    */
    public frequency(frequency: string): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.frequency = frequency;
        return this;
    }
    /**
    * An array of dates, each of which is the date of a modified instance.             
    */
    public modifiedInstanceDates(modifiedInstanceDates: Array<Date>): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.modifiedInstanceDates = modifiedInstanceDates;
        return this;
    }
    /**
    * Number of occurrences in a recurrence.             
    */
    public occurrenceCount(occurrenceCount: number): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.occurrenceCount = occurrenceCount;
        return this;
    }
    /**
    * Enumerates the mapi calendar recurrence pattern types. Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
    */
    public patternType(patternType: string): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.patternType = patternType;
        return this;
    }
    /**
    * Interval at which the meeting pattern repeats.             
    */
    public period(period: number): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.period = period;
        return this;
    }
    /**
    * Defines whether pattern is sliding or not.             
    */
    public slidingFlag(slidingFlag: boolean): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.slidingFlag = slidingFlag;
        return this;
    }
    /**
    * Start date of an item recurrence pattern.             
    */
    public startDate(startDate: Date): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.startDate = startDate;
        return this;
    }
    /**
    * Day of week. Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
    */
    public weekStartDay(weekStartDay: string): MapiCalendarRecurrencePatternDtoBuilder {
        this.model.weekStartDay = weekStartDay;
        return this;
    }
}

