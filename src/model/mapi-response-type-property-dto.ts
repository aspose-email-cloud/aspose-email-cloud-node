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
 * Mapi property with response type value             
 */
export class MapiResponseTypePropertyDto extends model.MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiResponseTypePropertyDto.attributeTypeMap);
    }

    /**
     * Represents the types of recipient responses that are received for a meeting. Enum, available values: Unknown, Organizer, Tentative, Accept, Decline, NoResponseReceived
     */
    public value: string;

    /**
     * Mapi property with response type value             
     * @param descriptor Property descriptor             
     * @param value Represents the types of recipient responses that are received for a meeting. Enum, available values: Unknown, Organizer, Tentative, Accept, Decline, NoResponseReceived
     */
    public constructor(
        
        descriptor?: model.MapiPropertyDescriptor
        ,
        value?: string
    ) {
        super();
        this.descriptor = descriptor;
        this.value = value;
        
    }
}

/**
 *  MapiResponseTypePropertyDto model builder
 */
export class MapiResponseTypePropertyDtoBuilder {
    private readonly model: MapiResponseTypePropertyDto;
    public constructor(model: MapiResponseTypePropertyDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiResponseTypePropertyDto {
        return this.model;
    }

    /**
    * Property descriptor             
    */
    public descriptor(descriptor: model.MapiPropertyDescriptor): MapiResponseTypePropertyDtoBuilder {
        this.model.descriptor = descriptor;
        return this;
    }
    /**
    * Represents the types of recipient responses that are received for a meeting. Enum, available values: Unknown, Organizer, Tentative, Accept, Decline, NoResponseReceived
    */
    public value(value: string): MapiResponseTypePropertyDtoBuilder {
        this.model.value = value;
        return this;
    }
}

