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
 * Convert MapiCalendar to file request.             
 */
export class MapiCalendarAsFileRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "format",
            type: "string",
        },
        {
            name: "value",
            baseName: "value",
            type: "MapiCalendarDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarAsFileRequest.attributeTypeMap;
    }

    /**
     * Calendar file format. Enum, available values: Ics, Msg
     */
    public format: string;
    /**
     * MAPI calendar model.             
     */
    public value: model.MapiCalendarDto;

    /**
     * Convert MapiCalendar to file request.             
     * @param format Calendar file format. Enum, available values: Ics, Msg
     * @param value MAPI calendar model.             
     */
    public constructor(
        
        format?: string,
        value?: model.MapiCalendarDto
    ) {
        
        this.format = format;
        this.value = value;
        
    }
}

/**
 *  MapiCalendarAsFileRequest model builder
 */
export class MapiCalendarAsFileRequestBuilder {
    private readonly model: MapiCalendarAsFileRequest;
    public constructor(model: MapiCalendarAsFileRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiCalendarAsFileRequest {
        return this.model;
    }

    /**
    * Calendar file format. Enum, available values: Ics, Msg
    */
    public format(format: string): MapiCalendarAsFileRequestBuilder {
        this.model.format = format;
        return this;
    }
    /**
    * MAPI calendar model.             
    */
    public value(value: model.MapiCalendarDto): MapiCalendarAsFileRequestBuilder {
        this.model.value = value;
        return this;
    }
}

