/*
* MIT License

* Copyright (c) 2018-2023 Aspose Pty Ltd

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


    
import { ClientAccountApi } from "./client-account-api";
    
import { ClientFolderApi } from "./client-folder-api";
    
import { ClientMessageApi } from "./client-message-api";
    
import { ClientThreadApi } from "./client-thread-api";
    
    
/**
 * Builtin Email client operations.
 */
export class ClientGroup {
    
    private readonly _account: ClientAccountApi;
    
    private readonly _folder: ClientFolderApi;
    
    private readonly _message: ClientMessageApi;
    
    private readonly _thread: ClientThreadApi;
    

    
    /**
     *  Email server account for built-in client operations.
     */
    public get account(): ClientAccountApi {
        return this._account;
    }
    
    /**
     *  Email client folder operations.
     */
    public get folder(): ClientFolderApi {
        return this._folder;
    }
    
    /**
     *  Email client message operations.
     */
    public get message(): ClientMessageApi {
        return this._message;
    }
    
    /**
     *  Email client thread operations.
     */
    public get thread(): ClientThreadApi {
        return this._thread;
    }
    


    constructor(configuration: Configuration)
    {
    
        this._account = new ClientAccountApi(configuration);
    
        this._folder = new ClientFolderApi(configuration);
    
        this._message = new ClientMessageApi(configuration);
    
        this._thread = new ClientThreadApi(configuration);
    
    }
}
