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
 * Request model for ClientThreadApi.getMessages operation.
 */
export class ClientThreadGetMessagesRequest {
    /**
     * Thread identifier
     */
    public threadId: string;

    /**
     * Email account
     */
    public account: string;

    /**
     * Specifies account folder to get thread from             
     */
    public folder: string;

    /**
     * Storage name where account file located
     */
    public storage: string;

    /**
     * Folder in storage where account file located
     */
    public accountStorageFolder: string;

    /**
     * Request model for clientThreadGetMessages operation.
     * @param threadId Thread identifier
     * @param account Email account
     * @param folder Specifies account folder to get thread from             
     * @param storage Storage name where account file located
     * @param accountStorageFolder Folder in storage where account file located
     */
    public constructor(
        threadId?: string, 
        account?: string, 
        folder?: string, 
        storage?: string, 
        accountStorageFolder?: string) {
        
        this.threadId = threadId;
        this.account = account;
        this.folder = folder;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
    }
}

export class ClientThreadGetMessagesRequestBuilder {
    private model: ClientThreadGetMessagesRequest
    public constructor(model: ClientThreadGetMessagesRequest) {
        this.model = model;
    }
    public build(): ClientThreadGetMessagesRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public threadId(threadId: string): ClientThreadGetMessagesRequestBuilder {
            this.model.threadId = threadId;
            return this;
        }
        public account(account: string): ClientThreadGetMessagesRequestBuilder {
            this.model.account = account;
            return this;
        }
        public folder(folder: string): ClientThreadGetMessagesRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ClientThreadGetMessagesRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientThreadGetMessagesRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
}
