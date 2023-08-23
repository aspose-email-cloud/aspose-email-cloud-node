/*
* MIT License

* Copyright (c) 2018-2023 Aspose Pty Ltd. All rights reserved.

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
// @ts-ignore
import { Buffer } from "buffer";

/**
 * Yearly recurrence pattern.             
 */
export class YearlyRecurrencePatternDto extends model.RecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startDay",
            baseName: "startDay",
            type: "string",
        },
        {
            name: "startMonth",
            baseName: "startMonth",
            type: "string",
        },
        {
            name: "startOffset",
            baseName: "startOffset",
            type: "number",
        },
        {
            name: "startPosition",
            baseName: "startPosition",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(YearlyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     */
    public startDay: string;
    /**
     * Represents a calendar month. Enum, available values: None, January, February, March, April, May, June, July, August, September, October, November, December
     */
    public startMonth: string;
    /**
     * Start offset.             
     */
    public startOffset: number;
    /**
     * Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public startPosition: string;

    /**
     * Yearly recurrence pattern.             
     * @param interval Number of recurrence units.             
     * @param occurs Number of occurrences of the recurrence pattern.             
     * @param endDate End date.             
     * @param weekStart Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param startDay Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param startMonth Represents a calendar month. Enum, available values: None, January, February, March, April, May, June, July, August, September, October, November, December
     * @param startOffset Start offset.             
     * @param startPosition Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public constructor(
        
        interval?: number,
        occurs?: number,
        endDate?: Date,
        weekStart?: string
        ,
        startDay?: string,
        startMonth?: string,
        startOffset?: number,
        startPosition?: string
    ) {
        super();
        this.interval = interval;
        this.occurs = occurs;
        this.endDate = endDate;
        this.weekStart = weekStart;
        this.startDay = startDay;
        this.startMonth = startMonth;
        this.startOffset = startOffset;
        this.startPosition = startPosition;
        
    }
}

/**
 *  YearlyRecurrencePatternDto model builder
 */
export class YearlyRecurrencePatternDtoBuilder {
    private readonly model: YearlyRecurrencePatternDto;
    public constructor(model: YearlyRecurrencePatternDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): YearlyRecurrencePatternDto {
        return this.model;
    }

    /**
    * Number of recurrence units.             
    */
    public interval(interval: number): YearlyRecurrencePatternDtoBuilder {
        this.model.interval = interval;
        return this;
    }
    /**
    * Number of occurrences of the recurrence pattern.             
    */
    public occurs(occurs: number): YearlyRecurrencePatternDtoBuilder {
        this.model.occurs = occurs;
        return this;
    }
    /**
    * End date.             
    */
    public endDate(endDate: Date): YearlyRecurrencePatternDtoBuilder {
        this.model.endDate = endDate;
        return this;
    }
    /**
    * Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
    */
    public weekStart(weekStart: string): YearlyRecurrencePatternDtoBuilder {
        this.model.weekStart = weekStart;
        return this;
    }
    /**
    * Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
    */
    public startDay(startDay: string): YearlyRecurrencePatternDtoBuilder {
        this.model.startDay = startDay;
        return this;
    }
    /**
    * Represents a calendar month. Enum, available values: None, January, February, March, April, May, June, July, August, September, October, November, December
    */
    public startMonth(startMonth: string): YearlyRecurrencePatternDtoBuilder {
        this.model.startMonth = startMonth;
        return this;
    }
    /**
    * Start offset.             
    */
    public startOffset(startOffset: number): YearlyRecurrencePatternDtoBuilder {
        this.model.startOffset = startOffset;
        return this;
    }
    /**
    * Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
    */
    public startPosition(startPosition: string): YearlyRecurrencePatternDtoBuilder {
        this.model.startPosition = startPosition;
        return this;
    }
}

