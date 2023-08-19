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
 * Defines an \"Attendee\" within a alarm.
 */
export class ReminderAttendee {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "address",
            baseName: "address",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReminderAttendee.attributeTypeMap;
    }

    /**
     * Contains the email address.
     */
    public address: string;

    /**
     * Defines an \"Attendee\" within a alarm.
     * @param address Contains the email address.
     */
    public constructor(
        
        address?: string
    ) {
        
        this.address = address;
        
    }
}

/**
 *  ReminderAttendee model builder
 */
export class ReminderAttendeeBuilder {
    private readonly model: ReminderAttendee;
    public constructor(model: ReminderAttendee) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ReminderAttendee {
        return this.model;
    }

    /**
    * Contains the email address.
    */
    public address(address: string): ReminderAttendeeBuilder {
        this.model.address = address;
        return this;
    }
}

