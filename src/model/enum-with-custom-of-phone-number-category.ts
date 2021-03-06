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

export class EnumWithCustomOfPhoneNumberCategory {

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
        return EnumWithCustomOfPhoneNumberCategory.attributeTypeMap;
    }

    /**
     * Phone number category. Enum, available values: Custom, Home, Work, Office, Mobile, Fax, HomeFax, WorkFax, Pager, Car, Isdn, Telex, Callback, Radio, Company, TtyTdd, Assistant, Primary
     */
    public value: string;
    public description: string;

    /**
     * 
     * @param value Phone number category. Enum, available values: Custom, Home, Work, Office, Mobile, Fax, HomeFax, WorkFax, Pager, Car, Isdn, Telex, Callback, Radio, Company, TtyTdd, Assistant, Primary
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
 *  EnumWithCustomOfPhoneNumberCategory model builder
 */
export class EnumWithCustomOfPhoneNumberCategoryBuilder {
    private readonly model: EnumWithCustomOfPhoneNumberCategory;
    public constructor(model: EnumWithCustomOfPhoneNumberCategory) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): EnumWithCustomOfPhoneNumberCategory {
        return this.model;
    }

    /**
    * Phone number category. Enum, available values: Custom, Home, Work, Office, Mobile, Fax, HomeFax, WorkFax, Pager, Car, Isdn, Telex, Callback, Radio, Company, TtyTdd, Assistant, Primary
    */
    public value(value: string): EnumWithCustomOfPhoneNumberCategoryBuilder {
        this.model.value = value;
        return this;
    }
    public description(description: string): EnumWithCustomOfPhoneNumberCategoryBuilder {
        this.model.description = description;
        return this;
    }
}

