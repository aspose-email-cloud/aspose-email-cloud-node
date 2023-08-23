/*
* MIT License

* Copyright (c) 2018-2023 Aspose Pty Ltd. All rights reserved.

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
 * Property identified by a string name along with a property set             
 */
export class MapiPidNamePropertyDescriptor extends model.MapiPidPropertyDescriptor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "propertySet",
            baseName: "propertySet",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiPidNamePropertyDescriptor.attributeTypeMap);
    }

    /**
     * A GUID that identifies a group of properties with a similar purpose.             
     */
    public propertySet: string;

    /**
     * Property identified by a string name along with a property set             
     * @param canonicalName The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
     * @param dataType [MS-OXCDATA]: Data Structures. Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
     * @param multipleValuesDataType Indicates if data type contains of multiple values             
     * @param name A string that identifies the property             
     * @param propertySet A GUID that identifies a group of properties with a similar purpose.             
     */
    public constructor(
        
        //,
        canonicalName?: string,
        dataType?: string,
        multipleValuesDataType?: boolean,
        name?: string,
        propertySet?: string
    ) {
        super();
        this.canonicalName = canonicalName;
        this.dataType = dataType;
        this.multipleValuesDataType = multipleValuesDataType;
        this.name = name;
        this.propertySet = propertySet;
        
    }
}

/**
 *  MapiPidNamePropertyDescriptor model builder
 */
export class MapiPidNamePropertyDescriptorBuilder {
    private readonly model: MapiPidNamePropertyDescriptor;
    public constructor(model: MapiPidNamePropertyDescriptor) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiPidNamePropertyDescriptor {
        return this.model;
    }

    /**
    * The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
    */
    public canonicalName(canonicalName: string): MapiPidNamePropertyDescriptorBuilder {
        this.model.canonicalName = canonicalName;
        return this;
    }
    /**
    * [MS-OXCDATA]: Data Structures. Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
    */
    public dataType(dataType: string): MapiPidNamePropertyDescriptorBuilder {
        this.model.dataType = dataType;
        return this;
    }
    /**
    * Indicates if data type contains of multiple values             
    */
    public multipleValuesDataType(multipleValuesDataType: boolean): MapiPidNamePropertyDescriptorBuilder {
        this.model.multipleValuesDataType = multipleValuesDataType;
        return this;
    }
    /**
    * A string that identifies the property             
    */
    public name(name: string): MapiPidNamePropertyDescriptorBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * A GUID that identifies a group of properties with a similar purpose.             
    */
    public propertySet(propertySet: string): MapiPidNamePropertyDescriptorBuilder {
        this.model.propertySet = propertySet;
        return this;
    }
}

