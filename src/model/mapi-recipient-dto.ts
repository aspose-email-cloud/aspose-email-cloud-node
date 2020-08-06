
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
 * Represents the recipient information in the Microsoft Outlook Message.             
 */
export class MapiRecipientDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emailAddress",
            baseName: "emailAddress",
            type: "string",
        },
        {
            name: "addressType",
            baseName: "addressType",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "recipientType",
            baseName: "recipientType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiRecipientDto.attributeTypeMap;
    }

    /**
     * Email address of the message recipient or sender.             
     */
    public emailAddress: string;
    
    /**
     * Type of the address of the message recipient or sender.             
     */
    public addressType: string;
    
    /**
     * Display name of the message recipient or sender.             
     */
    public displayName: string;
    
    /**
     * Represent the PR_RECIPIENT_TYPE property which contains the recipient type for a message recipient. Enum, available values: Unknown, MapiBcc, MapiCc, MapiP1, MapiSubmitted, MapiTo
     */
    public recipientType: string;
    

    /**
     * Represents the recipient information in the Microsoft Outlook Message.             
     * @param emailAddress Email address of the message recipient or sender.             
     * @param addressType Type of the address of the message recipient or sender.             
     * @param displayName Display name of the message recipient or sender.             
     * @param recipientType Represent the PR_RECIPIENT_TYPE property which contains the recipient type for a message recipient. Enum, available values: Unknown, MapiBcc, MapiCc, MapiP1, MapiSubmitted, MapiTo
     */
    public constructor(
        emailAddress?: string,
        addressType?: string,
        displayName?: string,
        recipientType?: string) {
        
        this.emailAddress = emailAddress;
        this.addressType = addressType;
        this.displayName = displayName;
        this.recipientType = recipientType;
    }
}

