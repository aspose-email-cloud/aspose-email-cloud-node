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
 * Represents the mapi calendar time zone information.             
 */
export class MapiCalendarTimeZoneDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "keyName",
            baseName: "keyName",
            type: "string",
        },
        {
            name: "timeZoneRules",
            baseName: "timeZoneRules",
            type: "Array<MapiCalendarTimeZoneInfoDto>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarTimeZoneDto.attributeTypeMap;
    }

    /**
     * Human-readable description of the time zone.             
     */
    public keyName: string;
    /**
     * Time zone rules             
     */
    public timeZoneRules: Array< model.MapiCalendarTimeZoneInfoDto >;

    /**
     * Represents the mapi calendar time zone information.             
     * @param keyName Human-readable description of the time zone.             
     * @param timeZoneRules Time zone rules             
     */
    public constructor(
        
        keyName?: string,
        timeZoneRules?: Array< model.MapiCalendarTimeZoneInfoDto >
    ) {
        
        this.keyName = keyName;
        this.timeZoneRules = timeZoneRules;
        
    }
}

/**
 *  MapiCalendarTimeZoneDto model builder
 */
export class MapiCalendarTimeZoneDtoBuilder {
    private readonly model: MapiCalendarTimeZoneDto;
    public constructor(model: MapiCalendarTimeZoneDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiCalendarTimeZoneDto {
        return this.model;
    }

    /**
    * Human-readable description of the time zone.             
    */
    public keyName(keyName: string): MapiCalendarTimeZoneDtoBuilder {
        this.model.keyName = keyName;
        return this;
    }
    /**
    * Time zone rules             
    */
    public timeZoneRules(timeZoneRules: Array< model.MapiCalendarTimeZoneInfoDto >): MapiCalendarTimeZoneDtoBuilder {
        this.model.timeZoneRules = timeZoneRules;
        return this;
    }
}

