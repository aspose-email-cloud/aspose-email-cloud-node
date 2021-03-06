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
 * Request model for ContactApi.getList operation.
 */
export class ContactGetListRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Count of items on page.
     */
    public itemsPerPage: number;

    /**
     * Page number.
     */
    public pageNumber: number;

    /**
     * Request model for contactGetList operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     * @param itemsPerPage Count of items on page.
     * @param pageNumber Page number.
     */
    public constructor(
        format?: string, 
        folder?: string, 
        storage?: string, 
        itemsPerPage?: number, 
        pageNumber?: number) {
        
        this.format = format;
        this.folder = folder;
        this.storage = storage;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
    }
}

export class ContactGetListRequestBuilder {
    private model: ContactGetListRequest
    public constructor(model: ContactGetListRequest) {
        this.model = model;
    }
    public build(): ContactGetListRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public format(format: string): ContactGetListRequestBuilder {
            this.model.format = format;
            return this;
        }
        public folder(folder: string): ContactGetListRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ContactGetListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public itemsPerPage(itemsPerPage: number): ContactGetListRequestBuilder {
            this.model.itemsPerPage = itemsPerPage;
            return this;
        }
        public pageNumber(pageNumber: number): ContactGetListRequestBuilder {
            this.model.pageNumber = pageNumber;
            return this;
        }
}
