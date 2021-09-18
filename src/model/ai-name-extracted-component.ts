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
 * Extracted name component             
 */
export class AiNameExtractedComponent {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
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
        return AiNameExtractedComponent.attributeTypeMap;
    }

    /**
     * Extracted from email address name component category. Enum, available values: Unknown, GivenName, Surname, SomeName, NoName, Initial
     */
    public category: string;
    /**
     * Extracted value             
     */
    public value: string;

    /**
     * Extracted name component             
     * @param category Extracted from email address name component category. Enum, available values: Unknown, GivenName, Surname, SomeName, NoName, Initial
     * @param value Extracted value             
     */
    public constructor(
        
        category?: string,
        value?: string
    ) {
        
        this.category = category;
        this.value = value;
        
    }
}

/**
 *  AiNameExtractedComponent model builder
 */
export class AiNameExtractedComponentBuilder {
    private readonly model: AiNameExtractedComponent;
    public constructor(model: AiNameExtractedComponent) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameExtractedComponent {
        return this.model;
    }

    /**
    * Extracted from email address name component category. Enum, available values: Unknown, GivenName, Surname, SomeName, NoName, Initial
    */
    public category(category: string): AiNameExtractedComponentBuilder {
        this.model.category = category;
        return this;
    }
    /**
    * Extracted value             
    */
    public value(value: string): AiNameExtractedComponentBuilder {
        this.model.value = value;
        return this;
    }
}

