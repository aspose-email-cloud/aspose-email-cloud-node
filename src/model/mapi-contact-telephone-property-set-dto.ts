
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
 * Specify optional telephone numbers for the contact.             
 */
export class MapiContactTelephonePropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isEmpty",
            baseName: "isEmpty",
            type: "boolean",
        },
        {
            name: "defaultTelephoneNumber",
            baseName: "defaultTelephoneNumber",
            type: "string",
        },
        {
            name: "useAutocomplete",
            baseName: "useAutocomplete",
            type: "boolean",
        },
        {
            name: "callbackTelephoneNumber",
            baseName: "callbackTelephoneNumber",
            type: "string",
        },
        {
            name: "businessTelephoneNumber",
            baseName: "businessTelephoneNumber",
            type: "string",
        },
        {
            name: "homeTelephoneNumber",
            baseName: "homeTelephoneNumber",
            type: "string",
        },
        {
            name: "primaryTelephoneNumber",
            baseName: "primaryTelephoneNumber",
            type: "string",
        },
        {
            name: "business2TelephoneNumber",
            baseName: "business2TelephoneNumber",
            type: "string",
        },
        {
            name: "mobileTelephoneNumber",
            baseName: "mobileTelephoneNumber",
            type: "string",
        },
        {
            name: "radioTelephoneNumber",
            baseName: "radioTelephoneNumber",
            type: "string",
        },
        {
            name: "carTelephoneNumber",
            baseName: "carTelephoneNumber",
            type: "string",
        },
        {
            name: "otherTelephoneNumber",
            baseName: "otherTelephoneNumber",
            type: "string",
        },
        {
            name: "assistantTelephoneNumber",
            baseName: "assistantTelephoneNumber",
            type: "string",
        },
        {
            name: "home2TelephoneNumber",
            baseName: "home2TelephoneNumber",
            type: "string",
        },
        {
            name: "ttyTddPhoneNumber",
            baseName: "ttyTddPhoneNumber",
            type: "string",
        },
        {
            name: "companyMainTelephoneNumber",
            baseName: "companyMainTelephoneNumber",
            type: "string",
        },
        {
            name: "telexNumber",
            baseName: "telexNumber",
            type: "string",
        },
        {
            name: "isdnNumber",
            baseName: "isdnNumber",
            type: "string",
        },
        {
            name: "pagerTelephoneNumber",
            baseName: "pagerTelephoneNumber",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactTelephonePropertySetDto.attributeTypeMap;
    }

    /**
     * Shows if MapiContactTelephonePropertySet is empty             
     */
    public isEmpty: boolean;
    
    /**
     * Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
     */
    public defaultTelephoneNumber: string;
    
    /**
     * Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
     */
    public useAutocomplete: boolean;
    
    /**
     * Gets or sets the callback telephone number             
     */
    public callbackTelephoneNumber: string;
    
    /**
     * Gets or sets the business telephone number             
     */
    public businessTelephoneNumber: string;
    
    /**
     * Gets or sets the home telephone number             
     */
    public homeTelephoneNumber: string;
    
    /**
     * Gets or sets the primary telephone number             
     */
    public primaryTelephoneNumber: string;
    
    /**
     * Gets or sets the second business telephone number             
     */
    public business2TelephoneNumber: string;
    
    /**
     * Gets or sets the mobile telephone number             
     */
    public mobileTelephoneNumber: string;
    
    /**
     * Gets or sets the radio telephone number             
     */
    public radioTelephoneNumber: string;
    
    /**
     * Gets or sets the car telephone number             
     */
    public carTelephoneNumber: string;
    
    /**
     * Gets or sets an alternate telephone number             
     */
    public otherTelephoneNumber: string;
    
    /**
     * Gets or sets the telephone number of the contact's assistant             
     */
    public assistantTelephoneNumber: string;
    
    /**
     * Gets or sets a second home telephone number             
     */
    public home2TelephoneNumber: string;
    
    /**
     * Gets or sets the telephone number for the contact's text telephone (TTY) or telecommunication device for the deaf (TDD)             
     */
    public ttyTddPhoneNumber: string;
    
    /**
     * Gets or sets the company phone number             
     */
    public companyMainTelephoneNumber: string;
    
    /**
     * Gets or sets the telex number             
     */
    public telexNumber: string;
    
    /**
     * Gets or sets the integrated services digital network (ISDN) number             
     */
    public isdnNumber: string;
    
    /**
     * Gets or sets a pager telephone number             
     */
    public pagerTelephoneNumber: string;
    

    /**
     * Specify optional telephone numbers for the contact.             
     * @param isEmpty Shows if MapiContactTelephonePropertySet is empty             
     * @param defaultTelephoneNumber Default value of electronic address Uses when user does not set any electronic address if UseAutocomplete property is set 'true'             
     * @param useAutocomplete Indicates that one electronic address is completed automatically in case if user does not set any electronic address             
     * @param callbackTelephoneNumber Gets or sets the callback telephone number             
     * @param businessTelephoneNumber Gets or sets the business telephone number             
     * @param homeTelephoneNumber Gets or sets the home telephone number             
     * @param primaryTelephoneNumber Gets or sets the primary telephone number             
     * @param business2TelephoneNumber Gets or sets the second business telephone number             
     * @param mobileTelephoneNumber Gets or sets the mobile telephone number             
     * @param radioTelephoneNumber Gets or sets the radio telephone number             
     * @param carTelephoneNumber Gets or sets the car telephone number             
     * @param otherTelephoneNumber Gets or sets an alternate telephone number             
     * @param assistantTelephoneNumber Gets or sets the telephone number of the contact's assistant             
     * @param home2TelephoneNumber Gets or sets a second home telephone number             
     * @param ttyTddPhoneNumber Gets or sets the telephone number for the contact's text telephone (TTY) or telecommunication device for the deaf (TDD)             
     * @param companyMainTelephoneNumber Gets or sets the company phone number             
     * @param telexNumber Gets or sets the telex number             
     * @param isdnNumber Gets or sets the integrated services digital network (ISDN) number             
     * @param pagerTelephoneNumber Gets or sets a pager telephone number             
     */
    public constructor(
        isEmpty?: boolean,
        defaultTelephoneNumber?: string,
        useAutocomplete?: boolean,
        callbackTelephoneNumber?: string,
        businessTelephoneNumber?: string,
        homeTelephoneNumber?: string,
        primaryTelephoneNumber?: string,
        business2TelephoneNumber?: string,
        mobileTelephoneNumber?: string,
        radioTelephoneNumber?: string,
        carTelephoneNumber?: string,
        otherTelephoneNumber?: string,
        assistantTelephoneNumber?: string,
        home2TelephoneNumber?: string,
        ttyTddPhoneNumber?: string,
        companyMainTelephoneNumber?: string,
        telexNumber?: string,
        isdnNumber?: string,
        pagerTelephoneNumber?: string) {
        
        this.isEmpty = isEmpty;
        this.defaultTelephoneNumber = defaultTelephoneNumber;
        this.useAutocomplete = useAutocomplete;
        this.callbackTelephoneNumber = callbackTelephoneNumber;
        this.businessTelephoneNumber = businessTelephoneNumber;
        this.homeTelephoneNumber = homeTelephoneNumber;
        this.primaryTelephoneNumber = primaryTelephoneNumber;
        this.business2TelephoneNumber = business2TelephoneNumber;
        this.mobileTelephoneNumber = mobileTelephoneNumber;
        this.radioTelephoneNumber = radioTelephoneNumber;
        this.carTelephoneNumber = carTelephoneNumber;
        this.otherTelephoneNumber = otherTelephoneNumber;
        this.assistantTelephoneNumber = assistantTelephoneNumber;
        this.home2TelephoneNumber = home2TelephoneNumber;
        this.ttyTddPhoneNumber = ttyTddPhoneNumber;
        this.companyMainTelephoneNumber = companyMainTelephoneNumber;
        this.telexNumber = telexNumber;
        this.isdnNumber = isdnNumber;
        this.pagerTelephoneNumber = pagerTelephoneNumber;
    }
}

