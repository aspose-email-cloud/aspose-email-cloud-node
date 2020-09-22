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
 * Property identified by an unsigned 32-bit quantity along with a property set             
 */
export class MapiPidLidPropertyDescriptor extends model.MapiPidPropertyDescriptor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "longId",
            baseName: "longId",
            type: "number",
        },
        {
            name: "propertySet",
            baseName: "propertySet",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiPidLidPropertyDescriptor.attributeTypeMap);
    }

    /**
     * An unsigned 32-bit quantity that, along with the property set, identifies a named property.             
     */
    public longId: number;
    /**
     * A GUID that identifies a group of properties with a similar purpose.             
     */
    public propertySet: string;

    /**
     * Property identified by an unsigned 32-bit quantity along with a property set             
     * @param canonicalName The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
     * @param dataType [MS-OXCDATA]: Data Structures Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
     * @param multipleValuesDataType Indicates if data type contains of multiple values             
     * @param name A string that identifies the property             
     * @param longId An unsigned 32-bit quantity that, along with the property set, identifies a named property.             
     * @param propertySet A GUID that identifies a group of properties with a similar purpose.             
     */
    public constructor(
        
        //,
        canonicalName?: string,
        dataType?: string,
        multipleValuesDataType?: boolean,
        name?: string,
        longId?: number,
        propertySet?: string
    ) {
        super();
        this.canonicalName = canonicalName;
        this.dataType = dataType;
        this.multipleValuesDataType = multipleValuesDataType;
        this.name = name;
        this.longId = longId;
        this.propertySet = propertySet;
        
    }
}

/**
 *  MapiPidLidPropertyDescriptor model builder
 */
export class MapiPidLidPropertyDescriptorBuilder {
    private readonly model: MapiPidLidPropertyDescriptor;
    public constructor(model: MapiPidLidPropertyDescriptor) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiPidLidPropertyDescriptor {
        return this.model;
    }

    /**
    * The name used to refer to the property in the documentation. The prefix of the canonical name identifies the basic characteristics of a property to the implementer. The canonical naming structure uses three categories that are denoted by the following prefixes to the canonical property name: * PidLid prefix: Properties identified by an unsigned 32-bit quantity along with a property set. * PidName prefix: Properties identified by a string name along with a property set. * PidTag prefix: Properties identified by an unsigned 16-bit quantity.             
    */
    public canonicalName(canonicalName: string): MapiPidLidPropertyDescriptorBuilder {
        this.model.canonicalName = canonicalName;
        return this;
    }
    /**
    * [MS-OXCDATA]: Data Structures Enum, available values: Unspecified, Null, Integer16, Integer32, Floating32, Floating64, Currency, FloatingTime, ErrorCode, Boolean, Integer64, String, String8, Time, Guid, ServerId, Restriction, RuleAction, Binary, MultipleInteger16, MultipleInteger32, MultipleFloating32, MultipleFloating64, MultipleCurrency, MultipleFloatingTime, MultipleBoolean, MultipleInteger64, MultipleString, MultipleString8, MultipleTime, MultipleGuid, MultipleBinary, Object
    */
    public dataType(dataType: string): MapiPidLidPropertyDescriptorBuilder {
        this.model.dataType = dataType;
        return this;
    }
    /**
    * Indicates if data type contains of multiple values             
    */
    public multipleValuesDataType(multipleValuesDataType: boolean): MapiPidLidPropertyDescriptorBuilder {
        this.model.multipleValuesDataType = multipleValuesDataType;
        return this;
    }
    /**
    * A string that identifies the property             
    */
    public name(name: string): MapiPidLidPropertyDescriptorBuilder {
        this.model.name = name;
        return this;
    }
    /**
    * An unsigned 32-bit quantity that, along with the property set, identifies a named property.             
    */
    public longId(longId: number): MapiPidLidPropertyDescriptorBuilder {
        this.model.longId = longId;
        return this;
    }
    /**
    * A GUID that identifies a group of properties with a similar purpose.             
    */
    public propertySet(propertySet: string): MapiPidLidPropertyDescriptorBuilder {
        this.model.propertySet = propertySet;
        return this;
    }
}

