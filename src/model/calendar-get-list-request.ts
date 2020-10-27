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
 * Request model for CalendarApi.getList operation.
 */
export class CalendarGetListRequest {
    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Count of items on page.
     */
    public itemsPerPage: number;

    /**
     * Page number.
     */
    public pageNumber: number;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for calendarGetList operation.
     * @param folder Path to folder in storage.
     * @param itemsPerPage Count of items on page.
     * @param pageNumber Page number.
     * @param storage Storage name.
     */
    public constructor(
        folder?: string, 
        itemsPerPage?: number, 
        pageNumber?: number, 
        storage?: string) {
        
        this.folder = folder;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
        this.storage = storage;
    }
}

export class CalendarGetListRequestBuilder {
    private model: CalendarGetListRequest
    public constructor(model: CalendarGetListRequest) {
        this.model = model;
    }
    public build(): CalendarGetListRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public folder(folder: string): CalendarGetListRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public itemsPerPage(itemsPerPage: number): CalendarGetListRequestBuilder {
            this.model.itemsPerPage = itemsPerPage;
            return this;
        }
        public pageNumber(pageNumber: number): CalendarGetListRequestBuilder {
            this.model.pageNumber = pageNumber;
            return this;
        }
        public storage(storage: string): CalendarGetListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
