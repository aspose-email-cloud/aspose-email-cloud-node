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
 * Convert contact model to file request.             
 */
export class ContactAsFileRequest {

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
            type: "ContactDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContactAsFileRequest.attributeTypeMap;
    }

    /**
     * Enumerates contact formats. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;
    /**
     * Contact model.             
     */
    public value: model.ContactDto;

    /**
     * Convert contact model to file request.             
     * @param format Enumerates contact formats. Enum, available values: VCard, WebDav, Msg
     * @param value Contact model.             
     */
    public constructor(
        
        format?: string,
        value?: model.ContactDto
    ) {
        
        this.format = format;
        this.value = value;
        
    }
}

/**
 *  ContactAsFileRequest model builder
 */
export class ContactAsFileRequestBuilder {
    private readonly model: ContactAsFileRequest;
    public constructor(model: ContactAsFileRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ContactAsFileRequest {
        return this.model;
    }

    /**
    * Enumerates contact formats. Enum, available values: VCard, WebDav, Msg
    */
    public format(format: string): ContactAsFileRequestBuilder {
        this.model.format = format;
        return this;
    }
    /**
    * Contact model.             
    */
    public value(value: model.ContactDto): ContactAsFileRequestBuilder {
        this.model.value = value;
        return this;
    }
}

