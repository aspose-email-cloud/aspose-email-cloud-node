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
 * Represents email client account OAuth 2.0 credentials             
 */
export class EmailClientAccountOauthCredentials extends model.EmailClientAccountCredentials {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "clientId",
            baseName: "clientId",
            type: "string",
        },
        {
            name: "clientSecret",
            baseName: "clientSecret",
            type: "string",
        },
        {
            name: "refreshToken",
            baseName: "refreshToken",
            type: "string",
        },
        {
            name: "requestUrl",
            baseName: "requestUrl",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailClientAccountOauthCredentials.attributeTypeMap);
    }

    /**
     * The client ID obtained from the Google Cloud Console during application registration.             
     */
    public clientId: string;
    /**
     * The client secret obtained during application registration.             
     */
    public clientSecret: string;
    /**
     * OAuth 2.0 refresh token             
     */
    public refreshToken: string;
    /**
     * The url to obtain access token. If not specified, will try to discover from email client account host.             
     */
    public requestUrl: string;

    /**
     * Represents email client account OAuth 2.0 credentials             
     * @param login Email client account login             
     * @param clientId The client ID obtained from the Google Cloud Console during application registration.             
     * @param clientSecret The client secret obtained during application registration.             
     * @param refreshToken OAuth 2.0 refresh token             
     * @param requestUrl The url to obtain access token. If not specified, will try to discover from email client account host.             
     */
    public constructor(
        
        login?: string
        ,
        clientId?: string,
        clientSecret?: string,
        refreshToken?: string,
        requestUrl?: string
    ) {
        super();
        this.login = login;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.refreshToken = refreshToken;
        this.requestUrl = requestUrl;
        
    }
}

/**
 *  EmailClientAccountOauthCredentials model builder
 */
export class EmailClientAccountOauthCredentialsBuilder {
    private readonly model: EmailClientAccountOauthCredentials;
    public constructor(model: EmailClientAccountOauthCredentials) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): EmailClientAccountOauthCredentials {
        return this.model;
    }

    /**
    * Email client account login             
    */
    public login(login: string): EmailClientAccountOauthCredentialsBuilder {
        this.model.login = login;
        return this;
    }
    /**
    * The client ID obtained from the Google Cloud Console during application registration.             
    */
    public clientId(clientId: string): EmailClientAccountOauthCredentialsBuilder {
        this.model.clientId = clientId;
        return this;
    }
    /**
    * The client secret obtained during application registration.             
    */
    public clientSecret(clientSecret: string): EmailClientAccountOauthCredentialsBuilder {
        this.model.clientSecret = clientSecret;
        return this;
    }
    /**
    * OAuth 2.0 refresh token             
    */
    public refreshToken(refreshToken: string): EmailClientAccountOauthCredentialsBuilder {
        this.model.refreshToken = refreshToken;
        return this;
    }
    /**
    * The url to obtain access token. If not specified, will try to discover from email client account host.             
    */
    public requestUrl(requestUrl: string): EmailClientAccountOauthCredentialsBuilder {
        this.model.requestUrl = requestUrl;
        return this;
    }
}

