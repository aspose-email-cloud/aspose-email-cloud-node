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
 * Recurrence properties of calendar object.             
 */
export class MapiCalendarEventRecurrenceDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "appointmentTimeZoneDefinitionRecur",
            baseName: "appointmentTimeZoneDefinitionRecur",
            type: "MapiCalendarTimeZoneDto",
        },
        {
            name: "clipEnd",
            baseName: "clipEnd",
            type: "Date",
        },
        {
            name: "clipStart",
            baseName: "clipStart",
            type: "Date",
        },
        {
            name: "isException",
            baseName: "isException",
            type: "boolean",
        },
        {
            name: "recurrencePattern",
            baseName: "recurrencePattern",
            type: "MapiCalendarRecurrencePatternDto",
        },
        {
            name: "timeZoneStruct",
            baseName: "timeZoneStruct",
            type: "MapiCalendarTimeZoneDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarEventRecurrenceDto.attributeTypeMap;
    }

    /**
     * Time zone information that describes how to convert the meeting date and time on a recurring series to and from UTC.             
     */
    public appointmentTimeZoneDefinitionRecur: model.MapiCalendarTimeZoneDto;
    /**
     * Date of the last instance.             
     */
    public clipEnd: Date;
    /**
     * Date of the first instance.             
     */
    public clipStart: Date;
    /**
     * Value indicating whether the object represents an exception.             
     */
    public isException: boolean;
    /**
     * Recurrence pattern.             
     */
    public recurrencePattern: model.MapiCalendarRecurrencePatternDto;
    /**
     * Time zone information for a recurring meeting.             
     */
    public timeZoneStruct: model.MapiCalendarTimeZoneDto;

    /**
     * Recurrence properties of calendar object.             
     * @param appointmentTimeZoneDefinitionRecur Time zone information that describes how to convert the meeting date and time on a recurring series to and from UTC.             
     * @param clipEnd Date of the last instance.             
     * @param clipStart Date of the first instance.             
     * @param isException Value indicating whether the object represents an exception.             
     * @param recurrencePattern Recurrence pattern.             
     * @param timeZoneStruct Time zone information for a recurring meeting.             
     */
    public constructor(
        
        appointmentTimeZoneDefinitionRecur?: model.MapiCalendarTimeZoneDto,
        clipEnd?: Date,
        clipStart?: Date,
        isException?: boolean,
        recurrencePattern?: model.MapiCalendarRecurrencePatternDto,
        timeZoneStruct?: model.MapiCalendarTimeZoneDto
    ) {
        
        this.appointmentTimeZoneDefinitionRecur = appointmentTimeZoneDefinitionRecur;
        this.clipEnd = clipEnd;
        this.clipStart = clipStart;
        this.isException = isException;
        this.recurrencePattern = recurrencePattern;
        this.timeZoneStruct = timeZoneStruct;
        
    }
}



