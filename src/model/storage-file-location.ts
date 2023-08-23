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
 * A storage file location information             
 */
export class StorageFileLocation extends model.StorageFolderLocation {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageFileLocation.attributeTypeMap);
    }

    /**
     * A file name in storage             
     */
    public fileName: string;

    /**
     * A storage file location information             
     * @param storage A storage name             
     * @param folderPath A path to a folder in specified storage             
     * @param fileName A file name in storage             
     */
    public constructor(
        
        storage?: string,
        folderPath?: string,
        fileName?: string
    ) {
        super();
        this.storage = storage;
        this.folderPath = folderPath;
        this.fileName = fileName;
        
    }
}

/**
 *  StorageFileLocation model builder
 */
export class StorageFileLocationBuilder {
    private readonly model: StorageFileLocation;
    public constructor(model: StorageFileLocation) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): StorageFileLocation {
        return this.model;
    }

    /**
    * A storage name             
    */
    public storage(storage: string): StorageFileLocationBuilder {
        this.model.storage = storage;
        return this;
    }
    /**
    * A path to a folder in specified storage             
    */
    public folderPath(folderPath: string): StorageFileLocationBuilder {
        this.model.folderPath = folderPath;
        return this;
    }
    /**
    * A file name in storage             
    */
    public fileName(fileName: string): StorageFileLocationBuilder {
        this.model.fileName = fileName;
        return this;
    }
}

