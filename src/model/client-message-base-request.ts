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
 * Email client message request.             
 */
export class ClientMessageBaseRequest extends model.ClientAccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "messageId",
            baseName: "messageId",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClientMessageBaseRequest.attributeTypeMap);
    }

    /**
     * Message identifier.             
     */
    public messageId: string;

    /**
     * Email client message request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param messageId Message identifier.             
     */
    public constructor(
        
        accountLocation?: model.StorageFileLocation,
        messageId?: string
    ) {
        super();
        this.accountLocation = accountLocation;
        this.messageId = messageId;
        
    }
}

/**
 *  ClientMessageBaseRequest model builder
 */
export class ClientMessageBaseRequestBuilder {
    private readonly model: ClientMessageBaseRequest;
    public constructor(model: ClientMessageBaseRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ClientMessageBaseRequest {
        return this.model;
    }

    /**
    * Email client account configuration location on storage.             
    */
    public accountLocation(accountLocation: model.StorageFileLocation): ClientMessageBaseRequestBuilder {
        this.model.accountLocation = accountLocation;
        return this;
    }
    /**
    * Message identifier.             
    */
    public messageId(messageId: string): ClientMessageBaseRequestBuilder {
        this.model.messageId = messageId;
        return this;
    }
}

