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
 * Name with score             
 */
export class AiNameWeighted {

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
            name: "score",
            baseName: "score",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameWeighted.attributeTypeMap;
    }

    /**
     * Name             
     */
    public name: string;
    /**
     * Score of name             
     */
    public score: number;

    /**
     * Name with score             
     * @param name Name             
     * @param score Score of name             
     */
    public constructor(
        
        name?: string,
        score?: number
    ) {
        
        this.name = name;
        this.score = score;
        
    }
}

/**
 *  AiNameWeighted model builder
 */
export class AiNameWeightedBuilder {
    private readonly model: AiNameWeighted;
    public constructor(model: AiNameWeighted) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameWeighted {
        return this.model;
    }

    /**
    * Name             
    */
    public name(name: string): AiNameWeightedBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * Score of name             
    */
    public score(score: number): AiNameWeightedBuilder {
        this.model.score = score;
        return this;
    }
}

