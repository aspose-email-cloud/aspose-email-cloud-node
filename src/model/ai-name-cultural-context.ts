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
 * AiName cultural context             
 */
export class AiNameCulturalContext {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "language",
            baseName: "language",
            type: "string",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "script",
            baseName: "script",
            type: "string",
        },
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },
        {
            name: "style",
            baseName: "style",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameCulturalContext.attributeTypeMap;
    }

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     */
    public language: string;
    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     */
    public location: string;
    /**
     * A writing system code; starts with the ISO-15924 script name             
     */
    public script: string;
    /**
     * A character encoding name             
     */
    public encoding: string;
    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * AiName cultural context             
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     * @param script A writing system code; starts with the ISO-15924 script name             
     * @param encoding A character encoding name             
     * @param style Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        
        language?: string,
        location?: string,
        script?: string,
        encoding?: string,
        style?: string
    ) {
        
        this.language = language;
        this.location = location;
        this.script = script;
        this.encoding = encoding;
        this.style = style;
        
    }
}

/**
 *  AiNameCulturalContext model builder
 */
export class AiNameCulturalContextBuilder {
    private readonly model: AiNameCulturalContext;
    public constructor(model: AiNameCulturalContext) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameCulturalContext {
        return this.model;
    }

    /**
    * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
    */
    public language(language: string): AiNameCulturalContextBuilder {
        this.model.language = language;
        return this;
    }
    /**
    * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
    */
    public location(location: string): AiNameCulturalContextBuilder {
        this.model.location = location;
        return this;
    }
    /**
    * A writing system code; starts with the ISO-15924 script name             
    */
    public script(script: string): AiNameCulturalContextBuilder {
        this.model.script = script;
        return this;
    }
    /**
    * A character encoding name             
    */
    public encoding(encoding: string): AiNameCulturalContextBuilder {
        this.model.encoding = encoding;
        return this;
    }
    /**
    * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
    */
    public style(style: string): AiNameCulturalContextBuilder {
        this.model.style = style;
        return this;
    }
}

