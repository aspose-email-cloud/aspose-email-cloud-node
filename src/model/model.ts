
/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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
     * First account storage file name for receiving emails (or universal one)             
     */
    public firstAccount: string;
    
    /**
     * Second account storage file name for sending emails (ignored if first is universal)             
     */
    public secondAccount: string;
    
    /**
     * Storage folder location of account files             
     */
    public storageFolder: StorageFolderLocation;
    

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
     * String representation of recurrence pattern (See iCalendar RFC, \"Recurrence rule\" section). For example:               For daily recurrence:         \"FREQ=DAILY;COUNT=10;WKST=MO\"                   For monthly recurrence:         \"BYSETPOS=1;BYDAY=MO,TU,WE,TH,FR;FREQ=MONTHLY;INTERVAL=10;WKST=MO\"                   For yearly recurrence:         \"BYMONTHDAY=30;BYMONTH=1;FREQ=YEARLY;WKST=MO\"                   
     */
    public recurrenceString: string;
    
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
    

    public constructor(
        photoImageFormat?: string,
        base64Data?: string) {
        
        this.photoImageFormat = photoImageFormat;
        this.base64Data = base64Data;
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
    

    public constructor(
        category?: EnumWithCustomOfEventCategory,
        date?: Date) {
        
        this.category = category;
        this.date = date;
    }
}

/**
 * Class for disc space information.
 */
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

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    

    public constructor(
        usedSize?: number,
        totalSize?: number) {
        
        this.usedSize = usedSize;
        this.totalSize = totalSize;
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
     * Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
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
    

    public constructor(
        category?: EnumWithCustomOfEmailAddressCategory,
        displayName?: string,
        preferred?: boolean,
        routingType?: string,
        address?: string) {
        
        this.category = category;
        this.displayName = displayName;
        this.preferred = preferred;
        this.routingType = routingType;
        this.address = address;
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
    

    public constructor(
        emailProperty?: EmailProperty) {
        
        this.emailProperty = emailProperty;
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
    

    public constructor(
        value?: string,
        description?: string) {
        
        this.value = value;
        this.description = description;
    }
}

/**
 * The error details
 */
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

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    

    public constructor(
        requestId?: string,
        date?: Date) {
        
        this.requestId = requestId;
        this.date = date;
    }
}

/**
 * File versions FileVersion.
 */
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

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    

    public constructor(
        value?: Array<FileVersion>) {
        
        this.value = value;
    }
}

/**
 * Files list
 */
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

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    

    public constructor(
        value?: Array<StorageFile>) {
        
        this.value = value;
    }
}

/**
 * File upload result
 */
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

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    

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
    

    public constructor(
        value?: Array<ContactDto>) {
        
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
    

    public constructor(
        value?: Array<EmailDto>) {
        
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
    

    public constructor(
        displayName?: string,
        address?: string,
        participationStatus?: string) {
        
        this.displayName = displayName;
        this.address = address;
        this.participationStatus = participationStatus;
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
    

    public constructor(
        name?: string,
        id?: string) {
        
        this.name = name;
        this.id = id;
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
    

    public constructor(
        mime?: string) {
        
        this.mime = mime;
    }
}

/**
 * Error
 */
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

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    

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
 * Object exists
 */
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

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    

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
    

    public constructor(
        emailProperty?: EmailProperty,
        storageFolder?: StorageFolderLocation) {
        
        this.emailProperty = emailProperty;
        this.storageFolder = storageFolder;
    }
}

/**
 * Storage exists
 */
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

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    

    public constructor(
        exists?: boolean) {
        
        this.exists = exists;
    }
}

/**
 * File or folder information
 */
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

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    

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
    

    public constructor(
        value?: EmailDto,
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
    

    public constructor(
        value?: string) {
        
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
            type: "StorageFileLocation",
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
    public file: StorageFileLocation;
    

    public constructor(
        isSingle?: boolean,
        file?: StorageFileLocation) {
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
     * Specifies that message should be deleted permanently             
     */
    public deletePermanently: boolean;
    

    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        messageId?: string,
        deletePermanently?: boolean) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.messageId = messageId;
        this.deletePermanently = deletePermanently;
    }
}

/**
 * List of email documents             
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


    public constructor(
        value?: Array<StorageModelOfEmailDto>) {
        super();
        this.value = value;
    }
}

/**
 * File Version
 */
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

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    

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
        refreshToken?: string) {
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
            type: "StorageFileLocation",
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
    public emailFile: StorageFileLocation;
    

    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        emailFile?: StorageFileLocation) {
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
            type: "EmailDto",
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
    public message: EmailDto;
    

    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        message?: EmailDto) {
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
            type: "StorageFolderLocation",
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
    public outFolder: StorageFolderLocation;
    

    public constructor(
        options?: AiBcrOptions,
        images?: Array<AiBcrImageStorageFile>,
        outFolder?: StorageFolderLocation) {
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
            type: "StorageFileLocation",
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
    public emailFile: StorageFileLocation;
    

    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string,
        markAsSent?: boolean,
        emailFile?: StorageFileLocation) {
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
            type: "EmailDto",
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
    public message: EmailDto;
    

    public constructor(
        firstAccount?: string,
        secondAccount?: string,
        storageFolder?: StorageFolderLocation,
        folder?: string,
        markAsSent?: boolean,
        message?: EmailDto) {
        super();
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storageFolder = storageFolder;
        this.folder = folder;
        this.markAsSent = markAsSent;
        this.message = message;
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
            EmailAccountRequest,
            EmailAddress,
            EmailDocument,
            EmailDocumentResponse,
            EmailDto,
            EmailProperties,
            EmailProperty,
            EmailPropertyResponse,
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
            ListResponseOfEmailDto,
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
            MimeResponse,
            ModelError,
            ObjectExist,
            PhoneNumber,
            PostalAddress,
            ReminderAttendee,
            ReminderTrigger,
            SetEmailPropertyRequest,
            StorageExist,
            StorageFile,
            StorageFolderLocation,
            StorageModelOfCalendarDto,
            StorageModelOfContactDto,
            StorageModelOfEmailDto,
            StorageModelRqOfCalendarDto,
            StorageModelRqOfContactDto,
            StorageModelRqOfEmailDto,
            Url,
            ValueResponse,
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
            DeleteFolderBaseRequest,
            DeleteMessageBaseRequest,
            EmailDtoList,
            FileVersion,
            HierarchicalObject,
            IndexedHierarchicalObject,
            IndexedPrimitiveObject,
            LinkedResource,
            PrimitiveObject,
            SaveEmailAccountRequest,
            SaveOAuthEmailAccountRequest,
            SendEmailBaseRequest,
            SendEmailMimeBaseRequest,
            SendEmailModelRq,
            SetMessageReadFlagAccountBaseRequest,
            StorageFileLocation,
            AiBcrParseStorageRq,
            AppendEmailBaseRequest,
            AppendEmailMimeBaseRequest,
            AppendEmailModelRq,
};

export {enumsMap, typeMap};
