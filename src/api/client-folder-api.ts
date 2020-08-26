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
 * ClientFolderApi operations.
 */
export class ClientFolderApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

        
    /**
     * Create new folder in email account             
     * @param request Create folder request
     */
    public async create(request: model.ClientFolderCreateRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/folder";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling create.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientFolderCreateRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

        
    /**
     * Delete a folder in email account             
     * @param request Delete folder request
     */
    public async delete(request: model.ClientFolderDeleteRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/folder";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling delete.');
        }
    

        const requestOptions: rq.Options = {
            method: "DELETE",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientFolderDeleteRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

        
    /**
     * Get folders list in email account             
     * @param request contains request parameters
     */
    public async getList(request: model.ClientFolderGetListRequest): Promise< model.MailServerFolderList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/folder/list";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.account' is not null or undefined
        if (request.account === null || request.account === undefined) {
            throw new Error('Required parameter "request.account" was null or undefined when calling getList.');
        }
    
        if (request.account !== undefined) {
            queryParameters.account = ObjectSerializer.serialize(request.account, "string");
        }

        if (request.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(request.storage, "string");
        }

        if (request.accountStorageFolder !== undefined) {
            queryParameters.accountStorageFolder = ObjectSerializer.serialize(request.accountStorageFolder, "string");
        }

        if (request.parentFolder !== undefined) {
            queryParameters.parentFolder = ObjectSerializer.serialize(request.parentFolder, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "MailServerFolderList");
        return Promise.resolve(result);
    }

}
