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

export class EnumWithCustomOfInstantMessengerCategory {

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
        return EnumWithCustomOfInstantMessengerCategory.attributeTypeMap;
    }

    /**
     * Instant messenger address category. Enum, available values: GoogleTalk, Aim, Yahoo, Skype, Qq, Msn, Icq, Jabber, Custom, ImAddress1, ImAddress2, ImAddress3
     */
    public value: string;
    public description: string;

    /**
     * 
     * @param value Instant messenger address category. Enum, available values: GoogleTalk, Aim, Yahoo, Skype, Qq, Msn, Icq, Jabber, Custom, ImAddress1, ImAddress2, ImAddress3
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
 *  EnumWithCustomOfInstantMessengerCategory model builder
 */
export class EnumWithCustomOfInstantMessengerCategoryBuilder {
    private readonly model: EnumWithCustomOfInstantMessengerCategory;
    public constructor(model: EnumWithCustomOfInstantMessengerCategory) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): EnumWithCustomOfInstantMessengerCategory {
        return this.model;
    }

    /**
    * Instant messenger address category. Enum, available values: GoogleTalk, Aim, Yahoo, Skype, Qq, Msn, Icq, Jabber, Custom, ImAddress1, ImAddress2, ImAddress3
    */
    public value(value: string): EnumWithCustomOfInstantMessengerCategoryBuilder {
        this.model.value = value;
        return this;
    }
    public description(description: string): EnumWithCustomOfInstantMessengerCategoryBuilder {
        this.model.description = description;
        return this;
    }
}

