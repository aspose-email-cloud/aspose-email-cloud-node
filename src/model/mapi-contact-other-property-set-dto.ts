
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
 * The properties are used to specify additional properties of contact.             
 */
export class MapiContactOtherPropertySetDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "_private",
            baseName: "private",
            type: "boolean",
        },
        {
            name: "journal",
            baseName: "journal",
            type: "boolean",
        },
        {
            name: "reminderTime",
            baseName: "reminderTime",
            type: "Date",
        },
        {
            name: "reminderTopic",
            baseName: "reminderTopic",
            type: "string",
        },
        {
            name: "userField1",
            baseName: "userField1",
            type: "string",
        },
        {
            name: "userField2",
            baseName: "userField2",
            type: "string",
        },
        {
            name: "userField3",
            baseName: "userField3",
            type: "string",
        },
        {
            name: "userField4",
            baseName: "userField4",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MapiContactOtherPropertySetDto.attributeTypeMap;
    }

    /**
     * Indicates whether the end-user wants this message object hidden from other users who have access to the message object.             
     */
    public _private: boolean;
    
    /**
     * Specifies whether to create a journal for each action associated with this contact.             
     */
    public journal: boolean;
    
    /**
     * Specifies the initial signal time for a reminder.             
     */
    public reminderTime: Date;
    
    /**
     * Represents the status of a meeting request.             
     */
    public reminderTopic: string;
    
    /**
     * Specifies the first field on the contact that is intended for miscellaneous use for the contact.             
     */
    public userField1: string;
    
    /**
     * Specifies the second field on the contact that is intended for miscellaneous use for the contact.             
     */
    public userField2: string;
    
    /**
     * Specifies the third field on the contact that is intended for miscellaneous use for the contact.             
     */
    public userField3: string;
    
    /**
     * Specifies the forth field on the contact that is intended for miscellaneous use for the contact.             
     */
    public userField4: string;
    

    /**
     * The properties are used to specify additional properties of contact.             
     * @param _private Indicates whether the end-user wants this message object hidden from other users who have access to the message object.             
     * @param journal Specifies whether to create a journal for each action associated with this contact.             
     * @param reminderTime Specifies the initial signal time for a reminder.             
     * @param reminderTopic Represents the status of a meeting request.             
     * @param userField1 Specifies the first field on the contact that is intended for miscellaneous use for the contact.             
     * @param userField2 Specifies the second field on the contact that is intended for miscellaneous use for the contact.             
     * @param userField3 Specifies the third field on the contact that is intended for miscellaneous use for the contact.             
     * @param userField4 Specifies the forth field on the contact that is intended for miscellaneous use for the contact.             
     */
    public constructor(
        _private?: boolean,
        journal?: boolean,
        reminderTime?: Date,
        reminderTopic?: string,
        userField1?: string,
        userField2?: string,
        userField3?: string,
        userField4?: string) {
        
        this._private = _private;
        this.journal = journal;
        this.reminderTime = reminderTime;
        this.reminderTopic = reminderTopic;
        this.userField1 = userField1;
        this.userField2 = userField2;
        this.userField3 = userField3;
        this.userField4 = userField4;
    }
}

