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
 * Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address             
 */
export class MapiContactPhysicalAddressPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "workAddress",
            baseName: "workAddress",
            type: "MapiContactPhysicalAddressDto",
        },
        {
            name: "homeAddress",
            baseName: "homeAddress",
            type: "MapiContactPhysicalAddressDto",
        },
        {
            name: "otherAddress",
            baseName: "otherAddress",
            type: "MapiContactPhysicalAddressDto",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactPhysicalAddressPropertySetDto.attributeTypeMap;
    }

    /**
     * Specifies the address of the contact's work             
     */
    public workAddress: model.MapiContactPhysicalAddressDto;
    /**
     * Specifies the address of the contact's home             
     */
    public homeAddress: model.MapiContactPhysicalAddressDto;
    /**
     * Specifies the other contact's address             
     */
    public otherAddress: model.MapiContactPhysicalAddressDto;

    /**
     * Specify three physical addresses: Home Address, Work Address, and Other Address. One of the addresses can be marked as the Mailing Address             
     * @param workAddress Specifies the address of the contact's work             
     * @param homeAddress Specifies the address of the contact's home             
     * @param otherAddress Specifies the other contact's address             
     */
    public constructor(
        
        workAddress?: model.MapiContactPhysicalAddressDto,
        homeAddress?: model.MapiContactPhysicalAddressDto,
        otherAddress?: model.MapiContactPhysicalAddressDto
    ) {
        
        this.workAddress = workAddress;
        this.homeAddress = homeAddress;
        this.otherAddress = otherAddress;
        
    }
}

/**
 *  MapiContactPhysicalAddressPropertySetDto model builder
 */
export class MapiContactPhysicalAddressPropertySetDtoBuilder {
    private readonly model: MapiContactPhysicalAddressPropertySetDto;
    public constructor(model: MapiContactPhysicalAddressPropertySetDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiContactPhysicalAddressPropertySetDto {
        return this.model;
    }

    /**
    * Specifies the address of the contact's work             
    */
    public workAddress(workAddress: model.MapiContactPhysicalAddressDto): MapiContactPhysicalAddressPropertySetDtoBuilder {
        this.model.workAddress = workAddress;
        return this;
    }
    /**
    * Specifies the address of the contact's home             
    */
    public homeAddress(homeAddress: model.MapiContactPhysicalAddressDto): MapiContactPhysicalAddressPropertySetDtoBuilder {
        this.model.homeAddress = homeAddress;
        return this;
    }
    /**
    * Specifies the other contact's address             
    */
    public otherAddress(otherAddress: model.MapiContactPhysicalAddressDto): MapiContactPhysicalAddressPropertySetDtoBuilder {
        this.model.otherAddress = otherAddress;
        return this;
    }
}

