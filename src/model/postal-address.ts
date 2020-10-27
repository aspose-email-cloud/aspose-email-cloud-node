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
 * A postal address             
 */
export class PostalAddress {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfPostalAddressCategory",
        },
        {
            name: "city",
            baseName: "city",
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
            name: "isMailingAddress",
            baseName: "isMailingAddress",
            type: "boolean",
        },
        {
            name: "postalCode",
            baseName: "postalCode",
            type: "string",
        },
        {
            name: "postOfficeBox",
            baseName: "postOfficeBox",
            type: "string",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        },
        {
            name: "stateOrProvince",
            baseName: "stateOrProvince",
            type: "string",
        },
        {
            name: "street",
            baseName: "street",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PostalAddress.attributeTypeMap;
    }

    /**
     * Address.             
     */
    public address: string;
    /**
     * Address category.             
     */
    public category: model.EnumWithCustomOfPostalAddressCategory;
    /**
     * Address's city.             
     */
    public city: string;
    /**
     * Address's country.             
     */
    public country: string;
    /**
     * Country code.             
     */
    public countryCode: string;
    /**
     * Defines whether address may be used for mailing.             
     */
    public isMailingAddress: boolean;
    /**
     * Postal code.             
     */
    public postalCode: string;
    /**
     * Post Office box.             
     */
    public postOfficeBox: string;
    /**
     * Defines whether postal address is preferred.             
     */
    public preferred: boolean;
    /**
     * Address's region.             
     */
    public stateOrProvince: string;
    /**
     * Address's street.             
     */
    public street: string;

    /**
     * A postal address             
     * @param address Address.             
     * @param category Address category.             
     * @param city Address's city.             
     * @param country Address's country.             
     * @param countryCode Country code.             
     * @param isMailingAddress Defines whether address may be used for mailing.             
     * @param postalCode Postal code.             
     * @param postOfficeBox Post Office box.             
     * @param preferred Defines whether postal address is preferred.             
     * @param stateOrProvince Address's region.             
     * @param street Address's street.             
     */
    public constructor(
        
        address?: string,
        category?: model.EnumWithCustomOfPostalAddressCategory,
        city?: string,
        country?: string,
        countryCode?: string,
        isMailingAddress?: boolean,
        postalCode?: string,
        postOfficeBox?: string,
        preferred?: boolean,
        stateOrProvince?: string,
        street?: string
    ) {
        
        this.address = address;
        this.category = category;
        this.city = city;
        this.country = country;
        this.countryCode = countryCode;
        this.isMailingAddress = isMailingAddress;
        this.postalCode = postalCode;
        this.postOfficeBox = postOfficeBox;
        this.preferred = preferred;
        this.stateOrProvince = stateOrProvince;
        this.street = street;
        
    }
}

/**
 *  PostalAddress model builder
 */
export class PostalAddressBuilder {
    private readonly model: PostalAddress;
    public constructor(model: PostalAddress) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): PostalAddress {
        return this.model;
    }

    /**
    * Address.             
    */
    public address(address: string): PostalAddressBuilder {
        this.model.address = address;
        return this;
    }
    /**
    * Address category.             
    */
    public category(category: model.EnumWithCustomOfPostalAddressCategory): PostalAddressBuilder {
        this.model.category = category;
        return this;
    }
    /**
    * Address's city.             
    */
    public city(city: string): PostalAddressBuilder {
        this.model.city = city;
        return this;
    }
    /**
    * Address's country.             
    */
    public country(country: string): PostalAddressBuilder {
        this.model.country = country;
        return this;
    }
    /**
    * Country code.             
    */
    public countryCode(countryCode: string): PostalAddressBuilder {
        this.model.countryCode = countryCode;
        return this;
    }
    /**
    * Defines whether address may be used for mailing.             
    */
    public isMailingAddress(isMailingAddress: boolean): PostalAddressBuilder {
        this.model.isMailingAddress = isMailingAddress;
        return this;
    }
    /**
    * Postal code.             
    */
    public postalCode(postalCode: string): PostalAddressBuilder {
        this.model.postalCode = postalCode;
        return this;
    }
    /**
    * Post Office box.             
    */
    public postOfficeBox(postOfficeBox: string): PostalAddressBuilder {
        this.model.postOfficeBox = postOfficeBox;
        return this;
    }
    /**
    * Defines whether postal address is preferred.             
    */
    public preferred(preferred: boolean): PostalAddressBuilder {
        this.model.preferred = preferred;
        return this;
    }
    /**
    * Address's region.             
    */
    public stateOrProvince(stateOrProvince: string): PostalAddressBuilder {
        this.model.stateOrProvince = stateOrProvince;
        return this;
    }
    /**
    * Address's street.             
    */
    public street(street: string): PostalAddressBuilder {
        this.model.street = street;
        return this;
    }
}

