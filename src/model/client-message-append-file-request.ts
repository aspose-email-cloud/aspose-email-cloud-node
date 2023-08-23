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
 * Request model for ClientMessageApi.appendFile operation.
 */
export class ClientMessageAppendFileRequest {
    /**
     * Email account.
     */
    public account: string;

    /**
     * Message file to append.
     */
    public file: Buffer;

    /**
     * Storage name where account file located.
     */
    public storage: string;

    /**
     * Folder in storage where account file located.
     */
    public accountStorageFolder: string;

    /**
     * Email file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Path to folder on email server to append message to.
     */
    public folder: string;

    /**
     * Determines that appended message should be market as sent or not.
     */
    public markAsSent: boolean;

    /**
     * Request model for clientMessageAppendFile operation.
     * @param account Email account.
     * @param file Message file to append.
     * @param storage Storage name where account file located.
     * @param accountStorageFolder Folder in storage where account file located.
     * @param format Email file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param folder Path to folder on email server to append message to.
     * @param markAsSent Determines that appended message should be market as sent or not.
     */
    public constructor(
        account?: string, 
        file?: Buffer, 
        storage?: string, 
        accountStorageFolder?: string, 
        format?: string, 
        folder?: string, 
        markAsSent?: boolean) {
        
        this.account = account;
        this.file = file;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.format = format;
        this.folder = folder;
        this.markAsSent = markAsSent;
    }
}

export class ClientMessageAppendFileRequestBuilder {
    private model: ClientMessageAppendFileRequest
    public constructor(model: ClientMessageAppendFileRequest) {
        this.model = model;
    }
    public build(): ClientMessageAppendFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public account(account: string): ClientMessageAppendFileRequestBuilder {
            this.model.account = account;
            return this;
        }
        public file(file: Buffer): ClientMessageAppendFileRequestBuilder {
            this.model.file = file;
            return this;
        }
        public storage(storage: string): ClientMessageAppendFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientMessageAppendFileRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public format(format: string): ClientMessageAppendFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public folder(folder: string): ClientMessageAppendFileRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public markAsSent(markAsSent: boolean): ClientMessageAppendFileRequestBuilder {
            this.model.markAsSent = markAsSent;
            return this;
        }
}
