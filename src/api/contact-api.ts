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

//@ts-ignore
import { Buffer } from "buffer";

import { Configuration } from "../internal/configuration";
import { ObjectSerializer } from "../internal/object-serializer";
import { invokeApiMethod } from "../internal/request-helper";
import { IRequestOptions } from "../internal/request-options";
import * as model from "../model";

/**
 * ContactApi operations.
 */
export class ContactApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * Converts contact model to specified format and returns as file             
     * @param request Contact model and format to convert
     */
    public async asFile(request: model.ContactAsFileRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/as-file";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling asFile.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            isResponseFile: true,
            body: ObjectSerializer.serialize(request, "ContactAsFileRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return result;
    }

    /**
     * Converts ContactDto to MapiContactDto.             
     * @param contactDto Contact model to convert
     */
    public async asMapi(contactDto: model.ContactDto): Promise< model.MapiContactDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/as-mapi";
    
        // verify required parameter 'contactDto' is not null or undefined
        if (contactDto === null || contactDto === undefined) {
            throw new Error('Required parameter "contactDto" was null or undefined when calling asMapi.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(contactDto, "ContactDto"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "MapiContactDto");
        return result;
    }

    /**
     * Converts contact document to specified format and returns as file             
     * @param request contains request parameters
     */
    public async convert(request: model.ContactConvertRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/convert";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.toFormat' is not null or undefined
        if (request.toFormat === null || request.toFormat === undefined) {
            throw new Error('Required parameter "request.toFormat" was null or undefined when calling convert.');
        }
    
        // verify required parameter 'request.fromFormat' is not null or undefined
        if (request.fromFormat === null || request.fromFormat === undefined) {
            throw new Error('Required parameter "request.fromFormat" was null or undefined when calling convert.');
        }
    
        // verify required parameter 'request.file' is not null or undefined
        if (request.file === null || request.file === undefined) {
            throw new Error('Required parameter "request.file" was null or undefined when calling convert.');
        }
    
        if (request.toFormat !== undefined) {
            queryParameters.toFormat = ObjectSerializer.serialize(request.toFormat, "string");
        }

        if (request.fromFormat !== undefined) {
            queryParameters.fromFormat = ObjectSerializer.serialize(request.fromFormat, "string");
        }


        if (request.file !== undefined) {
            formParams.File = {
                value: request.file,
                options: {
                    filename: 'File'
                }
            };
        }

        const requestOptions: IRequestOptions = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            isResponseFile: true,
        };

        if (Object.keys(formParams).length) {
            requestOptions.formData = formParams;
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return result;
    }

    /**
     * Converts contact document to a model representation             
     * @param request contains request parameters
     */
    public async fromFile(request: model.ContactFromFileRequest): Promise< model.ContactDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/from-file";
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


        if (request.file !== undefined) {
            formParams.File = {
                value: request.file,
                options: {
                    filename: 'File'
                }
            };
        }

        const requestOptions: IRequestOptions = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            requestOptions.formData = formParams;
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ContactDto");
        return result;
    }

    /**
     * Get contact document from storage.             
     * @param request contains request parameters
     */
    public async get(request: model.ContactGetRequest): Promise< model.ContactDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact";
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


        const requestOptions: IRequestOptions = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            requestOptions.formData = formParams;
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ContactDto");
        return result;
    }

    /**
     * Converts contact document from storage to specified format and returns as file             
     * @param request contains request parameters
     */
    public async getAsFile(request: model.ContactGetAsFileRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/as-file";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.fileName' is not null or undefined
        if (request.fileName === null || request.fileName === undefined) {
            throw new Error('Required parameter "request.fileName" was null or undefined when calling getAsFile.');
        }
    
        // verify required parameter 'request.toFormat' is not null or undefined
        if (request.toFormat === null || request.toFormat === undefined) {
            throw new Error('Required parameter "request.toFormat" was null or undefined when calling getAsFile.');
        }
    
        // verify required parameter 'request.fromFormat' is not null or undefined
        if (request.fromFormat === null || request.fromFormat === undefined) {
            throw new Error('Required parameter "request.fromFormat" was null or undefined when calling getAsFile.');
        }
    
        if (request.fileName !== undefined) {
            queryParameters.fileName = ObjectSerializer.serialize(request.fileName, "string");
        }

        if (request.toFormat !== undefined) {
            queryParameters.toFormat = ObjectSerializer.serialize(request.toFormat, "string");
        }

        if (request.fromFormat !== undefined) {
            queryParameters.fromFormat = ObjectSerializer.serialize(request.fromFormat, "string");
        }

        if (request.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(request.storage, "string");
        }

        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
        }


        const requestOptions: IRequestOptions = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            isResponseFile: true,
        };

        if (Object.keys(formParams).length) {
            requestOptions.formData = formParams;
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return result;
    }

    /**
     * Get contact list from storage folder.             
     * @param request contains request parameters
     */
    public async getList(request: model.ContactGetListRequest): Promise< model.ContactStorageList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/list";
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


        const requestOptions: IRequestOptions = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            requestOptions.formData = formParams;
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ContactStorageList");
        return result;
    }

    /**
     * Save contact to storage.             
     * @param request Create/Update contact request.
     */
    public async save(request: model.ContactSaveRequest): Promise< void > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling save.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ContactSaveRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
    }
}
