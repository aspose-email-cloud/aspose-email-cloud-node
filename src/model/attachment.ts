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
 * Document attachment.             
 */
export class Attachment extends model.AttachmentBase {

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

    /**
     * Document attachment.             
     * @param base64Data Attachment file content as Base64 string.             
     * @param contentId Attachment content id             
     * @param contentType Content type             
     * @param headers Attachment headers.             
     * @param contentDisposition Content-Disposition header. Read only.             
     * @param isEmbeddedMessage Determines if attachment is an embedded message. Read only.             
     * @param name Attachment name.             
     * @param nameEncoding Encoding of attachment name.             
     * @param preferredTextEncoding Preferred text encoding.             
     */
    public constructor(
        
        base64Data?: string,
        contentId?: string,
        contentType?: model.ContentType,
        headers?: { [key: string]: string; },
        contentDisposition?: string,
        isEmbeddedMessage?: boolean,
        name?: string,
        nameEncoding?: string,
        preferredTextEncoding?: string
    ) {
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
 *  Attachment model builder
 */
export class AttachmentBuilder {
    private readonly model: Attachment;
    public constructor(model: Attachment) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): Attachment {
        return this.model;
    }

    /**
    * Attachment file content as Base64 string.             
    */
    public base64Data(base64Data: string): AttachmentBuilder {
        this.model.base64Data = base64Data;
        return this;
    }
    /**
    * Attachment content id             
    */
    public contentId(contentId: string): AttachmentBuilder {
        this.model.contentId = contentId;
        return this;
    }
    /**
    * Content type             
    */
    public contentType(contentType: model.ContentType): AttachmentBuilder {
        this.model.contentType = contentType;
        return this;
    }
    /**
    * Attachment headers.             
    */
    public headers(headers: { [key: string]: string; }): AttachmentBuilder {
        this.model.headers = headers;
        return this;
    }
    /**
    * Content-Disposition header. Read only.             
    */
    public contentDisposition(contentDisposition: string): AttachmentBuilder {
        this.model.contentDisposition = contentDisposition;
        return this;
    }
    /**
    * Determines if attachment is an embedded message. Read only.             
    */
    public isEmbeddedMessage(isEmbeddedMessage: boolean): AttachmentBuilder {
        this.model.isEmbeddedMessage = isEmbeddedMessage;
        return this;
    }
    /**
    * Attachment name.             
    */
    public name(name: string): AttachmentBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * Encoding of attachment name.             
    */
    public nameEncoding(nameEncoding: string): AttachmentBuilder {
        this.model.nameEncoding = nameEncoding;
        return this;
    }
    /**
    * Preferred text encoding.             
    */
    public preferredTextEncoding(preferredTextEncoding: string): AttachmentBuilder {
        this.model.preferredTextEncoding = preferredTextEncoding;
        return this;
    }
}

