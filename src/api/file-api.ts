
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
 * FileApi operations.
 */
export class FileApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

        
    /**
     * Copy file
     * @param request contains request parameters
     */
    public async copyFile(request: model.CopyFileRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(request.srcPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.srcPath' is not null or undefined
        if (request.srcPath === null || request.srcPath === undefined) {
            throw new Error('Required parameter "request.srcPath" was null or undefined when calling copyFile.');
        }
    
        // verify required parameter 'request.destPath' is not null or undefined
        if (request.destPath === null || request.destPath === undefined) {
            throw new Error('Required parameter "request.destPath" was null or undefined when calling copyFile.');
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

        if (request.versionId !== undefined) {
            queryParameters.versionId = ObjectSerializer.serialize(request.versionId, "string");
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

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

        
    /**
     * Delete file
     * @param request contains request parameters
     */
    public async deleteFile(request: model.DeleteFileRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/{path}"
            .replace("{" + "path" + "}", String(request.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.path' is not null or undefined
        if (request.path === null || request.path === undefined) {
            throw new Error('Required parameter "request.path" was null or undefined when calling deleteFile.');
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

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

        
    /**
     * Download file
     * @param request contains request parameters
     */
    public async downloadFile(request: model.DownloadFileRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/{path}"
            .replace("{" + "path" + "}", String(request.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.path' is not null or undefined
        if (request.path === null || request.path === undefined) {
            throw new Error('Required parameter "request.path" was null or undefined when calling downloadFile.');
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
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

        
    /**
     * Move file
     * @param request contains request parameters
     */
    public async moveFile(request: model.MoveFileRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(request.srcPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.srcPath' is not null or undefined
        if (request.srcPath === null || request.srcPath === undefined) {
            throw new Error('Required parameter "request.srcPath" was null or undefined when calling moveFile.');
        }
    
        // verify required parameter 'request.destPath' is not null or undefined
        if (request.destPath === null || request.destPath === undefined) {
            throw new Error('Required parameter "request.destPath" was null or undefined when calling moveFile.');
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

        if (request.versionId !== undefined) {
            queryParameters.versionId = ObjectSerializer.serialize(request.versionId, "string");
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

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

        
    /**
     * Upload file
     * @param request contains request parameters
     */
    public async uploadFile(request: model.UploadFileRequest): Promise< model.FilesUploadResult > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/{path}"
            .replace("{" + "path" + "}", String(request.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.path' is not null or undefined
        if (request.path === null || request.path === undefined) {
            throw new Error('Required parameter "request.path" was null or undefined when calling uploadFile.');
        }
    
        // verify required parameter 'request.file' is not null or undefined
        if (request.file === null || request.file === undefined) {
            throw new Error('Required parameter "request.file" was null or undefined when calling uploadFile.');
        }
    
        if (request.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(request.storageName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (request.file !== undefined) {
            formParams.File = {
                value: request.file,
                options: {
                    filename: 'File'
                }
            };
        }
        useFormData = true;

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

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve(result);
    }

}
