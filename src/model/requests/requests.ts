
import * as model from "../model";


/**
 * Request model for addCalendarAttachment operation.
 */
export class AddCalendarAttachmentRequest {
    /**
     * Calendar file name in storage
     */
    public name: string;

    /**
     * Attachment file name in storage
     */
    public attachment: string;

    /**
     * Storage name and folder path for calendar and attachment files
     */
    public request: model.AddAttachmentRequest;

    /**
     * Request model for addCalendarAttachment operation.
     * @param name Calendar file name in storage
     * @param attachment Attachment file name in storage
     * @param request Storage name and folder path for calendar and attachment files
     */
    public constructor(
        name?: string, 
        attachment?: string, 
        request?: model.AddAttachmentRequest) {
        
        this.name = name;
        this.attachment = attachment;
        this.request = request;
    }
}

/**
 * Request model for addContactAttachment operation.
 */
export class AddContactAttachmentRequest {
    /**
     * Contact document format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Attachment name
     */
    public attachment: string;

    /**
     * Add attachment request
     */
    public request: model.AddAttachmentRequest;

    /**
     * Request model for addContactAttachment operation.
     * @param format Contact document format Enum, available values: VCard, WebDav, Msg
     * @param name Contact document file name
     * @param attachment Attachment name
     * @param request Add attachment request
     */
    public constructor(
        format?: string, 
        name?: string, 
        attachment?: string, 
        request?: model.AddAttachmentRequest) {
        
        this.format = format;
        this.name = name;
        this.attachment = attachment;
        this.request = request;
    }
}

/**
 * Request model for addEmailAttachment operation.
 */
export class AddEmailAttachmentRequest {
    /**
     * Attachment file name
     */
    public attachmentName: string;

    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * Storage info to specify location of email document and attachment files
     */
    public request: model.AddAttachmentRequest;

    /**
     * Request model for addEmailAttachment operation.
     * @param attachmentName Attachment file name
     * @param fileName Email document file name
     * @param request Storage info to specify location of email document and attachment files
     */
    public constructor(
        attachmentName?: string, 
        fileName?: string, 
        request?: model.AddAttachmentRequest) {
        
        this.attachmentName = attachmentName;
        this.fileName = fileName;
        this.request = request;
    }
}

/**
 * Request model for addMapiAttachment operation.
 */
export class AddMapiAttachmentRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Attachment file name
     */
    public attachment: string;

    /**
     * Add attachment request
     */
    public request: model.AddAttachmentRequest;

    /**
     * Request model for addMapiAttachment operation.
     * @param name Document file name
     * @param attachment Attachment file name
     * @param request Add attachment request
     */
    public constructor(
        name?: string, 
        attachment?: string, 
        request?: model.AddAttachmentRequest) {
        
        this.name = name;
        this.attachment = attachment;
        this.request = request;
    }
}

/**
 * Request model for aiBcrOcr operation.
 */
export class AiBcrOcrRequest {
    /**
     * Request with base64 images data
     */
    public rq: model.AiBcrBase64Rq;

    /**
     * Request model for aiBcrOcr operation.
     * @param rq Request with base64 images data
     */
    public constructor(
        rq?: model.AiBcrBase64Rq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiBcrOcrStorage operation.
 */
export class AiBcrOcrStorageRequest {
    /**
     * Request with images located on storage
     */
    public rq: model.AiBcrStorageImageRq;

    /**
     * Request model for aiBcrOcrStorage operation.
     * @param rq Request with images located on storage
     */
    public constructor(
        rq?: model.AiBcrStorageImageRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiBcrParse operation.
 */
export class AiBcrParseRequest {
    /**
     * Request with base64 images data
     */
    public rq: model.AiBcrBase64Rq;

    /**
     * Request model for aiBcrParse operation.
     * @param rq Request with base64 images data
     */
    public constructor(
        rq?: model.AiBcrBase64Rq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiBcrParseModel operation.
 */
export class AiBcrParseModelRequest {
    /**
     * Request with base64 images data
     */
    public rq: model.AiBcrBase64Rq;

    /**
     * Request model for aiBcrParseModel operation.
     * @param rq Request with base64 images data
     */
    public constructor(
        rq?: model.AiBcrBase64Rq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiBcrParseOcrDataModel operation.
 */
export class AiBcrParseOcrDataModelRequest {
    /**
     * Gets or sets rq
     */
    public rq: model.AiBcrParseOcrDataRq;

    /**
     * Request model for aiBcrParseOcrDataModel operation.
     * @param rq 
     */
    public constructor(
        rq?: model.AiBcrParseOcrDataRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiBcrParseStorage operation.
 */
export class AiBcrParseStorageRequest {
    /**
     * Request with images located on storage
     */
    public rq: model.AiBcrParseStorageRq;

    /**
     * Request model for aiBcrParseStorage operation.
     * @param rq Request with images located on storage
     */
    public constructor(
        rq?: model.AiBcrParseStorageRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiNameComplete operation.
 */
export class AiNameCompleteRequest {
    /**
     * A name to complete (required)
     */
    public name: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     */
    public location: string;

    /**
     * A character encoding name
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name
     */
    public script: string;

    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameComplete operation.
     * @param name A name to complete (required)
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     * @param encoding A character encoding name
     * @param script A writing system code; starts with the ISO-15924 script name
     * @param style Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        name?: string, 
        language?: string, 
        location?: string, 
        encoding?: string, 
        script?: string, 
        style?: string) {
        
        this.name = name;
        this.language = language;
        this.location = location;
        this.encoding = encoding;
        this.script = script;
        this.style = style;
    }
}

/**
 * Request model for aiNameExpand operation.
 */
export class AiNameExpandRequest {
    /**
     * A name to format (required)
     */
    public name: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     */
    public location: string;

    /**
     * A character encoding name
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name
     */
    public script: string;

    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameExpand operation.
     * @param name A name to format (required)
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     * @param encoding A character encoding name
     * @param script A writing system code; starts with the ISO-15924 script name
     * @param style Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        name?: string, 
        language?: string, 
        location?: string, 
        encoding?: string, 
        script?: string, 
        style?: string) {
        
        this.name = name;
        this.language = language;
        this.location = location;
        this.encoding = encoding;
        this.script = script;
        this.style = style;
    }
}

/**
 * Request model for aiNameExpandParsed operation.
 */
export class AiNameExpandParsedRequest {
    /**
     * Parsed name with options
     */
    public rq: model.AiNameParsedRq;

    /**
     * Request model for aiNameExpandParsed operation.
     * @param rq Parsed name with options
     */
    public constructor(
        rq?: model.AiNameParsedRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiNameFormat operation.
 */
export class AiNameFormatRequest {
    /**
     * A name to format (required)
     */
    public name: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     */
    public location: string;

    /**
     * A character encoding name
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name
     */
    public script: string;

    /**
     * Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (= '%t%F%m%N%L%p')     /format/FN+LN/ (= '%F%L')     /format/title+FN+LN/ (= '%t%F%L')     /format/FN+MN+LN/ (= '%F%M%N%L')     /format/title+FN+MN+LN/ (= '%t%F%M%N%L')     /format/FN+MI+LN/ (= '%F%m%N%L')     /format/title+FN+MI+LN/ (= '%t%F%m%N%L')     /format/LN/ (= '%L')     /format/title+LN/ (= '%t%L')     /format/LN+FN+MN/ (= '%L,%F%M%N')     /format/LN+title+FN+MN/ (= '%L,%t%F%M%N')     /format/LN+FN+MI/ (= '%L,%F%m%N')     /format/LN+title+FN+MI/ (= '%L,%t%F%m%N')  Custom format string - custom combination of characters and the next term placeholders:      '%t' - Title (prefix)     '%F' - First name     '%f' - First initial     '%M' - Middle name(s)     '%m' - Middle initial(s)     '%N' - Nickname     '%L' - Last name     '%l' - Last initial     '%p' - Postfix  If no value for format option was provided, its default value is '%t%F%m%N%L%p'             
     */
    public format: string;

    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameFormat operation.
     * @param name A name to format (required)
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     * @param encoding A character encoding name
     * @param script A writing system code; starts with the ISO-15924 script name
     * @param format Format of the name. Predefined format can be used by ID, or custom format can be specified. Predefined formats:      /format/default/ (= '%t%F%m%N%L%p')     /format/FN+LN/ (= '%F%L')     /format/title+FN+LN/ (= '%t%F%L')     /format/FN+MN+LN/ (= '%F%M%N%L')     /format/title+FN+MN+LN/ (= '%t%F%M%N%L')     /format/FN+MI+LN/ (= '%F%m%N%L')     /format/title+FN+MI+LN/ (= '%t%F%m%N%L')     /format/LN/ (= '%L')     /format/title+LN/ (= '%t%L')     /format/LN+FN+MN/ (= '%L,%F%M%N')     /format/LN+title+FN+MN/ (= '%L,%t%F%M%N')     /format/LN+FN+MI/ (= '%L,%F%m%N')     /format/LN+title+FN+MI/ (= '%L,%t%F%m%N')  Custom format string - custom combination of characters and the next term placeholders:      '%t' - Title (prefix)     '%F' - First name     '%f' - First initial     '%M' - Middle name(s)     '%m' - Middle initial(s)     '%N' - Nickname     '%L' - Last name     '%l' - Last initial     '%p' - Postfix  If no value for format option was provided, its default value is '%t%F%m%N%L%p'             
     * @param style Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        name?: string, 
        language?: string, 
        location?: string, 
        encoding?: string, 
        script?: string, 
        format?: string, 
        style?: string) {
        
        this.name = name;
        this.language = language;
        this.location = location;
        this.encoding = encoding;
        this.script = script;
        this.format = format;
        this.style = style;
    }
}

/**
 * Request model for aiNameFormatParsed operation.
 */
export class AiNameFormatParsedRequest {
    /**
     * Parsed name with options
     */
    public rq: model.AiNameParsedRq;

    /**
     * Request model for aiNameFormatParsed operation.
     * @param rq Parsed name with options
     */
    public constructor(
        rq?: model.AiNameParsedRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiNameGenderize operation.
 */
export class AiNameGenderizeRequest {
    /**
     * A name to parse (required)
     */
    public name: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     */
    public location: string;

    /**
     * A character encoding name
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name
     */
    public script: string;

    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameGenderize operation.
     * @param name A name to parse (required)
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     * @param encoding A character encoding name
     * @param script A writing system code; starts with the ISO-15924 script name
     * @param style Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        name?: string, 
        language?: string, 
        location?: string, 
        encoding?: string, 
        script?: string, 
        style?: string) {
        
        this.name = name;
        this.language = language;
        this.location = location;
        this.encoding = encoding;
        this.script = script;
        this.style = style;
    }
}

/**
 * Request model for aiNameGenderizeParsed operation.
 */
export class AiNameGenderizeParsedRequest {
    /**
     * Gender detection request data
     */
    public rq: model.AiNameParsedRq;

    /**
     * Request model for aiNameGenderizeParsed operation.
     * @param rq Gender detection request data
     */
    public constructor(
        rq?: model.AiNameParsedRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiNameMatch operation.
 */
export class AiNameMatchRequest {
    /**
     * A name to match (required)
     */
    public name: string;

    /**
     * Another name to match (required)
     */
    public otherName: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     */
    public location: string;

    /**
     * A character encoding name
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name
     */
    public script: string;

    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameMatch operation.
     * @param name A name to match (required)
     * @param otherName Another name to match (required)
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     * @param encoding A character encoding name
     * @param script A writing system code; starts with the ISO-15924 script name
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

/**
 * Request model for aiNameMatchParsed operation.
 */
export class AiNameMatchParsedRequest {
    /**
     * Parsed names to match
     */
    public rq: model.AiNameParsedMatchRq;

    /**
     * Request model for aiNameMatchParsed operation.
     * @param rq Parsed names to match
     */
    public constructor(
        rq?: model.AiNameParsedMatchRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for aiNameParse operation.
 */
export class AiNameParseRequest {
    /**
     * A name to parse (required)
     */
    public name: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     */
    public location: string;

    /**
     * A character encoding name
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name
     */
    public script: string;

    /**
     * Name writing style Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameParse operation.
     * @param name A name to parse (required)
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     * @param encoding A character encoding name
     * @param script A writing system code; starts with the ISO-15924 script name
     * @param style Name writing style Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        name?: string, 
        language?: string, 
        location?: string, 
        encoding?: string, 
        script?: string, 
        style?: string) {
        
        this.name = name;
        this.language = language;
        this.location = location;
        this.encoding = encoding;
        this.script = script;
        this.style = style;
    }
}

/**
 * Request model for aiNameParseEmailAddress operation.
 */
export class AiNameParseEmailAddressRequest {
    /**
     * Email address to parse (required)
     */
    public emailAddress: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     */
    public location: string;

    /**
     * A character encoding name
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name
     */
    public script: string;

    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameParseEmailAddress operation.
     * @param emailAddress Email address to parse (required)
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian)             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France             
     * @param encoding A character encoding name
     * @param script A writing system code; starts with the ISO-15924 script name
     * @param style Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        emailAddress?: string, 
        language?: string, 
        location?: string, 
        encoding?: string, 
        script?: string, 
        style?: string) {
        
        this.emailAddress = emailAddress;
        this.language = language;
        this.location = location;
        this.encoding = encoding;
        this.script = script;
        this.style = style;
    }
}

/**
 * Request model for appendEmailMessage operation.
 */
export class AppendEmailMessageRequest {
    /**
     * Append email request
     */
    public request: model.AppendEmailBaseRequest;

    /**
     * Request model for appendEmailMessage operation.
     * @param request Append email request
     */
    public constructor(
        request?: model.AppendEmailBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for appendEmailModelMessage operation.
 */
export class AppendEmailModelMessageRequest {
    /**
     * Append email request
     */
    public rq: model.AppendEmailModelRq;

    /**
     * Request model for appendEmailModelMessage operation.
     * @param rq Append email request
     */
    public constructor(
        rq?: model.AppendEmailModelRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for appendMimeMessage operation.
 */
export class AppendMimeMessageRequest {
    /**
     * Append email request
     */
    public request: model.AppendEmailMimeBaseRequest;

    /**
     * Request model for appendMimeMessage operation.
     * @param request Append email request
     */
    public constructor(
        request?: model.AppendEmailMimeBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for convertCalendar operation.
 */
export class ConvertCalendarRequest {
    /**
     * File format Enum, available values: Ics, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for convertCalendar operation.
     * @param format File format Enum, available values: Ics, Msg
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}

/**
 * Request model for convertCalendarModelToAlternate operation.
 */
export class ConvertCalendarModelToAlternateRequest {
    /**
     * iCalendar to AlternateView request
     */
    public rq: model.CalendarDtoAlternateRq;

    /**
     * Request model for convertCalendarModelToAlternate operation.
     * @param rq iCalendar to AlternateView request
     */
    public constructor(
        rq?: model.CalendarDtoAlternateRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for convertCalendarModelToFile operation.
 */
export class ConvertCalendarModelToFileRequest {
    /**
     * File format Enum, available values: Ics, Msg
     */
    public format: string;

    /**
     * Calendar model to convert
     */
    public calendarDto: model.CalendarDto;

    /**
     * Request model for convertCalendarModelToFile operation.
     * @param format File format Enum, available values: Ics, Msg
     * @param calendarDto Calendar model to convert
     */
    public constructor(
        format?: string, 
        calendarDto?: model.CalendarDto) {
        
        this.format = format;
        this.calendarDto = calendarDto;
    }
}

/**
 * Request model for convertContact operation.
 */
export class ConvertContactRequest {
    /**
     * File format to convert to Enum, available values: VCard, WebDav, Msg
     */
    public destinationFormat: string;

    /**
     * File format to convert from Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for convertContact operation.
     * @param destinationFormat File format to convert to Enum, available values: VCard, WebDav, Msg
     * @param format File format to convert from Enum, available values: VCard, WebDav, Msg
     * @param file File to convert
     */
    public constructor(
        destinationFormat?: string, 
        format?: string, 
        file?: Buffer) {
        
        this.destinationFormat = destinationFormat;
        this.format = format;
        this.file = file;
    }
}

/**
 * Request model for convertContactModelToFile operation.
 */
export class ConvertContactModelToFileRequest {
    /**
     * File format Enum, available values: VCard, WebDav, Msg
     */
    public destinationFormat: string;

    /**
     * Contact model to convert
     */
    public contactDto: model.ContactDto;

    /**
     * Request model for convertContactModelToFile operation.
     * @param destinationFormat File format Enum, available values: VCard, WebDav, Msg
     * @param contactDto Contact model to convert
     */
    public constructor(
        destinationFormat?: string, 
        contactDto?: model.ContactDto) {
        
        this.destinationFormat = destinationFormat;
        this.contactDto = contactDto;
    }
}

/**
 * Request model for convertEmail operation.
 */
export class ConvertEmailRequest {
    /**
     * File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for convertEmail operation.
     * @param format File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}

/**
 * Request model for convertEmailModelToFile operation.
 */
export class ConvertEmailModelToFileRequest {
    /**
     * File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     */
    public destinationFormat: string;

    /**
     * Email model to convert
     */
    public emailDto: model.EmailDto;

    /**
     * Request model for convertEmailModelToFile operation.
     * @param destinationFormat File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     * @param emailDto Email model to convert
     */
    public constructor(
        destinationFormat?: string, 
        emailDto?: model.EmailDto) {
        
        this.destinationFormat = destinationFormat;
        this.emailDto = emailDto;
    }
}

/**
 * Request model for copyFile operation.
 */
export class CopyFileRequest {
    /**
     * Gets or sets srcPath
     */
    public srcPath: string;

    /**
     * Gets or sets destPath
     */
    public destPath: string;

    /**
     * Gets or sets srcStorageName
     */
    public srcStorageName: string;

    /**
     * Gets or sets destStorageName
     */
    public destStorageName: string;

    /**
     * Gets or sets versionId
     */
    public versionId: string;

    /**
     * Request model for copyFile operation.
     * @param srcPath 
     * @param destPath 
     * @param srcStorageName 
     * @param destStorageName 
     * @param versionId 
     */
    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string, 
        versionId?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for copyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Gets or sets srcPath
     */
    public srcPath: string;

    /**
     * Gets or sets destPath
     */
    public destPath: string;

    /**
     * Gets or sets srcStorageName
     */
    public srcStorageName: string;

    /**
     * Gets or sets destStorageName
     */
    public destStorageName: string;

    /**
     * Request model for copyFolder operation.
     * @param srcPath 
     * @param destPath 
     * @param srcStorageName 
     * @param destStorageName 
     */
    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for createCalendar operation.
 */
export class CreateCalendarRequest {
    /**
     * Calendar file name in storage
     */
    public name: string;

    /**
     * Gets or sets request
     */
    public request: model.HierarchicalObjectRequest;

    /**
     * Request model for createCalendar operation.
     * @param name Calendar file name in storage
     * @param request 
     */
    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for createContact operation.
 */
export class CreateContactRequest {
    /**
     * Contact document format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Create contact request
     */
    public request: model.HierarchicalObjectRequest;

    /**
     * Request model for createContact operation.
     * @param format Contact document format Enum, available values: VCard, WebDav, Msg
     * @param name Contact document file name
     * @param request Create contact request
     */
    public constructor(
        format?: string, 
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.format = format;
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for createEmail operation.
 */
export class CreateEmailRequest {
    /**
     * Email document file name in storage
     */
    public fileName: string;

    /**
     * An email document and optional Storage info to specify where the file should be located             
     */
    public request: model.CreateEmailRequest;

    /**
     * Request model for createEmail operation.
     * @param fileName Email document file name in storage
     * @param request An email document and optional Storage info to specify where the file should be located             
     */
    public constructor(
        fileName?: string, 
        request?: model.CreateEmailRequest) {
        
        this.fileName = fileName;
        this.request = request;
    }
}

/**
 * Request model for createEmailFolder operation.
 */
export class CreateEmailFolderRequest {
    /**
     * Create folder request
     */
    public request: model.CreateFolderBaseRequest;

    /**
     * Request model for createEmailFolder operation.
     * @param request Create folder request
     */
    public constructor(
        request?: model.CreateFolderBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for createFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for createFolder operation.
     * @param path 
     * @param storageName 
     */
    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for createMapi operation.
 */
export class CreateMapiRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Create document request
     */
    public request: model.HierarchicalObjectRequest;

    /**
     * Request model for createMapi operation.
     * @param name Document file name
     * @param request Create document request
     */
    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for deleteCalendarProperty operation.
 */
export class DeleteCalendarPropertyRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * Indexed property name
     */
    public memberName: string;

    /**
     * Property index path
     */
    public index: string;

    /**
     * Storage detail to specify iCalendar file location
     */
    public request: model.StorageFolderLocation;

    /**
     * Request model for deleteCalendarProperty operation.
     * @param name iCalendar file name in storage
     * @param memberName Indexed property name
     * @param index Property index path
     * @param request Storage detail to specify iCalendar file location
     */
    public constructor(
        name?: string, 
        memberName?: string, 
        index?: string, 
        request?: model.StorageFolderLocation) {
        
        this.name = name;
        this.memberName = memberName;
        this.index = index;
        this.request = request;
    }
}

/**
 * Request model for deleteContactProperty operation.
 */
export class DeleteContactPropertyRequest {
    /**
     * Contact document format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Indexed property name
     */
    public memberName: string;

    /**
     * Property index
     */
    public index: number;

    /**
     * Calendar document location in storage information
     */
    public folder: model.StorageFolderLocation;

    /**
     * Request model for deleteContactProperty operation.
     * @param format Contact document format Enum, available values: VCard, WebDav, Msg
     * @param name Contact document file name
     * @param memberName Indexed property name
     * @param index Property index
     * @param folder Calendar document location in storage information
     */
    public constructor(
        format?: string, 
        name?: string, 
        memberName?: string, 
        index?: number, 
        folder?: model.StorageFolderLocation) {
        
        this.format = format;
        this.name = name;
        this.memberName = memberName;
        this.index = index;
        this.folder = folder;
    }
}

/**
 * Request model for deleteEmailFolder operation.
 */
export class DeleteEmailFolderRequest {
    /**
     * Delete folder request
     */
    public request: model.DeleteFolderBaseRequest;

    /**
     * Request model for deleteEmailFolder operation.
     * @param request Delete folder request
     */
    public constructor(
        request?: model.DeleteFolderBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for deleteEmailMessage operation.
 */
export class DeleteEmailMessageRequest {
    /**
     * Delete message request
     */
    public request: model.DeleteMessageBaseRequest;

    /**
     * Request model for deleteEmailMessage operation.
     * @param request Delete message request
     */
    public constructor(
        request?: model.DeleteMessageBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for deleteEmailThread operation.
 */
export class DeleteEmailThreadRequest {
    /**
     * Thread id
     */
    public threadId: string;

    /**
     * Email account specifier
     */
    public request: model.DeleteEmailThreadAccountRq;

    /**
     * Request model for deleteEmailThread operation.
     * @param threadId Thread id
     * @param request Email account specifier
     */
    public constructor(
        threadId?: string, 
        request?: model.DeleteEmailThreadAccountRq) {
        
        this.threadId = threadId;
        this.request = request;
    }
}

/**
 * Request model for deleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Gets or sets versionId
     */
    public versionId: string;

    /**
     * Request model for deleteFile operation.
     * @param path 
     * @param storageName 
     * @param versionId 
     */
    public constructor(
        path?: string, 
        storageName?: string, 
        versionId?: string) {
        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for deleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Gets or sets recursive
     */
    public recursive: boolean;

    /**
     * Request model for deleteFolder operation.
     * @param path 
     * @param storageName 
     * @param recursive 
     */
    public constructor(
        path?: string, 
        storageName?: string, 
        recursive?: boolean) {
        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for deleteMapiAttachment operation.
 */
export class DeleteMapiAttachmentRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Attachment name or index
     */
    public attachment: string;

    /**
     * Document file storage location info
     */
    public storage: model.StorageFolderLocation;

    /**
     * Request model for deleteMapiAttachment operation.
     * @param name Document file name
     * @param attachment Attachment name or index
     * @param storage Document file storage location info
     */
    public constructor(
        name?: string, 
        attachment?: string, 
        storage?: model.StorageFolderLocation) {
        
        this.name = name;
        this.attachment = attachment;
        this.storage = storage;
    }
}

/**
 * Request model for deleteMapiProperties operation.
 */
export class DeleteMapiPropertiesRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Properties that should be deleted
     */
    public request: model.HierarchicalObjectRequest;

    /**
     * Request model for deleteMapiProperties operation.
     * @param name Document file name
     * @param request Properties that should be deleted
     */
    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for discoverEmailConfig operation.
 */
export class DiscoverEmailConfigRequest {
    /**
     * Email address
     */
    public address: string;

    /**
     * Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned             
     */
    public fastProcessing: boolean;

    /**
     * Request model for discoverEmailConfig operation.
     * @param address Email address
     * @param fastProcessing Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned             
     */
    public constructor(
        address?: string, 
        fastProcessing?: boolean) {
        
        this.address = address;
        this.fastProcessing = fastProcessing;
    }
}

/**
 * Request model for discoverEmailConfigOauth operation.
 */
export class DiscoverEmailConfigOauthRequest {
    /**
     * Discover email configuration request.
     */
    public rq: model.DiscoverEmailConfigOauth;

    /**
     * Request model for discoverEmailConfigOauth operation.
     * @param rq Discover email configuration request.
     */
    public constructor(
        rq?: model.DiscoverEmailConfigOauth) {
        
        this.rq = rq;
    }
}

/**
 * Request model for discoverEmailConfigPassword operation.
 */
export class DiscoverEmailConfigPasswordRequest {
    /**
     * Discover email configuration request.
     */
    public rq: model.DiscoverEmailConfigPassword;

    /**
     * Request model for discoverEmailConfigPassword operation.
     * @param rq Discover email configuration request.
     */
    public constructor(
        rq?: model.DiscoverEmailConfigPassword) {
        
        this.rq = rq;
    }
}

/**
 * Request model for downloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Gets or sets versionId
     */
    public versionId: string;

    /**
     * Request model for downloadFile operation.
     * @param path 
     * @param storageName 
     * @param versionId 
     */
    public constructor(
        path?: string, 
        storageName?: string, 
        versionId?: string) {
        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for fetchEmailMessage operation.
 */
export class FetchEmailMessageRequest {
    /**
     * Message identifier
     */
    public messageId: string;

    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     */
    public secondAccount: string;

    /**
     * Account folder to fetch from (should be specified for some protocols such as IMAP)             
     */
    public folder: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * Request model for fetchEmailMessage operation.
     * @param messageId Message identifier
     * @param firstAccount Email account
     * @param secondAccount Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     * @param folder Account folder to fetch from (should be specified for some protocols such as IMAP)             
     * @param storage Storage name where account file(s) located
     * @param storageFolder Folder in storage where account file(s) located
     */
    public constructor(
        messageId?: string, 
        firstAccount?: string, 
        secondAccount?: string, 
        folder?: string, 
        storage?: string, 
        storageFolder?: string) {
        
        this.messageId = messageId;
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.folder = folder;
        this.storage = storage;
        this.storageFolder = storageFolder;
    }
}

/**
 * Request model for fetchEmailModel operation.
 */
export class FetchEmailModelRequest {
    /**
     * Message identifier
     */
    public messageId: string;

    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     */
    public secondAccount: string;

    /**
     * Account folder to fetch from (should be specified for some protocols such as IMAP)             
     */
    public folder: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * Request model for fetchEmailModel operation.
     * @param messageId Message identifier
     * @param firstAccount Email account
     * @param secondAccount Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     * @param folder Account folder to fetch from (should be specified for some protocols such as IMAP)             
     * @param storage Storage name where account file(s) located
     * @param storageFolder Folder in storage where account file(s) located
     */
    public constructor(
        messageId?: string, 
        firstAccount?: string, 
        secondAccount?: string, 
        folder?: string, 
        storage?: string, 
        storageFolder?: string) {
        
        this.messageId = messageId;
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.folder = folder;
        this.storage = storage;
        this.storageFolder = storageFolder;
    }
}

/**
 * Request model for fetchEmailThreadMessages operation.
 */
export class FetchEmailThreadMessagesRequest {
    /**
     * Thread identifier
     */
    public threadId: string;

    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     */
    public secondAccount: string;

    /**
     * Specifies account folder to get thread from             
     */
    public folder: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * Request model for fetchEmailThreadMessages operation.
     * @param threadId Thread identifier
     * @param firstAccount Email account
     * @param secondAccount Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     * @param folder Specifies account folder to get thread from             
     * @param storage Storage name where account file(s) located
     * @param storageFolder Folder in storage where account file(s) located
     */
    public constructor(
        threadId?: string, 
        firstAccount?: string, 
        secondAccount?: string, 
        folder?: string, 
        storage?: string, 
        storageFolder?: string) {
        
        this.threadId = threadId;
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.folder = folder;
        this.storage = storage;
        this.storageFolder = storageFolder;
    }
}

/**
 * Request model for getCalendar operation.
 */
export class GetCalendarRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getCalendar operation.
     * @param name iCalendar file name in storage
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getCalendarAsFile operation.
 */
export class GetCalendarAsFileRequest {
    /**
     * Calendar document file name
     */
    public fileName: string;

    /**
     * File format Enum, available values: Ics, Msg
     */
    public format: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for getCalendarAsFile operation.
     * @param fileName Calendar document file name
     * @param format File format Enum, available values: Ics, Msg
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        fileName?: string, 
        format?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.format = format;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getCalendarAttachment operation.
 */
export class GetCalendarAttachmentRequest {
    /**
     * iCalendar document file name
     */
    public name: string;

    /**
     * Attachment name or index
     */
    public attachment: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getCalendarAttachment operation.
     * @param name iCalendar document file name
     * @param attachment Attachment name or index
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        attachment?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.attachment = attachment;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getCalendarFileAsModel operation.
 */
export class GetCalendarFileAsModelRequest {
    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for getCalendarFileAsModel operation.
     * @param file File to convert
     */
    public constructor(
        file?: Buffer) {
        
        this.file = file;
    }
}

/**
 * Request model for getCalendarList operation.
 */
export class GetCalendarListRequest {
    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Count of items on page
     */
    public itemsPerPage: number;

    /**
     * Page number
     */
    public pageNumber: number;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getCalendarList operation.
     * @param folder Path to folder in storage
     * @param itemsPerPage Count of items on page
     * @param pageNumber Page number
     * @param storage Storage name
     */
    public constructor(
        folder?: string, 
        itemsPerPage?: number, 
        pageNumber?: number, 
        storage?: string) {
        
        this.folder = folder;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
        this.storage = storage;
    }
}

/**
 * Request model for getCalendarModel operation.
 */
export class GetCalendarModelRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getCalendarModel operation.
     * @param name iCalendar file name in storage
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getCalendarModelAsAlternate operation.
 */
export class GetCalendarModelAsAlternateRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * iCalendar method type Enum, available values: Create, Update, Cancel
     */
    public calendarAction: string;

    /**
     * The sequence id
     */
    public sequenceId: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getCalendarModelAsAlternate operation.
     * @param name iCalendar file name in storage
     * @param calendarAction iCalendar method type Enum, available values: Create, Update, Cancel
     * @param sequenceId The sequence id
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        calendarAction?: string, 
        sequenceId?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.calendarAction = calendarAction;
        this.sequenceId = sequenceId;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getCalendarModelList operation.
 */
export class GetCalendarModelListRequest {
    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Count of items on page
     */
    public itemsPerPage: number;

    /**
     * Page number
     */
    public pageNumber: number;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getCalendarModelList operation.
     * @param folder Path to folder in storage
     * @param itemsPerPage Count of items on page
     * @param pageNumber Page number
     * @param storage Storage name
     */
    public constructor(
        folder?: string, 
        itemsPerPage?: number, 
        pageNumber?: number, 
        storage?: string) {
        
        this.folder = folder;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
        this.storage = storage;
    }
}

/**
 * Request model for getContactAsFile operation.
 */
export class GetContactAsFileRequest {
    /**
     * Calendar document file name
     */
    public fileName: string;

    /**
     * File format Enum, available values: VCard, WebDav, Msg
     */
    public destinationFormat: string;

    /**
     * File format to convert from Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for getContactAsFile operation.
     * @param fileName Calendar document file name
     * @param destinationFormat File format Enum, available values: VCard, WebDav, Msg
     * @param format File format to convert from Enum, available values: VCard, WebDav, Msg
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        fileName?: string, 
        destinationFormat?: string, 
        format?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.destinationFormat = destinationFormat;
        this.format = format;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getContactAttachment operation.
 */
export class GetContactAttachmentRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Attachment name or index
     */
    public attachment: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getContactAttachment operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param name Contact document file name
     * @param attachment Attachment name or index
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        format?: string, 
        name?: string, 
        attachment?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.name = name;
        this.attachment = attachment;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getContactFileAsModel operation.
 */
export class GetContactFileAsModelRequest {
    /**
     * File format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for getContactFileAsModel operation.
     * @param format File format Enum, available values: VCard, WebDav, Msg
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}

/**
 * Request model for getContactList operation.
 */
export class GetContactListRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Count of items on page
     */
    public itemsPerPage: number;

    /**
     * Page number
     */
    public pageNumber: number;

    /**
     * Request model for getContactList operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param folder Path to folder in storage
     * @param storage Storage name
     * @param itemsPerPage Count of items on page
     * @param pageNumber Page number
     */
    public constructor(
        format?: string, 
        folder?: string, 
        storage?: string, 
        itemsPerPage?: number, 
        pageNumber?: number) {
        
        this.format = format;
        this.folder = folder;
        this.storage = storage;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
    }
}

/**
 * Request model for getContactModel operation.
 */
export class GetContactModelRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name.
     */
    public name: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for getContactModel operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param name Contact document file name.
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     */
    public constructor(
        format?: string, 
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getContactModelList operation.
 */
export class GetContactModelListRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Count of items on page.
     */
    public itemsPerPage: number;

    /**
     * Page number.
     */
    public pageNumber: number;

    /**
     * Request model for getContactModelList operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     * @param itemsPerPage Count of items on page.
     * @param pageNumber Page number.
     */
    public constructor(
        format?: string, 
        folder?: string, 
        storage?: string, 
        itemsPerPage?: number, 
        pageNumber?: number) {
        
        this.format = format;
        this.folder = folder;
        this.storage = storage;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
    }
}

/**
 * Request model for getContactProperties operation.
 */
export class GetContactPropertiesRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getContactProperties operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param name Contact document file name
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        format?: string, 
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for getDiscUsage operation.
     * @param storageName 
     */
    public constructor(
        storageName?: string) {
        
        this.storageName = storageName;
    }
}

/**
 * Request model for getEmail operation.
 */
export class GetEmailRequest {
    /**
     * Email document file name in storage
     */
    public fileName: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for getEmail operation.
     * @param fileName Email document file name in storage
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        fileName?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getEmailAsFile operation.
 */
export class GetEmailAsFileRequest {
    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     */
    public format: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for getEmailAsFile operation.
     * @param fileName Email document file name
     * @param format File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        fileName?: string, 
        format?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.format = format;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getEmailAttachment operation.
 */
export class GetEmailAttachmentRequest {
    /**
     * Attachment name
     */
    public attachment: string;

    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for getEmailAttachment operation.
     * @param attachment Attachment name
     * @param fileName Email document file name
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        attachment?: string, 
        fileName?: string, 
        storage?: string, 
        folder?: string) {
        
        this.attachment = attachment;
        this.fileName = fileName;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getEmailClientAccount operation.
 */
export class GetEmailClientAccountRequest {
    /**
     * File name on storage
     */
    public name: string;

    /**
     * Folder on storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getEmailClientAccount operation.
     * @param name File name on storage
     * @param folder Folder on storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getEmailClientMultiAccount operation.
 */
export class GetEmailClientMultiAccountRequest {
    /**
     * File name on storage
     */
    public name: string;

    /**
     * Folder on storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getEmailClientMultiAccount operation.
     * @param name File name on storage
     * @param folder Folder on storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getEmailFileAsModel operation.
 */
export class GetEmailFileAsModelRequest {
    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for getEmailFileAsModel operation.
     * @param file File to convert
     */
    public constructor(
        file?: Buffer) {
        
        this.file = file;
    }
}

/**
 * Request model for getEmailModel operation.
 */
export class GetEmailModelRequest {
    /**
     * Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     */
    public format: string;

    /**
     * Email document file name.
     */
    public name: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for getEmailModel operation.
     * @param format Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     * @param name Email document file name.
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     */
    public constructor(
        format?: string, 
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getEmailModelList operation.
 */
export class GetEmailModelListRequest {
    /**
     * Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     */
    public format: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Count of items on page.
     */
    public itemsPerPage: number;

    /**
     * Page number.
     */
    public pageNumber: number;

    /**
     * Request model for getEmailModelList operation.
     * @param format Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     * @param itemsPerPage Count of items on page.
     * @param pageNumber Page number.
     */
    public constructor(
        format?: string, 
        folder?: string, 
        storage?: string, 
        itemsPerPage?: number, 
        pageNumber?: number) {
        
        this.format = format;
        this.folder = folder;
        this.storage = storage;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
    }
}

/**
 * Request model for getEmailProperty operation.
 */
export class GetEmailPropertyRequest {
    /**
     * A property name
     */
    public propertyName: string;

    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for getEmailProperty operation.
     * @param propertyName A property name
     * @param fileName Email document file name
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        propertyName?: string, 
        fileName?: string, 
        storage?: string, 
        folder?: string) {
        
        this.propertyName = propertyName;
        this.fileName = fileName;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for getFileVersions operation.
     * @param path 
     * @param storageName 
     */
    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for getFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for getFilesList operation.
     * @param path 
     * @param storageName 
     */
    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for getMapiAttachment operation.
 */
export class GetMapiAttachmentRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Attachment name or index
     */
    public attachment: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getMapiAttachment operation.
     * @param name Document file name
     * @param attachment Attachment name or index
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        attachment?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.attachment = attachment;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getMapiAttachments operation.
 */
export class GetMapiAttachmentsRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getMapiAttachments operation.
     * @param name Document file name
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getMapiList operation.
 */
export class GetMapiListRequest {
    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Count of items on page
     */
    public itemsPerPage: number;

    /**
     * Page number
     */
    public pageNumber: number;

    /**
     * Request model for getMapiList operation.
     * @param folder Path to folder in storage
     * @param storage Storage name
     * @param itemsPerPage Count of items on page
     * @param pageNumber Page number
     */
    public constructor(
        folder?: string, 
        storage?: string, 
        itemsPerPage?: number, 
        pageNumber?: number) {
        
        this.folder = folder;
        this.storage = storage;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
    }
}

/**
 * Request model for getMapiProperties operation.
 */
export class GetMapiPropertiesRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for getMapiProperties operation.
     * @param name Document file name
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for isEmailAddressDisposable operation.
 */
export class IsEmailAddressDisposableRequest {
    /**
     * An email address to check
     */
    public address: string;

    /**
     * Request model for isEmailAddressDisposable operation.
     * @param address An email address to check
     */
    public constructor(
        address?: string) {
        
        this.address = address;
    }
}

/**
 * Request model for listEmailFolders operation.
 */
export class ListEmailFoldersRequest {
    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     */
    public secondAccount: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * Folder in which subfolders should be listed
     */
    public parentFolder: string;

    /**
     * Request model for listEmailFolders operation.
     * @param firstAccount Email account
     * @param secondAccount Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     * @param storage Storage name where account file(s) located
     * @param storageFolder Folder in storage where account file(s) located
     * @param parentFolder Folder in which subfolders should be listed
     */
    public constructor(
        firstAccount?: string, 
        secondAccount?: string, 
        storage?: string, 
        storageFolder?: string, 
        parentFolder?: string) {
        
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storage = storage;
        this.storageFolder = storageFolder;
        this.parentFolder = parentFolder;
    }
}

/**
 * Request model for listEmailMessages operation.
 */
export class ListEmailMessagesRequest {
    /**
     * A folder in email account
     */
    public folder: string;

    /**
     * A MailQuery search string
     */
    public queryString: string;

    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     */
    public secondAccount: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * Specifies that should message be searched in subfolders recursively
     */
    public recursive: boolean;

    /**
     * Request model for listEmailMessages operation.
     * @param folder A folder in email account
     * @param queryString A MailQuery search string
     * @param firstAccount Email account
     * @param secondAccount Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     * @param storage Storage name where account file(s) located
     * @param storageFolder Folder in storage where account file(s) located
     * @param recursive Specifies that should message be searched in subfolders recursively
     */
    public constructor(
        folder?: string, 
        queryString?: string, 
        firstAccount?: string, 
        secondAccount?: string, 
        storage?: string, 
        storageFolder?: string, 
        recursive?: boolean) {
        
        this.folder = folder;
        this.queryString = queryString;
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storage = storage;
        this.storageFolder = storageFolder;
        this.recursive = recursive;
    }
}

/**
 * Request model for listEmailModels operation.
 */
export class ListEmailModelsRequest {
    /**
     * A folder in email account
     */
    public folder: string;

    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * A MailQuery search string
     */
    public queryString: string;

    /**
     * Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     */
    public secondAccount: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * Specifies that should message be searched in subfolders recursively
     */
    public recursive: boolean;

    /**
     * Request model for listEmailModels operation.
     * @param folder A folder in email account
     * @param firstAccount Email account
     * @param queryString A MailQuery search string
     * @param secondAccount Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     * @param storage Storage name where account file(s) located
     * @param storageFolder Folder in storage where account file(s) located
     * @param recursive Specifies that should message be searched in subfolders recursively
     */
    public constructor(
        folder?: string, 
        firstAccount?: string, 
        queryString?: string, 
        secondAccount?: string, 
        storage?: string, 
        storageFolder?: string, 
        recursive?: boolean) {
        
        this.folder = folder;
        this.firstAccount = firstAccount;
        this.queryString = queryString;
        this.secondAccount = secondAccount;
        this.storage = storage;
        this.storageFolder = storageFolder;
        this.recursive = recursive;
    }
}

/**
 * Request model for listEmailThreads operation.
 */
export class ListEmailThreadsRequest {
    /**
     * A folder in email account.             
     */
    public folder: string;

    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     */
    public secondAccount: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * This parameter is only used in accounts with CacheFile. If true - get new messages and update threads cache for given folder. If false, get only threads from cache without any calls to an email account             
     */
    public updateFolderCache: boolean;

    /**
     * Limit messages cache size if CacheFile is used. Ignored in accounts without limits support             
     */
    public messagesCacheLimit: number;

    /**
     * Request model for listEmailThreads operation.
     * @param folder A folder in email account.             
     * @param firstAccount Email account
     * @param secondAccount Additional email account (for example, firstAccount could be IMAP, and second one could be SMTP)             
     * @param storage Storage name where account file(s) located
     * @param storageFolder Folder in storage where account file(s) located
     * @param updateFolderCache This parameter is only used in accounts with CacheFile. If true - get new messages and update threads cache for given folder. If false, get only threads from cache without any calls to an email account             
     * @param messagesCacheLimit Limit messages cache size if CacheFile is used. Ignored in accounts without limits support             
     */
    public constructor(
        folder?: string, 
        firstAccount?: string, 
        secondAccount?: string, 
        storage?: string, 
        storageFolder?: string, 
        updateFolderCache?: boolean, 
        messagesCacheLimit?: number) {
        
        this.folder = folder;
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storage = storage;
        this.storageFolder = storageFolder;
        this.updateFolderCache = updateFolderCache;
        this.messagesCacheLimit = messagesCacheLimit;
    }
}

/**
 * Request model for moveEmailMessage operation.
 */
export class MoveEmailMessageRequest {
    /**
     * Email account, folder and message specifier
     */
    public request: model.MoveEmailMessageRq;

    /**
     * Request model for moveEmailMessage operation.
     * @param request Email account, folder and message specifier
     */
    public constructor(
        request?: model.MoveEmailMessageRq) {
        
        this.request = request;
    }
}

/**
 * Request model for moveEmailThread operation.
 */
export class MoveEmailThreadRequest {
    /**
     * Thread identifier
     */
    public threadId: string;

    /**
     * Move thread request
     */
    public request: model.MoveEmailThreadRq;

    /**
     * Request model for moveEmailThread operation.
     * @param threadId Thread identifier
     * @param request Move thread request
     */
    public constructor(
        threadId?: string, 
        request?: model.MoveEmailThreadRq) {
        
        this.threadId = threadId;
        this.request = request;
    }
}

/**
 * Request model for moveFile operation.
 */
export class MoveFileRequest {
    /**
     * Gets or sets srcPath
     */
    public srcPath: string;

    /**
     * Gets or sets destPath
     */
    public destPath: string;

    /**
     * Gets or sets srcStorageName
     */
    public srcStorageName: string;

    /**
     * Gets or sets destStorageName
     */
    public destStorageName: string;

    /**
     * Gets or sets versionId
     */
    public versionId: string;

    /**
     * Request model for moveFile operation.
     * @param srcPath 
     * @param destPath 
     * @param srcStorageName 
     * @param destStorageName 
     * @param versionId 
     */
    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string, 
        versionId?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for moveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Gets or sets srcPath
     */
    public srcPath: string;

    /**
     * Gets or sets destPath
     */
    public destPath: string;

    /**
     * Gets or sets srcStorageName
     */
    public srcStorageName: string;

    /**
     * Gets or sets destStorageName
     */
    public destStorageName: string;

    /**
     * Request model for moveFolder operation.
     * @param srcPath 
     * @param destPath 
     * @param srcStorageName 
     * @param destStorageName 
     */
    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for objectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Gets or sets versionId
     */
    public versionId: string;

    /**
     * Request model for objectExists operation.
     * @param path 
     * @param storageName 
     * @param versionId 
     */
    public constructor(
        path?: string, 
        storageName?: string, 
        versionId?: string) {
        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for saveCalendarModel operation.
 */
export class SaveCalendarModelRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * Calendar properties update request
     */
    public rq: model.StorageModelRqOfCalendarDto;

    /**
     * Request model for saveCalendarModel operation.
     * @param name iCalendar file name in storage
     * @param rq Calendar properties update request
     */
    public constructor(
        name?: string, 
        rq?: model.StorageModelRqOfCalendarDto) {
        
        this.name = name;
        this.rq = rq;
    }
}

/**
 * Request model for saveContactModel operation.
 */
export class SaveContactModelRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name.
     */
    public name: string;

    /**
     * Create contact request.
     */
    public rq: model.StorageModelRqOfContactDto;

    /**
     * Request model for saveContactModel operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param name Contact document file name.
     * @param rq Create contact request.
     */
    public constructor(
        format?: string, 
        name?: string, 
        rq?: model.StorageModelRqOfContactDto) {
        
        this.format = format;
        this.name = name;
        this.rq = rq;
    }
}

/**
 * Request model for saveEmailClientAccount operation.
 */
export class SaveEmailClientAccountRequest {
    /**
     * Email account information
     */
    public request: model.StorageFileRqOfEmailClientAccount;

    /**
     * Request model for saveEmailClientAccount operation.
     * @param request Email account information
     */
    public constructor(
        request?: model.StorageFileRqOfEmailClientAccount) {
        
        this.request = request;
    }
}

/**
 * Request model for saveEmailClientMultiAccount operation.
 */
export class SaveEmailClientMultiAccountRequest {
    /**
     * Email accounts information
     */
    public request: model.StorageFileRqOfEmailClientMultiAccount;

    /**
     * Request model for saveEmailClientMultiAccount operation.
     * @param request Email accounts information
     */
    public constructor(
        request?: model.StorageFileRqOfEmailClientMultiAccount) {
        
        this.request = request;
    }
}

/**
 * Request model for saveEmailModel operation.
 */
export class SaveEmailModelRequest {
    /**
     * File format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     */
    public format: string;

    /**
     * Email document file name in storage.
     */
    public name: string;

    /**
     * Calendar properties update request.
     */
    public rq: model.StorageModelRqOfEmailDto;

    /**
     * Request model for saveEmailModel operation.
     * @param format File format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html
     * @param name Email document file name in storage.
     * @param rq Calendar properties update request.
     */
    public constructor(
        format?: string, 
        name?: string, 
        rq?: model.StorageModelRqOfEmailDto) {
        
        this.format = format;
        this.name = name;
        this.rq = rq;
    }
}

/**
 * Request model for saveMailAccount operation.
 */
export class SaveMailAccountRequest {
    /**
     * Email account information
     */
    public request: model.SaveEmailAccountRequest;

    /**
     * Request model for saveMailAccount operation.
     * @param request Email account information
     */
    public constructor(
        request?: model.SaveEmailAccountRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for saveMailOAuthAccount operation.
 */
export class SaveMailOAuthAccountRequest {
    /**
     * Email account information
     */
    public request: model.SaveOAuthEmailAccountRequest;

    /**
     * Request model for saveMailOAuthAccount operation.
     * @param request Email account information
     */
    public constructor(
        request?: model.SaveOAuthEmailAccountRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for sendEmail operation.
 */
export class SendEmailRequest {
    /**
     * Send email request
     */
    public request: model.SendEmailBaseRequest;

    /**
     * Request model for sendEmail operation.
     * @param request Send email request
     */
    public constructor(
        request?: model.SendEmailBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for sendEmailMime operation.
 */
export class SendEmailMimeRequest {
    /**
     * Send email request
     */
    public request: model.SendEmailMimeBaseRequest;

    /**
     * Request model for sendEmailMime operation.
     * @param request Send email request
     */
    public constructor(
        request?: model.SendEmailMimeBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for sendEmailModel operation.
 */
export class SendEmailModelRequest {
    /**
     * Send email request
     */
    public rq: model.SendEmailModelRq;

    /**
     * Request model for sendEmailModel operation.
     * @param rq Send email request
     */
    public constructor(
        rq?: model.SendEmailModelRq) {
        
        this.rq = rq;
    }
}

/**
 * Request model for setEmailProperty operation.
 */
export class SetEmailPropertyRequest {
    /**
     * A property name that should be changed
     */
    public propertyName: string;

    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * A property that should be changed and optional Storage info to specify where the file located             
     */
    public request: model.SetEmailPropertyRequest;

    /**
     * Request model for setEmailProperty operation.
     * @param propertyName A property name that should be changed
     * @param fileName Email document file name
     * @param request A property that should be changed and optional Storage info to specify where the file located             
     */
    public constructor(
        propertyName?: string, 
        fileName?: string, 
        request?: model.SetEmailPropertyRequest) {
        
        this.propertyName = propertyName;
        this.fileName = fileName;
        this.request = request;
    }
}

/**
 * Request model for setEmailReadFlag operation.
 */
export class SetEmailReadFlagRequest {
    /**
     * Message is read request
     */
    public request: model.SetMessageReadFlagAccountBaseRequest;

    /**
     * Request model for setEmailReadFlag operation.
     * @param request Message is read request
     */
    public constructor(
        request?: model.SetMessageReadFlagAccountBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for setEmailThreadReadFlag operation.
 */
export class SetEmailThreadReadFlagRequest {
    /**
     * Thread id
     */
    public threadId: string;

    /**
     * Email account specifier and IsRead flag
     */
    public request: model.EmailThreadReadFlagRq;

    /**
     * Request model for setEmailThreadReadFlag operation.
     * @param threadId Thread id
     * @param request Email account specifier and IsRead flag
     */
    public constructor(
        threadId?: string, 
        request?: model.EmailThreadReadFlagRq) {
        
        this.threadId = threadId;
        this.request = request;
    }
}

/**
 * Request model for storageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for storageExists operation.
     * @param storageName 
     */
    public constructor(
        storageName?: string) {
        
        this.storageName = storageName;
    }
}

/**
 * Request model for updateCalendarProperties operation.
 */
export class UpdateCalendarPropertiesRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * Calendar properties update request
     */
    public request: model.HierarchicalObjectRequest;

    /**
     * Request model for updateCalendarProperties operation.
     * @param name iCalendar file name in storage
     * @param request Calendar properties update request
     */
    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for updateContactProperties operation.
 */
export class UpdateContactPropertiesRequest {
    /**
     * Contact document format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Properties that should be updated/added
     */
    public request: model.HierarchicalObjectRequest;

    /**
     * Request model for updateContactProperties operation.
     * @param format Contact document format Enum, available values: VCard, WebDav, Msg
     * @param name Contact document file name
     * @param request Properties that should be updated/added
     */
    public constructor(
        format?: string, 
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.format = format;
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for updateMapiProperties operation.
 */
export class UpdateMapiPropertiesRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Properties that should be updated/added
     */
    public request: model.HierarchicalObjectRequest;

    /**
     * Request model for updateMapiProperties operation.
     * @param name Document file name
     * @param request Properties that should be updated/added
     */
    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for uploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for uploadFile operation.
     * @param path 
     * @param file File to upload
     * @param storageName 
     */
    public constructor(
        path?: string, 
        file?: Buffer, 
        storageName?: string) {
        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

