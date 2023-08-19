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
 * Mapi property with DateTime value             
 */
export class MapiDateTimePropertyDto extends model.MapiPropertyDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiDateTimePropertyDto.attributeTypeMap);
    }

    /**
     * Property value             
     */
    public value: Date;

    /**
     * Mapi property with DateTime value             
     * @param descriptor Property descriptor             
     * @param value Property value             
     */
    public constructor(
        
        descriptor?: model.MapiPropertyDescriptor
        ,
        value?: Date
    ) {
        super();
        this.descriptor = descriptor;
        this.value = value;
        
    }
}

/**
 *  MapiDateTimePropertyDto model builder
 */
export class MapiDateTimePropertyDtoBuilder {
    private readonly model: MapiDateTimePropertyDto;
    public constructor(model: MapiDateTimePropertyDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiDateTimePropertyDto {
        return this.model;
    }

    /**
    * Property descriptor             
    */
    public descriptor(descriptor: model.MapiPropertyDescriptor): MapiDateTimePropertyDtoBuilder {
        this.model.descriptor = descriptor;
        return this;
    }
    /**
    * Property value             
    */
    public value(value: Date): MapiDateTimePropertyDtoBuilder {
        this.model.value = value;
        return this;
    }
}

