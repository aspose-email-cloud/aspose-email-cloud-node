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

export class EnumWithCustomOfEmailAddressCategory {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EnumWithCustomOfEmailAddressCategory.attributeTypeMap;
    }

    /**
     * Represents category for an email address. Enum, available values: Home, Work, Custom, Email1, Email2, Email3
     */
    public value: string;
    public description: string;

    /**
     * 
     * @param value Represents category for an email address. Enum, available values: Home, Work, Custom, Email1, Email2, Email3
     * @param description 
     */
    public constructor(
        
        value?: string,
        description?: string
    ) {
        
        this.value = value;
        this.description = description;
        
    }
}

/**
 *  EnumWithCustomOfEmailAddressCategory model builder
 */
export class EnumWithCustomOfEmailAddressCategoryBuilder {
    private readonly model: EnumWithCustomOfEmailAddressCategory;
    public constructor(model: EnumWithCustomOfEmailAddressCategory) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): EnumWithCustomOfEmailAddressCategory {
        return this.model;
    }

    /**
    * Represents category for an email address. Enum, available values: Home, Work, Custom, Email1, Email2, Email3
    */
    public value(value: string): EnumWithCustomOfEmailAddressCategoryBuilder {
        this.model.value = value;
        return this;
    }
    public description(description: string): EnumWithCustomOfEmailAddressCategoryBuilder {
        this.model.description = description;
        return this;
    }
}

