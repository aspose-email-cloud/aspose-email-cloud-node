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
 * Request model for ClientAccountApi.getMulti operation.
 */
export class ClientAccountGetMultiRequest {
    /**
     * File name on storage
     */
    public fileName: string;

    /**
     * Folder on storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for clientAccountGetMulti operation.
     * @param fileName File name on storage
     * @param folder Folder on storage
     * @param storage Storage name
     */
    public constructor(
        fileName?: string, 
        folder?: string, 
        storage?: string) {
        
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

export class ClientAccountGetMultiRequestBuilder {
    private model: ClientAccountGetMultiRequest
    public constructor(model: ClientAccountGetMultiRequest) {
        this.model = model;
    }
    public build(): ClientAccountGetMultiRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): ClientAccountGetMultiRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): ClientAccountGetMultiRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ClientAccountGetMultiRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
