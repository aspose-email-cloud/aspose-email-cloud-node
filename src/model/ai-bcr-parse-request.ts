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
 * Request model for AiBcrApi.parse operation.
 */
export class AiBcrParseRequest {
    /**
     * File to parse
     */
    public file: Buffer;

    /**
     * Comma-separated codes of countries.
     */
    public countries: string;

    /**
     * Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default.             
     */
    public languages: string;

    /**
     * Determines that image contains single VCard or more.
     */
    public isSingle: boolean;

    /**
     * Request model for aiBcrParse operation.
     * @param file File to parse
     * @param countries Comma-separated codes of countries.
     * @param languages Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default.             
     * @param isSingle Determines that image contains single VCard or more.
     */
    public constructor(
        file?: Buffer, 
        countries?: string, 
        languages?: string, 
        isSingle?: boolean) {
        
        this.file = file;
        this.countries = countries;
        this.languages = languages;
        this.isSingle = isSingle;
    }
}

export class AiBcrParseRequestBuilder {
    private model: AiBcrParseRequest
    public constructor(model: AiBcrParseRequest) {
        this.model = model;
    }
    public build(): AiBcrParseRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public file(file: Buffer): AiBcrParseRequestBuilder {
            this.model.file = file;
            return this;
        }
        public countries(countries: string): AiBcrParseRequestBuilder {
            this.model.countries = countries;
            return this;
        }
        public languages(languages: string): AiBcrParseRequestBuilder {
            this.model.languages = languages;
            return this;
        }
        public isSingle(isSingle: boolean): AiBcrParseRequestBuilder {
            this.model.isSingle = isSingle;
            return this;
        }
}
