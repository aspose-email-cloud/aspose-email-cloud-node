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
 * Image from storage for recognition             
 */
export class AiBcrImageStorageFile extends model.AiBcrImage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "file",
            baseName: "file",
            type: "StorageFileLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiBcrImageStorageFile.attributeTypeMap);
    }

    /**
     * Image location             
     */
    public file: model.StorageFileLocation;

    /**
     * Image from storage for recognition             
     * @param isSingle Determines that image contains single VCard or more.             
     * @param file Image location             
     */
    public constructor(
        
        isSingle?: boolean,
        file?: model.StorageFileLocation
    ) {
        super();
        this.isSingle = isSingle;
        this.file = file;
        
    }
}

/**
 *  AiBcrImageStorageFile model builder
 */
export class AiBcrImageStorageFileBuilder {
    private readonly model: AiBcrImageStorageFile;
    public constructor(model: AiBcrImageStorageFile) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiBcrImageStorageFile {
        return this.model;
    }

    /**
    * Determines that image contains single VCard or more.             
    */
    public isSingle(isSingle: boolean): AiBcrImageStorageFileBuilder {
        this.model.isSingle = isSingle;
        return this;
    }
    /**
    * Image location             
    */
    public file(file: model.StorageFileLocation): AiBcrImageStorageFileBuilder {
        this.model.file = file;
        return this;
    }
}

