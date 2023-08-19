/*
* MIT License

* Copyright (c) 2018-2023 Aspose Pty Ltd

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
 * iCalendar document representation.             
 */
export class CalendarDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<Attachment>",
        },
        {
            name: "attendees",
            baseName: "attendees",
            type: "Array<MailAddress>",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        },
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        },
        {
            name: "endTimeZone",
            baseName: "endTimeZone",
            type: "string",
        },
        {
            name: "flags",
            baseName: "flags",
            type: "Array<string>",
        },
        {
            name: "isDescriptionHtml",
            baseName: "isDescriptionHtml",
            type: "boolean",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "method",
            baseName: "method",
            type: "string",
        },
        {
            name: "microsoftBusyStatus",
            baseName: "microsoftBusyStatus",
            type: "string",
        },
        {
            name: "microsoftIntendedStatus",
            baseName: "microsoftIntendedStatus",
            type: "string",
        },
        {
            name: "optionalAttendees",
            baseName: "optionalAttendees",
            type: "Array<MailAddress>",
        },
        {
            name: "organizer",
            baseName: "organizer",
            type: "MailAddress",
        },
        {
            name: "recurrenceString",
            baseName: "recurrenceString",
            type: "string",
        },
        {
            name: "recurrence",
            baseName: "recurrence",
            type: "RecurrencePatternDto",
        },
        {
            name: "reminders",
            baseName: "reminders",
            type: "Array<CalendarReminder>",
        },
        {
            name: "sequenceId",
            baseName: "sequenceId",
            type: "string",
        },
        {
            name: "startDate",
            baseName: "startDate",
            type: "Date",
        },
        {
            name: "startTimeZone",
            baseName: "startTimeZone",
            type: "string",
        },
        {
            name: "status",
            baseName: "status",
            type: "string",
        },
        {
            name: "summary",
            baseName: "summary",
            type: "string",
        },
        {
            name: "transparency",
            baseName: "transparency",
            type: "string",
        },
        {
            name: "_class",
            baseName: "class",
            type: "string",
        },
        {
            name: "microsoftImportance",
            baseName: "microsoftImportance",
            type: "string",
        },
        {
            name: "htmlDescription",
            baseName: "htmlDescription",
            type: "string",
        },
        {
            name: "dateTimeStamp",
            baseName: "dateTimeStamp",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalendarDto.attributeTypeMap;
    }

    /**
     * Document attachments.
     */
    public attachments: Array< model.Attachment >;
    /**
     * Event attendees.
     */
    public attendees: Array< model.MailAddress >;
    /**
     * Description.
     */
    public description: string;
    /**
     * End date.
     */
    public endDate: Date;
    /**
     * End time zone.
     */
    public endTimeZone: string;
    /**
     * Appointment flags. Items: Enumerates iCalendar flags. Enum, available values: None, AllDayEvent
     */
    public flags: Array<string>;
    /**
     * Indicates if description is in HTML format.
     */
    public isDescriptionHtml: boolean;
    /**
     * Location.
     */
    public location: string;
    /**
     * Defines the iCalendar object method type associated with the calendar document. Enum, available values: None, Publish, Request, Reply, Add, Cancel, Refresh, Counter, DeclineCounter
     */
    public method: string;
    /**
     * Specifies the BUSY status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
     */
    public microsoftBusyStatus: string;
    /**
     * Specifies the INTENDED status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
     */
    public microsoftIntendedStatus: string;
    /**
     * Optional attendees.             
     */
    public optionalAttendees: Array< model.MailAddress >;
    /**
     * Event organizer.             
     */
    public organizer: model.MailAddress;
    /**
     * Deprecated, use 'Recurrence' property. String representation of recurrence pattern (See iCalendar RFC, \"Recurrence rule\" section). For example:               For daily recurrence:         \"FREQ=DAILY;COUNT=10;WKST=MO\"                   For monthly recurrence:         \"BYSETPOS=1;BYDAY=MO,TU,WE,TH,FR;FREQ=MONTHLY;INTERVAL=10;WKST=MO\"                   For yearly recurrence:         \"BYMONTHDAY=30;BYMONTH=1;FREQ=YEARLY;WKST=MO\"                   
     */
    public recurrenceString: string;
    /**
     * Recurrence pattern             
     */
    public recurrence: model.RecurrencePatternDto;
    /**
     * Reminders.
     */
    public reminders: Array< model.CalendarReminder >;
    /**
     * The sequence id. Read only.
     */
    public sequenceId: string;
    /**
     * Start date.
     */
    public startDate: Date;
    /**
     * Start time zone.
     */
    public startTimeZone: string;
    /**
     * Defines the overall status or confirmation for the calendar document. Enum, available values: NotDefined, Cancelled, Tentative, Confirmed
     */
    public status: string;
    /**
     * Summary.
     */
    public summary: string;
    /**
     * Specifies whether or not this appointment is intended to be visible in availability searches. Enum, available values: NotDefined, Transparent, Opaque
     */
    public transparency: string;
    /**
     * Defines the access classification for the calendar. Enum, available values: Public, Private, Confidential, NotDefined
     */
    public _class: string;
    /**
     * Specifies the importance of a calendar object. Enum, available values: Low, Normal, High, NotDefined
     */
    public microsoftImportance: string;
    /**
     * HTML representation of description.             
     */
    public htmlDescription: string;
    /**
     * Date/time that the instance of the iCalendar object was created.             
     */
    public dateTimeStamp: Date;

    /**
     * iCalendar document representation.             
     * @param attachments Document attachments.
     * @param attendees Event attendees.
     * @param description Description.
     * @param endDate End date.
     * @param endTimeZone End time zone.
     * @param flags Appointment flags.
     * @param isDescriptionHtml Indicates if description is in HTML format.
     * @param location Location.
     * @param method Defines the iCalendar object method type associated with the calendar document. Enum, available values: None, Publish, Request, Reply, Add, Cancel, Refresh, Counter, DeclineCounter
     * @param microsoftBusyStatus Specifies the BUSY status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
     * @param microsoftIntendedStatus Specifies the INTENDED status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
     * @param optionalAttendees Optional attendees.             
     * @param organizer Event organizer.             
     * @param recurrenceString Deprecated, use 'Recurrence' property. String representation of recurrence pattern (See iCalendar RFC, \"Recurrence rule\" section). For example:               For daily recurrence:         \"FREQ=DAILY;COUNT=10;WKST=MO\"                   For monthly recurrence:         \"BYSETPOS=1;BYDAY=MO,TU,WE,TH,FR;FREQ=MONTHLY;INTERVAL=10;WKST=MO\"                   For yearly recurrence:         \"BYMONTHDAY=30;BYMONTH=1;FREQ=YEARLY;WKST=MO\"                   
     * @param recurrence Recurrence pattern             
     * @param reminders Reminders.
     * @param sequenceId The sequence id. Read only.
     * @param startDate Start date.
     * @param startTimeZone Start time zone.
     * @param status Defines the overall status or confirmation for the calendar document. Enum, available values: NotDefined, Cancelled, Tentative, Confirmed
     * @param summary Summary.
     * @param transparency Specifies whether or not this appointment is intended to be visible in availability searches. Enum, available values: NotDefined, Transparent, Opaque
     * @param _class Defines the access classification for the calendar. Enum, available values: Public, Private, Confidential, NotDefined
     * @param microsoftImportance Specifies the importance of a calendar object. Enum, available values: Low, Normal, High, NotDefined
     * @param htmlDescription HTML representation of description.             
     * @param dateTimeStamp Date/time that the instance of the iCalendar object was created.             
     */
    public constructor(
        
        attachments?: Array< model.Attachment >,
        attendees?: Array< model.MailAddress >,
        description?: string,
        endDate?: Date,
        endTimeZone?: string,
        flags?: Array<string>,
        isDescriptionHtml?: boolean,
        location?: string,
        method?: string,
        microsoftBusyStatus?: string,
        microsoftIntendedStatus?: string,
        optionalAttendees?: Array< model.MailAddress >,
        organizer?: model.MailAddress,
        recurrenceString?: string,
        recurrence?: model.RecurrencePatternDto,
        reminders?: Array< model.CalendarReminder >,
        sequenceId?: string,
        startDate?: Date,
        startTimeZone?: string,
        status?: string,
        summary?: string,
        transparency?: string,
        _class?: string,
        microsoftImportance?: string,
        htmlDescription?: string,
        dateTimeStamp?: Date
    ) {
        
        this.attachments = attachments;
        this.attendees = attendees;
        this.description = description;
        this.endDate = endDate;
        this.endTimeZone = endTimeZone;
        this.flags = flags;
        this.isDescriptionHtml = isDescriptionHtml;
        this.location = location;
        this.method = method;
        this.microsoftBusyStatus = microsoftBusyStatus;
        this.microsoftIntendedStatus = microsoftIntendedStatus;
        this.optionalAttendees = optionalAttendees;
        this.organizer = organizer;
        this.recurrenceString = recurrenceString;
        this.recurrence = recurrence;
        this.reminders = reminders;
        this.sequenceId = sequenceId;
        this.startDate = startDate;
        this.startTimeZone = startTimeZone;
        this.status = status;
        this.summary = summary;
        this.transparency = transparency;
        this._class = _class;
        this.microsoftImportance = microsoftImportance;
        this.htmlDescription = htmlDescription;
        this.dateTimeStamp = dateTimeStamp;
        
    }
}

/**
 *  CalendarDto model builder
 */
export class CalendarDtoBuilder {
    private readonly model: CalendarDto;
    public constructor(model: CalendarDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): CalendarDto {
        return this.model;
    }

    /**
    * Document attachments.
    */
    public attachments(attachments: Array< model.Attachment >): CalendarDtoBuilder {
        this.model.attachments = attachments;
        return this;
    }
    /**
    * Event attendees.
    */
    public attendees(attendees: Array< model.MailAddress >): CalendarDtoBuilder {
        this.model.attendees = attendees;
        return this;
    }
    /**
    * Description.
    */
    public description(description: string): CalendarDtoBuilder {
        this.model.description = description;
        return this;
    }
    /**
    * End date.
    */
    public endDate(endDate: Date): CalendarDtoBuilder {
        this.model.endDate = endDate;
        return this;
    }
    /**
    * End time zone.
    */
    public endTimeZone(endTimeZone: string): CalendarDtoBuilder {
        this.model.endTimeZone = endTimeZone;
        return this;
    }
    /**
    * Appointment flags. Items: Enumerates iCalendar flags. Enum, available values: None, AllDayEvent
    */
    public flags(flags: Array<string>): CalendarDtoBuilder {
        this.model.flags = flags;
        return this;
    }
    /**
    * Indicates if description is in HTML format.
    */
    public isDescriptionHtml(isDescriptionHtml: boolean): CalendarDtoBuilder {
        this.model.isDescriptionHtml = isDescriptionHtml;
        return this;
    }
    /**
    * Location.
    */
    public location(location: string): CalendarDtoBuilder {
        this.model.location = location;
        return this;
    }
    /**
    * Defines the iCalendar object method type associated with the calendar document. Enum, available values: None, Publish, Request, Reply, Add, Cancel, Refresh, Counter, DeclineCounter
    */
    public method(method: string): CalendarDtoBuilder {
        this.model.method = method;
        return this;
    }
    /**
    * Specifies the BUSY status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
    */
    public microsoftBusyStatus(microsoftBusyStatus: string): CalendarDtoBuilder {
        this.model.microsoftBusyStatus = microsoftBusyStatus;
        return this;
    }
    /**
    * Specifies the INTENDED status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
    */
    public microsoftIntendedStatus(microsoftIntendedStatus: string): CalendarDtoBuilder {
        this.model.microsoftIntendedStatus = microsoftIntendedStatus;
        return this;
    }
    /**
    * Optional attendees.             
    */
    public optionalAttendees(optionalAttendees: Array< model.MailAddress >): CalendarDtoBuilder {
        this.model.optionalAttendees = optionalAttendees;
        return this;
    }
    /**
    * Event organizer.             
    */
    public organizer(organizer: model.MailAddress): CalendarDtoBuilder {
        this.model.organizer = organizer;
        return this;
    }
    /**
    * Deprecated, use 'Recurrence' property. String representation of recurrence pattern (See iCalendar RFC, \"Recurrence rule\" section). For example:               For daily recurrence:         \"FREQ=DAILY;COUNT=10;WKST=MO\"                   For monthly recurrence:         \"BYSETPOS=1;BYDAY=MO,TU,WE,TH,FR;FREQ=MONTHLY;INTERVAL=10;WKST=MO\"                   For yearly recurrence:         \"BYMONTHDAY=30;BYMONTH=1;FREQ=YEARLY;WKST=MO\"                   
    */
    public recurrenceString(recurrenceString: string): CalendarDtoBuilder {
        this.model.recurrenceString = recurrenceString;
        return this;
    }
    /**
    * Recurrence pattern             
    */
    public recurrence(recurrence: model.RecurrencePatternDto): CalendarDtoBuilder {
        this.model.recurrence = recurrence;
        return this;
    }
    /**
    * Reminders.
    */
    public reminders(reminders: Array< model.CalendarReminder >): CalendarDtoBuilder {
        this.model.reminders = reminders;
        return this;
    }
    /**
    * The sequence id. Read only.
    */
    public sequenceId(sequenceId: string): CalendarDtoBuilder {
        this.model.sequenceId = sequenceId;
        return this;
    }
    /**
    * Start date.
    */
    public startDate(startDate: Date): CalendarDtoBuilder {
        this.model.startDate = startDate;
        return this;
    }
    /**
    * Start time zone.
    */
    public startTimeZone(startTimeZone: string): CalendarDtoBuilder {
        this.model.startTimeZone = startTimeZone;
        return this;
    }
    /**
    * Defines the overall status or confirmation for the calendar document. Enum, available values: NotDefined, Cancelled, Tentative, Confirmed
    */
    public status(status: string): CalendarDtoBuilder {
        this.model.status = status;
        return this;
    }
    /**
    * Summary.
    */
    public summary(summary: string): CalendarDtoBuilder {
        this.model.summary = summary;
        return this;
    }
    /**
    * Specifies whether or not this appointment is intended to be visible in availability searches. Enum, available values: NotDefined, Transparent, Opaque
    */
    public transparency(transparency: string): CalendarDtoBuilder {
        this.model.transparency = transparency;
        return this;
    }
    /**
    * Defines the access classification for the calendar. Enum, available values: Public, Private, Confidential, NotDefined
    */
    public _class(_class: string): CalendarDtoBuilder {
        this.model._class = _class;
        return this;
    }
    /**
    * Specifies the importance of a calendar object. Enum, available values: Low, Normal, High, NotDefined
    */
    public microsoftImportance(microsoftImportance: string): CalendarDtoBuilder {
        this.model.microsoftImportance = microsoftImportance;
        return this;
    }
    /**
    * HTML representation of description.             
    */
    public htmlDescription(htmlDescription: string): CalendarDtoBuilder {
        this.model.htmlDescription = htmlDescription;
        return this;
    }
    /**
    * Date/time that the instance of the iCalendar object was created.             
    */
    public dateTimeStamp(dateTimeStamp: Date): CalendarDtoBuilder {
        this.model.dateTimeStamp = dateTimeStamp;
        return this;
    }
}

