
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
    public alternateViews: Array< model.AlternateView >;
    /**
     * Email message attachments.             
     */
    public attachments: Array< model.Attachment >;
    /**
     * BCC recipients.             
     */
    public bcc: Array< model.MailAddress >;
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
    public cc: Array< model.MailAddress >;
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
    public from: model.MailAddress;
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
    public linkedResources: Array< model.LinkedResource >;
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
    public readReceiptTo: Array< model.MailAddress >;
    /**
     * The list of addresses to reply to for the mail message.             
     */
    public replyToList: Array< model.MailAddress >;
    /**
     * ReversePath address.             
     */
    public reversePath: model.MailAddress;
    /**
     * Sender address.             
     */
    public sender: model.MailAddress;
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
    public to: Array< model.MailAddress >;
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
        
        alternateViews?: Array< model.AlternateView >,
        attachments?: Array< model.Attachment >,
        bcc?: Array< model.MailAddress >,
        body?: string,
        bodyEncoding?: string,
        bodyType?: string,
        cc?: Array< model.MailAddress >,
        date?: Date,
        deliveryNotificationOptions?: Array<string>,
        from?: model.MailAddress,
        headers?: { [key: string]: string; },
        htmlBody?: string,
        htmlBodyText?: string,
        isBodyHtml?: boolean,
        isDraft?: boolean,
        isEncrypted?: boolean,
        isSigned?: boolean,
        linkedResources?: Array< model.LinkedResource >,
        messageId?: string,
        originalIsTnef?: boolean,
        preferredTextEncoding?: string,
        priority?: string,
        readReceiptTo?: Array< model.MailAddress >,
        replyToList?: Array< model.MailAddress >,
        reversePath?: model.MailAddress,
        sender?: model.MailAddress,
        sensitivity?: string,
        subject?: string,
        subjectEncoding?: string,
        timeZoneOffset?: number,
        to?: Array< model.MailAddress >,
        xMailer?: string
    ) {
        
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



