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
 * Instant messenger address.             
 */
export class InstantMessengerAddress {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfInstantMessengerCategory",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InstantMessengerAddress.attributeTypeMap;
    }

    /**
     * Address category.             
     */
    public category: model.EnumWithCustomOfInstantMessengerCategory;
    /**
     * Address.             
     */
    public address: string;
    /**
     * Determines whether this address is preferred.             
     */
    public preferred: boolean;

    /**
     * Instant messenger address.             
     * @param category Address category.             
     * @param address Address.             
     * @param preferred Determines whether this address is preferred.             
     */
    public constructor(
        
        category?: model.EnumWithCustomOfInstantMessengerCategory,
        address?: string,
        preferred?: boolean
    ) {
        
        this.category = category;
        this.address = address;
        this.preferred = preferred;
        
    }
}

/**
 *  InstantMessengerAddress model builder
 */
export class InstantMessengerAddressBuilder {
    private readonly model: InstantMessengerAddress;
    public constructor(model: InstantMessengerAddress) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): InstantMessengerAddress {
        return this.model;
    }

    /**
    * Address category.             
    */
    public category(category: model.EnumWithCustomOfInstantMessengerCategory): InstantMessengerAddressBuilder {
        this.model.category = category;
        return this;
    }
    /**
    * Address.             
    */
    public address(address: string): InstantMessengerAddressBuilder {
        this.model.address = address;
        return this;
    }
    /**
    * Determines whether this address is preferred.             
    */
    public preferred(preferred: boolean): InstantMessengerAddressBuilder {
        this.model.preferred = preferred;
        return this;
    }
}

