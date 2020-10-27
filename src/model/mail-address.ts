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
 * Represents the address of a message.
 */
export class MailAddress {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "participationStatus",
            baseName: "participationStatus",
            type: "string",
        },
        {
            name: "originalAddressString",
            baseName: "originalAddressString",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MailAddress.attributeTypeMap;
    }

    /**
     * Display name             
     */
    public displayName: string;
    /**
     * Address             
     */
    public address: string;
    /**
     * Identifies the participation status for the calendar user. Enum, available values: NeedsAction, Accepted, Declined, Tentative, Delegated
     */
    public participationStatus: string;
    /**
     * The original e-mail address string             
     */
    public originalAddressString: string;

    /**
     * Represents the address of a message.
     * @param displayName Display name             
     * @param address Address             
     * @param participationStatus Identifies the participation status for the calendar user. Enum, available values: NeedsAction, Accepted, Declined, Tentative, Delegated
     * @param originalAddressString The original e-mail address string             
     */
    public constructor(
        
        displayName?: string,
        address?: string,
        participationStatus?: string,
        originalAddressString?: string
    ) {
        
        this.displayName = displayName;
        this.address = address;
        this.participationStatus = participationStatus;
        this.originalAddressString = originalAddressString;
        
    }
}

/**
 *  MailAddress model builder
 */
export class MailAddressBuilder {
    private readonly model: MailAddress;
    public constructor(model: MailAddress) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MailAddress {
        return this.model;
    }

    /**
    * Display name             
    */
    public displayName(displayName: string): MailAddressBuilder {
        this.model.displayName = displayName;
        return this;
    }
    /**
    * Address             
    */
    public address(address: string): MailAddressBuilder {
        this.model.address = address;
        return this;
    }
    /**
    * Identifies the participation status for the calendar user. Enum, available values: NeedsAction, Accepted, Declined, Tentative, Delegated
    */
    public participationStatus(participationStatus: string): MailAddressBuilder {
        this.model.participationStatus = participationStatus;
        return this;
    }
    /**
    * The original e-mail address string             
    */
    public originalAddressString(originalAddressString: string): MailAddressBuilder {
        this.model.originalAddressString = originalAddressString;
        return this;
    }
}

