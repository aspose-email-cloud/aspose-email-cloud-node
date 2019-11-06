
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

    public firstAccount: string;
    
    public secondAccount: string;
    
    public storageFolder: StorageFolderLocation;
    
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
    
}

export class AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "AsposeResponse.CodeEnum",
        },        
        {
            name: "status",
            baseName: "status",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AsposeResponse.attributeTypeMap;
    }

    public code: AsposeResponse.CodeEnum;
    
    public status: string;
    
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace AsposeResponse {
    export enum CodeEnum {
        Continue = 'Continue' as any,
        SwitchingProtocols = 'SwitchingProtocols' as any,
        Processing = 'Processing' as any,
        EarlyHints = 'EarlyHints' as any,
        OK = 'OK' as any,
        Created = 'Created' as any,
        Accepted = 'Accepted' as any,
        NonAuthoritativeInformation = 'NonAuthoritativeInformation' as any,
        NoContent = 'NoContent' as any,
        ResetContent = 'ResetContent' as any,
        PartialContent = 'PartialContent' as any,
        MultiStatus = 'MultiStatus' as any,
        AlreadyReported = 'AlreadyReported' as any,
        IMUsed = 'IMUsed' as any,
        MultipleChoices = 'MultipleChoices' as any,
        Ambiguous = 'Ambiguous' as any,
        MovedPermanently = 'MovedPermanently' as any,
        Moved = 'Moved' as any,
        Found = 'Found' as any,
        Redirect = 'Redirect' as any,
        SeeOther = 'SeeOther' as any,
        RedirectMethod = 'RedirectMethod' as any,
        NotModified = 'NotModified' as any,
        UseProxy = 'UseProxy' as any,
        Unused = 'Unused' as any,
        TemporaryRedirect = 'TemporaryRedirect' as any,
        RedirectKeepVerb = 'RedirectKeepVerb' as any,
        PermanentRedirect = 'PermanentRedirect' as any,
        BadRequest = 'BadRequest' as any,
        Unauthorized = 'Unauthorized' as any,
        PaymentRequired = 'PaymentRequired' as any,
        Forbidden = 'Forbidden' as any,
        NotFound = 'NotFound' as any,
        MethodNotAllowed = 'MethodNotAllowed' as any,
        NotAcceptable = 'NotAcceptable' as any,
        ProxyAuthenticationRequired = 'ProxyAuthenticationRequired' as any,
        RequestTimeout = 'RequestTimeout' as any,
        Conflict = 'Conflict' as any,
        Gone = 'Gone' as any,
        LengthRequired = 'LengthRequired' as any,
        PreconditionFailed = 'PreconditionFailed' as any,
        RequestEntityTooLarge = 'RequestEntityTooLarge' as any,
        RequestUriTooLong = 'RequestUriTooLong' as any,
        UnsupportedMediaType = 'UnsupportedMediaType' as any,
        RequestedRangeNotSatisfiable = 'RequestedRangeNotSatisfiable' as any,
        ExpectationFailed = 'ExpectationFailed' as any,
        MisdirectedRequest = 'MisdirectedRequest' as any,
        UnprocessableEntity = 'UnprocessableEntity' as any,
        Locked = 'Locked' as any,
        FailedDependency = 'FailedDependency' as any,
        UpgradeRequired = 'UpgradeRequired' as any,
        PreconditionRequired = 'PreconditionRequired' as any,
        TooManyRequests = 'TooManyRequests' as any,
        RequestHeaderFieldsTooLarge = 'RequestHeaderFieldsTooLarge' as any,
        UnavailableForLegalReasons = 'UnavailableForLegalReasons' as any,
        InternalServerError = 'InternalServerError' as any,
        NotImplemented = 'NotImplemented' as any,
        BadGateway = 'BadGateway' as any,
        ServiceUnavailable = 'ServiceUnavailable' as any,
        GatewayTimeout = 'GatewayTimeout' as any,
        HttpVersionNotSupported = 'HttpVersionNotSupported' as any,
        VariantAlsoNegotiates = 'VariantAlsoNegotiates' as any,
        InsufficientStorage = 'InsufficientStorage' as any,
        LoopDetected = 'LoopDetected' as any,
        NotExtended = 'NotExtended' as any,
        NetworkAuthenticationRequired = 'NetworkAuthenticationRequired' as any,
    }
}
// tslint:enable:quotemark
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
    public type: string;
    
}

/**
 * 
 */
export enum ContactFormat {
    VCard = 'VCard' as any,
    WebDav = 'WebDav' as any,
    Msg = 'Msg' as any,
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
            type: "any",
        },        
        {
            name: "protocolType",
            baseName: "protocolType",
            type: "any",
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
     * Email account security options
     */
    public securityOptions: any;
    
    /**
     * Email account protocol type
     */
    public protocolType: any;
    
    /**
     * Email account description
     */
    public description: string;
    
    /**
     * A storage file location info to store email account
     */
    public storageFile: StorageFileLocation;
    
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
    
    public list: Array<EmailProperty>;
    
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

    public link: Link;
    
    public name: string;
    
    public value: any;
    
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

    public folder: string;
    
    public markAsSent: boolean;
    
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
    
}

/**
 * An email document response
 */
export class EmailDocumentResponse extends AsposeResponse {

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
        return super.getAttributeTypeMap().concat(EmailDocumentResponse.attributeTypeMap);
    }

    /**
     * An email document requested
     */
    public document: EmailDocument;
    
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace EmailDocumentResponse {
}
// tslint:enable:quotemark
/**
 * Email property response.
 */
export class EmailPropertyResponse extends AsposeResponse {

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
        return super.getAttributeTypeMap().concat(EmailPropertyResponse.attributeTypeMap);
    }

    /**
     * Gets or sets email property.
     */
    public emailProperty: EmailProperty;
    
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace EmailPropertyResponse {
}
// tslint:enable:quotemark
export class FaultResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "message",
            baseName: "message",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FaultResponse.attributeTypeMap);
    }

    public message: string;
    
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FaultResponse {
}
// tslint:enable:quotemark
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
    
}

/**
 * Email account folders list
 */
export class ListFoldersResponse extends AsposeResponse {

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
        return super.getAttributeTypeMap().concat(ListFoldersResponse.attributeTypeMap);
    }

    public value: Array<MailServerFolder>;
    
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ListFoldersResponse {
}
// tslint:enable:quotemark
/**
 * Email messages list
 */
export class ListMessagesResponse extends AsposeResponse {

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
        return super.getAttributeTypeMap().concat(ListMessagesResponse.attributeTypeMap);
    }

    /**
     * Email messages serialized as MIME strings
     */
    public value: Array<string>;
    
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ListMessagesResponse {
}
// tslint:enable:quotemark
/**
 * Email document property DTO.
 */
export class MimeResponse extends AsposeResponse {

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
        return super.getAttributeTypeMap().concat(MimeResponse.attributeTypeMap);
    }

    /**
     * Gets or sets base64 encoded mime content.
     */
    public mime: string;
    
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace MimeResponse {
}
// tslint:enable:quotemark
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
    
}

/**
 * Email document property DTO.
 */
export class ValueResponse extends AsposeResponse {

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
        return super.getAttributeTypeMap().concat(ValueResponse.attributeTypeMap);
    }

    /**
     * Gets or sets string content.
     */
    public value: string;
    
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ValueResponse {
}
// tslint:enable:quotemark
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
    
}

const enumsMap = {
    "AsposeResponse.CodeEnum": AsposeResponse.CodeEnum,
    "ContactFormat": ContactFormat,
};

const typeMap = {
            AccountBaseRequest,
            AddAttachmentRequest,
            AsposeResponse,
            BaseObject,
            CreateEmailRequest,
            DiscUsage,
            EmailAccountRequest,
            EmailDocument,
            EmailProperties,
            EmailProperty,
            ErrorDetails,
            FileVersions,
            FilesList,
            FilesUploadResult,
            HierarchicalObjectRequest,
            HierarchicalObjectResponse,
            Link,
            ListResponseOfHierarchicalObjectResponse,
            ListResponseOfString,
            MailServerFolder,
            ModelError,
            ObjectExist,
            SetEmailPropertyRequest,
            StorageExist,
            StorageFile,
            StorageFolderLocation,
            AppendEmailAccountBaseRequest,
            CreateFolderBaseRequest,
            DeleteFolderBaseRequest,
            DeleteMessageBaseRequest,
            EmailDocumentResponse,
            EmailPropertyResponse,
            FaultResponse,
            FileVersion,
            HierarchicalObject,
            IndexedHierarchicalObject,
            IndexedPrimitiveObject,
            ListFoldersResponse,
            ListMessagesResponse,
            MimeResponse,
            PrimitiveObject,
            SaveEmailAccountRequest,
            SaveOAuthEmailAccountRequest,
            SendEmailBaseRequest,
            SendEmailMimeBaseRequest,
            SetMessageReadFlagAccountBaseRequest,
            StorageFileLocation,
            ValueResponse,
            AppendEmailBaseRequest,
            AppendEmailMimeBaseRequest,
};

export {enumsMap, typeMap};
