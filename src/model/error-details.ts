/*
* MIT License

* Copyright (c) 2018-2023 Aspose Pty Ltd. All rights reserved.

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
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
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
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    /**
     * Date
     */
    public date: Date;

    /**
     * The error details
     * @param requestId The request id
     * @param date Date
     */
    public constructor(
        
        requestId?: string,
        date?: Date
    ) {
        
        this.requestId = requestId;
        this.date = date;
        
    }
}

/**
 *  ErrorDetails model builder
 */
export class ErrorDetailsBuilder {
    private readonly model: ErrorDetails;
    public constructor(model: ErrorDetails) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ErrorDetails {
        return this.model;
    }

    /**
    * The request id
    */
    public requestId(requestId: string): ErrorDetailsBuilder {
        this.model.requestId = requestId;
        return this;
    }
    /**
    * Date
    */
    public date(date: Date): ErrorDetailsBuilder {
        this.model.date = date;
        return this;
    }
}

