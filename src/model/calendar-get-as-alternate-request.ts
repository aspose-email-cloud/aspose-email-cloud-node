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
 * Request model for CalendarApi.getAsAlternate operation.
 */
export class CalendarGetAsAlternateRequest {
    /**
     * iCalendar file name in storage
     */
    public fileName: string;

    /**
     * iCalendar method type Enum, available values: Create, Update, Cancel
     */
    public calendarAction: string;

    /**
     * The sequence id
     */
    public sequenceId: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for calendarGetAsAlternate operation.
     * @param fileName iCalendar file name in storage
     * @param calendarAction iCalendar method type Enum, available values: Create, Update, Cancel
     * @param sequenceId The sequence id
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        fileName?: string, 
        calendarAction?: string, 
        sequenceId?: string, 
        folder?: string, 
        storage?: string) {
        
        this.fileName = fileName;
        this.calendarAction = calendarAction;
        this.sequenceId = sequenceId;
        this.folder = folder;
        this.storage = storage;
    }
}

export class CalendarGetAsAlternateRequestBuilder {
    private model: CalendarGetAsAlternateRequest
    public constructor(model: CalendarGetAsAlternateRequest) {
        this.model = model;
    }
    public build(): CalendarGetAsAlternateRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): CalendarGetAsAlternateRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public calendarAction(calendarAction: string): CalendarGetAsAlternateRequestBuilder {
            this.model.calendarAction = calendarAction;
            return this;
        }
        public sequenceId(sequenceId: string): CalendarGetAsAlternateRequestBuilder {
            this.model.sequenceId = sequenceId;
            return this;
        }
        public folder(folder: string): CalendarGetAsAlternateRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): CalendarGetAsAlternateRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
