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
 * Request model for EmailApi.getAsFile operation.
 */
export class EmailGetAsFileRequest {
    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * File format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for emailGetAsFile operation.
     * @param fileName Email document file name
     * @param format File format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        fileName?: string, 
        format?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.format = format;
        this.storage = storage;
        this.folder = folder;
    }
}

export class EmailGetAsFileRequestBuilder {
    private model: EmailGetAsFileRequest
    public constructor(model: EmailGetAsFileRequest) {
        this.model = model;
    }
    public build(): EmailGetAsFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): EmailGetAsFileRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public format(format: string): EmailGetAsFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public storage(storage: string): EmailGetAsFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public folder(folder: string): EmailGetAsFileRequestBuilder {
            this.model.folder = folder;
            return this;
        }
}
