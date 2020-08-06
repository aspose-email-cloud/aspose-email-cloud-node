
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
        properties?: Array< model.MapiPropertyDto >,
        discriminator?: string,
        electronicAddresses?: model.MapiContactElectronicAddressPropertySetDto,
        events?: model.MapiContactEventPropertySetDto,
        nameInfo?: model.MapiContactNamePropertySetDto,
        otherFields?: model.MapiContactOtherPropertySetDto,
        personalInfo?: model.MapiContactPersonalInfoPropertySetDto,
        photo?: model.MapiContactPhotoDto,
        physicalAddresses?: model.MapiContactPhysicalAddressPropertySetDto,
        professionalInfo?: model.MapiContactProfessionalPropertySetDto,
        telephones?: model.MapiContactTelephonePropertySetDto) {
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

