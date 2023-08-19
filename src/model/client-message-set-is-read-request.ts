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
 * Email client mark message is read/unread request.             
 */
export class ClientMessageSetIsReadRequest extends model.ClientMessageBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isRead",
            baseName: "isRead",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClientMessageSetIsReadRequest.attributeTypeMap);
    }

    /**
     * Message is read flag.             
     */
    public isRead: boolean;

    /**
     * Email client mark message is read/unread request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param messageId Message identifier.             
     * @param isRead Message is read flag.             
     */
    public constructor(
        
        accountLocation?: model.StorageFileLocation,
        messageId?: string,
        isRead?: boolean
    ) {
        super();
        this.accountLocation = accountLocation;
        this.messageId = messageId;
        this.isRead = isRead;
        
    }
}

/**
 *  ClientMessageSetIsReadRequest model builder
 */
export class ClientMessageSetIsReadRequestBuilder {
    private readonly model: ClientMessageSetIsReadRequest;
    public constructor(model: ClientMessageSetIsReadRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ClientMessageSetIsReadRequest {
        return this.model;
    }

    /**
    * Email client account configuration location on storage.             
    */
    public accountLocation(accountLocation: model.StorageFileLocation): ClientMessageSetIsReadRequestBuilder {
        this.model.accountLocation = accountLocation;
        return this;
    }
    /**
    * Message identifier.             
    */
    public messageId(messageId: string): ClientMessageSetIsReadRequestBuilder {
        this.model.messageId = messageId;
        return this;
    }
    /**
    * Message is read flag.             
    */
    public isRead(isRead: boolean): ClientMessageSetIsReadRequestBuilder {
        this.model.isRead = isRead;
        return this;
    }
}

