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

    
    public calendar: CalendarApi;
    
    public contact: ContactApi;
    
    public email: EmailApi;
    
    public disposableEmail: DisposableEmailApi;
    
    public emailConfig: EmailConfigApi;
    
    
    public mapi: MapiGroup;
    
    public client: ClientGroup;
    
    public ai: AiGroup;
    
    public cloudStorage: CloudStorageGroup;
        

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appKey, appSID, baseUrl, debugMode);
    
        this.calendar = new CalendarApi(this.configuration);
    
        this.contact = new ContactApi(this.configuration);
    
        this.email = new EmailApi(this.configuration);
    
        this.disposableEmail = new DisposableEmailApi(this.configuration);
    
        this.emailConfig = new EmailConfigApi(this.configuration);
    
    
        this.mapi = new MapiGroup(this.configuration);
    
        this.client = new ClientGroup(this.configuration);
    
        this.ai = new AiGroup(this.configuration);
    
        this.cloudStorage = new CloudStorageGroup(this.configuration);
    
    }
}
