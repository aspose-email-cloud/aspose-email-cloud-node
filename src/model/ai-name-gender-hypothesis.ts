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
 * Name gender hypothesis             
 */
export class AiNameGenderHypothesis {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "gender",
            baseName: "gender",
            type: "string",
        },
        {
            name: "score",
            baseName: "score",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameGenderHypothesis.attributeTypeMap;
    }

    /**
     * Recognized name gender. Enum, available values: Male, Female, Unknown
     */
    public gender: string;
    /**
     * Hypothesis score             
     */
    public score: number;

    /**
     * Name gender hypothesis             
     * @param gender Recognized name gender. Enum, available values: Male, Female, Unknown
     * @param score Hypothesis score             
     */
    public constructor(
        
        gender?: string,
        score?: number
    ) {
        
        this.gender = gender;
        this.score = score;
        
    }
}

/**
 *  AiNameGenderHypothesis model builder
 */
export class AiNameGenderHypothesisBuilder {
    private readonly model: AiNameGenderHypothesis;
    public constructor(model: AiNameGenderHypothesis) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameGenderHypothesis {
        return this.model;
    }

    /**
    * Recognized name gender. Enum, available values: Male, Female, Unknown
    */
    public gender(gender: string): AiNameGenderHypothesisBuilder {
        this.model.gender = gender;
        return this;
    }
    /**
    * Hypothesis score             
    */
    public score(score: number): AiNameGenderHypothesisBuilder {
        this.model.score = score;
        return this;
    }
}

