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
 * Convert MapiMessage to file request.             
 */
export class MapiMessageAsFileRequest {

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
            type: "MapiMessageDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiMessageAsFileRequest.attributeTypeMap;
    }

    /**
     * Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;
    /**
     * MAPI message model.             
     */
    public value: model.MapiMessageDto;

    /**
     * Convert MapiMessage to file request.             
     * @param format Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param value MAPI message model.             
     */
    public constructor(
        
        format?: string,
        value?: model.MapiMessageDto
    ) {
        
        this.format = format;
        this.value = value;
        
    }
}

/**
 *  MapiMessageAsFileRequest model builder
 */
export class MapiMessageAsFileRequestBuilder {
    private readonly model: MapiMessageAsFileRequest;
    public constructor(model: MapiMessageAsFileRequest) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiMessageAsFileRequest {
        return this.model;
    }

    /**
    * Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
    */
    public format(format: string): MapiMessageAsFileRequestBuilder {
        this.model.format = format;
        return this;
    }
    /**
    * MAPI message model.             
    */
    public value(value: model.MapiMessageDto): MapiMessageAsFileRequestBuilder {
        this.model.value = value;
        return this;
    }
}

