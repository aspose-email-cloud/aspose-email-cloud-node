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
 * Email client delete message request.             
 */
export class ClientMessageDeleteRequest extends model.ClientMessageBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClientMessageDeleteRequest.attributeTypeMap);
    }

    /**
     * Folder to delete message from.             
     */
    public folder: string;

    /**
     * Email client delete message request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param messageId Message identifier.             
     * @param folder Folder to delete message from.             
     */
    public constructor(
        
        accountLocation?: model.StorageFileLocation,
        messageId?: string,
        folder?: string
    ) {
        super();
        this.accountLocation = accountLocation;
        this.messageId = messageId;
        this.folder = folder;
        
    }
}

/**
 *  ClientMessageDeleteRequest model builder
 */
export class ClientMessageDeleteRequestBuilder {
    private readonly model: ClientMessageDeleteRequest;
    public constructor(model: ClientMessageDeleteRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ClientMessageDeleteRequest {
        return this.model;
    }

    /**
    * Email client account configuration location on storage.             
    */
    public accountLocation(accountLocation: model.StorageFileLocation): ClientMessageDeleteRequestBuilder {
        this.model.accountLocation = accountLocation;
        return this;
    }
    /**
    * Message identifier.             
    */
    public messageId(messageId: string): ClientMessageDeleteRequestBuilder {
        this.model.messageId = messageId;
        return this;
    }
    /**
    * Folder to delete message from.             
    */
    public folder(folder: string): ClientMessageDeleteRequestBuilder {
        this.model.folder = folder;
        return this;
    }
}

