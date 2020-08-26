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
 * Mark thread messages as read or unread request.             
 */
export class ClientThreadSetIsReadRequest extends model.ClientThreadBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isRead",
            baseName: "isRead",
            type: "boolean",
        },
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClientThreadSetIsReadRequest.attributeTypeMap);
    }

    /**
     * Message is read flag.             
     */
    public isRead: boolean;
    /**
     * Folder on email server, where thread is stored.             
     */
    public folder: string;

    /**
     * Mark thread messages as read or unread request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param threadId Thread identifier.             
     * @param isRead Message is read flag.             
     * @param folder Folder on email server, where thread is stored.             
     */
    public constructor(
        
        accountLocation?: model.StorageFileLocation,
        threadId?: string,
        isRead?: boolean,
        folder?: string
    ) {
        super();
        this.accountLocation = accountLocation;
        this.threadId = threadId;
        this.isRead = isRead;
        this.folder = folder;
        
    }
}



