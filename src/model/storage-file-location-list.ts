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
 * List of files located on storage.             
 */
export class StorageFileLocationList extends model.ListResponseOfStorageFileLocation {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageFileLocationList.attributeTypeMap);
    }


    /**
     * List of files located on storage.             
     * @param value 
     */
    public constructor(
        
        value?: Array< model.StorageFileLocation >
    ) {
        super();
        this.value = value;
        
    }
}

/**
 *  StorageFileLocationList model builder
 */
export class StorageFileLocationListBuilder {
    private readonly model: StorageFileLocationList;
    public constructor(model: StorageFileLocationList) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): StorageFileLocationList {
        return this.model;
    }

    public value(value: Array< model.StorageFileLocation >): StorageFileLocationListBuilder {
        this.model.value = value;
        return this;
    }
}

