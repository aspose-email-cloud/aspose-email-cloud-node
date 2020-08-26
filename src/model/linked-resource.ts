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
 * Represents an embedded resource in a message.             
 */
export class LinkedResource extends model.AttachmentBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "contentLink",
            baseName: "contentLink",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LinkedResource.attributeTypeMap);
    }

    /**
     * URI that the resource must match.             
     */
    public contentLink: string;

    /**
     * Represents an embedded resource in a message.             
     * @param base64Data Attachment file content as Base64 string.             
     * @param contentId Attachment content id             
     * @param contentType Content type             
     * @param headers Attachment headers.             
     * @param contentLink URI that the resource must match.             
     */
    public constructor(
        
        base64Data?: string,
        contentId?: string,
        contentType?: model.ContentType,
        headers?: { [key: string]: string; },
        contentLink?: string
    ) {
        super();
        this.base64Data = base64Data;
        this.contentId = contentId;
        this.contentType = contentType;
        this.headers = headers;
        this.contentLink = contentLink;
        
    }
}



