
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

import * as rq from "request";

import { Configuration } from "../internal/configuration";
import { ObjectSerializer } from "../internal/object-serializer";
import { invokeApiMethod } from "../internal/request-helper";
import * as model from "../model";

/**
 * ClientAccountApi operations.
 */
export class ClientAccountApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

        
    /**
     * Get email client account from storage.             
     * @param request contains request parameters
     */
    public async get(request: model.ClientAccountGetRequest): Promise< model.EmailClientAccount > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/account";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.fileName' is not null or undefined
        if (request.fileName === null || request.fileName === undefined) {
            throw new Error('Required parameter "request.fileName" was null or undefined when calling get.');
        }
    
        if (request.fileName !== undefined) {
            queryParameters.fileName = ObjectSerializer.serialize(request.fileName, "string");
        }

        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
        }

        if (request.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(request.storage, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: rq.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "EmailClientAccount");
        return Promise.resolve(result);
    }

        
    /**
     * Get email client multi account file (*.multi.account). Will respond error if file extension is not \".multi.account\".             
     * @param request contains request parameters
     */
    public async getMulti(request: model.ClientAccountGetMultiRequest): Promise< model.EmailClientMultiAccount > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/account/multi";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.fileName' is not null or undefined
        if (request.fileName === null || request.fileName === undefined) {
            throw new Error('Required parameter "request.fileName" was null or undefined when calling getMulti.');
        }
    
        if (request.fileName !== undefined) {
            queryParameters.fileName = ObjectSerializer.serialize(request.fileName, "string");
        }

        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
        }

        if (request.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(request.storage, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: rq.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "EmailClientMultiAccount");
        return Promise.resolve(result);
    }

        
    /**
     * Create/update email client account file (*.account) with credentials             
     * @param request Email account information
     */
    public async save(request: model.ClientAccountSaveRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/account";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling save.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientAccountSaveRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

        
    /**
     * Create email client multi account file (*.multi.account). Will respond error if file extension is not \".multi.account\".             
     * @param request Email accounts information.
     */
    public async saveMulti(request: model.ClientAccountSaveMultiRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/account/multi";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveMulti.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientAccountSaveMultiRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

}
