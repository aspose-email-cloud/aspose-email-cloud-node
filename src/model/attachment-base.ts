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
 * AttachmentBase class             
 */
export class AttachmentBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "base64Data",
            baseName: "base64Data",
            type: "string",
        },
        {
            name: "contentId",
            baseName: "contentId",
            type: "string",
        },
        {
            name: "contentType",
            baseName: "contentType",
            type: "ContentType",
        },
        {
            name: "headers",
            baseName: "headers",
            type: "{ [key: string]: string; }",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AttachmentBase.attributeTypeMap;
    }

    /**
     * Attachment file content as Base64 string.             
     */
    public base64Data: string;
    /**
     * Attachment content id             
     */
    public contentId: string;
    /**
     * Content type             
     */
    public contentType: model.ContentType;
    /**
     * Attachment headers.             
     */
    public headers: { [key: string]: string; };

    /**
     * AttachmentBase class             
     * @param base64Data Attachment file content as Base64 string.             
     * @param contentId Attachment content id             
     * @param contentType Content type             
     * @param headers Attachment headers.             
     */
    public constructor(
        
        base64Data?: string,
        contentId?: string,
        contentType?: model.ContentType,
        headers?: { [key: string]: string; }
    ) {
        
        this.base64Data = base64Data;
        this.contentId = contentId;
        this.contentType = contentType;
        this.headers = headers;
        
    }
}

/**
 *  AttachmentBase model builder
 */
export class AttachmentBaseBuilder {
    private readonly model: AttachmentBase;
    public constructor(model: AttachmentBase) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AttachmentBase {
        return this.model;
    }

    /**
    * Attachment file content as Base64 string.             
    */
    public base64Data(base64Data: string): AttachmentBaseBuilder {
        this.model.base64Data = base64Data;
        return this;
    }
    /**
    * Attachment content id             
    */
    public contentId(contentId: string): AttachmentBaseBuilder {
        this.model.contentId = contentId;
        return this;
    }
    /**
    * Content type             
    */
    public contentType(contentType: model.ContentType): AttachmentBaseBuilder {
        this.model.contentType = contentType;
        return this;
    }
    /**
    * Attachment headers.             
    */
    public headers(headers: { [key: string]: string; }): AttachmentBaseBuilder {
        this.model.headers = headers;
        return this;
    }
}

