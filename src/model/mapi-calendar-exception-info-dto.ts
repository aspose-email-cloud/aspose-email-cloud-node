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
 * An exception specifies changes to an instance of a recurring series.             
 */
export class MapiCalendarExceptionInfoDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<MapiAttachmentDto>",
        },
        {
            name: "body",
            baseName: "body",
            type: "string",
        },
        {
            name: "busyStatus",
            baseName: "busyStatus",
            type: "string",
        },
        {
            name: "endDateTime",
            baseName: "endDateTime",
            type: "Date",
        },
        {
            name: "hasAttachment",
            baseName: "hasAttachment",
            type: "boolean",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "meetingType",
            baseName: "meetingType",
            type: "string",
        },
        {
            name: "originalStartDate",
            baseName: "originalStartDate",
            type: "Date",
        },
        {
            name: "overrideFlags",
            baseName: "overrideFlags",
            type: "Array<string>",
        },
        {
            name: "reminderDelta",
            baseName: "reminderDelta",
            type: "number",
        },
        {
            name: "reminderSet",
            baseName: "reminderSet",
            type: "boolean",
        },
        {
            name: "startDateTime",
            baseName: "startDateTime",
            type: "Date",
        },
        {
            name: "subject",
            baseName: "subject",
            type: "string",
        },
        {
            name: "subType",
            baseName: "subType",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarExceptionInfoDto.attributeTypeMap;
    }

    /**
     * Attachments in the recurrence exception.             
     */
    public attachments: Array< model.MapiAttachmentDto >;
    /**
     * Body.             
     */
    public body: string;
    /**
     * Enumerates the mapi calendar possible busy status Enum, available values: Free, Tentative, Busy, OutOfOffice
     */
    public busyStatus: string;
    /**
     * End date.             
     */
    public endDateTime: Date;
    /**
     * Value of this field specifies whether the Exception Embedded Message object contains attachments.             
     */
    public hasAttachment: boolean;
    /**
     * Location.             
     */
    public location: string;
    /**
     * Enumerates the appointment state Enum, available values: Meeting, Received, Canceled
     */
    public meetingType: string;
    /**
     * Original start date.             
     */
    public originalStartDate: Date;
    /**
     * Override flags.              Items: Specifies what data in the MapiCalendarOverride structure has a value different from the recurring series. Enum, available values: Subject, MeetingType, ReminderDelta, Reminder, Location, BusyStatus, Attachment, Subtype, AppointmentColor, ExceptionalBody
     */
    public overrideFlags: Array<string>;
    /**
     * Reminder delta.             
     */
    public reminderDelta: number;
    /**
     * Value for the PidLidReminderSet property.             
     */
    public reminderSet: boolean;
    /**
     * Start date.             
     */
    public startDateTime: Date;
    /**
     * Subject.             
     */
    public subject: string;
    /**
     * SubType.             
     */
    public subType: number;

    /**
     * An exception specifies changes to an instance of a recurring series.             
     * @param attachments Attachments in the recurrence exception.             
     * @param body Body.             
     * @param busyStatus Enumerates the mapi calendar possible busy status Enum, available values: Free, Tentative, Busy, OutOfOffice
     * @param endDateTime End date.             
     * @param hasAttachment Value of this field specifies whether the Exception Embedded Message object contains attachments.             
     * @param location Location.             
     * @param meetingType Enumerates the appointment state Enum, available values: Meeting, Received, Canceled
     * @param originalStartDate Original start date.             
     * @param overrideFlags Override flags.             
     * @param reminderDelta Reminder delta.             
     * @param reminderSet Value for the PidLidReminderSet property.             
     * @param startDateTime Start date.             
     * @param subject Subject.             
     * @param subType SubType.             
     */
    public constructor(
        
        attachments?: Array< model.MapiAttachmentDto >,
        body?: string,
        busyStatus?: string,
        endDateTime?: Date,
        hasAttachment?: boolean,
        location?: string,
        meetingType?: string,
        originalStartDate?: Date,
        overrideFlags?: Array<string>,
        reminderDelta?: number,
        reminderSet?: boolean,
        startDateTime?: Date,
        subject?: string,
        subType?: number
    ) {
        
        this.attachments = attachments;
        this.body = body;
        this.busyStatus = busyStatus;
        this.endDateTime = endDateTime;
        this.hasAttachment = hasAttachment;
        this.location = location;
        this.meetingType = meetingType;
        this.originalStartDate = originalStartDate;
        this.overrideFlags = overrideFlags;
        this.reminderDelta = reminderDelta;
        this.reminderSet = reminderSet;
        this.startDateTime = startDateTime;
        this.subject = subject;
        this.subType = subType;
        
    }
}



