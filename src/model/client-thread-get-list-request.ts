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
 * Request model for ClientThreadApi.getList operation.
 */
export class ClientThreadGetListRequest {
    /**
     * A folder in email account.             
     */
    public folder: string;

    /**
     * Email account
     */
    public account: string;

    /**
     * Storage name where account file located
     */
    public storage: string;

    /**
     * Folder in storage where account file located
     */
    public accountStorageFolder: string;

    /**
     * This parameter is only used in accounts with CacheFile. If true - get new messages and update threads cache for given folder. If false, get only threads from cache without any calls to an email account             
     */
    public updateFolderCache: boolean;

    /**
     * Limit messages cache size if CacheFile is used. Ignored in accounts without limits support             
     */
    public messagesCacheLimit: number;

    /**
     * Request model for clientThreadGetList operation.
     * @param folder A folder in email account.             
     * @param account Email account
     * @param storage Storage name where account file located
     * @param accountStorageFolder Folder in storage where account file located
     * @param updateFolderCache This parameter is only used in accounts with CacheFile. If true - get new messages and update threads cache for given folder. If false, get only threads from cache without any calls to an email account             
     * @param messagesCacheLimit Limit messages cache size if CacheFile is used. Ignored in accounts without limits support             
     */
    public constructor(
        folder?: string, 
        account?: string, 
        storage?: string, 
        accountStorageFolder?: string, 
        updateFolderCache?: boolean, 
        messagesCacheLimit?: number) {
        
        this.folder = folder;
        this.account = account;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.updateFolderCache = updateFolderCache;
        this.messagesCacheLimit = messagesCacheLimit;
    }
}

export class ClientThreadGetListRequestBuilder {
    private model: ClientThreadGetListRequest
    public constructor(model: ClientThreadGetListRequest) {
        this.model = model;
    }
    public build(): ClientThreadGetListRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public folder(folder: string): ClientThreadGetListRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public account(account: string): ClientThreadGetListRequestBuilder {
            this.model.account = account;
            return this;
        }
        public storage(storage: string): ClientThreadGetListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientThreadGetListRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public updateFolderCache(updateFolderCache: boolean): ClientThreadGetListRequestBuilder {
            this.model.updateFolderCache = updateFolderCache;
            return this;
        }
        public messagesCacheLimit(messagesCacheLimit: number): ClientThreadGetListRequestBuilder {
            this.model.messagesCacheLimit = messagesCacheLimit;
            return this;
        }
}
