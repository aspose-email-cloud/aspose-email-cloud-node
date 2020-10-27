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
 * EmailApi operations.
 */
export class EmailApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

        
    /**
     * Converts Email model to specified format and returns as file.             
     * @param request Email model and format to convert.
     */
    public async asFile(request: model.EmailAsFileRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/as-file";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling asFile.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            encoding: null,
            body: ObjectSerializer.serialize(request, "EmailAsFileRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

        
    /**
     * Converts EmailDto to MapiMessageDto.             
     * @param emailDto Email model to convert
     */
    public async asMapi(emailDto: model.EmailDto): Promise< model.MapiMessageDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/as-mapi";
    
        // verify required parameter 'emailDto' is not null or undefined
        if (emailDto === null || emailDto === undefined) {
            throw new Error('Required parameter "emailDto" was null or undefined when calling asMapi.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(emailDto, "EmailDto"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "MapiMessageDto");
        return Promise.resolve(result);
    }

        
    /**
     * Converts email document to specified format and returns as file             
     * @param request contains request parameters
     */
    public async convert(request: model.EmailConvertRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/convert";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.fromFormat' is not null or undefined
        if (request.fromFormat === null || request.fromFormat === undefined) {
            throw new Error('Required parameter "request.fromFormat" was null or undefined when calling convert.');
        }
    
        // verify required parameter 'request.toFormat' is not null or undefined
        if (request.toFormat === null || request.toFormat === undefined) {
            throw new Error('Required parameter "request.toFormat" was null or undefined when calling convert.');
        }
    
        // verify required parameter 'request.file' is not null or undefined
        if (request.file === null || request.file === undefined) {
            throw new Error('Required parameter "request.file" was null or undefined when calling convert.');
        }
    
        if (request.fromFormat !== undefined) {
            queryParameters.fromFormat = ObjectSerializer.serialize(request.fromFormat, "string");
        }

        if (request.toFormat !== undefined) {
            queryParameters.toFormat = ObjectSerializer.serialize(request.toFormat, "string");
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
     * Converts email document to a model representation             
     * @param request contains request parameters
     */
    public async fromFile(request: model.EmailFromFileRequest): Promise< model.EmailDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/from-file";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.format' is not null or undefined
        if (request.format === null || request.format === undefined) {
            throw new Error('Required parameter "request.format" was null or undefined when calling fromFile.');
        }
    
        // verify required parameter 'request.file' is not null or undefined
        if (request.file === null || request.file === undefined) {
            throw new Error('Required parameter "request.file" was null or undefined when calling fromFile.');
        }
    
        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "EmailDto");
        return Promise.resolve(result);
    }

        
    /**
     * Get email document from storage.             
     * @param request contains request parameters
     */
    public async get(request: model.EmailGetRequest): Promise< model.EmailDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.format' is not null or undefined
        if (request.format === null || request.format === undefined) {
            throw new Error('Required parameter "request.format" was null or undefined when calling get.');
        }
    
        // verify required parameter 'request.fileName' is not null or undefined
        if (request.fileName === null || request.fileName === undefined) {
            throw new Error('Required parameter "request.fileName" was null or undefined when calling get.');
        }
    
        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "EmailDto");
        return Promise.resolve(result);
    }

        
    /**
     * Converts email document from storage to specified format and returns as file             
     * @param request contains request parameters
     */
    public async getAsFile(request: model.EmailGetAsFileRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/as-file";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.fileName' is not null or undefined
        if (request.fileName === null || request.fileName === undefined) {
            throw new Error('Required parameter "request.fileName" was null or undefined when calling getAsFile.');
        }
    
        // verify required parameter 'request.format' is not null or undefined
        if (request.format === null || request.format === undefined) {
            throw new Error('Required parameter "request.format" was null or undefined when calling getAsFile.');
        }
    
        if (request.fileName !== undefined) {
            queryParameters.fileName = ObjectSerializer.serialize(request.fileName, "string");
        }

        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
        }

        if (request.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(request.storage, "string");
        }

        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
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
     * Get email list from storage folder.             
     * @param request contains request parameters
     */
    public async getList(request: model.EmailGetListRequest): Promise< model.EmailStorageList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/list";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.format' is not null or undefined
        if (request.format === null || request.format === undefined) {
            throw new Error('Required parameter "request.format" was null or undefined when calling getList.');
        }
    
        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
        }

        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
        }

        if (request.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(request.storage, "string");
        }

        if (request.itemsPerPage !== undefined) {
            queryParameters.itemsPerPage = ObjectSerializer.serialize(request.itemsPerPage, "number");
        }

        if (request.pageNumber !== undefined) {
            queryParameters.pageNumber = ObjectSerializer.serialize(request.pageNumber, "number");
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
        const result =  ObjectSerializer.deserialize(response.body, "EmailStorageList");
        return Promise.resolve(result);
    }

        
    /**
     * Save email document to storage.             
     * @param request Email document create/update request.
     */
    public async save(request: model.EmailSaveRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling save.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "EmailSaveRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

}
