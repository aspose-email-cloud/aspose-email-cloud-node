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
 * AiBcrApi operations.
 */
export class AiBcrApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * Parse images to vCard document models             
     * @param request contains request parameters
     */
    public async parse(request: model.AiBcrParseRequest): Promise< model.ContactList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiBcr/parse";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.file' is not null or undefined
        if (request.file === null || request.file === undefined) {
            throw new Error('Required parameter "request.file" was null or undefined when calling parse.');
        }
    
        if (request.countries !== undefined) {
            queryParameters.countries = ObjectSerializer.serialize(request.countries, "string");
        }

        if (request.languages !== undefined) {
            queryParameters.languages = ObjectSerializer.serialize(request.languages, "string");
        }

        if (request.isSingle !== undefined) {
            queryParameters.isSingle = ObjectSerializer.serialize(request.isSingle, "boolean");
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
        const result =  ObjectSerializer.deserialize(response.body, "ContactList");
        return result;
    }

    /**
     * Parse images from storage to vCard files             
     * @param request Request with images located on storage
     */
    public async parseStorage(request: model.AiBcrParseStorageRequest): Promise< model.StorageFileLocationList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiBcr/parse-storage";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling parseStorage.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "AiBcrParseStorageRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StorageFileLocationList");
        return result;
    }
}
