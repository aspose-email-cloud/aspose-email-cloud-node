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
 * Two names match result             
 */
export class AiNameMatchResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "similarity",
            baseName: "similarity",
            type: "number",
        },
        {
            name: "mismatches",
            baseName: "mismatches",
            type: "Array<AiNameMismatch>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameMatchResult.attributeTypeMap;
    }

    /**
     * Similarity score             
     */
    public similarity: number;
    /**
     * Detailed description of mismatches             
     */
    public mismatches: Array< model.AiNameMismatch >;

    /**
     * Two names match result             
     * @param similarity Similarity score             
     * @param mismatches Detailed description of mismatches             
     */
    public constructor(
        
        similarity?: number,
        mismatches?: Array< model.AiNameMismatch >
    ) {
        
        this.similarity = similarity;
        this.mismatches = mismatches;
        
    }
}

/**
 *  AiNameMatchResult model builder
 */
export class AiNameMatchResultBuilder {
    private readonly model: AiNameMatchResult;
    public constructor(model: AiNameMatchResult) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameMatchResult {
        return this.model;
    }

    /**
    * Similarity score             
    */
    public similarity(similarity: number): AiNameMatchResultBuilder {
        this.model.similarity = similarity;
        return this;
    }
    /**
    * Detailed description of mismatches             
    */
    public mismatches(mismatches: Array< model.AiNameMismatch >): AiNameMatchResultBuilder {
        this.model.mismatches = mismatches;
        return this;
    }
}

