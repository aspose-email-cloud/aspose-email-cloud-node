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
 * Save iCalendar to storage request.             
 */
export class CalendarSaveRequest extends model.StorageModelOfCalendarDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "format",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CalendarSaveRequest.attributeTypeMap);
    }

    /**
     * Calendar file format. Enum, available values: Ics, Msg
     */
    public format: string;

    /**
     * Save iCalendar to storage request.             
     * @param storageFile 
     * @param value 
     * @param format Calendar file format. Enum, available values: Ics, Msg
     */
    public constructor(
        
        storageFile?: model.StorageFileLocation,
        value?: model.CalendarDto,
        format?: string
    ) {
        super();
        this.storageFile = storageFile;
        this.value = value;
        this.format = format;
        
    }
}

/**
 *  CalendarSaveRequest model builder
 */
export class CalendarSaveRequestBuilder {
    private readonly model: CalendarSaveRequest;
    public constructor(model: CalendarSaveRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): CalendarSaveRequest {
        return this.model;
    }

    public storageFile(storageFile: model.StorageFileLocation): CalendarSaveRequestBuilder {
        this.model.storageFile = storageFile;
        return this;
    }
    public value(value: model.CalendarDto): CalendarSaveRequestBuilder {
        this.model.value = value;
        return this;
    }
    /**
    * Calendar file format. Enum, available values: Ics, Msg
    */
    public format(format: string): CalendarSaveRequestBuilder {
        this.model.format = format;
        return this;
    }
}

