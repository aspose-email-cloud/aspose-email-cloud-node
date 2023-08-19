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

/**
 * Email message represented as MAPI object.             
 */
export class MailMessageMapi extends model.MailMessageBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "MapiMessageDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MailMessageMapi.attributeTypeMap);
    }

    /**
     * Email message object.             
     */
    public value: model.MapiMessageDto;

    /**
     * Email message represented as MAPI object.             
     * @param value Email message object.             
     */
    public constructor(
        
        //,
        value?: model.MapiMessageDto
    ) {
        super();
        this.value = value;
        
    }
}

/**
 *  MailMessageMapi model builder
 */
export class MailMessageMapiBuilder {
    private readonly model: MailMessageMapi;
    public constructor(model: MailMessageMapi) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MailMessageMapi {
        return this.model;
    }

    /**
    * Email message object.             
    */
    public value(value: model.MapiMessageDto): MailMessageMapiBuilder {
        this.model.value = value;
        return this;
    }
}

