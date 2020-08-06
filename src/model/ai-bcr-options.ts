
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
 * Recognition options.             
 */
export class AiBcrOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "languages",
            baseName: "languages",
            type: "string",
        },
        {
            name: "countries",
            baseName: "countries",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiBcrOptions.attributeTypeMap;
    }

    /**
     * Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default.             
     */
    public languages: string;
    /**
     * Comma-separated codes of countries.             
     */
    public countries: string;

    /**
     * Recognition options.             
     * @param languages Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default.             
     * @param countries Comma-separated codes of countries.             
     */
    public constructor(
        
        languages?: string,
        countries?: string
    ) {
        
        this.languages = languages;
        this.countries = countries;
        
    }
}



