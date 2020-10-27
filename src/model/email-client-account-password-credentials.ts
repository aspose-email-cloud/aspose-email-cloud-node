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
 * Represents email client account password credentials             
 */
export class EmailClientAccountPasswordCredentials extends model.EmailClientAccountCredentials {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailClientAccountPasswordCredentials.attributeTypeMap);
    }

    /**
     * Email client account password             
     */
    public password: string;

    /**
     * Represents email client account password credentials             
     * @param login Email client account login             
     * @param password Email client account password             
     */
    public constructor(
        
        login?: string
        ,
        password?: string
    ) {
        super();
        this.login = login;
        this.password = password;
        
    }
}

/**
 *  EmailClientAccountPasswordCredentials model builder
 */
export class EmailClientAccountPasswordCredentialsBuilder {
    private readonly model: EmailClientAccountPasswordCredentials;
    public constructor(model: EmailClientAccountPasswordCredentials) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): EmailClientAccountPasswordCredentials {
        return this.model;
    }

    /**
    * Email client account login             
    */
    public login(login: string): EmailClientAccountPasswordCredentialsBuilder {
        this.model.login = login;
        return this;
    }
    /**
    * Email client account password             
    */
    public password(password: string): EmailClientAccountPasswordCredentialsBuilder {
        this.model.password = password;
        return this;
    }
}

