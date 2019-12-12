
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
     * Determines that image contains single VCard or more             
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
     * Security mode for a mail client Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
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

/**
 * Email document property DTO.             
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
 * Parse ocr data request with storage output location             
 */
export class AiBcrParseOcrDataStorageRq extends AiBcrParseOcrDataRq {

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
        return super.getAttributeTypeMap().concat(AiBcrParseOcrDataStorageRq.attributeTypeMap);
    }

    /**
     * Output folder location on storage             
     */
    public outFolder: StorageFolderLocation;
    

    public constructor(
        options?: AiBcrOptions,
        data?: Array<AiBcrOcrData>,
        outFolder?: StorageFolderLocation) {
        super();
        this.options = options;
        this.data = data;
        this.outFolder = outFolder;
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
            BaseObject,
            CreateEmailRequest,
            DiscUsage,
            EmailAccountRequest,
            EmailDocument,
            EmailDocumentResponse,
            EmailProperties,
            EmailProperty,
            EmailPropertyResponse,
            ErrorDetails,
            FileVersions,
            FilesList,
            FilesUploadResult,
            HierarchicalObjectRequest,
            HierarchicalObjectResponse,
            Link,
            ListResponseOfAiBcrOcrData,
            ListResponseOfAiNameComponent,
            ListResponseOfAiNameExtracted,
            ListResponseOfAiNameGenderHypothesis,
            ListResponseOfHierarchicalObject,
            ListResponseOfHierarchicalObjectResponse,
            ListResponseOfMailServerFolder,
            ListResponseOfStorageFileLocation,
            ListResponseOfString,
            MailServerFolder,
            MimeResponse,
            ModelError,
            ObjectExist,
            SetEmailPropertyRequest,
            StorageExist,
            StorageFile,
            StorageFolderLocation,
            ValueResponse,
            AiBcrBase64Image,
            AiBcrBase64Rq,
            AiBcrImageStorageFile,
            AiBcrParseOcrDataRq,
            AiBcrStorageImageRq,
            AiNameParsedMatchRq,
            AppendEmailAccountBaseRequest,
            CreateFolderBaseRequest,
            DeleteFolderBaseRequest,
            DeleteMessageBaseRequest,
            FileVersion,
            HierarchicalObject,
            IndexedHierarchicalObject,
            IndexedPrimitiveObject,
            PrimitiveObject,
            SaveEmailAccountRequest,
            SaveOAuthEmailAccountRequest,
            SendEmailBaseRequest,
            SendEmailMimeBaseRequest,
            SetMessageReadFlagAccountBaseRequest,
            StorageFileLocation,
            AiBcrParseOcrDataStorageRq,
            AiBcrParseStorageRq,
            AppendEmailBaseRequest,
            AppendEmailMimeBaseRequest,
};

export {enumsMap, typeMap};
