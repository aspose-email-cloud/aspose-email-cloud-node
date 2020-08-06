
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
 * Represents email client account credentials             
 */
export class EmailClientAccountCredentials {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "login",
            baseName: "login",
            type: "string",
        },
        {
            name: "discriminator",
            baseName: "discriminator",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailClientAccountCredentials.attributeTypeMap;
    }

    /**
     * Email client account login             
     */
    public login: string;
    /**
     * Model type discriminator. Used for serialization purposes. Field is set automatically by SDK.
     */
    public get discriminator(): string {
        return this.constructor.name;
    }
    public set discriminator(_newType: string) {
        /* do nothing */
    };


    /**
     * Represents email client account credentials             
     * @param login Email client account login             
     * @param discriminator 
     */
    public constructor(
        login?: string,
        discriminator?: string) {
        
        this.login = login;
        this.discriminator = discriminator;
    }
}

