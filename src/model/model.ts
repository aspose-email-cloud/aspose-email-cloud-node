
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

/**
 * EmailClient accounts request             
 */
export class AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "firstAccount",
            baseName: "firstAccount",
            type: "string",
        },
        {
            name: "secondAccount",
            baseName: "secondAccount",
            type: "string",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AccountBaseRequest.attributeTypeMap;
    }

    /**
     * First account storage file name             
     */
    public firstAccount: string;
    
    /**
     * Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     */
    public secondAccount: string;
    
    /**
     * Storage folder location of account files             
     */
    public storageFolder: StorageFolderLocation;
    

    /**
     * EmailClient accounts request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation) {
        
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
    }
}

/**
 * Add attachment request             
 */
export class AddAttachmentRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentFolder",
            baseName: "documentFolder",
            type: "StorageFolderLocation",
        },
        {
            name: "attachmentFolder",
            baseName: "attachmentFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AddAttachmentRequest.attributeTypeMap;
    }

    /**
     * Storage folder location of document             
     */
    public documentFolder: StorageFolderLocation;
    
    /**
     * Storage folder location of an attachment             
     */
    public attachmentFolder: StorageFolderLocation;
    

    /**
     * Add attachment request             
     * @param documentFolder Storage folder location of document             
     * @param attachmentFolder Storage folder location of an attachment             
     */
    public constructor(
        documentFolder?: StorageFolderLocation,
        attachmentFolder?: StorageFolderLocation) {
        
        this.documentFolder = documentFolder;
        this.attachmentFolder = attachmentFolder;
    }
}

/**
 * Image for recognition             
 */
export class AiBcrImage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isSingle",
            baseName: "isSingle",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiBcrImage.attributeTypeMap;
    }

    /**
     * Determines that image contains single VCard or more. Ignored in current version. Multiple cards on image support will be added soon             
     */
    public isSingle: boolean;
    

    /**
     * Image for recognition             
     * @param isSingle Determines that image contains single VCard or more. Ignored in current version. Multiple cards on image support will be added soon             
     */
    public constructor(
        isSingle?: boolean) {
        
        this.isSingle = isSingle;
    }
}

/**
 * Image OCR results             
 */
export class AiBcrOcrData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "string",
        },
        {
            name: "image",
            baseName: "image",
            type: "string",
        },
        {
            name: "details",
            baseName: "details",
            type: "{ [key: string]: string; }",
        },
        {
            name: "data",
            baseName: "data",
            type: "Array<AiBcrOcrDataPart>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiBcrOcrData.attributeTypeMap;
    }

    /**
     * Image identifier             
     */
    public id: string;
    
    /**
     * Image with possible pre-processing in Base64             
     */
    public image: string;
    
    /**
     * Additional details from OCR engine             
     */
    public details: { [key: string]: string; };
    
    /**
     * OCR results             
     */
    public data: Array<AiBcrOcrDataPart>;
    

    /**
     * Image OCR results             
     * @param id Image identifier             
     * @param image Image with possible pre-processing in Base64             
     * @param details Additional details from OCR engine             
     * @param data OCR results             
     */
    public constructor(
        id?: string,
        image?: string,
        details?: { [key: string]: string; },
        data?: Array<AiBcrOcrDataPart>) {
        
        this.id = id;
        this.image = image;
        this.details = details;
        this.data = data;
    }
}

/**
 * Recognized text block             
 */
export class AiBcrOcrDataPart {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "x",
            baseName: "x",
            type: "number",
        },
        {
            name: "y",
            baseName: "y",
            type: "number",
        },
        {
            name: "width",
            baseName: "width",
            type: "number",
        },
        {
            name: "height",
            baseName: "height",
            type: "number",
        },
        {
            name: "text",
            baseName: "text",
            type: "string",
        },
        {
            name: "details",
            baseName: "details",
            type: "{ [key: string]: string; }",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiBcrOcrDataPart.attributeTypeMap;
    }

    /**
     * X position of text block             
     */
    public x: number;
    
    /**
     * Y position of text block             
     */
    public y: number;
    
    /**
     * Width of text block             
     */
    public width: number;
    
    /**
     * Height of text block             
     */
    public height: number;
    
    /**
     * Recognized text             
     */
    public text: string;
    
    /**
     * Additional recognition result details             
     */
    public details: { [key: string]: string; };
    

    /**
     * Recognized text block             
     * @param x X position of text block             
     * @param y Y position of text block             
     * @param width Width of text block             
     * @param height Height of text block             
     * @param text Recognized text             
     * @param details Additional recognition result details             
     */
    public constructor(
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        text?: string,
        details?: { [key: string]: string; }) {
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.details = details;
    }
}

/**
 * Recognition options             
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
     * Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default             
     */
    public languages: string;
    
    /**
     * Comma-separated codes of countries             
     */
    public countries: string;
    

    /**
     * Recognition options             
     * @param languages Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default             
     * @param countries Comma-separated codes of countries             
     */
    public constructor(
        languages?: string,
        countries?: string) {
        
        this.languages = languages;
        this.countries = countries;
    }
}

/**
 * Business card recognition request             
 */
export class AiBcrRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "options",
            baseName: "options",
            type: "AiBcrOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiBcrRq.attributeTypeMap;
    }

    /**
     * Recognition options             
     */
    public options: AiBcrOptions;
    

    /**
     * Business card recognition request             
     * @param options Recognition options             
     */
    public constructor(
        options?: AiBcrOptions) {
        
        this.options = options;
    }
}

/**
 * Parsed name component             
 */
export class AiNameComponent {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "category",
            baseName: "category",
            type: "string",
        },
        {
            name: "score",
            baseName: "score",
            type: "number",
        },
        {
            name: "position",
            baseName: "position",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameComponent.attributeTypeMap;
    }

    /**
     * Component value             
     */
    public value: string;
    
    /**
     * Name component category. Enum, available values: Unknown, Mononym, Score, Format, FirstInitial, FirstName, MiddleInitial, MiddleName, MiddleNickname, MiddleSobriquet, MiddleMaidenName, MiddlePatronym, MiddleMatronym, LastInitial, LastName, LastNobiliaryParticle, LastNominalConjunction, LastPaternalSurname, LastMaternalSurname, PrefixTitle, PostfixGenerationalTitle, PostfixPostnominalLetters, ArabicIsm, ArabicKunya, ArabicNasab, ArabicSlaqab, ArabicNisbah
     */
    public category: string;
    
    /**
     * Score from 0.0 to 1.0             
     */
    public score: number;
    
    /**
     * Component position from 0             
     */
    public position: number;
    

    /**
     * Parsed name component             
     * @param value Component value             
     * @param category Name component category. Enum, available values: Unknown, Mononym, Score, Format, FirstInitial, FirstName, MiddleInitial, MiddleName, MiddleNickname, MiddleSobriquet, MiddleMaidenName, MiddlePatronym, MiddleMatronym, LastInitial, LastName, LastNobiliaryParticle, LastNominalConjunction, LastPaternalSurname, LastMaternalSurname, PrefixTitle, PostfixGenerationalTitle, PostfixPostnominalLetters, ArabicIsm, ArabicKunya, ArabicNasab, ArabicSlaqab, ArabicNisbah
     * @param score Score from 0.0 to 1.0             
     * @param position Component position from 0             
     */
    public constructor(
        value?: string,
        category?: string,
        score?: number,
        position?: number) {
        
        this.value = value;
        this.category = category;
        this.score = score;
        this.position = position;
    }
}

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
        style?: string) {
        
        this.language = language;
        this.location = location;
        this.script = script;
        this.encoding = encoding;
        this.style = style;
    }
}

/**
 * Extracted name             
 */
export class AiNameExtracted {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "Array<AiNameExtractedComponent>",
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
        return AiNameExtracted.attributeTypeMap;
    }

    /**
     * Extracted name components             
     */
    public name: Array<AiNameExtractedComponent>;
    
    /**
     * Extracted name score             
     */
    public score: number;
    

    /**
     * Extracted name             
     * @param name Extracted name components             
     * @param score Extracted name score             
     */
    public constructor(
        name?: Array<AiNameExtractedComponent>,
        score?: number) {
        
        this.name = name;
        this.score = score;
    }
}

/**
 * Extracted name component             
 */
export class AiNameExtractedComponent {

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
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameExtractedComponent.attributeTypeMap;
    }

    /**
     * Extracted from email address name component category. Enum, available values: Unknown, GivenName, Surname, SomeName, NoName, Initial
     */
    public category: string;
    
    /**
     * Extracted value             
     */
    public value: string;
    

    /**
     * Extracted name component             
     * @param category Extracted from email address name component category. Enum, available values: Unknown, GivenName, Surname, SomeName, NoName, Initial
     * @param value Extracted value             
     */
    public constructor(
        category?: string,
        value?: string) {
        
        this.category = category;
        this.value = value;
    }
}

/**
 * Formatted name             
 */
export class AiNameFormatted {

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
            name: "comments",
            baseName: "comments",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameFormatted.attributeTypeMap;
    }

    /**
     * Formatted name value             
     */
    public name: string;
    
    /**
     * Usually empty; can contain extra message describing some issue occurred during the formatting             
     */
    public comments: string;
    

    /**
     * Formatted name             
     * @param name Formatted name value             
     * @param comments Usually empty; can contain extra message describing some issue occurred during the formatting             
     */
    public constructor(
        name?: string,
        comments?: string) {
        
        this.name = name;
        this.comments = comments;
    }
}

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
        score?: number) {
        
        this.gender = gender;
        this.score = score;
    }
}

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
    public mismatches: Array<AiNameMismatch>;
    

    /**
     * Two names match result             
     * @param similarity Similarity score             
     * @param mismatches Detailed description of mismatches             
     */
    public constructor(
        similarity?: number,
        mismatches?: Array<AiNameMismatch>) {
        
        this.similarity = similarity;
        this.mismatches = mismatches;
    }
}

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
        explanation?: string) {
        
        this.category = category;
        this.similarity = similarity;
        this.explanation = explanation;
    }
}

/**
 * Parsed name request model             
 */
export class AiNameParsedRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "culturalContext",
            baseName: "culturalContext",
            type: "AiNameCulturalContext",
        },
        {
            name: "format",
            baseName: "format",
            type: "string",
        },
        {
            name: "parsedName",
            baseName: "parsedName",
            type: "Array<AiNameComponent>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameParsedRq.attributeTypeMap;
    }

    /**
     * AiName parser cultural context             
     */
    public culturalContext: AiNameCulturalContext;
    
    /**
     * Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (= '%t%F%m%N%L%p')     /format/FN+LN/ (= '%F%L')     /format/title+FN+LN/ (= '%t%F%L')     /format/FN+MN+LN/ (= '%F%M%N%L')     /format/title+FN+MN+LN/ (= '%t%F%M%N%L')     /format/FN+MI+LN/ (= '%F%m%N%L')     /format/title+FN+MI+LN/ (= '%t%F%m%N%L')     /format/LN/ (= '%L')     /format/title+LN/ (= '%t%L')     /format/LN+FN+MN/ (= '%L,%F%M%N')     /format/LN+title+FN+MN/ (= '%L,%t%F%M%N')     /format/LN+FN+MI/ (= '%L,%F%m%N')     /format/LN+title+FN+MI/ (= '%L,%t%F%m%N')  Custom format string - custom combination of characters and the next term placeholders:      '%t' - Title (prefix)     '%F' - First name     '%f' - First initial     '%M' - Middle name(s)     '%m' - Middle initial(s)     '%N' - Nickname     '%L' - Last name     '%l' - Last initial     '%p' - Postfix  If no value for format option was provided, its default value is '%t%F%m%N%L%p'             
     */
    public format: string;
    
    /**
     * Parsed name             
     */
    public parsedName: Array<AiNameComponent>;
    

    /**
     * Parsed name request model             
     * @param culturalContext AiName parser cultural context             
     * @param format Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (= '%t%F%m%N%L%p')     /format/FN+LN/ (= '%F%L')     /format/title+FN+LN/ (= '%t%F%L')     /format/FN+MN+LN/ (= '%F%M%N%L')     /format/title+FN+MN+LN/ (= '%t%F%M%N%L')     /format/FN+MI+LN/ (= '%F%m%N%L')     /format/title+FN+MI+LN/ (= '%t%F%m%N%L')     /format/LN/ (= '%L')     /format/title+LN/ (= '%t%L')     /format/LN+FN+MN/ (= '%L,%F%M%N')     /format/LN+title+FN+MN/ (= '%L,%t%F%M%N')     /format/LN+FN+MI/ (= '%L,%F%m%N')     /format/LN+title+FN+MI/ (= '%L,%t%F%m%N')  Custom format string - custom combination of characters and the next term placeholders:      '%t' - Title (prefix)     '%F' - First name     '%f' - First initial     '%M' - Middle name(s)     '%m' - Middle initial(s)     '%N' - Nickname     '%L' - Last name     '%l' - Last initial     '%p' - Postfix  If no value for format option was provided, its default value is '%t%F%m%N%L%p'             
     * @param parsedName Parsed name             
     */
    public constructor(
        culturalContext?: AiNameCulturalContext,
        format?: string,
        parsedName?: Array<AiNameComponent>) {
        
        this.culturalContext = culturalContext;
        this.format = format;
        this.parsedName = parsedName;
    }
}

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
        score?: number) {
        
        this.name = name;
        this.score = score;
    }
}

/**
 * Name variants             
 */
export class AiNameWeightedVariants {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "names",
            baseName: "names",
            type: "Array<AiNameWeighted>",
        },
        {
            name: "comments",
            baseName: "comments",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameWeightedVariants.attributeTypeMap;
    }

    /**
     * List of name variations             
     */
    public names: Array<AiNameWeighted>;
    
    /**
     * Usually empty; can contain extra message describing some issue occurred during processing             
     */
    public comments: string;
    

    /**
     * Name variants             
     * @param names List of name variations             
     * @param comments Usually empty; can contain extra message describing some issue occurred during processing             
     */
    public constructor(
        names?: Array<AiNameWeighted>,
        comments?: string) {
        
        this.names = names;
        this.comments = comments;
    }
}

/**
 * Describes associated person.             
 */
export class AssociatedPerson {

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
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfAssociatedPersonCategory",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AssociatedPerson.attributeTypeMap;
    }

    /**
     * Associated person's name.             
     */
    public name: string;
    
    /**
     * Associated person's category.             
     */
    public category: EnumWithCustomOfAssociatedPersonCategory;
    
    /**
     * Defines whether associated person is preferred.             
     */
    public preferred: boolean;
    

    /**
     * Describes associated person.             
     * @param name Associated person's name.             
     * @param category Associated person's category.             
     * @param preferred Defines whether associated person is preferred.             
     */
    public constructor(
        name?: string,
        category?: EnumWithCustomOfAssociatedPersonCategory,
        preferred?: boolean) {
        
        this.name = name;
        this.category = category;
        this.preferred = preferred;
    }
}

/**
 * AttachmentBase class             
 */
export class AttachmentBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "base64Data",
            baseName: "base64Data",
            type: "string",
        },
        {
            name: "contentId",
            baseName: "contentId",
            type: "string",
        },
        {
            name: "contentType",
            baseName: "contentType",
            type: "ContentType",
        },
        {
            name: "headers",
            baseName: "headers",
            type: "{ [key: string]: string; }",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AttachmentBase.attributeTypeMap;
    }

    /**
     * Attachment file content as Base64 string.             
     */
    public base64Data: string;
    
    /**
     * Attachment content id             
     */
    public contentId: string;
    
    /**
     * Content type             
     */
    public contentType: ContentType;
    
    /**
     * Attachment headers.             
     */
    public headers: { [key: string]: string; };
    

    /**
     * AttachmentBase class             
     * @param base64Data Attachment file content as Base64 string.             
     * @param contentId Attachment content id             
     * @param contentType Content type             
     * @param headers Attachment headers.             
     */
    public constructor(
        base64Data?: string,
        contentId?: string,
        contentType?: ContentType,
        headers?: { [key: string]: string; }) {
        
        this.base64Data = base64Data;
        this.contentId = contentId;
        this.contentType = contentType;
        this.headers = headers;
    }
}

/**
 * Base property object             
 */
export class BaseObject {

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
            name: "type",
            baseName: "type",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BaseObject.attributeTypeMap;
    }

    /**
     * Gets or sets the name of an object.             
     */
    public name: string;
    
    /**
     * Property type. Used for deserialization purposes             
     */

    get type(): string {
        return this.constructor.name;
    }

    set type(_newType: string) {
        /* do nothing */
    }
    

    /**
     * Base property object             
     * @param name Gets or sets the name of an object.             
     * @param type Property type. Used for deserialization purposes             
     */
    public constructor(
        name?: string,
        type?: string) {
        
        this.name = name;
        this.type = type;
    }
}

/**
 * iCalendar document representation.             
 */
export class CalendarDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<Attachment>",
        },
        {
            name: "attendees",
            baseName: "attendees",
            type: "Array<MailAddress>",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        },
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        },
        {
            name: "endTimeZone",
            baseName: "endTimeZone",
            type: "string",
        },
        {
            name: "flags",
            baseName: "flags",
            type: "Array<string>",
        },
        {
            name: "isDescriptionHtml",
            baseName: "isDescriptionHtml",
            type: "boolean",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "method",
            baseName: "method",
            type: "string",
        },
        {
            name: "microsoftBusyStatus",
            baseName: "microsoftBusyStatus",
            type: "string",
        },
        {
            name: "microsoftIntendedStatus",
            baseName: "microsoftIntendedStatus",
            type: "string",
        },
        {
            name: "optionalAttendees",
            baseName: "optionalAttendees",
            type: "Array<MailAddress>",
        },
        {
            name: "organizer",
            baseName: "organizer",
            type: "MailAddress",
        },
        {
            name: "recurrenceString",
            baseName: "recurrenceString",
            type: "string",
        },
        {
            name: "recurrence",
            baseName: "recurrence",
            type: "RecurrencePatternDto",
        },
        {
            name: "reminders",
            baseName: "reminders",
            type: "Array<CalendarReminder>",
        },
        {
            name: "sequenceId",
            baseName: "sequenceId",
            type: "string",
        },
        {
            name: "startDate",
            baseName: "startDate",
            type: "Date",
        },
        {
            name: "startTimeZone",
            baseName: "startTimeZone",
            type: "string",
        },
        {
            name: "status",
            baseName: "status",
            type: "string",
        },
        {
            name: "summary",
            baseName: "summary",
            type: "string",
        },
        {
            name: "transparency",
            baseName: "transparency",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalendarDto.attributeTypeMap;
    }

    /**
     * Document attachments.
     */
    public attachments: Array<Attachment>;
    
    /**
     * Event attendees.
     */
    public attendees: Array<MailAddress>;
    
    /**
     * Description.
     */
    public description: string;
    
    /**
     * End date.
     */
    public endDate: Date;
    
    /**
     * End time zone.
     */
    public endTimeZone: string;
    
    /**
     * Appointment flags. Items: Enumerates iCalendar flags. Enum, available values: None, AllDayEvent
     */
    public flags: Array<string>;
    
    /**
     * Indicates if description is in HTML format.
     */
    public isDescriptionHtml: boolean;
    
    /**
     * Location.
     */
    public location: string;
    
    /**
     * Defines the iCalendar object method type associated with the calendar document. Enum, available values: None, Publish, Request, Reply, Add, Cancel, Refresh, Counter, DeclineCounter
     */
    public method: string;
    
    /**
     * Specifies the BUSY status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
     */
    public microsoftBusyStatus: string;
    
    /**
     * Specifies the INTENDED status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
     */
    public microsoftIntendedStatus: string;
    
    /**
     * Optional attendees.             
     */
    public optionalAttendees: Array<MailAddress>;
    
    /**
     * Event organizer.             
     */
    public organizer: MailAddress;
    
    /**
     * Deprecated, use 'Recurrence' property. String representation of recurrence pattern (See iCalendar RFC, \"Recurrence rule\" section). For example:               For daily recurrence:         \"FREQ=DAILY;COUNT=10;WKST=MO\"                   For monthly recurrence:         \"BYSETPOS=1;BYDAY=MO,TU,WE,TH,FR;FREQ=MONTHLY;INTERVAL=10;WKST=MO\"                   For yearly recurrence:         \"BYMONTHDAY=30;BYMONTH=1;FREQ=YEARLY;WKST=MO\"                   
     */
    public recurrenceString: string;
    
    /**
     * Recurrence pattern             
     */
    public recurrence: RecurrencePatternDto;
    
    /**
     * Reminders.
     */
    public reminders: Array<CalendarReminder>;
    
    /**
     * The sequence id. Read only.
     */
    public sequenceId: string;
    
    /**
     * Start date.
     */
    public startDate: Date;
    
    /**
     * Start time zone.
     */
    public startTimeZone: string;
    
    /**
     * Defines the overall status or confirmation for the calendar document. Enum, available values: NotDefined, Cancelled, Tentative, Confirmed
     */
    public status: string;
    
    /**
     * Summary.
     */
    public summary: string;
    
    /**
     * Specifies whether or not this appointment is intended to be visible in availability searches. Enum, available values: NotDefined, Transparent, Opaque
     */
    public transparency: string;
    

    /**
     * iCalendar document representation.             
     * @param attachments Document attachments.
     * @param attendees Event attendees.
     * @param description Description.
     * @param endDate End date.
     * @param endTimeZone End time zone.
     * @param flags Appointment flags.
     * @param isDescriptionHtml Indicates if description is in HTML format.
     * @param location Location.
     * @param method Defines the iCalendar object method type associated with the calendar document. Enum, available values: None, Publish, Request, Reply, Add, Cancel, Refresh, Counter, DeclineCounter
     * @param microsoftBusyStatus Specifies the BUSY status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
     * @param microsoftIntendedStatus Specifies the INTENDED status. Enum, available values: NotDefined, Free, Tentative, Busy, Oof
     * @param optionalAttendees Optional attendees.             
     * @param organizer Event organizer.             
     * @param recurrenceString Deprecated, use 'Recurrence' property. String representation of recurrence pattern (See iCalendar RFC, \"Recurrence rule\" section). For example:               For daily recurrence:         \"FREQ=DAILY;COUNT=10;WKST=MO\"                   For monthly recurrence:         \"BYSETPOS=1;BYDAY=MO,TU,WE,TH,FR;FREQ=MONTHLY;INTERVAL=10;WKST=MO\"                   For yearly recurrence:         \"BYMONTHDAY=30;BYMONTH=1;FREQ=YEARLY;WKST=MO\"                   
     * @param recurrence Recurrence pattern             
     * @param reminders Reminders.
     * @param sequenceId The sequence id. Read only.
     * @param startDate Start date.
     * @param startTimeZone Start time zone.
     * @param status Defines the overall status or confirmation for the calendar document. Enum, available values: NotDefined, Cancelled, Tentative, Confirmed
     * @param summary Summary.
     * @param transparency Specifies whether or not this appointment is intended to be visible in availability searches. Enum, available values: NotDefined, Transparent, Opaque
     */
    public constructor(
        attachments?: Array<Attachment>,
        attendees?: Array<MailAddress>,
        description?: string,
        endDate?: Date,
        endTimeZone?: string,
        flags?: Array<string>,
        isDescriptionHtml?: boolean,
        location?: string,
        method?: string,
        microsoftBusyStatus?: string,
        microsoftIntendedStatus?: string,
        optionalAttendees?: Array<MailAddress>,
        organizer?: MailAddress,
        recurrenceString?: string,
        recurrence?: RecurrencePatternDto,
        reminders?: Array<CalendarReminder>,
        sequenceId?: string,
        startDate?: Date,
        startTimeZone?: string,
        status?: string,
        summary?: string,
        transparency?: string) {
        
        this.attachments = attachments;
        this.attendees = attendees;
        this.description = description;
        this.endDate = endDate;
        this.endTimeZone = endTimeZone;
        this.flags = flags;
        this.isDescriptionHtml = isDescriptionHtml;
        this.location = location;
        this.method = method;
        this.microsoftBusyStatus = microsoftBusyStatus;
        this.microsoftIntendedStatus = microsoftIntendedStatus;
        this.optionalAttendees = optionalAttendees;
        this.organizer = organizer;
        this.recurrenceString = recurrenceString;
        this.recurrence = recurrence;
        this.reminders = reminders;
        this.sequenceId = sequenceId;
        this.startDate = startDate;
        this.startTimeZone = startTimeZone;
        this.status = status;
        this.summary = summary;
        this.transparency = transparency;
    }
}

/**
 * iCalendar document as AlternateView request             
 */
export class CalendarDtoAlternateRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "CalendarDto",
        },
        {
            name: "action",
            baseName: "action",
            type: "string",
        },
        {
            name: "sequenceId",
            baseName: "sequenceId",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalendarDtoAlternateRq.attributeTypeMap;
    }

    /**
     * iCalendar document model             
     */
    public value: CalendarDto;
    
    /**
     * iCalendar actions. Enum, available values: Create, Update, Cancel
     */
    public action: string;
    
    /**
     * iCalendar sequence id             
     */
    public sequenceId: string;
    

    /**
     * iCalendar document as AlternateView request             
     * @param value iCalendar document model             
     * @param action iCalendar actions. Enum, available values: Create, Update, Cancel
     * @param sequenceId iCalendar sequence id             
     */
    public constructor(
        value?: CalendarDto,
        action?: string,
        sequenceId?: string) {
        
        this.value = value;
        this.action = action;
        this.sequenceId = sequenceId;
    }
}

/**
 * Provides a grouping of component properties that define an alarm.             
 */
export class CalendarReminder {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "action",
            baseName: "action",
            type: "string",
        },
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<string>",
        },
        {
            name: "attendees",
            baseName: "attendees",
            type: "Array<ReminderAttendee>",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        },
        {
            name: "duration",
            baseName: "duration",
            type: "number",
        },
        {
            name: "repeat",
            baseName: "repeat",
            type: "number",
        },
        {
            name: "summary",
            baseName: "summary",
            type: "string",
        },
        {
            name: "trigger",
            baseName: "trigger",
            type: "ReminderTrigger",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalendarReminder.attributeTypeMap;
    }

    /**
     * Defines the action to be invoked when an alarm is triggered. Enum, available values: Audio, Display, Email, Procedure, None
     */
    public action: string;
    
    /**
     * Collection of Reminder Attachments. Could be an absolute URI or Base64 string representation of attachment content             
     */
    public attachments: Array<string>;
    
    /**
     * Contains collection of ReminderAttendee objects.             
     */
    public attendees: Array<ReminderAttendee>;
    
    /**
     * Provides a more complete description of the alarm.
     */
    public description: string;
    
    /**
     * Specifies the delay period in ticks, after which the alarm will repeat.             
     */
    public duration: number;
    
    /**
     * Defines the number of time the alarm should be repeated, after the initial trigger.             
     */
    public repeat: number;
    
    /**
     * Defines a short summary or subject for the alarm.
     */
    public summary: string;
    
    /**
     * Specifies when an alarm will trigger.
     */
    public trigger: ReminderTrigger;
    

    /**
     * Provides a grouping of component properties that define an alarm.             
     * @param action Defines the action to be invoked when an alarm is triggered. Enum, available values: Audio, Display, Email, Procedure, None
     * @param attachments Collection of Reminder Attachments. Could be an absolute URI or Base64 string representation of attachment content             
     * @param attendees Contains collection of ReminderAttendee objects.             
     * @param description Provides a more complete description of the alarm.
     * @param duration Specifies the delay period in ticks, after which the alarm will repeat.             
     * @param repeat Defines the number of time the alarm should be repeated, after the initial trigger.             
     * @param summary Defines a short summary or subject for the alarm.
     * @param trigger Specifies when an alarm will trigger.
     */
    public constructor(
        action?: string,
        attachments?: Array<string>,
        attendees?: Array<ReminderAttendee>,
        description?: string,
        duration?: number,
        repeat?: number,
        summary?: string,
        trigger?: ReminderTrigger) {
        
        this.action = action;
        this.attachments = attachments;
        this.attendees = attendees;
        this.description = description;
        this.duration = duration;
        this.repeat = repeat;
        this.summary = summary;
        this.trigger = trigger;
    }
}

/**
 * VCard document representation.             
 */
export class ContactDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "associatedPersons",
            baseName: "associatedPersons",
            type: "Array<AssociatedPerson>",
        },
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<Attachment>",
        },
        {
            name: "companyName",
            baseName: "companyName",
            type: "string",
        },
        {
            name: "computerNetworkName",
            baseName: "computerNetworkName",
            type: "string",
        },
        {
            name: "customerId",
            baseName: "customerId",
            type: "string",
        },
        {
            name: "departmentName",
            baseName: "departmentName",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "emailAddresses",
            baseName: "emailAddresses",
            type: "Array<EmailAddress>",
        },
        {
            name: "events",
            baseName: "events",
            type: "Array<CustomerEvent>",
        },
        {
            name: "fileAs",
            baseName: "fileAs",
            type: "string",
        },
        {
            name: "fileAsMapping",
            baseName: "fileAsMapping",
            type: "string",
        },
        {
            name: "freeBusyLocation",
            baseName: "freeBusyLocation",
            type: "string",
        },
        {
            name: "gender",
            baseName: "gender",
            type: "string",
        },
        {
            name: "givenName",
            baseName: "givenName",
            type: "string",
        },
        {
            name: "governmentIdNumber",
            baseName: "governmentIdNumber",
            type: "string",
        },
        {
            name: "hobbies",
            baseName: "hobbies",
            type: "string",
        },
        {
            name: "initials",
            baseName: "initials",
            type: "string",
        },
        {
            name: "instantMessengers",
            baseName: "instantMessengers",
            type: "Array<InstantMessengerAddress>",
        },
        {
            name: "jobTitle",
            baseName: "jobTitle",
            type: "string",
        },
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
            name: "middleName",
            baseName: "middleName",
            type: "string",
        },
        {
            name: "nickname",
            baseName: "nickname",
            type: "string",
        },
        {
            name: "notes",
            baseName: "notes",
            type: "string",
        },
        {
            name: "notesFormat",
            baseName: "notesFormat",
            type: "string",
        },
        {
            name: "officeLocation",
            baseName: "officeLocation",
            type: "string",
        },
        {
            name: "organizationalIdNumber",
            baseName: "organizationalIdNumber",
            type: "string",
        },
        {
            name: "phoneNumbers",
            baseName: "phoneNumbers",
            type: "Array<PhoneNumber>",
        },
        {
            name: "photo",
            baseName: "photo",
            type: "ContactPhoto",
        },
        {
            name: "physicalAddresses",
            baseName: "physicalAddresses",
            type: "Array<PostalAddress>",
        },
        {
            name: "preferredTextEncoding",
            baseName: "preferredTextEncoding",
            type: "string",
        },
        {
            name: "prefix",
            baseName: "prefix",
            type: "string",
        },
        {
            name: "profession",
            baseName: "profession",
            type: "string",
        },
        {
            name: "suffix",
            baseName: "suffix",
            type: "string",
        },
        {
            name: "surname",
            baseName: "surname",
            type: "string",
        },
        {
            name: "urls",
            baseName: "urls",
            type: "Array<Url>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContactDto.attributeTypeMap;
    }

    /**
     * Associated persons.             
     */
    public associatedPersons: Array<AssociatedPerson>;
    
    /**
     * Document attachments.             
     */
    public attachments: Array<Attachment>;
    
    /**
     * Company name.             
     */
    public companyName: string;
    
    /**
     * Computer network.             
     */
    public computerNetworkName: string;
    
    /**
     * Customer id.             
     */
    public customerId: string;
    
    /**
     * Department name.             
     */
    public departmentName: string;
    
    /**
     * Display name.             
     */
    public displayName: string;
    
    /**
     * Person's email addresses.             
     */
    public emailAddresses: Array<EmailAddress>;
    
    /**
     * Person's events.             
     */
    public events: Array<CustomerEvent>;
    
    /**
     * A name used for sorting.             
     */
    public fileAs: string;
    
    /**
     * Specifies how to generate and recompute the value of the dispidFileAs property when other contact name properties change. Coincides MS-OXPROPS revision 16.2 from 7/31/2014. Enum, available values: Empty, DisplayName, FirstName, LastName, Organization, LastFirstMiddle, OrgLastFirstMiddle, LastFirstMiddleOrg, LastFirstMiddle2, LastFirstMiddle3, OrgLastFirstMiddle2, OrgLastFirstMiddle3, LastFirstMiddleOrg2, LastFirstMiddleOrg3, LastFirstMiddleGen, FirstMiddleLastGen, LastFirstMiddleGen2, BestMatch, AccordingToLocale, None
     */
    public fileAsMapping: string;
    
    /**
     * URL path from which a client can retrieve free/busy information for the contact as an iCal file.             
     */
    public freeBusyLocation: string;
    
    /**
     * Enum defines gender of a person. Enum, available values: Unspecified, Female, Male
     */
    public gender: string;
    
    /**
     * Person's given name.             
     */
    public givenName: string;
    
    /**
     * Government id number.             
     */
    public governmentIdNumber: string;
    
    /**
     * Person's hobbies.             
     */
    public hobbies: string;
    
    /**
     * Person's initials.             
     */
    public initials: string;
    
    /**
     * Person's instant messenger addresses.             
     */
    public instantMessengers: Array<InstantMessengerAddress>;
    
    /**
     * Person's job title.             
     */
    public jobTitle: string;
    
    /**
     * Language.             
     */
    public language: string;
    
    /**
     * Person's location.             
     */
    public location: string;
    
    /**
     * Person's middle name.             
     */
    public middleName: string;
    
    /**
     * Person's nickname.             
     */
    public nickname: string;
    
    /**
     * Notes.             
     */
    public notes: string;
    
    /**
     * Defines format of a text. Enum, available values: Text, Html
     */
    public notesFormat: string;
    
    /**
     * Office location.             
     */
    public officeLocation: string;
    
    /**
     * Contains an identifier for the mail user used within the mail user's organization.             
     */
    public organizationalIdNumber: string;
    
    /**
     * Person's phone numbers.             
     */
    public phoneNumbers: Array<PhoneNumber>;
    
    /**
     * Person's photo.             
     */
    public photo: ContactPhoto;
    
    /**
     * Person's physical addresses.             
     */
    public physicalAddresses: Array<PostalAddress>;
    
    /**
     * Encoding for all text properties.             
     */
    public preferredTextEncoding: string;
    
    /**
     * A prefix of a full name such like Mr.(mister), Dr.(doctor) and so on.             
     */
    public prefix: string;
    
    /**
     * A job position of a person in a company.             
     */
    public profession: string;
    
    /**
     * A suffix of a full name such like Jr.(junior), Sr.(senior) and so on.             
     */
    public suffix: string;
    
    /**
     * Person's surname.             
     */
    public surname: string;
    
    /**
     * Person's urls.             
     */
    public urls: Array<Url>;
    

    /**
     * VCard document representation.             
     * @param associatedPersons Associated persons.             
     * @param attachments Document attachments.             
     * @param companyName Company name.             
     * @param computerNetworkName Computer network.             
     * @param customerId Customer id.             
     * @param departmentName Department name.             
     * @param displayName Display name.             
     * @param emailAddresses Person's email addresses.             
     * @param events Person's events.             
     * @param fileAs A name used for sorting.             
     * @param fileAsMapping Specifies how to generate and recompute the value of the dispidFileAs property when other contact name properties change. Coincides MS-OXPROPS revision 16.2 from 7/31/2014. Enum, available values: Empty, DisplayName, FirstName, LastName, Organization, LastFirstMiddle, OrgLastFirstMiddle, LastFirstMiddleOrg, LastFirstMiddle2, LastFirstMiddle3, OrgLastFirstMiddle2, OrgLastFirstMiddle3, LastFirstMiddleOrg2, LastFirstMiddleOrg3, LastFirstMiddleGen, FirstMiddleLastGen, LastFirstMiddleGen2, BestMatch, AccordingToLocale, None
     * @param freeBusyLocation URL path from which a client can retrieve free/busy information for the contact as an iCal file.             
     * @param gender Enum defines gender of a person. Enum, available values: Unspecified, Female, Male
     * @param givenName Person's given name.             
     * @param governmentIdNumber Government id number.             
     * @param hobbies Person's hobbies.             
     * @param initials Person's initials.             
     * @param instantMessengers Person's instant messenger addresses.             
     * @param jobTitle Person's job title.             
     * @param language Language.             
     * @param location Person's location.             
     * @param middleName Person's middle name.             
     * @param nickname Person's nickname.             
     * @param notes Notes.             
     * @param notesFormat Defines format of a text. Enum, available values: Text, Html
     * @param officeLocation Office location.             
     * @param organizationalIdNumber Contains an identifier for the mail user used within the mail user's organization.             
     * @param phoneNumbers Person's phone numbers.             
     * @param photo Person's photo.             
     * @param physicalAddresses Person's physical addresses.             
     * @param preferredTextEncoding Encoding for all text properties.             
     * @param prefix A prefix of a full name such like Mr.(mister), Dr.(doctor) and so on.             
     * @param profession A job position of a person in a company.             
     * @param suffix A suffix of a full name such like Jr.(junior), Sr.(senior) and so on.             
     * @param surname Person's surname.             
     * @param urls Person's urls.             
     */
    public constructor(
        associatedPersons?: Array<AssociatedPerson>,
        attachments?: Array<Attachment>,
        companyName?: string,
        computerNetworkName?: string,
        customerId?: string,
        departmentName?: string,
        displayName?: string,
        emailAddresses?: Array<EmailAddress>,
        events?: Array<CustomerEvent>,
        fileAs?: string,
        fileAsMapping?: string,
        freeBusyLocation?: string,
        gender?: string,
        givenName?: string,
        governmentIdNumber?: string,
        hobbies?: string,
        initials?: string,
        instantMessengers?: Array<InstantMessengerAddress>,
        jobTitle?: string,
        language?: string,
        location?: string,
        middleName?: string,
        nickname?: string,
        notes?: string,
        notesFormat?: string,
        officeLocation?: string,
        organizationalIdNumber?: string,
        phoneNumbers?: Array<PhoneNumber>,
        photo?: ContactPhoto,
        physicalAddresses?: Array<PostalAddress>,
        preferredTextEncoding?: string,
        prefix?: string,
        profession?: string,
        suffix?: string,
        surname?: string,
        urls?: Array<Url>) {
        
        this.associatedPersons = associatedPersons;
        this.attachments = attachments;
        this.companyName = companyName;
        this.computerNetworkName = computerNetworkName;
        this.customerId = customerId;
        this.departmentName = departmentName;
        this.displayName = displayName;
        this.emailAddresses = emailAddresses;
        this.events = events;
        this.fileAs = fileAs;
        this.fileAsMapping = fileAsMapping;
        this.freeBusyLocation = freeBusyLocation;
        this.gender = gender;
        this.givenName = givenName;
        this.governmentIdNumber = governmentIdNumber;
        this.hobbies = hobbies;
        this.initials = initials;
        this.instantMessengers = instantMessengers;
        this.jobTitle = jobTitle;
        this.language = language;
        this.location = location;
        this.middleName = middleName;
        this.nickname = nickname;
        this.notes = notes;
        this.notesFormat = notesFormat;
        this.officeLocation = officeLocation;
        this.organizationalIdNumber = organizationalIdNumber;
        this.phoneNumbers = phoneNumbers;
        this.photo = photo;
        this.physicalAddresses = physicalAddresses;
        this.preferredTextEncoding = preferredTextEncoding;
        this.prefix = prefix;
        this.profession = profession;
        this.suffix = suffix;
        this.surname = surname;
        this.urls = urls;
    }
}

/**
 * Person's photo.             
 */
export class ContactPhoto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "photoImageFormat",
            baseName: "photoImageFormat",
            type: "string",
        },
        {
            name: "base64Data",
            baseName: "base64Data",
            type: "string",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContactPhoto.attributeTypeMap;
    }

    /**
     * MapiContact photo image format. Enum, available values: Undefined, Jpeg, Gif, Wmf, Bmp, Tiff
     */
    public photoImageFormat: string;
    
    /**
     * Photo serialized as base64 string.             
     */
    public base64Data: string;
    

    get discriminator(): string {
        return this.constructor.name;
    }

    set discriminator(_newType: string) {
        /* do nothing */
    }
    

    /**
     * Person's photo.             
     * @param photoImageFormat MapiContact photo image format. Enum, available values: Undefined, Jpeg, Gif, Wmf, Bmp, Tiff
     * @param base64Data Photo serialized as base64 string.             
     * @param discriminator 
     */
    public constructor(
        photoImageFormat?: string,
        base64Data?: string,
        discriminator?: string) {
        
        this.photoImageFormat = photoImageFormat;
        this.base64Data = base64Data;
        this.discriminator = discriminator;
    }
}

/**
 * Represents a Content-Type header.             
 */
export class ContentType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "boundary",
            baseName: "boundary",
            type: "string",
        },
        {
            name: "charSet",
            baseName: "charSet",
            type: "string",
        },
        {
            name: "mediaType",
            baseName: "mediaType",
            type: "string",
        },
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "parameters",
            baseName: "parameters",
            type: "Array<ContentTypeParameter>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContentType.attributeTypeMap;
    }

    /**
     * The boundary parameter included in the Content-Type header.             
     */
    public boundary: string;
    
    /**
     * CharSet parameter.             
     */
    public charSet: string;
    
    /**
     * The internet media type.             
     */
    public mediaType: string;
    
    /**
     * Name parameter.             
     */
    public name: string;
    
    /**
     * Full list of parameters             
     */
    public parameters: Array<ContentTypeParameter>;
    

    /**
     * Represents a Content-Type header.             
     * @param boundary The boundary parameter included in the Content-Type header.             
     * @param charSet CharSet parameter.             
     * @param mediaType The internet media type.             
     * @param name Name parameter.             
     * @param parameters Full list of parameters             
     */
    public constructor(
        boundary?: string,
        charSet?: string,
        mediaType?: string,
        name?: string,
        parameters?: Array<ContentTypeParameter>) {
        
        this.boundary = boundary;
        this.charSet = charSet;
        this.mediaType = mediaType;
        this.name = name;
        this.parameters = parameters;
    }
}

/**
 * Content-Type header parameter             
 */
export class ContentTypeParameter {

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
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContentTypeParameter.attributeTypeMap;
    }

    /**
     * Parameter name             
     */
    public name: string;
    
    /**
     * Parameter value             
     */
    public value: string;
    

    /**
     * Content-Type header parameter             
     * @param name Parameter name             
     * @param value Parameter value             
     */
    public constructor(
        name?: string,
        value?: string) {
        
        this.name = name;
        this.value = value;
    }
}

/**
 * Create email document request             
 */
export class CreateEmailRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emailDocument",
            baseName: "emailDocument",
            type: "EmailDocument",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CreateEmailRequest.attributeTypeMap;
    }

    /**
     * An email document that should be created             
     */
    public emailDocument: EmailDocument;
    
    /**
     * Email document location in storage             
     */
    public storageFolder: StorageFolderLocation;
    

    /**
     * Create email document request             
     * @param emailDocument An email document that should be created             
     * @param storageFolder Email document location in storage             
     */
    public constructor(
        emailDocument?: EmailDocument,
        storageFolder?: StorageFolderLocation) {
        
        this.emailDocument = emailDocument;
        this.storageFolder = storageFolder;
    }
}

/**
 * Event.             
 */
export class CustomerEvent {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfEventCategory",
        },
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CustomerEvent.attributeTypeMap;
    }

    /**
     * Event category.             
     */
    public category: EnumWithCustomOfEventCategory;
    
    /**
     * Event date.             
     */
    public date: Date;
    

    /**
     * Event.             
     * @param category Event category.             
     * @param date Event date.             
     */
    public constructor(
        category?: EnumWithCustomOfEventCategory,
        date?: Date) {
        
        this.category = category;
        this.date = date;
    }
}

export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    public usedSize: number;
    
    public totalSize: number;
    

    /**
     * 
     * @param usedSize 
     * @param totalSize 
     */
    public constructor(
        usedSize?: number,
        totalSize?: number) {
        
        this.usedSize = usedSize;
        this.totalSize = totalSize;
    }
}

/**
 * Discover email configuration request.             
 */
export class DiscoverEmailConfigRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "fastProcessing",
            baseName: "fastProcessing",
            type: "boolean",
        },
        {
            name: "login",
            baseName: "login",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscoverEmailConfigRq.attributeTypeMap;
    }

    /**
     * Email address to discover.             
     */
    public address: string;
    
    /**
     * Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.             
     */
    public fastProcessing: boolean;
    
    /**
     * Email account login. If not specified, address used as a login.             
     */
    public login: string;
    

    /**
     * Discover email configuration request.             
     * @param address Email address to discover.             
     * @param fastProcessing Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.             
     * @param login Email account login. If not specified, address used as a login.             
     */
    public constructor(
        address?: string,
        fastProcessing?: boolean,
        login?: string) {
        
        this.address = address;
        this.fastProcessing = fastProcessing;
        this.login = login;
    }
}

/**
 * Email account configuration.             
 */
export class EmailAccountConfig {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "protocolType",
            baseName: "protocolType",
            type: "string",
        },
        {
            name: "host",
            baseName: "host",
            type: "string",
        },
        {
            name: "port",
            baseName: "port",
            type: "number",
        },
        {
            name: "socketType",
            baseName: "socketType",
            type: "string",
        },
        {
            name: "authenticationTypes",
            baseName: "authenticationTypes",
            type: "Array<string>",
        },
        {
            name: "extraInfo",
            baseName: "extraInfo",
            type: "Array<NameValuePair>",
        },
        {
            name: "isValidated",
            baseName: "isValidated",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailAccountConfig.attributeTypeMap;
    }

    /**
     * Email account display name             
     */
    public displayName: string;
    
    /**
     * Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     */
    public protocolType: string;
    
    /**
     * Email account host.             
     */
    public host: string;
    
    /**
     * Port.             
     */
    public port: number;
    
    /**
     * Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     */
    public socketType: string;
    
    /**
     * Supported authentication types.              Items: Email account authentication types. Enum, available values: NoAuth, OAuth2, PasswordCleartext, PasswordEncrypted, SmtpAfterPop, ClientIpAddress
     */
    public authenticationTypes: Array<string>;
    
    /**
     * Extra account information.             
     */
    public extraInfo: Array<NameValuePair>;
    
    /**
     * Determines that configuration validated. Set to false if validation skipped.             
     */
    public isValidated: boolean;
    

    /**
     * Email account configuration.             
     * @param displayName Email account display name             
     * @param protocolType Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     * @param host Email account host.             
     * @param port Port.             
     * @param socketType Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     * @param authenticationTypes Supported authentication types.             
     * @param extraInfo Extra account information.             
     * @param isValidated Determines that configuration validated. Set to false if validation skipped.             
     */
    public constructor(
        displayName?: string,
        protocolType?: string,
        host?: string,
        port?: number,
        socketType?: string,
        authenticationTypes?: Array<string>,
        extraInfo?: Array<NameValuePair>,
        isValidated?: boolean) {
        
        this.displayName = displayName;
        this.protocolType = protocolType;
        this.host = host;
        this.port = port;
        this.socketType = socketType;
        this.authenticationTypes = authenticationTypes;
        this.extraInfo = extraInfo;
        this.isValidated = isValidated;
    }
}

/**
 * Email account settings request             
 */
export class EmailAccountRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "host",
            baseName: "host",
            type: "string",
        },
        {
            name: "port",
            baseName: "port",
            type: "number",
        },
        {
            name: "login",
            baseName: "login",
            type: "string",
        },
        {
            name: "securityOptions",
            baseName: "securityOptions",
            type: "string",
        },
        {
            name: "protocolType",
            baseName: "protocolType",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        },
        {
            name: "storageFile",
            baseName: "storageFile",
            type: "StorageFileLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailAccountRequest.attributeTypeMap;
    }

    /**
     * Email account host             
     */
    public host: string;
    
    /**
     * Email account port             
     */
    public port: number;
    
    /**
     * Email account login             
     */
    public login: string;
    
    /**
     * Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     */
    public securityOptions: string;
    
    /**
     * Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     */
    public protocolType: string;
    
    /**
     * Email account description             
     */
    public description: string;
    
    /**
     * A storage file location info to store email account             
     */
    public storageFile: StorageFileLocation;
    

    /**
     * Email account settings request             
     * @param host Email account host             
     * @param port Email account port             
     * @param login Email account login             
     * @param securityOptions Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     * @param protocolType Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     * @param description Email account description             
     * @param storageFile A storage file location info to store email account             
     */
    public constructor(
        host?: string,
        port?: number,
        login?: string,
        securityOptions?: string,
        protocolType?: string,
        description?: string,
        storageFile?: StorageFileLocation) {
        
        this.host = host;
        this.port = port;
        this.login = login;
        this.securityOptions = securityOptions;
        this.protocolType = protocolType;
        this.description = description;
        this.storageFile = storageFile;
    }
}

/**
 * Email address.             
 */
export class EmailAddress {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfEmailAddressCategory",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        },
        {
            name: "routingType",
            baseName: "routingType",
            type: "string",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "originalAddressString",
            baseName: "originalAddressString",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailAddress.attributeTypeMap;
    }

    /**
     * Address category.             
     */
    public category: EnumWithCustomOfEmailAddressCategory;
    
    /**
     * Display name.             
     */
    public displayName: string;
    
    /**
     * Defines whether email address is preferred.             
     */
    public preferred: boolean;
    
    /**
     * A routing type for an email.             
     */
    public routingType: string;
    
    /**
     * Email address.             
     */
    public address: string;
    
    /**
     * The original e-mail address string             
     */
    public originalAddressString: string;
    

    /**
     * Email address.             
     * @param category Address category.             
     * @param displayName Display name.             
     * @param preferred Defines whether email address is preferred.             
     * @param routingType A routing type for an email.             
     * @param address Email address.             
     * @param originalAddressString The original e-mail address string             
     */
    public constructor(
        category?: EnumWithCustomOfEmailAddressCategory,
        displayName?: string,
        preferred?: boolean,
        routingType?: string,
        address?: string,
        originalAddressString?: string) {
        
        this.category = category;
        this.displayName = displayName;
        this.preferred = preferred;
        this.routingType = routingType;
        this.address = address;
        this.originalAddressString = originalAddressString;
    }
}

/**
 * A universal email client account             
 */
export class EmailClientAccount {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "host",
            baseName: "host",
            type: "string",
        },
        {
            name: "port",
            baseName: "port",
            type: "number",
        },
        {
            name: "securityOptions",
            baseName: "securityOptions",
            type: "string",
        },
        {
            name: "protocolType",
            baseName: "protocolType",
            type: "string",
        },
        {
            name: "credentials",
            baseName: "credentials",
            type: "EmailClientAccountCredentials",
        },
        {
            name: "cacheFile",
            baseName: "cacheFile",
            type: "StorageFileLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailClientAccount.attributeTypeMap;
    }

    /**
     * Mail server host name or IP address             
     */
    public host: string;
    
    /**
     * Mail server port             
     */
    public port: number;
    
    /**
     * Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     */
    public securityOptions: string;
    
    /**
     * Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     */
    public protocolType: string;
    
    /**
     * Email client account credentials             
     */
    public credentials: EmailClientAccountCredentials;
    
    /**
     * File with messages cache. Used to provide extra functions, which are not supported by account             
     */
    public cacheFile: StorageFileLocation;
    

    /**
     * A universal email client account             
     * @param host Mail server host name or IP address             
     * @param port Mail server port             
     * @param securityOptions Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     * @param protocolType Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     * @param credentials Email client account credentials             
     * @param cacheFile File with messages cache. Used to provide extra functions, which are not supported by account             
     */
    public constructor(
        host?: string,
        port?: number,
        securityOptions?: string,
        protocolType?: string,
        credentials?: EmailClientAccountCredentials,
        cacheFile?: StorageFileLocation) {
        
        this.host = host;
        this.port = port;
        this.securityOptions = securityOptions;
        this.protocolType = protocolType;
        this.credentials = credentials;
        this.cacheFile = cacheFile;
    }
}

/**
 * Represents email client account credentials             
 */
export class EmailClientAccountCredentials {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "login",
            baseName: "login",
            type: "string",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailClientAccountCredentials.attributeTypeMap;
    }

    /**
     * Email client account login             
     */
    public login: string;
    

    get discriminator(): string {
        return this.constructor.name;
    }

    set discriminator(_newType: string) {
        /* do nothing */
    }
    

    /**
     * Represents email client account credentials             
     * @param login Email client account login             
     * @param discriminator 
     */
    public constructor(
        login?: string,
        discriminator?: string) {
        
        this.login = login;
        this.discriminator = discriminator;
    }
}

/**
 * Email client virtual account, which contains several accounts             
 */
export class EmailClientMultiAccount {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "receiveAccounts",
            baseName: "receiveAccounts",
            type: "Array<EmailClientAccount>",
        },
        {
            name: "sendAccount",
            baseName: "sendAccount",
            type: "EmailClientAccount",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailClientMultiAccount.attributeTypeMap;
    }

    /**
     * Email client receive accounts             
     */
    public receiveAccounts: Array<EmailClientAccount>;
    
    /**
     * Email client send account             
     */
    public sendAccount: EmailClientAccount;
    

    /**
     * Email client virtual account, which contains several accounts             
     * @param receiveAccounts Email client receive accounts             
     * @param sendAccount Email client send account             
     */
    public constructor(
        receiveAccounts?: Array<EmailClientAccount>,
        sendAccount?: EmailClientAccount) {
        
        this.receiveAccounts = receiveAccounts;
        this.sendAccount = sendAccount;
    }
}

/**
 * Represents Email document DTO.             
 */
export class EmailDocument {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "links",
            baseName: "links",
            type: "Array<Link>",
        },
        {
            name: "documentProperties",
            baseName: "documentProperties",
            type: "EmailProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailDocument.attributeTypeMap;
    }

    /**
     * Links that originate from this document.             
     */
    public links: Array<Link>;
    
    /**
     * List of document properties.             
     */
    public documentProperties: EmailProperties;
    

    /**
     * Represents Email document DTO.             
     * @param links Links that originate from this document.             
     * @param documentProperties List of document properties.             
     */
    public constructor(
        links?: Array<Link>,
        documentProperties?: EmailProperties) {
        
        this.links = links;
        this.documentProperties = documentProperties;
    }
}

/**
 * An email document response             
 */
export class EmailDocumentResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "document",
            baseName: "document",
            type: "EmailDocument",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailDocumentResponse.attributeTypeMap;
    }

    /**
     * An email document requested             
     */
    public document: EmailDocument;
    

    /**
     * An email document response             
     * @param document An email document requested             
     */
    public constructor(
        document?: EmailDocument) {
        
        this.document = document;
    }
}

/**
 * Email message representation.             
 */
export class EmailDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "alternateViews",
            baseName: "alternateViews",
            type: "Array<AlternateView>",
        },
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<Attachment>",
        },
        {
            name: "bcc",
            baseName: "bcc",
            type: "Array<MailAddress>",
        },
        {
            name: "body",
            baseName: "body",
            type: "string",
        },
        {
            name: "bodyEncoding",
            baseName: "bodyEncoding",
            type: "string",
        },
        {
            name: "bodyType",
            baseName: "bodyType",
            type: "string",
        },
        {
            name: "cc",
            baseName: "cc",
            type: "Array<MailAddress>",
        },
        {
            name: "date",
            baseName: "date",
            type: "Date",
        },
        {
            name: "deliveryNotificationOptions",
            baseName: "deliveryNotificationOptions",
            type: "Array<string>",
        },
        {
            name: "from",
            baseName: "from",
            type: "MailAddress",
        },
        {
            name: "headers",
            baseName: "headers",
            type: "{ [key: string]: string; }",
        },
        {
            name: "htmlBody",
            baseName: "htmlBody",
            type: "string",
        },
        {
            name: "htmlBodyText",
            baseName: "htmlBodyText",
            type: "string",
        },
        {
            name: "isBodyHtml",
            baseName: "isBodyHtml",
            type: "boolean",
        },
        {
            name: "isDraft",
            baseName: "isDraft",
            type: "boolean",
        },
        {
            name: "isEncrypted",
            baseName: "isEncrypted",
            type: "boolean",
        },
        {
            name: "isSigned",
            baseName: "isSigned",
            type: "boolean",
        },
        {
            name: "linkedResources",
            baseName: "linkedResources",
            type: "Array<LinkedResource>",
        },
        {
            name: "messageId",
            baseName: "messageId",
            type: "string",
        },
        {
            name: "originalIsTnef",
            baseName: "originalIsTnef",
            type: "boolean",
        },
        {
            name: "preferredTextEncoding",
            baseName: "preferredTextEncoding",
            type: "string",
        },
        {
            name: "priority",
            baseName: "priority",
            type: "string",
        },
        {
            name: "readReceiptTo",
            baseName: "readReceiptTo",
            type: "Array<MailAddress>",
        },
        {
            name: "replyToList",
            baseName: "replyToList",
            type: "Array<MailAddress>",
        },
        {
            name: "reversePath",
            baseName: "reversePath",
            type: "MailAddress",
        },
        {
            name: "sender",
            baseName: "sender",
            type: "MailAddress",
        },
        {
            name: "sensitivity",
            baseName: "sensitivity",
            type: "string",
        },
        {
            name: "subject",
            baseName: "subject",
            type: "string",
        },
        {
            name: "subjectEncoding",
            baseName: "subjectEncoding",
            type: "string",
        },
        {
            name: "timeZoneOffset",
            baseName: "timeZoneOffset",
            type: "number",
        },
        {
            name: "to",
            baseName: "to",
            type: "Array<MailAddress>",
        },
        {
            name: "xMailer",
            baseName: "xMailer",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailDto.attributeTypeMap;
    }

    /**
     * Collection of alternate views of message.             
     */
    public alternateViews: Array<AlternateView>;
    
    /**
     * Email message attachments.             
     */
    public attachments: Array<Attachment>;
    
    /**
     * BCC recipients.             
     */
    public bcc: Array<MailAddress>;
    
    /**
     * Email message body as plain text.             
     */
    public body: string;
    
    /**
     * Body encoding.             
     */
    public bodyEncoding: string;
    
    /**
     * The content type of message body. Enum, available values: PlainText, Html, Rtf
     */
    public bodyType: string;
    
    /**
     * CC recipients.             
     */
    public cc: Array<MailAddress>;
    
    /**
     * Message date.             
     */
    public date: Date;
    
    /**
     * Delivery notifications. Items: Email delivery notification options. Enum, available values: Delay, Never, None, OnFailure, OnSuccess
     */
    public deliveryNotificationOptions: Array<string>;
    
    /**
     * From address.             
     */
    public from: MailAddress;
    
    /**
     * Document headers.             
     */
    public headers: { [key: string]: string; };
    
    /**
     * HTML body.             
     */
    public htmlBody: string;
    
    /**
     * Html body as plain text. Read only.             
     */
    public htmlBodyText: string;
    
    /**
     * Indicates whether the message body is in Html.             
     */
    public isBodyHtml: boolean;
    
    /**
     * Indicates whether or not a message has been sent.             
     */
    public isDraft: boolean;
    
    /**
     * Indicates whether the message is encrypted. Read only.             
     */
    public isEncrypted: boolean;
    
    /**
     * Indicates whether the message is signed. Read only.             
     */
    public isSigned: boolean;
    
    /**
     * Linked resources of message.             
     */
    public linkedResources: Array<LinkedResource>;
    
    /**
     * Message id.             
     */
    public messageId: string;
    
    /**
     * Indicates whether original EML message is in TNEF format. Read only.             
     */
    public originalIsTnef: boolean;
    
    /**
     * Preferred encoding.             
     */
    public preferredTextEncoding: string;
    
    /**
     * Email priority status. Enum, available values: High, Low, Normal
     */
    public priority: string;
    
    /**
     * Read receipt addresses.             
     */
    public readReceiptTo: Array<MailAddress>;
    
    /**
     * The list of addresses to reply to for the mail message.             
     */
    public replyToList: Array<MailAddress>;
    
    /**
     * ReversePath address.             
     */
    public reversePath: MailAddress;
    
    /**
     * Sender address.             
     */
    public sender: MailAddress;
    
    /**
     * Specifies the sensitivity of a MailMessage. Enum, available values: None, Normal, Personal, Private, CompanyConfidential
     */
    public sensitivity: string;
    
    /**
     * Message subject.             
     */
    public subject: string;
    
    /**
     * Subject encoding.             
     */
    public subjectEncoding: string;
    
    /**
     * Coordinated Universal Time (UTC) offset for the message dates. This property defines the time zone difference, between the local time and UTC represented as count of ticks (10 000 per millisecond).             
     */
    public timeZoneOffset: number;
    
    /**
     * The address collection that contains the recipients of message.             
     */
    public to: Array<MailAddress>;
    
    /**
     * The X-Mailer the software that created the e-mail message.             
     */
    public xMailer: string;
    

    /**
     * Email message representation.             
     * @param alternateViews Collection of alternate views of message.             
     * @param attachments Email message attachments.             
     * @param bcc BCC recipients.             
     * @param body Email message body as plain text.             
     * @param bodyEncoding Body encoding.             
     * @param bodyType The content type of message body. Enum, available values: PlainText, Html, Rtf
     * @param cc CC recipients.             
     * @param date Message date.             
     * @param deliveryNotificationOptions Delivery notifications.
     * @param from From address.             
     * @param headers Document headers.             
     * @param htmlBody HTML body.             
     * @param htmlBodyText Html body as plain text. Read only.             
     * @param isBodyHtml Indicates whether the message body is in Html.             
     * @param isDraft Indicates whether or not a message has been sent.             
     * @param isEncrypted Indicates whether the message is encrypted. Read only.             
     * @param isSigned Indicates whether the message is signed. Read only.             
     * @param linkedResources Linked resources of message.             
     * @param messageId Message id.             
     * @param originalIsTnef Indicates whether original EML message is in TNEF format. Read only.             
     * @param preferredTextEncoding Preferred encoding.             
     * @param priority Email priority status. Enum, available values: High, Low, Normal
     * @param readReceiptTo Read receipt addresses.             
     * @param replyToList The list of addresses to reply to for the mail message.             
     * @param reversePath ReversePath address.             
     * @param sender Sender address.             
     * @param sensitivity Specifies the sensitivity of a MailMessage. Enum, available values: None, Normal, Personal, Private, CompanyConfidential
     * @param subject Message subject.             
     * @param subjectEncoding Subject encoding.             
     * @param timeZoneOffset Coordinated Universal Time (UTC) offset for the message dates. This property defines the time zone difference, between the local time and UTC represented as count of ticks (10 000 per millisecond).             
     * @param to The address collection that contains the recipients of message.             
     * @param xMailer The X-Mailer the software that created the e-mail message.             
     */
    public constructor(
        alternateViews?: Array<AlternateView>,
        attachments?: Array<Attachment>,
        bcc?: Array<MailAddress>,
        body?: string,
        bodyEncoding?: string,
        bodyType?: string,
        cc?: Array<MailAddress>,
        date?: Date,
        deliveryNotificationOptions?: Array<string>,
        from?: MailAddress,
        headers?: { [key: string]: string; },
        htmlBody?: string,
        htmlBodyText?: string,
        isBodyHtml?: boolean,
        isDraft?: boolean,
        isEncrypted?: boolean,
        isSigned?: boolean,
        linkedResources?: Array<LinkedResource>,
        messageId?: string,
        originalIsTnef?: boolean,
        preferredTextEncoding?: string,
        priority?: string,
        readReceiptTo?: Array<MailAddress>,
        replyToList?: Array<MailAddress>,
        reversePath?: MailAddress,
        sender?: MailAddress,
        sensitivity?: string,
        subject?: string,
        subjectEncoding?: string,
        timeZoneOffset?: number,
        to?: Array<MailAddress>,
        xMailer?: string) {
        
        this.alternateViews = alternateViews;
        this.attachments = attachments;
        this.bcc = bcc;
        this.body = body;
        this.bodyEncoding = bodyEncoding;
        this.bodyType = bodyType;
        this.cc = cc;
        this.date = date;
        this.deliveryNotificationOptions = deliveryNotificationOptions;
        this.from = from;
        this.headers = headers;
        this.htmlBody = htmlBody;
        this.htmlBodyText = htmlBodyText;
        this.isBodyHtml = isBodyHtml;
        this.isDraft = isDraft;
        this.isEncrypted = isEncrypted;
        this.isSigned = isSigned;
        this.linkedResources = linkedResources;
        this.messageId = messageId;
        this.originalIsTnef = originalIsTnef;
        this.preferredTextEncoding = preferredTextEncoding;
        this.priority = priority;
        this.readReceiptTo = readReceiptTo;
        this.replyToList = replyToList;
        this.reversePath = reversePath;
        this.sender = sender;
        this.sensitivity = sensitivity;
        this.subject = subject;
        this.subjectEncoding = subjectEncoding;
        this.timeZoneOffset = timeZoneOffset;
        this.to = to;
        this.xMailer = xMailer;
    }
}

/**
 * Email list properties.             
 */
export class EmailProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },
        {
            name: "list",
            baseName: "list",
            type: "Array<EmailProperty>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailProperties.attributeTypeMap;
    }

    /**
     * Gets or sets link that originate from this document.             
     */
    public link: Link;
    
    /**
     * List of properties             
     */
    public list: Array<EmailProperty>;
    

    /**
     * Email list properties.             
     * @param link Gets or sets link that originate from this document.             
     * @param list List of properties             
     */
    public constructor(
        link?: Link,
        list?: Array<EmailProperty>) {
        
        this.link = link;
        this.list = list;
    }
}

/**
 * Email property.             
 */
export class EmailProperty {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "value",
            baseName: "value",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailProperty.attributeTypeMap;
    }

    /**
     * Link to property             
     */
    public link: Link;
    
    /**
     * Property name             
     */
    public name: string;
    
    /**
     * Property value             
     */
    public value: any;
    

    /**
     * Email property.             
     * @param link Link to property             
     * @param name Property name             
     * @param value Property value             
     */
    public constructor(
        link?: Link,
        name?: string,
        value?: any) {
        
        this.link = link;
        this.name = name;
        this.value = value;
    }
}

/**
 * Email property response.             
 */
export class EmailPropertyResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emailProperty",
            baseName: "emailProperty",
            type: "EmailProperty",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailPropertyResponse.attributeTypeMap;
    }

    /**
     * Gets or sets email property.             
     */
    public emailProperty: EmailProperty;
    

    /**
     * Email property response.             
     * @param emailProperty Gets or sets email property.             
     */
    public constructor(
        emailProperty?: EmailProperty) {
        
        this.emailProperty = emailProperty;
    }
}

/**
 * Email messages thread             
 */
export class EmailThread {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "string",
        },
        {
            name: "subject",
            baseName: "subject",
            type: "string",
        },
        {
            name: "messages",
            baseName: "messages",
            type: "Array<EmailDto>",
        },
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailThread.attributeTypeMap;
    }

    /**
     * Thread identifier             
     */
    public id: string;
    
    /**
     * Thread subject             
     */
    public subject: string;
    
    /**
     * List of messages in thread             
     */
    public messages: Array<EmailDto>;
    
    /**
     * Thread folder location             
     */
    public folder: string;
    

    /**
     * Email messages thread             
     * @param id Thread identifier             
     * @param subject Thread subject             
     * @param messages List of messages in thread             
     * @param folder Thread folder location             
     */
    public constructor(
        id?: string,
        subject?: string,
        messages?: Array<EmailDto>,
        folder?: string) {
        
        this.id = id;
        this.subject = subject;
        this.messages = messages;
        this.folder = folder;
    }
}

export class EnumWithCustomOfAssociatedPersonCategory {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EnumWithCustomOfAssociatedPersonCategory.attributeTypeMap;
    }

    /**
     * Associated person's category. Enum, available values: Spouse, Child, Mother, Father, Parent, Brother, Sister, Friend, Relative, Manager, Assistant, ReferredBy, Partner, DomesticPartner, Custom
     */
    public value: string;
    
    public description: string;
    

    /**
     * 
     * @param value Associated person's category. Enum, available values: Spouse, Child, Mother, Father, Parent, Brother, Sister, Friend, Relative, Manager, Assistant, ReferredBy, Partner, DomesticPartner, Custom
     * @param description 
     */
    public constructor(
        value?: string,
        description?: string) {
        
        this.value = value;
        this.description = description;
    }
}

export class EnumWithCustomOfEmailAddressCategory {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EnumWithCustomOfEmailAddressCategory.attributeTypeMap;
    }

    /**
     * Represents category for an email address. Enum, available values: Home, Work, Custom, Email1, Email2, Email3
     */
    public value: string;
    
    public description: string;
    

    /**
     * 
     * @param value Represents category for an email address. Enum, available values: Home, Work, Custom, Email1, Email2, Email3
     * @param description 
     */
    public constructor(
        value?: string,
        description?: string) {
        
        this.value = value;
        this.description = description;
    }
}

export class EnumWithCustomOfEventCategory {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EnumWithCustomOfEventCategory.attributeTypeMap;
    }

    /**
     * Event category. Enum, available values: Custom, Birthday, Anniversary
     */
    public value: string;
    
    public description: string;
    

    /**
     * 
     * @param value Event category. Enum, available values: Custom, Birthday, Anniversary
     * @param description 
     */
    public constructor(
        value?: string,
        description?: string) {
        
        this.value = value;
        this.description = description;
    }
}

export class EnumWithCustomOfInstantMessengerCategory {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EnumWithCustomOfInstantMessengerCategory.attributeTypeMap;
    }

    /**
     * Instant messenger address category. Enum, available values: GoogleTalk, Aim, Yahoo, Skype, Qq, Msn, Icq, Jabber, Custom, ImAddress1, ImAddress2, ImAddress3
     */
    public value: string;
    
    public description: string;
    

    /**
     * 
     * @param value Instant messenger address category. Enum, available values: GoogleTalk, Aim, Yahoo, Skype, Qq, Msn, Icq, Jabber, Custom, ImAddress1, ImAddress2, ImAddress3
     * @param description 
     */
    public constructor(
        value?: string,
        description?: string) {
        
        this.value = value;
        this.description = description;
    }
}

export class EnumWithCustomOfPhoneNumberCategory {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EnumWithCustomOfPhoneNumberCategory.attributeTypeMap;
    }

    /**
     * Phone number category. Enum, available values: Custom, Home, Work, Office, Mobile, Fax, HomeFax, WorkFax, Pager, Car, Isdn, Telex, Callback, Radio, Company, TtyTdd, Assistant, Primary
     */
    public value: string;
    
    public description: string;
    

    /**
     * 
     * @param value Phone number category. Enum, available values: Custom, Home, Work, Office, Mobile, Fax, HomeFax, WorkFax, Pager, Car, Isdn, Telex, Callback, Radio, Company, TtyTdd, Assistant, Primary
     * @param description 
     */
    public constructor(
        value?: string,
        description?: string) {
        
        this.value = value;
        this.description = description;
    }
}

export class EnumWithCustomOfPostalAddressCategory {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EnumWithCustomOfPostalAddressCategory.attributeTypeMap;
    }

    /**
     * Address category. Enum, available values: Home, Work, Custom
     */
    public value: string;
    
    public description: string;
    

    /**
     * 
     * @param value Address category. Enum, available values: Home, Work, Custom
     * @param description 
     */
    public constructor(
        value?: string,
        description?: string) {
        
        this.value = value;
        this.description = description;
    }
}

export class EnumWithCustomOfUrlCategory {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EnumWithCustomOfUrlCategory.attributeTypeMap;
    }

    /**
     * Url category. Enum, available values: Profile, HomePage, Home, Work, Blog, Ftp, Custom
     */
    public value: string;
    
    public description: string;
    

    /**
     * 
     * @param value Url category. Enum, available values: Profile, HomePage, Home, Work, Blog, Ftp, Custom
     * @param description 
     */
    public constructor(
        value?: string,
        description?: string) {
        
        this.value = value;
        this.description = description;
    }
}

export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    public requestId: string;
    
    public date: Date;
    

    /**
     * 
     * @param requestId 
     * @param date 
     */
    public constructor(
        requestId?: string,
        date?: Date) {
        
        this.requestId = requestId;
        this.date = date;
    }
}

export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    public value: Array<FileVersion>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<FileVersion>) {
        
        this.value = value;
    }
}

export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    public value: Array<StorageFile>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<StorageFile>) {
        
        this.value = value;
    }
}

export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    public uploaded: Array<string>;
    
    public errors: Array<Error>;
    

    /**
     * 
     * @param uploaded 
     * @param errors 
     */
    public constructor(
        uploaded?: Array<string>,
        errors?: Array<Error>) {
        
        this.uploaded = uploaded;
        this.errors = errors;
    }
}

/**
 * Object represented as hierarchical properties request             
 */
export class HierarchicalObjectRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "hierarchicalObject",
            baseName: "hierarchicalObject",
            type: "HierarchicalObject",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return HierarchicalObjectRequest.attributeTypeMap;
    }

    /**
     * Hierarchical properties of document             
     */
    public hierarchicalObject: HierarchicalObject;
    
    /**
     * Document location in storage             
     */
    public storageFolder: StorageFolderLocation;
    

    /**
     * Object represented as hierarchical properties request             
     * @param hierarchicalObject Hierarchical properties of document             
     * @param storageFolder Document location in storage             
     */
    public constructor(
        hierarchicalObject?: HierarchicalObject,
        storageFolder?: StorageFolderLocation) {
        
        this.hierarchicalObject = hierarchicalObject;
        this.storageFolder = storageFolder;
    }
}

/**
 * Document represented as hierarchical set of properties response             
 */
export class HierarchicalObjectResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "hierarchicalObject",
            baseName: "hierarchicalObject",
            type: "HierarchicalObject",
        },
        {
            name: "storageFile",
            baseName: "storageFile",
            type: "StorageFileLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return HierarchicalObjectResponse.attributeTypeMap;
    }

    /**
     * Document properties             
     */
    public hierarchicalObject: HierarchicalObject;
    
    /**
     * Document location in storage             
     */
    public storageFile: StorageFileLocation;
    

    /**
     * Document represented as hierarchical set of properties response             
     * @param hierarchicalObject Document properties             
     * @param storageFile Document location in storage             
     */
    public constructor(
        hierarchicalObject?: HierarchicalObject,
        storageFile?: StorageFileLocation) {
        
        this.hierarchicalObject = hierarchicalObject;
        this.storageFile = storageFile;
    }
}

/**
 * Instant messenger address.             
 */
export class InstantMessengerAddress {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfInstantMessengerCategory",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InstantMessengerAddress.attributeTypeMap;
    }

    /**
     * Address category.             
     */
    public category: EnumWithCustomOfInstantMessengerCategory;
    
    /**
     * Address.             
     */
    public address: string;
    
    /**
     * Determines whether this address is preferred.             
     */
    public preferred: boolean;
    

    /**
     * Instant messenger address.             
     * @param category Address category.             
     * @param address Address.             
     * @param preferred Determines whether this address is preferred.             
     */
    public constructor(
        category?: EnumWithCustomOfInstantMessengerCategory,
        address?: string,
        preferred?: boolean) {
        
        this.category = category;
        this.address = address;
        this.preferred = preferred;
    }
}

/**
 * Provides information for the object link. This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7             
 */
export class Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "href",
            baseName: "href",
            type: "string",
        },
        {
            name: "rel",
            baseName: "rel",
            type: "string",
        },
        {
            name: "type",
            baseName: "type",
            type: "string",
        },
        {
            name: "title",
            baseName: "title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }

    /**
     * The \"href\" attribute contains the link's IRI. atom:link elements MUST have an href attribute, whose value MUST be a IRI reference             
     */
    public href: string;
    
    /**
     * atom:link elements MAY have a \"rel\" attribute that indicates the link relation type.  If the \"rel\" attribute is not present, the link element MUST be interpreted as if the link relation type is \"alternate\".             
     */
    public rel: string;
    
    /**
     * On the link element, the \"type\" attribute's value is an advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the href attribute is dereferenced.  Note that the type attribute does not override the actual media type returned with the representation.             
     */
    public type: string;
    
    /**
     * The \"title\" attribute conveys human-readable information about the link.  The content of the \"title\" attribute is Language-Sensitive.             
     */
    public title: string;
    

    /**
     * Provides information for the object link. This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7             
     * @param href The \"href\" attribute contains the link's IRI. atom:link elements MUST have an href attribute, whose value MUST be a IRI reference             
     * @param rel atom:link elements MAY have a \"rel\" attribute that indicates the link relation type.  If the \"rel\" attribute is not present, the link element MUST be interpreted as if the link relation type is \"alternate\".             
     * @param type On the link element, the \"type\" attribute's value is an advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the href attribute is dereferenced.  Note that the type attribute does not override the actual media type returned with the representation.             
     * @param title The \"title\" attribute conveys human-readable information about the link.  The content of the \"title\" attribute is Language-Sensitive.             
     */
    public constructor(
        href?: string,
        rel?: string,
        type?: string,
        title?: string) {
        
        this.href = href;
        this.rel = rel;
        this.type = type;
        this.title = title;
    }
}

export class ListResponseOfAiBcrOcrData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<AiBcrOcrData>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfAiBcrOcrData.attributeTypeMap;
    }

    public value: Array<AiBcrOcrData>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<AiBcrOcrData>) {
        
        this.value = value;
    }
}

export class ListResponseOfAiNameComponent {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<AiNameComponent>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfAiNameComponent.attributeTypeMap;
    }

    public value: Array<AiNameComponent>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<AiNameComponent>) {
        
        this.value = value;
    }
}

export class ListResponseOfAiNameExtracted {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<AiNameExtracted>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfAiNameExtracted.attributeTypeMap;
    }

    public value: Array<AiNameExtracted>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<AiNameExtracted>) {
        
        this.value = value;
    }
}

export class ListResponseOfAiNameGenderHypothesis {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<AiNameGenderHypothesis>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfAiNameGenderHypothesis.attributeTypeMap;
    }

    public value: Array<AiNameGenderHypothesis>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<AiNameGenderHypothesis>) {
        
        this.value = value;
    }
}

export class ListResponseOfContactDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<ContactDto>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfContactDto.attributeTypeMap;
    }

    public value: Array<ContactDto>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<ContactDto>) {
        
        this.value = value;
    }
}

export class ListResponseOfEmailAccountConfig {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<EmailAccountConfig>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfEmailAccountConfig.attributeTypeMap;
    }

    public value: Array<EmailAccountConfig>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<EmailAccountConfig>) {
        
        this.value = value;
    }
}

export class ListResponseOfEmailDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<EmailDto>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfEmailDto.attributeTypeMap;
    }

    public value: Array<EmailDto>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<EmailDto>) {
        
        this.value = value;
    }
}

export class ListResponseOfEmailThread {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<EmailThread>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfEmailThread.attributeTypeMap;
    }

    public value: Array<EmailThread>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<EmailThread>) {
        
        this.value = value;
    }
}

export class ListResponseOfHierarchicalObject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<HierarchicalObject>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfHierarchicalObject.attributeTypeMap;
    }

    public value: Array<HierarchicalObject>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<HierarchicalObject>) {
        
        this.value = value;
    }
}

export class ListResponseOfHierarchicalObjectResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<HierarchicalObjectResponse>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfHierarchicalObjectResponse.attributeTypeMap;
    }

    public value: Array<HierarchicalObjectResponse>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<HierarchicalObjectResponse>) {
        
        this.value = value;
    }
}

export class ListResponseOfMailServerFolder {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<MailServerFolder>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfMailServerFolder.attributeTypeMap;
    }

    public value: Array<MailServerFolder>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<MailServerFolder>) {
        
        this.value = value;
    }
}

export class ListResponseOfStorageFileLocation {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFileLocation>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfStorageFileLocation.attributeTypeMap;
    }

    public value: Array<StorageFileLocation>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<StorageFileLocation>) {
        
        this.value = value;
    }
}

export class ListResponseOfStorageModelOfCalendarDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageModelOfCalendarDto>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfStorageModelOfCalendarDto.attributeTypeMap;
    }

    public value: Array<StorageModelOfCalendarDto>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<StorageModelOfCalendarDto>) {
        
        this.value = value;
    }
}

export class ListResponseOfStorageModelOfContactDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageModelOfContactDto>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfStorageModelOfContactDto.attributeTypeMap;
    }

    public value: Array<StorageModelOfContactDto>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<StorageModelOfContactDto>) {
        
        this.value = value;
    }
}

export class ListResponseOfStorageModelOfEmailDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageModelOfEmailDto>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfStorageModelOfEmailDto.attributeTypeMap;
    }

    public value: Array<StorageModelOfEmailDto>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<StorageModelOfEmailDto>) {
        
        this.value = value;
    }
}

export class ListResponseOfString {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListResponseOfString.attributeTypeMap;
    }

    public value: Array<string>;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: Array<string>) {
        
        this.value = value;
    }
}

/**
 * Represents the address of a message.
 */
export class MailAddress {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "participationStatus",
            baseName: "participationStatus",
            type: "string",
        },
        {
            name: "originalAddressString",
            baseName: "originalAddressString",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MailAddress.attributeTypeMap;
    }

    /**
     * Display name             
     */
    public displayName: string;
    
    /**
     * Address             
     */
    public address: string;
    
    /**
     * Identifies the participation status for the calendar user. Enum, available values: NeedsAction, Accepted, Declined, Tentative, Delegated
     */
    public participationStatus: string;
    
    /**
     * The original e-mail address string             
     */
    public originalAddressString: string;
    

    /**
     * Represents the address of a message.
     * @param displayName Display name             
     * @param address Address             
     * @param participationStatus Identifies the participation status for the calendar user. Enum, available values: NeedsAction, Accepted, Declined, Tentative, Delegated
     * @param originalAddressString The original e-mail address string             
     */
    public constructor(
        displayName?: string,
        address?: string,
        participationStatus?: string,
        originalAddressString?: string) {
        
        this.displayName = displayName;
        this.address = address;
        this.participationStatus = participationStatus;
        this.originalAddressString = originalAddressString;
    }
}

/**
 * Email account folder             
 */
export class MailServerFolder {

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
            name: "id",
            baseName: "id",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MailServerFolder.attributeTypeMap;
    }

    /**
     * Gets or sets mail folder name             
     */
    public name: string;
    
    /**
     * Gets or sets mail folder id             
     */
    public id: string;
    

    /**
     * Email account folder             
     * @param name Gets or sets mail folder name             
     * @param id Gets or sets mail folder id             
     */
    public constructor(
        name?: string,
        id?: string) {
        
        this.name = name;
        this.id = id;
    }
}

/**
 * Mapi attachment             
 */
export class MapiAttachmentDto {

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
            name: "dataBase64",
            baseName: "dataBase64",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiAttachmentDto.attributeTypeMap;
    }

    /**
     * Attachment's name             
     */
    public name: string;
    
    /**
     * Attachment data represented as Base64 string.             
     */
    public dataBase64: string;
    

    /**
     * Mapi attachment             
     * @param name Attachment's name             
     * @param dataBase64 Attachment data represented as Base64 string.             
     */
    public constructor(
        name?: string,
        dataBase64?: string) {
        
        this.name = name;
        this.dataBase64 = dataBase64;
    }
}

/**
 * Mapi calendar attendees.             
 */
export class MapiCalendarAttendeesDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "appointmentRecipients",
            baseName: "appointmentRecipients",
            type: "Array<MapiRecipientDto>",
        },
        {
            name: "appointmentUnsendableRecipients",
            baseName: "appointmentUnsendableRecipients",
            type: "Array<MapiRecipientDto>",
        },
        {
            name: "notAllowPropose",
            baseName: "notAllowPropose",
            type: "boolean",
        },
        {
            name: "responseRequested",
            baseName: "responseRequested",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarAttendeesDto.attributeTypeMap;
    }

    /**
     * List of attendees.             
     */
    public appointmentRecipients: Array<MapiRecipientDto>;
    
    /**
     * List of unsendable attendees.             
     */
    public appointmentUnsendableRecipients: Array<MapiRecipientDto>;
    
    /**
     * Value indicating whether attendees are not allowed to propose a new date and/or time for the meeting.             
     */
    public notAllowPropose: boolean;
    
    /**
     * Value indicating whether a response is requested to a Message object.             
     */
    public responseRequested: boolean;
    

    /**
     * Mapi calendar attendees.             
     * @param appointmentRecipients List of attendees.             
     * @param appointmentUnsendableRecipients List of unsendable attendees.             
     * @param notAllowPropose Value indicating whether attendees are not allowed to propose a new date and/or time for the meeting.             
     * @param responseRequested Value indicating whether a response is requested to a Message object.             
     */
    public constructor(
        appointmentRecipients?: Array<MapiRecipientDto>,
        appointmentUnsendableRecipients?: Array<MapiRecipientDto>,
        notAllowPropose?: boolean,
        responseRequested?: boolean) {
        
        this.appointmentRecipients = appointmentRecipients;
        this.appointmentUnsendableRecipients = appointmentUnsendableRecipients;
        this.notAllowPropose = notAllowPropose;
        this.responseRequested = responseRequested;
    }
}

/**
 * Recurrence properties of calendar object.             
 */
export class MapiCalendarEventRecurrenceDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "appointmentTimeZoneDefinitionRecur",
            baseName: "appointmentTimeZoneDefinitionRecur",
            type: "MapiCalendarTimeZoneDto",
        },
        {
            name: "clipEnd",
            baseName: "clipEnd",
            type: "Date",
        },
        {
            name: "clipStart",
            baseName: "clipStart",
            type: "Date",
        },
        {
            name: "isException",
            baseName: "isException",
            type: "boolean",
        },
        {
            name: "recurrencePattern",
            baseName: "recurrencePattern",
            type: "MapiCalendarRecurrencePatternDto",
        },
        {
            name: "timeZoneStruct",
            baseName: "timeZoneStruct",
            type: "MapiCalendarTimeZoneDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarEventRecurrenceDto.attributeTypeMap;
    }

    /**
     * Time zone information that describes how to convert the meeting date and time on a recurring series to and from UTC.             
     */
    public appointmentTimeZoneDefinitionRecur: MapiCalendarTimeZoneDto;
    
    /**
     * Date of the last instance.             
     */
    public clipEnd: Date;
    
    /**
     * Date of the first instance.             
     */
    public clipStart: Date;
    
    /**
     * Value indicating whether the object represents an exception.             
     */
    public isException: boolean;
    
    /**
     * Recurrence pattern.             
     */
    public recurrencePattern: MapiCalendarRecurrencePatternDto;
    
    /**
     * Time zone information for a recurring meeting.             
     */
    public timeZoneStruct: MapiCalendarTimeZoneDto;
    

    /**
     * Recurrence properties of calendar object.             
     * @param appointmentTimeZoneDefinitionRecur Time zone information that describes how to convert the meeting date and time on a recurring series to and from UTC.             
     * @param clipEnd Date of the last instance.             
     * @param clipStart Date of the first instance.             
     * @param isException Value indicating whether the object represents an exception.             
     * @param recurrencePattern Recurrence pattern.             
     * @param timeZoneStruct Time zone information for a recurring meeting.             
     */
    public constructor(
        appointmentTimeZoneDefinitionRecur?: MapiCalendarTimeZoneDto,
        clipEnd?: Date,
        clipStart?: Date,
        isException?: boolean,
        recurrencePattern?: MapiCalendarRecurrencePatternDto,
        timeZoneStruct?: MapiCalendarTimeZoneDto) {
        
        this.appointmentTimeZoneDefinitionRecur = appointmentTimeZoneDefinitionRecur;
        this.clipEnd = clipEnd;
        this.clipStart = clipStart;
        this.isException = isException;
        this.recurrencePattern = recurrencePattern;
        this.timeZoneStruct = timeZoneStruct;
    }
}

/**
 * An exception specifies changes to an instance of a recurring series.             
 */
export class MapiCalendarExceptionInfoDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<MapiAttachmentDto>",
        },
        {
            name: "body",
            baseName: "body",
            type: "string",
        },
        {
            name: "busyStatus",
            baseName: "busyStatus",
            type: "string",
        },
        {
            name: "endDateTime",
            baseName: "endDateTime",
            type: "Date",
        },
        {
            name: "hasAttachment",
            baseName: "hasAttachment",
            type: "boolean",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "meetingType",
            baseName: "meetingType",
            type: "string",
        },
        {
            name: "originalStartDate",
            baseName: "originalStartDate",
            type: "Date",
        },
        {
            name: "overrideFlags",
            baseName: "overrideFlags",
            type: "Array<string>",
        },
        {
            name: "reminderDelta",
            baseName: "reminderDelta",
            type: "number",
        },
        {
            name: "reminderSet",
            baseName: "reminderSet",
            type: "boolean",
        },
        {
            name: "startDateTime",
            baseName: "startDateTime",
            type: "Date",
        },
        {
            name: "subject",
            baseName: "subject",
            type: "string",
        },
        {
            name: "subType",
            baseName: "subType",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarExceptionInfoDto.attributeTypeMap;
    }

    /**
     * Attachments in the recurrence exception.             
     */
    public attachments: Array<MapiAttachmentDto>;
    
    /**
     * Body.             
     */
    public body: string;
    
    /**
     * Enumerates the mapi calendar possible busy status Enum, available values: Free, Tentative, Busy, OutOfOffice
     */
    public busyStatus: string;
    
    /**
     * End date.             
     */
    public endDateTime: Date;
    
    /**
     * Value of this field specifies whether the Exception Embedded Message object contains attachments.             
     */
    public hasAttachment: boolean;
    
    /**
     * Location.             
     */
    public location: string;
    
    /**
     * Enumerates the appointment state Enum, available values: Meeting, Received, Canceled
     */
    public meetingType: string;
    
    /**
     * Original start date.             
     */
    public originalStartDate: Date;
    
    /**
     * Override flags.              Items: Specifies what data in the MapiCalendarOverride structure has a value different from the recurring series. Enum, available values: Subject, MeetingType, ReminderDelta, Reminder, Location, BusyStatus, Attachment, Subtype, AppointmentColor, ExceptionalBody
     */
    public overrideFlags: Array<string>;
    
    /**
     * Reminder delta.             
     */
    public reminderDelta: number;
    
    /**
     * Value for the PidLidReminderSet property.             
     */
    public reminderSet: boolean;
    
    /**
     * Start date.             
     */
    public startDateTime: Date;
    
    /**
     * Subject.             
     */
    public subject: string;
    
    /**
     * SubType.             
     */
    public subType: number;
    

    /**
     * An exception specifies changes to an instance of a recurring series.             
     * @param attachments Attachments in the recurrence exception.             
     * @param body Body.             
     * @param busyStatus Enumerates the mapi calendar possible busy status Enum, available values: Free, Tentative, Busy, OutOfOffice
     * @param endDateTime End date.             
     * @param hasAttachment Value of this field specifies whether the Exception Embedded Message object contains attachments.             
     * @param location Location.             
     * @param meetingType Enumerates the appointment state Enum, available values: Meeting, Received, Canceled
     * @param originalStartDate Original start date.             
     * @param overrideFlags Override flags.             
     * @param reminderDelta Reminder delta.             
     * @param reminderSet Value for the PidLidReminderSet property.             
     * @param startDateTime Start date.             
     * @param subject Subject.             
     * @param subType SubType.             
     */
    public constructor(
        attachments?: Array<MapiAttachmentDto>,
        body?: string,
        busyStatus?: string,
        endDateTime?: Date,
        hasAttachment?: boolean,
        location?: string,
        meetingType?: string,
        originalStartDate?: Date,
        overrideFlags?: Array<string>,
        reminderDelta?: number,
        reminderSet?: boolean,
        startDateTime?: Date,
        subject?: string,
        subType?: number) {
        
        this.attachments = attachments;
        this.body = body;
        this.busyStatus = busyStatus;
        this.endDateTime = endDateTime;
        this.hasAttachment = hasAttachment;
        this.location = location;
        this.meetingType = meetingType;
        this.originalStartDate = originalStartDate;
        this.overrideFlags = overrideFlags;
        this.reminderDelta = reminderDelta;
        this.reminderSet = reminderSet;
        this.startDateTime = startDateTime;
        this.subject = subject;
        this.subType = subType;
    }
}

/**
 * Mapi recurrence pattern.             
 */
export class MapiCalendarRecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calendarType",
            baseName: "calendarType",
            type: "string",
        },
        {
            name: "deletedInstanceDates",
            baseName: "deletedInstanceDates",
            type: "Array<Date>",
        },
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        },
        {
            name: "endType",
            baseName: "endType",
            type: "string",
        },
        {
            name: "exceptions",
            baseName: "exceptions",
            type: "Array<MapiCalendarExceptionInfoDto>",
        },
        {
            name: "frequency",
            baseName: "frequency",
            type: "string",
        },
        {
            name: "modifiedInstanceDates",
            baseName: "modifiedInstanceDates",
            type: "Array<Date>",
        },
        {
            name: "occurrenceCount",
            baseName: "occurrenceCount",
            type: "number",
        },
        {
            name: "patternType",
            baseName: "patternType",
            type: "string",
        },
        {
            name: "period",
            baseName: "period",
            type: "number",
        },
        {
            name: "slidingFlag",
            baseName: "slidingFlag",
            type: "boolean",
        },
        {
            name: "startDate",
            baseName: "startDate",
            type: "Date",
        },
        {
            name: "weekStartDay",
            baseName: "weekStartDay",
            type: "string",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarRecurrencePatternDto.attributeTypeMap;
    }

    /**
     * Enumerated the calendar type of the mapi recurrence Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
     */
    public calendarType: string;
    
    /**
     * An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
     */
    public deletedInstanceDates: Array<Date>;
    
    /**
     * End date of an item recurrence pattern.             
     */
    public endDate: Date;
    
    /**
     * Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
     */
    public endType: string;
    
    /**
     * An exception specifies changes to an instance of a recurring series.             
     */
    public exceptions: Array<MapiCalendarExceptionInfoDto>;
    
    /**
     * Enumerates mapi calendar recurrence frequency Enum, available values: None, Daily, Weekly, Monthly, Yearly
     */
    public frequency: string;
    
    /**
     * An array of dates, each of which is the date of a modified instance.             
     */
    public modifiedInstanceDates: Array<Date>;
    
    /**
     * Number of occurrences in a recurrence.             
     */
    public occurrenceCount: number;
    
    /**
     * Enumerates the mapi calendar recurrence pattern types Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
     */
    public patternType: string;
    
    /**
     * Interval at which the meeting pattern repeats.             
     */
    public period: number;
    
    /**
     * Defines whether pattern is sliding or not.             
     */
    public slidingFlag: boolean;
    
    /**
     * Start date of an item recurrence pattern.             
     */
    public startDate: Date;
    
    /**
     * Day of week Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     */
    public weekStartDay: string;
    

    get discriminator(): string {
        return this.constructor.name;
    }

    set discriminator(_newType: string) {
        /* do nothing */
    }
    

    /**
     * Mapi recurrence pattern.             
     * @param calendarType Enumerated the calendar type of the mapi recurrence Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
     * @param deletedInstanceDates An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
     * @param endDate End date of an item recurrence pattern.             
     * @param endType Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
     * @param exceptions An exception specifies changes to an instance of a recurring series.             
     * @param frequency Enumerates mapi calendar recurrence frequency Enum, available values: None, Daily, Weekly, Monthly, Yearly
     * @param modifiedInstanceDates An array of dates, each of which is the date of a modified instance.             
     * @param occurrenceCount Number of occurrences in a recurrence.             
     * @param patternType Enumerates the mapi calendar recurrence pattern types Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
     * @param period Interval at which the meeting pattern repeats.             
     * @param slidingFlag Defines whether pattern is sliding or not.             
     * @param startDate Start date of an item recurrence pattern.             
     * @param weekStartDay Day of week Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     * @param discriminator 
     */
    public constructor(
        calendarType?: string,
        deletedInstanceDates?: Array<Date>,
        endDate?: Date,
        endType?: string,
        exceptions?: Array<MapiCalendarExceptionInfoDto>,
        frequency?: string,
        modifiedInstanceDates?: Array<Date>,
        occurrenceCount?: number,
        patternType?: string,
        period?: number,
        slidingFlag?: boolean,
        startDate?: Date,
        weekStartDay?: string,
        discriminator?: string) {
        
        this.calendarType = calendarType;
        this.deletedInstanceDates = deletedInstanceDates;
        this.endDate = endDate;
        this.endType = endType;
        this.exceptions = exceptions;
        this.frequency = frequency;
        this.modifiedInstanceDates = modifiedInstanceDates;
        this.occurrenceCount = occurrenceCount;
        this.patternType = patternType;
        this.period = period;
        this.slidingFlag = slidingFlag;
        this.startDate = startDate;
        this.weekStartDay = weekStartDay;
        this.discriminator = discriminator;
    }
}

/**
 * Represents the mapi calendar time zone information.             
 */
export class MapiCalendarTimeZoneDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "keyName",
            baseName: "keyName",
            type: "string",
        },
        {
            name: "timeZoneRules",
            baseName: "timeZoneRules",
            type: "Array<MapiCalendarTimeZoneInfoDto>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarTimeZoneDto.attributeTypeMap;
    }

    /**
     * Human-readable description of the time zone.             
     */
    public keyName: string;
    
    /**
     * Time zone rules             
     */
    public timeZoneRules: Array<MapiCalendarTimeZoneInfoDto>;
    

    /**
     * Represents the mapi calendar time zone information.             
     * @param keyName Human-readable description of the time zone.             
     * @param timeZoneRules Time zone rules             
     */
    public constructor(
        keyName?: string,
        timeZoneRules?: Array<MapiCalendarTimeZoneInfoDto>) {
        
        this.keyName = keyName;
        this.timeZoneRules = timeZoneRules;
    }
}

/**
 * Represents the mapi calendar time zone rule.             
 */
export class MapiCalendarTimeZoneInfoDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "bias",
            baseName: "bias",
            type: "number",
        },
        {
            name: "daylightBias",
            baseName: "daylightBias",
            type: "number",
        },
        {
            name: "daylightDate",
            baseName: "daylightDate",
            type: "MapiCalendarTimeZoneRuleDto",
        },
        {
            name: "standardBias",
            baseName: "standardBias",
            type: "number",
        },
        {
            name: "standardDate",
            baseName: "standardDate",
            type: "MapiCalendarTimeZoneRuleDto",
        },
        {
            name: "timeZoneFlags",
            baseName: "timeZoneFlags",
            type: "Array<string>",
        },
        {
            name: "year",
            baseName: "year",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarTimeZoneInfoDto.attributeTypeMap;
    }

    /**
     * Time zone's offset in minutes from UTC.             
     */
    public bias: number;
    
    /**
     * Offset in minutes from lBias during daylight saving time.             
     */
    public daylightBias: number;
    
    /**
     * Date and local time that indicate when to begin using the DaylightBias.             
     */
    public daylightDate: MapiCalendarTimeZoneRuleDto;
    
    /**
     * Offset in minutes from lBias during standard time.             
     */
    public standardBias: number;
    
    /**
     * Date and local time that indicate when to begin using the StandardBias.             
     */
    public standardDate: MapiCalendarTimeZoneRuleDto;
    
    /**
     * Individual bit flags that specify information about this TimeZoneRule.              Items: Enumerates the individual bit flags that specify information about TimeZoneRule Enum, available values: TzRuleFlagRecurCurrentTzReg, TzRuleFlagEffectiveTzReg
     */
    public timeZoneFlags: Array<string>;
    
    /**
     * Year in which this rule is scheduled to take effect.             
     */
    public year: number;
    

    /**
     * Represents the mapi calendar time zone rule.             
     * @param bias Time zone's offset in minutes from UTC.             
     * @param daylightBias Offset in minutes from lBias during daylight saving time.             
     * @param daylightDate Date and local time that indicate when to begin using the DaylightBias.             
     * @param standardBias Offset in minutes from lBias during standard time.             
     * @param standardDate Date and local time that indicate when to begin using the StandardBias.             
     * @param timeZoneFlags Individual bit flags that specify information about this TimeZoneRule.             
     * @param year Year in which this rule is scheduled to take effect.             
     */
    public constructor(
        bias?: number,
        daylightBias?: number,
        daylightDate?: MapiCalendarTimeZoneRuleDto,
        standardBias?: number,
        standardDate?: MapiCalendarTimeZoneRuleDto,
        timeZoneFlags?: Array<string>,
        year?: number) {
        
        this.bias = bias;
        this.daylightBias = daylightBias;
        this.daylightDate = daylightDate;
        this.standardBias = standardBias;
        this.standardDate = standardDate;
        this.timeZoneFlags = timeZoneFlags;
        this.year = year;
    }
}

/**
 * Represents time zone rule that indicate when to begin using the Standard/Daylight time.             
 */
export class MapiCalendarTimeZoneRuleDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "date",
            baseName: "date",
            type: "Date",
        },
        {
            name: "dayOfWeek",
            baseName: "dayOfWeek",
            type: "string",
        },
        {
            name: "hour",
            baseName: "hour",
            type: "number",
        },
        {
            name: "milliseconds",
            baseName: "milliseconds",
            type: "number",
        },
        {
            name: "minute",
            baseName: "minute",
            type: "number",
        },
        {
            name: "month",
            baseName: "month",
            type: "number",
        },
        {
            name: "position",
            baseName: "position",
            type: "string",
        },
        {
            name: "seconds",
            baseName: "seconds",
            type: "number",
        },
        {
            name: "year",
            baseName: "year",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarTimeZoneRuleDto.attributeTypeMap;
    }

    /**
     * Date and time that indicate when to begin using the Standard/Daylight time.             
     */
    public date: Date;
    
    /**
     * Day of week Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     */
    public dayOfWeek: string;
    
    /**
     * Hour.             
     */
    public hour: number;
    
    /**
     * Milliseconds.             
     */
    public milliseconds: number;
    
    /**
     * Minute.             
     */
    public minute: number;
    
    /**
     * Month.             
     */
    public month: number;
    
    /**
     * Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public position: string;
    
    /**
     * Seconds.             
     */
    public seconds: number;
    
    /**
     * Year.             
     */
    public year: number;
    

    /**
     * Represents time zone rule that indicate when to begin using the Standard/Daylight time.             
     * @param date Date and time that indicate when to begin using the Standard/Daylight time.             
     * @param dayOfWeek Day of week Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     * @param hour Hour.             
     * @param milliseconds Milliseconds.             
     * @param minute Minute.             
     * @param month Month.             
     * @param position Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     * @param seconds Seconds.             
     * @param year Year.             
     */
    public constructor(
        date?: Date,
        dayOfWeek?: string,
        hour?: number,
        milliseconds?: number,
        minute?: number,
        month?: number,
        position?: string,
        seconds?: number,
        year?: number) {
        
        this.date = date;
        this.dayOfWeek = dayOfWeek;
        this.hour = hour;
        this.milliseconds = milliseconds;
        this.minute = minute;
        this.month = month;
        this.position = position;
        this.seconds = seconds;
        this.year = year;
    }
}

/**
 * Refers to the group of properties that define the e-mail address or fax address for a contact.             
 */
export class MapiContactElectronicAddressDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "addressType",
            baseName: "addressType",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "emailAddress",
            baseName: "emailAddress",
            type: "string",
        },
        {
            name: "faxNumber",
            baseName: "faxNumber",
            type: "string",
        },
        {
            name: "isEmpty",
            baseName: "isEmpty",
            type: "boolean",
        },
        {
            name: "originalDisplayName",
            baseName: "originalDisplayName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactElectronicAddressDto.attributeTypeMap;
    }

    /**
     * Address type of an electronic address
     */
    public addressType: string;
    
    /**
     * User-readable display name for the e-mail address
     */
    public displayName: string;
    
    /**
     * E-mail address of the contact
     */
    public emailAddress: string;
    
    /**
     * Telephone number of the mail user's primary fax machine
     */
    public faxNumber: string;
    
    /**
     * Shows if MapiContactElectronicAddress is empty
     */
    public isEmpty: boolean;
    
    /**
     * SMTP e-mail address that corresponds to the e-mail address for the Contact object.
     */
    public originalDisplayName: string;
    

    /**
     * Refers to the group of properties that define the e-mail address or fax address for a contact.             
     * @param addressType Address type of an electronic address
     * @param displayName User-readable display name for the e-mail address
     * @param emailAddress E-mail address of the contact
     * @param faxNumber Telephone number of the mail user's primary fax machine
     * @param isEmpty Shows if MapiContactElectronicAddress is empty
     * @param originalDisplayName SMTP e-mail address that corresponds to the e-mail address for the Contact object.
     */
    public constructor(
        addressType?: string,
        displayName?: string,
        emailAddress?: string,
        faxNumber?: string,
        isEmpty?: boolean,
        originalDisplayName?: string) {
        
        this.addressType = addressType;
        this.displayName = displayName;
        this.emailAddress = emailAddress;
        this.faxNumber = faxNumber;
        this.isEmpty = isEmpty;
        this.originalDisplayName = originalDisplayName;
    }
}

/**
 * Specify properties for up to three different e-mail addresses (Email1, Email2, and Email3) and three different fax addresses (Primary Fax, Business Fax, and Home Fax)             
 */
export class MapiContactElectronicAddressPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "businessFax",
            baseName: "businessFax",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "defaultEmailAddress",
            baseName: "defaultEmailAddress",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "email1",
            baseName: "email1",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "email2",
            baseName: "email2",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "email3",
            baseName: "email3",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "homeFax",
            baseName: "homeFax",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "isEmpty",
            baseName: "isEmpty",
            type: "boolean",
        },
        {
            name: "primaryFax",
            baseName: "primaryFax",
            type: "MapiContactElectronicAddressDto",
        },
        {
            name: "useAutocomplete",
            baseName: "useAutocomplete",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactElectronicAddressPropertySetDto.attributeTypeMap;
    }

    /**
     * Refers to the group of properties that define the business fax address for a contact.
     */
    public businessFax: MapiContactElectronicAddressDto;
    
    /**
     * Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
     */
    public defaultEmailAddress: MapiContactElectronicAddressDto;
    
    /**
     * Refers to the group of properties that define the first e-mail address for a contact.             
     */
    public email1: MapiContactElectronicAddressDto;
    
    /**
     * Refers to the group of properties that define the second e-mail address for a contact.             
     */
    public email2: MapiContactElectronicAddressDto;
    
    /**
     * Refers to the group of properties that define the third e-mail address for a contact.             
     */
    public email3: MapiContactElectronicAddressDto;
    
    /**
     * Refers to the group of properties that define the home fax address for a contact.             
     */
    public homeFax: MapiContactElectronicAddressDto;
    
    /**
     * Shows if MapiContactElectronicAddressPropertySetDto is empty
     */
    public isEmpty: boolean;
    
    /**
     * Refers to the group of properties that define the primary fax address for a contact.             
     */
    public primaryFax: MapiContactElectronicAddressDto;
    
    /**
     * Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
     */
    public useAutocomplete: boolean;
    

    /**
     * Specify properties for up to three different e-mail addresses (Email1, Email2, and Email3) and three different fax addresses (Primary Fax, Business Fax, and Home Fax)             
     * @param businessFax Refers to the group of properties that define the business fax address for a contact.
     * @param defaultEmailAddress Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
     * @param email1 Refers to the group of properties that define the first e-mail address for a contact.             
     * @param email2 Refers to the group of properties that define the second e-mail address for a contact.             
     * @param email3 Refers to the group of properties that define the third e-mail address for a contact.             
     * @param homeFax Refers to the group of properties that define the home fax address for a contact.             
     * @param isEmpty Shows if MapiContactElectronicAddressPropertySetDto is empty
     * @param primaryFax Refers to the group of properties that define the primary fax address for a contact.             
     * @param useAutocomplete Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
     */
    public constructor(
        businessFax?: MapiContactElectronicAddressDto,
        defaultEmailAddress?: MapiContactElectronicAddressDto,
        email1?: MapiContactElectronicAddressDto,
        email2?: MapiContactElectronicAddressDto,
        email3?: MapiContactElectronicAddressDto,
        homeFax?: MapiContactElectronicAddressDto,
        isEmpty?: boolean,
        primaryFax?: MapiContactElectronicAddressDto,
        useAutocomplete?: boolean) {
        
        this.businessFax = businessFax;
        this.defaultEmailAddress = defaultEmailAddress;
        this.email1 = email1;
        this.email2 = email2;
        this.email3 = email3;
        this.homeFax = homeFax;
        this.isEmpty = isEmpty;
        this.primaryFax = primaryFax;
        this.useAutocomplete = useAutocomplete;
    }
}

/**
 * Specify events associated with a contact.             
 */
export class MapiContactEventPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "birthday",
            baseName: "birthday",
            type: "Date",
        },
        {
            name: "weddingAnniversary",
            baseName: "weddingAnniversary",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactEventPropertySetDto.attributeTypeMap;
    }

    /**
     * Specifies the birthday of the contact.
     */
    public birthday: Date;
    
    /**
     * Specifies the wedding anniversary of the contact.             
     */
    public weddingAnniversary: Date;
    

    /**
     * Specify events associated with a contact.             
     * @param birthday Specifies the birthday of the contact.
     * @param weddingAnniversary Specifies the wedding anniversary of the contact.             
     */
    public constructor(
        birthday?: Date,
        weddingAnniversary?: Date) {
        
        this.birthday = birthday;
        this.weddingAnniversary = weddingAnniversary;
    }
}

/**
 * The properties are used to specify the name of the person represented by the contact             
 */
export class MapiContactNamePropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "displayNamePrefix",
            baseName: "displayNamePrefix",
            type: "string",
        },
        {
            name: "fileUnder",
            baseName: "fileUnder",
            type: "string",
        },
        {
            name: "fileUnderId",
            baseName: "fileUnderId",
            type: "number",
        },
        {
            name: "generation",
            baseName: "generation",
            type: "string",
        },
        {
            name: "givenName",
            baseName: "givenName",
            type: "string",
        },
        {
            name: "initials",
            baseName: "initials",
            type: "string",
        },
        {
            name: "middleName",
            baseName: "middleName",
            type: "string",
        },
        {
            name: "nickname",
            baseName: "nickname",
            type: "string",
        },
        {
            name: "surname",
            baseName: "surname",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactNamePropertySetDto.attributeTypeMap;
    }

    /**
     * Full name of the contact             
     */
    public displayName: string;
    
    /**
     * Title of the contact             
     */
    public displayNamePrefix: string;
    
    /**
     * Name under which to file this contact when displaying a list of contacts             
     */
    public fileUnder: string;
    
    /**
     * Value specifying how to generate and recompute the property when other properties are changed             
     */
    public fileUnderId: number;
    
    /**
     * Generation suffix of the contact             
     */
    public generation: string;
    
    /**
     * Given name (first name) of the contact             
     */
    public givenName: string;
    
    /**
     * Initials of the contact             
     */
    public initials: string;
    
    /**
     * Middle name of the contact             
     */
    public middleName: string;
    
    /**
     * Nickname of the contact             
     */
    public nickname: string;
    
    /**
     * Surname (family name) of the contact             
     */
    public surname: string;
    

    /**
     * The properties are used to specify the name of the person represented by the contact             
     * @param displayName Full name of the contact             
     * @param displayNamePrefix Title of the contact             
     * @param fileUnder Name under which to file this contact when displaying a list of contacts             
     * @param fileUnderId Value specifying how to generate and recompute the property when other properties are changed             
     * @param generation Generation suffix of the contact             
     * @param givenName Given name (first name) of the contact             
     * @param initials Initials of the contact             
     * @param middleName Middle name of the contact             
     * @param nickname Nickname of the contact             
     * @param surname Surname (family name) of the contact             
     */
    public constructor(
        displayName?: string,
        displayNamePrefix?: string,
        fileUnder?: string,
        fileUnderId?: number,
        generation?: string,
        givenName?: string,
        initials?: string,
        middleName?: string,
        nickname?: string,
        surname?: string) {
        
        this.displayName = displayName;
        this.displayNamePrefix = displayNamePrefix;
        this.fileUnder = fileUnder;
        this.fileUnderId = fileUnderId;
        this.generation = generation;
        this.givenName = givenName;
        this.initials = initials;
        this.middleName = middleName;
        this.nickname = nickname;
        this.surname = surname;
    }
}

/**
 * The properties are used to specify additional properties of contact.             
 */
export class MapiContactOtherPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "_private",
            baseName: "private",
            type: "boolean",
        },
        {
            name: "journal",
            baseName: "journal",
            type: "boolean",
        },
        {
            name: "reminderTime",
            baseName: "reminderTime",
            type: "Date",
        },
        {
            name: "reminderTopic",
            baseName: "reminderTopic",
            type: "string",
        },
        {
            name: "userField1",
            baseName: "userField1",
            type: "string",
        },
        {
            name: "userField2",
            baseName: "userField2",
            type: "string",
        },
        {
            name: "userField3",
            baseName: "userField3",
            type: "string",
        },
        {
            name: "userField4",
            baseName: "userField4",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactOtherPropertySetDto.attributeTypeMap;
    }

    /**
     * Indicates whether the end-user wants this message object hidden from other users who have access to the message object.             
     */
    public _private: boolean;
    
    /**
     * Specifies whether to create a journal for each action associated with this contact.             
     */
    public journal: boolean;
    
    /**
     * Specifies the initial signal time for a reminder.             
     */
    public reminderTime: Date;
    
    /**
     * Represents the status of a meeting request.             
     */
    public reminderTopic: string;
    
    /**
     * Specifies the first field on the contact that is intended for miscellaneous use for the contact.             
     */
    public userField1: string;
    
    /**
     * Specifies the second field on the contact that is intended for miscellaneous use for the contact.             
     */
    public userField2: string;
    
    /**
     * Specifies the third field on the contact that is intended for miscellaneous use for the contact.             
     */
    public userField3: string;
    
    /**
     * Specifies the forth field on the contact that is intended for miscellaneous use for the contact.             
     */
    public userField4: string;
    

    /**
     * The properties are used to specify additional properties of contact.             
     * @param _private Indicates whether the end-user wants this message object hidden from other users who have access to the message object.             
     * @param journal Specifies whether to create a journal for each action associated with this contact.             
     * @param reminderTime Specifies the initial signal time for a reminder.             
     * @param reminderTopic Represents the status of a meeting request.             
     * @param userField1 Specifies the first field on the contact that is intended for miscellaneous use for the contact.             
     * @param userField2 Specifies the second field on the contact that is intended for miscellaneous use for the contact.             
     * @param userField3 Specifies the third field on the contact that is intended for miscellaneous use for the contact.             
     * @param userField4 Specifies the forth field on the contact that is intended for miscellaneous use for the contact.             
     */
    public constructor(
        _private?: boolean,
        journal?: boolean,
        reminderTime?: Date,
        reminderTopic?: string,
        userField1?: string,
        userField2?: string,
        userField3?: string,
        userField4?: string) {
        
        this._private = _private;
        this.journal = journal;
        this.reminderTime = reminderTime;
        this.reminderTopic = reminderTopic;
        this.userField1 = userField1;
        this.userField2 = userField2;
        this.userField3 = userField3;
        this.userField4 = userField4;
    }
}

/**
 * Specify other additional contact information.             
 */
export class MapiContactPersonalInfoPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "spouseName",
            baseName: "spouseName",
            type: "string",
        },
        {
            name: "personalHomePage",
            baseName: "personalHomePage",
            type: "string",
        },
        {
            name: "language",
            baseName: "language",
            type: "string",
        },
        {
            name: "notes",
            baseName: "notes",
            type: "string",
        },
        {
            name: "hobbies",
            baseName: "hobbies",
            type: "string",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "instantMessagingAddress",
            baseName: "instantMessagingAddress",
            type: "string",
        },
        {
            name: "organizationalIdNumber",
            baseName: "organizationalIdNumber",
            type: "string",
        },
        {
            name: "customerId",
            baseName: "customerId",
            type: "string",
        },
        {
            name: "governmentIdNumber",
            baseName: "governmentIdNumber",
            type: "string",
        },
        {
            name: "freeBusyLocation",
            baseName: "freeBusyLocation",
            type: "string",
        },
        {
            name: "account",
            baseName: "account",
            type: "string",
        },
        {
            name: "html",
            baseName: "html",
            type: "string",
        },
        {
            name: "businessHomePage",
            baseName: "businessHomePage",
            type: "string",
        },
        {
            name: "ftpSite",
            baseName: "ftpSite",
            type: "string",
        },
        {
            name: "computerNetworkName",
            baseName: "computerNetworkName",
            type: "string",
        },
        {
            name: "gender",
            baseName: "gender",
            type: "string",
        },
        {
            name: "referredByName",
            baseName: "referredByName",
            type: "string",
        },
        {
            name: "children",
            baseName: "children",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactPersonalInfoPropertySetDto.attributeTypeMap;
    }

    /**
     * Specifies the name of the contact's spouse/partner             
     */
    public spouseName: string;
    
    /**
     * Specifies the contact's personal web page URL             
     */
    public personalHomePage: string;
    
    /**
     * Specifies the language that the contact uses             
     */
    public language: string;
    
    /**
     * Specifies the additional notes             
     */
    public notes: string;
    
    /**
     * Specifies the hobbies of the contact             
     */
    public hobbies: string;
    
    /**
     * Specifies the location of the contact             
     */
    public location: string;
    
    /**
     * Specifies the contact's instant messaging address             
     */
    public instantMessagingAddress: string;
    
    /**
     * Specifies an organizational ID number for the contact             
     */
    public organizationalIdNumber: string;
    
    /**
     * Specifies the contact's customer ID number             
     */
    public customerId: string;
    
    /**
     * Specifies the contact's government ID number             
     */
    public governmentIdNumber: string;
    
    /**
     * Specifies a URL path from which a client can retrieve free/busy information for the contact as an iCal file             
     */
    public freeBusyLocation: string;
    
    /**
     * Specifies the account name of the contact             
     */
    public account: string;
    
    /**
     * Specifies the contact's business web page URL             
     */
    public html: string;
    
    /**
     * Specifies the contact's business web page URL             
     */
    public businessHomePage: string;
    
    /**
     * Specifies the contact's File Transfer Protocol (FTP) URL             
     */
    public ftpSite: string;
    
    /**
     * Specifies the name of the network to which the contact's computer is connected             
     */
    public computerNetworkName: string;
    
    /**
     * Gender of the contact Enum, available values: Unspecified, Female, Male
     */
    public gender: string;
    
    /**
     * Specifies the name of the person who referred this contact to the user             
     */
    public referredByName: string;
    
    /**
     * Contains a list of names of children.             
     */
    public children: Array<string>;
    

    /**
     * Specify other additional contact information.             
     * @param spouseName Specifies the name of the contact's spouse/partner             
     * @param personalHomePage Specifies the contact's personal web page URL             
     * @param language Specifies the language that the contact uses             
     * @param notes Specifies the additional notes             
     * @param hobbies Specifies the hobbies of the contact             
     * @param location Specifies the location of the contact             
     * @param instantMessagingAddress Specifies the contact's instant messaging address             
     * @param organizationalIdNumber Specifies an organizational ID number for the contact             
     * @param customerId Specifies the contact's customer ID number             
     * @param governmentIdNumber Specifies the contact's government ID number             
     * @param freeBusyLocation Specifies a URL path from which a client can retrieve free/busy information for the contact as an iCal file             
     * @param account Specifies the account name of the contact             
     * @param html Specifies the contact's business web page URL             
     * @param businessHomePage Specifies the contact's business web page URL             
     * @param ftpSite Specifies the contact's File Transfer Protocol (FTP) URL             
     * @param computerNetworkName Specifies the name of the network to which the contact's computer is connected             
     * @param gender Gender of the contact Enum, available values: Unspecified, Female, Male
     * @param referredByName Specifies the name of the person who referred this contact to the user             
     * @param children Contains a list of names of children.             
     */
    public constructor(
        spouseName?: string,
        personalHomePage?: string,
        language?: string,
        notes?: string,
        hobbies?: string,
        location?: string,
        instantMessagingAddress?: string,
        organizationalIdNumber?: string,
        customerId?: string,
        governmentIdNumber?: string,
        freeBusyLocation?: string,
        account?: string,
        html?: string,
        businessHomePage?: string,
        ftpSite?: string,
        computerNetworkName?: string,
        gender?: string,
        referredByName?: string,
        children?: Array<string>) {
        
        this.spouseName = spouseName;
        this.personalHomePage = personalHomePage;
        this.language = language;
        this.notes = notes;
        this.hobbies = hobbies;
        this.location = location;
        this.instantMessagingAddress = instantMessagingAddress;
        this.organizationalIdNumber = organizationalIdNumber;
        this.customerId = customerId;
        this.governmentIdNumber = governmentIdNumber;
        this.freeBusyLocation = freeBusyLocation;
        this.account = account;
        this.html = html;
        this.businessHomePage = businessHomePage;
        this.ftpSite = ftpSite;
        this.computerNetworkName = computerNetworkName;
        this.gender = gender;
        this.referredByName = referredByName;
        this.children = children;
    }
}

/**
 * Refers to the group of properties that define physical address for a contact.             
 */
export class MapiContactPhysicalAddressDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isMailingAddress",
            baseName: "isMailingAddress",
            type: "boolean",
        },
        {
            name: "street",
            baseName: "street",
            type: "string",
        },
        {
            name: "city",
            baseName: "city",
            type: "string",
        },
        {
            name: "stateOrProvince",
            baseName: "stateOrProvince",
            type: "string",
        },
        {
            name: "postalCode",
            baseName: "postalCode",
            type: "string",
        },
        {
            name: "country",
            baseName: "country",
            type: "string",
        },
        {
            name: "countryCode",
            baseName: "countryCode",
            type: "string",
        },
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "postOfficeBox",
            baseName: "postOfficeBox",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactPhysicalAddressDto.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether this address is mailing address             
     */
    public isMailingAddress: boolean;
    
    /**
     * Specifies the street portion of the contact's address             
     */
    public street: string;
    
    /**
     * Specifies the city or locality portion of the contact's address             
     */
    public city: string;
    
    /**
     * Specifies the state or province portion of the contact's address             
     */
    public stateOrProvince: string;
    
    /**
     * Specifies the postal code (ZIP code) portion of the contact's address             
     */
    public postalCode: string;
    
    /**
     * Specifies the country or region portion of the contact's address             
     */
    public country: string;
    
    /**
     * Specifies the country code portion of the contact's address             
     */
    public countryCode: string;
    
    /**
     * Specifies the complete address of the contact's address             
     */
    public address: string;
    
    /**
     * Gets or sets the post office box             
     */
    public postOfficeBox: string;
    

    /**
     * Refers to the group of properties that define physical address for a contact.             
     * @param isMailingAddress Gets or sets a value indicating whether this address is mailing address             
     * @param street Specifies the street portion of the contact's address             
     * @param city Specifies the city or locality portion of the contact's address             
     * @param stateOrProvince Specifies the state or province portion of the contact's address             
     * @param postalCode Specifies the postal code (ZIP code) portion of the contact's address             
     * @param country Specifies the country or region portion of the contact's address             
     * @param countryCode Specifies the country code portion of the contact's address             
     * @param address Specifies the complete address of the contact's address             
     * @param postOfficeBox Gets or sets the post office box             
     */
    public constructor(
        isMailingAddress?: boolean,
        street?: string,
        city?: string,
        stateOrProvince?: string,
        postalCode?: string,
        country?: string,
        countryCode?: string,
        address?: string,
        postOfficeBox?: string) {
        
        this.isMailingAddress = isMailingAddress;
        this.street = street;
        this.city = city;
        this.stateOrProvince = stateOrProvince;
        this.postalCode = postalCode;
        this.country = country;
        this.countryCode = countryCode;
        this.address = address;
        this.postOfficeBox = postOfficeBox;
    }
}

/**
 * Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address             
 */
export class MapiContactPhysicalAddressPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "workAddress",
            baseName: "workAddress",
            type: "MapiContactPhysicalAddressDto",
        },
        {
            name: "homeAddress",
            baseName: "homeAddress",
            type: "MapiContactPhysicalAddressDto",
        },
        {
            name: "otherAddress",
            baseName: "otherAddress",
            type: "MapiContactPhysicalAddressDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactPhysicalAddressPropertySetDto.attributeTypeMap;
    }

    /**
     * Specifies the address of the contact's work             
     */
    public workAddress: MapiContactPhysicalAddressDto;
    
    /**
     * Specifies the address of the contact's home             
     */
    public homeAddress: MapiContactPhysicalAddressDto;
    
    /**
     * Specifies the other contact's address             
     */
    public otherAddress: MapiContactPhysicalAddressDto;
    

    /**
     * Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address             
     * @param workAddress Specifies the address of the contact's work             
     * @param homeAddress Specifies the address of the contact's home             
     * @param otherAddress Specifies the other contact's address             
     */
    public constructor(
        workAddress?: MapiContactPhysicalAddressDto,
        homeAddress?: MapiContactPhysicalAddressDto,
        otherAddress?: MapiContactPhysicalAddressDto) {
        
        this.workAddress = workAddress;
        this.homeAddress = homeAddress;
        this.otherAddress = otherAddress;
    }
}

/**
 * Properties are used to store professional details for the person represented by the contact             
 */
export class MapiContactProfessionalPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "title",
            baseName: "title",
            type: "string",
        },
        {
            name: "companyName",
            baseName: "companyName",
            type: "string",
        },
        {
            name: "departmentName",
            baseName: "departmentName",
            type: "string",
        },
        {
            name: "officeLocation",
            baseName: "officeLocation",
            type: "string",
        },
        {
            name: "managerName",
            baseName: "managerName",
            type: "string",
        },
        {
            name: "assistant",
            baseName: "assistant",
            type: "string",
        },
        {
            name: "profession",
            baseName: "profession",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactProfessionalPropertySetDto.attributeTypeMap;
    }

    /**
     * Gets or sets the job title of the contact             
     */
    public title: string;
    
    /**
     * Gets or sets the company that employs the contact             
     */
    public companyName: string;
    
    /**
     * Gets or sets the name of the department to which the contact belongs             
     */
    public departmentName: string;
    
    /**
     * Gets or sets the location of the office that the contact works in             
     */
    public officeLocation: string;
    
    /**
     * Gets or sets the name of the contact's manager             
     */
    public managerName: string;
    
    /**
     * Gets or sets the name of the contact's assistant             
     */
    public assistant: string;
    
    /**
     * Gets or sets the profession of the contact             
     */
    public profession: string;
    

    /**
     * Properties are used to store professional details for the person represented by the contact             
     * @param title Gets or sets the job title of the contact             
     * @param companyName Gets or sets the company that employs the contact             
     * @param departmentName Gets or sets the name of the department to which the contact belongs             
     * @param officeLocation Gets or sets the location of the office that the contact works in             
     * @param managerName Gets or sets the name of the contact's manager             
     * @param assistant Gets or sets the name of the contact's assistant             
     * @param profession Gets or sets the profession of the contact             
     */
    public constructor(
        title?: string,
        companyName?: string,
        departmentName?: string,
        officeLocation?: string,
        managerName?: string,
        assistant?: string,
        profession?: string) {
        
        this.title = title;
        this.companyName = companyName;
        this.departmentName = departmentName;
        this.officeLocation = officeLocation;
        this.managerName = managerName;
        this.assistant = assistant;
        this.profession = profession;
    }
}

/**
 * Specify optional telephone numbers for the contact.             
 */
export class MapiContactTelephonePropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isEmpty",
            baseName: "isEmpty",
            type: "boolean",
        },
        {
            name: "defaultTelephoneNumber",
            baseName: "defaultTelephoneNumber",
            type: "string",
        },
        {
            name: "useAutocomplete",
            baseName: "useAutocomplete",
            type: "boolean",
        },
        {
            name: "callbackTelephoneNumber",
            baseName: "callbackTelephoneNumber",
            type: "string",
        },
        {
            name: "businessTelephoneNumber",
            baseName: "businessTelephoneNumber",
            type: "string",
        },
        {
            name: "homeTelephoneNumber",
            baseName: "homeTelephoneNumber",
            type: "string",
        },
        {
            name: "primaryTelephoneNumber",
            baseName: "primaryTelephoneNumber",
            type: "string",
        },
        {
            name: "business2TelephoneNumber",
            baseName: "business2TelephoneNumber",
            type: "string",
        },
        {
            name: "mobileTelephoneNumber",
            baseName: "mobileTelephoneNumber",
            type: "string",
        },
        {
            name: "radioTelephoneNumber",
            baseName: "radioTelephoneNumber",
            type: "string",
        },
        {
            name: "carTelephoneNumber",
            baseName: "carTelephoneNumber",
            type: "string",
        },
        {
            name: "otherTelephoneNumber",
            baseName: "otherTelephoneNumber",
            type: "string",
        },
        {
            name: "assistantTelephoneNumber",
            baseName: "assistantTelephoneNumber",
            type: "string",
        },
        {
            name: "home2TelephoneNumber",
            baseName: "home2TelephoneNumber",
            type: "string",
        },
        {
            name: "ttyTddPhoneNumber",
            baseName: "ttyTddPhoneNumber",
            type: "string",
        },
        {
            name: "companyMainTelephoneNumber",
            baseName: "companyMainTelephoneNumber",
            type: "string",
        },
        {
            name: "telexNumber",
            baseName: "telexNumber",
            type: "string",
        },
        {
            name: "isdnNumber",
            baseName: "isdnNumber",
            type: "string",
        },
        {
            name: "pagerTelephoneNumber",
            baseName: "pagerTelephoneNumber",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactTelephonePropertySetDto.attributeTypeMap;
    }

    /**
     * Shows if MapiContactTelephonePropertySet is empty             
     */
    public isEmpty: boolean;
    
    /**
     * Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
     */
    public defaultTelephoneNumber: string;
    
    /**
     * Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
     */
    public useAutocomplete: boolean;
    
    /**
     * Gets or sets the callback telephone number             
     */
    public callbackTelephoneNumber: string;
    
    /**
     * Gets or sets the business telephone number             
     */
    public businessTelephoneNumber: string;
    
    /**
     * Gets or sets the home telephone number             
     */
    public homeTelephoneNumber: string;
    
    /**
     * Gets or sets the primary telephone number             
     */
    public primaryTelephoneNumber: string;
    
    /**
     * Gets or sets the second business telephone number             
     */
    public business2TelephoneNumber: string;
    
    /**
     * Gets or sets the mobile telephone number             
     */
    public mobileTelephoneNumber: string;
    
    /**
     * Gets or sets the radio telephone number             
     */
    public radioTelephoneNumber: string;
    
    /**
     * Gets or sets the car telephone number             
     */
    public carTelephoneNumber: string;
    
    /**
     * Gets or sets an alternate telephone number             
     */
    public otherTelephoneNumber: string;
    
    /**
     * Gets or sets the telephone number of the contact's assistant             
     */
    public assistantTelephoneNumber: string;
    
    /**
     * Gets or sets a second home telephone number             
     */
    public home2TelephoneNumber: string;
    
    /**
     * Gets or sets the telephone number for the contact's text telephone (TTY) or telecommunication device for the deaf (TDD)             
     */
    public ttyTddPhoneNumber: string;
    
    /**
     * Gets or sets the company phone number             
     */
    public companyMainTelephoneNumber: string;
    
    /**
     * Gets or sets the telex number             
     */
    public telexNumber: string;
    
    /**
     * Gets or sets the integrated services digital network (ISDN) number             
     */
    public isdnNumber: string;
    
    /**
     * Gets or sets a pager telephone number             
     */
    public pagerTelephoneNumber: string;
    

    /**
     * Specify optional telephone numbers for the contact.             
     * @param isEmpty Shows if MapiContactTelephonePropertySet is empty             
     * @param defaultTelephoneNumber Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
     * @param useAutocomplete Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
     * @param callbackTelephoneNumber Gets or sets the callback telephone number             
     * @param businessTelephoneNumber Gets or sets the business telephone number             
     * @param homeTelephoneNumber Gets or sets the home telephone number             
     * @param primaryTelephoneNumber Gets or sets the primary telephone number             
     * @param business2TelephoneNumber Gets or sets the second business telephone number             
     * @param mobileTelephoneNumber Gets or sets the mobile telephone number             
     * @param radioTelephoneNumber Gets or sets the radio telephone number             
     * @param carTelephoneNumber Gets or sets the car telephone number             
     * @param otherTelephoneNumber Gets or sets an alternate telephone number             
     * @param assistantTelephoneNumber Gets or sets the telephone number of the contact's assistant             
     * @param home2TelephoneNumber Gets or sets a second home telephone number             
     * @param ttyTddPhoneNumber Gets or sets the telephone number for the contact's text telephone (TTY) or telecommunication device for the deaf (TDD)             
     * @param companyMainTelephoneNumber Gets or sets the company phone number             
     * @param telexNumber Gets or sets the telex number             
     * @param isdnNumber Gets or sets the integrated services digital network (ISDN) number             
     * @param pagerTelephoneNumber Gets or sets a pager telephone number             
     */
    public constructor(
        isEmpty?: boolean,
        defaultTelephoneNumber?: string,
        useAutocomplete?: boolean,
        callbackTelephoneNumber?: string,
        businessTelephoneNumber?: string,
        homeTelephoneNumber?: string,
        primaryTelephoneNumber?: string,
        business2TelephoneNumber?: string,
        mobileTelephoneNumber?: string,
        radioTelephoneNumber?: string,
        carTelephoneNumber?: string,
        otherTelephoneNumber?: string,
        assistantTelephoneNumber?: string,
        home2TelephoneNumber?: string,
        ttyTddPhoneNumber?: string,
        companyMainTelephoneNumber?: string,
        telexNumber?: string,
        isdnNumber?: string,
        pagerTelephoneNumber?: string) {
        
        this.isEmpty = isEmpty;
        this.defaultTelephoneNumber = defaultTelephoneNumber;
        this.useAutocomplete = useAutocomplete;
        this.callbackTelephoneNumber = callbackTelephoneNumber;
        this.businessTelephoneNumber = businessTelephoneNumber;
        this.homeTelephoneNumber = homeTelephoneNumber;
        this.primaryTelephoneNumber = primaryTelephoneNumber;
        this.business2TelephoneNumber = business2TelephoneNumber;
        this.mobileTelephoneNumber = mobileTelephoneNumber;
        this.radioTelephoneNumber = radioTelephoneNumber;
        this.carTelephoneNumber = carTelephoneNumber;
        this.otherTelephoneNumber = otherTelephoneNumber;
        this.assistantTelephoneNumber = assistantTelephoneNumber;
        this.home2TelephoneNumber = home2TelephoneNumber;
        this.ttyTddPhoneNumber = ttyTddPhoneNumber;
        this.companyMainTelephoneNumber = companyMainTelephoneNumber;
        this.telexNumber = telexNumber;
        this.isdnNumber = isdnNumber;
        this.pagerTelephoneNumber = pagerTelephoneNumber;
    }
}

/**
 * Refers to the group of properties that define the e-mail address or fax address.             
 */
export class MapiElectronicAddressDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "addressType",
            baseName: "addressType",
            type: "string",
        },
        {
            name: "emailAddress",
            baseName: "emailAddress",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "faxNumber",
            baseName: "faxNumber",
            type: "string",
        },
        {
            name: "originalDisplayName",
            baseName: "originalDisplayName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiElectronicAddressDto.attributeTypeMap;
    }

    /**
     * Address type.             
     */
    public addressType: string;
    
    /**
     * Email address.             
     */
    public emailAddress: string;
    
    /**
     * User-readable display name for the e-mail address.             
     */
    public displayName: string;
    
    /**
     * Telephone number of the mail user's primary fax machine.             
     */
    public faxNumber: string;
    
    /**
     * SMTP e-mail address that  corresponds to the e-mail address.             
     */
    public originalDisplayName: string;
    

    /**
     * Refers to the group of properties that define the e-mail address or fax address.             
     * @param addressType Address type.             
     * @param emailAddress Email address.             
     * @param displayName User-readable display name for the e-mail address.             
     * @param faxNumber Telephone number of the mail user's primary fax machine.             
     * @param originalDisplayName SMTP e-mail address that  corresponds to the e-mail address.             
     */
    public constructor(
        addressType?: string,
        emailAddress?: string,
        displayName?: string,
        faxNumber?: string,
        originalDisplayName?: string) {
        
        this.addressType = addressType;
        this.emailAddress = emailAddress;
        this.displayName = displayName;
        this.faxNumber = faxNumber;
        this.originalDisplayName = originalDisplayName;
    }
}

/**
 * Base Dto for MapiMessage, MapiCalendar or MapiContact             
 */
export class MapiMessageItemBaseDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<MapiAttachmentDto>",
        },
        {
            name: "billing",
            baseName: "billing",
            type: "string",
        },
        {
            name: "body",
            baseName: "body",
            type: "string",
        },
        {
            name: "bodyHtml",
            baseName: "bodyHtml",
            type: "string",
        },
        {
            name: "bodyRtf",
            baseName: "bodyRtf",
            type: "string",
        },
        {
            name: "bodyType",
            baseName: "bodyType",
            type: "string",
        },
        {
            name: "categories",
            baseName: "categories",
            type: "Array<string>",
        },
        {
            name: "companies",
            baseName: "companies",
            type: "Array<string>",
        },
        {
            name: "itemId",
            baseName: "itemId",
            type: "string",
        },
        {
            name: "messageClass",
            baseName: "messageClass",
            type: "string",
        },
        {
            name: "mileage",
            baseName: "mileage",
            type: "string",
        },
        {
            name: "recipients",
            baseName: "recipients",
            type: "Array<MapiRecipientDto>",
        },
        {
            name: "sensitivity",
            baseName: "sensitivity",
            type: "string",
        },
        {
            name: "subject",
            baseName: "subject",
            type: "string",
        },
        {
            name: "subjectPrefix",
            baseName: "subjectPrefix",
            type: "string",
        },
        {
            name: "properties",
            baseName: "properties",
            type: "Array<MapiPropertyDto>",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiMessageItemBaseDto.attributeTypeMap;
    }

    /**
     * Message item attachments.             
     */
    public attachments: Array<MapiAttachmentDto>;
    
    /**
     * Billing information associated with an item.             
     */
    public billing: string;
    
    /**
     * Message text.             
     */
    public body: string;
    
    /**
     * Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
     */
    public bodyHtml: string;
    
    /**
     * RTF formatted message text.             
     */
    public bodyRtf: string;
    
    /**
     * The content type of message body. Enum, available values: PlainText, Html, Rtf
     */
    public bodyType: string;
    
    /**
     * Contains keywords or categories for the message object.             
     */
    public categories: Array<string>;
    
    /**
     * Contains the names of the companies that are associated with an item.             
     */
    public companies: Array<string>;
    
    /**
     * The item id, uses with a server.             
     */
    public itemId: string;
    
    /**
     * Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
     */
    public messageClass: string;
    
    /**
     * Contains the mileage information that is associated with an item.             
     */
    public mileage: string;
    
    /**
     * Recipients of the message.             
     */
    public recipients: Array<MapiRecipientDto>;
    
    /**
     * Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential
     */
    public sensitivity: string;
    
    /**
     * Subject of the message.             
     */
    public subject: string;
    
    /**
     * Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
     */
    public subjectPrefix: string;
    
    /**
     * List of MAPI properties             
     */
    public properties: Array<MapiPropertyDto>;
    

    get discriminator(): string {
        return this.constructor.name;
    }

    set discriminator(_newType: string) {
        /* do nothing */
    }
    

    /**
     * Base Dto for MapiMessage, MapiCalendar or MapiContact             
     * @param attachments Message item attachments.             
     * @param billing Billing information associated with an item.             
     * @param body Message text.             
     * @param bodyHtml Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
     * @param bodyRtf RTF formatted message text.             
     * @param bodyType The content type of message body. Enum, available values: PlainText, Html, Rtf
     * @param categories Contains keywords or categories for the message object.             
     * @param companies Contains the names of the companies that are associated with an item.             
     * @param itemId The item id, uses with a server.             
     * @param messageClass Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
     * @param mileage Contains the mileage information that is associated with an item.             
     * @param recipients Recipients of the message.             
     * @param sensitivity Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential
     * @param subject Subject of the message.             
     * @param subjectPrefix Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
     * @param properties List of MAPI properties             
     * @param discriminator 
     */
    public constructor(
        attachments?: Array<MapiAttachmentDto>,
        billing?: string,
        body?: string,
        bodyHtml?: string,
        bodyRtf?: string,
        bodyType?: string,
        categories?: Array<string>,
        companies?: Array<string>,
        itemId?: string,
        messageClass?: string,
        mileage?: string,
        recipients?: Array<MapiRecipientDto>,
        sensitivity?: string,
        subject?: string,
        subjectPrefix?: string,
        properties?: Array<MapiPropertyDto>,
        discriminator?: string) {
        
        this.attachments = attachments;
        this.billing = billing;
        this.body = body;
        this.bodyHtml = bodyHtml;
        this.bodyRtf = bodyRtf;
        this.bodyType = bodyType;
        this.categories = categories;
        this.companies = companies;
        this.itemId = itemId;
        this.messageClass = messageClass;
        this.mileage = mileage;
        this.recipients = recipients;
        this.sensitivity = sensitivity;
        this.subject = subject;
        this.subjectPrefix = subjectPrefix;
        this.properties = properties;
        this.discriminator = discriminator;
    }
}

/**
 * Mapi property descriptor             
 */
export class MapiPropertyDescriptor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiPropertyDescriptor.attributeTypeMap;
    }


    get discriminator(): string {
        return this.constructor.name;
    }

    set discriminator(_newType: string) {
        /* do nothing */
    }
    

    /**
     * Mapi property descriptor             
     * @param discriminator 
     */
    public constructor(
        discriminator?: string) {
        
        this.discriminator = discriminator;
    }
}

/**
 * Mapi property             
 */
export class MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "descriptor",
            baseName: "descriptor",
            type: "MapiPropertyDescriptor",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiPropertyDto.attributeTypeMap;
    }

    /**
     * Property descriptor             
     */
    public descriptor: MapiPropertyDescriptor;
    

    get discriminator(): string {
        return this.constructor.name;
    }

    set discriminator(_newType: string) {
        /* do nothing */
    }
    

    /**
     * Mapi property             
     * @param descriptor Property descriptor             
     * @param discriminator 
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string) {
        
        this.descriptor = descriptor;
        this.discriminator = discriminator;
    }
}

/**
 * Represents the recipient information in the Microsoft Outlook Message.             
 */
export class MapiRecipientDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emailAddress",
            baseName: "emailAddress",
            type: "string",
        },
        {
            name: "addressType",
            baseName: "addressType",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "recipientType",
            baseName: "recipientType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiRecipientDto.attributeTypeMap;
    }

    /**
     * Email address of the message recipient or sender.             
     */
    public emailAddress: string;
    
    /**
     * Type of the address of the message recipient or sender.             
     */
    public addressType: string;
    
    /**
     * Display name of the message recipient or sender.             
     */
    public displayName: string;
    
    /**
     * Represent the PR_RECIPIENT_TYPE property which contains the recipient type for a message recipient. Enum, available values: Unknown, MapiBcc, MapiCc, MapiP1, MapiSubmitted, MapiTo
     */
    public recipientType: string;
    

    /**
     * Represents the recipient information in the Microsoft Outlook Message.             
     * @param emailAddress Email address of the message recipient or sender.             
     * @param addressType Type of the address of the message recipient or sender.             
     * @param displayName Display name of the message recipient or sender.             
     * @param recipientType Represent the PR_RECIPIENT_TYPE property which contains the recipient type for a message recipient. Enum, available values: Unknown, MapiBcc, MapiCc, MapiP1, MapiSubmitted, MapiTo
     */
    public constructor(
        emailAddress?: string,
        addressType?: string,
        displayName?: string,
        recipientType?: string) {
        
        this.emailAddress = emailAddress;
        this.addressType = addressType;
        this.displayName = displayName;
        this.recipientType = recipientType;
    }
}

/**
 * Email document property DTO.             
 */
export class MimeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "mime",
            baseName: "mime",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MimeResponse.attributeTypeMap;
    }

    /**
     * Gets or sets base64 encoded mime content.             
     */
    public mime: string;
    

    /**
     * Email document property DTO.             
     * @param mime Gets or sets base64 encoded mime content.             
     */
    public constructor(
        mime?: string) {
        
        this.mime = mime;
    }
}

export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },
        {
            name: "message",
            baseName: "message",
            type: "string",
        },
        {
            name: "description",
            baseName: "description",
            type: "string",
        },
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    public code: string;
    
    public message: string;
    
    public description: string;
    
    public innerError: ErrorDetails;
    

    /**
     * 
     * @param code 
     * @param message 
     * @param description 
     * @param innerError 
     */
    public constructor(
        code?: string,
        message?: string,
        description?: string,
        innerError?: ErrorDetails) {
        
        this.code = code;
        this.message = message;
        this.description = description;
        this.innerError = innerError;
    }
}

/**
 * Name-Value property             
 */
export class NameValuePair {

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
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return NameValuePair.attributeTypeMap;
    }

    /**
     * Property name             
     */
    public name: string;
    
    /**
     * Property value             
     */
    public value: string;
    

    /**
     * Name-Value property             
     * @param name Property name             
     * @param value Property value             
     */
    public constructor(
        name?: string,
        value?: string) {
        
        this.name = name;
        this.value = value;
    }
}

export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    public exists: boolean;
    
    public isFolder: boolean;
    

    /**
     * 
     * @param exists 
     * @param isFolder 
     */
    public constructor(
        exists?: boolean,
        isFolder?: boolean) {
        
        this.exists = exists;
        this.isFolder = isFolder;
    }
}

/**
 * A phone number.             
 */
export class PhoneNumber {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfPhoneNumberCategory",
        },
        {
            name: "number",
            baseName: "number",
            type: "string",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PhoneNumber.attributeTypeMap;
    }

    /**
     * Phone number category.             
     */
    public category: EnumWithCustomOfPhoneNumberCategory;
    
    /**
     * Phone number.             
     */
    public number: string;
    
    /**
     * Defines whether phone number is preferred.             
     */
    public preferred: boolean;
    

    /**
     * A phone number.             
     * @param category Phone number category.             
     * @param number Phone number.             
     * @param preferred Defines whether phone number is preferred.             
     */
    public constructor(
        category?: EnumWithCustomOfPhoneNumberCategory,
        number?: string,
        preferred?: boolean) {
        
        this.category = category;
        this.number = number;
        this.preferred = preferred;
    }
}

/**
 * A postal address             
 */
export class PostalAddress {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "address",
            baseName: "address",
            type: "string",
        },
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfPostalAddressCategory",
        },
        {
            name: "city",
            baseName: "city",
            type: "string",
        },
        {
            name: "country",
            baseName: "country",
            type: "string",
        },
        {
            name: "countryCode",
            baseName: "countryCode",
            type: "string",
        },
        {
            name: "isMailingAddress",
            baseName: "isMailingAddress",
            type: "boolean",
        },
        {
            name: "postalCode",
            baseName: "postalCode",
            type: "string",
        },
        {
            name: "postOfficeBox",
            baseName: "postOfficeBox",
            type: "string",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        },
        {
            name: "stateOrProvince",
            baseName: "stateOrProvince",
            type: "string",
        },
        {
            name: "street",
            baseName: "street",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PostalAddress.attributeTypeMap;
    }

    /**
     * Address.             
     */
    public address: string;
    
    /**
     * Address category.             
     */
    public category: EnumWithCustomOfPostalAddressCategory;
    
    /**
     * Address's city.             
     */
    public city: string;
    
    /**
     * Address's country.             
     */
    public country: string;
    
    /**
     * Country code.             
     */
    public countryCode: string;
    
    /**
     * Defines whether address may be used for mailing.             
     */
    public isMailingAddress: boolean;
    
    /**
     * Postal code.             
     */
    public postalCode: string;
    
    /**
     * Post Office box.             
     */
    public postOfficeBox: string;
    
    /**
     * Defines whether postal address is preferred.             
     */
    public preferred: boolean;
    
    /**
     * Address's region.             
     */
    public stateOrProvince: string;
    
    /**
     * Address's street.             
     */
    public street: string;
    

    /**
     * A postal address             
     * @param address Address.             
     * @param category Address category.             
     * @param city Address's city.             
     * @param country Address's country.             
     * @param countryCode Country code.             
     * @param isMailingAddress Defines whether address may be used for mailing.             
     * @param postalCode Postal code.             
     * @param postOfficeBox Post Office box.             
     * @param preferred Defines whether postal address is preferred.             
     * @param stateOrProvince Address's region.             
     * @param street Address's street.             
     */
    public constructor(
        address?: string,
        category?: EnumWithCustomOfPostalAddressCategory,
        city?: string,
        country?: string,
        countryCode?: string,
        isMailingAddress?: boolean,
        postalCode?: string,
        postOfficeBox?: string,
        preferred?: boolean,
        stateOrProvince?: string,
        street?: string) {
        
        this.address = address;
        this.category = category;
        this.city = city;
        this.country = country;
        this.countryCode = countryCode;
        this.isMailingAddress = isMailingAddress;
        this.postalCode = postalCode;
        this.postOfficeBox = postOfficeBox;
        this.preferred = preferred;
        this.stateOrProvince = stateOrProvince;
        this.street = street;
    }
}

/**
 * iCalendar recurrence pattern.             
 */
export class RecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "interval",
            baseName: "interval",
            type: "number",
        },
        {
            name: "occurs",
            baseName: "occurs",
            type: "number",
        },
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        },
        {
            name: "weekStart",
            baseName: "weekStart",
            type: "string",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RecurrencePatternDto.attributeTypeMap;
    }

    /**
     * Number of recurrence units.             
     */
    public interval: number;
    
    /**
     * Number of occurrences of the recurrence pattern.             
     */
    public occurs: number;
    
    /**
     * End date.             
     */
    public endDate: Date;
    
    /**
     * Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     */
    public weekStart: string;
    

    get discriminator(): string {
        return this.constructor.name;
    }

    set discriminator(_newType: string) {
        /* do nothing */
    }
    

    /**
     * iCalendar recurrence pattern.             
     * @param interval Number of recurrence units.             
     * @param occurs Number of occurrences of the recurrence pattern.             
     * @param endDate End date.             
     * @param weekStart Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param discriminator 
     */
    public constructor(
        interval?: number,
        occurs?: number,
        endDate?: Date,
        weekStart?: string,
        discriminator?: string) {
        
        this.interval = interval;
        this.occurs = occurs;
        this.endDate = endDate;
        this.weekStart = weekStart;
        this.discriminator = discriminator;
    }
}

/**
 * Defines an \"Attendee\" within a alarm.
 */
export class ReminderAttendee {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "address",
            baseName: "address",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReminderAttendee.attributeTypeMap;
    }

    /**
     * Contains the email address.
     */
    public address: string;
    

    /**
     * Defines an \"Attendee\" within a alarm.
     * @param address Contains the email address.
     */
    public constructor(
        address?: string) {
        
        this.address = address;
    }
}

/**
 * Specifies when an alarm will trigger.
 */
export class ReminderTrigger {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "dateTime",
            baseName: "dateTime",
            type: "Date",
        },
        {
            name: "duration",
            baseName: "duration",
            type: "number",
        },
        {
            name: "related",
            baseName: "related",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReminderTrigger.attributeTypeMap;
    }

    /**
     * A trigger set to an absolute date/time.
     */
    public dateTime: Date;
    
    /**
     * Specifies a relative time in ticks for the trigger of the alarm.             
     */
    public duration: number;
    
    /**
     * Specify the relationship of the alarm trigger with respect to the start or end of the event. Enum, available values: Start, End
     */
    public related: string;
    

    /**
     * Specifies when an alarm will trigger.
     * @param dateTime A trigger set to an absolute date/time.
     * @param duration Specifies a relative time in ticks for the trigger of the alarm.             
     * @param related Specify the relationship of the alarm trigger with respect to the start or end of the event. Enum, available values: Start, End
     */
    public constructor(
        dateTime?: Date,
        duration?: number,
        related?: string) {
        
        this.dateTime = dateTime;
        this.duration = duration;
        this.related = related;
    }
}

/**
 * Update email document property request             
 */
export class SetEmailPropertyRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emailProperty",
            baseName: "emailProperty",
            type: "EmailProperty",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SetEmailPropertyRequest.attributeTypeMap;
    }

    /**
     * An email property that should be updated             
     */
    public emailProperty: EmailProperty;
    
    /**
     * An email document location in storage             
     */
    public storageFolder: StorageFolderLocation;
    

    /**
     * Update email document property request             
     * @param emailProperty An email property that should be updated             
     * @param storageFolder An email document location in storage             
     */
    public constructor(
        emailProperty?: EmailProperty,
        storageFolder?: StorageFolderLocation) {
        
        this.emailProperty = emailProperty;
        this.storageFolder = storageFolder;
    }
}

export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    public exists: boolean;
    

    /**
     * 
     * @param exists 
     */
    public constructor(
        exists?: boolean) {
        
        this.exists = exists;
    }
}

export class StorageFile {

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
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },
        {
            name: "size",
            baseName: "size",
            type: "number",
        },
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    public name: string;
    
    public isFolder: boolean;
    
    public modifiedDate: Date;
    
    public size: number;
    
    public path: string;
    

    /**
     * 
     * @param name 
     * @param isFolder 
     * @param modifiedDate 
     * @param size 
     * @param path 
     */
    public constructor(
        name?: string,
        isFolder?: boolean,
        modifiedDate?: Date,
        size?: number,
        path?: string) {
        
        this.name = name;
        this.isFolder = isFolder;
        this.modifiedDate = modifiedDate;
        this.size = size;
        this.path = path;
    }
}

export class StorageFileRqOfEmailClientAccount {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "EmailClientAccount",
        },
        {
            name: "storageFile",
            baseName: "storageFile",
            type: "StorageFileLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFileRqOfEmailClientAccount.attributeTypeMap;
    }

    public value: EmailClientAccount;
    
    public storageFile: StorageFileLocation;
    

    /**
     * 
     * @param value 
     * @param storageFile 
     */
    public constructor(
        value?: EmailClientAccount,
        storageFile?: StorageFileLocation) {
        
        this.value = value;
        this.storageFile = storageFile;
    }
}

export class StorageFileRqOfEmailClientMultiAccount {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "EmailClientMultiAccount",
        },
        {
            name: "storageFile",
            baseName: "storageFile",
            type: "StorageFileLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFileRqOfEmailClientMultiAccount.attributeTypeMap;
    }

    public value: EmailClientMultiAccount;
    
    public storageFile: StorageFileLocation;
    

    /**
     * 
     * @param value 
     * @param storageFile 
     */
    public constructor(
        value?: EmailClientMultiAccount,
        storageFile?: StorageFileLocation) {
        
        this.value = value;
        this.storageFile = storageFile;
    }
}

/**
 * A storage folder location information             
 */
export class StorageFolderLocation {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "storage",
            baseName: "storage",
            type: "string",
        },
        {
            name: "folderPath",
            baseName: "folderPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFolderLocation.attributeTypeMap;
    }

    /**
     * A storage name             
     */
    public storage: string;
    
    /**
     * A path to a folder in specified storage             
     */
    public folderPath: string;
    

    /**
     * A storage folder location information             
     * @param storage A storage name             
     * @param folderPath A path to a folder in specified storage             
     */
    public constructor(
        storage?: string,
        folderPath?: string) {
        
        this.storage = storage;
        this.folderPath = folderPath;
    }
}

export class StorageModelOfCalendarDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "storageFile",
            baseName: "storageFile",
            type: "StorageFileLocation",
        },
        {
            name: "value",
            baseName: "value",
            type: "CalendarDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelOfCalendarDto.attributeTypeMap;
    }

    public storageFile: StorageFileLocation;
    
    public value: CalendarDto;
    

    /**
     * 
     * @param storageFile 
     * @param value 
     */
    public constructor(
        storageFile?: StorageFileLocation,
        value?: CalendarDto) {
        
        this.storageFile = storageFile;
        this.value = value;
    }
}

export class StorageModelOfContactDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "storageFile",
            baseName: "storageFile",
            type: "StorageFileLocation",
        },
        {
            name: "value",
            baseName: "value",
            type: "ContactDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelOfContactDto.attributeTypeMap;
    }

    public storageFile: StorageFileLocation;
    
    public value: ContactDto;
    

    /**
     * 
     * @param storageFile 
     * @param value 
     */
    public constructor(
        storageFile?: StorageFileLocation,
        value?: ContactDto) {
        
        this.storageFile = storageFile;
        this.value = value;
    }
}

export class StorageModelOfEmailDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "storageFile",
            baseName: "storageFile",
            type: "StorageFileLocation",
        },
        {
            name: "value",
            baseName: "value",
            type: "EmailDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelOfEmailDto.attributeTypeMap;
    }

    public storageFile: StorageFileLocation;
    
    public value: EmailDto;
    

    /**
     * 
     * @param storageFile 
     * @param value 
     */
    public constructor(
        storageFile?: StorageFileLocation,
        value?: EmailDto) {
        
        this.storageFile = storageFile;
        this.value = value;
    }
}

export class StorageModelRqOfCalendarDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "CalendarDto",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelRqOfCalendarDto.attributeTypeMap;
    }

    public value: CalendarDto;
    
    public storageFolder: StorageFolderLocation;
    

    /**
     * 
     * @param value 
     * @param storageFolder 
     */
    public constructor(
        value?: CalendarDto,
        storageFolder?: StorageFolderLocation) {
        
        this.value = value;
        this.storageFolder = storageFolder;
    }
}

export class StorageModelRqOfContactDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "ContactDto",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelRqOfContactDto.attributeTypeMap;
    }

    public value: ContactDto;
    
    public storageFolder: StorageFolderLocation;
    

    /**
     * 
     * @param value 
     * @param storageFolder 
     */
    public constructor(
        value?: ContactDto,
        storageFolder?: StorageFolderLocation) {
        
        this.value = value;
        this.storageFolder = storageFolder;
    }
}

export class StorageModelRqOfEmailDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "EmailDto",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelRqOfEmailDto.attributeTypeMap;
    }

    public value: EmailDto;
    
    public storageFolder: StorageFolderLocation;
    

    /**
     * 
     * @param value 
     * @param storageFolder 
     */
    public constructor(
        value?: EmailDto,
        storageFolder?: StorageFolderLocation) {
        
        this.value = value;
        this.storageFolder = storageFolder;
    }
}

export class StorageModelRqOfMapiCalendarDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "MapiCalendarDto",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelRqOfMapiCalendarDto.attributeTypeMap;
    }

    public value: MapiCalendarDto;
    
    public storageFolder: StorageFolderLocation;
    

    /**
     * 
     * @param value 
     * @param storageFolder 
     */
    public constructor(
        value?: MapiCalendarDto,
        storageFolder?: StorageFolderLocation) {
        
        this.value = value;
        this.storageFolder = storageFolder;
    }
}

export class StorageModelRqOfMapiContactDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "MapiContactDto",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelRqOfMapiContactDto.attributeTypeMap;
    }

    public value: MapiContactDto;
    
    public storageFolder: StorageFolderLocation;
    

    /**
     * 
     * @param value 
     * @param storageFolder 
     */
    public constructor(
        value?: MapiContactDto,
        storageFolder?: StorageFolderLocation) {
        
        this.value = value;
        this.storageFolder = storageFolder;
    }
}

export class StorageModelRqOfMapiMessageDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "MapiMessageDto",
        },
        {
            name: "storageFolder",
            baseName: "storageFolder",
            type: "StorageFolderLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageModelRqOfMapiMessageDto.attributeTypeMap;
    }

    public value: MapiMessageDto;
    
    public storageFolder: StorageFolderLocation;
    

    /**
     * 
     * @param value 
     * @param storageFolder 
     */
    public constructor(
        value?: MapiMessageDto,
        storageFolder?: StorageFolderLocation) {
        
        this.value = value;
        this.storageFolder = storageFolder;
    }
}

/**
 * Url and its category.             
 */
export class Url {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "EnumWithCustomOfUrlCategory",
        },
        {
            name: "preferred",
            baseName: "preferred",
            type: "boolean",
        },
        {
            name: "href",
            baseName: "href",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Url.attributeTypeMap;
    }

    /**
     * Url category.             
     */
    public category: EnumWithCustomOfUrlCategory;
    
    /**
     * Defines whether url is preferred.             
     */
    public preferred: boolean;
    
    /**
     * URL.             
     */
    public href: string;
    

    /**
     * Url and its category.             
     * @param category Url category.             
     * @param preferred Defines whether url is preferred.             
     * @param href URL.             
     */
    public constructor(
        category?: EnumWithCustomOfUrlCategory,
        preferred?: boolean,
        href?: string) {
        
        this.category = category;
        this.preferred = preferred;
        this.href = href;
    }
}

/**
 * String value object             
 */
export class ValueResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ValueResponse.attributeTypeMap;
    }

    /**
     * Gets or sets string content.             
     */
    public value: string;
    

    /**
     * String value object             
     * @param value Gets or sets string content.             
     */
    public constructor(
        value?: string) {
        
        this.value = value;
    }
}

export class ValueTOfBoolean {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ValueTOfBoolean.attributeTypeMap;
    }

    public value: boolean;
    

    /**
     * 
     * @param value 
     */
    public constructor(
        value?: boolean) {
        
        this.value = value;
    }
}

/**
 * Image to recognize             
 */
export class AiBcrBase64Image extends AiBcrImage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "base64Data",
            baseName: "base64Data",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiBcrBase64Image.attributeTypeMap);
    }

    /**
     * Image data in base64             
     */
    public base64Data: string;
    

    /**
     * Image to recognize             
     * @param isSingle Determines that image contains single VCard or more. Ignored in current version. Multiple cards on image support will be added soon             
     * @param base64Data Image data in base64             
     */
    public constructor(
        isSingle?: boolean,
        base64Data?: string) {
        super();
        this.isSingle = isSingle;
        this.base64Data = base64Data;
    }
}

/**
 * Parse business card image request             
 */
export class AiBcrBase64Rq extends AiBcrRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "images",
            baseName: "images",
            type: "Array<AiBcrBase64Image>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiBcrBase64Rq.attributeTypeMap);
    }

    /**
     * Images to recognize             
     */
    public images: Array<AiBcrBase64Image>;
    

    /**
     * Parse business card image request             
     * @param options Recognition options             
     * @param images Images to recognize             
     */
    public constructor(
        options?: AiBcrOptions,
        images?: Array<AiBcrBase64Image>) {
        super();
        this.options = options;
        this.images = images;
    }
}

/**
 * Image from storage for recognition             
 */
export class AiBcrImageStorageFile extends AiBcrImage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "file",
            baseName: "file",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiBcrImageStorageFile.attributeTypeMap);
    }

    /**
     * Image location             
     */
    public file: any;
    

    /**
     * Image from storage for recognition             
     * @param isSingle Determines that image contains single VCard or more. Ignored in current version. Multiple cards on image support will be added soon             
     * @param file Image location             
     */
    public constructor(
        isSingle?: boolean,
        file?: any) {
        super();
        this.isSingle = isSingle;
        this.file = file;
    }
}

/**
 * Parse ocr data request             
 */
export class AiBcrParseOcrDataRq extends AiBcrRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "data",
            baseName: "data",
            type: "Array<AiBcrOcrData>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiBcrParseOcrDataRq.attributeTypeMap);
    }

    /**
     * OCR data             
     */
    public data: Array<AiBcrOcrData>;
    

    /**
     * Parse ocr data request             
     * @param options Recognition options             
     * @param data OCR data             
     */
    public constructor(
        options?: AiBcrOptions,
        data?: Array<AiBcrOcrData>) {
        super();
        this.options = options;
        this.data = data;
    }
}

/**
 * Business card images from storage for recognition             
 */
export class AiBcrStorageImageRq extends AiBcrRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "images",
            baseName: "images",
            type: "Array<AiBcrImageStorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiBcrStorageImageRq.attributeTypeMap);
    }

    /**
     * List of images with business cards             
     */
    public images: Array<AiBcrImageStorageFile>;
    

    /**
     * Business card images from storage for recognition             
     * @param options Recognition options             
     * @param images List of images with business cards             
     */
    public constructor(
        options?: AiBcrOptions,
        images?: Array<AiBcrImageStorageFile>) {
        super();
        this.options = options;
        this.images = images;
    }
}

/**
 * Two parsed names to match request             
 */
export class AiNameParsedMatchRq extends AiNameParsedRq {

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
        return super.getAttributeTypeMap().concat(AiNameParsedMatchRq.attributeTypeMap);
    }

    /**
     * Other parsed name to match             
     */
    public otherParsedName: Array<AiNameComponent>;
    

    /**
     * Two parsed names to match request             
     * @param culturalContext AiName parser cultural context             
     * @param format Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (= '%t%F%m%N%L%p')     /format/FN+LN/ (= '%F%L')     /format/title+FN+LN/ (= '%t%F%L')     /format/FN+MN+LN/ (= '%F%M%N%L')     /format/title+FN+MN+LN/ (= '%t%F%M%N%L')     /format/FN+MI+LN/ (= '%F%m%N%L')     /format/title+FN+MI+LN/ (= '%t%F%m%N%L')     /format/LN/ (= '%L')     /format/title+LN/ (= '%t%L')     /format/LN+FN+MN/ (= '%L,%F%M%N')     /format/LN+title+FN+MN/ (= '%L,%t%F%M%N')     /format/LN+FN+MI/ (= '%L,%F%m%N')     /format/LN+title+FN+MI/ (= '%L,%t%F%m%N')  Custom format string - custom combination of characters and the next term placeholders:      '%t' - Title (prefix)     '%F' - First name     '%f' - First initial     '%M' - Middle name(s)     '%m' - Middle initial(s)     '%N' - Nickname     '%L' - Last name     '%l' - Last initial     '%p' - Postfix  If no value for format option was provided, its default value is '%t%F%m%N%L%p'             
     * @param parsedName Parsed name             
     * @param otherParsedName Other parsed name to match             
     */
    public constructor(
        culturalContext?: AiNameCulturalContext,
        format?: string,
        parsedName?: Array<AiNameComponent>,
        otherParsedName?: Array<AiNameComponent>) {
        super();
        this.culturalContext = culturalContext;
        this.format = format;
        this.parsedName = parsedName;
        this.otherParsedName = otherParsedName;
    }
}

/**
 * Represents the format to view a message.             
 */
export class AlternateView extends AttachmentBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "baseUri",
            baseName: "baseUri",
            type: "string",
        },
        {
            name: "linkedResources",
            baseName: "linkedResources",
            type: "Array<LinkedResource>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AlternateView.attributeTypeMap);
    }

    /**
     * Base URI.             
     */
    public baseUri: string;
    
    /**
     * Embedded resources referred to by this alternate view.             
     */
    public linkedResources: Array<LinkedResource>;
    

    /**
     * Represents the format to view a message.             
     * @param base64Data Attachment file content as Base64 string.             
     * @param contentId Attachment content id             
     * @param contentType Content type             
     * @param headers Attachment headers.             
     * @param baseUri Base URI.             
     * @param linkedResources Embedded resources referred to by this alternate view.             
     */
    public constructor(
        base64Data?: string,
        contentId?: string,
        contentType?: ContentType,
        headers?: { [key: string]: string; },
        baseUri?: string,
        linkedResources?: Array<LinkedResource>) {
        super();
        this.base64Data = base64Data;
        this.contentId = contentId;
        this.contentType = contentType;
        this.headers = headers;
        this.baseUri = baseUri;
        this.linkedResources = linkedResources;
    }
}

/**
 * Append email to account request             
 */
export class AppendEmailAccountBaseRequest extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },
        {
            name: "markAsSent",
            baseName: "markAsSent",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AppendEmailAccountBaseRequest.attributeTypeMap);
    }

    /**
     * Email account folder to store a message             
     */
    public folder: string;
    
    /**
     * Mark message as sent             
     */
    public markAsSent: boolean;
    

    /**
     * Append email to account request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param folder Email account folder to store a message             
     * @param markAsSent Mark message as sent             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string,
        markAsSent?: boolean) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.folder = folder;
        this.markAsSent = markAsSent;
    }
}

/**
 * Document attachment.             
 */
export class Attachment extends AttachmentBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "contentDisposition",
            baseName: "contentDisposition",
            type: "string",
        },
        {
            name: "isEmbeddedMessage",
            baseName: "isEmbeddedMessage",
            type: "boolean",
        },
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "nameEncoding",
            baseName: "nameEncoding",
            type: "string",
        },
        {
            name: "preferredTextEncoding",
            baseName: "preferredTextEncoding",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Attachment.attributeTypeMap);
    }

    /**
     * Content-Disposition header. Read only.             
     */
    public contentDisposition: string;
    
    /**
     * Determines if attachment is an embedded message. Read only.             
     */
    public isEmbeddedMessage: boolean;
    
    /**
     * Attachment name.             
     */
    public name: string;
    
    /**
     * Encoding of attachment name.             
     */
    public nameEncoding: string;
    
    /**
     * Preferred text encoding.             
     */
    public preferredTextEncoding: string;
    

    /**
     * Document attachment.             
     * @param base64Data Attachment file content as Base64 string.             
     * @param contentId Attachment content id             
     * @param contentType Content type             
     * @param headers Attachment headers.             
     * @param contentDisposition Content-Disposition header. Read only.             
     * @param isEmbeddedMessage Determines if attachment is an embedded message. Read only.             
     * @param name Attachment name.             
     * @param nameEncoding Encoding of attachment name.             
     * @param preferredTextEncoding Preferred text encoding.             
     */
    public constructor(
        base64Data?: string,
        contentId?: string,
        contentType?: ContentType,
        headers?: { [key: string]: string; },
        contentDisposition?: string,
        isEmbeddedMessage?: boolean,
        name?: string,
        nameEncoding?: string,
        preferredTextEncoding?: string) {
        super();
        this.base64Data = base64Data;
        this.contentId = contentId;
        this.contentType = contentType;
        this.headers = headers;
        this.contentDisposition = contentDisposition;
        this.isEmbeddedMessage = isEmbeddedMessage;
        this.name = name;
        this.nameEncoding = nameEncoding;
        this.preferredTextEncoding = preferredTextEncoding;
    }
}

/**
 * List of iCalendar documents             
 */
export class CalendarDtoList extends ListResponseOfStorageModelOfCalendarDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CalendarDtoList.attributeTypeMap);
    }


    /**
     * List of iCalendar documents             
     * @param value 
     */
    public constructor(
        value?: Array<StorageModelOfCalendarDto>) {
        super();
        this.value = value;
    }
}

/**
 * List of contact documents             
 */
export class ContactDtoList extends ListResponseOfStorageModelOfContactDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ContactDtoList.attributeTypeMap);
    }


    /**
     * List of contact documents             
     * @param value 
     */
    public constructor(
        value?: Array<StorageModelOfContactDto>) {
        super();
        this.value = value;
    }
}

/**
 * Create folder request             
 */
export class CreateFolderBaseRequest extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },
        {
            name: "parentFolder",
            baseName: "parentFolder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CreateFolderBaseRequest.attributeTypeMap);
    }

    /**
     * Folder name             
     */
    public folder: string;
    
    /**
     * Parent folder path             
     */
    public parentFolder: string;
    

    /**
     * Create folder request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param folder Folder name             
     * @param parentFolder Parent folder path             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string,
        parentFolder?: string) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.folder = folder;
        this.parentFolder = parentFolder;
    }
}

/**
 * Daily recurrence.             
 */
export class DailyRecurrencePatternDto extends RecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DailyRecurrencePatternDto.attributeTypeMap);
    }


    /**
     * Daily recurrence.             
     * @param interval Number of recurrence units.             
     * @param occurs Number of occurrences of the recurrence pattern.             
     * @param endDate End date.             
     * @param weekStart Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param discriminator 
     */
    public constructor(
        interval?: number,
        occurs?: number,
        endDate?: Date,
        weekStart?: string,
        discriminator?: string) {
        super();
        this.interval = interval;
        this.occurs = occurs;
        this.endDate = endDate;
        this.weekStart = weekStart;
        this.discriminator = discriminator;
    }
}

/**
 * Delete thread request             
 */
export class DeleteEmailThreadAccountRq extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DeleteEmailThreadAccountRq.attributeTypeMap);
    }

    /**
     * Specifies account folder to get thread from             
     */
    public folder: string;
    

    /**
     * Delete thread request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param folder Specifies account folder to get thread from             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.folder = folder;
    }
}

/**
 * Delete folder request             
 */
export class DeleteFolderBaseRequest extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },
        {
            name: "deletePermanently",
            baseName: "deletePermanently",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DeleteFolderBaseRequest.attributeTypeMap);
    }

    /**
     * Folder name             
     */
    public folder: string;
    
    /**
     * Specifies that folder should be deleted permanently             
     */
    public deletePermanently: boolean;
    

    /**
     * Delete folder request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param folder Folder name             
     * @param deletePermanently Specifies that folder should be deleted permanently             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string,
        deletePermanently?: boolean) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.folder = folder;
        this.deletePermanently = deletePermanently;
    }
}

/**
 * Delete message request             
 */
export class DeleteMessageBaseRequest extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "messageId",
            baseName: "messageId",
            type: "string",
        },
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },
        {
            name: "deletePermanently",
            baseName: "deletePermanently",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DeleteMessageBaseRequest.attributeTypeMap);
    }

    /**
     * Message identifier             
     */
    public messageId: string;
    
    /**
     * Account folder where message located. Should be specified for some accounts             
     */
    public folder: string;
    
    /**
     * Specifies that message should be deleted permanently             
     */
    public deletePermanently: boolean;
    

    /**
     * Delete message request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param messageId Message identifier             
     * @param folder Account folder where message located. Should be specified for some accounts             
     * @param deletePermanently Specifies that message should be deleted permanently             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        messageId?: string,
        folder?: string,
        deletePermanently?: boolean) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.messageId = messageId;
        this.folder = folder;
        this.deletePermanently = deletePermanently;
    }
}

export class DiscoverEmailConfigOauth extends DiscoverEmailConfigRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "clientId",
            baseName: "clientId",
            type: "string",
        },
        {
            name: "clientSecret",
            baseName: "clientSecret",
            type: "string",
        },
        {
            name: "refreshToken",
            baseName: "refreshToken",
            type: "string",
        },
        {
            name: "requestUrl",
            baseName: "requestUrl",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DiscoverEmailConfigOauth.attributeTypeMap);
    }

    /**
     * OAuth client id.             
     */
    public clientId: string;
    
    /**
     * OAuth client secret.             
     */
    public clientSecret: string;
    
    /**
     * OAuth refresh token.             
     */
    public refreshToken: string;
    
    /**
     * The url to obtain access token. If not specified, will be discovered from email configuration.             
     */
    public requestUrl: string;
    

    /**
     * 
     * @param address Email address to discover.             
     * @param fastProcessing Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.             
     * @param login Email account login. If not specified, address used as a login.             
     * @param clientId OAuth client id.             
     * @param clientSecret OAuth client secret.             
     * @param refreshToken OAuth refresh token.             
     * @param requestUrl The url to obtain access token. If not specified, will be discovered from email configuration.             
     */
    public constructor(
        address?: string,
        fastProcessing?: boolean,
        login?: string,
        clientId?: string,
        clientSecret?: string,
        refreshToken?: string,
        requestUrl?: string) {
        super();
        this.address = address;
        this.fastProcessing = fastProcessing;
        this.login = login;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.refreshToken = refreshToken;
        this.requestUrl = requestUrl;
    }
}

export class DiscoverEmailConfigPassword extends DiscoverEmailConfigRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DiscoverEmailConfigPassword.attributeTypeMap);
    }

    /**
     * Email account password.             
     */
    public password: string;
    

    /**
     * 
     * @param address Email address to discover.             
     * @param fastProcessing Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.             
     * @param login Email account login. If not specified, address used as a login.             
     * @param password Email account password.             
     */
    public constructor(
        address?: string,
        fastProcessing?: boolean,
        login?: string,
        password?: string) {
        super();
        this.address = address;
        this.fastProcessing = fastProcessing;
        this.login = login;
        this.password = password;
    }
}

/**
 * List of email accounts             
 */
export class EmailAccountConfigList extends ListResponseOfEmailAccountConfig {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailAccountConfigList.attributeTypeMap);
    }


    /**
     * List of email accounts             
     * @param value 
     */
    public constructor(
        value?: Array<EmailAccountConfig>) {
        super();
        this.value = value;
    }
}

/**
 * Represents email client account OAuth 2.0 credentials             
 */
export class EmailClientAccountOauthCredentials extends EmailClientAccountCredentials {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "clientId",
            baseName: "clientId",
            type: "string",
        },
        {
            name: "clientSecret",
            baseName: "clientSecret",
            type: "string",
        },
        {
            name: "refreshToken",
            baseName: "refreshToken",
            type: "string",
        },
        {
            name: "requestUrl",
            baseName: "requestUrl",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailClientAccountOauthCredentials.attributeTypeMap);
    }

    /**
     * The client ID obtained from the Google Cloud Console during application registration.             
     */
    public clientId: string;
    
    /**
     * The client secret obtained during application registration.             
     */
    public clientSecret: string;
    
    /**
     * OAuth 2.0 refresh token             
     */
    public refreshToken: string;
    
    /**
     * The url to obtain access token. If not specified, will try to discover from email client account host.             
     */
    public requestUrl: string;
    

    /**
     * Represents email client account OAuth 2.0 credentials             
     * @param login Email client account login             
     * @param discriminator 
     * @param clientId The client ID obtained from the Google Cloud Console during application registration.             
     * @param clientSecret The client secret obtained during application registration.             
     * @param refreshToken OAuth 2.0 refresh token             
     * @param requestUrl The url to obtain access token. If not specified, will try to discover from email client account host.             
     */
    public constructor(
        login?: string,
        discriminator?: string,
        clientId?: string,
        clientSecret?: string,
        refreshToken?: string,
        requestUrl?: string) {
        super();
        this.login = login;
        this.discriminator = discriminator;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.refreshToken = refreshToken;
        this.requestUrl = requestUrl;
    }
}

/**
 * Represents email client account password credentials             
 */
export class EmailClientAccountPasswordCredentials extends EmailClientAccountCredentials {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailClientAccountPasswordCredentials.attributeTypeMap);
    }

    /**
     * Email client account password             
     */
    public password: string;
    

    /**
     * Represents email client account password credentials             
     * @param login Email client account login             
     * @param discriminator 
     * @param password Email client account password             
     */
    public constructor(
        login?: string,
        discriminator?: string,
        password?: string) {
        super();
        this.login = login;
        this.discriminator = discriminator;
        this.password = password;
    }
}

/**
 * List of email documents from storage             
 */
export class EmailDtoList extends ListResponseOfStorageModelOfEmailDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailDtoList.attributeTypeMap);
    }


    /**
     * List of email documents from storage             
     * @param value 
     */
    public constructor(
        value?: Array<StorageModelOfEmailDto>) {
        super();
        this.value = value;
    }
}

/**
 * List of email threads             
 */
export class EmailThreadList extends ListResponseOfEmailThread {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailThreadList.attributeTypeMap);
    }


    /**
     * List of email threads             
     * @param value 
     */
    public constructor(
        value?: Array<EmailThread>) {
        super();
        this.value = value;
    }
}

/**
 * Request to mark all messages in thread as read or unread             
 */
export class EmailThreadReadFlagRq extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isRead",
            baseName: "isRead",
            type: "boolean",
        },
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailThreadReadFlagRq.attributeTypeMap);
    }

    /**
     * Read flag to set. \"true\" by default             
     */
    public isRead: boolean;
    
    /**
     * Specifies account folder to get thread from             
     */
    public folder: string;
    

    /**
     * Request to mark all messages in thread as read or unread             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param isRead Read flag to set. \"true\" by default             
     * @param folder Specifies account folder to get thread from             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        isRead?: boolean,
        folder?: string) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.isRead = isRead;
        this.folder = folder;
    }
}

export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    public versionId: string;
    
    public isLatest: boolean;
    

    /**
     * 
     * @param name 
     * @param isFolder 
     * @param modifiedDate 
     * @param size 
     * @param path 
     * @param versionId 
     * @param isLatest 
     */
    public constructor(
        name?: string,
        isFolder?: boolean,
        modifiedDate?: Date,
        size?: number,
        path?: string,
        versionId?: string,
        isLatest?: boolean) {
        super();
        this.name = name;
        this.isFolder = isFolder;
        this.modifiedDate = modifiedDate;
        this.size = size;
        this.path = path;
        this.versionId = versionId;
        this.isLatest = isLatest;
    }
}

/**
 * Objects' properties hierarchical representation             
 */
export class HierarchicalObject extends BaseObject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "internalProperties",
            baseName: "internalProperties",
            type: "Array<BaseObject>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HierarchicalObject.attributeTypeMap);
    }

    /**
     * List of internal properties             
     */
    public internalProperties: Array<BaseObject>;
    

    /**
     * Objects' properties hierarchical representation             
     * @param name Gets or sets the name of an object.             
     * @param type Property type. Used for deserialization purposes             
     * @param internalProperties List of internal properties             
     */
    public constructor(
        name?: string,
        type?: string,
        internalProperties?: Array<BaseObject>) {
        super();
        this.name = name;
        this.type = type;
        this.internalProperties = internalProperties;
    }
}

/**
 * Indexed hierarchical property             
 */
export class IndexedHierarchicalObject extends BaseObject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "index",
            baseName: "index",
            type: "number",
        },
        {
            name: "internalProperties",
            baseName: "internalProperties",
            type: "Array<BaseObject>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IndexedHierarchicalObject.attributeTypeMap);
    }

    /**
     * Index of property in list             
     */
    public index: number;
    
    /**
     * List of internal properties             
     */
    public internalProperties: Array<BaseObject>;
    

    /**
     * Indexed hierarchical property             
     * @param name Gets or sets the name of an object.             
     * @param type Property type. Used for deserialization purposes             
     * @param index Index of property in list             
     * @param internalProperties List of internal properties             
     */
    public constructor(
        name?: string,
        type?: string,
        index?: number,
        internalProperties?: Array<BaseObject>) {
        super();
        this.name = name;
        this.type = type;
        this.index = index;
        this.internalProperties = internalProperties;
    }
}

/**
 * Simple indexed property             
 */
export class IndexedPrimitiveObject extends BaseObject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "index",
            baseName: "index",
            type: "number",
        },
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IndexedPrimitiveObject.attributeTypeMap);
    }

    /**
     * Index of property in list             
     */
    public index: number;
    
    /**
     * Gets or sets the name of a property.             
     */
    public value: string;
    

    /**
     * Simple indexed property             
     * @param name Gets or sets the name of an object.             
     * @param type Property type. Used for deserialization purposes             
     * @param index Index of property in list             
     * @param value Gets or sets the name of a property.             
     */
    public constructor(
        name?: string,
        type?: string,
        index?: number,
        value?: string) {
        super();
        this.name = name;
        this.type = type;
        this.index = index;
        this.value = value;
    }
}

/**
 * Represents an embedded resource in a message.             
 */
export class LinkedResource extends AttachmentBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "contentLink",
            baseName: "contentLink",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LinkedResource.attributeTypeMap);
    }

    /**
     * URI that the resource must match.             
     */
    public contentLink: string;
    

    /**
     * Represents an embedded resource in a message.             
     * @param base64Data Attachment file content as Base64 string.             
     * @param contentId Attachment content id             
     * @param contentType Content type             
     * @param headers Attachment headers.             
     * @param contentLink URI that the resource must match.             
     */
    public constructor(
        base64Data?: string,
        contentId?: string,
        contentType?: ContentType,
        headers?: { [key: string]: string; },
        contentLink?: string) {
        super();
        this.base64Data = base64Data;
        this.contentId = contentId;
        this.contentType = contentType;
        this.headers = headers;
        this.contentLink = contentLink;
    }
}

/**
 * Mapi property with Binary value represented as a Base64 string             
 */
export class MapiBinaryPropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "valueBase64",
            baseName: "valueBase64",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiBinaryPropertyDto.attributeTypeMap);
    }

    /**
     * Property value converted to Base64             
     */
    public valueBase64: string;
    

    /**
     * Mapi property with Binary value represented as a Base64 string             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param valueBase64 Property value converted to Base64             
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        valueBase64?: string) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.valueBase64 = valueBase64;
    }
}

/**
 * Mapi property with Boolean value             
 */
export class MapiBooleanPropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiBooleanPropertyDto.attributeTypeMap);
    }

    /**
     * Property value             
     */
    public value: boolean;
    

    /**
     * Mapi property with Boolean value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Property value             
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: boolean) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Represents the daily recurrence pattern of the mapi calendar.             
 */
export class MapiCalendarDailyRecurrencePatternDto extends MapiCalendarRecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "dayOfWeek",
            baseName: "dayOfWeek",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiCalendarDailyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Days of week at which the event occurs.              Items: Enumerates the days of week of the mapi calendar recurrence pattern Enum, available values: Saturday, Friday, Thursday, Wednesday, Tuesday, Monday, Sunday
     */
    public dayOfWeek: Array<string>;
    

    /**
     * Represents the daily recurrence pattern of the mapi calendar.             
     * @param calendarType Enumerated the calendar type of the mapi recurrence Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
     * @param deletedInstanceDates An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
     * @param endDate End date of an item recurrence pattern.             
     * @param endType Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
     * @param exceptions An exception specifies changes to an instance of a recurring series.             
     * @param frequency Enumerates mapi calendar recurrence frequency Enum, available values: None, Daily, Weekly, Monthly, Yearly
     * @param modifiedInstanceDates An array of dates, each of which is the date of a modified instance.             
     * @param occurrenceCount Number of occurrences in a recurrence.             
     * @param patternType Enumerates the mapi calendar recurrence pattern types Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
     * @param period Interval at which the meeting pattern repeats.             
     * @param slidingFlag Defines whether pattern is sliding or not.             
     * @param startDate Start date of an item recurrence pattern.             
     * @param weekStartDay Day of week Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     * @param discriminator 
     * @param dayOfWeek Days of week at which the event occurs.             
     */
    public constructor(
        calendarType?: string,
        deletedInstanceDates?: Array<Date>,
        endDate?: Date,
        endType?: string,
        exceptions?: Array<MapiCalendarExceptionInfoDto>,
        frequency?: string,
        modifiedInstanceDates?: Array<Date>,
        occurrenceCount?: number,
        patternType?: string,
        period?: number,
        slidingFlag?: boolean,
        startDate?: Date,
        weekStartDay?: string,
        discriminator?: string,
        dayOfWeek?: Array<string>) {
        super();
        this.calendarType = calendarType;
        this.deletedInstanceDates = deletedInstanceDates;
        this.endDate = endDate;
        this.endType = endType;
        this.exceptions = exceptions;
        this.frequency = frequency;
        this.modifiedInstanceDates = modifiedInstanceDates;
        this.occurrenceCount = occurrenceCount;
        this.patternType = patternType;
        this.period = period;
        this.slidingFlag = slidingFlag;
        this.startDate = startDate;
        this.weekStartDay = weekStartDay;
        this.discriminator = discriminator;
        this.dayOfWeek = dayOfWeek;
    }
}

/**
 * Represents the mapi calendar object             
 */
export class MapiCalendarDto extends MapiMessageItemBaseDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "appointmentCounterProposal",
            baseName: "appointmentCounterProposal",
            type: "boolean",
        },
        {
            name: "attendees",
            baseName: "attendees",
            type: "any",
        },
        {
            name: "busyStatus",
            baseName: "busyStatus",
            type: "string",
        },
        {
            name: "clientIntent",
            baseName: "clientIntent",
            type: "Array<string>",
        },
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        },
        {
            name: "endDateTimeZone",
            baseName: "endDateTimeZone",
            type: "any",
        },
        {
            name: "isAllDay",
            baseName: "isAllDay",
            type: "boolean",
        },
        {
            name: "keyWords",
            baseName: "keyWords",
            type: "string",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "recurrence",
            baseName: "recurrence",
            type: "any",
        },
        {
            name: "reminderDelta",
            baseName: "reminderDelta",
            type: "number",
        },
        {
            name: "reminderFileParameter",
            baseName: "reminderFileParameter",
            type: "string",
        },
        {
            name: "reminderSet",
            baseName: "reminderSet",
            type: "boolean",
        },
        {
            name: "sequence",
            baseName: "sequence",
            type: "number",
        },
        {
            name: "startDate",
            baseName: "startDate",
            type: "Date",
        },
        {
            name: "startDateTimeZone",
            baseName: "startDateTimeZone",
            type: "any",
        },
        {
            name: "uid",
            baseName: "uid",
            type: "string",
        },
        {
            name: "organizer",
            baseName: "organizer",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiCalendarDto.attributeTypeMap);
    }

    /**
     * Value indicating whether a Meeting Response object is a counter proposal.             
     */
    public appointmentCounterProposal: boolean;
    
    /**
     * Attendees             
     */
    public attendees: any;
    
    /**
     * Enumerates the mapi calendar possible busy status Enum, available values: Free, Tentative, Busy, OutOfOffice
     */
    public busyStatus: string;
    
    /**
     * Actions the user has taken on this Meeting object.              Items: Enumerates the actions the user can taken on the Meeting object Enum, available values: Manager, Delegate, DeletedWithNoResponse, DeletedExceptionWithNoResponse, RespondedTentative, RespondedAccept, RespondedDecline, ModifiedStartTime, ModifiedEndTime, ModifiedLocation, RespondedExceptionDecline, Canceled, ExceptionCanceled
     */
    public clientIntent: Array<string>;
    
    /**
     * End date and time of the event. If the date is not set, default value for DateTime is returned.             
     */
    public endDate: Date;
    
    /**
     * Time zone information that indicates the time zone of the EndDate property.             
     */
    public endDateTimeZone: any;
    
    /**
     * Value indicating whether the event is an all-day event.             
     */
    public isAllDay: boolean;
    
    /**
     * Categories of the calendar object.             
     */
    public keyWords: string;
    
    /**
     * Location of the event.             
     */
    public location: string;
    
    /**
     * Recurrence properties.             
     */
    public recurrence: any;
    
    /**
     * Interval, in minutes, between the time at which the reminder first becomes overdue and the start time of the Calendar object.             
     */
    public reminderDelta: number;
    
    /**
     * Full path of the sound that a client SHOULD play when the reminder becomes overdue.             
     */
    public reminderFileParameter: string;
    
    /**
     * Value indicating whether a reminder is set on the object.             
     */
    public reminderSet: boolean;
    
    /**
     * Sequence number.             
     */
    public sequence: number;
    
    /**
     * Start date and time of the event. If the date is not set, default value for DateTime is returned.             
     */
    public startDate: Date;
    
    /**
     * Time zone information that indicates the time zone of the StartDate property.             
     */
    public startDateTimeZone: any;
    
    /**
     * Unique identifier.             
     */
    public uid: string;
    
    /**
     * Organizer             
     */
    public organizer: any;
    

    /**
     * Represents the mapi calendar object             
     * @param attachments Message item attachments.             
     * @param billing Billing information associated with an item.             
     * @param body Message text.             
     * @param bodyHtml Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
     * @param bodyRtf RTF formatted message text.             
     * @param bodyType The content type of message body. Enum, available values: PlainText, Html, Rtf
     * @param categories Contains keywords or categories for the message object.             
     * @param companies Contains the names of the companies that are associated with an item.             
     * @param itemId The item id, uses with a server.             
     * @param messageClass Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
     * @param mileage Contains the mileage information that is associated with an item.             
     * @param recipients Recipients of the message.             
     * @param sensitivity Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential
     * @param subject Subject of the message.             
     * @param subjectPrefix Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
     * @param properties List of MAPI properties             
     * @param discriminator 
     * @param appointmentCounterProposal Value indicating whether a Meeting Response object is a counter proposal.             
     * @param attendees Attendees             
     * @param busyStatus Enumerates the mapi calendar possible busy status Enum, available values: Free, Tentative, Busy, OutOfOffice
     * @param clientIntent Actions the user has taken on this Meeting object.             
     * @param endDate End date and time of the event. If the date is not set, default value for DateTime is returned.             
     * @param endDateTimeZone Time zone information that indicates the time zone of the EndDate property.             
     * @param isAllDay Value indicating whether the event is an all-day event.             
     * @param keyWords Categories of the calendar object.             
     * @param location Location of the event.             
     * @param recurrence Recurrence properties.             
     * @param reminderDelta Interval, in minutes, between the time at which the reminder first becomes overdue and the start time of the Calendar object.             
     * @param reminderFileParameter Full path of the sound that a client SHOULD play when the reminder becomes overdue.             
     * @param reminderSet Value indicating whether a reminder is set on the object.             
     * @param sequence Sequence number.             
     * @param startDate Start date and time of the event. If the date is not set, default value for DateTime is returned.             
     * @param startDateTimeZone Time zone information that indicates the time zone of the StartDate property.             
     * @param uid Unique identifier.             
     * @param organizer Organizer             
     */
    public constructor(
        attachments?: Array<MapiAttachmentDto>,
        billing?: string,
        body?: string,
        bodyHtml?: string,
        bodyRtf?: string,
        bodyType?: string,
        categories?: Array<string>,
        companies?: Array<string>,
        itemId?: string,
        messageClass?: string,
        mileage?: string,
        recipients?: Array<MapiRecipientDto>,
        sensitivity?: string,
        subject?: string,
        subjectPrefix?: string,
        properties?: Array<MapiPropertyDto>,
        discriminator?: string,
        appointmentCounterProposal?: boolean,
        attendees?: any,
        busyStatus?: string,
        clientIntent?: Array<string>,
        endDate?: Date,
        endDateTimeZone?: any,
        isAllDay?: boolean,
        keyWords?: string,
        location?: string,
        recurrence?: any,
        reminderDelta?: number,
        reminderFileParameter?: string,
        reminderSet?: boolean,
        sequence?: number,
        startDate?: Date,
        startDateTimeZone?: any,
        uid?: string,
        organizer?: any) {
        super();
        this.attachments = attachments;
        this.billing = billing;
        this.body = body;
        this.bodyHtml = bodyHtml;
        this.bodyRtf = bodyRtf;
        this.bodyType = bodyType;
        this.categories = categories;
        this.companies = companies;
        this.itemId = itemId;
        this.messageClass = messageClass;
        this.mileage = mileage;
        this.recipients = recipients;
        this.sensitivity = sensitivity;
        this.subject = subject;
        this.subjectPrefix = subjectPrefix;
        this.properties = properties;
        this.discriminator = discriminator;
        this.appointmentCounterProposal = appointmentCounterProposal;
        this.attendees = attendees;
        this.busyStatus = busyStatus;
        this.clientIntent = clientIntent;
        this.endDate = endDate;
        this.endDateTimeZone = endDateTimeZone;
        this.isAllDay = isAllDay;
        this.keyWords = keyWords;
        this.location = location;
        this.recurrence = recurrence;
        this.reminderDelta = reminderDelta;
        this.reminderFileParameter = reminderFileParameter;
        this.reminderSet = reminderSet;
        this.sequence = sequence;
        this.startDate = startDate;
        this.startDateTimeZone = startDateTimeZone;
        this.uid = uid;
        this.organizer = organizer;
    }
}

/**
 * Represents the weekly recurrence pattern of the mapi calendar             
 */
export class MapiCalendarWeeklyRecurrencePatternDto extends MapiCalendarRecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "dayOfWeek",
            baseName: "dayOfWeek",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiCalendarWeeklyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Days of week at which the event occurs.              Items: Enumerates the days of week of the mapi calendar recurrence pattern Enum, available values: Saturday, Friday, Thursday, Wednesday, Tuesday, Monday, Sunday
     */
    public dayOfWeek: Array<string>;
    

    /**
     * Represents the weekly recurrence pattern of the mapi calendar             
     * @param calendarType Enumerated the calendar type of the mapi recurrence Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
     * @param deletedInstanceDates An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
     * @param endDate End date of an item recurrence pattern.             
     * @param endType Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
     * @param exceptions An exception specifies changes to an instance of a recurring series.             
     * @param frequency Enumerates mapi calendar recurrence frequency Enum, available values: None, Daily, Weekly, Monthly, Yearly
     * @param modifiedInstanceDates An array of dates, each of which is the date of a modified instance.             
     * @param occurrenceCount Number of occurrences in a recurrence.             
     * @param patternType Enumerates the mapi calendar recurrence pattern types Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
     * @param period Interval at which the meeting pattern repeats.             
     * @param slidingFlag Defines whether pattern is sliding or not.             
     * @param startDate Start date of an item recurrence pattern.             
     * @param weekStartDay Day of week Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     * @param discriminator 
     * @param dayOfWeek Days of week at which the event occurs.             
     */
    public constructor(
        calendarType?: string,
        deletedInstanceDates?: Array<Date>,
        endDate?: Date,
        endType?: string,
        exceptions?: Array<MapiCalendarExceptionInfoDto>,
        frequency?: string,
        modifiedInstanceDates?: Array<Date>,
        occurrenceCount?: number,
        patternType?: string,
        period?: number,
        slidingFlag?: boolean,
        startDate?: Date,
        weekStartDay?: string,
        discriminator?: string,
        dayOfWeek?: Array<string>) {
        super();
        this.calendarType = calendarType;
        this.deletedInstanceDates = deletedInstanceDates;
        this.endDate = endDate;
        this.endType = endType;
        this.exceptions = exceptions;
        this.frequency = frequency;
        this.modifiedInstanceDates = modifiedInstanceDates;
        this.occurrenceCount = occurrenceCount;
        this.patternType = patternType;
        this.period = period;
        this.slidingFlag = slidingFlag;
        this.startDate = startDate;
        this.weekStartDay = weekStartDay;
        this.discriminator = discriminator;
        this.dayOfWeek = dayOfWeek;
    }
}

/**
 * Represents the yearly and monthly recurrence pattern of the mapi calendar             
 */
export class MapiCalendarYearlyAndMonthlyRecurrencePatternDto extends MapiCalendarRecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "day",
            baseName: "day",
            type: "number",
        },
        {
            name: "dayOfWeek",
            baseName: "dayOfWeek",
            type: "Array<string>",
        },
        {
            name: "position",
            baseName: "position",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiCalendarYearlyAndMonthlyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Day of the month on which the recurrence falls.             
     */
    public day: number;
    
    /**
     * Days of week at which the event occurs.              Items: Enumerates the days of week of the mapi calendar recurrence pattern Enum, available values: Saturday, Friday, Thursday, Wednesday, Tuesday, Monday, Sunday
     */
    public dayOfWeek: Array<string>;
    
    /**
     * Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public position: string;
    

    /**
     * Represents the yearly and monthly recurrence pattern of the mapi calendar             
     * @param calendarType Enumerated the calendar type of the mapi recurrence Enum, available values: Default, CalGregorian, CalGregorianUs, CalJapan, CalTaiwan, CalKorea, CalHijri, CalThai, CalHebrew, CalGregorianMeFrench, CalGregorianArabic, CalGregorianXLitEnglish, CalGregorianXLitFrench, CalLunarJapanese, CalChineseLunar, CalSaka, CalLunarEtoChn, CalLunarEtoKor, CalLunarRokuyou, CalLunarKorean, CalUmAlQura
     * @param deletedInstanceDates An array of dates, each of which is the original instance date of either a deleted instance or a modified instance for this recurrence.             
     * @param endDate End date of an item recurrence pattern.             
     * @param endType Enumerates the ending type for the recurrence. Enum, available values: None, EndAfterDate, EndAfterNOccurrences, NeverEnd
     * @param exceptions An exception specifies changes to an instance of a recurring series.             
     * @param frequency Enumerates mapi calendar recurrence frequency Enum, available values: None, Daily, Weekly, Monthly, Yearly
     * @param modifiedInstanceDates An array of dates, each of which is the date of a modified instance.             
     * @param occurrenceCount Number of occurrences in a recurrence.             
     * @param patternType Enumerates the mapi calendar recurrence pattern types Enum, available values: Day, Week, Month, MonthEnd, MonthNth, HjMonth, HjMonthNth, HjMonthEnd
     * @param period Interval at which the meeting pattern repeats.             
     * @param slidingFlag Defines whether pattern is sliding or not.             
     * @param startDate Start date of an item recurrence pattern.             
     * @param weekStartDay Day of week Enum, available values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
     * @param discriminator 
     * @param day Day of the month on which the recurrence falls.             
     * @param dayOfWeek Days of week at which the event occurs.             
     * @param position Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public constructor(
        calendarType?: string,
        deletedInstanceDates?: Array<Date>,
        endDate?: Date,
        endType?: string,
        exceptions?: Array<MapiCalendarExceptionInfoDto>,
        frequency?: string,
        modifiedInstanceDates?: Array<Date>,
        occurrenceCount?: number,
        patternType?: string,
        period?: number,
        slidingFlag?: boolean,
        startDate?: Date,
        weekStartDay?: string,
        discriminator?: string,
        day?: number,
        dayOfWeek?: Array<string>,
        position?: string) {
        super();
        this.calendarType = calendarType;
        this.deletedInstanceDates = deletedInstanceDates;
        this.endDate = endDate;
        this.endType = endType;
        this.exceptions = exceptions;
        this.frequency = frequency;
        this.modifiedInstanceDates = modifiedInstanceDates;
        this.occurrenceCount = occurrenceCount;
        this.patternType = patternType;
        this.period = period;
        this.slidingFlag = slidingFlag;
        this.startDate = startDate;
        this.weekStartDay = weekStartDay;
        this.discriminator = discriminator;
        this.day = day;
        this.dayOfWeek = dayOfWeek;
        this.position = position;
    }
}

/**
 * Represents outlook contact information.             
 */
export class MapiContactDto extends MapiMessageItemBaseDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "electronicAddresses",
            baseName: "electronicAddresses",
            type: "any",
        },
        {
            name: "events",
            baseName: "events",
            type: "any",
        },
        {
            name: "nameInfo",
            baseName: "nameInfo",
            type: "any",
        },
        {
            name: "otherFields",
            baseName: "otherFields",
            type: "any",
        },
        {
            name: "personalInfo",
            baseName: "personalInfo",
            type: "any",
        },
        {
            name: "photo",
            baseName: "photo",
            type: "any",
        },
        {
            name: "physicalAddresses",
            baseName: "physicalAddresses",
            type: "any",
        },
        {
            name: "professionalInfo",
            baseName: "professionalInfo",
            type: "any",
        },
        {
            name: "telephones",
            baseName: "telephones",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiContactDto.attributeTypeMap);
    }

    /**
     * Specify properties for up to three different e-mail addresses and three different fax addresses.             
     */
    public electronicAddresses: any;
    
    /**
     * Specify events associated with a contact.             
     */
    public events: any;
    
    /**
     * The properties are used to specify the name of the person represented by the contact.             
     */
    public nameInfo: any;
    
    /**
     * Specify other fields of contact.             
     */
    public otherFields: any;
    
    /**
     * Specify other additional contact information.             
     */
    public personalInfo: any;
    
    /**
     * Contact photo.             
     */
    public photo: any;
    
    /**
     * Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address.             
     */
    public physicalAddresses: any;
    
    /**
     * Properties are used to store professional details for the person represented by the contact.             
     */
    public professionalInfo: any;
    
    /**
     * Specify telephone numbers for the contact.             
     */
    public telephones: any;
    

    /**
     * Represents outlook contact information.             
     * @param attachments Message item attachments.             
     * @param billing Billing information associated with an item.             
     * @param body Message text.             
     * @param bodyHtml Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
     * @param bodyRtf RTF formatted message text.             
     * @param bodyType The content type of message body. Enum, available values: PlainText, Html, Rtf
     * @param categories Contains keywords or categories for the message object.             
     * @param companies Contains the names of the companies that are associated with an item.             
     * @param itemId The item id, uses with a server.             
     * @param messageClass Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
     * @param mileage Contains the mileage information that is associated with an item.             
     * @param recipients Recipients of the message.             
     * @param sensitivity Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential
     * @param subject Subject of the message.             
     * @param subjectPrefix Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
     * @param properties List of MAPI properties             
     * @param discriminator 
     * @param electronicAddresses Specify properties for up to three different e-mail addresses and three different fax addresses.             
     * @param events Specify events associated with a contact.             
     * @param nameInfo The properties are used to specify the name of the person represented by the contact.             
     * @param otherFields Specify other fields of contact.             
     * @param personalInfo Specify other additional contact information.             
     * @param photo Contact photo.             
     * @param physicalAddresses Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address.             
     * @param professionalInfo Properties are used to store professional details for the person represented by the contact.             
     * @param telephones Specify telephone numbers for the contact.             
     */
    public constructor(
        attachments?: Array<MapiAttachmentDto>,
        billing?: string,
        body?: string,
        bodyHtml?: string,
        bodyRtf?: string,
        bodyType?: string,
        categories?: Array<string>,
        companies?: Array<string>,
        itemId?: string,
        messageClass?: string,
        mileage?: string,
        recipients?: Array<MapiRecipientDto>,
        sensitivity?: string,
        subject?: string,
        subjectPrefix?: string,
        properties?: Array<MapiPropertyDto>,
        discriminator?: string,
        electronicAddresses?: any,
        events?: any,
        nameInfo?: any,
        otherFields?: any,
        personalInfo?: any,
        photo?: any,
        physicalAddresses?: any,
        professionalInfo?: any,
        telephones?: any) {
        super();
        this.attachments = attachments;
        this.billing = billing;
        this.body = body;
        this.bodyHtml = bodyHtml;
        this.bodyRtf = bodyRtf;
        this.bodyType = bodyType;
        this.categories = categories;
        this.companies = companies;
        this.itemId = itemId;
        this.messageClass = messageClass;
        this.mileage = mileage;
        this.recipients = recipients;
        this.sensitivity = sensitivity;
        this.subject = subject;
        this.subjectPrefix = subjectPrefix;
        this.properties = properties;
        this.discriminator = discriminator;
        this.electronicAddresses = electronicAddresses;
        this.events = events;
        this.nameInfo = nameInfo;
        this.otherFields = otherFields;
        this.personalInfo = personalInfo;
        this.photo = photo;
        this.physicalAddresses = physicalAddresses;
        this.professionalInfo = professionalInfo;
        this.telephones = telephones;
    }
}

/**
 * Contains data and type of contact's photo.             
 */
export class MapiContactPhotoDto extends ContactPhoto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiContactPhotoDto.attributeTypeMap);
    }


    /**
     * Contains data and type of contact's photo.             
     * @param photoImageFormat MapiContact photo image format. Enum, available values: Undefined, Jpeg, Gif, Wmf, Bmp, Tiff
     * @param base64Data Photo serialized as base64 string.             
     * @param discriminator 
     */
    public constructor(
        photoImageFormat?: string,
        base64Data?: string,
        discriminator?: string) {
        super();
        this.photoImageFormat = photoImageFormat;
        this.base64Data = base64Data;
        this.discriminator = discriminator;
    }
}

/**
 * Mapi property with DateTime value             
 */
export class MapiDateTimePropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiDateTimePropertyDto.attributeTypeMap);
    }

    /**
     * Property value             
     */
    public value: Date;
    

    /**
     * Mapi property with DateTime value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Property value             
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: Date) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Mapi property with FileAsMapping value             
 */
export class MapiFileAsPropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiFileAsPropertyDto.attributeTypeMap);
    }

    /**
     * Defines how to construct what is displayed for a contact in the FileAs property. Enum, available values: None, LastCommaFirst, FirstSpaceLast, Company, LastCommaFirstCompany, CompanyLastFirst, LastFirst, LastFirstCompany, CompanyLastCommaFirst, LastFirstSuffix, LastSpaceFirstCompany, CompanyLastSpaceFirst, LastSpaceFirst, DisplayName, FirstName, LastFirstMiddleSuffix, LastName, Empty
     */
    public value: string;
    

    /**
     * Mapi property with FileAsMapping value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Defines how to construct what is displayed for a contact in the FileAs property. Enum, available values: None, LastCommaFirst, FirstSpaceLast, Company, LastCommaFirstCompany, CompanyLastFirst, LastFirst, LastFirstCompany, CompanyLastCommaFirst, LastFirstSuffix, LastSpaceFirstCompany, CompanyLastSpaceFirst, LastSpaceFirst, DisplayName, FirstName, LastFirstMiddleSuffix, LastName, Empty
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: string) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Mapi property with ImportanceChoicesType value             
 */
export class MapiImportancePropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiImportancePropertyDto.attributeTypeMap);
    }

    /**
     * Levels of importance for an item. Enum, available values: Low, Normal, High
     */
    public value: string;
    

    /**
     * Mapi property with ImportanceChoicesType value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Levels of importance for an item. Enum, available values: Low, Normal, High
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: string) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Mapi property with Integer value             
 */
export class MapiIntPropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiIntPropertyDto.attributeTypeMap);
    }

    /**
     * Property value             
     */
    public value: number;
    

    /**
     * Mapi property with Integer value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Property value             
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: number) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Known Mapi Property descriptor             
 */
export class MapiKnownPropertyDescriptor extends MapiPropertyDescriptor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiKnownPropertyDescriptor.attributeTypeMap);
    }

    /**
     * Known property name.  See all known properties here: https://apireference.aspose.com/email/net/aspose.email.mapi/knownpropertylist/fields/index  Possible values: Mileage, ObjectUri, GDataContactVersion, GDataPhotoVersion, AddressBookProviderArrayType, AddressBookProviderEmailList, AddressCountryCode, AgingDontAgeMe, AllAttendeesString, AllowExternalCheck, AnniversaryEventEntryId, AppointmentAuxiliaryFlags, AppointmentColor, AppointmentCounterProposal, AppointmentDuration, AppointmentEndDate, AppointmentEndTime, AppointmentEndWhole, AppointmentLastSequence, AppointmentMessageClass, AppointmentNotAllowPropose, AppointmentProposalNumber, AppointmentProposedDuration, AppointmentProposedEndWhole, AppointmentProposedStartWhole, AppointmentRecur, AppointmentReplyName, AppointmentReplyTime, AppointmentSequence, AppointmentSequenceTime, AppointmentStartDate, AppointmentStartTime, AppointmentStartWhole, AppointmentStateFlags, AppointmentSubType, AppointmentTimeZoneDefinitionEndDisplay, AppointmentTimeZoneDefinitionRecur, AppointmentTimeZoneDefinitionStartDisplay, AppointmentUnsendableRecipients, AppointmentUpdateTime, AttendeeCriticalChange, AutoFillLocation, AutoLog, AutoProcessState, AutoStartCheck, Billing, BirthdayEventEntryId, BirthdayLocal, BusinessCardCardPicture, BusinessCardDisplayDefinition, BusyStatus, CalendarType, Categories, CcAttendeesString, ChangeHighlight, Classification, ClassificationDescription, ClassificationGuid, ClassificationKeep, Classified, CleanGlobalObjectId, ClientIntent, ClipEnd, ClipStart, CollaborateDoc, CommonEnd, CommonStart, Companies, ConferencingCheck, ConferencingType, ContactCharacterSet, ContactItemData, ContactLinkedGlobalAddressListEntryId, ContactLinkEntry, ContactLinkGlobalAddressListLinkId, ContactLinkGlobalAddressListLinkState, ContactLinkLinkRejectHistory, ContactLinkName, ContactLinkSearchKey, ContactLinkSMTPAddressCache, Contacts, ContactUserField1, ContactUserField2, ContactUserField3, ContactUserField4, ConversationActionLastAppliedTime, ConversationActionMaxDeliveryTime, ConversationActionMoveFolderEid, ConversationActionMoveStoreEid, ConversationActionVersion, ConversationProcessed, CurrentVersion, CurrentVersionName, DayInterval, DayOfMonth, DelegateMail, Department, Directory, DistributionListChecksum, DistributionListMembers, DistributionListName, DistributionListOneOffMembers, DistributionListStream, Email1AddressType, Email1DisplayName, Email1EmailAddress, Email1OriginalDisplayName, Email1OriginalEntryId, Email2AddressType, Email2DisplayName, Email2EmailAddress, Email2OriginalDisplayName, Email2OriginalEntryId, Email3AddressType, Email3DisplayName, Email3EmailAddress, Email3OriginalDisplayName, Email3OriginalEntryId, EndRecurrenceDate, EndRecurrenceTime, ExceptionReplaceTime, Fax1AddressType, Fax1EmailAddress, Fax1OriginalDisplayName, Fax1OriginalEntryId, Fax2AddressType, Fax2EmailAddress, Fax2OriginalDisplayName, Fax2OriginalEntryId, Fax3AddressType, Fax3EmailAddress, Fax3OriginalDisplayName, Fax3OriginalEntryId, FExceptionalAttendees, FExceptionalBody, FileUnder, FileUnderId, FileUnderList, FInvited, FlagRequest, FlagString, ForwardInstance, ForwardNotificationRecipients, FOthersAppointment, FreeBusyLocation, GlobalObjectId, HasPicture, HomeAddress, HomeAddressCountryCode, Html, ICalendarDayOfWeekMask, InboundICalStream, InfoPathFormName, InstantMessagingAddress, IntendedBusyStatus, InternetAccountName, InternetAccountStamp, IsContactLinked, IsException, IsRecurring, IsSilent, LinkedTaskItems, Location, LogDocumentPosted, LogDocumentPrinted, LogDocumentRouted, LogDocumentSaved, LogDuration, LogEnd, LogFlags, LogStart, LogType, LogTypeDesc, MeetingType, MeetingWorkspaceUrl, MonthInterval, MonthOfYear, MonthOfYearMask, NetShowUrl, NoEndDateFlag, NonSendableBcc, NonSendableCc, NonSendableTo, NonSendBccTrackStatus, NonSendCcTrackStatus, NonSendToTrackStatus, NoteColor, NoteHeight, NoteWidth, NoteX, NoteY, Occurrences, OldLocation, OldRecurrenceType, OldWhenEndWhole, OldWhenStartWhole, OnlinePassword, OptionalAttendees, OrganizerAlias, OriginalStoreEntryId, OtherAddress, OtherAddressCountryCode, OwnerCriticalChange, OwnerName, PendingStateForSiteMailboxDocument, PercentComplete, PostalAddressId, PostRssChannel, PostRssChannelLink, PostRssItemGuid, PostRssItemHash, PostRssItemLink, PostRssItemXml, PostRssSubscription, Private, PromptSendUpdate, RecurrenceDuration, RecurrencePattern, RecurrenceType, Recurring, ReferenceEntryId, ReminderDelta, ReminderFileParameter, ReminderOverride, ReminderPlaySound, ReminderSet, ReminderSignalTime, ReminderTime, ReminderTimeDate, ReminderTimeTime, ReminderType, RemoteStatus, RequiredAttendees, ResourceAttendees, ResponseStatus, ServerProcessed, ServerProcessingActions, SharingAnonymity, SharingBindingEntryId, SharingBrowseUrl, SharingCapabilities, SharingConfigurationUrl, SharingDataRangeEnd, SharingDataRangeStart, SharingDetail, SharingExtensionXml, SharingFilter, SharingFlags, SharingFlavor, SharingFolderEntryId, SharingIndexEntryId, SharingInitiatorEntryId, SharingInitiatorName, SharingInitiatorSmtp, SharingInstanceGuid, SharingLastAutoSyncTime, SharingLastSyncTime, SharingLocalComment, SharingLocalLastModificationTime, SharingLocalName, SharingLocalPath, SharingLocalStoreUid, SharingLocalType, SharingLocalUid, SharingOriginalMessageEntryId, SharingParentBindingEntryId, SharingParticipants, SharingPermissions, SharingProviderExtension, SharingProviderGuid, SharingProviderName, SharingProviderUrl, SharingRangeEnd, SharingRangeStart, SharingReciprocation, SharingRemoteByteSize, SharingRemoteComment, SharingRemoteCrc, SharingRemoteLastModificationTime, SharingRemoteMessageCount, SharingRemoteName, SharingRemotePass, SharingRemotePath, SharingRemoteStoreUid, SharingRemoteType, SharingRemoteUid, SharingRemoteUser, SharingRemoteVersion, SharingResponseTime, SharingResponseType, SharingRoamLog, SharingStart, SharingStatus, SharingStop, SharingSyncFlags, SharingSyncInterval, SharingTimeToLive, SharingTimeToLiveAuto, SharingWorkingHoursDays, SharingWorkingHoursEnd, SharingWorkingHoursStart, SharingWorkingHoursTimeZone, SideEffects, SingleBodyICal, SmartNoAttach, SpamOriginalFolder, StartRecurrenceDate, StartRecurrenceTime, TaskAcceptanceState, TaskAccepted, TaskActualEffort, TaskAssigner, TaskAssigners, TaskComplete, TaskCustomFlags, TaskDateCompleted, TaskDeadOccurrence, TaskDueDate, TaskEstimatedEffort, TaskFCreator, TaskFFixOffline, TaskFRecurring, TaskGlobalId, TaskHistory, TaskLastDelegate, TaskLastUpdate, TaskLastUser, TaskMode, TaskMultipleRecipients, TaskNoCompute, TaskOrdinal, TaskOwner, TaskOwnership, TaskRecurrence, TaskResetReminder, TaskRole, TaskStartDate, TaskState, TaskStatus, TaskStatusOnComplete, TaskUpdates, TaskVersion, TeamTask, TimeZone, TimeZoneDescription, TimeZoneStruct, ToAttendeesString, ToDoOrdinalDate, ToDoSubOrdinal, ToDoTitle, UseTnef, ValidFlagStringProof, VerbResponse, VerbStream, WeddingAnniversaryLocal, WeekInterval, Where, WorkAddress, WorkAddressCity, WorkAddressCountry, WorkAddressCountryCode, WorkAddressPostalCode, WorkAddressPostOfficeBox, WorkAddressState, WorkAddressStreet, YearInterval, YomiCompanyName, YomiFirstName, YomiLastName, AcceptLanguage, ApplicationName, AttachmentMacContentType, AttachmentMacInfo, AudioNotes, Author, AutomaticSpeechRecognitionData, ByteCount, CalendarAttendeeRole, CalendarBusystatus, CalendarContact, CalendarContactUrl, CalendarCreated, CalendarDescriptionUrl, CalendarDuration, CalendarExceptionDate, CalendarExceptionRule, CalendarGeoLatitude, CalendarGeoLongitude, CalendarInstanceType, CalendarIsOrganizer, CalendarLastModified, CalendarLocationUrl, CalendarMeetingStatus, CalendarMethod, CalendarProductId, CalendarRecurrenceIdRange, CalendarReminderOffset, CalendarResources, CalendarRsvp, CalendarSequence, CalendarTimeZone, CalendarTimeZoneId, CalendarTransparent, CalendarUid, CalendarVersion, Category, CharacterCount, Comments, Company, ContentBase, ContentClass, ContentType, CreateDateTimeReadOnly, CrossReference, DavId, DavIsCollection, DavIsStructuredDocument, DavParentName, DavUid, DocumentParts, EditTime, ExchangeIntendedBusyStatus, ExchangeJunkEmailMoveStamp, ExchangeModifyExceptionStructure, ExchangeNoModifyExceptions, ExchangePatternEnd, ExchangePatternStart, ExchangeReminderInterval, ExchDatabaseSchema, ExchDataExpectedContentClass, ExchDataSchemaCollectionReference, ExtractedAddresses, ExtractedContacts, ExtractedEmails, ExtractedMeetings, ExtractedPhones, ExtractedTasks, ExtractedUrls, From, HeadingPairs, HiddenCount, HttpmailCalendar, HttpmailHtmlDescription, HttpmailSendMessage, ICalendarRecurrenceDate, ICalendarRecurrenceRule, InternetSubject, Keywords, LastAuthor, LastPrinted, LastSaveDateTime, LineCount, LinksDirty, LocationUrl, Manager, MultimediaClipCount, NoteCount, OMSAccountGuid, OMSMobileModel, OMSScheduleTime, OMSServiceType, OMSSourceType, PageCount, ParagraphCount, PhishingStamp, PresentationFormat, QuarantineOriginalSender, RevisionNumber, RightsManagementLicense, Scale, Security, SlideCount, Subject, Template, Thumbnail, Title, WordCount, XCallId, XFaxNumberOfPages, XRequireProtectedPlayOnPhone, XSenderTelephoneNumber, XSharingBrowseUrl, XSharingCapabilities, XSharingConfigUrl, XSharingExendedCaps, XSharingFlavor, XSharingInstanceGuid, XSharingLocalType, XSharingProviderGuid, XSharingProviderName, XSharingProviderUrl, XSharingRemoteName, XSharingRemotePath, XSharingRemoteStoreUid, XSharingRemoteType, XSharingRemoteUid, XVoiceMessageAttachmentOrder, XVoiceMessageDuration, XVoiceMessageSenderName, Access, AccessControlListData, AccessLevel, Account, AdditionalRenEntryIds, AdditionalRenEntryIdsEx, AddressBookAuthorizedSenders, AddressBookContainerId, AddressBookDeliveryContentLength, AddressBookDisplayNamePrintable, AddressBookDisplayTypeExtended, AddressBookDistributionListExternalMemberCount, AddressBookDistributionListMemberCount, AddressBookDistributionListMemberSubmitAccepted, AddressBookDistributionListMemberSubmitRejected, AddressBookDistributionListRejectMessagesFromDLMembers, AddressBookEntryId, AddressBookExtensionAttribute1, AddressBookExtensionAttribute10, AddressBookExtensionAttribute11, AddressBookExtensionAttribute12, AddressBookExtensionAttribute13, AddressBookExtensionAttribute14, AddressBookExtensionAttribute15, AddressBookExtensionAttribute2, AddressBookExtensionAttribute3, AddressBookExtensionAttribute4, AddressBookExtensionAttribute5, AddressBookExtensionAttribute6, AddressBookExtensionAttribute7, AddressBookExtensionAttribute8, AddressBookExtensionAttribute9, AddressBookFolderPathname, AddressBookHierarchicalChildDepartments, AddressBookHierarchicalDepartmentMembers, AddressBookHierarchicalIsHierarchicalGroup, AddressBookHierarchicalParentDepartment, AddressBookHierarchicalRootDepartment, AddressBookHierarchicalShowInDepartments, AddressBookHomeMessageDatabase, AddressBookIsMaster, AddressBookIsMemberOfDistributionList, AddressBookManageDistributionList, AddressBookManager, AddressBookManagerDistinguishedName, AddressBookMember, AddressBookMessageId, AddressBookModerationEnabled, AddressBookNetworkAddress, AddressBookObjectDistinguishedName, AddressBookObjectGuid, AddressBookOrganizationalUnitRootDistinguishedName, AddressBookOwner, AddressBookOwnerBackLink, AddressBookParentEntryId, AddressBookPhoneticCompanyName, AddressBookPhoneticDepartmentName, AddressBookPhoneticDisplayName, AddressBookPhoneticGivenName, AddressBookPhoneticSurname, AddressBookProxyAddresses, AddressBookPublicDelegates, AddressBookReports, AddressBookRoomCapacity, AddressBookRoomContainers, AddressBookRoomDescription, AddressBookSenderHintTranslations, AddressBookSeniorityIndex, AddressBookTargetAddress, AddressBookUnauthorizedSenders, AddressBookX509Certificate, AddressType, AlternateRecipientAllowed, Anr, ArchiveDate, ArchivePeriod, ArchiveTag, Assistant, AssistantTelephoneNumber, Associated, AttachAdditionalInformation, AttachContentBase, AttachContentId, AttachContentLocation, AttachDataBinary, AttachDataObject, AttachEncoding, AttachExtension, AttachFilename, AttachFlags, AttachLongFilename, AttachLongPathname, AttachmentContactPhoto, AttachmentFlags, AttachmentHidden, AttachmentLinkId, AttachMethod, AttachMimeTag, AttachNumber, AttachPathname, AttachPayloadClass, AttachPayloadProviderGuidString, AttachRendering, AttachSize, AttachTag, AttachTransportName, AttributeHidden, AttributeReadOnly, AutoForwardComment, AutoForwarded, AutoResponseSuppress, Birthday, BlockStatus, Body, BodyContentId, BodyContentLocation, BodyHtml, Business2TelephoneNumber, Business2TelephoneNumbers, BusinessFaxNumber, BusinessHomePage, BusinessTelephoneNumber, CallbackTelephoneNumber, CallId, CarTelephoneNumber, CdoRecurrenceid, ChangeKey, ChangeNumber, ChildrensNames, ClientActions, ClientSubmitTime, CodePageId, Comment, CompanyMainTelephoneNumber, CompanyName, ComputerNetworkName, ConflictEntryId, ContainerClass, ContainerContents, ContainerFlags, ContainerHierarchy, ContentCount, ContentFilterSpamConfidenceLevel, ContentUnreadCount, ConversationId, ConversationIndex, ConversationIndexTracking, ConversationTopic, Country, CreationTime, CreatorEntryId, CreatorName, CustomerId, DamBackPatched, DamOriginalEntryId, DefaultPostMessageClass, DeferredActionMessageOriginalEntryId, DeferredDeliveryTime, DeferredSendNumber, DeferredSendTime, DeferredSendUnits, DelegatedByRule, DelegateFlags, DeleteAfterSubmit, DeletedCountTotal, DeletedOn, DeliverTime, DepartmentName, Depth, DisplayBcc, DisplayCc, DisplayName, DisplayNamePrefix, DisplayTo, DisplayType, DisplayTypeEx, EmailAddress, EndDate, EntryId, ExceptionEndTime, TagExceptionReplaceTime, ExceptionStartTime, ExchangeNTSecurityDescriptor, ExpiryNumber, ExpiryTime, ExpiryUnits, ExtendedFolderFlags, ExtendedRuleMessageActions, ExtendedRuleMessageCondition, ExtendedRuleSizeLimit, FaxNumberOfPages, FlagCompleteTime, FlagStatus, FlatUrlName, FolderAssociatedContents, FolderId, FolderFlags, FolderType, FollowupIcon, FreeBusyCountMonths, FreeBusyEntryIds, FreeBusyMessageEmailAddress, FreeBusyPublishEnd, FreeBusyPublishStart, FreeBusyRangeTimestamp, FtpSite, GatewayNeedsToRefresh, Gender, Generation, GivenName, GovernmentIdNumber, HasAttachments, HasDeferredActionMessages, HasNamedProperties, HasRules, HierarchyChangeNumber, HierRev, Hobbies, Home2TelephoneNumber, Home2TelephoneNumbers, HomeAddressCity, HomeAddressCountry, HomeAddressPostalCode, HomeAddressPostOfficeBox, HomeAddressStateOrProvince, HomeAddressStreet, HomeFaxNumber, HomeTelephoneNumber, TagHtml, ICalendarEndTime, ICalendarReminderNextTime, ICalendarStartTime, IconIndex, Importance, InConflict, InitialDetailsPane, Initials, InReplyToId, InstanceKey, InstanceNum, InstID, InternetCodepage, InternetMailOverrideFormat, InternetMessageId, InternetReferences, IpmAppointmentEntryId, IpmContactEntryId, IpmDraftsEntryId, IpmJournalEntryId, IpmNoteEntryId, IpmTaskEntryId, IsdnNumber, JunkAddRecipientsToSafeSendersList, JunkIncludeContacts, JunkPermanentlyDelete, JunkPhishingEnableLinks, JunkThreshold, Keyword, Language, LastModificationTime, LastModifierEntryId, LastModifierName, LastVerbExecuted, LastVerbExecutionTime, ListHelp, ListSubscribe, ListUnsubscribe, LocalCommitTime, LocalCommitTimeMax, LocaleId, Locality, TagLocation, MailboxOwnerEntryId, MailboxOwnerName, ManagerName, MappingSignature, MaximumSubmitMessageSize, MemberId, MemberName, MemberRights, MessageAttachments, MessageCcMe, MessageClass, MessageCodepage, MessageDeliveryTime, MessageEditorFormat, MessageFlags, MessageHandlingSystemCommonName, MessageLocaleId, MessageRecipientMe, MessageRecipients, MessageSize, MessageSizeExtended, MessageStatus, MessageSubmissionId, MessageToMe, Mid, MiddleName, MimeSkeleton, MobileTelephoneNumber, NativeBody, NextSendAcct, Nickname, NonDeliveryReportDiagCode, NonDeliveryReportReasonCode, NonDeliveryReportStatusCode, NonReceiptNotificationRequested, NormalizedSubject, ObjectType, OfficeLocation, OfflineAddressBookContainerGuid, OfflineAddressBookDistinguishedName, OfflineAddressBookMessageClass, OfflineAddressBookName, OfflineAddressBookSequence, OfflineAddressBookTruncatedProperties, OrdinalMost, OrganizationalIdNumber, OriginalAuthorEntryId, OriginalAuthorName, OriginalDeliveryTime, OriginalDisplayBcc, OriginalDisplayCc, OriginalDisplayTo, OriginalEntryId, OriginalMessageClass, OriginalMessageId, OriginalSenderAddressType, OriginalSenderEmailAddress, OriginalSenderEntryId, OriginalSenderName, OriginalSenderSearchKey, OriginalSensitivity, OriginalSentRepresentingAddressType, OriginalSentRepresentingEmailAddress, OriginalSentRepresentingEntryId, OriginalSentRepresentingName, OriginalSentRepresentingSearchKey, OriginalSubject, OriginalSubmitTime, OriginatorDeliveryReportRequested, OriginatorNonDeliveryReportRequested, OscSyncEnabled, OtherAddressCity, OtherAddressCountry, OtherAddressPostalCode, OtherAddressPostOfficeBox, OtherAddressStateOrProvince, OtherAddressStreet, OtherTelephoneNumber, OutOfOfficeState, OwnerAppointmentId, PagerTelephoneNumber, ParentEntryId, ParentFolderId, ParentKey, ParentSourceKey, PersonalHomePage, PolicyTag, PostalAddress, PostalCode, PostOfficeBox, PredecessorChangeList, PrimaryFaxNumber, PrimarySendAccount, PrimaryTelephoneNumber, Priority, Processed, Profession, ProhibitReceiveQuota, ProhibitSendQuota, PurportedSenderDomain, RadioTelephoneNumber, Read, ReadReceiptAddressType, ReadReceiptEmailAddress, ReadReceiptEntryId, ReadReceiptName, ReadReceiptRequested, ReadReceiptSearchKey, ReadReceiptSmtpAddress, ReceiptTime, ReceivedByAddressType, ReceivedByEmailAddress, ReceivedByEntryId, ReceivedByName, ReceivedBySearchKey, ReceivedBySmtpAddress, ReceivedRepresentingAddressType, ReceivedRepresentingEmailAddress, ReceivedRepresentingEntryId, ReceivedRepresentingName, ReceivedRepresentingSearchKey, ReceivedRepresentingSmtpAddress, RecipientDisplayName, RecipientEntryId, RecipientFlags, RecipientOrder, RecipientProposed, RecipientProposedEndTime, RecipientProposedStartTime, RecipientReassignmentProhibited, RecipientTrackStatus, RecipientTrackStatusTime, RecipientType, RecordKey, ReferredByName, RemindersOnlineEntryId, RemoteMessageTransferAgent, RenderingPosition, ReplyRecipientEntries, ReplyRecipientNames, ReplyRequested, ReplyTemplateId, ReplyTime, ReportDisposition, ReportDispositionMode, ReportEntryId, ReportingMessageTransferAgent, ReportName, ReportSearchKey, ReportTag, ReportText, ReportTime, ResolveMethod, ResponseRequested, Responsibility, RetentionDate, RetentionFlags, RetentionPeriod, Rights, RoamingDatatypes, RoamingDictionary, RoamingXmlStream, Rowid, RowType, RtfCompressed, RtfInSync, RuleActionNumber, RuleActions, RuleActionType, RuleCondition, RuleError, RuleFolderEntryId, RuleId, RuleIds, RuleLevel, RuleMessageLevel, RuleMessageName, RuleMessageProvider, RuleMessageProviderData, RuleMessageSequence, RuleMessageState, RuleMessageUserFlags, RuleName, RuleProvider, RuleProviderData, RuleSequence, RuleState, RuleUserFlags, RwRulesStream, ScheduleInfoAppointmentTombstone, ScheduleInfoAutoAcceptAppointments, ScheduleInfoDelegateEntryIds, ScheduleInfoDelegateNames, ScheduleInfoDelegateNamesW, ScheduleInfoDelegatorWantsCopy, ScheduleInfoDelegatorWantsInfo, ScheduleInfoDisallowOverlappingAppts, ScheduleInfoDisallowRecurringAppts, ScheduleInfoDontMailDelegates, ScheduleInfoFreeBusy, ScheduleInfoFreeBusyAway, ScheduleInfoFreeBusyBusy, ScheduleInfoFreeBusyMerged, ScheduleInfoFreeBusyTentative, ScheduleInfoMonthsAway, ScheduleInfoMonthsBusy, ScheduleInfoMonthsMerged, ScheduleInfoMonthsTentative, ScheduleInfoResourceType, SchedulePlusFreeBusyEntryId, ScriptData, SearchFolderDefinition, SearchFolderEfpFlags, SearchFolderExpiration, SearchFolderId, SearchFolderLastUsed, SearchFolderRecreateInfo, SearchFolderStorageType, SearchFolderTag, SearchFolderTemplateId, SearchKey, SecurityDescriptorAsXml, Selectable, SenderAddressType, SenderEmailAddress, SenderEntryId, SenderIdStatus, SenderName, SenderSearchKey, SenderSmtpAddress, SenderTelephoneNumber, SendInternetEncoding, SendRichInfo, Sensitivity, SentMailSvrEID, SentRepresentingAddressType, SentRepresentingEmailAddress, SentRepresentingEntryId, SentRepresentingFlags, SentRepresentingName, SentRepresentingSearchKey, SentRepresentingSmtpAddress, SmtpAddress, SortLocaleId, SourceKey, SpokenName, SpouseName, StartDate, StartDateEtc, StateOrProvince, StoreEntryId, StoreState, StoreSupportMask, StreetAddress, Subfolders, TagSubject, SubjectPrefix, SupplementaryInfo, Surname, SwappedToDoData, SwappedToDoStore, TargetEntryId, TelecommunicationsDeviceForDeafTelephoneNumber, TelexNumber, TemplateData, Templateid, TextAttachmentCharset, ThumbnailPhoto, TagTitle, TnefCorrelationKey, ToDoItemFlags, TransmittableDisplayName, TransportMessageHeaders, TrustSender, UserCertificate, UserEntryId, UserX509Certificate, ViewDescriptorBinary, ViewDescriptorName, ViewDescriptorStrings, ViewDescriptorVersion, VoiceMessageAttachmentOrder, VoiceMessageDuration, VoiceMessageSenderName, WeddingAnniversary, WlinkAddressBookEID, WlinkAddressBookStoreEID, WlinkCalendarColor, WlinkClientID, WlinkEntryId, WlinkFlags, WlinkFolderType, WlinkGroupClsid, WlinkGroupHeaderID, WlinkGroupName, WlinkOrdinal, WlinkRecordKey, WlinkROGroupType, WlinkSaveStamp, WlinkSection, WlinkStoreEntryId, WlinkType, Abstract, ActiveUserEntryid, AddrbookForLocalSiteEntryid, AddressBookDisplayName, ArrivalTime, AssocMessageSize, AssocMessageSizeExtended, AssocMsgWAttachCount, AttachOnAssocMsgCount, AttachOnNormalMsgCount, AutoAddNewSubs, BilateralInfo, CachedColumnCount, CategCount, ChangeAdvisor, ChangeNotificationGuid, Collector, ContactCount, ContentSearchKey, ContentsSynchronizer, DeletedAssocMessageSizeExtended, DeletedAssocMsgCount, DeletedFolderCount, DeletedMessageSizeExtended, DeletedMsgCount, DeletedNormalMessageSizeExtended, DesignInProgress, DisableFullFidelity, DisableWinsock, DlReportFlags, EformsForLocaleEntryid, EformsLocaleId, EformsRegistryEntryid, EmsAbAccessCategory, EmsAbActivationSchedule, EmsAbActivationStyle, EmsAbAddressEntryDisplayTable, EmsAbAddressEntryDisplayTableMsdos, EmsAbAddressSyntax, EmsAbAddressType, EmsAbAdmd, EmsAbAdminDescription, EmsAbAdminDisplayName, EmsAbAdminExtensionDll, EmsAbAliasedObjectName, EmsAbAliasedObjectNameO, EmsAbAltRecipient, EmsAbAltRecipientBl, EmsAbAltRecipientBlO, EmsAbAltRecipientO, EmsAbAncestorId, EmsAbAnonymousAccess, EmsAbAnonymousAccount, EmsAbAssocNtAccount, EmsAbAssocProtocolCfgNntp, EmsAbAssocProtocolCfgNntpO, EmsAbAssocRemoteDxa, EmsAbAssocRemoteDxaO, EmsAbAssociationLifetime, EmsAbAttributeCertificate, EmsAbAuthOrigBl, EmsAbAuthOrigBlO, EmsAbAuthenticationToUse, EmsAbAuthorityRevocationList, EmsAbAuthorizedDomain, EmsAbAuthorizedPassword, EmsAbAuthorizedPasswordConfirm, EmsAbAuthorizedUser, EmsAbAutoreply, EmsAbAutoreplyMessage, EmsAbAutoreplySubject, EmsAbAvailableAuthorizationPackages, EmsAbAvailableDistributions, EmsAbBridgeheadServers, EmsAbBridgeheadServersO, EmsAbBusinessCategory, EmsAbBusinessRoles, EmsAbCaCertificate, EmsAbCanCreatePf, EmsAbCanCreatePfBl, EmsAbCanCreatePfBlO, EmsAbCanCreatePfDl, EmsAbCanCreatePfDlBl, EmsAbCanCreatePfDlBlO, EmsAbCanCreatePfDlO, EmsAbCanCreatePfO, EmsAbCanNotCreatePf, EmsAbCanNotCreatePfBl, EmsAbCanNotCreatePfBlO, EmsAbCanNotCreatePfDl, EmsAbCanNotCreatePfDlBl, EmsAbCanNotCreatePfDlBlO, EmsAbCanNotCreatePfDlO, EmsAbCanNotCreatePfO, EmsAbCanPreserveDns, EmsAbCertificateChainV3, EmsAbCertificateRevocationList, EmsAbCertificateRevocationListV1, EmsAbCertificateRevocationListV3, EmsAbCharacterSet, EmsAbCharacterSetList, EmsAbChildRdns, EmsAbClientAccessEnabled, EmsAbClockAlertOffset, EmsAbClockAlertRepair, EmsAbClockWarningOffset, EmsAbClockWarningRepair, EmsAbCompromisedKeyList, EmsAbComputerName, EmsAbConnectedDomains, EmsAbConnectionListFilter, EmsAbConnectionListFilterType, EmsAbConnectionType, EmsAbContainerInfo, EmsAbContentType, EmsAbControlMsgFolderId, EmsAbControlMsgRules, EmsAbCost, EmsAbCountryName, EmsAbCrossCertificateCrl, EmsAbCrossCertificatePair, EmsAbDefaultMessageFormat, EmsAbDelegateUser, EmsAbDelivEits, EmsAbDelivExtContTypes, EmsAbDeliverAndRedirect, EmsAbDeliveryMechanism, EmsAbDeltaRevocationList, EmsAbDescription, EmsAbDestinationIndicator, EmsAbDiagnosticRegKey, EmsAbDisableDeferredCommit, EmsAbDisabledGatewayProxy, EmsAbDisplayNameOverride, EmsAbDisplayNameSuffix, EmsAbDlMemRejectPermsBl, EmsAbDlMemRejectPermsBlO, EmsAbDlMemberRule, EmsAbDmdName, EmsAbDoOabVersion, EmsAbDomainDefAltRecip, EmsAbDomainDefAltRecipO, EmsAbDomainName, EmsAbDsaSignature, EmsAbDxaAdminCopy, EmsAbDxaAdminForward, EmsAbDxaAdminUpdate, EmsAbDxaAppendReqcn, EmsAbDxaConfContainerList, EmsAbDxaConfContainerListO, EmsAbDxaConfReqTime, EmsAbDxaConfSeq, EmsAbDxaConfSeqUsn, EmsAbDxaExchangeOptions, EmsAbDxaExportNow, EmsAbDxaFlags, EmsAbDxaImpSeq, EmsAbDxaImpSeqTime, EmsAbDxaImpSeqUsn, EmsAbDxaImportNow, EmsAbDxaInTemplateMap, EmsAbDxaLocalAdmin, EmsAbDxaLocalAdminO, EmsAbDxaLoggingLevel, EmsAbDxaNativeAddressType, EmsAbDxaOutTemplateMap, EmsAbDxaPassword, EmsAbDxaPrevExchangeOptions, EmsAbDxaPrevExportNativeOnly, EmsAbDxaPrevInExchangeSensitivity, EmsAbDxaPrevRemoteEntries, EmsAbDxaPrevRemoteEntriesO, EmsAbDxaPrevReplicationSensitivity, EmsAbDxaPrevTemplateOptions, EmsAbDxaPrevTypes, EmsAbDxaRecipientCp, EmsAbDxaRemoteClient, EmsAbDxaRemoteClientO, EmsAbDxaReqSeq, EmsAbDxaReqSeqTime, EmsAbDxaReqSeqUsn, EmsAbDxaReqname, EmsAbDxaSvrSeq, EmsAbDxaSvrSeqTime, EmsAbDxaSvrSeqUsn, EmsAbDxaTask, EmsAbDxaTemplateOptions, EmsAbDxaTemplateTimestamp, EmsAbDxaTypes, EmsAbDxaUnconfContainerList, EmsAbDxaUnconfContainerListO, EmsAbEmployeeNumber, EmsAbEmployeeType, EmsAbEnableCompatibility, EmsAbEnabled, EmsAbEnabledAuthorizationPackages, EmsAbEnabledProtocolCfg, EmsAbEnabledProtocols, EmsAbEncapsulationMethod, EmsAbEncrypt, EmsAbEncryptAlgListNa, EmsAbEncryptAlgListOther, EmsAbEncryptAlgSelectedNa, EmsAbEncryptAlgSelectedOther, EmsAbExpandDlsLocally, EmsAbExpirationTime, EmsAbExportContainers, EmsAbExportContainersO, EmsAbExportCustomRecipients, EmsAbExtendedCharsAllowed, EmsAbExtensionData, EmsAbExtensionName, EmsAbExtensionNameInherited, EmsAbFacsimileTelephoneNumber, EmsAbFileVersion, EmsAbFilterLocalAddresses, EmsAbFoldersContainer, EmsAbFoldersContainerO, EmsAbFormData, EmsAbForwardingAddress, EmsAbGarbageCollPeriod, EmsAbGatewayLocalCred, EmsAbGatewayLocalDesig, EmsAbGatewayProxy, EmsAbGatewayRoutingTree, EmsAbGenerationQualifier, EmsAbGroupByAttr1, EmsAbGroupByAttr2, EmsAbGroupByAttr3, EmsAbGroupByAttr4, EmsAbGroupByAttrValueDn, EmsAbGroupByAttrValueDnO, EmsAbGroupByAttrValueStr, EmsAbGwartLastModified, EmsAbHasFullReplicaNcs, EmsAbHasFullReplicaNcsO, EmsAbHasMasterNcs, EmsAbHasMasterNcsO, EmsAbHelpData16, EmsAbHelpData32, EmsAbHelpFileName, EmsAbHeuristics, EmsAbHideDlMembership, EmsAbHideFromAddressBook, EmsAbHierarchyPath, EmsAbHomeMdbBl, EmsAbHomeMdbBlO, EmsAbHomeMta, EmsAbHomeMtaO, EmsAbHomePublicServer, EmsAbHomePublicServerO, EmsAbHouseIdentifier, EmsAbHttpPubAbAttributes, EmsAbHttpPubGal, EmsAbHttpPubGalLimit, EmsAbHttpPubPf, EmsAbHttpServers, EmsAbImportContainer, EmsAbImportContainerO, EmsAbImportSensitivity, EmsAbImportedFrom, EmsAbInboundAcceptAll, EmsAbInboundDn, EmsAbInboundDnO, EmsAbInboundHost, EmsAbInboundNewsfeed, EmsAbInboundNewsfeedType, EmsAbInboundSites, EmsAbInboundSitesO, EmsAbIncomingMsgSizeLimit, EmsAbIncomingPassword, EmsAbInsadmin, EmsAbInsadminO, EmsAbInstanceType, EmsAbInternationalIsdnNumber, EmsAbInvocationId, EmsAbIsDeleted, EmsAbIsSingleValued, EmsAbKccStatus, EmsAbKmServer, EmsAbKmServerO, EmsAbKnowledgeInformation, EmsAbLabeleduri, EmsAbLanguage, EmsAbLanguageIso639, EmsAbLdapDisplayName, EmsAbLdapSearchCfg, EmsAbLineWrap, EmsAbLinkId, EmsAbListPublicFolders, EmsAbLocalBridgeHead, EmsAbLocalBridgeHeadAddress, EmsAbLocalInitialTurn, EmsAbLocalScope, EmsAbLocalScopeO, EmsAbLogFilename, EmsAbLogRolloverInterval, EmsAbMailDrop, EmsAbMaintainAutoreplyHistory, EmsAbMapiDisplayType, EmsAbMapiId, EmsAbMaximumObjectId, EmsAbMdbBackoffInterval, EmsAbMdbMsgTimeOutPeriod, EmsAbMdbOverQuotaLimit, EmsAbMdbStorageQuota, EmsAbMdbUnreadLimit, EmsAbMdbUseDefaults, EmsAbMessageTrackingEnabled, EmsAbMimeTypes, EmsAbModerated, EmsAbModerator, EmsAbMonitorClock, EmsAbMonitorServers, EmsAbMonitorServices, EmsAbMonitoredConfigurations, EmsAbMonitoredConfigurationsO, EmsAbMonitoredServers, EmsAbMonitoredServersO, EmsAbMonitoredServices, EmsAbMonitoringAlertDelay, EmsAbMonitoringAlertUnits, EmsAbMonitoringAvailabilityStyle, EmsAbMonitoringAvailabilityWindow, EmsAbMonitoringCachedViaMail, EmsAbMonitoringCachedViaMailO, EmsAbMonitoringCachedViaRpc, EmsAbMonitoringCachedViaRpcO, EmsAbMonitoringEscalationProcedure, EmsAbMonitoringHotsitePollInterval, EmsAbMonitoringHotsitePollUnits, EmsAbMonitoringMailUpdateInterval, EmsAbMonitoringMailUpdateUnits, EmsAbMonitoringNormalPollInterval, EmsAbMonitoringNormalPollUnits, EmsAbMonitoringRecipients, EmsAbMonitoringRecipientsNdr, EmsAbMonitoringRecipientsNdrO, EmsAbMonitoringRecipientsO, EmsAbMonitoringRpcUpdateInterval, EmsAbMonitoringRpcUpdateUnits, EmsAbMonitoringWarningDelay, EmsAbMonitoringWarningUnits, EmsAbMtaLocalCred, EmsAbMtaLocalDesig, EmsAbNAddress, EmsAbNAddressType, EmsAbNewsfeedType, EmsAbNewsgroup, EmsAbNewsgroupList, EmsAbNntpCharacterSet, EmsAbNntpContentFormat, EmsAbNntpDistributions, EmsAbNntpDistributionsFlag, EmsAbNntpNewsfeeds, EmsAbNntpNewsfeedsO, EmsAbNtMachineName, EmsAbNtSecurityDescriptor, EmsAbNumOfOpenRetries, EmsAbNumOfTransferRetries, EmsAbObjViewContainers, EmsAbObjViewContainersO, EmsAbObjectClassCategory, EmsAbObjectOid, EmsAbObjectVersion, EmsAbOffLineAbContainers, EmsAbOffLineAbContainersO, EmsAbOffLineAbSchedule, EmsAbOffLineAbServer, EmsAbOffLineAbServerO, EmsAbOffLineAbStyle, EmsAbOidType, EmsAbOmObjectClass, EmsAbOmSyntax, EmsAbOofReplyToOriginator, EmsAbOpenRetryInterval, EmsAbOrganizationName, EmsAbOrganizationalUnitName, EmsAbOriginalDisplayTable, EmsAbOriginalDisplayTableMsdos, EmsAbOtherRecips, EmsAbOutboundHost, EmsAbOutboundHostType, EmsAbOutboundNewsfeed, EmsAbOutboundSites, EmsAbOutboundSitesO, EmsAbOutgoingMsgSizeLimit, EmsAbOverrideNntpContentFormat, EmsAbOwaServer, EmsAbPSelector, EmsAbPSelectorInbound, EmsAbPerMsgDialogDisplayTable, EmsAbPerRecipDialogDisplayTable, EmsAbPeriodRepSyncTimes, EmsAbPeriodReplStagger, EmsAbPersonalTitle, EmsAbPfContacts, EmsAbPfContactsO, EmsAbPopCharacterSet, EmsAbPopContentFormat, EmsAbPortNumber, EmsAbPostalAddress, EmsAbPreferredDeliveryMethod, EmsAbPreserveInternetContent, EmsAbPrmd, EmsAbPromoExpiration, EmsAbProtocolSettings, EmsAbProxyGenerationEnabled, EmsAbProxyGeneratorDll, EmsAbPublicDelegatesBl, EmsAbPublicDelegatesBlO, EmsAbQuotaNotificationSchedule, EmsAbQuotaNotificationStyle, EmsAbRangeLower, EmsAbRangeUpper, EmsAbRasAccount, EmsAbRasCallbackNumber, EmsAbRasPassword, EmsAbRasPhoneNumber, EmsAbRasPhonebookEntryName, EmsAbRasRemoteSrvrName, EmsAbReferralList, EmsAbRegisteredAddress, EmsAbRemoteBridgeHead, EmsAbRemoteBridgeHeadAddress, EmsAbRemoteOutBhServer, EmsAbRemoteOutBhServerO, EmsAbRemoteSite, EmsAbRemoteSiteO, EmsAbReplicatedObjectVersion, EmsAbReplicationMailMsgSize, EmsAbReplicationSensitivity, EmsAbReplicationStagger, EmsAbReportToOriginator, EmsAbReportToOwner, EmsAbReqSeq, EmsAbRequireSsl, EmsAbResponsibleLocalDxa, EmsAbResponsibleLocalDxaO, EmsAbReturnExactMsgSize, EmsAbRidServer, EmsAbRidServerO, EmsAbRoleOccupant, EmsAbRoleOccupantO, EmsAbRootNewsgroupsFolderId, EmsAbRoutingList, EmsAbRtsCheckpointSize, EmsAbRtsRecoveryTimeout, EmsAbRtsWindowSize, EmsAbRunsOn, EmsAbRunsOnO, EmsAbSSelector, EmsAbSSelectorInbound, EmsAbSchemaFlags, EmsAbSchemaVersion, EmsAbSearchFlags, EmsAbSearchGuide, EmsAbSecurityPolicy, EmsAbSecurityProtocol, EmsAbSeeAlso, EmsAbSeeAlsoO, EmsAbSendEmailMessage, EmsAbSendTnef, EmsAbSerialNumber, EmsAbServer, EmsAbServiceActionFirst, EmsAbServiceActionOther, EmsAbServiceActionSecond, EmsAbServiceRestartDelay, EmsAbServiceRestartMessage, EmsAbSessionDisconnectTimer, EmsAbSiteAffinity, EmsAbSiteFolderGuid, EmsAbSiteFolderServer, EmsAbSiteFolderServerO, EmsAbSiteProxySpace, EmsAbSmimeAlgListNa, EmsAbSmimeAlgListOther, EmsAbSmimeAlgSelectedNa, EmsAbSmimeAlgSelectedOther, EmsAbSpaceLastComputed, EmsAbStreetAddress, EmsAbSubRefs, EmsAbSubRefsO, EmsAbSubSite, EmsAbSubmissionContLength, EmsAbSupportSmimeSignatures, EmsAbSupportedAlgorithms, EmsAbSupportedApplicationContext, EmsAbSupportingStack, EmsAbSupportingStackBl, EmsAbSupportingStackBlO, EmsAbSupportingStackO, EmsAbTSelector, EmsAbTSelectorInbound, EmsAbTargetMtas, EmsAbTelephoneNumber, EmsAbTelephonePersonalPager, EmsAbTeletexTerminalIdentifier, EmsAbTempAssocThreshold, EmsAbTombstoneLifetime, EmsAbTrackingLogPathName, EmsAbTransRetryMins, EmsAbTransTimeoutMins, EmsAbTransferRetryInterval, EmsAbTransferTimeoutNonUrgent, EmsAbTransferTimeoutNormal, EmsAbTransferTimeoutUrgent, EmsAbTranslationTableUsed, EmsAbTransportExpeditedData, EmsAbTrustLevel, EmsAbTurnRequestThreshold, EmsAbTwoWayAlternateFacility, EmsAbType, EmsAbUnauthOrigBl, EmsAbUnauthOrigBlO, EmsAbUseServerValues, EmsAbUseSiteValues, EmsAbUsenetSiteName, EmsAbUserPassword, EmsAbUsnChanged, EmsAbUsnCreated, EmsAbUsnDsaLastObjRemoved, EmsAbUsnIntersite, EmsAbUsnLastObjRem, EmsAbUsnSource, EmsAbViewContainer1, EmsAbViewContainer2, EmsAbViewContainer3, EmsAbViewDefinition, EmsAbViewFlags, EmsAbViewSite, EmsAbVoiceMailFlags, EmsAbVoiceMailGreetings, EmsAbVoiceMailPassword, EmsAbVoiceMailRecordedName, EmsAbVoiceMailRecordingLength, EmsAbVoiceMailSpeed, EmsAbVoiceMailSystemGuid, EmsAbVoiceMailUserId, EmsAbVoiceMailVolume, EmsAbWwwHomePage, EmsAbX121Address, EmsAbX25CallUserDataIncoming, EmsAbX25CallUserDataOutgoing, EmsAbX25FacilitiesDataIncoming, EmsAbX25FacilitiesDataOutgoing, EmsAbX25LeasedLinePort, EmsAbX25LeasedOrSwitched, EmsAbX25RemoteMtaPhone, EmsAbX400AttachmentType, EmsAbX400SelectorSyntax, EmsAbX500AccessControlList, EmsAbX500Nc, EmsAbX500Rdn, EmsAbXmitTimeoutNonUrgent, EmsAbXmitTimeoutNormal, EmsAbXmitTimeoutUrgent, EventsRootFolderEntryid, ExcessStorageUsed, ExtendedAclData, FastTransfer, FavoritesDefaultName, FolderChildCount, FolderDesignFlags, FolderPathname, ForeignId, ForeignReportId, ForeignSubjectId, FreeBusyForLocalSiteEntryid, GwAdminOperations, GwMtsinEntryid, GwMtsoutEntryid, HasModeratorRules, HierarchyServer, HierarchySynchronizer, ImapInternalDate, InTransit, InboundNewsfeedDn, InternetCharset, InternetNewsgroupName, IpmDafEntryid, IpmFavoritesEntryid, IpmPublicFoldersEntryid, IsNewsgroup, IsNewsgroupAnchor, LastAccessTime, LastFullBackup, LastLogoffTime, LastLogonTime, LongtermEntryidFromTable, MessageProcessed, MessageSiteName, MoveToFolderEntryid, MoveToStoreEntryid, MsgBodyId, MtsSubjectId, NewSubsGetAutoAdd, NewsfeedInfo, NewsgroupComponent, NewsgroupRootFolderEntryid, NntpArticleFolderEntryid, NntpControlFolderEntryid, NonIpmSubtreeEntryid, NormalMessageSize, NormalMessageSizeExtended, NormalMsgWAttachCount, NtUserName, OfflineAddrbookEntryid, OfflineFlags, OfflineMessageEntryid, OldestDeletedOn, OriginatorAddr, OriginatorAddrtype, OriginatorEntryid, OriginatorName, OstEncryption, OutboundNewsfeedDn, OverallAgeLimit, OverallMsgAgeLimit, OwaUrl, OwnerCount, P1Content, P1ContentType, PreventMsgCreate, Preview, PreviewUnread, ProfileAbFilesPath, ProfileAddrInfo, ProfileAllpubComment, ProfileAllpubDisplayName, ProfileBindingOrder, ProfileConfigFlags, ProfileConnectFlags, ProfileFavfldComment, ProfileFavfldDisplayName, ProfileHomeServer, ProfileHomeServerAddrs, ProfileHomeServerDn, ProfileMailbox, ProfileMaxRestrict, ProfileMoab, ProfileMoabGuid, ProfileMoabSeq, ProfileOfflineInfo, ProfileOfflineStorePath, ProfileOpenFlags, ProfileOptionsData, ProfileSecureMailbox, ProfileServer, ProfileServerDn, ProfileTransportFlags, ProfileType, ProfileUiState, ProfileUnresolvedName, ProfileUnresolvedServer, ProfileUser, ProfileVersion, PstEncryption, PstPath, PstPwSzOld, PstRememberPw, PublicFolderEntryid, PublishInAddressBook, RecipientNumber, RecipientOnAssocMsgCount, RecipientOnNormalMsgCount, ReplicaList, ReplicaServer, ReplicaVersion, ReplicationAlwaysInterval, ReplicationMessagePriority, ReplicationMsgSize, ReplicationSchedule, ReplicationStyle, ReplyRecipientSmtpProxies, ReportDestinationEntryid, ReportDestinationName, RestrictionCount, RetentionAgeLimit, RuleTriggerHistory, RulesData, RulesTable, ScheduleFolderEntryid, SecureInSite, SecureOrigination, StorageLimitInformation, StorageQuotaLimit, StoreOffline, StoreSlowlink, SubjectTraceInfo, SvrGeneratingQuotaMsg, SynchronizeFlags, SysConfigFolderEntryid, TestLineSpeed, TraceInfo, TransferEnabled, UserName, X400EnvelopeType, AbDefaultDir, AbDefaultPab, AbProviderId, AbProviders, AbSearchPath, AbSearchPathUpdate, AlternateRecipient, AssocContentCount, AttachmentX400Parameters, AuthorizingUsers, BodyCrc, CommonViewsEntryid, ContactAddrtypes, ContactDefaultAddressIndex, ContactEmailAddresses, ContactEntryids, ContactVersion, ContainerModifyVersion, ContentConfidentialityAlgorithmId, ContentCorrelator, ContentIdentifier, ContentIntegrityCheck, ContentLength, ContentReturnRequested, ContentsSortOrder, ControlFlags, ControlId, ControlStructure, ControlType, ConversationKey, ConversionEits, ConversionProhibited, ConversionWithLossProhibited, ConvertedEits, Correlate, CorrelateMtsid, CreateTemplates, CreationVersion, ExCurrentVersion, DefCreateDl, DefCreateMailuser, DefaultProfile, DefaultStore, DefaultViewEntryid, Delegation, DeliveryPoint, Deltax, Deltay, DetailsTable, DiscVal, DiscardReason, DiscloseRecipients, DisclosureOfRecipients, DiscreteValues, DlExpansionHistory, DlExpansionProhibited, ExplicitConversion, FilteringHooks, FinderEntryid, FormCategory, FormCategorySub, FormClsid, FormContactName, FormDesignerGuid, FormDesignerName, FormHidden, FormHostMap, FormMessageBehavior, FormVersion, HeaderFolderEntryid, Icon, IdentityDisplay, IdentityEntryid, IdentitySearchKey, ImplicitConversionProhibited, IncompleteCopy, InternetApproved, InternetArticleNumber, InternetControl, InternetDistribution, InternetFollowupTo, InternetLines, InternetNewsgroups, InternetNntpPath, InternetOrganization, InternetPrecedence, IpmId, IpmOutboxEntryid, IpmOutboxSearchKey, IpmReturnRequested, IpmSentmailEntryid, IpmSentmailSearchKey, IpmSubtreeEntryid, IpmSubtreeSearchKey, IpmWastebasketEntryid, IpmWastebasketSearchKey, Languages, LatestDeliveryTime, MailPermission, MdbProvider, MessageDeliveryId, MessageDownloadTime, MessageSecurityLabel, MessageToken, MiniIcon, ModifyVersion, NewsgroupName, NntpXref, NonReceiptReason, ObsoletedIpms, OriginCheck, OriginalAuthorAddrtype, OriginalAuthorEmailAddress, OriginalAuthorSearchKey, OriginalDisplayName, OriginalEits, OriginalSearchKey, OriginallyIntendedRecipAddrtype, OriginallyIntendedRecipEmailAddress, OriginallyIntendedRecipEntryid, OriginallyIntendedRecipientName, OriginatingMtaCertificate, OriginatorAndDlExpansionHistory, OriginatorCertificate, OriginatorRequestedAlternateRecipient, OriginatorReturnAddress, OwnStoreEntryid, ParentDisplay, PhysicalDeliveryBureauFaxDelivery, PhysicalDeliveryMode, PhysicalDeliveryReportRequest, PhysicalForwardingAddress, PhysicalForwardingAddressRequested, PhysicalForwardingProhibited, PhysicalRenditionAttributes, PostFolderEntries, PostFolderNames, PostReplyDenied, PostReplyFolderEntries, PostReplyFolderNames, Preprocess, PrimaryCapability, ProfileName, ProofOfDelivery, ProofOfDeliveryRequested, ProofOfSubmission, ProofOfSubmissionRequested, ProviderDisplay, ProviderDllName, ProviderOrdinal, ProviderSubmitTime, ProviderUid, ReceiveFolderSettings, RecipientCertificate, RecipientNumberForAdvice, RecipientStatus, RedirectionHistory, RegisteredMailType, RelatedIpms, RemoteProgress, RemoteProgressText, RemoteValidateOk, ReportingDlName, ReportingMtaCertificate, RequestedDeliveryMethod, ResourceFlags, ResourceMethods, ResourcePath, ResourceType, ReturnedIpm, RtfSyncBodyCount, RtfSyncBodyCrc, RtfSyncBodyTag, RtfSyncPrefixCount, RtfSyncTrailingCount, Search, ExSecurity, SentmailEntryid, ServiceDeleteFiles, ServiceDllName, ServiceEntryName, ServiceExtraUids, ServiceName, ServiceSupportFiles, ServiceUid, Services, SpoolerStatus, Status, StatusCode, StatusString, StoreProviders, StoreRecordKey, SubjectIpm, SubmitFlags, Supersedes, TransportKey, TransportProviders, TransportStatus, TypeOfMtsUser, ValidFolderMask, ViewsEntryid, X400ContentType, X400DeferredDeliveryCancel, Xpos, Ypos
     */
    public name: string;
    

    /**
     * Known Mapi Property descriptor             
     * @param discriminator 
     * @param name Known property name.  See all known properties here: https://apireference.aspose.com/email/net/aspose.email.mapi/knownpropertylist/fields/index  Possible values: Mileage, ObjectUri, GDataContactVersion, GDataPhotoVersion, AddressBookProviderArrayType, AddressBookProviderEmailList, AddressCountryCode, AgingDontAgeMe, AllAttendeesString, AllowExternalCheck, AnniversaryEventEntryId, AppointmentAuxiliaryFlags, AppointmentColor, AppointmentCounterProposal, AppointmentDuration, AppointmentEndDate, AppointmentEndTime, AppointmentEndWhole, AppointmentLastSequence, AppointmentMessageClass, AppointmentNotAllowPropose, AppointmentProposalNumber, AppointmentProposedDuration, AppointmentProposedEndWhole, AppointmentProposedStartWhole, AppointmentRecur, AppointmentReplyName, AppointmentReplyTime, AppointmentSequence, AppointmentSequenceTime, AppointmentStartDate, AppointmentStartTime, AppointmentStartWhole, AppointmentStateFlags, AppointmentSubType, AppointmentTimeZoneDefinitionEndDisplay, AppointmentTimeZoneDefinitionRecur, AppointmentTimeZoneDefinitionStartDisplay, AppointmentUnsendableRecipients, AppointmentUpdateTime, AttendeeCriticalChange, AutoFillLocation, AutoLog, AutoProcessState, AutoStartCheck, Billing, BirthdayEventEntryId, BirthdayLocal, BusinessCardCardPicture, BusinessCardDisplayDefinition, BusyStatus, CalendarType, Categories, CcAttendeesString, ChangeHighlight, Classification, ClassificationDescription, ClassificationGuid, ClassificationKeep, Classified, CleanGlobalObjectId, ClientIntent, ClipEnd, ClipStart, CollaborateDoc, CommonEnd, CommonStart, Companies, ConferencingCheck, ConferencingType, ContactCharacterSet, ContactItemData, ContactLinkedGlobalAddressListEntryId, ContactLinkEntry, ContactLinkGlobalAddressListLinkId, ContactLinkGlobalAddressListLinkState, ContactLinkLinkRejectHistory, ContactLinkName, ContactLinkSearchKey, ContactLinkSMTPAddressCache, Contacts, ContactUserField1, ContactUserField2, ContactUserField3, ContactUserField4, ConversationActionLastAppliedTime, ConversationActionMaxDeliveryTime, ConversationActionMoveFolderEid, ConversationActionMoveStoreEid, ConversationActionVersion, ConversationProcessed, CurrentVersion, CurrentVersionName, DayInterval, DayOfMonth, DelegateMail, Department, Directory, DistributionListChecksum, DistributionListMembers, DistributionListName, DistributionListOneOffMembers, DistributionListStream, Email1AddressType, Email1DisplayName, Email1EmailAddress, Email1OriginalDisplayName, Email1OriginalEntryId, Email2AddressType, Email2DisplayName, Email2EmailAddress, Email2OriginalDisplayName, Email2OriginalEntryId, Email3AddressType, Email3DisplayName, Email3EmailAddress, Email3OriginalDisplayName, Email3OriginalEntryId, EndRecurrenceDate, EndRecurrenceTime, ExceptionReplaceTime, Fax1AddressType, Fax1EmailAddress, Fax1OriginalDisplayName, Fax1OriginalEntryId, Fax2AddressType, Fax2EmailAddress, Fax2OriginalDisplayName, Fax2OriginalEntryId, Fax3AddressType, Fax3EmailAddress, Fax3OriginalDisplayName, Fax3OriginalEntryId, FExceptionalAttendees, FExceptionalBody, FileUnder, FileUnderId, FileUnderList, FInvited, FlagRequest, FlagString, ForwardInstance, ForwardNotificationRecipients, FOthersAppointment, FreeBusyLocation, GlobalObjectId, HasPicture, HomeAddress, HomeAddressCountryCode, Html, ICalendarDayOfWeekMask, InboundICalStream, InfoPathFormName, InstantMessagingAddress, IntendedBusyStatus, InternetAccountName, InternetAccountStamp, IsContactLinked, IsException, IsRecurring, IsSilent, LinkedTaskItems, Location, LogDocumentPosted, LogDocumentPrinted, LogDocumentRouted, LogDocumentSaved, LogDuration, LogEnd, LogFlags, LogStart, LogType, LogTypeDesc, MeetingType, MeetingWorkspaceUrl, MonthInterval, MonthOfYear, MonthOfYearMask, NetShowUrl, NoEndDateFlag, NonSendableBcc, NonSendableCc, NonSendableTo, NonSendBccTrackStatus, NonSendCcTrackStatus, NonSendToTrackStatus, NoteColor, NoteHeight, NoteWidth, NoteX, NoteY, Occurrences, OldLocation, OldRecurrenceType, OldWhenEndWhole, OldWhenStartWhole, OnlinePassword, OptionalAttendees, OrganizerAlias, OriginalStoreEntryId, OtherAddress, OtherAddressCountryCode, OwnerCriticalChange, OwnerName, PendingStateForSiteMailboxDocument, PercentComplete, PostalAddressId, PostRssChannel, PostRssChannelLink, PostRssItemGuid, PostRssItemHash, PostRssItemLink, PostRssItemXml, PostRssSubscription, Private, PromptSendUpdate, RecurrenceDuration, RecurrencePattern, RecurrenceType, Recurring, ReferenceEntryId, ReminderDelta, ReminderFileParameter, ReminderOverride, ReminderPlaySound, ReminderSet, ReminderSignalTime, ReminderTime, ReminderTimeDate, ReminderTimeTime, ReminderType, RemoteStatus, RequiredAttendees, ResourceAttendees, ResponseStatus, ServerProcessed, ServerProcessingActions, SharingAnonymity, SharingBindingEntryId, SharingBrowseUrl, SharingCapabilities, SharingConfigurationUrl, SharingDataRangeEnd, SharingDataRangeStart, SharingDetail, SharingExtensionXml, SharingFilter, SharingFlags, SharingFlavor, SharingFolderEntryId, SharingIndexEntryId, SharingInitiatorEntryId, SharingInitiatorName, SharingInitiatorSmtp, SharingInstanceGuid, SharingLastAutoSyncTime, SharingLastSyncTime, SharingLocalComment, SharingLocalLastModificationTime, SharingLocalName, SharingLocalPath, SharingLocalStoreUid, SharingLocalType, SharingLocalUid, SharingOriginalMessageEntryId, SharingParentBindingEntryId, SharingParticipants, SharingPermissions, SharingProviderExtension, SharingProviderGuid, SharingProviderName, SharingProviderUrl, SharingRangeEnd, SharingRangeStart, SharingReciprocation, SharingRemoteByteSize, SharingRemoteComment, SharingRemoteCrc, SharingRemoteLastModificationTime, SharingRemoteMessageCount, SharingRemoteName, SharingRemotePass, SharingRemotePath, SharingRemoteStoreUid, SharingRemoteType, SharingRemoteUid, SharingRemoteUser, SharingRemoteVersion, SharingResponseTime, SharingResponseType, SharingRoamLog, SharingStart, SharingStatus, SharingStop, SharingSyncFlags, SharingSyncInterval, SharingTimeToLive, SharingTimeToLiveAuto, SharingWorkingHoursDays, SharingWorkingHoursEnd, SharingWorkingHoursStart, SharingWorkingHoursTimeZone, SideEffects, SingleBodyICal, SmartNoAttach, SpamOriginalFolder, StartRecurrenceDate, StartRecurrenceTime, TaskAcceptanceState, TaskAccepted, TaskActualEffort, TaskAssigner, TaskAssigners, TaskComplete, TaskCustomFlags, TaskDateCompleted, TaskDeadOccurrence, TaskDueDate, TaskEstimatedEffort, TaskFCreator, TaskFFixOffline, TaskFRecurring, TaskGlobalId, TaskHistory, TaskLastDelegate, TaskLastUpdate, TaskLastUser, TaskMode, TaskMultipleRecipients, TaskNoCompute, TaskOrdinal, TaskOwner, TaskOwnership, TaskRecurrence, TaskResetReminder, TaskRole, TaskStartDate, TaskState, TaskStatus, TaskStatusOnComplete, TaskUpdates, TaskVersion, TeamTask, TimeZone, TimeZoneDescription, TimeZoneStruct, ToAttendeesString, ToDoOrdinalDate, ToDoSubOrdinal, ToDoTitle, UseTnef, ValidFlagStringProof, VerbResponse, VerbStream, WeddingAnniversaryLocal, WeekInterval, Where, WorkAddress, WorkAddressCity, WorkAddressCountry, WorkAddressCountryCode, WorkAddressPostalCode, WorkAddressPostOfficeBox, WorkAddressState, WorkAddressStreet, YearInterval, YomiCompanyName, YomiFirstName, YomiLastName, AcceptLanguage, ApplicationName, AttachmentMacContentType, AttachmentMacInfo, AudioNotes, Author, AutomaticSpeechRecognitionData, ByteCount, CalendarAttendeeRole, CalendarBusystatus, CalendarContact, CalendarContactUrl, CalendarCreated, CalendarDescriptionUrl, CalendarDuration, CalendarExceptionDate, CalendarExceptionRule, CalendarGeoLatitude, CalendarGeoLongitude, CalendarInstanceType, CalendarIsOrganizer, CalendarLastModified, CalendarLocationUrl, CalendarMeetingStatus, CalendarMethod, CalendarProductId, CalendarRecurrenceIdRange, CalendarReminderOffset, CalendarResources, CalendarRsvp, CalendarSequence, CalendarTimeZone, CalendarTimeZoneId, CalendarTransparent, CalendarUid, CalendarVersion, Category, CharacterCount, Comments, Company, ContentBase, ContentClass, ContentType, CreateDateTimeReadOnly, CrossReference, DavId, DavIsCollection, DavIsStructuredDocument, DavParentName, DavUid, DocumentParts, EditTime, ExchangeIntendedBusyStatus, ExchangeJunkEmailMoveStamp, ExchangeModifyExceptionStructure, ExchangeNoModifyExceptions, ExchangePatternEnd, ExchangePatternStart, ExchangeReminderInterval, ExchDatabaseSchema, ExchDataExpectedContentClass, ExchDataSchemaCollectionReference, ExtractedAddresses, ExtractedContacts, ExtractedEmails, ExtractedMeetings, ExtractedPhones, ExtractedTasks, ExtractedUrls, From, HeadingPairs, HiddenCount, HttpmailCalendar, HttpmailHtmlDescription, HttpmailSendMessage, ICalendarRecurrenceDate, ICalendarRecurrenceRule, InternetSubject, Keywords, LastAuthor, LastPrinted, LastSaveDateTime, LineCount, LinksDirty, LocationUrl, Manager, MultimediaClipCount, NoteCount, OMSAccountGuid, OMSMobileModel, OMSScheduleTime, OMSServiceType, OMSSourceType, PageCount, ParagraphCount, PhishingStamp, PresentationFormat, QuarantineOriginalSender, RevisionNumber, RightsManagementLicense, Scale, Security, SlideCount, Subject, Template, Thumbnail, Title, WordCount, XCallId, XFaxNumberOfPages, XRequireProtectedPlayOnPhone, XSenderTelephoneNumber, XSharingBrowseUrl, XSharingCapabilities, XSharingConfigUrl, XSharingExendedCaps, XSharingFlavor, XSharingInstanceGuid, XSharingLocalType, XSharingProviderGuid, XSharingProviderName, XSharingProviderUrl, XSharingRemoteName, XSharingRemotePath, XSharingRemoteStoreUid, XSharingRemoteType, XSharingRemoteUid, XVoiceMessageAttachmentOrder, XVoiceMessageDuration, XVoiceMessageSenderName, Access, AccessControlListData, AccessLevel, Account, AdditionalRenEntryIds, AdditionalRenEntryIdsEx, AddressBookAuthorizedSenders, AddressBookContainerId, AddressBookDeliveryContentLength, AddressBookDisplayNamePrintable, AddressBookDisplayTypeExtended, AddressBookDistributionListExternalMemberCount, AddressBookDistributionListMemberCount, AddressBookDistributionListMemberSubmitAccepted, AddressBookDistributionListMemberSubmitRejected, AddressBookDistributionListRejectMessagesFromDLMembers, AddressBookEntryId, AddressBookExtensionAttribute1, AddressBookExtensionAttribute10, AddressBookExtensionAttribute11, AddressBookExtensionAttribute12, AddressBookExtensionAttribute13, AddressBookExtensionAttribute14, AddressBookExtensionAttribute15, AddressBookExtensionAttribute2, AddressBookExtensionAttribute3, AddressBookExtensionAttribute4, AddressBookExtensionAttribute5, AddressBookExtensionAttribute6, AddressBookExtensionAttribute7, AddressBookExtensionAttribute8, AddressBookExtensionAttribute9, AddressBookFolderPathname, AddressBookHierarchicalChildDepartments, AddressBookHierarchicalDepartmentMembers, AddressBookHierarchicalIsHierarchicalGroup, AddressBookHierarchicalParentDepartment, AddressBookHierarchicalRootDepartment, AddressBookHierarchicalShowInDepartments, AddressBookHomeMessageDatabase, AddressBookIsMaster, AddressBookIsMemberOfDistributionList, AddressBookManageDistributionList, AddressBookManager, AddressBookManagerDistinguishedName, AddressBookMember, AddressBookMessageId, AddressBookModerationEnabled, AddressBookNetworkAddress, AddressBookObjectDistinguishedName, AddressBookObjectGuid, AddressBookOrganizationalUnitRootDistinguishedName, AddressBookOwner, AddressBookOwnerBackLink, AddressBookParentEntryId, AddressBookPhoneticCompanyName, AddressBookPhoneticDepartmentName, AddressBookPhoneticDisplayName, AddressBookPhoneticGivenName, AddressBookPhoneticSurname, AddressBookProxyAddresses, AddressBookPublicDelegates, AddressBookReports, AddressBookRoomCapacity, AddressBookRoomContainers, AddressBookRoomDescription, AddressBookSenderHintTranslations, AddressBookSeniorityIndex, AddressBookTargetAddress, AddressBookUnauthorizedSenders, AddressBookX509Certificate, AddressType, AlternateRecipientAllowed, Anr, ArchiveDate, ArchivePeriod, ArchiveTag, Assistant, AssistantTelephoneNumber, Associated, AttachAdditionalInformation, AttachContentBase, AttachContentId, AttachContentLocation, AttachDataBinary, AttachDataObject, AttachEncoding, AttachExtension, AttachFilename, AttachFlags, AttachLongFilename, AttachLongPathname, AttachmentContactPhoto, AttachmentFlags, AttachmentHidden, AttachmentLinkId, AttachMethod, AttachMimeTag, AttachNumber, AttachPathname, AttachPayloadClass, AttachPayloadProviderGuidString, AttachRendering, AttachSize, AttachTag, AttachTransportName, AttributeHidden, AttributeReadOnly, AutoForwardComment, AutoForwarded, AutoResponseSuppress, Birthday, BlockStatus, Body, BodyContentId, BodyContentLocation, BodyHtml, Business2TelephoneNumber, Business2TelephoneNumbers, BusinessFaxNumber, BusinessHomePage, BusinessTelephoneNumber, CallbackTelephoneNumber, CallId, CarTelephoneNumber, CdoRecurrenceid, ChangeKey, ChangeNumber, ChildrensNames, ClientActions, ClientSubmitTime, CodePageId, Comment, CompanyMainTelephoneNumber, CompanyName, ComputerNetworkName, ConflictEntryId, ContainerClass, ContainerContents, ContainerFlags, ContainerHierarchy, ContentCount, ContentFilterSpamConfidenceLevel, ContentUnreadCount, ConversationId, ConversationIndex, ConversationIndexTracking, ConversationTopic, Country, CreationTime, CreatorEntryId, CreatorName, CustomerId, DamBackPatched, DamOriginalEntryId, DefaultPostMessageClass, DeferredActionMessageOriginalEntryId, DeferredDeliveryTime, DeferredSendNumber, DeferredSendTime, DeferredSendUnits, DelegatedByRule, DelegateFlags, DeleteAfterSubmit, DeletedCountTotal, DeletedOn, DeliverTime, DepartmentName, Depth, DisplayBcc, DisplayCc, DisplayName, DisplayNamePrefix, DisplayTo, DisplayType, DisplayTypeEx, EmailAddress, EndDate, EntryId, ExceptionEndTime, TagExceptionReplaceTime, ExceptionStartTime, ExchangeNTSecurityDescriptor, ExpiryNumber, ExpiryTime, ExpiryUnits, ExtendedFolderFlags, ExtendedRuleMessageActions, ExtendedRuleMessageCondition, ExtendedRuleSizeLimit, FaxNumberOfPages, FlagCompleteTime, FlagStatus, FlatUrlName, FolderAssociatedContents, FolderId, FolderFlags, FolderType, FollowupIcon, FreeBusyCountMonths, FreeBusyEntryIds, FreeBusyMessageEmailAddress, FreeBusyPublishEnd, FreeBusyPublishStart, FreeBusyRangeTimestamp, FtpSite, GatewayNeedsToRefresh, Gender, Generation, GivenName, GovernmentIdNumber, HasAttachments, HasDeferredActionMessages, HasNamedProperties, HasRules, HierarchyChangeNumber, HierRev, Hobbies, Home2TelephoneNumber, Home2TelephoneNumbers, HomeAddressCity, HomeAddressCountry, HomeAddressPostalCode, HomeAddressPostOfficeBox, HomeAddressStateOrProvince, HomeAddressStreet, HomeFaxNumber, HomeTelephoneNumber, TagHtml, ICalendarEndTime, ICalendarReminderNextTime, ICalendarStartTime, IconIndex, Importance, InConflict, InitialDetailsPane, Initials, InReplyToId, InstanceKey, InstanceNum, InstID, InternetCodepage, InternetMailOverrideFormat, InternetMessageId, InternetReferences, IpmAppointmentEntryId, IpmContactEntryId, IpmDraftsEntryId, IpmJournalEntryId, IpmNoteEntryId, IpmTaskEntryId, IsdnNumber, JunkAddRecipientsToSafeSendersList, JunkIncludeContacts, JunkPermanentlyDelete, JunkPhishingEnableLinks, JunkThreshold, Keyword, Language, LastModificationTime, LastModifierEntryId, LastModifierName, LastVerbExecuted, LastVerbExecutionTime, ListHelp, ListSubscribe, ListUnsubscribe, LocalCommitTime, LocalCommitTimeMax, LocaleId, Locality, TagLocation, MailboxOwnerEntryId, MailboxOwnerName, ManagerName, MappingSignature, MaximumSubmitMessageSize, MemberId, MemberName, MemberRights, MessageAttachments, MessageCcMe, MessageClass, MessageCodepage, MessageDeliveryTime, MessageEditorFormat, MessageFlags, MessageHandlingSystemCommonName, MessageLocaleId, MessageRecipientMe, MessageRecipients, MessageSize, MessageSizeExtended, MessageStatus, MessageSubmissionId, MessageToMe, Mid, MiddleName, MimeSkeleton, MobileTelephoneNumber, NativeBody, NextSendAcct, Nickname, NonDeliveryReportDiagCode, NonDeliveryReportReasonCode, NonDeliveryReportStatusCode, NonReceiptNotificationRequested, NormalizedSubject, ObjectType, OfficeLocation, OfflineAddressBookContainerGuid, OfflineAddressBookDistinguishedName, OfflineAddressBookMessageClass, OfflineAddressBookName, OfflineAddressBookSequence, OfflineAddressBookTruncatedProperties, OrdinalMost, OrganizationalIdNumber, OriginalAuthorEntryId, OriginalAuthorName, OriginalDeliveryTime, OriginalDisplayBcc, OriginalDisplayCc, OriginalDisplayTo, OriginalEntryId, OriginalMessageClass, OriginalMessageId, OriginalSenderAddressType, OriginalSenderEmailAddress, OriginalSenderEntryId, OriginalSenderName, OriginalSenderSearchKey, OriginalSensitivity, OriginalSentRepresentingAddressType, OriginalSentRepresentingEmailAddress, OriginalSentRepresentingEntryId, OriginalSentRepresentingName, OriginalSentRepresentingSearchKey, OriginalSubject, OriginalSubmitTime, OriginatorDeliveryReportRequested, OriginatorNonDeliveryReportRequested, OscSyncEnabled, OtherAddressCity, OtherAddressCountry, OtherAddressPostalCode, OtherAddressPostOfficeBox, OtherAddressStateOrProvince, OtherAddressStreet, OtherTelephoneNumber, OutOfOfficeState, OwnerAppointmentId, PagerTelephoneNumber, ParentEntryId, ParentFolderId, ParentKey, ParentSourceKey, PersonalHomePage, PolicyTag, PostalAddress, PostalCode, PostOfficeBox, PredecessorChangeList, PrimaryFaxNumber, PrimarySendAccount, PrimaryTelephoneNumber, Priority, Processed, Profession, ProhibitReceiveQuota, ProhibitSendQuota, PurportedSenderDomain, RadioTelephoneNumber, Read, ReadReceiptAddressType, ReadReceiptEmailAddress, ReadReceiptEntryId, ReadReceiptName, ReadReceiptRequested, ReadReceiptSearchKey, ReadReceiptSmtpAddress, ReceiptTime, ReceivedByAddressType, ReceivedByEmailAddress, ReceivedByEntryId, ReceivedByName, ReceivedBySearchKey, ReceivedBySmtpAddress, ReceivedRepresentingAddressType, ReceivedRepresentingEmailAddress, ReceivedRepresentingEntryId, ReceivedRepresentingName, ReceivedRepresentingSearchKey, ReceivedRepresentingSmtpAddress, RecipientDisplayName, RecipientEntryId, RecipientFlags, RecipientOrder, RecipientProposed, RecipientProposedEndTime, RecipientProposedStartTime, RecipientReassignmentProhibited, RecipientTrackStatus, RecipientTrackStatusTime, RecipientType, RecordKey, ReferredByName, RemindersOnlineEntryId, RemoteMessageTransferAgent, RenderingPosition, ReplyRecipientEntries, ReplyRecipientNames, ReplyRequested, ReplyTemplateId, ReplyTime, ReportDisposition, ReportDispositionMode, ReportEntryId, ReportingMessageTransferAgent, ReportName, ReportSearchKey, ReportTag, ReportText, ReportTime, ResolveMethod, ResponseRequested, Responsibility, RetentionDate, RetentionFlags, RetentionPeriod, Rights, RoamingDatatypes, RoamingDictionary, RoamingXmlStream, Rowid, RowType, RtfCompressed, RtfInSync, RuleActionNumber, RuleActions, RuleActionType, RuleCondition, RuleError, RuleFolderEntryId, RuleId, RuleIds, RuleLevel, RuleMessageLevel, RuleMessageName, RuleMessageProvider, RuleMessageProviderData, RuleMessageSequence, RuleMessageState, RuleMessageUserFlags, RuleName, RuleProvider, RuleProviderData, RuleSequence, RuleState, RuleUserFlags, RwRulesStream, ScheduleInfoAppointmentTombstone, ScheduleInfoAutoAcceptAppointments, ScheduleInfoDelegateEntryIds, ScheduleInfoDelegateNames, ScheduleInfoDelegateNamesW, ScheduleInfoDelegatorWantsCopy, ScheduleInfoDelegatorWantsInfo, ScheduleInfoDisallowOverlappingAppts, ScheduleInfoDisallowRecurringAppts, ScheduleInfoDontMailDelegates, ScheduleInfoFreeBusy, ScheduleInfoFreeBusyAway, ScheduleInfoFreeBusyBusy, ScheduleInfoFreeBusyMerged, ScheduleInfoFreeBusyTentative, ScheduleInfoMonthsAway, ScheduleInfoMonthsBusy, ScheduleInfoMonthsMerged, ScheduleInfoMonthsTentative, ScheduleInfoResourceType, SchedulePlusFreeBusyEntryId, ScriptData, SearchFolderDefinition, SearchFolderEfpFlags, SearchFolderExpiration, SearchFolderId, SearchFolderLastUsed, SearchFolderRecreateInfo, SearchFolderStorageType, SearchFolderTag, SearchFolderTemplateId, SearchKey, SecurityDescriptorAsXml, Selectable, SenderAddressType, SenderEmailAddress, SenderEntryId, SenderIdStatus, SenderName, SenderSearchKey, SenderSmtpAddress, SenderTelephoneNumber, SendInternetEncoding, SendRichInfo, Sensitivity, SentMailSvrEID, SentRepresentingAddressType, SentRepresentingEmailAddress, SentRepresentingEntryId, SentRepresentingFlags, SentRepresentingName, SentRepresentingSearchKey, SentRepresentingSmtpAddress, SmtpAddress, SortLocaleId, SourceKey, SpokenName, SpouseName, StartDate, StartDateEtc, StateOrProvince, StoreEntryId, StoreState, StoreSupportMask, StreetAddress, Subfolders, TagSubject, SubjectPrefix, SupplementaryInfo, Surname, SwappedToDoData, SwappedToDoStore, TargetEntryId, TelecommunicationsDeviceForDeafTelephoneNumber, TelexNumber, TemplateData, Templateid, TextAttachmentCharset, ThumbnailPhoto, TagTitle, TnefCorrelationKey, ToDoItemFlags, TransmittableDisplayName, TransportMessageHeaders, TrustSender, UserCertificate, UserEntryId, UserX509Certificate, ViewDescriptorBinary, ViewDescriptorName, ViewDescriptorStrings, ViewDescriptorVersion, VoiceMessageAttachmentOrder, VoiceMessageDuration, VoiceMessageSenderName, WeddingAnniversary, WlinkAddressBookEID, WlinkAddressBookStoreEID, WlinkCalendarColor, WlinkClientID, WlinkEntryId, WlinkFlags, WlinkFolderType, WlinkGroupClsid, WlinkGroupHeaderID, WlinkGroupName, WlinkOrdinal, WlinkRecordKey, WlinkROGroupType, WlinkSaveStamp, WlinkSection, WlinkStoreEntryId, WlinkType, Abstract, ActiveUserEntryid, AddrbookForLocalSiteEntryid, AddressBookDisplayName, ArrivalTime, AssocMessageSize, AssocMessageSizeExtended, AssocMsgWAttachCount, AttachOnAssocMsgCount, AttachOnNormalMsgCount, AutoAddNewSubs, BilateralInfo, CachedColumnCount, CategCount, ChangeAdvisor, ChangeNotificationGuid, Collector, ContactCount, ContentSearchKey, ContentsSynchronizer, DeletedAssocMessageSizeExtended, DeletedAssocMsgCount, DeletedFolderCount, DeletedMessageSizeExtended, DeletedMsgCount, DeletedNormalMessageSizeExtended, DesignInProgress, DisableFullFidelity, DisableWinsock, DlReportFlags, EformsForLocaleEntryid, EformsLocaleId, EformsRegistryEntryid, EmsAbAccessCategory, EmsAbActivationSchedule, EmsAbActivationStyle, EmsAbAddressEntryDisplayTable, EmsAbAddressEntryDisplayTableMsdos, EmsAbAddressSyntax, EmsAbAddressType, EmsAbAdmd, EmsAbAdminDescription, EmsAbAdminDisplayName, EmsAbAdminExtensionDll, EmsAbAliasedObjectName, EmsAbAliasedObjectNameO, EmsAbAltRecipient, EmsAbAltRecipientBl, EmsAbAltRecipientBlO, EmsAbAltRecipientO, EmsAbAncestorId, EmsAbAnonymousAccess, EmsAbAnonymousAccount, EmsAbAssocNtAccount, EmsAbAssocProtocolCfgNntp, EmsAbAssocProtocolCfgNntpO, EmsAbAssocRemoteDxa, EmsAbAssocRemoteDxaO, EmsAbAssociationLifetime, EmsAbAttributeCertificate, EmsAbAuthOrigBl, EmsAbAuthOrigBlO, EmsAbAuthenticationToUse, EmsAbAuthorityRevocationList, EmsAbAuthorizedDomain, EmsAbAuthorizedPassword, EmsAbAuthorizedPasswordConfirm, EmsAbAuthorizedUser, EmsAbAutoreply, EmsAbAutoreplyMessage, EmsAbAutoreplySubject, EmsAbAvailableAuthorizationPackages, EmsAbAvailableDistributions, EmsAbBridgeheadServers, EmsAbBridgeheadServersO, EmsAbBusinessCategory, EmsAbBusinessRoles, EmsAbCaCertificate, EmsAbCanCreatePf, EmsAbCanCreatePfBl, EmsAbCanCreatePfBlO, EmsAbCanCreatePfDl, EmsAbCanCreatePfDlBl, EmsAbCanCreatePfDlBlO, EmsAbCanCreatePfDlO, EmsAbCanCreatePfO, EmsAbCanNotCreatePf, EmsAbCanNotCreatePfBl, EmsAbCanNotCreatePfBlO, EmsAbCanNotCreatePfDl, EmsAbCanNotCreatePfDlBl, EmsAbCanNotCreatePfDlBlO, EmsAbCanNotCreatePfDlO, EmsAbCanNotCreatePfO, EmsAbCanPreserveDns, EmsAbCertificateChainV3, EmsAbCertificateRevocationList, EmsAbCertificateRevocationListV1, EmsAbCertificateRevocationListV3, EmsAbCharacterSet, EmsAbCharacterSetList, EmsAbChildRdns, EmsAbClientAccessEnabled, EmsAbClockAlertOffset, EmsAbClockAlertRepair, EmsAbClockWarningOffset, EmsAbClockWarningRepair, EmsAbCompromisedKeyList, EmsAbComputerName, EmsAbConnectedDomains, EmsAbConnectionListFilter, EmsAbConnectionListFilterType, EmsAbConnectionType, EmsAbContainerInfo, EmsAbContentType, EmsAbControlMsgFolderId, EmsAbControlMsgRules, EmsAbCost, EmsAbCountryName, EmsAbCrossCertificateCrl, EmsAbCrossCertificatePair, EmsAbDefaultMessageFormat, EmsAbDelegateUser, EmsAbDelivEits, EmsAbDelivExtContTypes, EmsAbDeliverAndRedirect, EmsAbDeliveryMechanism, EmsAbDeltaRevocationList, EmsAbDescription, EmsAbDestinationIndicator, EmsAbDiagnosticRegKey, EmsAbDisableDeferredCommit, EmsAbDisabledGatewayProxy, EmsAbDisplayNameOverride, EmsAbDisplayNameSuffix, EmsAbDlMemRejectPermsBl, EmsAbDlMemRejectPermsBlO, EmsAbDlMemberRule, EmsAbDmdName, EmsAbDoOabVersion, EmsAbDomainDefAltRecip, EmsAbDomainDefAltRecipO, EmsAbDomainName, EmsAbDsaSignature, EmsAbDxaAdminCopy, EmsAbDxaAdminForward, EmsAbDxaAdminUpdate, EmsAbDxaAppendReqcn, EmsAbDxaConfContainerList, EmsAbDxaConfContainerListO, EmsAbDxaConfReqTime, EmsAbDxaConfSeq, EmsAbDxaConfSeqUsn, EmsAbDxaExchangeOptions, EmsAbDxaExportNow, EmsAbDxaFlags, EmsAbDxaImpSeq, EmsAbDxaImpSeqTime, EmsAbDxaImpSeqUsn, EmsAbDxaImportNow, EmsAbDxaInTemplateMap, EmsAbDxaLocalAdmin, EmsAbDxaLocalAdminO, EmsAbDxaLoggingLevel, EmsAbDxaNativeAddressType, EmsAbDxaOutTemplateMap, EmsAbDxaPassword, EmsAbDxaPrevExchangeOptions, EmsAbDxaPrevExportNativeOnly, EmsAbDxaPrevInExchangeSensitivity, EmsAbDxaPrevRemoteEntries, EmsAbDxaPrevRemoteEntriesO, EmsAbDxaPrevReplicationSensitivity, EmsAbDxaPrevTemplateOptions, EmsAbDxaPrevTypes, EmsAbDxaRecipientCp, EmsAbDxaRemoteClient, EmsAbDxaRemoteClientO, EmsAbDxaReqSeq, EmsAbDxaReqSeqTime, EmsAbDxaReqSeqUsn, EmsAbDxaReqname, EmsAbDxaSvrSeq, EmsAbDxaSvrSeqTime, EmsAbDxaSvrSeqUsn, EmsAbDxaTask, EmsAbDxaTemplateOptions, EmsAbDxaTemplateTimestamp, EmsAbDxaTypes, EmsAbDxaUnconfContainerList, EmsAbDxaUnconfContainerListO, EmsAbEmployeeNumber, EmsAbEmployeeType, EmsAbEnableCompatibility, EmsAbEnabled, EmsAbEnabledAuthorizationPackages, EmsAbEnabledProtocolCfg, EmsAbEnabledProtocols, EmsAbEncapsulationMethod, EmsAbEncrypt, EmsAbEncryptAlgListNa, EmsAbEncryptAlgListOther, EmsAbEncryptAlgSelectedNa, EmsAbEncryptAlgSelectedOther, EmsAbExpandDlsLocally, EmsAbExpirationTime, EmsAbExportContainers, EmsAbExportContainersO, EmsAbExportCustomRecipients, EmsAbExtendedCharsAllowed, EmsAbExtensionData, EmsAbExtensionName, EmsAbExtensionNameInherited, EmsAbFacsimileTelephoneNumber, EmsAbFileVersion, EmsAbFilterLocalAddresses, EmsAbFoldersContainer, EmsAbFoldersContainerO, EmsAbFormData, EmsAbForwardingAddress, EmsAbGarbageCollPeriod, EmsAbGatewayLocalCred, EmsAbGatewayLocalDesig, EmsAbGatewayProxy, EmsAbGatewayRoutingTree, EmsAbGenerationQualifier, EmsAbGroupByAttr1, EmsAbGroupByAttr2, EmsAbGroupByAttr3, EmsAbGroupByAttr4, EmsAbGroupByAttrValueDn, EmsAbGroupByAttrValueDnO, EmsAbGroupByAttrValueStr, EmsAbGwartLastModified, EmsAbHasFullReplicaNcs, EmsAbHasFullReplicaNcsO, EmsAbHasMasterNcs, EmsAbHasMasterNcsO, EmsAbHelpData16, EmsAbHelpData32, EmsAbHelpFileName, EmsAbHeuristics, EmsAbHideDlMembership, EmsAbHideFromAddressBook, EmsAbHierarchyPath, EmsAbHomeMdbBl, EmsAbHomeMdbBlO, EmsAbHomeMta, EmsAbHomeMtaO, EmsAbHomePublicServer, EmsAbHomePublicServerO, EmsAbHouseIdentifier, EmsAbHttpPubAbAttributes, EmsAbHttpPubGal, EmsAbHttpPubGalLimit, EmsAbHttpPubPf, EmsAbHttpServers, EmsAbImportContainer, EmsAbImportContainerO, EmsAbImportSensitivity, EmsAbImportedFrom, EmsAbInboundAcceptAll, EmsAbInboundDn, EmsAbInboundDnO, EmsAbInboundHost, EmsAbInboundNewsfeed, EmsAbInboundNewsfeedType, EmsAbInboundSites, EmsAbInboundSitesO, EmsAbIncomingMsgSizeLimit, EmsAbIncomingPassword, EmsAbInsadmin, EmsAbInsadminO, EmsAbInstanceType, EmsAbInternationalIsdnNumber, EmsAbInvocationId, EmsAbIsDeleted, EmsAbIsSingleValued, EmsAbKccStatus, EmsAbKmServer, EmsAbKmServerO, EmsAbKnowledgeInformation, EmsAbLabeleduri, EmsAbLanguage, EmsAbLanguageIso639, EmsAbLdapDisplayName, EmsAbLdapSearchCfg, EmsAbLineWrap, EmsAbLinkId, EmsAbListPublicFolders, EmsAbLocalBridgeHead, EmsAbLocalBridgeHeadAddress, EmsAbLocalInitialTurn, EmsAbLocalScope, EmsAbLocalScopeO, EmsAbLogFilename, EmsAbLogRolloverInterval, EmsAbMailDrop, EmsAbMaintainAutoreplyHistory, EmsAbMapiDisplayType, EmsAbMapiId, EmsAbMaximumObjectId, EmsAbMdbBackoffInterval, EmsAbMdbMsgTimeOutPeriod, EmsAbMdbOverQuotaLimit, EmsAbMdbStorageQuota, EmsAbMdbUnreadLimit, EmsAbMdbUseDefaults, EmsAbMessageTrackingEnabled, EmsAbMimeTypes, EmsAbModerated, EmsAbModerator, EmsAbMonitorClock, EmsAbMonitorServers, EmsAbMonitorServices, EmsAbMonitoredConfigurations, EmsAbMonitoredConfigurationsO, EmsAbMonitoredServers, EmsAbMonitoredServersO, EmsAbMonitoredServices, EmsAbMonitoringAlertDelay, EmsAbMonitoringAlertUnits, EmsAbMonitoringAvailabilityStyle, EmsAbMonitoringAvailabilityWindow, EmsAbMonitoringCachedViaMail, EmsAbMonitoringCachedViaMailO, EmsAbMonitoringCachedViaRpc, EmsAbMonitoringCachedViaRpcO, EmsAbMonitoringEscalationProcedure, EmsAbMonitoringHotsitePollInterval, EmsAbMonitoringHotsitePollUnits, EmsAbMonitoringMailUpdateInterval, EmsAbMonitoringMailUpdateUnits, EmsAbMonitoringNormalPollInterval, EmsAbMonitoringNormalPollUnits, EmsAbMonitoringRecipients, EmsAbMonitoringRecipientsNdr, EmsAbMonitoringRecipientsNdrO, EmsAbMonitoringRecipientsO, EmsAbMonitoringRpcUpdateInterval, EmsAbMonitoringRpcUpdateUnits, EmsAbMonitoringWarningDelay, EmsAbMonitoringWarningUnits, EmsAbMtaLocalCred, EmsAbMtaLocalDesig, EmsAbNAddress, EmsAbNAddressType, EmsAbNewsfeedType, EmsAbNewsgroup, EmsAbNewsgroupList, EmsAbNntpCharacterSet, EmsAbNntpContentFormat, EmsAbNntpDistributions, EmsAbNntpDistributionsFlag, EmsAbNntpNewsfeeds, EmsAbNntpNewsfeedsO, EmsAbNtMachineName, EmsAbNtSecurityDescriptor, EmsAbNumOfOpenRetries, EmsAbNumOfTransferRetries, EmsAbObjViewContainers, EmsAbObjViewContainersO, EmsAbObjectClassCategory, EmsAbObjectOid, EmsAbObjectVersion, EmsAbOffLineAbContainers, EmsAbOffLineAbContainersO, EmsAbOffLineAbSchedule, EmsAbOffLineAbServer, EmsAbOffLineAbServerO, EmsAbOffLineAbStyle, EmsAbOidType, EmsAbOmObjectClass, EmsAbOmSyntax, EmsAbOofReplyToOriginator, EmsAbOpenRetryInterval, EmsAbOrganizationName, EmsAbOrganizationalUnitName, EmsAbOriginalDisplayTable, EmsAbOriginalDisplayTableMsdos, EmsAbOtherRecips, EmsAbOutboundHost, EmsAbOutboundHostType, EmsAbOutboundNewsfeed, EmsAbOutboundSites, EmsAbOutboundSitesO, EmsAbOutgoingMsgSizeLimit, EmsAbOverrideNntpContentFormat, EmsAbOwaServer, EmsAbPSelector, EmsAbPSelectorInbound, EmsAbPerMsgDialogDisplayTable, EmsAbPerRecipDialogDisplayTable, EmsAbPeriodRepSyncTimes, EmsAbPeriodReplStagger, EmsAbPersonalTitle, EmsAbPfContacts, EmsAbPfContactsO, EmsAbPopCharacterSet, EmsAbPopContentFormat, EmsAbPortNumber, EmsAbPostalAddress, EmsAbPreferredDeliveryMethod, EmsAbPreserveInternetContent, EmsAbPrmd, EmsAbPromoExpiration, EmsAbProtocolSettings, EmsAbProxyGenerationEnabled, EmsAbProxyGeneratorDll, EmsAbPublicDelegatesBl, EmsAbPublicDelegatesBlO, EmsAbQuotaNotificationSchedule, EmsAbQuotaNotificationStyle, EmsAbRangeLower, EmsAbRangeUpper, EmsAbRasAccount, EmsAbRasCallbackNumber, EmsAbRasPassword, EmsAbRasPhoneNumber, EmsAbRasPhonebookEntryName, EmsAbRasRemoteSrvrName, EmsAbReferralList, EmsAbRegisteredAddress, EmsAbRemoteBridgeHead, EmsAbRemoteBridgeHeadAddress, EmsAbRemoteOutBhServer, EmsAbRemoteOutBhServerO, EmsAbRemoteSite, EmsAbRemoteSiteO, EmsAbReplicatedObjectVersion, EmsAbReplicationMailMsgSize, EmsAbReplicationSensitivity, EmsAbReplicationStagger, EmsAbReportToOriginator, EmsAbReportToOwner, EmsAbReqSeq, EmsAbRequireSsl, EmsAbResponsibleLocalDxa, EmsAbResponsibleLocalDxaO, EmsAbReturnExactMsgSize, EmsAbRidServer, EmsAbRidServerO, EmsAbRoleOccupant, EmsAbRoleOccupantO, EmsAbRootNewsgroupsFolderId, EmsAbRoutingList, EmsAbRtsCheckpointSize, EmsAbRtsRecoveryTimeout, EmsAbRtsWindowSize, EmsAbRunsOn, EmsAbRunsOnO, EmsAbSSelector, EmsAbSSelectorInbound, EmsAbSchemaFlags, EmsAbSchemaVersion, EmsAbSearchFlags, EmsAbSearchGuide, EmsAbSecurityPolicy, EmsAbSecurityProtocol, EmsAbSeeAlso, EmsAbSeeAlsoO, EmsAbSendEmailMessage, EmsAbSendTnef, EmsAbSerialNumber, EmsAbServer, EmsAbServiceActionFirst, EmsAbServiceActionOther, EmsAbServiceActionSecond, EmsAbServiceRestartDelay, EmsAbServiceRestartMessage, EmsAbSessionDisconnectTimer, EmsAbSiteAffinity, EmsAbSiteFolderGuid, EmsAbSiteFolderServer, EmsAbSiteFolderServerO, EmsAbSiteProxySpace, EmsAbSmimeAlgListNa, EmsAbSmimeAlgListOther, EmsAbSmimeAlgSelectedNa, EmsAbSmimeAlgSelectedOther, EmsAbSpaceLastComputed, EmsAbStreetAddress, EmsAbSubRefs, EmsAbSubRefsO, EmsAbSubSite, EmsAbSubmissionContLength, EmsAbSupportSmimeSignatures, EmsAbSupportedAlgorithms, EmsAbSupportedApplicationContext, EmsAbSupportingStack, EmsAbSupportingStackBl, EmsAbSupportingStackBlO, EmsAbSupportingStackO, EmsAbTSelector, EmsAbTSelectorInbound, EmsAbTargetMtas, EmsAbTelephoneNumber, EmsAbTelephonePersonalPager, EmsAbTeletexTerminalIdentifier, EmsAbTempAssocThreshold, EmsAbTombstoneLifetime, EmsAbTrackingLogPathName, EmsAbTransRetryMins, EmsAbTransTimeoutMins, EmsAbTransferRetryInterval, EmsAbTransferTimeoutNonUrgent, EmsAbTransferTimeoutNormal, EmsAbTransferTimeoutUrgent, EmsAbTranslationTableUsed, EmsAbTransportExpeditedData, EmsAbTrustLevel, EmsAbTurnRequestThreshold, EmsAbTwoWayAlternateFacility, EmsAbType, EmsAbUnauthOrigBl, EmsAbUnauthOrigBlO, EmsAbUseServerValues, EmsAbUseSiteValues, EmsAbUsenetSiteName, EmsAbUserPassword, EmsAbUsnChanged, EmsAbUsnCreated, EmsAbUsnDsaLastObjRemoved, EmsAbUsnIntersite, EmsAbUsnLastObjRem, EmsAbUsnSource, EmsAbViewContainer1, EmsAbViewContainer2, EmsAbViewContainer3, EmsAbViewDefinition, EmsAbViewFlags, EmsAbViewSite, EmsAbVoiceMailFlags, EmsAbVoiceMailGreetings, EmsAbVoiceMailPassword, EmsAbVoiceMailRecordedName, EmsAbVoiceMailRecordingLength, EmsAbVoiceMailSpeed, EmsAbVoiceMailSystemGuid, EmsAbVoiceMailUserId, EmsAbVoiceMailVolume, EmsAbWwwHomePage, EmsAbX121Address, EmsAbX25CallUserDataIncoming, EmsAbX25CallUserDataOutgoing, EmsAbX25FacilitiesDataIncoming, EmsAbX25FacilitiesDataOutgoing, EmsAbX25LeasedLinePort, EmsAbX25LeasedOrSwitched, EmsAbX25RemoteMtaPhone, EmsAbX400AttachmentType, EmsAbX400SelectorSyntax, EmsAbX500AccessControlList, EmsAbX500Nc, EmsAbX500Rdn, EmsAbXmitTimeoutNonUrgent, EmsAbXmitTimeoutNormal, EmsAbXmitTimeoutUrgent, EventsRootFolderEntryid, ExcessStorageUsed, ExtendedAclData, FastTransfer, FavoritesDefaultName, FolderChildCount, FolderDesignFlags, FolderPathname, ForeignId, ForeignReportId, ForeignSubjectId, FreeBusyForLocalSiteEntryid, GwAdminOperations, GwMtsinEntryid, GwMtsoutEntryid, HasModeratorRules, HierarchyServer, HierarchySynchronizer, ImapInternalDate, InTransit, InboundNewsfeedDn, InternetCharset, InternetNewsgroupName, IpmDafEntryid, IpmFavoritesEntryid, IpmPublicFoldersEntryid, IsNewsgroup, IsNewsgroupAnchor, LastAccessTime, LastFullBackup, LastLogoffTime, LastLogonTime, LongtermEntryidFromTable, MessageProcessed, MessageSiteName, MoveToFolderEntryid, MoveToStoreEntryid, MsgBodyId, MtsSubjectId, NewSubsGetAutoAdd, NewsfeedInfo, NewsgroupComponent, NewsgroupRootFolderEntryid, NntpArticleFolderEntryid, NntpControlFolderEntryid, NonIpmSubtreeEntryid, NormalMessageSize, NormalMessageSizeExtended, NormalMsgWAttachCount, NtUserName, OfflineAddrbookEntryid, OfflineFlags, OfflineMessageEntryid, OldestDeletedOn, OriginatorAddr, OriginatorAddrtype, OriginatorEntryid, OriginatorName, OstEncryption, OutboundNewsfeedDn, OverallAgeLimit, OverallMsgAgeLimit, OwaUrl, OwnerCount, P1Content, P1ContentType, PreventMsgCreate, Preview, PreviewUnread, ProfileAbFilesPath, ProfileAddrInfo, ProfileAllpubComment, ProfileAllpubDisplayName, ProfileBindingOrder, ProfileConfigFlags, ProfileConnectFlags, ProfileFavfldComment, ProfileFavfldDisplayName, ProfileHomeServer, ProfileHomeServerAddrs, ProfileHomeServerDn, ProfileMailbox, ProfileMaxRestrict, ProfileMoab, ProfileMoabGuid, ProfileMoabSeq, ProfileOfflineInfo, ProfileOfflineStorePath, ProfileOpenFlags, ProfileOptionsData, ProfileSecureMailbox, ProfileServer, ProfileServerDn, ProfileTransportFlags, ProfileType, ProfileUiState, ProfileUnresolvedName, ProfileUnresolvedServer, ProfileUser, ProfileVersion, PstEncryption, PstPath, PstPwSzOld, PstRememberPw, PublicFolderEntryid, PublishInAddressBook, RecipientNumber, RecipientOnAssocMsgCount, RecipientOnNormalMsgCount, ReplicaList, ReplicaServer, ReplicaVersion, ReplicationAlwaysInterval, ReplicationMessagePriority, ReplicationMsgSize, ReplicationSchedule, ReplicationStyle, ReplyRecipientSmtpProxies, ReportDestinationEntryid, ReportDestinationName, RestrictionCount, RetentionAgeLimit, RuleTriggerHistory, RulesData, RulesTable, ScheduleFolderEntryid, SecureInSite, SecureOrigination, StorageLimitInformation, StorageQuotaLimit, StoreOffline, StoreSlowlink, SubjectTraceInfo, SvrGeneratingQuotaMsg, SynchronizeFlags, SysConfigFolderEntryid, TestLineSpeed, TraceInfo, TransferEnabled, UserName, X400EnvelopeType, AbDefaultDir, AbDefaultPab, AbProviderId, AbProviders, AbSearchPath, AbSearchPathUpdate, AlternateRecipient, AssocContentCount, AttachmentX400Parameters, AuthorizingUsers, BodyCrc, CommonViewsEntryid, ContactAddrtypes, ContactDefaultAddressIndex, ContactEmailAddresses, ContactEntryids, ContactVersion, ContainerModifyVersion, ContentConfidentialityAlgorithmId, ContentCorrelator, ContentIdentifier, ContentIntegrityCheck, ContentLength, ContentReturnRequested, ContentsSortOrder, ControlFlags, ControlId, ControlStructure, ControlType, ConversationKey, ConversionEits, ConversionProhibited, ConversionWithLossProhibited, ConvertedEits, Correlate, CorrelateMtsid, CreateTemplates, CreationVersion, ExCurrentVersion, DefCreateDl, DefCreateMailuser, DefaultProfile, DefaultStore, DefaultViewEntryid, Delegation, DeliveryPoint, Deltax, Deltay, DetailsTable, DiscVal, DiscardReason, DiscloseRecipients, DisclosureOfRecipients, DiscreteValues, DlExpansionHistory, DlExpansionProhibited, ExplicitConversion, FilteringHooks, FinderEntryid, FormCategory, FormCategorySub, FormClsid, FormContactName, FormDesignerGuid, FormDesignerName, FormHidden, FormHostMap, FormMessageBehavior, FormVersion, HeaderFolderEntryid, Icon, IdentityDisplay, IdentityEntryid, IdentitySearchKey, ImplicitConversionProhibited, IncompleteCopy, InternetApproved, InternetArticleNumber, InternetControl, InternetDistribution, InternetFollowupTo, InternetLines, InternetNewsgroups, InternetNntpPath, InternetOrganization, InternetPrecedence, IpmId, IpmOutboxEntryid, IpmOutboxSearchKey, IpmReturnRequested, IpmSentmailEntryid, IpmSentmailSearchKey, IpmSubtreeEntryid, IpmSubtreeSearchKey, IpmWastebasketEntryid, IpmWastebasketSearchKey, Languages, LatestDeliveryTime, MailPermission, MdbProvider, MessageDeliveryId, MessageDownloadTime, MessageSecurityLabel, MessageToken, MiniIcon, ModifyVersion, NewsgroupName, NntpXref, NonReceiptReason, ObsoletedIpms, OriginCheck, OriginalAuthorAddrtype, OriginalAuthorEmailAddress, OriginalAuthorSearchKey, OriginalDisplayName, OriginalEits, OriginalSearchKey, OriginallyIntendedRecipAddrtype, OriginallyIntendedRecipEmailAddress, OriginallyIntendedRecipEntryid, OriginallyIntendedRecipientName, OriginatingMtaCertificate, OriginatorAndDlExpansionHistory, OriginatorCertificate, OriginatorRequestedAlternateRecipient, OriginatorReturnAddress, OwnStoreEntryid, ParentDisplay, PhysicalDeliveryBureauFaxDelivery, PhysicalDeliveryMode, PhysicalDeliveryReportRequest, PhysicalForwardingAddress, PhysicalForwardingAddressRequested, PhysicalForwardingProhibited, PhysicalRenditionAttributes, PostFolderEntries, PostFolderNames, PostReplyDenied, PostReplyFolderEntries, PostReplyFolderNames, Preprocess, PrimaryCapability, ProfileName, ProofOfDelivery, ProofOfDeliveryRequested, ProofOfSubmission, ProofOfSubmissionRequested, ProviderDisplay, ProviderDllName, ProviderOrdinal, ProviderSubmitTime, ProviderUid, ReceiveFolderSettings, RecipientCertificate, RecipientNumberForAdvice, RecipientStatus, RedirectionHistory, RegisteredMailType, RelatedIpms, RemoteProgress, RemoteProgressText, RemoteValidateOk, ReportingDlName, ReportingMtaCertificate, RequestedDeliveryMethod, ResourceFlags, ResourceMethods, ResourcePath, ResourceType, ReturnedIpm, RtfSyncBodyCount, RtfSyncBodyCrc, RtfSyncBodyTag, RtfSyncPrefixCount, RtfSyncTrailingCount, Search, ExSecurity, SentmailEntryid, ServiceDeleteFiles, ServiceDllName, ServiceEntryName, ServiceExtraUids, ServiceName, ServiceSupportFiles, ServiceUid, Services, SpoolerStatus, Status, StatusCode, StatusString, StoreProviders, StoreRecordKey, SubjectIpm, SubmitFlags, Supersedes, TransportKey, TransportProviders, TransportStatus, TypeOfMtsUser, ValidFolderMask, ViewsEntryid, X400ContentType, X400DeferredDeliveryCancel, Xpos, Ypos
     */
    public constructor(
        discriminator?: string,
        name?: string) {
        super();
        this.discriminator = discriminator;
        this.name = name;
    }
}

/**
 * Mapi property with LegacyFreeBusyType value             
 */
export class MapiLegacyFreeBusyPropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiLegacyFreeBusyPropertyDto.attributeTypeMap);
    }

    /**
     * Represents the free/busy status for a calendar event. Enum, available values: Free, Tentative, Busy, Oof, WorkingElsewhere, NoData
     */
    public value: string;
    

    /**
     * Mapi property with LegacyFreeBusyType value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Represents the free/busy status for a calendar event. Enum, available values: Free, Tentative, Busy, Oof, WorkingElsewhere, NoData
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: string) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Represents an Outlook Message format document.             
 */
export class MapiMessageDto extends MapiMessageItemBaseDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "messageBody",
            baseName: "messageBody",
            type: "string",
        },
        {
            name: "clientSubmitTime",
            baseName: "clientSubmitTime",
            type: "Date",
        },
        {
            name: "conversationTopic",
            baseName: "conversationTopic",
            type: "string",
        },
        {
            name: "deliveryTime",
            baseName: "deliveryTime",
            type: "Date",
        },
        {
            name: "displayBcc",
            baseName: "displayBcc",
            type: "string",
        },
        {
            name: "displayCc",
            baseName: "displayCc",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "displayNamePrefix",
            baseName: "displayNamePrefix",
            type: "string",
        },
        {
            name: "displayTo",
            baseName: "displayTo",
            type: "string",
        },
        {
            name: "flags",
            baseName: "flags",
            type: "Array<string>",
        },
        {
            name: "headers",
            baseName: "headers",
            type: "{ [key: string]: string; }",
        },
        {
            name: "internetMessageId",
            baseName: "internetMessageId",
            type: "string",
        },
        {
            name: "messageFormat",
            baseName: "messageFormat",
            type: "string",
        },
        {
            name: "normalizedSubject",
            baseName: "normalizedSubject",
            type: "string",
        },
        {
            name: "readReceiptRequested",
            baseName: "readReceiptRequested",
            type: "boolean",
        },
        {
            name: "replyTo",
            baseName: "replyTo",
            type: "string",
        },
        {
            name: "senderAddressType",
            baseName: "senderAddressType",
            type: "string",
        },
        {
            name: "senderEmailAddress",
            baseName: "senderEmailAddress",
            type: "string",
        },
        {
            name: "senderName",
            baseName: "senderName",
            type: "string",
        },
        {
            name: "senderSmtpAddress",
            baseName: "senderSmtpAddress",
            type: "string",
        },
        {
            name: "sentRepresentingAddressType",
            baseName: "sentRepresentingAddressType",
            type: "string",
        },
        {
            name: "sentRepresentingEmailAddress",
            baseName: "sentRepresentingEmailAddress",
            type: "string",
        },
        {
            name: "sentRepresentingName",
            baseName: "sentRepresentingName",
            type: "string",
        },
        {
            name: "sentRepresentingSmtpAddress",
            baseName: "sentRepresentingSmtpAddress",
            type: "string",
        },
        {
            name: "transportMessageHeaders",
            baseName: "transportMessageHeaders",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiMessageDto.attributeTypeMap);
    }

    /**
     * Message text             
     */
    public messageBody: string;
    
    /**
     * Date and time the message sender submitted a message.             
     */
    public clientSubmitTime: Date;
    
    /**
     * Topic of the first message in a conversation thread.             
     */
    public conversationTopic: string;
    
    /**
     * Date and time a message was delivered.             
     */
    public deliveryTime: Date;
    
    /**
     * List of the display names of any blind carbon copy (BCC) message recipients, separated by semicolons (;).             
     */
    public displayBcc: string;
    
    /**
     * List of the display names of any carbon copy (CC) message recipients, separated by semicolons (;).             
     */
    public displayCc: string;
    
    /**
     * Display name for the message.             
     */
    public displayName: string;
    
    /**
     * Prefix of the display name.             
     */
    public displayNamePrefix: string;
    
    /**
     * List of the display names of the primary (To) message recipients, separated by semicolons (;).             
     */
    public displayTo: string;
    
    /**
     * Message flags.              Items: Mapi message flags. Enum, available values: MsgFlagZero, MsgFlagRead, MsgFlagUnmodified, MsgFlagSubmit, MsgFlagUnsent, MsgFlagHasAttach, MsgFlagFromMe, MsgFlagAssociated, MsgFlagResend, MsgFlagNotifyRead, MsgFlagNotifyUnread, MsgFlagEverRead, MsgFlagOriginX400, MsgFlagOriginInternet, MsgFlagOriginMiscExt
     */
    public flags: Array<string>;
    
    /**
     * Transport message headers             
     */
    public headers: { [key: string]: string; };
    
    /**
     * Internet message id of the message.             
     */
    public internetMessageId: string;
    
    /**
     * Represents outlook message format. Enum, available values: Ascii, Unicode
     */
    public messageFormat: string;
    
    /**
     * Normalized subject of the message.             
     */
    public normalizedSubject: string;
    
    /**
     * Value indicating whether the read receipt is requested.
     */
    public readReceiptRequested: boolean;
    
    /**
     * Reply to names.
     */
    public replyTo: string;
    
    /**
     * Message sender's e-mail address type.
     */
    public senderAddressType: string;
    
    /**
     * Message sender's e-mail address.
     */
    public senderEmailAddress: string;
    
    /**
     * Message sender's display name.
     */
    public senderName: string;
    
    /**
     * Message sender's e-mail address.
     */
    public senderSmtpAddress: string;
    
    /**
     * Address type for the messaging user represented by the sender.
     */
    public sentRepresentingAddressType: string;
    
    /**
     * E-mail address for the messaging user represented by the sender.
     */
    public sentRepresentingEmailAddress: string;
    
    /**
     * Display name for the messaging user represented by the sender.
     */
    public sentRepresentingName: string;
    
    /**
     * E-mail address for the messaging user represented by the sender.
     */
    public sentRepresentingSmtpAddress: string;
    
    /**
     * Transport-specific message envelope information.
     */
    public transportMessageHeaders: string;
    

    /**
     * Represents an Outlook Message format document.             
     * @param attachments Message item attachments.             
     * @param billing Billing information associated with an item.             
     * @param body Message text.             
     * @param bodyHtml Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
     * @param bodyRtf RTF formatted message text.             
     * @param bodyType The content type of message body. Enum, available values: PlainText, Html, Rtf
     * @param categories Contains keywords or categories for the message object.             
     * @param companies Contains the names of the companies that are associated with an item.             
     * @param itemId The item id, uses with a server.             
     * @param messageClass Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
     * @param mileage Contains the mileage information that is associated with an item.             
     * @param recipients Recipients of the message.             
     * @param sensitivity Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential
     * @param subject Subject of the message.             
     * @param subjectPrefix Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
     * @param properties List of MAPI properties             
     * @param discriminator 
     * @param messageBody Message text             
     * @param clientSubmitTime Date and time the message sender submitted a message.             
     * @param conversationTopic Topic of the first message in a conversation thread.             
     * @param deliveryTime Date and time a message was delivered.             
     * @param displayBcc List of the display names of any blind carbon copy (BCC) message recipients, separated by semicolons (;).             
     * @param displayCc List of the display names of any carbon copy (CC) message recipients, separated by semicolons (;).             
     * @param displayName Display name for the message.             
     * @param displayNamePrefix Prefix of the display name.             
     * @param displayTo List of the display names of the primary (To) message recipients, separated by semicolons (;).             
     * @param flags Message flags.             
     * @param headers Transport message headers             
     * @param internetMessageId Internet message id of the message.             
     * @param messageFormat Represents outlook message format. Enum, available values: Ascii, Unicode
     * @param normalizedSubject Normalized subject of the message.             
     * @param readReceiptRequested Value indicating whether the read receipt is requested.
     * @param replyTo Reply to names.
     * @param senderAddressType Message sender's e-mail address type.
     * @param senderEmailAddress Message sender's e-mail address.
     * @param senderName Message sender's display name.
     * @param senderSmtpAddress Message sender's e-mail address.
     * @param sentRepresentingAddressType Address type for the messaging user represented by the sender.
     * @param sentRepresentingEmailAddress E-mail address for the messaging user represented by the sender.
     * @param sentRepresentingName Display name for the messaging user represented by the sender.
     * @param sentRepresentingSmtpAddress E-mail address for the messaging user represented by the sender.
     * @param transportMessageHeaders Transport-specific message envelope information.
     */
    public constructor(
        attachments?: Array<MapiAttachmentDto>,
        billing?: string,
        body?: string,
        bodyHtml?: string,
        bodyRtf?: string,
        bodyType?: string,
        categories?: Array<string>,
        companies?: Array<string>,
        itemId?: string,
        messageClass?: string,
        mileage?: string,
        recipients?: Array<MapiRecipientDto>,
        sensitivity?: string,
        subject?: string,
        subjectPrefix?: string,
        properties?: Array<MapiPropertyDto>,
        discriminator?: string,
        messageBody?: string,
        clientSubmitTime?: Date,
        conversationTopic?: string,
        deliveryTime?: Date,
        displayBcc?: string,
        displayCc?: string,
        displayName?: string,
        displayNamePrefix?: string,
        displayTo?: string,
        flags?: Array<string>,
        headers?: { [key: string]: string; },
        internetMessageId?: string,
        messageFormat?: string,
        normalizedSubject?: string,
        readReceiptRequested?: boolean,
        replyTo?: string,
        senderAddressType?: string,
        senderEmailAddress?: string,
        senderName?: string,
        senderSmtpAddress?: string,
        sentRepresentingAddressType?: string,
        sentRepresentingEmailAddress?: string,
        sentRepresentingName?: string,
        sentRepresentingSmtpAddress?: string,
        transportMessageHeaders?: string) {
        super();
        this.attachments = attachments;
        this.billing = billing;
        this.body = body;
        this.bodyHtml = bodyHtml;
        this.bodyRtf = bodyRtf;
        this.bodyType = bodyType;
        this.categories = categories;
        this.companies = companies;
        this.itemId = itemId;
        this.messageClass = messageClass;
        this.mileage = mileage;
        this.recipients = recipients;
        this.sensitivity = sensitivity;
        this.subject = subject;
        this.subjectPrefix = subjectPrefix;
        this.properties = properties;
        this.discriminator = discriminator;
        this.messageBody = messageBody;
        this.clientSubmitTime = clientSubmitTime;
        this.conversationTopic = conversationTopic;
        this.deliveryTime = deliveryTime;
        this.displayBcc = displayBcc;
        this.displayCc = displayCc;
        this.displayName = displayName;
        this.displayNamePrefix = displayNamePrefix;
        this.displayTo = displayTo;
        this.flags = flags;
        this.headers = headers;
        this.internetMessageId = internetMessageId;
        this.messageFormat = messageFormat;
        this.normalizedSubject = normalizedSubject;
        this.readReceiptRequested = readReceiptRequested;
        this.replyTo = replyTo;
        this.senderAddressType = senderAddressType;
        this.senderEmailAddress = senderEmailAddress;
        this.senderName = senderName;
        this.senderSmtpAddress = senderSmtpAddress;
        this.sentRepresentingAddressType = sentRepresentingAddressType;
        this.sentRepresentingEmailAddress = sentRepresentingEmailAddress;
        this.sentRepresentingName = sentRepresentingName;
        this.sentRepresentingSmtpAddress = sentRepresentingSmtpAddress;
        this.transportMessageHeaders = transportMessageHeaders;
    }
}

/**
 * Mapi property with Multiple Integer values             
 */
export class MapiMultiIntPropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "values",
            baseName: "values",
            type: "Array<number>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiMultiIntPropertyDto.attributeTypeMap);
    }

    /**
     * Property values             
     */
    public values: Array<number>;
    

    /**
     * Mapi property with Multiple Integer values             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param values Property values             
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        values?: Array<number>) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.values = values;
    }
}

/**
 * Mapi property with PhysicalAddressIndexType value             
 */
export class MapiPhysicalAddressIndexPropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiPhysicalAddressIndexPropertyDto.attributeTypeMap);
    }

    /**
     * Identifies the display types for physical addresses. Enum, available values: None, Home, Business, Other
     */
    public value: string;
    

    /**
     * Mapi property with PhysicalAddressIndexType value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Identifies the display types for physical addresses. Enum, available values: None, Home, Business, Other
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: string) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Mapi pid property descriptor base class             
 */
export class MapiPidPropertyDescriptor extends MapiPropertyDescriptor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "canonicalName",
            baseName: "canonicalName",
            type: "string",
        },
        {
            name: "dataType",
            baseName: "dataType",
            type: "string",
        },
        {
            name: "multipleValuesDataType",
            baseName: "multipleValuesDataType",
            type: "boolean",
        },
        {
            name: "name",
            baseName: "name",
            type: "string",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiPidPropertyDescriptor.attributeTypeMap);
    }

    /**
     * The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
     */
    public canonicalName: string;
    
    /**
     * [MS-OXCDATA]: Data Structures Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
     */
    public dataType: string;
    
    /**
     * Indicates if data type contains of multiple values             
     */
    public multipleValuesDataType: boolean;
    
    /**
     * A string that identifies the property             
     */
    public name: string;
    

    get discriminator(): string {
        return this.constructor.name;
    }

    set discriminator(_newType: string) {
        /* do nothing */
    }
    

    /**
     * Mapi pid property descriptor base class             
     * @param discriminator 
     * @param canonicalName The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
     * @param dataType [MS-OXCDATA]: Data Structures Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
     * @param multipleValuesDataType Indicates if data type contains of multiple values             
     * @param name A string that identifies the property             
     */
    public constructor(
        discriminator?: string,
        canonicalName?: string,
        dataType?: string,
        multipleValuesDataType?: boolean,
        name?: string) {
        super();
        this.discriminator = discriminator;
        this.canonicalName = canonicalName;
        this.dataType = dataType;
        this.multipleValuesDataType = multipleValuesDataType;
        this.name = name;
    }
}

/**
 * Mapi property with response type value             
 */
export class MapiResponseTypePropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiResponseTypePropertyDto.attributeTypeMap);
    }

    /**
     * Represents the types of recipient responses that are received for a meeting. Enum, available values: Unknown, Organizer, Tentative, Accept, Decline, NoResponseReceived
     */
    public value: string;
    

    /**
     * Mapi property with response type value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Represents the types of recipient responses that are received for a meeting. Enum, available values: Unknown, Organizer, Tentative, Accept, Decline, NoResponseReceived
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: string) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Mapi property with string value             
 */
export class MapiStringPropertyDto extends MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiStringPropertyDto.attributeTypeMap);
    }

    /**
     * Property value             
     */
    public value: string;
    

    /**
     * Mapi property with string value             
     * @param descriptor Property descriptor             
     * @param discriminator 
     * @param value Property value             
     */
    public constructor(
        descriptor?: MapiPropertyDescriptor,
        discriminator?: string,
        value?: string) {
        super();
        this.descriptor = descriptor;
        this.discriminator = discriminator;
        this.value = value;
    }
}

/**
 * Monthly recurrence pattern.             
 */
export class MonthlyRecurrencePatternDto extends RecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startDay",
            baseName: "startDay",
            type: "string",
        },
        {
            name: "startOffset",
            baseName: "startOffset",
            type: "number",
        },
        {
            name: "startPosition",
            baseName: "startPosition",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MonthlyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     */
    public startDay: string;
    
    /**
     * Start offset.             
     */
    public startOffset: number;
    
    /**
     * Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public startPosition: string;
    

    /**
     * Monthly recurrence pattern.             
     * @param interval Number of recurrence units.             
     * @param occurs Number of occurrences of the recurrence pattern.             
     * @param endDate End date.             
     * @param weekStart Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param discriminator 
     * @param startDay Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param startOffset Start offset.             
     * @param startPosition Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public constructor(
        interval?: number,
        occurs?: number,
        endDate?: Date,
        weekStart?: string,
        discriminator?: string,
        startDay?: string,
        startOffset?: number,
        startPosition?: string) {
        super();
        this.interval = interval;
        this.occurs = occurs;
        this.endDate = endDate;
        this.weekStart = weekStart;
        this.discriminator = discriminator;
        this.startDay = startDay;
        this.startOffset = startOffset;
        this.startPosition = startPosition;
    }
}

/**
 * Move email message request             
 */
export class MoveEmailMessageRq extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "messageId",
            baseName: "messageId",
            type: "string",
        },
        {
            name: "sourceFolder",
            baseName: "sourceFolder",
            type: "string",
        },
        {
            name: "destinationFolder",
            baseName: "destinationFolder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MoveEmailMessageRq.attributeTypeMap);
    }

    /**
     * Message identifier             
     */
    public messageId: string;
    
    /**
     * Message source folder. Account root folder by default             
     */
    public sourceFolder: string;
    
    /**
     * Folder in email account to move message to             
     */
    public destinationFolder: string;
    

    /**
     * Move email message request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param messageId Message identifier             
     * @param sourceFolder Message source folder. Account root folder by default             
     * @param destinationFolder Folder in email account to move message to             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        messageId?: string,
        sourceFolder?: string,
        destinationFolder?: string) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.messageId = messageId;
        this.sourceFolder = sourceFolder;
        this.destinationFolder = destinationFolder;
    }
}

/**
 * Email thread move request             
 */
export class MoveEmailThreadRq extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "destinationFolder",
            baseName: "destinationFolder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MoveEmailThreadRq.attributeTypeMap);
    }

    /**
     * Email account folder to move thread to             
     */
    public destinationFolder: string;
    

    /**
     * Email thread move request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param destinationFolder Email account folder to move thread to             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        destinationFolder?: string) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.destinationFolder = destinationFolder;
    }
}

/**
 * Simple property object             
 */
export class PrimitiveObject extends BaseObject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PrimitiveObject.attributeTypeMap);
    }

    /**
     * Property value             
     */
    public value: string;
    

    /**
     * Simple property object             
     * @param name Gets or sets the name of an object.             
     * @param type Property type. Used for deserialization purposes             
     * @param value Property value             
     */
    public constructor(
        name?: string,
        type?: string,
        value?: string) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
    }
}

/**
 * Save email account settings with login/password authentication request             
 */
export class SaveEmailAccountRequest extends EmailAccountRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveEmailAccountRequest.attributeTypeMap);
    }

    /**
     * Email account password             
     */
    public password: string;
    

    /**
     * Save email account settings with login/password authentication request             
     * @param host Email account host             
     * @param port Email account port             
     * @param login Email account login             
     * @param securityOptions Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     * @param protocolType Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     * @param description Email account description             
     * @param storageFile A storage file location info to store email account             
     * @param password Email account password             
     */
    public constructor(
        host?: string,
        port?: number,
        login?: string,
        securityOptions?: string,
        protocolType?: string,
        description?: string,
        storageFile?: StorageFileLocation,
        password?: string) {
        super();
        this.host = host;
        this.port = port;
        this.login = login;
        this.securityOptions = securityOptions;
        this.protocolType = protocolType;
        this.description = description;
        this.storageFile = storageFile;
        this.password = password;
    }
}

/**
 * Save email account settings with OAuth request             
 */
export class SaveOAuthEmailAccountRequest extends EmailAccountRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "clientId",
            baseName: "clientId",
            type: "string",
        },
        {
            name: "clientSecret",
            baseName: "clientSecret",
            type: "string",
        },
        {
            name: "refreshToken",
            baseName: "refreshToken",
            type: "string",
        },
        {
            name: "requestUrl",
            baseName: "requestUrl",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveOAuthEmailAccountRequest.attributeTypeMap);
    }

    /**
     * OAuth client identifier             
     */
    public clientId: string;
    
    /**
     * OAuth client secret             
     */
    public clientSecret: string;
    
    /**
     * OAuth refresh token             
     */
    public refreshToken: string;
    
    /**
     * The url to obtain access token. If not specified, will try to discover from email account host.             
     */
    public requestUrl: string;
    

    /**
     * Save email account settings with OAuth request             
     * @param host Email account host             
     * @param port Email account port             
     * @param login Email account login             
     * @param securityOptions Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     * @param protocolType Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     * @param description Email account description             
     * @param storageFile A storage file location info to store email account             
     * @param clientId OAuth client identifier             
     * @param clientSecret OAuth client secret             
     * @param refreshToken OAuth refresh token             
     * @param requestUrl The url to obtain access token. If not specified, will try to discover from email account host.             
     */
    public constructor(
        host?: string,
        port?: number,
        login?: string,
        securityOptions?: string,
        protocolType?: string,
        description?: string,
        storageFile?: StorageFileLocation,
        clientId?: string,
        clientSecret?: string,
        refreshToken?: string,
        requestUrl?: string) {
        super();
        this.host = host;
        this.port = port;
        this.login = login;
        this.securityOptions = securityOptions;
        this.protocolType = protocolType;
        this.description = description;
        this.storageFile = storageFile;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.refreshToken = refreshToken;
        this.requestUrl = requestUrl;
    }
}

/**
 * Send email file request             
 */
export class SendEmailBaseRequest extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emailFile",
            baseName: "emailFile",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SendEmailBaseRequest.attributeTypeMap);
    }

    /**
     * Email document (*.eml) file location in storage             
     */
    public emailFile: any;
    

    /**
     * Send email file request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param emailFile Email document (*.eml) file location in storage             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        emailFile?: any) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.emailFile = emailFile;
    }
}

/**
 * Send email MIME request             
 */
export class SendEmailMimeBaseRequest extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "base64MimeMessage",
            baseName: "base64MimeMessage",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SendEmailMimeBaseRequest.attributeTypeMap);
    }

    /**
     * Email document serialized as MIME             
     */
    public base64MimeMessage: string;
    

    /**
     * Send email MIME request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param base64MimeMessage Email document serialized as MIME             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        base64MimeMessage?: string) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.base64MimeMessage = base64MimeMessage;
    }
}

/**
 * Send email model request             
 */
export class SendEmailModelRq extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "message",
            baseName: "message",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SendEmailModelRq.attributeTypeMap);
    }

    /**
     * Message to send             
     */
    public message: any;
    

    /**
     * Send email model request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param message Message to send             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        message?: any) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.message = message;
    }
}

/**
 * Set message is read request             
 */
export class SetMessageReadFlagAccountBaseRequest extends AccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "messageId",
            baseName: "messageId",
            type: "string",
        },
        {
            name: "isRead",
            baseName: "isRead",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SetMessageReadFlagAccountBaseRequest.attributeTypeMap);
    }

    /**
     * Message identifier             
     */
    public messageId: string;
    
    /**
     * Specifies that message should be marked read or unread             
     */
    public isRead: boolean;
    

    /**
     * Set message is read request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param messageId Message identifier             
     * @param isRead Specifies that message should be marked read or unread             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        messageId?: string,
        isRead?: boolean) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.messageId = messageId;
        this.isRead = isRead;
    }
}

/**
 * A storage file location information             
 */
export class StorageFileLocation extends StorageFolderLocation {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageFileLocation.attributeTypeMap);
    }

    /**
     * A file name in storage             
     */
    public fileName: string;
    

    /**
     * A storage file location information             
     * @param storage A storage name             
     * @param folderPath A path to a folder in specified storage             
     * @param fileName A file name in storage             
     */
    public constructor(
        storage?: string,
        folderPath?: string,
        fileName?: string) {
        super();
        this.storage = storage;
        this.folderPath = folderPath;
        this.fileName = fileName;
    }
}

/**
 * Represents the regenerating recurrence pattern that specifies how many days, weeks, months or years after the completion of the current task the next occurrence will be due.             
 */
export class TaskRegeneratingPatternDto extends RecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "regeneratingType",
            baseName: "regeneratingType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TaskRegeneratingPatternDto.attributeTypeMap);
    }

    /**
     * Enumerates the types of regenerating pattern. Enum, available values: Daily, Weekly, Monthly, Yearly
     */
    public regeneratingType: string;
    

    /**
     * Represents the regenerating recurrence pattern that specifies how many days, weeks, months or years after the completion of the current task the next occurrence will be due.             
     * @param interval Number of recurrence units.             
     * @param occurs Number of occurrences of the recurrence pattern.             
     * @param endDate End date.             
     * @param weekStart Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param discriminator 
     * @param regeneratingType Enumerates the types of regenerating pattern. Enum, available values: Daily, Weekly, Monthly, Yearly
     */
    public constructor(
        interval?: number,
        occurs?: number,
        endDate?: Date,
        weekStart?: string,
        discriminator?: string,
        regeneratingType?: string) {
        super();
        this.interval = interval;
        this.occurs = occurs;
        this.endDate = endDate;
        this.weekStart = weekStart;
        this.discriminator = discriminator;
        this.regeneratingType = regeneratingType;
    }
}

/**
 * Weekly recurrence pattern.             
 */
export class WeeklyRecurrencePatternDto extends RecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startDays",
            baseName: "startDays",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WeeklyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Start days              Items: Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     */
    public startDays: Array<string>;
    

    /**
     * Weekly recurrence pattern.             
     * @param interval Number of recurrence units.             
     * @param occurs Number of occurrences of the recurrence pattern.             
     * @param endDate End date.             
     * @param weekStart Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param discriminator 
     * @param startDays Start days             
     */
    public constructor(
        interval?: number,
        occurs?: number,
        endDate?: Date,
        weekStart?: string,
        discriminator?: string,
        startDays?: Array<string>) {
        super();
        this.interval = interval;
        this.occurs = occurs;
        this.endDate = endDate;
        this.weekStart = weekStart;
        this.discriminator = discriminator;
        this.startDays = startDays;
    }
}

/**
 * Yearly recurrence pattern.             
 */
export class YearlyRecurrencePatternDto extends RecurrencePatternDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startDay",
            baseName: "startDay",
            type: "string",
        },
        {
            name: "startMonth",
            baseName: "startMonth",
            type: "string",
        },
        {
            name: "startOffset",
            baseName: "startOffset",
            type: "number",
        },
        {
            name: "startPosition",
            baseName: "startPosition",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(YearlyRecurrencePatternDto.attributeTypeMap);
    }

    /**
     * Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     */
    public startDay: string;
    
    /**
     * Represents a calendar month. Enum, available values: None, January, February, March, April, May, June, July, August, September, October, November, December
     */
    public startMonth: string;
    
    /**
     * Start offset.             
     */
    public startOffset: number;
    
    /**
     * Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public startPosition: string;
    

    /**
     * Yearly recurrence pattern.             
     * @param interval Number of recurrence units.             
     * @param occurs Number of occurrences of the recurrence pattern.             
     * @param endDate End date.             
     * @param weekStart Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param discriminator 
     * @param startDay Represents the day of the week. Enum, available values: None, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Day, WeekDay, WeekendDay
     * @param startMonth Represents a calendar month. Enum, available values: None, January, February, March, April, May, June, July, August, September, October, November, December
     * @param startOffset Start offset.             
     * @param startPosition Day positions, typically found in a month. Enum, available values: None, First, Second, Third, Fourth, Last
     */
    public constructor(
        interval?: number,
        occurs?: number,
        endDate?: Date,
        weekStart?: string,
        discriminator?: string,
        startDay?: string,
        startMonth?: string,
        startOffset?: number,
        startPosition?: string) {
        super();
        this.interval = interval;
        this.occurs = occurs;
        this.endDate = endDate;
        this.weekStart = weekStart;
        this.discriminator = discriminator;
        this.startDay = startDay;
        this.startMonth = startMonth;
        this.startOffset = startOffset;
        this.startPosition = startPosition;
    }
}

/**
 * Parse business card images from Storage request             
 */
export class AiBcrParseStorageRq extends AiBcrStorageImageRq {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "outFolder",
            baseName: "outFolder",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AiBcrParseStorageRq.attributeTypeMap);
    }

    /**
     * Parse output folder location on storage             
     */
    public outFolder: any;
    

    /**
     * Parse business card images from Storage request             
     * @param options Recognition options             
     * @param images List of images with business cards             
     * @param outFolder Parse output folder location on storage             
     */
    public constructor(
        options?: AiBcrOptions,
        images?: Array<AiBcrImageStorageFile>,
        outFolder?: any) {
        super();
        this.options = options;
        this.images = images;
        this.outFolder = outFolder;
    }
}

/**
 * Append email from storage file to account request             
 */
export class AppendEmailBaseRequest extends AppendEmailAccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emailFile",
            baseName: "emailFile",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AppendEmailBaseRequest.attributeTypeMap);
    }

    /**
     * Email document file location in storage             
     */
    public emailFile: any;
    

    /**
     * Append email from storage file to account request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param folder Email account folder to store a message             
     * @param markAsSent Mark message as sent             
     * @param emailFile Email document file location in storage             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string,
        markAsSent?: boolean,
        emailFile?: any) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.folder = folder;
        this.markAsSent = markAsSent;
        this.emailFile = emailFile;
    }
}

/**
 * Append email from MIME string to account request             
 */
export class AppendEmailMimeBaseRequest extends AppendEmailAccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "base64MimeMessage",
            baseName: "base64MimeMessage",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AppendEmailMimeBaseRequest.attributeTypeMap);
    }

    /**
     * Email document serialized as MIME string             
     */
    public base64MimeMessage: string;
    

    /**
     * Append email from MIME string to account request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param folder Email account folder to store a message             
     * @param markAsSent Mark message as sent             
     * @param base64MimeMessage Email document serialized as MIME string             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string,
        markAsSent?: boolean,
        base64MimeMessage?: string) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.folder = folder;
        this.markAsSent = markAsSent;
        this.base64MimeMessage = base64MimeMessage;
    }
}

/**
 * Append email request             
 */
export class AppendEmailModelRq extends AppendEmailAccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "message",
            baseName: "message",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AppendEmailModelRq.attributeTypeMap);
    }

    /**
     * Email document             
     */
    public message: any;
    

    /**
     * Append email request             
     * @param firstAccount First account storage file name             
     * @param secondAccount Additional email account (for example, FirstAccount could be IMAP, and second one could be SMTP)             
     * @param storageFolder Storage folder location of account files             
     * @param folder Email account folder to store a message             
     * @param markAsSent Mark message as sent             
     * @param message Email document             
     */
    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string,
        markAsSent?: boolean,
        message?: any) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.folder = folder;
        this.markAsSent = markAsSent;
        this.message = message;
    }
}

/**
 * Property identified by an unsigned 32-bit quantity along with a property set             
 */
export class MapiPidLidPropertyDescriptor extends MapiPidPropertyDescriptor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "longId",
            baseName: "longId",
            type: "number",
        },
        {
            name: "propertySet",
            baseName: "propertySet",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiPidLidPropertyDescriptor.attributeTypeMap);
    }

    /**
     * An unsigned 32-bit quantity that, along with the property set, identifies a named property.             
     */
    public longId: number;
    
    /**
     * A GUID that identifies a group of properties with a similar purpose.             
     */
    public propertySet: string;
    

    /**
     * Property identified by an unsigned 32-bit quantity along with a property set             
     * @param discriminator 
     * @param canonicalName The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
     * @param dataType [MS-OXCDATA]: Data Structures Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
     * @param multipleValuesDataType Indicates if data type contains of multiple values             
     * @param name A string that identifies the property             
     * @param longId An unsigned 32-bit quantity that, along with the property set, identifies a named property.             
     * @param propertySet A GUID that identifies a group of properties with a similar purpose.             
     */
    public constructor(
        discriminator?: string,
        canonicalName?: string,
        dataType?: string,
        multipleValuesDataType?: boolean,
        name?: string,
        longId?: number,
        propertySet?: string) {
        super();
        this.discriminator = discriminator;
        this.canonicalName = canonicalName;
        this.dataType = dataType;
        this.multipleValuesDataType = multipleValuesDataType;
        this.name = name;
        this.longId = longId;
        this.propertySet = propertySet;
    }
}

/**
 * Property identified by a string name along with a property set             
 */
export class MapiPidNamePropertyDescriptor extends MapiPidPropertyDescriptor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "propertySet",
            baseName: "propertySet",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiPidNamePropertyDescriptor.attributeTypeMap);
    }

    /**
     * A GUID that identifies a group of properties with a similar purpose.             
     */
    public propertySet: string;
    

    /**
     * Property identified by a string name along with a property set             
     * @param discriminator 
     * @param canonicalName The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
     * @param dataType [MS-OXCDATA]: Data Structures Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
     * @param multipleValuesDataType Indicates if data type contains of multiple values             
     * @param name A string that identifies the property             
     * @param propertySet A GUID that identifies a group of properties with a similar purpose.             
     */
    public constructor(
        discriminator?: string,
        canonicalName?: string,
        dataType?: string,
        multipleValuesDataType?: boolean,
        name?: string,
        propertySet?: string) {
        super();
        this.discriminator = discriminator;
        this.canonicalName = canonicalName;
        this.dataType = dataType;
        this.multipleValuesDataType = multipleValuesDataType;
        this.name = name;
        this.propertySet = propertySet;
    }
}

/**
 * A property that is defined by a 16-bit property ID and a 16-bit property type. The property ID for a tagged property is in the range 0x001 - 0x7FFF. Property IDs in the range 0x8000 - 0x8FFF are reserved for assignment to named properties             
 */
export class MapiPidTagPropertyDescriptor extends MapiPidPropertyDescriptor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "number",
        },
        {
            name: "tag",
            baseName: "tag",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiPidTagPropertyDescriptor.attributeTypeMap);
    }

    /**
     * An unsigned 16-bit quantity that identifies a tagged property. Property IDs are not necessarily unique. With the exception of property IDs in the range from 0x6800 to 0x7BFF, the combination of property ID and data type are unique. Property IDs in the range from 0x6800 to 0x7BFF are defined by the message class.             
     */
    public id: number;
    
    /**
     * A property tag is a 32-bit number that contains a unique property identifier in bits 16 through 31 and a property type in bits 0 through 15.             
     */
    public tag: number;
    

    /**
     * A property that is defined by a 16-bit property ID and a 16-bit property type. The property ID for a tagged property is in the range 0x001 - 0x7FFF. Property IDs in the range 0x8000 - 0x8FFF are reserved for assignment to named properties             
     * @param discriminator 
     * @param canonicalName The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
     * @param dataType [MS-OXCDATA]: Data Structures Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
     * @param multipleValuesDataType Indicates if data type contains of multiple values             
     * @param name A string that identifies the property             
     * @param id An unsigned 16-bit quantity that identifies a tagged property. Property IDs are not necessarily unique. With the exception of property IDs in the range from 0x6800 to 0x7BFF, the combination of property ID and data type are unique. Property IDs in the range from 0x6800 to 0x7BFF are defined by the message class.             
     * @param tag A property tag is a 32-bit number that contains a unique property identifier in bits 16 through 31 and a property type in bits 0 through 15.             
     */
    public constructor(
        discriminator?: string,
        canonicalName?: string,
        dataType?: string,
        multipleValuesDataType?: boolean,
        name?: string,
        id?: number,
        tag?: number) {
        super();
        this.discriminator = discriminator;
        this.canonicalName = canonicalName;
        this.dataType = dataType;
        this.multipleValuesDataType = multipleValuesDataType;
        this.name = name;
        this.id = id;
        this.tag = tag;
    }
}

const enumsMap = {
};

const typeMap = {
            AccountBaseRequest,
            AddAttachmentRequest,
            AiBcrImage,
            AiBcrOcrData,
            AiBcrOcrDataPart,
            AiBcrOptions,
            AiBcrRq,
            AiNameComponent,
            AiNameCulturalContext,
            AiNameExtracted,
            AiNameExtractedComponent,
            AiNameFormatted,
            AiNameGenderHypothesis,
            AiNameMatchResult,
            AiNameMismatch,
            AiNameParsedRq,
            AiNameWeighted,
            AiNameWeightedVariants,
            AssociatedPerson,
            AttachmentBase,
            BaseObject,
            CalendarDto,
            CalendarDtoAlternateRq,
            CalendarReminder,
            ContactDto,
            ContactPhoto,
            ContentType,
            ContentTypeParameter,
            CreateEmailRequest,
            CustomerEvent,
            DiscUsage,
            DiscoverEmailConfigRq,
            EmailAccountConfig,
            EmailAccountRequest,
            EmailAddress,
            EmailClientAccount,
            EmailClientAccountCredentials,
            EmailClientMultiAccount,
            EmailDocument,
            EmailDocumentResponse,
            EmailDto,
            EmailProperties,
            EmailProperty,
            EmailPropertyResponse,
            EmailThread,
            EnumWithCustomOfAssociatedPersonCategory,
            EnumWithCustomOfEmailAddressCategory,
            EnumWithCustomOfEventCategory,
            EnumWithCustomOfInstantMessengerCategory,
            EnumWithCustomOfPhoneNumberCategory,
            EnumWithCustomOfPostalAddressCategory,
            EnumWithCustomOfUrlCategory,
            ErrorDetails,
            FileVersions,
            FilesList,
            FilesUploadResult,
            HierarchicalObjectRequest,
            HierarchicalObjectResponse,
            InstantMessengerAddress,
            Link,
            ListResponseOfAiBcrOcrData,
            ListResponseOfAiNameComponent,
            ListResponseOfAiNameExtracted,
            ListResponseOfAiNameGenderHypothesis,
            ListResponseOfContactDto,
            ListResponseOfEmailAccountConfig,
            ListResponseOfEmailDto,
            ListResponseOfEmailThread,
            ListResponseOfHierarchicalObject,
            ListResponseOfHierarchicalObjectResponse,
            ListResponseOfMailServerFolder,
            ListResponseOfStorageFileLocation,
            ListResponseOfStorageModelOfCalendarDto,
            ListResponseOfStorageModelOfContactDto,
            ListResponseOfStorageModelOfEmailDto,
            ListResponseOfString,
            MailAddress,
            MailServerFolder,
            MapiAttachmentDto,
            MapiCalendarAttendeesDto,
            MapiCalendarEventRecurrenceDto,
            MapiCalendarExceptionInfoDto,
            MapiCalendarRecurrencePatternDto,
            MapiCalendarTimeZoneDto,
            MapiCalendarTimeZoneInfoDto,
            MapiCalendarTimeZoneRuleDto,
            MapiContactElectronicAddressDto,
            MapiContactElectronicAddressPropertySetDto,
            MapiContactEventPropertySetDto,
            MapiContactNamePropertySetDto,
            MapiContactOtherPropertySetDto,
            MapiContactPersonalInfoPropertySetDto,
            MapiContactPhysicalAddressDto,
            MapiContactPhysicalAddressPropertySetDto,
            MapiContactProfessionalPropertySetDto,
            MapiContactTelephonePropertySetDto,
            MapiElectronicAddressDto,
            MapiMessageItemBaseDto,
            MapiPropertyDescriptor,
            MapiPropertyDto,
            MapiRecipientDto,
            MimeResponse,
            ModelError,
            NameValuePair,
            ObjectExist,
            PhoneNumber,
            PostalAddress,
            RecurrencePatternDto,
            ReminderAttendee,
            ReminderTrigger,
            SetEmailPropertyRequest,
            StorageExist,
            StorageFile,
            StorageFileRqOfEmailClientAccount,
            StorageFileRqOfEmailClientMultiAccount,
            StorageFolderLocation,
            StorageModelOfCalendarDto,
            StorageModelOfContactDto,
            StorageModelOfEmailDto,
            StorageModelRqOfCalendarDto,
            StorageModelRqOfContactDto,
            StorageModelRqOfEmailDto,
            StorageModelRqOfMapiCalendarDto,
            StorageModelRqOfMapiContactDto,
            StorageModelRqOfMapiMessageDto,
            Url,
            ValueResponse,
            ValueTOfBoolean,
            AiBcrBase64Image,
            AiBcrBase64Rq,
            AiBcrImageStorageFile,
            AiBcrParseOcrDataRq,
            AiBcrStorageImageRq,
            AiNameParsedMatchRq,
            AlternateView,
            AppendEmailAccountBaseRequest,
            Attachment,
            CalendarDtoList,
            ContactDtoList,
            CreateFolderBaseRequest,
            DailyRecurrencePatternDto,
            DeleteEmailThreadAccountRq,
            DeleteFolderBaseRequest,
            DeleteMessageBaseRequest,
            DiscoverEmailConfigOauth,
            DiscoverEmailConfigPassword,
            EmailAccountConfigList,
            EmailClientAccountOauthCredentials,
            EmailClientAccountPasswordCredentials,
            EmailDtoList,
            EmailThreadList,
            EmailThreadReadFlagRq,
            FileVersion,
            HierarchicalObject,
            IndexedHierarchicalObject,
            IndexedPrimitiveObject,
            LinkedResource,
            MapiBinaryPropertyDto,
            MapiBooleanPropertyDto,
            MapiCalendarDailyRecurrencePatternDto,
            MapiCalendarDto,
            MapiCalendarWeeklyRecurrencePatternDto,
            MapiCalendarYearlyAndMonthlyRecurrencePatternDto,
            MapiContactDto,
            MapiContactPhotoDto,
            MapiDateTimePropertyDto,
            MapiFileAsPropertyDto,
            MapiImportancePropertyDto,
            MapiIntPropertyDto,
            MapiKnownPropertyDescriptor,
            MapiLegacyFreeBusyPropertyDto,
            MapiMessageDto,
            MapiMultiIntPropertyDto,
            MapiPhysicalAddressIndexPropertyDto,
            MapiPidPropertyDescriptor,
            MapiResponseTypePropertyDto,
            MapiStringPropertyDto,
            MonthlyRecurrencePatternDto,
            MoveEmailMessageRq,
            MoveEmailThreadRq,
            PrimitiveObject,
            SaveEmailAccountRequest,
            SaveOAuthEmailAccountRequest,
            SendEmailBaseRequest,
            SendEmailMimeBaseRequest,
            SendEmailModelRq,
            SetMessageReadFlagAccountBaseRequest,
            StorageFileLocation,
            TaskRegeneratingPatternDto,
            WeeklyRecurrencePatternDto,
            YearlyRecurrencePatternDto,
            AiBcrParseStorageRq,
            AppendEmailBaseRequest,
            AppendEmailMimeBaseRequest,
            AppendEmailModelRq,
            MapiPidLidPropertyDescriptor,
            MapiPidNamePropertyDescriptor,
            MapiPidTagPropertyDescriptor,
};

export {enumsMap, typeMap};
