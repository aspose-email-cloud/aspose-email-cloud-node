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
 * Mapi calendar attendees.             
 */
export class MapiCalendarAttendeesDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "appointmentRecipients",
            baseName: "appointmentRecipients",
            type: "Array<MapiRecipientDto>",
        },
        {
            name: "appointmentUnsendableRecipients",
            baseName: "appointmentUnsendableRecipients",
            type: "Array<MapiRecipientDto>",
        },
        {
            name: "notAllowPropose",
            baseName: "notAllowPropose",
            type: "boolean",
        },
        {
            name: "responseRequested",
            baseName: "responseRequested",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarAttendeesDto.attributeTypeMap;
    }

    /**
     * List of attendees.             
     */
    public appointmentRecipients: Array< model.MapiRecipientDto >;
    /**
     * List of unsendable attendees.             
     */
    public appointmentUnsendableRecipients: Array< model.MapiRecipientDto >;
    /**
     * Value indicating whether attendees are not allowed to propose a new date and/or time for the meeting.             
     */
    public notAllowPropose: boolean;
    /**
     * Value indicating whether a response is requested to a Message object.             
     */
    public responseRequested: boolean;

    /**
     * Mapi calendar attendees.             
     * @param appointmentRecipients List of attendees.             
     * @param appointmentUnsendableRecipients List of unsendable attendees.             
     * @param notAllowPropose Value indicating whether attendees are not allowed to propose a new date and/or time for the meeting.             
     * @param responseRequested Value indicating whether a response is requested to a Message object.             
     */
    public constructor(
        
        appointmentRecipients?: Array< model.MapiRecipientDto >,
        appointmentUnsendableRecipients?: Array< model.MapiRecipientDto >,
        notAllowPropose?: boolean,
        responseRequested?: boolean
    ) {
        
        this.appointmentRecipients = appointmentRecipients;
        this.appointmentUnsendableRecipients = appointmentUnsendableRecipients;
        this.notAllowPropose = notAllowPropose;
        this.responseRequested = responseRequested;
        
    }
}

/**
 *  MapiCalendarAttendeesDto model builder
 */
export class MapiCalendarAttendeesDtoBuilder {
    private readonly model: MapiCalendarAttendeesDto;
    public constructor(model: MapiCalendarAttendeesDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiCalendarAttendeesDto {
        return this.model;
    }

    /**
    * List of attendees.             
    */
    public appointmentRecipients(appointmentRecipients: Array< model.MapiRecipientDto >): MapiCalendarAttendeesDtoBuilder {
        this.model.appointmentRecipients = appointmentRecipients;
        return this;
    }
    /**
    * List of unsendable attendees.             
    */
    public appointmentUnsendableRecipients(appointmentUnsendableRecipients: Array< model.MapiRecipientDto >): MapiCalendarAttendeesDtoBuilder {
        this.model.appointmentUnsendableRecipients = appointmentUnsendableRecipients;
        return this;
    }
    /**
    * Value indicating whether attendees are not allowed to propose a new date and/or time for the meeting.             
    */
    public notAllowPropose(notAllowPropose: boolean): MapiCalendarAttendeesDtoBuilder {
        this.model.notAllowPropose = notAllowPropose;
        return this;
    }
    /**
    * Value indicating whether a response is requested to a Message object.             
    */
    public responseRequested(responseRequested: boolean): MapiCalendarAttendeesDtoBuilder {
        this.model.responseRequested = responseRequested;
        return this;
    }
}

