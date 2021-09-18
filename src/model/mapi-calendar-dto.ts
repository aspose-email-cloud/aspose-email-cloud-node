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
 * Represents the mapi calendar object             
 */
export class MapiCalendarDto extends model.MapiMessageItemBaseDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "appointmentCounterProposal",
            baseName: "appointmentCounterProposal",
            type: "boolean",
        },
        {
            name: "attendees",
            baseName: "attendees",
            type: "MapiCalendarAttendeesDto",
        },
        {
            name: "busyStatus",
            baseName: "busyStatus",
            type: "string",
        },
        {
            name: "clientIntent",
            baseName: "clientIntent",
            type: "Array<string>",
        },
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        },
        {
            name: "endDateTimeZone",
            baseName: "endDateTimeZone",
            type: "MapiCalendarTimeZoneDto",
        },
        {
            name: "isAllDay",
            baseName: "isAllDay",
            type: "boolean",
        },
        {
            name: "keyWords",
            baseName: "keyWords",
            type: "string",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "recurrence",
            baseName: "recurrence",
            type: "MapiCalendarEventRecurrenceDto",
        },
        {
            name: "reminderDelta",
            baseName: "reminderDelta",
            type: "number",
        },
        {
            name: "reminderFileParameter",
            baseName: "reminderFileParameter",
            type: "string",
        },
        {
            name: "reminderSet",
            baseName: "reminderSet",
            type: "boolean",
        },
        {
            name: "sequence",
            baseName: "sequence",
            type: "number",
        },
        {
            name: "startDate",
            baseName: "startDate",
            type: "Date",
        },
        {
            name: "startDateTimeZone",
            baseName: "startDateTimeZone",
            type: "MapiCalendarTimeZoneDto",
        },
        {
            name: "uid",
            baseName: "uid",
            type: "string",
        },
        {
            name: "organizer",
            baseName: "organizer",
            type: "MapiElectronicAddressDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiCalendarDto.attributeTypeMap);
    }

    /**
     * Value indicating whether a Meeting Response object is a counter proposal.             
     */
    public appointmentCounterProposal: boolean;
    /**
     * Attendees             
     */
    public attendees: model.MapiCalendarAttendeesDto;
    /**
     * Enumerates the mapi calendar possible busy status. Enum, available values: Free, Tentative, Busy, OutOfOffice
     */
    public busyStatus: string;
    /**
     * Actions the user has taken on this Meeting object.              Items: Enumerates the actions the user can taken on the Meeting object. Enum, available values: Manager, Delegate, DeletedWithNoResponse, DeletedExceptionWithNoResponse, RespondedTentative, RespondedAccept, RespondedDecline, ModifiedStartTime, ModifiedEndTime, ModifiedLocation, RespondedExceptionDecline, Canceled, ExceptionCanceled
     */
    public clientIntent: Array<string>;
    /**
     * End date and time of the event. If the date is not set, default value for DateTime is returned.             
     */
    public endDate: Date;
    /**
     * Time zone information that indicates the time zone of the EndDate property.             
     */
    public endDateTimeZone: model.MapiCalendarTimeZoneDto;
    /**
     * Value indicating whether the event is an all-day event.             
     */
    public isAllDay: boolean;
    /**
     * Categories of the calendar object.             
     */
    public keyWords: string;
    /**
     * Location of the event.             
     */
    public location: string;
    /**
     * Recurrence properties.             
     */
    public recurrence: model.MapiCalendarEventRecurrenceDto;
    /**
     * Interval, in minutes, between the time at which the reminder first becomes overdue and the start time of the Calendar object.             
     */
    public reminderDelta: number;
    /**
     * Full path of the sound that a client SHOULD play when the reminder becomes overdue.             
     */
    public reminderFileParameter: string;
    /**
     * Value indicating whether a reminder is set on the object.             
     */
    public reminderSet: boolean;
    /**
     * Sequence number.             
     */
    public sequence: number;
    /**
     * Start date and time of the event. If the date is not set, default value for DateTime is returned.             
     */
    public startDate: Date;
    /**
     * Time zone information that indicates the time zone of the StartDate property.             
     */
    public startDateTimeZone: model.MapiCalendarTimeZoneDto;
    /**
     * Unique identifier.             
     */
    public uid: string;
    /**
     * Organizer             
     */
    public organizer: model.MapiElectronicAddressDto;

    /**
     * Represents the mapi calendar object             
     * @param attachments Message item attachments.             
     * @param billing Billing information associated with an item.             
     * @param body Message text.             
     * @param bodyHtml Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
     * @param bodyRtf RTF formatted message text.             
     * @param bodyType The content type of message body. Enum, available values: PlainText, Html, Rtf
     * @param categories Contains keywords or categories for the message object.             
     * @param companies Contains the names of the companies that are associated with an item.             
     * @param itemId The item id, uses with a server.             
     * @param messageClass Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
     * @param mileage Contains the mileage information that is associated with an item.             
     * @param recipients Recipients of the message.             
     * @param sensitivity Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential
     * @param subject Subject of the message.             
     * @param subjectPrefix Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
     * @param properties List of MAPI properties             
     * @param appointmentCounterProposal Value indicating whether a Meeting Response object is a counter proposal.             
     * @param attendees Attendees             
     * @param busyStatus Enumerates the mapi calendar possible busy status. Enum, available values: Free, Tentative, Busy, OutOfOffice
     * @param clientIntent Actions the user has taken on this Meeting object.             
     * @param endDate End date and time of the event. If the date is not set, default value for DateTime is returned.             
     * @param endDateTimeZone Time zone information that indicates the time zone of the EndDate property.             
     * @param isAllDay Value indicating whether the event is an all-day event.             
     * @param keyWords Categories of the calendar object.             
     * @param location Location of the event.             
     * @param recurrence Recurrence properties.             
     * @param reminderDelta Interval, in minutes, between the time at which the reminder first becomes overdue and the start time of the Calendar object.             
     * @param reminderFileParameter Full path of the sound that a client SHOULD play when the reminder becomes overdue.             
     * @param reminderSet Value indicating whether a reminder is set on the object.             
     * @param sequence Sequence number.             
     * @param startDate Start date and time of the event. If the date is not set, default value for DateTime is returned.             
     * @param startDateTimeZone Time zone information that indicates the time zone of the StartDate property.             
     * @param uid Unique identifier.             
     * @param organizer Organizer             
     */
    public constructor(
        
        attachments?: Array< model.MapiAttachmentDto >,
        billing?: string,
        body?: string,
        bodyHtml?: string,
        bodyRtf?: string,
        bodyType?: string,
        categories?: Array<string>,
        companies?: Array<string>,
        itemId?: string,
        messageClass?: string,
        mileage?: string,
        recipients?: Array< model.MapiRecipientDto >,
        sensitivity?: string,
        subject?: string,
        subjectPrefix?: string,
        properties?: Array< model.MapiPropertyDto >
        ,
        appointmentCounterProposal?: boolean,
        attendees?: model.MapiCalendarAttendeesDto,
        busyStatus?: string,
        clientIntent?: Array<string>,
        endDate?: Date,
        endDateTimeZone?: model.MapiCalendarTimeZoneDto,
        isAllDay?: boolean,
        keyWords?: string,
        location?: string,
        recurrence?: model.MapiCalendarEventRecurrenceDto,
        reminderDelta?: number,
        reminderFileParameter?: string,
        reminderSet?: boolean,
        sequence?: number,
        startDate?: Date,
        startDateTimeZone?: model.MapiCalendarTimeZoneDto,
        uid?: string,
        organizer?: model.MapiElectronicAddressDto
    ) {
        super();
        this.attachments = attachments;
        this.billing = billing;
        this.body = body;
        this.bodyHtml = bodyHtml;
        this.bodyRtf = bodyRtf;
        this.bodyType = bodyType;
        this.categories = categories;
        this.companies = companies;
        this.itemId = itemId;
        this.messageClass = messageClass;
        this.mileage = mileage;
        this.recipients = recipients;
        this.sensitivity = sensitivity;
        this.subject = subject;
        this.subjectPrefix = subjectPrefix;
        this.properties = properties;
        this.appointmentCounterProposal = appointmentCounterProposal;
        this.attendees = attendees;
        this.busyStatus = busyStatus;
        this.clientIntent = clientIntent;
        this.endDate = endDate;
        this.endDateTimeZone = endDateTimeZone;
        this.isAllDay = isAllDay;
        this.keyWords = keyWords;
        this.location = location;
        this.recurrence = recurrence;
        this.reminderDelta = reminderDelta;
        this.reminderFileParameter = reminderFileParameter;
        this.reminderSet = reminderSet;
        this.sequence = sequence;
        this.startDate = startDate;
        this.startDateTimeZone = startDateTimeZone;
        this.uid = uid;
        this.organizer = organizer;
        
    }
}

/**
 *  MapiCalendarDto model builder
 */
export class MapiCalendarDtoBuilder {
    private readonly model: MapiCalendarDto;
    public constructor(model: MapiCalendarDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiCalendarDto {
        return this.model;
    }

    /**
    * Message item attachments.             
    */
    public attachments(attachments: Array< model.MapiAttachmentDto >): MapiCalendarDtoBuilder {
        this.model.attachments = attachments;
        return this;
    }
    /**
    * Billing information associated with an item.             
    */
    public billing(billing: string): MapiCalendarDtoBuilder {
        this.model.billing = billing;
        return this;
    }
    /**
    * Message text.             
    */
    public body(body: string): MapiCalendarDtoBuilder {
        this.model.body = body;
        return this;
    }
    /**
    * Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
    */
    public bodyHtml(bodyHtml: string): MapiCalendarDtoBuilder {
        this.model.bodyHtml = bodyHtml;
        return this;
    }
    /**
    * RTF formatted message text.             
    */
    public bodyRtf(bodyRtf: string): MapiCalendarDtoBuilder {
        this.model.bodyRtf = bodyRtf;
        return this;
    }
    /**
    * The content type of message body. Enum, available values: PlainText, Html, Rtf
    */
    public bodyType(bodyType: string): MapiCalendarDtoBuilder {
        this.model.bodyType = bodyType;
        return this;
    }
    /**
    * Contains keywords or categories for the message object.             
    */
    public categories(categories: Array<string>): MapiCalendarDtoBuilder {
        this.model.categories = categories;
        return this;
    }
    /**
    * Contains the names of the companies that are associated with an item.             
    */
    public companies(companies: Array<string>): MapiCalendarDtoBuilder {
        this.model.companies = companies;
        return this;
    }
    /**
    * The item id, uses with a server.             
    */
    public itemId(itemId: string): MapiCalendarDtoBuilder {
        this.model.itemId = itemId;
        return this;
    }
    /**
    * Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
    */
    public messageClass(messageClass: string): MapiCalendarDtoBuilder {
        this.model.messageClass = messageClass;
        return this;
    }
    /**
    * Contains the mileage information that is associated with an item.             
    */
    public mileage(mileage: string): MapiCalendarDtoBuilder {
        this.model.mileage = mileage;
        return this;
    }
    /**
    * Recipients of the message.             
    */
    public recipients(recipients: Array< model.MapiRecipientDto >): MapiCalendarDtoBuilder {
        this.model.recipients = recipients;
        return this;
    }
    /**
    * Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential
    */
    public sensitivity(sensitivity: string): MapiCalendarDtoBuilder {
        this.model.sensitivity = sensitivity;
        return this;
    }
    /**
    * Subject of the message.             
    */
    public subject(subject: string): MapiCalendarDtoBuilder {
        this.model.subject = subject;
        return this;
    }
    /**
    * Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
    */
    public subjectPrefix(subjectPrefix: string): MapiCalendarDtoBuilder {
        this.model.subjectPrefix = subjectPrefix;
        return this;
    }
    /**
    * List of MAPI properties             
    */
    public properties(properties: Array< model.MapiPropertyDto >): MapiCalendarDtoBuilder {
        this.model.properties = properties;
        return this;
    }
    /**
    * Value indicating whether a Meeting Response object is a counter proposal.             
    */
    public appointmentCounterProposal(appointmentCounterProposal: boolean): MapiCalendarDtoBuilder {
        this.model.appointmentCounterProposal = appointmentCounterProposal;
        return this;
    }
    /**
    * Attendees             
    */
    public attendees(attendees: model.MapiCalendarAttendeesDto): MapiCalendarDtoBuilder {
        this.model.attendees = attendees;
        return this;
    }
    /**
    * Enumerates the mapi calendar possible busy status. Enum, available values: Free, Tentative, Busy, OutOfOffice
    */
    public busyStatus(busyStatus: string): MapiCalendarDtoBuilder {
        this.model.busyStatus = busyStatus;
        return this;
    }
    /**
    * Actions the user has taken on this Meeting object.              Items: Enumerates the actions the user can taken on the Meeting object. Enum, available values: Manager, Delegate, DeletedWithNoResponse, DeletedExceptionWithNoResponse, RespondedTentative, RespondedAccept, RespondedDecline, ModifiedStartTime, ModifiedEndTime, ModifiedLocation, RespondedExceptionDecline, Canceled, ExceptionCanceled
    */
    public clientIntent(clientIntent: Array<string>): MapiCalendarDtoBuilder {
        this.model.clientIntent = clientIntent;
        return this;
    }
    /**
    * End date and time of the event. If the date is not set, default value for DateTime is returned.             
    */
    public endDate(endDate: Date): MapiCalendarDtoBuilder {
        this.model.endDate = endDate;
        return this;
    }
    /**
    * Time zone information that indicates the time zone of the EndDate property.             
    */
    public endDateTimeZone(endDateTimeZone: model.MapiCalendarTimeZoneDto): MapiCalendarDtoBuilder {
        this.model.endDateTimeZone = endDateTimeZone;
        return this;
    }
    /**
    * Value indicating whether the event is an all-day event.             
    */
    public isAllDay(isAllDay: boolean): MapiCalendarDtoBuilder {
        this.model.isAllDay = isAllDay;
        return this;
    }
    /**
    * Categories of the calendar object.             
    */
    public keyWords(keyWords: string): MapiCalendarDtoBuilder {
        this.model.keyWords = keyWords;
        return this;
    }
    /**
    * Location of the event.             
    */
    public location(location: string): MapiCalendarDtoBuilder {
        this.model.location = location;
        return this;
    }
    /**
    * Recurrence properties.             
    */
    public recurrence(recurrence: model.MapiCalendarEventRecurrenceDto): MapiCalendarDtoBuilder {
        this.model.recurrence = recurrence;
        return this;
    }
    /**
    * Interval, in minutes, between the time at which the reminder first becomes overdue and the start time of the Calendar object.             
    */
    public reminderDelta(reminderDelta: number): MapiCalendarDtoBuilder {
        this.model.reminderDelta = reminderDelta;
        return this;
    }
    /**
    * Full path of the sound that a client SHOULD play when the reminder becomes overdue.             
    */
    public reminderFileParameter(reminderFileParameter: string): MapiCalendarDtoBuilder {
        this.model.reminderFileParameter = reminderFileParameter;
        return this;
    }
    /**
    * Value indicating whether a reminder is set on the object.             
    */
    public reminderSet(reminderSet: boolean): MapiCalendarDtoBuilder {
        this.model.reminderSet = reminderSet;
        return this;
    }
    /**
    * Sequence number.             
    */
    public sequence(sequence: number): MapiCalendarDtoBuilder {
        this.model.sequence = sequence;
        return this;
    }
    /**
    * Start date and time of the event. If the date is not set, default value for DateTime is returned.             
    */
    public startDate(startDate: Date): MapiCalendarDtoBuilder {
        this.model.startDate = startDate;
        return this;
    }
    /**
    * Time zone information that indicates the time zone of the StartDate property.             
    */
    public startDateTimeZone(startDateTimeZone: model.MapiCalendarTimeZoneDto): MapiCalendarDtoBuilder {
        this.model.startDateTimeZone = startDateTimeZone;
        return this;
    }
    /**
    * Unique identifier.             
    */
    public uid(uid: string): MapiCalendarDtoBuilder {
        this.model.uid = uid;
        return this;
    }
    /**
    * Organizer             
    */
    public organizer(organizer: model.MapiElectronicAddressDto): MapiCalendarDtoBuilder {
        this.model.organizer = organizer;
        return this;
    }
}

