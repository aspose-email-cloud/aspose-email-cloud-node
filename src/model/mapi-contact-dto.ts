/*
* MIT License

* Copyright (c) 2018-2023 Aspose Pty Ltd

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
 * Represents outlook contact information.             
 */
export class MapiContactDto extends model.MapiMessageItemBaseDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "electronicAddresses",
            baseName: "electronicAddresses",
            type: "MapiContactElectronicAddressPropertySetDto",
        },
        {
            name: "events",
            baseName: "events",
            type: "MapiContactEventPropertySetDto",
        },
        {
            name: "nameInfo",
            baseName: "nameInfo",
            type: "MapiContactNamePropertySetDto",
        },
        {
            name: "otherFields",
            baseName: "otherFields",
            type: "MapiContactOtherPropertySetDto",
        },
        {
            name: "personalInfo",
            baseName: "personalInfo",
            type: "MapiContactPersonalInfoPropertySetDto",
        },
        {
            name: "photo",
            baseName: "photo",
            type: "MapiContactPhotoDto",
        },
        {
            name: "physicalAddresses",
            baseName: "physicalAddresses",
            type: "MapiContactPhysicalAddressPropertySetDto",
        },
        {
            name: "professionalInfo",
            baseName: "professionalInfo",
            type: "MapiContactProfessionalPropertySetDto",
        },
        {
            name: "telephones",
            baseName: "telephones",
            type: "MapiContactTelephonePropertySetDto",
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
    public electronicAddresses: model.MapiContactElectronicAddressPropertySetDto;
    /**
     * Specify events associated with a contact.             
     */
    public events: model.MapiContactEventPropertySetDto;
    /**
     * The properties are used to specify the name of the person represented by the contact.             
     */
    public nameInfo: model.MapiContactNamePropertySetDto;
    /**
     * Specify other fields of contact.             
     */
    public otherFields: model.MapiContactOtherPropertySetDto;
    /**
     * Specify other additional contact information.             
     */
    public personalInfo: model.MapiContactPersonalInfoPropertySetDto;
    /**
     * Contact photo.             
     */
    public photo: model.MapiContactPhotoDto;
    /**
     * Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address.             
     */
    public physicalAddresses: model.MapiContactPhysicalAddressPropertySetDto;
    /**
     * Properties are used to store professional details for the person represented by the contact.             
     */
    public professionalInfo: model.MapiContactProfessionalPropertySetDto;
    /**
     * Specify telephone numbers for the contact.             
     */
    public telephones: model.MapiContactTelephonePropertySetDto;

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
        ,
        electronicAddresses?: model.MapiContactElectronicAddressPropertySetDto,
        events?: model.MapiContactEventPropertySetDto,
        nameInfo?: model.MapiContactNamePropertySetDto,
        otherFields?: model.MapiContactOtherPropertySetDto,
        personalInfo?: model.MapiContactPersonalInfoPropertySetDto,
        photo?: model.MapiContactPhotoDto,
        physicalAddresses?: model.MapiContactPhysicalAddressPropertySetDto,
        professionalInfo?: model.MapiContactProfessionalPropertySetDto,
        telephones?: model.MapiContactTelephonePropertySetDto
    ) {
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
 *  MapiContactDto model builder
 */
export class MapiContactDtoBuilder {
    private readonly model: MapiContactDto;
    public constructor(model: MapiContactDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiContactDto {
        return this.model;
    }

    /**
    * Message item attachments.             
    */
    public attachments(attachments: Array< model.MapiAttachmentDto >): MapiContactDtoBuilder {
        this.model.attachments = attachments;
        return this;
    }
    /**
    * Billing information associated with an item.             
    */
    public billing(billing: string): MapiContactDtoBuilder {
        this.model.billing = billing;
        return this;
    }
    /**
    * Message text.             
    */
    public body(body: string): MapiContactDtoBuilder {
        this.model.body = body;
        return this;
    }
    /**
    * Gets the BodyRtf of the message converted to HTML, if present, otherwise an empty string.             
    */
    public bodyHtml(bodyHtml: string): MapiContactDtoBuilder {
        this.model.bodyHtml = bodyHtml;
        return this;
    }
    /**
    * RTF formatted message text.             
    */
    public bodyRtf(bodyRtf: string): MapiContactDtoBuilder {
        this.model.bodyRtf = bodyRtf;
        return this;
    }
    /**
    * The content type of message body. Enum, available values: PlainText, Html, Rtf
    */
    public bodyType(bodyType: string): MapiContactDtoBuilder {
        this.model.bodyType = bodyType;
        return this;
    }
    /**
    * Contains keywords or categories for the message object.             
    */
    public categories(categories: Array<string>): MapiContactDtoBuilder {
        this.model.categories = categories;
        return this;
    }
    /**
    * Contains the names of the companies that are associated with an item.             
    */
    public companies(companies: Array<string>): MapiContactDtoBuilder {
        this.model.companies = companies;
        return this;
    }
    /**
    * The item id, uses with a server.             
    */
    public itemId(itemId: string): MapiContactDtoBuilder {
        this.model.itemId = itemId;
        return this;
    }
    /**
    * Case-sensitive string that identifies the sender-defined message class, such as IPM.Note. The message class specifies the type, purpose, or content of the message.             
    */
    public messageClass(messageClass: string): MapiContactDtoBuilder {
        this.model.messageClass = messageClass;
        return this;
    }
    /**
    * Contains the mileage information that is associated with an item.             
    */
    public mileage(mileage: string): MapiContactDtoBuilder {
        this.model.mileage = mileage;
        return this;
    }
    /**
    * Recipients of the message.             
    */
    public recipients(recipients: Array< model.MapiRecipientDto >): MapiContactDtoBuilder {
        this.model.recipients = recipients;
        return this;
    }
    /**
    * Contains values that indicate the message sensitivity. Enum, available values: None, Personal, Private, CompanyConfidential
    */
    public sensitivity(sensitivity: string): MapiContactDtoBuilder {
        this.model.sensitivity = sensitivity;
        return this;
    }
    /**
    * Subject of the message.             
    */
    public subject(subject: string): MapiContactDtoBuilder {
        this.model.subject = subject;
        return this;
    }
    /**
    * Subject prefix that typically indicates some action on a message, such as \"FW: \" for forwarding.             
    */
    public subjectPrefix(subjectPrefix: string): MapiContactDtoBuilder {
        this.model.subjectPrefix = subjectPrefix;
        return this;
    }
    /**
    * List of MAPI properties             
    */
    public properties(properties: Array< model.MapiPropertyDto >): MapiContactDtoBuilder {
        this.model.properties = properties;
        return this;
    }
    /**
    * Specify properties for up to three different e-mail addresses and three different fax addresses.             
    */
    public electronicAddresses(electronicAddresses: model.MapiContactElectronicAddressPropertySetDto): MapiContactDtoBuilder {
        this.model.electronicAddresses = electronicAddresses;
        return this;
    }
    /**
    * Specify events associated with a contact.             
    */
    public events(events: model.MapiContactEventPropertySetDto): MapiContactDtoBuilder {
        this.model.events = events;
        return this;
    }
    /**
    * The properties are used to specify the name of the person represented by the contact.             
    */
    public nameInfo(nameInfo: model.MapiContactNamePropertySetDto): MapiContactDtoBuilder {
        this.model.nameInfo = nameInfo;
        return this;
    }
    /**
    * Specify other fields of contact.             
    */
    public otherFields(otherFields: model.MapiContactOtherPropertySetDto): MapiContactDtoBuilder {
        this.model.otherFields = otherFields;
        return this;
    }
    /**
    * Specify other additional contact information.             
    */
    public personalInfo(personalInfo: model.MapiContactPersonalInfoPropertySetDto): MapiContactDtoBuilder {
        this.model.personalInfo = personalInfo;
        return this;
    }
    /**
    * Contact photo.             
    */
    public photo(photo: model.MapiContactPhotoDto): MapiContactDtoBuilder {
        this.model.photo = photo;
        return this;
    }
    /**
    * Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address.             
    */
    public physicalAddresses(physicalAddresses: model.MapiContactPhysicalAddressPropertySetDto): MapiContactDtoBuilder {
        this.model.physicalAddresses = physicalAddresses;
        return this;
    }
    /**
    * Properties are used to store professional details for the person represented by the contact.             
    */
    public professionalInfo(professionalInfo: model.MapiContactProfessionalPropertySetDto): MapiContactDtoBuilder {
        this.model.professionalInfo = professionalInfo;
        return this;
    }
    /**
    * Specify telephone numbers for the contact.             
    */
    public telephones(telephones: model.MapiContactTelephonePropertySetDto): MapiContactDtoBuilder {
        this.model.telephones = telephones;
        return this;
    }
}

