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
 * StorageApi operations.
 */
export class StorageApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

        
    /**
     * Get disc usage
     * @param request contains request parameters
     */
    public async getDiscUsage(request: model.GetDiscUsageRequest): Promise< model.DiscUsage > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/disc";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        if (request.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(request.storageName, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve(result);
    }

        
    /**
     * Get file versions
     * @param request contains request parameters
     */
    public async getFileVersions(request: model.GetFileVersionsRequest): Promise< model.FileVersions > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/version/{path}"
            .replace("{" + "path" + "}", String(request.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.path' is not null or undefined
        if (request.path === null || request.path === undefined) {
            throw new Error('Required parameter "request.path" was null or undefined when calling getFileVersions.');
        }
    
        if (request.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(request.storageName, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve(result);
    }

        
    /**
     * Check if file or folder exists
     * @param request contains request parameters
     */
    public async objectExists(request: model.ObjectExistsRequest): Promise< model.ObjectExist > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/exist/{path}"
            .replace("{" + "path" + "}", String(request.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.path' is not null or undefined
        if (request.path === null || request.path === undefined) {
            throw new Error('Required parameter "request.path" was null or undefined when calling objectExists.');
        }
    
        if (request.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(request.storageName, "string");
        }

        if (request.versionId !== undefined) {
            queryParameters.versionId = ObjectSerializer.serialize(request.versionId, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve(result);
    }

        
    /**
     * Check if storage exists
     * @param request contains request parameters
     */
    public async exists(request: model.StorageExistsRequest): Promise< model.StorageExist > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(request.storageName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.storageName' is not null or undefined
        if (request.storageName === null || request.storageName === undefined) {
            throw new Error('Required parameter "request.storageName" was null or undefined when calling exists.');
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
        const result =  ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve(result);
    }

}

