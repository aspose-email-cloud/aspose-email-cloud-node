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
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;

    /**
     * Object exists
     * @param exists Indicates that the file or folder exists.
     * @param isFolder True if it is a folder, false if it is a file.
     */
    public constructor(
        
        exists?: boolean,
        isFolder?: boolean
    ) {
        
        this.exists = exists;
        this.isFolder = isFolder;
        
    }
}

/**
 *  ObjectExist model builder
 */
export class ObjectExistBuilder {
    private readonly model: ObjectExist;
    public constructor(model: ObjectExist) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ObjectExist {
        return this.model;
    }

    /**
    * Indicates that the file or folder exists.
    */
    public exists(exists: boolean): ObjectExistBuilder {
        this.model.exists = exists;
        return this;
    }
    /**
    * True if it is a folder, false if it is a file.
    */
    public isFolder(isFolder: boolean): ObjectExistBuilder {
        this.model.isFolder = isFolder;
        return this;
    }
}

