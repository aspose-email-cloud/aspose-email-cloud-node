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
 * Convert iCalendar to AlternateView request             
 */
export class CalendarAsAlternateRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "CalendarDto",
        },
        {
            name: "action",
            baseName: "action",
            type: "string",
        },
        {
            name: "sequenceId",
            baseName: "sequenceId",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalendarAsAlternateRequest.attributeTypeMap;
    }

    /**
     * iCalendar document model             
     */
    public value: model.CalendarDto;
    /**
     * iCalendar actions./nEnum, available values: Create, Update, Cancel
     */
    public action: string;
    /**
     * iCalendar sequence id             
     */
    public sequenceId: string;

    /**
     * Convert iCalendar to AlternateView request             
     * @param value iCalendar document model             
     * @param action iCalendar actions./nEnum, available values: Create, Update, Cancel
     * @param sequenceId iCalendar sequence id             
     */
    public constructor(
        
        value?: model.CalendarDto,
        action?: string,
        sequenceId?: string
    ) {
        
        this.value = value;
        this.action = action;
        this.sequenceId = sequenceId;
        
    }
}

/**
 *  CalendarAsAlternateRequest model builder
 */
export class CalendarAsAlternateRequestBuilder {
    private readonly model: CalendarAsAlternateRequest;
    public constructor(model: CalendarAsAlternateRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): CalendarAsAlternateRequest {
        return this.model;
    }

    /**
    * iCalendar document model             
    */
    public value(value: model.CalendarDto): CalendarAsAlternateRequestBuilder {
        this.model.value = value;
        return this;
    }
    /**
    * iCalendar actions./nEnum, available values: Create, Update, Cancel
    */
    public action(action: string): CalendarAsAlternateRequestBuilder {
        this.model.action = action;
        return this;
    }
    /**
    * iCalendar sequence id             
    */
    public sequenceId(sequenceId: string): CalendarAsAlternateRequestBuilder {
        this.model.sequenceId = sequenceId;
        return this;
    }
}

