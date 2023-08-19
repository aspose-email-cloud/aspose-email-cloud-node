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
 * File or folder information
 */
export class StorageFile {

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
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },
        {
            name: "size",
            baseName: "size",
            type: "number",
        },
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    /**
     * File or folder size.
     */
    public size: number;
    /**
     * File or folder path.
     */
    public path: string;

    /**
     * File or folder information
     * @param name File or folder name.
     * @param isFolder True if it is a folder.
     * @param modifiedDate File or folder last modified DateTime.
     * @param size File or folder size.
     * @param path File or folder path.
     */
    public constructor(
        
        name?: string,
        isFolder?: boolean,
        modifiedDate?: Date,
        size?: number,
        path?: string
    ) {
        
        this.name = name;
        this.isFolder = isFolder;
        this.modifiedDate = modifiedDate;
        this.size = size;
        this.path = path;
        
    }
}

/**
 *  StorageFile model builder
 */
export class StorageFileBuilder {
    private readonly model: StorageFile;
    public constructor(model: StorageFile) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): StorageFile {
        return this.model;
    }

    /**
    * File or folder name.
    */
    public name(name: string): StorageFileBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * True if it is a folder.
    */
    public isFolder(isFolder: boolean): StorageFileBuilder {
        this.model.isFolder = isFolder;
        return this;
    }
    /**
    * File or folder last modified DateTime.
    */
    public modifiedDate(modifiedDate: Date): StorageFileBuilder {
        this.model.modifiedDate = modifiedDate;
        return this;
    }
    /**
    * File or folder size.
    */
    public size(size: number): StorageFileBuilder {
        this.model.size = size;
        return this;
    }
    /**
    * File or folder path.
    */
    public path(path: string): StorageFileBuilder {
        this.model.path = path;
        return this;
    }
}

