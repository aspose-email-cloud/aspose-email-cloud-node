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
 * Specifies when an alarm will trigger.
 */
export class ReminderTrigger {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "dateTime",
            baseName: "dateTime",
            type: "Date",
        },
        {
            name: "duration",
            baseName: "duration",
            type: "number",
        },
        {
            name: "related",
            baseName: "related",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReminderTrigger.attributeTypeMap;
    }

    /**
     * A trigger set to an absolute date/time.
     */
    public dateTime: Date;
    /**
     * Specifies a relative time in ticks for the trigger of the alarm.             
     */
    public duration: number;
    /**
     * Specify the relationship of the alarm trigger with respect to the start or end of the event. Enum, available values: Start, End
     */
    public related: string;

    /**
     * Specifies when an alarm will trigger.
     * @param dateTime A trigger set to an absolute date/time.
     * @param duration Specifies a relative time in ticks for the trigger of the alarm.             
     * @param related Specify the relationship of the alarm trigger with respect to the start or end of the event. Enum, available values: Start, End
     */
    public constructor(
        
        dateTime?: Date,
        duration?: number,
        related?: string
    ) {
        
        this.dateTime = dateTime;
        this.duration = duration;
        this.related = related;
        
    }
}

/**
 *  ReminderTrigger model builder
 */
export class ReminderTriggerBuilder {
    private readonly model: ReminderTrigger;
    public constructor(model: ReminderTrigger) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ReminderTrigger {
        return this.model;
    }

    /**
    * A trigger set to an absolute date/time.
    */
    public dateTime(dateTime: Date): ReminderTriggerBuilder {
        this.model.dateTime = dateTime;
        return this;
    }
    /**
    * Specifies a relative time in ticks for the trigger of the alarm.             
    */
    public duration(duration: number): ReminderTriggerBuilder {
        this.model.duration = duration;
        return this;
    }
    /**
    * Specify the relationship of the alarm trigger with respect to the start or end of the event. Enum, available values: Start, End
    */
    public related(related: string): ReminderTriggerBuilder {
        this.model.related = related;
        return this;
    }
}

