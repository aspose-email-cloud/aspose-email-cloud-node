
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
 * Email messages thread             
 */
export class EmailThread {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "string",
        },
        {
            name: "subject",
            baseName: "subject",
            type: "string",
        },
        {
            name: "messages",
            baseName: "messages",
            type: "Array<EmailDto>",
        },
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailThread.attributeTypeMap;
    }

    /**
     * Thread identifier             
     */
    public id: string;
    
    /**
     * Thread subject             
     */
    public subject: string;
    
    /**
     * List of messages in thread             
     */
    public messages: Array< model.EmailDto >;
    
    /**
     * Thread folder location             
     */
    public folder: string;
    

    /**
     * Email messages thread             
     * @param id Thread identifier             
     * @param subject Thread subject             
     * @param messages List of messages in thread             
     * @param folder Thread folder location             
     */
    public constructor(
        id?: string,
        subject?: string,
        messages?: Array< model.EmailDto >,
        folder?: string) {
        
        this.id = id;
        this.subject = subject;
        this.messages = messages;
        this.folder = folder;
    }
}

