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
 * Email message represented as file, encoded to Base64 format.             
 */
export class MailMessageBase64 extends model.MailMessageBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "valueBase64",
            baseName: "valueBase64",
            type: "string",
        },
        {
            name: "format",
            baseName: "format",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MailMessageBase64.attributeTypeMap);
    }

    /**
     * Email message file data encoded to Base64 string.             
     */
    public valueBase64: string;
    /**
     * Email document format./nEnum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Email message represented as file, encoded to Base64 format.             
     * @param valueBase64 Email message file data encoded to Base64 string.             
     * @param format Email document format./nEnum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public constructor(
        
        //,
        valueBase64?: string,
        format?: string
    ) {
        super();
        this.valueBase64 = valueBase64;
        this.format = format;
        
    }
}

/**
 *  MailMessageBase64 model builder
 */
export class MailMessageBase64Builder {
    private readonly model: MailMessageBase64;
    public constructor(model: MailMessageBase64) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MailMessageBase64 {
        return this.model;
    }

    /**
    * Email message file data encoded to Base64 string.             
    */
    public valueBase64(valueBase64: string): MailMessageBase64Builder {
        this.model.valueBase64 = valueBase64;
        return this;
    }
    /**
    * Email document format./nEnum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
    */
    public format(format: string): MailMessageBase64Builder {
        this.model.format = format;
        return this;
    }
}

