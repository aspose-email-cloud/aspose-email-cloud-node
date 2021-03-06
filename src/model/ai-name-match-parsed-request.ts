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
 * Two parsed names to match request             
 */
export class AiNameMatchParsedRequest extends model.AiNameParsedRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "otherParsedName",
            baseName: "otherParsedName",
            type: "Array<AiNameComponent>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiNameMatchParsedRequest.attributeTypeMap);
    }

    /**
     * Other parsed name to match             
     */
    public otherParsedName: Array< model.AiNameComponent >;

    /**
     * Two parsed names to match request             
     * @param culturalContext AiName parser cultural context             
     * @param format Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (= '%t%F%m%N%L%p')     /format/FN+LN/ (= '%F%L')     /format/title+FN+LN/ (= '%t%F%L')     /format/FN+MN+LN/ (= '%F%M%N%L')     /format/title+FN+MN+LN/ (= '%t%F%M%N%L')     /format/FN+MI+LN/ (= '%F%m%N%L')     /format/title+FN+MI+LN/ (= '%t%F%m%N%L')     /format/LN/ (= '%L')     /format/title+LN/ (= '%t%L')     /format/LN+FN+MN/ (= '%L,%F%M%N')     /format/LN+title+FN+MN/ (= '%L,%t%F%M%N')     /format/LN+FN+MI/ (= '%L,%F%m%N')     /format/LN+title+FN+MI/ (= '%L,%t%F%m%N')  Custom format string - custom combination of characters and the next term placeholders:      '%t' - Title (prefix)     '%F' - First name     '%f' - First initial     '%M' - Middle name(s)     '%m' - Middle initial(s)     '%N' - Nickname     '%L' - Last name     '%l' - Last initial     '%p' - Postfix  If no value for format option was provided, its default value is '%t%F%m%N%L%p'             
     * @param parsedName Parsed name             
     * @param otherParsedName Other parsed name to match             
     */
    public constructor(
        
        culturalContext?: model.AiNameCulturalContext,
        format?: string,
        parsedName?: Array< model.AiNameComponent >,
        otherParsedName?: Array< model.AiNameComponent >
    ) {
        super();
        this.culturalContext = culturalContext;
        this.format = format;
        this.parsedName = parsedName;
        this.otherParsedName = otherParsedName;
        
    }
}

/**
 *  AiNameMatchParsedRequest model builder
 */
export class AiNameMatchParsedRequestBuilder {
    private readonly model: AiNameMatchParsedRequest;
    public constructor(model: AiNameMatchParsedRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AiNameMatchParsedRequest {
        return this.model;
    }

    /**
    * AiName parser cultural context             
    */
    public culturalContext(culturalContext: model.AiNameCulturalContext): AiNameMatchParsedRequestBuilder {
        this.model.culturalContext = culturalContext;
        return this;
    }
    /**
    * Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (= '%t%F%m%N%L%p')     /format/FN+LN/ (= '%F%L')     /format/title+FN+LN/ (= '%t%F%L')     /format/FN+MN+LN/ (= '%F%M%N%L')     /format/title+FN+MN+LN/ (= '%t%F%M%N%L')     /format/FN+MI+LN/ (= '%F%m%N%L')     /format/title+FN+MI+LN/ (= '%t%F%m%N%L')     /format/LN/ (= '%L')     /format/title+LN/ (= '%t%L')     /format/LN+FN+MN/ (= '%L,%F%M%N')     /format/LN+title+FN+MN/ (= '%L,%t%F%M%N')     /format/LN+FN+MI/ (= '%L,%F%m%N')     /format/LN+title+FN+MI/ (= '%L,%t%F%m%N')  Custom format string - custom combination of characters and the next term placeholders:      '%t' - Title (prefix)     '%F' - First name     '%f' - First initial     '%M' - Middle name(s)     '%m' - Middle initial(s)     '%N' - Nickname     '%L' - Last name     '%l' - Last initial     '%p' - Postfix  If no value for format option was provided, its default value is '%t%F%m%N%L%p'             
    */
    public format(format: string): AiNameMatchParsedRequestBuilder {
        this.model.format = format;
        return this;
    }
    /**
    * Parsed name             
    */
    public parsedName(parsedName: Array< model.AiNameComponent >): AiNameMatchParsedRequestBuilder {
        this.model.parsedName = parsedName;
        return this;
    }
    /**
    * Other parsed name to match             
    */
    public otherParsedName(otherParsedName: Array< model.AiNameComponent >): AiNameMatchParsedRequestBuilder {
        this.model.otherParsedName = otherParsedName;
        return this;
    }
}

