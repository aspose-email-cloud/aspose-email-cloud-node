
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
 * Email address.             
 */
export class EmailAddress {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfEmailAddressCategory",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        },
        {
            name: "routingType",
            baseName: "routingType",
            type: "string",
        },
        {
            name: "address",
            baseName: "address",
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
        return EmailAddress.attributeTypeMap;
    }

    /**
     * Address category.             
     */
    public category: model.EnumWithCustomOfEmailAddressCategory;
    
    /**
     * Display name.             
     */
    public displayName: string;
    
    /**
     * Defines whether email address is preferred.             
     */
    public preferred: boolean;
    
    /**
     * A routing type for an email.             
     */
    public routingType: string;
    
    /**
     * Email address.             
     */
    public address: string;
    
    /**
     * The original e-mail address string             
     */
    public originalAddressString: string;
    

    /**
     * Email address.             
     * @param category Address category.             
     * @param displayName Display name.             
     * @param preferred Defines whether email address is preferred.             
     * @param routingType A routing type for an email.             
     * @param address Email address.             
     * @param originalAddressString The original e-mail address string             
     */
    public constructor(
        category?: model.EnumWithCustomOfEmailAddressCategory,
        displayName?: string,
        preferred?: boolean,
        routingType?: string,
        address?: string,
        originalAddressString?: string) {
        
        this.category = category;
        this.displayName = displayName;
        this.preferred = preferred;
        this.routingType = routingType;
        this.address = address;
        this.originalAddressString = originalAddressString;
    }
}

