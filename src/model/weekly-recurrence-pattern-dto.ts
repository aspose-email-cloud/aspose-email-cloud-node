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
 * Weekly recurrence pattern.             
 */
export class WeeklyRecurrencePatternDto extends model.RecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startDays",
            baseName: "startDays",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WeeklyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Start days              Items: Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     */
    public startDays: Array<string>;

    /**
     * Weekly recurrence pattern.             
     * @param interval Number of recurrence units.             
     * @param occurs Number of occurrences of the recurrence pattern.             
     * @param endDate End date.             
     * @param weekStart Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param startDays Start days             
     */
    public constructor(
        
        interval?: number,
        occurs?: number,
        endDate?: Date,
        weekStart?: string
        ,
        startDays?: Array<string>
    ) {
        super();
        this.interval = interval;
        this.occurs = occurs;
        this.endDate = endDate;
        this.weekStart = weekStart;
        this.startDays = startDays;
        
    }
}

/**
 *  WeeklyRecurrencePatternDto model builder
 */
export class WeeklyRecurrencePatternDtoBuilder {
    private readonly model: WeeklyRecurrencePatternDto;
    public constructor(model: WeeklyRecurrencePatternDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): WeeklyRecurrencePatternDto {
        return this.model;
    }

    /**
    * Number of recurrence units.             
    */
    public interval(interval: number): WeeklyRecurrencePatternDtoBuilder {
        this.model.interval = interval;
        return this;
    }
    /**
    * Number of occurrences of the recurrence pattern.             
    */
    public occurs(occurs: number): WeeklyRecurrencePatternDtoBuilder {
        this.model.occurs = occurs;
        return this;
    }
    /**
    * End date.             
    */
    public endDate(endDate: Date): WeeklyRecurrencePatternDtoBuilder {
        this.model.endDate = endDate;
        return this;
    }
    /**
    * Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
    */
    public weekStart(weekStart: string): WeeklyRecurrencePatternDtoBuilder {
        this.model.weekStart = weekStart;
        return this;
    }
    /**
    * Start days              Items: Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
    */
    public startDays(startDays: Array<string>): WeeklyRecurrencePatternDtoBuilder {
        this.model.startDays = startDays;
        return this;
    }
}

