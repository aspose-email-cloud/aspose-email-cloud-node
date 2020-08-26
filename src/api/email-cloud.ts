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

import { Configuration } from "../internal/configuration";

    
import { CalendarApi } from "./calendar-api";
    
import { ContactApi } from "./contact-api";
    
import { EmailApi } from "./email-api";
    
import { DisposableEmailApi } from "./disposable-email-api";
    
import { EmailConfigApi } from "./email-config-api";
    
    
import { MapiGroup } from "./mapi-group";
    
import { ClientGroup } from "./client-group";
    
import { AiGroup } from "./ai-group";
    
import { CloudStorageGroup } from "./cloud-storage-group";
    


/**
 * Aspose.Email Cloud API
 */
export class EmailCloud {
    public configuration: Configuration;

    
    private readonly _calendar: CalendarApi;
    
    private readonly _contact: ContactApi;
    
    private readonly _email: EmailApi;
    
    private readonly _disposableEmail: DisposableEmailApi;
    
    private readonly _emailConfig: EmailConfigApi;
    
    
    private readonly _mapi: MapiGroup;
    
    private readonly _client: ClientGroup;
    
    private readonly _ai: AiGroup;
    
    private readonly _cloudStorage: CloudStorageGroup;
    

    
    /**
     *  iCalendar document operations.
     */
    public get calendar(): CalendarApi {
        return this._calendar;
    }
    
    /**
     *  Contact document operations. Supported formats: VCard, MSG, WebDav
     */
    public get contact(): ContactApi {
        return this._contact;
    }
    
    /**
     *  Email document (*.eml) operations.
     */
    public get email(): EmailApi {
        return this._email;
    }
    
    /**
     *  Check email address is disposable operations
     */
    public get disposableEmail(): DisposableEmailApi {
        return this._disposableEmail;
    }
    
    /**
     *  Email server configuration discovery.
     */
    public get emailConfig(): EmailConfigApi {
        return this._emailConfig;
    }
    
    
    /**
     *  MAPI operations.
     */
    public get mapi(): MapiGroup {
        return this._mapi;
    }
    
    /**
     *  Builtin Email client operations.
     */
    public get client(): ClientGroup {
        return this._client;
    }
    
    /**
     *  AI powered operations.
     */
    public get ai(): AiGroup {
        return this._ai;
    }
    
    /**
     *  Cloud file storage operations.
     */
    public get cloudStorage(): CloudStorageGroup {
        return this._cloudStorage;
    }
    

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appKey, appSID, baseUrl, debugMode);
    
        this._calendar = new CalendarApi(this.configuration);
    
        this._contact = new ContactApi(this.configuration);
    
        this._email = new EmailApi(this.configuration);
    
        this._disposableEmail = new DisposableEmailApi(this.configuration);
    
        this._emailConfig = new EmailConfigApi(this.configuration);
    
    
        this._mapi = new MapiGroup(this.configuration);
    
        this._client = new ClientGroup(this.configuration);
    
        this._ai = new AiGroup(this.configuration);
    
        this._cloudStorage = new CloudStorageGroup(this.configuration);
    
    }
}
