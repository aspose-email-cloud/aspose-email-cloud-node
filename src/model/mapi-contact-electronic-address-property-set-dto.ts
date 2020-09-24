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
 * Specify properties for up to three different e-mail addresses (Email1, Email2, and Email3) and three different fax addresses (Primary Fax, Business Fax, and Home Fax)             
 */
export class MapiContactElectronicAddressPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "businessFax",
            baseName: "businessFax",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "defaultEmailAddress",
            baseName: "defaultEmailAddress",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "email1",
            baseName: "email1",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "email2",
            baseName: "email2",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "email3",
            baseName: "email3",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "homeFax",
            baseName: "homeFax",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "isEmpty",
            baseName: "isEmpty",
            type: "boolean",
        },
        {
            name: "primaryFax",
            baseName: "primaryFax",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "useAutocomplete",
            baseName: "useAutocomplete",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactElectronicAddressPropertySetDto.attributeTypeMap;
    }

    /**
     * Refers to the group of properties that define the business fax address for a contact.
     */
    public businessFax: model.MapiContactElectronicAddressDto;
    /**
     * Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
     */
    public defaultEmailAddress: model.MapiContactElectronicAddressDto;
    /**
     * Refers to the group of properties that define the first e-mail address for a contact.             
     */
    public email1: model.MapiContactElectronicAddressDto;
    /**
     * Refers to the group of properties that define the second e-mail address for a contact.             
     */
    public email2: model.MapiContactElectronicAddressDto;
    /**
     * Refers to the group of properties that define the third e-mail address for a contact.             
     */
    public email3: model.MapiContactElectronicAddressDto;
    /**
     * Refers to the group of properties that define the home fax address for a contact.             
     */
    public homeFax: model.MapiContactElectronicAddressDto;
    /**
     * Shows if MapiContactElectronicAddressPropertySetDto is empty
     */
    public isEmpty: boolean;
    /**
     * Refers to the group of properties that define the primary fax address for a contact.             
     */
    public primaryFax: model.MapiContactElectronicAddressDto;
    /**
     * Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
     */
    public useAutocomplete: boolean;

    /**
     * Specify properties for up to three different e-mail addresses (Email1, Email2, and Email3) and three different fax addresses (Primary Fax, Business Fax, and Home Fax)             
     * @param businessFax Refers to the group of properties that define the business fax address for a contact.
     * @param defaultEmailAddress Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
     * @param email1 Refers to the group of properties that define the first e-mail address for a contact.             
     * @param email2 Refers to the group of properties that define the second e-mail address for a contact.             
     * @param email3 Refers to the group of properties that define the third e-mail address for a contact.             
     * @param homeFax Refers to the group of properties that define the home fax address for a contact.             
     * @param isEmpty Shows if MapiContactElectronicAddressPropertySetDto is empty
     * @param primaryFax Refers to the group of properties that define the primary fax address for a contact.             
     * @param useAutocomplete Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
     */
    public constructor(
        
        businessFax?: model.MapiContactElectronicAddressDto,
        defaultEmailAddress?: model.MapiContactElectronicAddressDto,
        email1?: model.MapiContactElectronicAddressDto,
        email2?: model.MapiContactElectronicAddressDto,
        email3?: model.MapiContactElectronicAddressDto,
        homeFax?: model.MapiContactElectronicAddressDto,
        isEmpty?: boolean,
        primaryFax?: model.MapiContactElectronicAddressDto,
        useAutocomplete?: boolean
    ) {
        
        this.businessFax = businessFax;
        this.defaultEmailAddress = defaultEmailAddress;
        this.email1 = email1;
        this.email2 = email2;
        this.email3 = email3;
        this.homeFax = homeFax;
        this.isEmpty = isEmpty;
        this.primaryFax = primaryFax;
        this.useAutocomplete = useAutocomplete;
        
    }
}

/**
 *  MapiContactElectronicAddressPropertySetDto model builder
 */
export class MapiContactElectronicAddressPropertySetDtoBuilder {
    private readonly model: MapiContactElectronicAddressPropertySetDto;
    public constructor(model: MapiContactElectronicAddressPropertySetDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiContactElectronicAddressPropertySetDto {
        return this.model;
    }

    /**
    * Refers to the group of properties that define the business fax address for a contact.
    */
    public businessFax(businessFax: model.MapiContactElectronicAddressDto): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.businessFax = businessFax;
        return this;
    }
    /**
    * Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
    */
    public defaultEmailAddress(defaultEmailAddress: model.MapiContactElectronicAddressDto): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.defaultEmailAddress = defaultEmailAddress;
        return this;
    }
    /**
    * Refers to the group of properties that define the first e-mail address for a contact.             
    */
    public email1(email1: model.MapiContactElectronicAddressDto): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.email1 = email1;
        return this;
    }
    /**
    * Refers to the group of properties that define the second e-mail address for a contact.             
    */
    public email2(email2: model.MapiContactElectronicAddressDto): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.email2 = email2;
        return this;
    }
    /**
    * Refers to the group of properties that define the third e-mail address for a contact.             
    */
    public email3(email3: model.MapiContactElectronicAddressDto): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.email3 = email3;
        return this;
    }
    /**
    * Refers to the group of properties that define the home fax address for a contact.             
    */
    public homeFax(homeFax: model.MapiContactElectronicAddressDto): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.homeFax = homeFax;
        return this;
    }
    /**
    * Shows if MapiContactElectronicAddressPropertySetDto is empty
    */
    public isEmpty(isEmpty: boolean): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.isEmpty = isEmpty;
        return this;
    }
    /**
    * Refers to the group of properties that define the primary fax address for a contact.             
    */
    public primaryFax(primaryFax: model.MapiContactElectronicAddressDto): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.primaryFax = primaryFax;
        return this;
    }
    /**
    * Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
    */
    public useAutocomplete(useAutocomplete: boolean): MapiContactElectronicAddressPropertySetDtoBuilder {
        this.model.useAutocomplete = useAutocomplete;
        return this;
    }
}

