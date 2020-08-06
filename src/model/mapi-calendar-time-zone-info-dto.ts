
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
 * Represents the mapi calendar time zone rule.             
 */
export class MapiCalendarTimeZoneInfoDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "bias",
            baseName: "bias",
            type: "number",
        },
        {
            name: "daylightBias",
            baseName: "daylightBias",
            type: "number",
        },
        {
            name: "daylightDate",
            baseName: "daylightDate",
            type: "MapiCalendarTimeZoneRuleDto",
        },
        {
            name: "standardBias",
            baseName: "standardBias",
            type: "number",
        },
        {
            name: "standardDate",
            baseName: "standardDate",
            type: "MapiCalendarTimeZoneRuleDto",
        },
        {
            name: "timeZoneFlags",
            baseName: "timeZoneFlags",
            type: "Array<string>",
        },
        {
            name: "year",
            baseName: "year",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiCalendarTimeZoneInfoDto.attributeTypeMap;
    }

    /**
     * Time zone's offset in minutes from UTC.             
     */
    public bias: number;
    /**
     * Offset in minutes from lBias during daylight saving time.             
     */
    public daylightBias: number;
    /**
     * Date and local time that indicate when to begin using the DaylightBias.             
     */
    public daylightDate: model.MapiCalendarTimeZoneRuleDto;
    /**
     * Offset in minutes from lBias during standard time.             
     */
    public standardBias: number;
    /**
     * Date and local time that indicate when to begin using the StandardBias.             
     */
    public standardDate: model.MapiCalendarTimeZoneRuleDto;
    /**
     * Individual bit flags that specify information about this TimeZoneRule.              Items: Enumerates the individual bit flags that specify information about TimeZoneRule Enum, available values: TzRuleFlagRecurCurrentTzReg, TzRuleFlagEffectiveTzReg
     */
    public timeZoneFlags: Array<string>;
    /**
     * Year in which this rule is scheduled to take effect.             
     */
    public year: number;

    /**
     * Represents the mapi calendar time zone rule.             
     * @param bias Time zone's offset in minutes from UTC.             
     * @param daylightBias Offset in minutes from lBias during daylight saving time.             
     * @param daylightDate Date and local time that indicate when to begin using the DaylightBias.             
     * @param standardBias Offset in minutes from lBias during standard time.             
     * @param standardDate Date and local time that indicate when to begin using the StandardBias.             
     * @param timeZoneFlags Individual bit flags that specify information about this TimeZoneRule.             
     * @param year Year in which this rule is scheduled to take effect.             
     */
    public constructor(
        bias?: number,
        daylightBias?: number,
        daylightDate?: model.MapiCalendarTimeZoneRuleDto,
        standardBias?: number,
        standardDate?: model.MapiCalendarTimeZoneRuleDto,
        timeZoneFlags?: Array<string>,
        year?: number) {
        
        this.bias = bias;
        this.daylightBias = daylightBias;
        this.daylightDate = daylightDate;
        this.standardBias = standardBias;
        this.standardDate = standardDate;
        this.timeZoneFlags = timeZoneFlags;
        this.year = year;
    }
}

