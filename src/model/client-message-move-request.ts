/*
* MIT License

* Copyright (c) 2018-2023 Aspose Pty Ltd. All rights reserved.

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
 * Email client move message request.             
 */
export class ClientMessageMoveRequest extends model.ClientMessageBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceFolder",
            baseName: "sourceFolder",
            type: "string",
        },
        {
            name: "destinationFolder",
            baseName: "destinationFolder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClientMessageMoveRequest.attributeTypeMap);
    }

    /**
     * Folder to move message from.             
     */
    public sourceFolder: string;
    /**
     * Folder to move message to.             
     */
    public destinationFolder: string;

    /**
     * Email client move message request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param messageId Message identifier.             
     * @param sourceFolder Folder to move message from.             
     * @param destinationFolder Folder to move message to.             
     */
    public constructor(
        
        accountLocation?: model.StorageFileLocation,
        messageId?: string,
        sourceFolder?: string,
        destinationFolder?: string
    ) {
        super();
        this.accountLocation = accountLocation;
        this.messageId = messageId;
        this.sourceFolder = sourceFolder;
        this.destinationFolder = destinationFolder;
        
    }
}

/**
 *  ClientMessageMoveRequest model builder
 */
export class ClientMessageMoveRequestBuilder {
    private readonly model: ClientMessageMoveRequest;
    public constructor(model: ClientMessageMoveRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ClientMessageMoveRequest {
        return this.model;
    }

    /**
    * Email client account configuration location on storage.             
    */
    public accountLocation(accountLocation: model.StorageFileLocation): ClientMessageMoveRequestBuilder {
        this.model.accountLocation = accountLocation;
        return this;
    }
    /**
    * Message identifier.             
    */
    public messageId(messageId: string): ClientMessageMoveRequestBuilder {
        this.model.messageId = messageId;
        return this;
    }
    /**
    * Folder to move message from.             
    */
    public sourceFolder(sourceFolder: string): ClientMessageMoveRequestBuilder {
        this.model.sourceFolder = sourceFolder;
        return this;
    }
    /**
    * Folder to move message to.             
    */
    public destinationFolder(destinationFolder: string): ClientMessageMoveRequestBuilder {
        this.model.destinationFolder = destinationFolder;
        return this;
    }
}

