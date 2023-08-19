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
 * Mapi attachment             
 */
export class MapiAttachmentDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "dataBase64",
            baseName: "dataBase64",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiAttachmentDto.attributeTypeMap;
    }

    /**
     * Attachment's name             
     */
    public name: string;
    /**
     * Attachment data represented as Base64 string.             
     */
    public dataBase64: string;

    /**
     * Mapi attachment             
     * @param name Attachment's name             
     * @param dataBase64 Attachment data represented as Base64 string.             
     */
    public constructor(
        
        name?: string,
        dataBase64?: string
    ) {
        
        this.name = name;
        this.dataBase64 = dataBase64;
        
    }
}

/**
 *  MapiAttachmentDto model builder
 */
export class MapiAttachmentDtoBuilder {
    private readonly model: MapiAttachmentDto;
    public constructor(model: MapiAttachmentDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiAttachmentDto {
        return this.model;
    }

    /**
    * Attachment's name             
    */
    public name(name: string): MapiAttachmentDtoBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * Attachment data represented as Base64 string.             
    */
    public dataBase64(dataBase64: string): MapiAttachmentDtoBuilder {
        this.model.dataBase64 = dataBase64;
        return this;
    }
}

