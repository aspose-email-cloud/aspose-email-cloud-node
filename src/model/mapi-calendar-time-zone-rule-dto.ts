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
 * Represents time zone rule that indicate when to begin using the Standard/Daylight time.             
 */
export class MapiCalendarTimeZoneRuleDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "date",
            baseName: "date",
            type: "Date",
        },
        {
            name: "dayOfWeek",
            baseName: "dayOfWeek",
            type: "string",
        },
        {
            name: "hour",
            baseName: "hour",
            type: "number",
        },
        {
            name: "milliseconds",
            baseName: "milliseconds",
            type: "number",
        },
        {
            name: "minute",
            baseName: "minute",
            type: "number",
        },
        {
            name: "month",
            baseName: "month",
            type: "number",
        },
        {
            name: "position",
            baseName: "position",
            type: "string",
        },
        {
            name: "seconds",
            baseName: "seconds",
            type: "number",
        },
        {
            name: "year",
            baseName: "year",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarTimeZoneRuleDto.attributeTypeMap;
    }

    /**
     * Date and time that indicate when to begin using the Standard/Daylight time.             
     */
    public date: Date;
    /**
     * Day of week./nEnum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     */
    public dayOfWeek: string;
    /**
     * Hour.             
     */
    public hour: number;
    /**
     * Milliseconds.             
     */
    public milliseconds: number;
    /**
     * Minute.             
     */
    public minute: number;
    /**
     * Month.             
     */
    public month: number;
    /**
     * Day positions, typically found in a month./nEnum, available values: None, First, Second, Third, Fourth, Last
     */
    public position: string;
    /**
     * Seconds.             
     */
    public seconds: number;
    /**
     * Year.             
     */
    public year: number;

    /**
     * Represents time zone rule that indicate when to begin using the Standard/Daylight time.             
     * @param date Date and time that indicate when to begin using the Standard/Daylight time.             
     * @param dayOfWeek Day of week./nEnum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     * @param hour Hour.             
     * @param milliseconds Milliseconds.             
     * @param minute Minute.             
     * @param month Month.             
     * @param position Day positions, typically found in a month./nEnum, available values: None, First, Second, Third, Fourth, Last
     * @param seconds Seconds.             
     * @param year Year.             
     */
    public constructor(
        
        date?: Date,
        dayOfWeek?: string,
        hour?: number,
        milliseconds?: number,
        minute?: number,
        month?: number,
        position?: string,
        seconds?: number,
        year?: number
    ) {
        
        this.date = date;
        this.dayOfWeek = dayOfWeek;
        this.hour = hour;
        this.milliseconds = milliseconds;
        this.minute = minute;
        this.month = month;
        this.position = position;
        this.seconds = seconds;
        this.year = year;
        
    }
}

/**
 *  MapiCalendarTimeZoneRuleDto model builder
 */
export class MapiCalendarTimeZoneRuleDtoBuilder {
    private readonly model: MapiCalendarTimeZoneRuleDto;
    public constructor(model: MapiCalendarTimeZoneRuleDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiCalendarTimeZoneRuleDto {
        return this.model;
    }

    /**
    * Date and time that indicate when to begin using the Standard/Daylight time.             
    */
    public date(date: Date): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.date = date;
        return this;
    }
    /**
    * Day of week./nEnum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
    */
    public dayOfWeek(dayOfWeek: string): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.dayOfWeek = dayOfWeek;
        return this;
    }
    /**
    * Hour.             
    */
    public hour(hour: number): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.hour = hour;
        return this;
    }
    /**
    * Milliseconds.             
    */
    public milliseconds(milliseconds: number): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.milliseconds = milliseconds;
        return this;
    }
    /**
    * Minute.             
    */
    public minute(minute: number): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.minute = minute;
        return this;
    }
    /**
    * Month.             
    */
    public month(month: number): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.month = month;
        return this;
    }
    /**
    * Day positions, typically found in a month./nEnum, available values: None, First, Second, Third, Fourth, Last
    */
    public position(position: string): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.position = position;
        return this;
    }
    /**
    * Seconds.             
    */
    public seconds(seconds: number): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.seconds = seconds;
        return this;
    }
    /**
    * Year.             
    */
    public year(year: number): MapiCalendarTimeZoneRuleDtoBuilder {
        this.model.year = year;
        return this;
    }
}

