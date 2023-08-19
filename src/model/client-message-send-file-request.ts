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
 * Request model for ClientMessageApi.sendFile operation.
 */
export class ClientMessageSendFileRequest {
    /**
     * Email account
     */
    public account: string;

    /**
     * File to send
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
     * Request model for clientMessageSendFile operation.
     * @param account Email account
     * @param file File to send
     * @param storage Storage name where account file located.
     * @param accountStorageFolder Folder in storage where account file located.
     * @param format Email file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public constructor(
        account?: string, 
        file?: Buffer, 
        storage?: string, 
        accountStorageFolder?: string, 
        format?: string) {
        
        this.account = account;
        this.file = file;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.format = format;
    }
}

export class ClientMessageSendFileRequestBuilder {
    private model: ClientMessageSendFileRequest
    public constructor(model: ClientMessageSendFileRequest) {
        this.model = model;
    }
    public build(): ClientMessageSendFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public account(account: string): ClientMessageSendFileRequestBuilder {
            this.model.account = account;
            return this;
        }
        public file(file: Buffer): ClientMessageSendFileRequestBuilder {
            this.model.file = file;
            return this;
        }
        public storage(storage: string): ClientMessageSendFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientMessageSendFileRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public format(format: string): ClientMessageSendFileRequestBuilder {
            this.model.format = format;
            return this;
        }
}
