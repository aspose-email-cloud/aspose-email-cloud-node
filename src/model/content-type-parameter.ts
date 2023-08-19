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
 * Content-Type header parameter             
 */
export class ContentTypeParameter {

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
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContentTypeParameter.attributeTypeMap;
    }

    /**
     * Parameter name             
     */
    public name: string;
    /**
     * Parameter value             
     */
    public value: string;

    /**
     * Content-Type header parameter             
     * @param name Parameter name             
     * @param value Parameter value             
     */
    public constructor(
        
        name?: string,
        value?: string
    ) {
        
        this.name = name;
        this.value = value;
        
    }
}

/**
 *  ContentTypeParameter model builder
 */
export class ContentTypeParameterBuilder {
    private readonly model: ContentTypeParameter;
    public constructor(model: ContentTypeParameter) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ContentTypeParameter {
        return this.model;
    }

    /**
    * Parameter name             
    */
    public name(name: string): ContentTypeParameterBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * Parameter value             
    */
    public value(value: string): ContentTypeParameterBuilder {
        this.model.value = value;
        return this;
    }
}

