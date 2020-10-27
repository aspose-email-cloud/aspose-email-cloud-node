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
 * Request model for ClientFolderApi.getList operation.
 */
export class ClientFolderGetListRequest {
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
     * Folder in which subfolders should be listed
     */
    public parentFolder: string;

    /**
     * Request model for clientFolderGetList operation.
     * @param account Email account
     * @param storage Storage name where account file located
     * @param accountStorageFolder Folder in storage where account file located
     * @param parentFolder Folder in which subfolders should be listed
     */
    public constructor(
        account?: string, 
        storage?: string, 
        accountStorageFolder?: string, 
        parentFolder?: string) {
        
        this.account = account;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.parentFolder = parentFolder;
    }
}

export class ClientFolderGetListRequestBuilder {
    private model: ClientFolderGetListRequest
    public constructor(model: ClientFolderGetListRequest) {
        this.model = model;
    }
    public build(): ClientFolderGetListRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public account(account: string): ClientFolderGetListRequestBuilder {
            this.model.account = account;
            return this;
        }
        public storage(storage: string): ClientFolderGetListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientFolderGetListRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public parentFolder(parentFolder: string): ClientFolderGetListRequestBuilder {
            this.model.parentFolder = parentFolder;
            return this;
        }
}
