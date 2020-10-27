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
 * Refers to the group of properties that define the e-mail address or fax address.             
 */
export class MapiElectronicAddressDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "addressType",
            baseName: "addressType",
            type: "string",
        },
        {
            name: "emailAddress",
            baseName: "emailAddress",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "faxNumber",
            baseName: "faxNumber",
            type: "string",
        },
        {
            name: "originalDisplayName",
            baseName: "originalDisplayName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiElectronicAddressDto.attributeTypeMap;
    }

    /**
     * Address type.             
     */
    public addressType: string;
    /**
     * Email address.             
     */
    public emailAddress: string;
    /**
     * User-readable display name for the e-mail address.             
     */
    public displayName: string;
    /**
     * Telephone number of the mail user's primary fax machine.             
     */
    public faxNumber: string;
    /**
     * SMTP e-mail address that  corresponds to the e-mail address.             
     */
    public originalDisplayName: string;

    /**
     * Refers to the group of properties that define the e-mail address or fax address.             
     * @param addressType Address type.             
     * @param emailAddress Email address.             
     * @param displayName User-readable display name for the e-mail address.             
     * @param faxNumber Telephone number of the mail user's primary fax machine.             
     * @param originalDisplayName SMTP e-mail address that  corresponds to the e-mail address.             
     */
    public constructor(
        
        addressType?: string,
        emailAddress?: string,
        displayName?: string,
        faxNumber?: string,
        originalDisplayName?: string
    ) {
        
        this.addressType = addressType;
        this.emailAddress = emailAddress;
        this.displayName = displayName;
        this.faxNumber = faxNumber;
        this.originalDisplayName = originalDisplayName;
        
    }
}



