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
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    /**
     * List of errors.
     */
    public errors: Array<Error>;

    /**
     * File upload result
     * @param uploaded List of uploaded file names
     * @param errors List of errors.
     */
    public constructor(
        
        uploaded?: Array<string>,
        errors?: Array<Error>
    ) {
        
        this.uploaded = uploaded;
        this.errors = errors;
        
    }
}

/**
 *  FilesUploadResult model builder
 */
export class FilesUploadResultBuilder {
    private readonly model: FilesUploadResult;
    public constructor(model: FilesUploadResult) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): FilesUploadResult {
        return this.model;
    }

    /**
    * List of uploaded file names
    */
    public uploaded(uploaded: Array<string>): FilesUploadResultBuilder {
        this.model.uploaded = uploaded;
        return this;
    }
    /**
    * List of errors.
    */
    public errors(errors: Array<Error>): FilesUploadResultBuilder {
        this.model.errors = errors;
        return this;
    }
}

