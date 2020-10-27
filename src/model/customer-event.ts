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
 * Event.             
 */
export class CustomerEvent {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfEventCategory",
        },
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CustomerEvent.attributeTypeMap;
    }

    /**
     * Event category.             
     */
    public category: model.EnumWithCustomOfEventCategory;
    /**
     * Event date.             
     */
    public date: Date;

    /**
     * Event.             
     * @param category Event category.             
     * @param date Event date.             
     */
    public constructor(
        
        category?: model.EnumWithCustomOfEventCategory,
        date?: Date
    ) {
        
        this.category = category;
        this.date = date;
        
    }
}

/**
 *  CustomerEvent model builder
 */
export class CustomerEventBuilder {
    private readonly model: CustomerEvent;
    public constructor(model: CustomerEvent) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): CustomerEvent {
        return this.model;
    }

    /**
    * Event category.             
    */
    public category(category: model.EnumWithCustomOfEventCategory): CustomerEventBuilder {
        this.model.category = category;
        return this;
    }
    /**
    * Event date.             
    */
    public date(date: Date): CustomerEventBuilder {
        this.model.date = date;
        return this;
    }
}

