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
 * Represents Email document DTO.
 */
export class EmailDocument {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "links",
            baseName: "Links",
            type: "Array<Link>",
        },        
        {
            name: "documentProperties",
            baseName: "DocumentProperties",
            type: "EmailProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailDocument.attributeTypeMap;
    }

    /**
     * Gets or sets links that originate from this document.
     */
    public links: Array<Link>;
    
    /**
     * Gets or sets list of document property.
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
            baseName: "Link",
            type: "Link",
        },        
        {
            name: "list",
            baseName: "List",
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
            baseName: "Link",
            type: "Link",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailProperty.attributeTypeMap;
    }

    /**
     * Gets or sets link that originate from this document.
     */
    public link: Link;
    
    /**
     * Gets or sets name of email property.
     */
    public name: string;
    
}

/**
 * 
 */
export class HttpStatusCode {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return HttpStatusCode.attributeTypeMap;
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
            baseName: "Href",
            type: "string",
        },        
        {
            name: "rel",
            baseName: "Rel",
            type: "string",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "title",
            baseName: "Title",
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

export class MailServerFolder {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "id",
            baseName: "Id",
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
 * Type of connection protocol.
 */
export class ProtocolType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProtocolType.attributeTypeMap;
    }

}

/**
 * The basic SaaSposeResponse response class kept from the old Aspose for Cloud Platform. We keep this base class and use it because most probably users are already using it to get API responses. The plan in future is to get rid of this name, but who knows when ?!
 */
export class SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "Code",
            type: "HttpStatusCode",
        },        
        {
            name: "status",
            baseName: "Status",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaaSposeResponse.attributeTypeMap;
    }

    public code: HttpStatusCode;
    
    public status: string;
    
}

/**
 * 
 */
export class SecurityOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SecurityOptions.attributeTypeMap;
    }

}

/**
 * Email document property DTO.
 */
export class EmailDocumentResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "document",
            baseName: "Document",
            type: "EmailDocument",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailDocumentResponse.attributeTypeMap);
    }

    /**
     * Gets or sets email document.
     */
    public document: EmailDocument;
    
}

/**
 * Email property response.
 */
export class EmailPropertyResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emailProperty",
            baseName: "EmailProperty",
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

/**
 * Response object with array of mailbox folders.
 */
export class ListFoldersResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folders",
            baseName: "Folders",
            type: "Array<MailServerFolder>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListFoldersResponse.attributeTypeMap);
    }

    /**
     * Gets or sets array of mailbox folders.
     */
    public folders: Array<MailServerFolder>;
    
}

/**
 * Email document property DTO.
 */
export class ListResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListResponse.attributeTypeMap);
    }

    /**
     * Gets or sets array of strings.
     */
    public list: Array<string>;
    
}

/**
 * Email document property DTO.
 */
export class MimeResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "mime",
            baseName: "Mime",
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

const enumsMap = {
};

const typeMap = {
            EmailDocument,
            EmailProperties,
            EmailProperty,
            HttpStatusCode,
            Link,
            MailServerFolder,
            ProtocolType,
            SaaSposeResponse,
            SecurityOptions,
            EmailDocumentResponse,
            EmailPropertyResponse,
            ListFoldersResponse,
            ListResponse,
            MimeResponse,
};

export {enumsMap, typeMap};

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets folder
     */
    public folder: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets attachName
     */
    public attachName: string;

    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets folder
     */
    public folder: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets propertyName
     */
    public propertyName: string;

    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets folder
     */
    public folder: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets attachName
     */
    public attachName: string;

    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets folder
     */
    public folder: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets email
     */
    public email: EmailDocument;

    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets folder
     */
    public folder: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets propertyName
     */
    public propertyName: string;

    /**
     * Gets or sets property
     */
    public property: EmailProperty;

    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets folder
     */
    public folder: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * Gets or sets mailPath
     */
    public mailPath: string;

    /**
     * Gets or sets markAsSent
     */
    public markAsSent: boolean;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * Gets or sets base64MimeMessage
     */
    public base64MimeMessage: string;

    /**
     * Gets or sets markAsSent
     */
    public markAsSent: boolean;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets parentFolder
     */
    public parentFolder: string;

    /**
     * Gets or sets name
     */
    public name: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * Gets or sets deletePermanently
     */
    public deletePermanently: boolean;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets messageId
     */
    public messageId: string;

    /**
     * Gets or sets deletePermanently
     */
    public deletePermanently: boolean;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets messageId
     */
    public messageId: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets parentFolder
     */
    public parentFolder: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * Gets or sets recursive
     */
    public recursive: boolean;

    /**
     * Gets or sets queryString
     */
    public queryString: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName
     */
    public accountName: string;

    /**
     * Gets or sets host
     */
    public host: string;

    /**
     * Gets or sets port
     */
    public port: number;

    /**
     * Gets or sets login
     */
    public login: string;

    /**
     * Gets or sets password
     */
    public password: string;

    /**
     * Gets or sets securityOptions
     */
    public securityOptions: number;

    /**
     * Gets or sets protocolType
     */
    public protocolType: number;

    /**
     * Gets or sets description
     */
    public description: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName
     */
    public accountName: string;

    /**
     * Gets or sets host
     */
    public host: string;

    /**
     * Gets or sets port
     */
    public port: number;

    /**
     * Gets or sets login
     */
    public login: string;

    /**
     * Gets or sets clientId
     */
    public clientId: string;

    /**
     * Gets or sets clientSecret
     */
    public clientSecret: string;

    /**
     * Gets or sets refreshToken
     */
    public refreshToken: string;

    /**
     * Gets or sets securityOptions
     */
    public securityOptions: number;

    /**
     * Gets or sets protocolType
     */
    public protocolType: number;

    /**
     * Gets or sets description
     */
    public description: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets mailPath
     */
    public mailPath: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets base64MimeMessage
     */
    public base64MimeMessage: string;
}

/**
 * Request model for  operation.
 */
export class Request {
    /**
     * Gets or sets storage
     */
    public storage: string;

    /**
     * Gets or sets accountName1
     */
    public accountName1: string;

    /**
     * Gets or sets accountName2
     */
    public accountName2: string;

    /**
     * Gets or sets messageId
     */
    public messageId: string;

    /**
     * Gets or sets isRead
     */
    public isRead: boolean;
}
