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
 * Request model for MapiContactApi.get operation.
 */
export class MapiContactGetRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name.
     */
    public fileName: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for mapiContactGet operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param fileName Contact document file name.
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     */
    public constructor(
        format?: string, 
        fileName?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

export class MapiContactGetRequestBuilder {
    private model: MapiContactGetRequest
    public constructor(model: MapiContactGetRequest) {
        this.model = model;
    }
    public build(): MapiContactGetRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public format(format: string): MapiContactGetRequestBuilder {
            this.model.format = format;
            return this;
        }
        public fileName(fileName: string): MapiContactGetRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): MapiContactGetRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): MapiContactGetRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
