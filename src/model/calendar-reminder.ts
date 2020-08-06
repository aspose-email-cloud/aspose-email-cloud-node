
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
 * Provides a grouping of component properties that define an alarm.             
 */
export class CalendarReminder {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "action",
            baseName: "action",
            type: "string",
        },
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<string>",
        },
        {
            name: "attendees",
            baseName: "attendees",
            type: "Array<ReminderAttendee>",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        },
        {
            name: "duration",
            baseName: "duration",
            type: "number",
        },
        {
            name: "repeat",
            baseName: "repeat",
            type: "number",
        },
        {
            name: "summary",
            baseName: "summary",
            type: "string",
        },
        {
            name: "trigger",
            baseName: "trigger",
            type: "ReminderTrigger",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalendarReminder.attributeTypeMap;
    }

    /**
     * Defines the action to be invoked when an alarm is triggered. Enum, available values: Audio, Display, Email, Procedure, None
     */
    public action: string;
    /**
     * Collection of Reminder Attachments. Could be an absolute URI or Base64 string representation of attachment content             
     */
    public attachments: Array<string>;
    /**
     * Contains collection of ReminderAttendee objects.             
     */
    public attendees: Array< model.ReminderAttendee >;
    /**
     * Provides a more complete description of the alarm.
     */
    public description: string;
    /**
     * Specifies the delay period in ticks, after which the alarm will repeat.             
     */
    public duration: number;
    /**
     * Defines the number of time the alarm should be repeated, after the initial trigger.             
     */
    public repeat: number;
    /**
     * Defines a short summary or subject for the alarm.
     */
    public summary: string;
    /**
     * Specifies when an alarm will trigger.
     */
    public trigger: model.ReminderTrigger;

    /**
     * Provides a grouping of component properties that define an alarm.             
     * @param action Defines the action to be invoked when an alarm is triggered. Enum, available values: Audio, Display, Email, Procedure, None
     * @param attachments Collection of Reminder Attachments. Could be an absolute URI or Base64 string representation of attachment content             
     * @param attendees Contains collection of ReminderAttendee objects.             
     * @param description Provides a more complete description of the alarm.
     * @param duration Specifies the delay period in ticks, after which the alarm will repeat.             
     * @param repeat Defines the number of time the alarm should be repeated, after the initial trigger.             
     * @param summary Defines a short summary or subject for the alarm.
     * @param trigger Specifies when an alarm will trigger.
     */
    public constructor(
        
        action?: string,
        attachments?: Array<string>,
        attendees?: Array< model.ReminderAttendee >,
        description?: string,
        duration?: number,
        repeat?: number,
        summary?: string,
        trigger?: model.ReminderTrigger
    ) {
        
        this.action = action;
        this.attachments = attachments;
        this.attendees = attendees;
        this.description = description;
        this.duration = duration;
        this.repeat = repeat;
        this.summary = summary;
        this.trigger = trigger;
        
    }
}



