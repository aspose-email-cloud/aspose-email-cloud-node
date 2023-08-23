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
 * Represents a Content-Type header.             
 */
export class ContentType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "boundary",
            baseName: "boundary",
            type: "string",
        },
        {
            name: "charSet",
            baseName: "charSet",
            type: "string",
        },
        {
            name: "mediaType",
            baseName: "mediaType",
            type: "string",
        },
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "parameters",
            baseName: "parameters",
            type: "Array<ContentTypeParameter>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContentType.attributeTypeMap;
    }

    /**
     * The boundary parameter included in the Content-Type header.             
     */
    public boundary: string;
    /**
     * CharSet parameter.             
     */
    public charSet: string;
    /**
     * The internet media type.             
     */
    public mediaType: string;
    /**
     * Name parameter.             
     */
    public name: string;
    /**
     * Full list of parameters             
     */
    public parameters: Array< model.ContentTypeParameter >;

    /**
     * Represents a Content-Type header.             
     * @param boundary The boundary parameter included in the Content-Type header.             
     * @param charSet CharSet parameter.             
     * @param mediaType The internet media type.             
     * @param name Name parameter.             
     * @param parameters Full list of parameters             
     */
    public constructor(
        
        boundary?: string,
        charSet?: string,
        mediaType?: string,
        name?: string,
        parameters?: Array< model.ContentTypeParameter >
    ) {
        
        this.boundary = boundary;
        this.charSet = charSet;
        this.mediaType = mediaType;
        this.name = name;
        this.parameters = parameters;
        
    }
}

/**
 *  ContentType model builder
 */
export class ContentTypeBuilder {
    private readonly model: ContentType;
    public constructor(model: ContentType) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ContentType {
        return this.model;
    }

    /**
    * The boundary parameter included in the Content-Type header.             
    */
    public boundary(boundary: string): ContentTypeBuilder {
        this.model.boundary = boundary;
        return this;
    }
    /**
    * CharSet parameter.             
    */
    public charSet(charSet: string): ContentTypeBuilder {
        this.model.charSet = charSet;
        return this;
    }
    /**
    * The internet media type.             
    */
    public mediaType(mediaType: string): ContentTypeBuilder {
        this.model.mediaType = mediaType;
        return this;
    }
    /**
    * Name parameter.             
    */
    public name(name: string): ContentTypeBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * Full list of parameters             
    */
    public parameters(parameters: Array< model.ContentTypeParameter >): ContentTypeBuilder {
        this.model.parameters = parameters;
        return this;
    }
}

