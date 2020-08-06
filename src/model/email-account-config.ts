
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
 * Email account configuration.             
 */
export class EmailAccountConfig {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "protocolType",
            baseName: "protocolType",
            type: "string",
        },
        {
            name: "host",
            baseName: "host",
            type: "string",
        },
        {
            name: "port",
            baseName: "port",
            type: "number",
        },
        {
            name: "socketType",
            baseName: "socketType",
            type: "string",
        },
        {
            name: "authenticationTypes",
            baseName: "authenticationTypes",
            type: "Array<string>",
        },
        {
            name: "extraInfo",
            baseName: "extraInfo",
            type: "Array<NameValuePair>",
        },
        {
            name: "isValidated",
            baseName: "isValidated",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailAccountConfig.attributeTypeMap;
    }

    /**
     * Email account display name             
     */
    public displayName: string;
    /**
     * Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     */
    public protocolType: string;
    /**
     * Email account host.             
     */
    public host: string;
    /**
     * Port.             
     */
    public port: number;
    /**
     * Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     */
    public socketType: string;
    /**
     * Supported authentication types.              Items: Email account authentication types. Enum, available values: NoAuth, OAuth2, PasswordCleartext, PasswordEncrypted, SmtpAfterPop, ClientIpAddress
     */
    public authenticationTypes: Array<string>;
    /**
     * Extra account information.             
     */
    public extraInfo: Array< model.NameValuePair >;
    /**
     * Determines that configuration validated. Set to false if validation skipped.             
     */
    public isValidated: boolean;

    /**
     * Email account configuration.             
     * @param displayName Email account display name             
     * @param protocolType Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     * @param host Email account host.             
     * @param port Port.             
     * @param socketType Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     * @param authenticationTypes Supported authentication types.             
     * @param extraInfo Extra account information.             
     * @param isValidated Determines that configuration validated. Set to false if validation skipped.             
     */
    public constructor(
        
        displayName?: string,
        protocolType?: string,
        host?: string,
        port?: number,
        socketType?: string,
        authenticationTypes?: Array<string>,
        extraInfo?: Array< model.NameValuePair >,
        isValidated?: boolean
    ) {
        
        this.displayName = displayName;
        this.protocolType = protocolType;
        this.host = host;
        this.port = port;
        this.socketType = socketType;
        this.authenticationTypes = authenticationTypes;
        this.extraInfo = extraInfo;
        this.isValidated = isValidated;
        
    }
}



