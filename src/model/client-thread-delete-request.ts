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
 * Delete email client thread request.             
 */
export class ClientThreadDeleteRequest extends model.ClientThreadBaseRequest {

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
        return super.getAttributeTypeMap().concat(ClientThreadDeleteRequest.attributeTypeMap);
    }

    /**
     * Folder on email server, where thread is stored.             
     */
    public folder: string;

    /**
     * Delete email client thread request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param threadId Thread identifier.             
     * @param folder Folder on email server, where thread is stored.             
     */
    public constructor(
        
        accountLocation?: model.StorageFileLocation,
        threadId?: string,
        folder?: string
    ) {
        super();
        this.accountLocation = accountLocation;
        this.threadId = threadId;
        this.folder = folder;
        
    }
}

/**
 *  ClientThreadDeleteRequest model builder
 */
export class ClientThreadDeleteRequestBuilder {
    private readonly model: ClientThreadDeleteRequest;
    public constructor(model: ClientThreadDeleteRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ClientThreadDeleteRequest {
        return this.model;
    }

    /**
    * Email client account configuration location on storage.             
    */
    public accountLocation(accountLocation: model.StorageFileLocation): ClientThreadDeleteRequestBuilder {
        this.model.accountLocation = accountLocation;
        return this;
    }
    /**
    * Thread identifier.             
    */
    public threadId(threadId: string): ClientThreadDeleteRequestBuilder {
        this.model.threadId = threadId;
        return this;
    }
    /**
    * Folder on email server, where thread is stored.             
    */
    public folder(folder: string): ClientThreadDeleteRequestBuilder {
        this.model.folder = folder;
        return this;
    }
}

