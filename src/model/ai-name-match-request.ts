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
 * Request model for AiNameApi.match operation.
 */
export class AiNameMatchRequest {
    /**
     * A name to match.
     */
    public name: string;

    /**
     * Another name to match.
     */
    public otherName: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian).             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France.             
     */
    public location: string;

    /**
     * A character encoding name.
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name.
     */
    public script: string;

    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameMatch operation.
     * @param name A name to match.
     * @param otherName Another name to match.
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian).             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France.             
     * @param encoding A character encoding name.
     * @param script A writing system code; starts with the ISO-15924 script name.
     * @param style Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        name?: string, 
        otherName?: string, 
        language?: string, 
        location?: string, 
        encoding?: string, 
        script?: string, 
        style?: string) {
        
        this.name = name;
        this.otherName = otherName;
        this.language = language;
        this.location = location;
        this.encoding = encoding;
        this.script = script;
        this.style = style;
    }
}

export class AiNameMatchRequestBuilder {
    private model: AiNameMatchRequest
    public constructor(model: AiNameMatchRequest) {
        this.model = model;
    }
    public build(): AiNameMatchRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public name(name: string): AiNameMatchRequestBuilder {
            this.model.name = name;
            return this;
        }
        public otherName(otherName: string): AiNameMatchRequestBuilder {
            this.model.otherName = otherName;
            return this;
        }
        public language(language: string): AiNameMatchRequestBuilder {
            this.model.language = language;
            return this;
        }
        public location(location: string): AiNameMatchRequestBuilder {
            this.model.location = location;
            return this;
        }
        public encoding(encoding: string): AiNameMatchRequestBuilder {
            this.model.encoding = encoding;
            return this;
        }
        public script(script: string): AiNameMatchRequestBuilder {
            this.model.script = script;
            return this;
        }
        public style(style: string): AiNameMatchRequestBuilder {
            this.model.style = style;
            return this;
        }
}
