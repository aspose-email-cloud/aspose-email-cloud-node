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
 * Request model for ContactApi.fromFile operation.
 */
export class ContactFromFileRequest {
    /**
     * File format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for contactFromFile operation.
     * @param format File format. Enum, available values: VCard, WebDav, Msg
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}

export class ContactFromFileRequestBuilder {
    private model: ContactFromFileRequest
    public constructor(model: ContactFromFileRequest) {
        this.model = model;
    }
    public build(): ContactFromFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public format(format: string): ContactFromFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public file(file: Buffer): ContactFromFileRequestBuilder {
            this.model.file = file;
            return this;
        }
}
