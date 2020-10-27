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
 * Represents the format to view a message.             
 */
export class AlternateView extends model.AttachmentBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "baseUri",
            baseName: "baseUri",
            type: "string",
        },
        {
            name: "linkedResources",
            baseName: "linkedResources",
            type: "Array<LinkedResource>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AlternateView.attributeTypeMap);
    }

    /**
     * Base URI.             
     */
    public baseUri: string;
    /**
     * Embedded resources referred to by this alternate view.             
     */
    public linkedResources: Array< model.LinkedResource >;

    /**
     * Represents the format to view a message.             
     * @param base64Data Attachment file content as Base64 string.             
     * @param contentId Attachment content id             
     * @param contentType Content type             
     * @param headers Attachment headers.             
     * @param baseUri Base URI.             
     * @param linkedResources Embedded resources referred to by this alternate view.             
     */
    public constructor(
        
        base64Data?: string,
        contentId?: string,
        contentType?: model.ContentType,
        headers?: { [key: string]: string; },
        baseUri?: string,
        linkedResources?: Array< model.LinkedResource >
    ) {
        super();
        this.base64Data = base64Data;
        this.contentId = contentId;
        this.contentType = contentType;
        this.headers = headers;
        this.baseUri = baseUri;
        this.linkedResources = linkedResources;
        
    }
}

/**
 *  AlternateView model builder
 */
export class AlternateViewBuilder {
    private readonly model: AlternateView;
    public constructor(model: AlternateView) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): AlternateView {
        return this.model;
    }

    /**
    * Attachment file content as Base64 string.             
    */
    public base64Data(base64Data: string): AlternateViewBuilder {
        this.model.base64Data = base64Data;
        return this;
    }
    /**
    * Attachment content id             
    */
    public contentId(contentId: string): AlternateViewBuilder {
        this.model.contentId = contentId;
        return this;
    }
    /**
    * Content type             
    */
    public contentType(contentType: model.ContentType): AlternateViewBuilder {
        this.model.contentType = contentType;
        return this;
    }
    /**
    * Attachment headers.             
    */
    public headers(headers: { [key: string]: string; }): AlternateViewBuilder {
        this.model.headers = headers;
        return this;
    }
    /**
    * Base URI.             
    */
    public baseUri(baseUri: string): AlternateViewBuilder {
        this.model.baseUri = baseUri;
        return this;
    }
    /**
    * Embedded resources referred to by this alternate view.             
    */
    public linkedResources(linkedResources: Array< model.LinkedResource >): AlternateViewBuilder {
        this.model.linkedResources = linkedResources;
        return this;
    }
}

