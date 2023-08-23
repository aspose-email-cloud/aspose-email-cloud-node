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

import { Configuration } from "../internal/configuration";


    
import { MapiCalendarApi } from "./mapi-calendar-api";
    
import { MapiContactApi } from "./mapi-contact-api";
    
import { MapiMessageApi } from "./mapi-message-api";
    
    
/**
 * MAPI operations.
 */
export class MapiGroup {
    
    private readonly _calendar: MapiCalendarApi;
    
    private readonly _contact: MapiContactApi;
    
    private readonly _message: MapiMessageApi;
    

    
    /**
     *  MAPI calendar operations.
     */
    public get calendar(): MapiCalendarApi {
        return this._calendar;
    }
    
    /**
     *  MAPI contact operations
     */
    public get contact(): MapiContactApi {
        return this._contact;
    }
    
    /**
     *  MAPI message operations
     */
    public get message(): MapiMessageApi {
        return this._message;
    }
    


    constructor(configuration: Configuration)
    {
    
        this._calendar = new MapiCalendarApi(configuration);
    
        this._contact = new MapiContactApi(configuration);
    
        this._message = new MapiMessageApi(configuration);
    
    }
}
