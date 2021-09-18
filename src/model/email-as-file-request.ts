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
 * Convert email model to file request.             
 */
export class EmailAsFileRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "format",
            type: "string",
        },
        {
            name: "value",
            baseName: "value",
            type: "EmailDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailAsFileRequest.attributeTypeMap;
    }

    /**
     * Email document format./nEnum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;
    /**
     * Email model.             
     */
    public value: model.EmailDto;

    /**
     * Convert email model to file request.             
     * @param format Email document format./nEnum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param value Email model.             
     */
    public constructor(
        
        format?: string,
        value?: model.EmailDto
    ) {
        
        this.format = format;
        this.value = value;
        
    }
}

/**
 *  EmailAsFileRequest model builder
 */
export class EmailAsFileRequestBuilder {
    private readonly model: EmailAsFileRequest;
    public constructor(model: EmailAsFileRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): EmailAsFileRequest {
        return this.model;
    }

    /**
    * Email document format./nEnum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
    */
    public format(format: string): EmailAsFileRequestBuilder {
        this.model.format = format;
        return this;
    }
    /**
    * Email model.             
    */
    public value(value: model.EmailDto): EmailAsFileRequestBuilder {
        this.model.value = value;
        return this;
    }
}

