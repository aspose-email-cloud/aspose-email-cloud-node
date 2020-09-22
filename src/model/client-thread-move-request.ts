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
 * Email client move thread request.             
 */
export class ClientThreadMoveRequest extends model.ClientThreadBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "destinationFolder",
            baseName: "destinationFolder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClientThreadMoveRequest.attributeTypeMap);
    }

    /**
     * Email account folder to move thread to.             
     */
    public destinationFolder: string;

    /**
     * Email client move thread request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param threadId Thread identifier.             
     * @param destinationFolder Email account folder to move thread to.             
     */
    public constructor(
        
        accountLocation?: model.StorageFileLocation,
        threadId?: string,
        destinationFolder?: string
    ) {
        super();
        this.accountLocation = accountLocation;
        this.threadId = threadId;
        this.destinationFolder = destinationFolder;
        
    }
}

/**
 *  ClientThreadMoveRequest model builder
 */
export class ClientThreadMoveRequestBuilder {
    private readonly model: ClientThreadMoveRequest;
    public constructor(model: ClientThreadMoveRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ClientThreadMoveRequest {
        return this.model;
    }

    /**
    * Email client account configuration location on storage.             
    */
    public accountLocation(accountLocation: model.StorageFileLocation): ClientThreadMoveRequestBuilder {
        this.model.accountLocation = accountLocation;
        return this;
    }
    /**
    * Thread identifier.             
    */
    public threadId(threadId: string): ClientThreadMoveRequestBuilder {
        this.model.threadId = threadId;
        return this;
    }
    /**
    * Email account folder to move thread to.             
    */
    public destinationFolder(destinationFolder: string): ClientThreadMoveRequestBuilder {
        this.model.destinationFolder = destinationFolder;
        return this;
    }
}

