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
 * Refers to the group of properties that define the e-mail address or fax address for a contact.             
 */
export class MapiContactElectronicAddressDto {

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
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "emailAddress",
            baseName: "emailAddress",
            type: "string",
        },
        {
            name: "faxNumber",
            baseName: "faxNumber",
            type: "string",
        },
        {
            name: "isEmpty",
            baseName: "isEmpty",
            type: "boolean",
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
        return MapiContactElectronicAddressDto.attributeTypeMap;
    }

    /**
     * Address type of an electronic address
     */
    public addressType: string;
    /**
     * User-readable display name for the e-mail address
     */
    public displayName: string;
    /**
     * E-mail address of the contact
     */
    public emailAddress: string;
    /**
     * Telephone number of the mail user's primary fax machine
     */
    public faxNumber: string;
    /**
     * Shows if MapiContactElectronicAddress is empty
     */
    public isEmpty: boolean;
    /**
     * SMTP e-mail address that corresponds to the e-mail address for the Contact object.
     */
    public originalDisplayName: string;

    /**
     * Refers to the group of properties that define the e-mail address or fax address for a contact.             
     * @param addressType Address type of an electronic address
     * @param displayName User-readable display name for the e-mail address
     * @param emailAddress E-mail address of the contact
     * @param faxNumber Telephone number of the mail user's primary fax machine
     * @param isEmpty Shows if MapiContactElectronicAddress is empty
     * @param originalDisplayName SMTP e-mail address that corresponds to the e-mail address for the Contact object.
     */
    public constructor(
        
        addressType?: string,
        displayName?: string,
        emailAddress?: string,
        faxNumber?: string,
        isEmpty?: boolean,
        originalDisplayName?: string
    ) {
        
        this.addressType = addressType;
        this.displayName = displayName;
        this.emailAddress = emailAddress;
        this.faxNumber = faxNumber;
        this.isEmpty = isEmpty;
        this.originalDisplayName = originalDisplayName;
        
    }
}

/**
 *  MapiContactElectronicAddressDto model builder
 */
export class MapiContactElectronicAddressDtoBuilder {
    private readonly model: MapiContactElectronicAddressDto;
    public constructor(model: MapiContactElectronicAddressDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiContactElectronicAddressDto {
        return this.model;
    }

    /**
    * Address type of an electronic address
    */
    public addressType(addressType: string): MapiContactElectronicAddressDtoBuilder {
        this.model.addressType = addressType;
        return this;
    }
    /**
    * User-readable display name for the e-mail address
    */
    public displayName(displayName: string): MapiContactElectronicAddressDtoBuilder {
        this.model.displayName = displayName;
        return this;
    }
    /**
    * E-mail address of the contact
    */
    public emailAddress(emailAddress: string): MapiContactElectronicAddressDtoBuilder {
        this.model.emailAddress = emailAddress;
        return this;
    }
    /**
    * Telephone number of the mail user's primary fax machine
    */
    public faxNumber(faxNumber: string): MapiContactElectronicAddressDtoBuilder {
        this.model.faxNumber = faxNumber;
        return this;
    }
    /**
    * Shows if MapiContactElectronicAddress is empty
    */
    public isEmpty(isEmpty: boolean): MapiContactElectronicAddressDtoBuilder {
        this.model.isEmpty = isEmpty;
        return this;
    }
    /**
    * SMTP e-mail address that corresponds to the e-mail address for the Contact object.
    */
    public originalDisplayName(originalDisplayName: string): MapiContactElectronicAddressDtoBuilder {
        this.model.originalDisplayName = originalDisplayName;
        return this;
    }
}

