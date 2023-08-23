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

//@ts-ignore
import { Buffer } from "buffer";
//@ts-ignore
import {GenericFormData, toFormData} from "axios";

import { Configuration } from "../internal/configuration";
import { ObjectSerializer } from "../internal/object-serializer";
import { invokeApiMethod } from "../internal/request-helper";
import { IRequestOptions } from "../internal/request-options";
import * as model from "../model";

/**
 * MapiMessageApi operations.
 */
export class MapiMessageApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * Converts MAPI message model to EmailDto model             
     * @param mapiMessage MAPI message model to convert
     */
    public async asEmailDto(mapiMessage: model.MapiMessageDto): Promise< model.EmailDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/MapiMessage/as-email-dto";
    
        // verify required parameter 'mapiMessage' is not null or undefined
        if (mapiMessage === null || mapiMessage === undefined) {
            throw new Error('Required parameter "mapiMessage" was null or undefined when calling asEmailDto.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(mapiMessage, "MapiMessageDto"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "EmailDto");
        return result;
    }

    /**
     * Converts MAPI message model to specified format and returns as file.             
     * @param request MAPI message model to convert.
     */
    public async asFile(request: model.MapiMessageAsFileRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/MapiMessage/as-file";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling asFile.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            isResponseFile: true,
            body: ObjectSerializer.serialize(request, "MapiMessageAsFileRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return result;
    }

    /**
     * Converts email file to a MAPI model representation             
     * @param request contains request parameters
     */
    public async fromFile(request: model.MapiMessageFromFileRequest): Promise< model.MapiMessageDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/MapiMessage/from-file";
        const queryParameters: any = {};
        const headerParams: any = {};
    
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


        const requestOptions: IRequestOptions = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: false,
        };

        const formParams: GenericFormData = toFormData({});
        if (request.file !== undefined) {
            formParams.append('File', request.file, {filename: 'File'});
        }


        requestOptions.formData = formParams;

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "MapiMessageDto");
        return result;
    }

    /**
     * Get MAPI message document.             
     * @param request contains request parameters
     */
    public async get(request: model.MapiMessageGetRequest): Promise< model.MapiMessageDto > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/MapiMessage";
        const queryParameters: any = {};
        const headerParams: any = {};
    
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
            json: false,
        };


        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "MapiMessageDto");
        return result;
    }

    /**
     * Save MAPI message to storage.             
     * @param request Message create/update request.
     */
    public async save(request: model.MapiMessageSaveRequest): Promise< void > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/MapiMessage";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling save.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "MapiMessageSaveRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
    }
}
