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
 * Email client virtual account, which contains several accounts             
 */
export class EmailClientMultiAccount {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "receiveAccounts",
            baseName: "receiveAccounts",
            type: "Array<EmailClientAccount>",
        },
        {
            name: "sendAccount",
            baseName: "sendAccount",
            type: "EmailClientAccount",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailClientMultiAccount.attributeTypeMap;
    }

    /**
     * Email client receive accounts             
     */
    public receiveAccounts: Array< model.EmailClientAccount >;
    /**
     * Email client send account             
     */
    public sendAccount: model.EmailClientAccount;

    /**
     * Email client virtual account, which contains several accounts             
     * @param receiveAccounts Email client receive accounts             
     * @param sendAccount Email client send account             
     */
    public constructor(
        
        receiveAccounts?: Array< model.EmailClientAccount >,
        sendAccount?: model.EmailClientAccount
    ) {
        
        this.receiveAccounts = receiveAccounts;
        this.sendAccount = sendAccount;
        
    }
}

/**
 *  EmailClientMultiAccount model builder
 */
export class EmailClientMultiAccountBuilder {
    private readonly model: EmailClientMultiAccount;
    public constructor(model: EmailClientMultiAccount) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): EmailClientMultiAccount {
        return this.model;
    }

    /**
    * Email client receive accounts             
    */
    public receiveAccounts(receiveAccounts: Array< model.EmailClientAccount >): EmailClientMultiAccountBuilder {
        this.model.receiveAccounts = receiveAccounts;
        return this;
    }
    /**
    * Email client send account             
    */
    public sendAccount(sendAccount: model.EmailClientAccount): EmailClientMultiAccountBuilder {
        this.model.sendAccount = sendAccount;
        return this;
    }
}

