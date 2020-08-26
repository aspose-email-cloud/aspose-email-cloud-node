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
 * Represents an Outlook Message format document.             
 */
export class MapiMessageDto extends model.MapiMessageItemBaseDto {

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
        transportMessageHeaders?: string
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



