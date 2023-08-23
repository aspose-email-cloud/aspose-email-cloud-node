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
 * Name variants             
 */
export class AiNameWeightedVariants {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "names",
            baseName: "names",
            type: "Array<AiNameWeighted>",
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
        return AiNameWeightedVariants.attributeTypeMap;
    }

    /**
     * List of name variations             
     */
    public names: Array< model.AiNameWeighted >;
    /**
     * Usually empty; can contain extra message describing some issue occurred during processing             
     */
    public comments: string;

    /**
     * Name variants             
     * @param names List of name variations             
     * @param comments Usually empty; can contain extra message describing some issue occurred during processing             
     */
    public constructor(
        
        names?: Array< model.AiNameWeighted >,
        comments?: string
    ) {
        
        this.names = names;
        this.comments = comments;
        
    }
}

/**
 *  AiNameWeightedVariants model builder
 */
export class AiNameWeightedVariantsBuilder {
    private readonly model: AiNameWeightedVariants;
    public constructor(model: AiNameWeightedVariants) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameWeightedVariants {
        return this.model;
    }

    /**
    * List of name variations             
    */
    public names(names: Array< model.AiNameWeighted >): AiNameWeightedVariantsBuilder {
        this.model.names = names;
        return this;
    }
    /**
    * Usually empty; can contain extra message describing some issue occurred during processing             
    */
    public comments(comments: string): AiNameWeightedVariantsBuilder {
        this.model.comments = comments;
        return this;
    }
}

