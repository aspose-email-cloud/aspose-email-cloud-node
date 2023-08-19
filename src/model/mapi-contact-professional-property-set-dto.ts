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
 * Properties are used to store professional details for the person represented by the contact             
 */
export class MapiContactProfessionalPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "title",
            baseName: "title",
            type: "string",
        },
        {
            name: "companyName",
            baseName: "companyName",
            type: "string",
        },
        {
            name: "departmentName",
            baseName: "departmentName",
            type: "string",
        },
        {
            name: "officeLocation",
            baseName: "officeLocation",
            type: "string",
        },
        {
            name: "managerName",
            baseName: "managerName",
            type: "string",
        },
        {
            name: "assistant",
            baseName: "assistant",
            type: "string",
        },
        {
            name: "profession",
            baseName: "profession",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactProfessionalPropertySetDto.attributeTypeMap;
    }

    /**
     * Gets or sets the job title of the contact             
     */
    public title: string;
    /**
     * Gets or sets the company that employs the contact             
     */
    public companyName: string;
    /**
     * Gets or sets the name of the department to which the contact belongs             
     */
    public departmentName: string;
    /**
     * Gets or sets the location of the office that the contact works in             
     */
    public officeLocation: string;
    /**
     * Gets or sets the name of the contact's manager             
     */
    public managerName: string;
    /**
     * Gets or sets the name of the contact's assistant             
     */
    public assistant: string;
    /**
     * Gets or sets the profession of the contact             
     */
    public profession: string;

    /**
     * Properties are used to store professional details for the person represented by the contact             
     * @param title Gets or sets the job title of the contact             
     * @param companyName Gets or sets the company that employs the contact             
     * @param departmentName Gets or sets the name of the department to which the contact belongs             
     * @param officeLocation Gets or sets the location of the office that the contact works in             
     * @param managerName Gets or sets the name of the contact's manager             
     * @param assistant Gets or sets the name of the contact's assistant             
     * @param profession Gets or sets the profession of the contact             
     */
    public constructor(
        
        title?: string,
        companyName?: string,
        departmentName?: string,
        officeLocation?: string,
        managerName?: string,
        assistant?: string,
        profession?: string
    ) {
        
        this.title = title;
        this.companyName = companyName;
        this.departmentName = departmentName;
        this.officeLocation = officeLocation;
        this.managerName = managerName;
        this.assistant = assistant;
        this.profession = profession;
        
    }
}

/**
 *  MapiContactProfessionalPropertySetDto model builder
 */
export class MapiContactProfessionalPropertySetDtoBuilder {
    private readonly model: MapiContactProfessionalPropertySetDto;
    public constructor(model: MapiContactProfessionalPropertySetDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiContactProfessionalPropertySetDto {
        return this.model;
    }

    /**
    * Gets or sets the job title of the contact             
    */
    public title(title: string): MapiContactProfessionalPropertySetDtoBuilder {
        this.model.title = title;
        return this;
    }
    /**
    * Gets or sets the company that employs the contact             
    */
    public companyName(companyName: string): MapiContactProfessionalPropertySetDtoBuilder {
        this.model.companyName = companyName;
        return this;
    }
    /**
    * Gets or sets the name of the department to which the contact belongs             
    */
    public departmentName(departmentName: string): MapiContactProfessionalPropertySetDtoBuilder {
        this.model.departmentName = departmentName;
        return this;
    }
    /**
    * Gets or sets the location of the office that the contact works in             
    */
    public officeLocation(officeLocation: string): MapiContactProfessionalPropertySetDtoBuilder {
        this.model.officeLocation = officeLocation;
        return this;
    }
    /**
    * Gets or sets the name of the contact's manager             
    */
    public managerName(managerName: string): MapiContactProfessionalPropertySetDtoBuilder {
        this.model.managerName = managerName;
        return this;
    }
    /**
    * Gets or sets the name of the contact's assistant             
    */
    public assistant(assistant: string): MapiContactProfessionalPropertySetDtoBuilder {
        this.model.assistant = assistant;
        return this;
    }
    /**
    * Gets or sets the profession of the contact             
    */
    public profession(profession: string): MapiContactProfessionalPropertySetDtoBuilder {
        this.model.profession = profession;
        return this;
    }
}

