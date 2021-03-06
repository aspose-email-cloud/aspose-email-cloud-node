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
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },
        {
            name: "message",
            baseName: "message",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        },
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    /**
     * Message             
     */
    public message: string;
    /**
     * Description             
     */
    public description: string;
    /**
     * Inner Error             
     */
    public innerError: model.ErrorDetails;

    /**
     * Error
     * @param code Code             
     * @param message Message             
     * @param description Description             
     * @param innerError Inner Error             
     */
    public constructor(
        
        code?: string,
        message?: string,
        description?: string,
        innerError?: model.ErrorDetails
    ) {
        
        this.code = code;
        this.message = message;
        this.description = description;
        this.innerError = innerError;
        
    }
}

/**
 *  ModelError model builder
 */
export class ModelErrorBuilder {
    private readonly model: ModelError;
    public constructor(model: ModelError) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ModelError {
        return this.model;
    }

    /**
    * Code             
    */
    public code(code: string): ModelErrorBuilder {
        this.model.code = code;
        return this;
    }
    /**
    * Message             
    */
    public message(message: string): ModelErrorBuilder {
        this.model.message = message;
        return this;
    }
    /**
    * Description             
    */
    public description(description: string): ModelErrorBuilder {
        this.model.description = description;
        return this;
    }
    /**
    * Inner Error             
    */
    public innerError(innerError: model.ErrorDetails): ModelErrorBuilder {
        this.model.innerError = innerError;
        return this;
    }
}

