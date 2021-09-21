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
 * Specify other additional contact information.             
 */
export class MapiContactPersonalInfoPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "spouseName",
            baseName: "spouseName",
            type: "string",
        },
        {
            name: "personalHomePage",
            baseName: "personalHomePage",
            type: "string",
        },
        {
            name: "language",
            baseName: "language",
            type: "string",
        },
        {
            name: "notes",
            baseName: "notes",
            type: "string",
        },
        {
            name: "hobbies",
            baseName: "hobbies",
            type: "string",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "instantMessagingAddress",
            baseName: "instantMessagingAddress",
            type: "string",
        },
        {
            name: "organizationalIdNumber",
            baseName: "organizationalIdNumber",
            type: "string",
        },
        {
            name: "customerId",
            baseName: "customerId",
            type: "string",
        },
        {
            name: "governmentIdNumber",
            baseName: "governmentIdNumber",
            type: "string",
        },
        {
            name: "freeBusyLocation",
            baseName: "freeBusyLocation",
            type: "string",
        },
        {
            name: "account",
            baseName: "account",
            type: "string",
        },
        {
            name: "html",
            baseName: "html",
            type: "string",
        },
        {
            name: "businessHomePage",
            baseName: "businessHomePage",
            type: "string",
        },
        {
            name: "ftpSite",
            baseName: "ftpSite",
            type: "string",
        },
        {
            name: "computerNetworkName",
            baseName: "computerNetworkName",
            type: "string",
        },
        {
            name: "gender",
            baseName: "gender",
            type: "string",
        },
        {
            name: "referredByName",
            baseName: "referredByName",
            type: "string",
        },
        {
            name: "children",
            baseName: "children",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactPersonalInfoPropertySetDto.attributeTypeMap;
    }

    /**
     * Specifies the name of the contact's spouse/partner             
     */
    public spouseName: string;
    /**
     * Specifies the contact's personal web page URL             
     */
    public personalHomePage: string;
    /**
     * Specifies the language that the contact uses             
     */
    public language: string;
    /**
     * Specifies the additional notes             
     */
    public notes: string;
    /**
     * Specifies the hobbies of the contact             
     */
    public hobbies: string;
    /**
     * Specifies the location of the contact             
     */
    public location: string;
    /**
     * Specifies the contact's instant messaging address             
     */
    public instantMessagingAddress: string;
    /**
     * Specifies an organizational ID number for the contact             
     */
    public organizationalIdNumber: string;
    /**
     * Specifies the contact's customer ID number             
     */
    public customerId: string;
    /**
     * Specifies the contact's government ID number             
     */
    public governmentIdNumber: string;
    /**
     * Specifies a URL path from which a client can retrieve free/busy information for the contact as an iCal file             
     */
    public freeBusyLocation: string;
    /**
     * Specifies the account name of the contact             
     */
    public account: string;
    /**
     * Specifies the contact's business web page URL             
     */
    public html: string;
    /**
     * Specifies the contact's business web page URL             
     */
    public businessHomePage: string;
    /**
     * Specifies the contact's File Transfer Protocol (FTP) URL             
     */
    public ftpSite: string;
    /**
     * Specifies the name of the network to which the contact's computer is connected             
     */
    public computerNetworkName: string;
    /**
     * Gender of the contact. Enum, available values: Unspecified, Female, Male
     */
    public gender: string;
    /**
     * Specifies the name of the person who referred this contact to the user             
     */
    public referredByName: string;
    /**
     * Contains a list of names of children.             
     */
    public children: Array<string>;

    /**
     * Specify other additional contact information.             
     * @param spouseName Specifies the name of the contact's spouse/partner             
     * @param personalHomePage Specifies the contact's personal web page URL             
     * @param language Specifies the language that the contact uses             
     * @param notes Specifies the additional notes             
     * @param hobbies Specifies the hobbies of the contact             
     * @param location Specifies the location of the contact             
     * @param instantMessagingAddress Specifies the contact's instant messaging address             
     * @param organizationalIdNumber Specifies an organizational ID number for the contact             
     * @param customerId Specifies the contact's customer ID number             
     * @param governmentIdNumber Specifies the contact's government ID number             
     * @param freeBusyLocation Specifies a URL path from which a client can retrieve free/busy information for the contact as an iCal file             
     * @param account Specifies the account name of the contact             
     * @param html Specifies the contact's business web page URL             
     * @param businessHomePage Specifies the contact's business web page URL             
     * @param ftpSite Specifies the contact's File Transfer Protocol (FTP) URL             
     * @param computerNetworkName Specifies the name of the network to which the contact's computer is connected             
     * @param gender Gender of the contact. Enum, available values: Unspecified, Female, Male
     * @param referredByName Specifies the name of the person who referred this contact to the user             
     * @param children Contains a list of names of children.             
     */
    public constructor(
        
        spouseName?: string,
        personalHomePage?: string,
        language?: string,
        notes?: string,
        hobbies?: string,
        location?: string,
        instantMessagingAddress?: string,
        organizationalIdNumber?: string,
        customerId?: string,
        governmentIdNumber?: string,
        freeBusyLocation?: string,
        account?: string,
        html?: string,
        businessHomePage?: string,
        ftpSite?: string,
        computerNetworkName?: string,
        gender?: string,
        referredByName?: string,
        children?: Array<string>
    ) {
        
        this.spouseName = spouseName;
        this.personalHomePage = personalHomePage;
        this.language = language;
        this.notes = notes;
        this.hobbies = hobbies;
        this.location = location;
        this.instantMessagingAddress = instantMessagingAddress;
        this.organizationalIdNumber = organizationalIdNumber;
        this.customerId = customerId;
        this.governmentIdNumber = governmentIdNumber;
        this.freeBusyLocation = freeBusyLocation;
        this.account = account;
        this.html = html;
        this.businessHomePage = businessHomePage;
        this.ftpSite = ftpSite;
        this.computerNetworkName = computerNetworkName;
        this.gender = gender;
        this.referredByName = referredByName;
        this.children = children;
        
    }
}

/**
 *  MapiContactPersonalInfoPropertySetDto model builder
 */
export class MapiContactPersonalInfoPropertySetDtoBuilder {
    private readonly model: MapiContactPersonalInfoPropertySetDto;
    public constructor(model: MapiContactPersonalInfoPropertySetDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiContactPersonalInfoPropertySetDto {
        return this.model;
    }

    /**
    * Specifies the name of the contact's spouse/partner             
    */
    public spouseName(spouseName: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.spouseName = spouseName;
        return this;
    }
    /**
    * Specifies the contact's personal web page URL             
    */
    public personalHomePage(personalHomePage: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.personalHomePage = personalHomePage;
        return this;
    }
    /**
    * Specifies the language that the contact uses             
    */
    public language(language: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.language = language;
        return this;
    }
    /**
    * Specifies the additional notes             
    */
    public notes(notes: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.notes = notes;
        return this;
    }
    /**
    * Specifies the hobbies of the contact             
    */
    public hobbies(hobbies: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.hobbies = hobbies;
        return this;
    }
    /**
    * Specifies the location of the contact             
    */
    public location(location: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.location = location;
        return this;
    }
    /**
    * Specifies the contact's instant messaging address             
    */
    public instantMessagingAddress(instantMessagingAddress: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.instantMessagingAddress = instantMessagingAddress;
        return this;
    }
    /**
    * Specifies an organizational ID number for the contact             
    */
    public organizationalIdNumber(organizationalIdNumber: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.organizationalIdNumber = organizationalIdNumber;
        return this;
    }
    /**
    * Specifies the contact's customer ID number             
    */
    public customerId(customerId: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.customerId = customerId;
        return this;
    }
    /**
    * Specifies the contact's government ID number             
    */
    public governmentIdNumber(governmentIdNumber: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.governmentIdNumber = governmentIdNumber;
        return this;
    }
    /**
    * Specifies a URL path from which a client can retrieve free/busy information for the contact as an iCal file             
    */
    public freeBusyLocation(freeBusyLocation: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.freeBusyLocation = freeBusyLocation;
        return this;
    }
    /**
    * Specifies the account name of the contact             
    */
    public account(account: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.account = account;
        return this;
    }
    /**
    * Specifies the contact's business web page URL             
    */
    public html(html: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.html = html;
        return this;
    }
    /**
    * Specifies the contact's business web page URL             
    */
    public businessHomePage(businessHomePage: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.businessHomePage = businessHomePage;
        return this;
    }
    /**
    * Specifies the contact's File Transfer Protocol (FTP) URL             
    */
    public ftpSite(ftpSite: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.ftpSite = ftpSite;
        return this;
    }
    /**
    * Specifies the name of the network to which the contact's computer is connected             
    */
    public computerNetworkName(computerNetworkName: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.computerNetworkName = computerNetworkName;
        return this;
    }
    /**
    * Gender of the contact. Enum, available values: Unspecified, Female, Male
    */
    public gender(gender: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.gender = gender;
        return this;
    }
    /**
    * Specifies the name of the person who referred this contact to the user             
    */
    public referredByName(referredByName: string): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.referredByName = referredByName;
        return this;
    }
    /**
    * Contains a list of names of children.             
    */
    public children(children: Array<string>): MapiContactPersonalInfoPropertySetDtoBuilder {
        this.model.children = children;
        return this;
    }
}

