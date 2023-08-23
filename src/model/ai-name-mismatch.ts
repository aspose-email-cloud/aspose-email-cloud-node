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
 * Names mismatch detailed description             
 */
export class AiNameMismatch {

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
            name: "similarity",
            baseName: "similarity",
            type: "number",
        },
        {
            name: "explanation",
            baseName: "explanation",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameMismatch.attributeTypeMap;
    }

    /**
     * Mismatch type. Enum, available values: Unknown, FirstName, MiddleName, MiddleLastName, MiddleNickname, Gender, Context
     */
    public category: string;
    /**
     * Similarity score             
     */
    public similarity: number;
    /**
     * Explanation or mismatch subtype             
     */
    public explanation: string;

    /**
     * Names mismatch detailed description             
     * @param category Mismatch type. Enum, available values: Unknown, FirstName, MiddleName, MiddleLastName, MiddleNickname, Gender, Context
     * @param similarity Similarity score             
     * @param explanation Explanation or mismatch subtype             
     */
    public constructor(
        
        category?: string,
        similarity?: number,
        explanation?: string
    ) {
        
        this.category = category;
        this.similarity = similarity;
        this.explanation = explanation;
        
    }
}

/**
 *  AiNameMismatch model builder
 */
export class AiNameMismatchBuilder {
    private readonly model: AiNameMismatch;
    public constructor(model: AiNameMismatch) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameMismatch {
        return this.model;
    }

    /**
    * Mismatch type. Enum, available values: Unknown, FirstName, MiddleName, MiddleLastName, MiddleNickname, Gender, Context
    */
    public category(category: string): AiNameMismatchBuilder {
        this.model.category = category;
        return this;
    }
    /**
    * Similarity score             
    */
    public similarity(similarity: number): AiNameMismatchBuilder {
        this.model.similarity = similarity;
        return this;
    }
    /**
    * Explanation or mismatch subtype             
    */
    public explanation(explanation: string): AiNameMismatchBuilder {
        this.model.explanation = explanation;
        return this;
    }
}

