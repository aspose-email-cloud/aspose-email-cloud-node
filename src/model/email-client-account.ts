
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
 * A universal email client account             
 */
export class EmailClientAccount {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            name: "securityOptions",
            baseName: "securityOptions",
            type: "string",
        },
        {
            name: "protocolType",
            baseName: "protocolType",
            type: "string",
        },
        {
            name: "credentials",
            baseName: "credentials",
            type: "EmailClientAccountCredentials",
        },
        {
            name: "cacheFile",
            baseName: "cacheFile",
            type: "StorageFileLocation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailClientAccount.attributeTypeMap;
    }

    /**
     * Mail server host name or IP address             
     */
    public host: string;
    /**
     * Mail server port             
     */
    public port: number;
    /**
     * Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     */
    public securityOptions: string;
    /**
     * Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     */
    public protocolType: string;
    /**
     * Email client account credentials             
     */
    public credentials: model.EmailClientAccountCredentials;
    /**
     * File with messages cache. Used to provide extra functions, which are not supported by account             
     */
    public cacheFile: model.StorageFileLocation;

    /**
     * A universal email client account             
     * @param host Mail server host name or IP address             
     * @param port Mail server port             
     * @param securityOptions Email account security mode Enum, available values: None, SSLExplicit, SSLImplicit, SSLAuto, Auto
     * @param protocolType Type of connection protocol. Enum, available values: IMAP, POP3, SMTP, EWS, WebDav
     * @param credentials Email client account credentials             
     * @param cacheFile File with messages cache. Used to provide extra functions, which are not supported by account             
     */
    public constructor(
        host?: string,
        port?: number,
        securityOptions?: string,
        protocolType?: string,
        credentials?: model.EmailClientAccountCredentials,
        cacheFile?: model.StorageFileLocation) {
        
        this.host = host;
        this.port = port;
        this.securityOptions = securityOptions;
        this.protocolType = protocolType;
        this.credentials = credentials;
        this.cacheFile = cacheFile;
    }
}

