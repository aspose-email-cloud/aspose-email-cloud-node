
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
 * Refers to the group of properties that define physical address for a contact.             
 */
export class MapiContactPhysicalAddressDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isMailingAddress",
            baseName: "isMailingAddress",
            type: "boolean",
        },
        {
            name: "street",
            baseName: "street",
            type: "string",
        },
        {
            name: "city",
            baseName: "city",
            type: "string",
        },
        {
            name: "stateOrProvince",
            baseName: "stateOrProvince",
            type: "string",
        },
        {
            name: "postalCode",
            baseName: "postalCode",
            type: "string",
        },
        {
            name: "country",
            baseName: "country",
            type: "string",
        },
        {
            name: "countryCode",
            baseName: "countryCode",
            type: "string",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "postOfficeBox",
            baseName: "postOfficeBox",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactPhysicalAddressDto.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether this address is mailing address             
     */
    public isMailingAddress: boolean;
    /**
     * Specifies the street portion of the contact's address             
     */
    public street: string;
    /**
     * Specifies the city or locality portion of the contact's address             
     */
    public city: string;
    /**
     * Specifies the state or province portion of the contact's address             
     */
    public stateOrProvince: string;
    /**
     * Specifies the postal code (ZIP code) portion of the contact's address             
     */
    public postalCode: string;
    /**
     * Specifies the country or region portion of the contact's address             
     */
    public country: string;
    /**
     * Specifies the country code portion of the contact's address             
     */
    public countryCode: string;
    /**
     * Specifies the complete address of the contact's address             
     */
    public address: string;
    /**
     * Gets or sets the post office box             
     */
    public postOfficeBox: string;

    /**
     * Refers to the group of properties that define physical address for a contact.             
     * @param isMailingAddress Gets or sets a value indicating whether this address is mailing address             
     * @param street Specifies the street portion of the contact's address             
     * @param city Specifies the city or locality portion of the contact's address             
     * @param stateOrProvince Specifies the state or province portion of the contact's address             
     * @param postalCode Specifies the postal code (ZIP code) portion of the contact's address             
     * @param country Specifies the country or region portion of the contact's address             
     * @param countryCode Specifies the country code portion of the contact's address             
     * @param address Specifies the complete address of the contact's address             
     * @param postOfficeBox Gets or sets the post office box             
     */
    public constructor(
        
        isMailingAddress?: boolean,
        street?: string,
        city?: string,
        stateOrProvince?: string,
        postalCode?: string,
        country?: string,
        countryCode?: string,
        address?: string,
        postOfficeBox?: string
    ) {
        
        this.isMailingAddress = isMailingAddress;
        this.street = street;
        this.city = city;
        this.stateOrProvince = stateOrProvince;
        this.postalCode = postalCode;
        this.country = country;
        this.countryCode = countryCode;
        this.address = address;
        this.postOfficeBox = postOfficeBox;
        
    }
}



