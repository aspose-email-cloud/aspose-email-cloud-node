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

export class StorageModelOfEmailDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "storageFile",
            baseName: "storageFile",
            type: "StorageFileLocation",
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
        return StorageModelOfEmailDto.attributeTypeMap;
    }

    public storageFile: model.StorageFileLocation;
    public value: model.EmailDto;

    /**
     * 
     * @param storageFile 
     * @param value 
     */
    public constructor(
        
        storageFile?: model.StorageFileLocation,
        value?: model.EmailDto
    ) {
        
        this.storageFile = storageFile;
        this.value = value;
        
    }
}

/**
 *  StorageModelOfEmailDto model builder
 */
export class StorageModelOfEmailDtoBuilder {
    private readonly model: StorageModelOfEmailDto;
    public constructor(model: StorageModelOfEmailDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): StorageModelOfEmailDto {
        return this.model;
    }

    public storageFile(storageFile: model.StorageFileLocation): StorageModelOfEmailDtoBuilder {
        this.model.storageFile = storageFile;
        return this;
    }
    public value(value: model.EmailDto): StorageModelOfEmailDtoBuilder {
        this.model.value = value;
        return this;
    }
}

