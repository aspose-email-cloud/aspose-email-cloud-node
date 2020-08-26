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
 * Email client append message request.             
 */
export class ClientMessageAppendRequest extends model.ClientAccountBaseRequest {

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
            name: "message",
            baseName: "message",
            type: "MailMessageBase",
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
        return super.getAttributeTypeMap().concat(ClientMessageAppendRequest.attributeTypeMap);
    }

    /**
     * Path to folder on email server to append message to.             
     */
    public folder: string;
    /**
     * Message to append.             
     */
    public message: model.MailMessageBase;
    /**
     * Determines that appended message should be market as sent or not.             
     */
    public markAsSent: boolean;

    /**
     * Email client append message request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param folder Path to folder on email server to append message to.             
     * @param message Message to append.             
     * @param markAsSent Determines that appended message should be market as sent or not.             
     */
    public constructor(
        
        accountLocation?: model.StorageFileLocation,
        folder?: string,
        message?: model.MailMessageBase,
        markAsSent?: boolean
    ) {
        super();
        this.accountLocation = accountLocation;
        this.folder = folder;
        this.message = message;
        this.markAsSent = markAsSent;
        
    }
}



