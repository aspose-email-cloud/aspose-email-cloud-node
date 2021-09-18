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
 * Request model for CalendarApi.getAsFile operation.
 */
export class CalendarGetAsFileRequest {
    /**
     * Calendar document file name.
     */
    public fileName: string;

    /**
     * File format./nEnum, available values: Ics, Msg
     */
    public format: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Request model for calendarGetAsFile operation.
     * @param fileName Calendar document file name.
     * @param format File format./nEnum, available values: Ics, Msg
     * @param storage Storage name.
     * @param folder Path to folder in storage.
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

export class CalendarGetAsFileRequestBuilder {
    private model: CalendarGetAsFileRequest
    public constructor(model: CalendarGetAsFileRequest) {
        this.model = model;
    }
    public build(): CalendarGetAsFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): CalendarGetAsFileRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public format(format: string): CalendarGetAsFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public storage(storage: string): CalendarGetAsFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public folder(folder: string): CalendarGetAsFileRequestBuilder {
            this.model.folder = folder;
            return this;
        }
}
