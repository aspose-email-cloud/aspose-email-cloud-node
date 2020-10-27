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
 * FolderApi operations.
 */
export class FolderApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * Copy folder
     * @param request contains request parameters
     */
    public async copyFolder(request: model.CopyFolderRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(request.srcPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.srcPath' is not null or undefined
        if (request.srcPath === null || request.srcPath === undefined) {
            throw new Error('Required parameter "request.srcPath" was null or undefined when calling copyFolder.');
        }
    
        // verify required parameter 'request.destPath' is not null or undefined
        if (request.destPath === null || request.destPath === undefined) {
            throw new Error('Required parameter "request.destPath" was null or undefined when calling copyFolder.');
        }
    
        if (request.destPath !== undefined) {
            queryParameters.destPath = ObjectSerializer.serialize(request.destPath, "string");
        }

        if (request.srcStorageName !== undefined) {
            queryParameters.srcStorageName = ObjectSerializer.serialize(request.srcStorageName, "string");
        }

        if (request.destStorageName !== undefined) {
            queryParameters.destStorageName = ObjectSerializer.serialize(request.destStorageName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: rq.Options = {
            method: "PUT",
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

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

    /**
     * Create the folder
     * @param request contains request parameters
     */
    public async createFolder(request: model.CreateFolderRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/{path}"
            .replace("{" + "path" + "}", String(request.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.path' is not null or undefined
        if (request.path === null || request.path === undefined) {
            throw new Error('Required parameter "request.path" was null or undefined when calling createFolder.');
        }
    
        if (request.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(request.storageName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: rq.Options = {
            method: "PUT",
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

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

    /**
     * Delete folder
     * @param request contains request parameters
     */
    public async deleteFolder(request: model.DeleteFolderRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/{path}"
            .replace("{" + "path" + "}", String(request.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.path' is not null or undefined
        if (request.path === null || request.path === undefined) {
            throw new Error('Required parameter "request.path" was null or undefined when calling deleteFolder.');
        }
    
        if (request.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(request.storageName, "string");
        }

        if (request.recursive !== undefined) {
            queryParameters.recursive = ObjectSerializer.serialize(request.recursive, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: rq.Options = {
            method: "DELETE",
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

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

    /**
     * Get all files and folders within a folder
     * @param request contains request parameters
     */
    public async getFilesList(request: model.GetFilesListRequest): Promise< model.FilesList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/{path}"
            .replace("{" + "path" + "}", String(request.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.path' is not null or undefined
        if (request.path === null || request.path === undefined) {
            throw new Error('Required parameter "request.path" was null or undefined when calling getFilesList.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve(result);
    }

    /**
     * Move folder
     * @param request contains request parameters
     */
    public async moveFolder(request: model.MoveFolderRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(request.srcPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.srcPath' is not null or undefined
        if (request.srcPath === null || request.srcPath === undefined) {
            throw new Error('Required parameter "request.srcPath" was null or undefined when calling moveFolder.');
        }
    
        // verify required parameter 'request.destPath' is not null or undefined
        if (request.destPath === null || request.destPath === undefined) {
            throw new Error('Required parameter "request.destPath" was null or undefined when calling moveFolder.');
        }
    
        if (request.destPath !== undefined) {
            queryParameters.destPath = ObjectSerializer.serialize(request.destPath, "string");
        }

        if (request.srcStorageName !== undefined) {
            queryParameters.srcStorageName = ObjectSerializer.serialize(request.srcStorageName, "string");
        }

        if (request.destStorageName !== undefined) {
            queryParameters.destStorageName = ObjectSerializer.serialize(request.destStorageName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: rq.Options = {
            method: "PUT",
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

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }
}
