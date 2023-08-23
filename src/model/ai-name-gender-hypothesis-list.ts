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
 * Hypotheses about person's gender             
 */
export class AiNameGenderHypothesisList extends model.ListResponseOfAiNameGenderHypothesis {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiNameGenderHypothesisList.attributeTypeMap);
    }


    /**
     * Hypotheses about person's gender             
     * @param value 
     */
    public constructor(
        
        value?: Array< model.AiNameGenderHypothesis >
    ) {
        super();
        this.value = value;
        
    }
}

/**
 *  AiNameGenderHypothesisList model builder
 */
export class AiNameGenderHypothesisListBuilder {
    private readonly model: AiNameGenderHypothesisList;
    public constructor(model: AiNameGenderHypothesisList) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameGenderHypothesisList {
        return this.model;
    }

    public value(value: Array< model.AiNameGenderHypothesis >): AiNameGenderHypothesisListBuilder {
        this.model.value = value;
        return this;
    }
}

