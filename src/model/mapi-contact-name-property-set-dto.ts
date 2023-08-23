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
 * The properties are used to specify the name of the person represented by the contact             
 */
export class MapiContactNamePropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "displayNamePrefix",
            baseName: "displayNamePrefix",
            type: "string",
        },
        {
            name: "fileUnder",
            baseName: "fileUnder",
            type: "string",
        },
        {
            name: "fileUnderId",
            baseName: "fileUnderId",
            type: "number",
        },
        {
            name: "generation",
            baseName: "generation",
            type: "string",
        },
        {
            name: "givenName",
            baseName: "givenName",
            type: "string",
        },
        {
            name: "initials",
            baseName: "initials",
            type: "string",
        },
        {
            name: "middleName",
            baseName: "middleName",
            type: "string",
        },
        {
            name: "nickname",
            baseName: "nickname",
            type: "string",
        },
        {
            name: "surname",
            baseName: "surname",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactNamePropertySetDto.attributeTypeMap;
    }

    /**
     * Full name of the contact             
     */
    public displayName: string;
    /**
     * Title of the contact             
     */
    public displayNamePrefix: string;
    /**
     * Name under which to file this contact when displaying a list of contacts             
     */
    public fileUnder: string;
    /**
     * Value specifying how to generate and recompute the property when other properties are changed             
     */
    public fileUnderId: number;
    /**
     * Generation suffix of the contact             
     */
    public generation: string;
    /**
     * Given name (first name) of the contact             
     */
    public givenName: string;
    /**
     * Initials of the contact             
     */
    public initials: string;
    /**
     * Middle name of the contact             
     */
    public middleName: string;
    /**
     * Nickname of the contact             
     */
    public nickname: string;
    /**
     * Surname (family name) of the contact             
     */
    public surname: string;

    /**
     * The properties are used to specify the name of the person represented by the contact             
     * @param displayName Full name of the contact             
     * @param displayNamePrefix Title of the contact             
     * @param fileUnder Name under which to file this contact when displaying a list of contacts             
     * @param fileUnderId Value specifying how to generate and recompute the property when other properties are changed             
     * @param generation Generation suffix of the contact             
     * @param givenName Given name (first name) of the contact             
     * @param initials Initials of the contact             
     * @param middleName Middle name of the contact             
     * @param nickname Nickname of the contact             
     * @param surname Surname (family name) of the contact             
     */
    public constructor(
        
        displayName?: string,
        displayNamePrefix?: string,
        fileUnder?: string,
        fileUnderId?: number,
        generation?: string,
        givenName?: string,
        initials?: string,
        middleName?: string,
        nickname?: string,
        surname?: string
    ) {
        
        this.displayName = displayName;
        this.displayNamePrefix = displayNamePrefix;
        this.fileUnder = fileUnder;
        this.fileUnderId = fileUnderId;
        this.generation = generation;
        this.givenName = givenName;
        this.initials = initials;
        this.middleName = middleName;
        this.nickname = nickname;
        this.surname = surname;
        
    }
}

/**
 *  MapiContactNamePropertySetDto model builder
 */
export class MapiContactNamePropertySetDtoBuilder {
    private readonly model: MapiContactNamePropertySetDto;
    public constructor(model: MapiContactNamePropertySetDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiContactNamePropertySetDto {
        return this.model;
    }

    /**
    * Full name of the contact             
    */
    public displayName(displayName: string): MapiContactNamePropertySetDtoBuilder {
        this.model.displayName = displayName;
        return this;
    }
    /**
    * Title of the contact             
    */
    public displayNamePrefix(displayNamePrefix: string): MapiContactNamePropertySetDtoBuilder {
        this.model.displayNamePrefix = displayNamePrefix;
        return this;
    }
    /**
    * Name under which to file this contact when displaying a list of contacts             
    */
    public fileUnder(fileUnder: string): MapiContactNamePropertySetDtoBuilder {
        this.model.fileUnder = fileUnder;
        return this;
    }
    /**
    * Value specifying how to generate and recompute the property when other properties are changed             
    */
    public fileUnderId(fileUnderId: number): MapiContactNamePropertySetDtoBuilder {
        this.model.fileUnderId = fileUnderId;
        return this;
    }
    /**
    * Generation suffix of the contact             
    */
    public generation(generation: string): MapiContactNamePropertySetDtoBuilder {
        this.model.generation = generation;
        return this;
    }
    /**
    * Given name (first name) of the contact             
    */
    public givenName(givenName: string): MapiContactNamePropertySetDtoBuilder {
        this.model.givenName = givenName;
        return this;
    }
    /**
    * Initials of the contact             
    */
    public initials(initials: string): MapiContactNamePropertySetDtoBuilder {
        this.model.initials = initials;
        return this;
    }
    /**
    * Middle name of the contact             
    */
    public middleName(middleName: string): MapiContactNamePropertySetDtoBuilder {
        this.model.middleName = middleName;
        return this;
    }
    /**
    * Nickname of the contact             
    */
    public nickname(nickname: string): MapiContactNamePropertySetDtoBuilder {
        this.model.nickname = nickname;
        return this;
    }
    /**
    * Surname (family name) of the contact             
    */
    public surname(surname: string): MapiContactNamePropertySetDtoBuilder {
        this.model.surname = surname;
        return this;
    }
}

