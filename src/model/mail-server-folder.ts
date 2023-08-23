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
 * Email account folder             
 */
export class MailServerFolder {

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
            name: "id",
            baseName: "id",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MailServerFolder.attributeTypeMap;
    }

    /**
     * Gets or sets mail folder name             
     */
    public name: string;
    /**
     * Gets or sets mail folder id             
     */
    public id: string;

    /**
     * Email account folder             
     * @param name Gets or sets mail folder name             
     * @param id Gets or sets mail folder id             
     */
    public constructor(
        
        name?: string,
        id?: string
    ) {
        
        this.name = name;
        this.id = id;
        
    }
}

/**
 *  MailServerFolder model builder
 */
export class MailServerFolderBuilder {
    private readonly model: MailServerFolder;
    public constructor(model: MailServerFolder) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MailServerFolder {
        return this.model;
    }

    /**
    * Gets or sets mail folder name             
    */
    public name(name: string): MailServerFolderBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * Gets or sets mail folder id             
    */
    public id(id: string): MailServerFolderBuilder {
        this.model.id = id;
        return this;
    }
}

