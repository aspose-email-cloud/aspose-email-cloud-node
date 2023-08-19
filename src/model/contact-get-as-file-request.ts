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
 * Request model for ContactApi.getAsFile operation.
 */
export class ContactGetAsFileRequest {
    /**
     * Calendar document file name
     */
    public fileName: string;

    /**
     * File format. Enum, available values: VCard, WebDav, Msg
     */
    public toFormat: string;

    /**
     * File format to convert from. Enum, available values: VCard, WebDav, Msg
     */
    public fromFormat: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for contactGetAsFile operation.
     * @param fileName Calendar document file name
     * @param toFormat File format. Enum, available values: VCard, WebDav, Msg
     * @param fromFormat File format to convert from. Enum, available values: VCard, WebDav, Msg
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        fileName?: string, 
        toFormat?: string, 
        fromFormat?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.toFormat = toFormat;
        this.fromFormat = fromFormat;
        this.storage = storage;
        this.folder = folder;
    }
}

export class ContactGetAsFileRequestBuilder {
    private model: ContactGetAsFileRequest
    public constructor(model: ContactGetAsFileRequest) {
        this.model = model;
    }
    public build(): ContactGetAsFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): ContactGetAsFileRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public toFormat(toFormat: string): ContactGetAsFileRequestBuilder {
            this.model.toFormat = toFormat;
            return this;
        }
        public fromFormat(fromFormat: string): ContactGetAsFileRequestBuilder {
            this.model.fromFormat = fromFormat;
            return this;
        }
        public storage(storage: string): ContactGetAsFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public folder(folder: string): ContactGetAsFileRequestBuilder {
            this.model.folder = folder;
            return this;
        }
}
