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
 * Formatted name             
 */
export class AiNameFormatted {

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
            name: "comments",
            baseName: "comments",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameFormatted.attributeTypeMap;
    }

    /**
     * Formatted name value             
     */
    public name: string;
    /**
     * Usually empty; can contain extra message describing some issue occurred during the formatting             
     */
    public comments: string;

    /**
     * Formatted name             
     * @param name Formatted name value             
     * @param comments Usually empty; can contain extra message describing some issue occurred during the formatting             
     */
    public constructor(
        
        name?: string,
        comments?: string
    ) {
        
        this.name = name;
        this.comments = comments;
        
    }
}

/**
 *  AiNameFormatted model builder
 */
export class AiNameFormattedBuilder {
    private readonly model: AiNameFormatted;
    public constructor(model: AiNameFormatted) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameFormatted {
        return this.model;
    }

    /**
    * Formatted name value             
    */
    public name(name: string): AiNameFormattedBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * Usually empty; can contain extra message describing some issue occurred during the formatting             
    */
    public comments(comments: string): AiNameFormattedBuilder {
        this.model.comments = comments;
        return this;
    }
}

