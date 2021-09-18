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
    public attachments: Array< model.MapiAttachmentDto >;
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
     * The content type of message body./nEnum, available values: PlainText, Html, Rtf
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
    public recipients: Array< model.MapiRecipientDto >;
    /**
     * Contains values that indicate the message sensitivity./nEnum, available values: None, Personal, Private, CompanyConfidential
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
    public properties: Array< model.MapiPropertyDto >;
    /**
     * Model type discriminator. Used for serialization purposes. Field is set automatically by SDK.
     */
    public get discriminator(): string {
        return this.constructor.name;
    }
    public set discriminator(_newType: string) {
        /* do nothing */
    };


    /**
     * Base Dto for MapiMessage, MapiCalendar or MapiContact             
     * @param attachments Message item attachments.             
     * @param billing Billing information associated with an item.             
     * @param body Message text.             
     * @param bodyHtml Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
     * @param bodyRtf RTF formatted message text.             
     * @param bodyType The content type of message body./nEnum, available values: PlainText, Html, Rtf
     * @param categories Contains keywords or categories for the message object.             
     * @param companies Contains the names of the companies that are associated with an item.             
     * @param itemId The item id, uses with a server.             
     * @param messageClass Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
     * @param mileage Contains the mileage information that is associated with an item.             
     * @param recipients Recipients of the message.             
     * @param sensitivity Contains values that indicate the message sensitivity./nEnum, available values: None, Personal, Private, CompanyConfidential
     * @param subject Subject of the message.             
     * @param subjectPrefix Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
     * @param properties List of MAPI properties             
     */
    public constructor(
        
        attachments?: Array< model.MapiAttachmentDto >,
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
        recipients?: Array< model.MapiRecipientDto >,
        sensitivity?: string,
        subject?: string,
        subjectPrefix?: string,
        properties?: Array< model.MapiPropertyDto >
        
    ) {
        
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
        
    }
}

/**
 *  MapiMessageItemBaseDto model builder
 */
export class MapiMessageItemBaseDtoBuilder {
    private readonly model: MapiMessageItemBaseDto;
    public constructor(model: MapiMessageItemBaseDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiMessageItemBaseDto {
        return this.model;
    }

    /**
    * Message item attachments.             
    */
    public attachments(attachments: Array< model.MapiAttachmentDto >): MapiMessageItemBaseDtoBuilder {
        this.model.attachments = attachments;
        return this;
    }
    /**
    * Billing information associated with an item.             
    */
    public billing(billing: string): MapiMessageItemBaseDtoBuilder {
        this.model.billing = billing;
        return this;
    }
    /**
    * Message text.             
    */
    public body(body: string): MapiMessageItemBaseDtoBuilder {
        this.model.body = body;
        return this;
    }
    /**
    * Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
    */
    public bodyHtml(bodyHtml: string): MapiMessageItemBaseDtoBuilder {
        this.model.bodyHtml = bodyHtml;
        return this;
    }
    /**
    * RTF formatted message text.             
    */
    public bodyRtf(bodyRtf: string): MapiMessageItemBaseDtoBuilder {
        this.model.bodyRtf = bodyRtf;
        return this;
    }
    /**
    * The content type of message body./nEnum, available values: PlainText, Html, Rtf
    */
    public bodyType(bodyType: string): MapiMessageItemBaseDtoBuilder {
        this.model.bodyType = bodyType;
        return this;
    }
    /**
    * Contains keywords or categories for the message object.             
    */
    public categories(categories: Array<string>): MapiMessageItemBaseDtoBuilder {
        this.model.categories = categories;
        return this;
    }
    /**
    * Contains the names of the companies that are associated with an item.             
    */
    public companies(companies: Array<string>): MapiMessageItemBaseDtoBuilder {
        this.model.companies = companies;
        return this;
    }
    /**
    * The item id, uses with a server.             
    */
    public itemId(itemId: string): MapiMessageItemBaseDtoBuilder {
        this.model.itemId = itemId;
        return this;
    }
    /**
    * Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
    */
    public messageClass(messageClass: string): MapiMessageItemBaseDtoBuilder {
        this.model.messageClass = messageClass;
        return this;
    }
    /**
    * Contains the mileage information that is associated with an item.             
    */
    public mileage(mileage: string): MapiMessageItemBaseDtoBuilder {
        this.model.mileage = mileage;
        return this;
    }
    /**
    * Recipients of the message.             
    */
    public recipients(recipients: Array< model.MapiRecipientDto >): MapiMessageItemBaseDtoBuilder {
        this.model.recipients = recipients;
        return this;
    }
    /**
    * Contains values that indicate the message sensitivity./nEnum, available values: None, Personal, Private, CompanyConfidential
    */
    public sensitivity(sensitivity: string): MapiMessageItemBaseDtoBuilder {
        this.model.sensitivity = sensitivity;
        return this;
    }
    /**
    * Subject of the message.             
    */
    public subject(subject: string): MapiMessageItemBaseDtoBuilder {
        this.model.subject = subject;
        return this;
    }
    /**
    * Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
    */
    public subjectPrefix(subjectPrefix: string): MapiMessageItemBaseDtoBuilder {
        this.model.subjectPrefix = subjectPrefix;
        return this;
    }
    /**
    * List of MAPI properties             
    */
    public properties(properties: Array< model.MapiPropertyDto >): MapiMessageItemBaseDtoBuilder {
        this.model.properties = properties;
        return this;
    }
}

