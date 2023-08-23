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
 * EmailConfigApi operations.
 */
export class EmailConfigApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * Discover email accounts by email address. Does not validate discovered accounts.             
     * @param request contains request parameters
     */
    public async discover(request: model.EmailConfigDiscoverRequest): Promise< model.EmailAccountConfigList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/config/discover";
        const queryParameters: any = {};
        const headerParams: any = {};
    
        // verify required parameter 'request.address' is not null or undefined
        if (request.address === null || request.address === undefined) {
            throw new Error('Required parameter "request.address" was null or undefined when calling discover.');
        }
    
        if (request.address !== undefined) {
            queryParameters.address = ObjectSerializer.serialize(request.address, "string");
        }

        if (request.fastProcessing !== undefined) {
            queryParameters.fastProcessing = ObjectSerializer.serialize(request.fastProcessing, "boolean");
        }


        const requestOptions: IRequestOptions = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: false,
        };


        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "EmailAccountConfigList");
        return result;
    }

    /**
     * Discover email accounts by email address. Validates discovered accounts using OAuth 2.0.             
     * @param request Discover email configuration request.
     */
    public async discoverOauth(request: model.EmailConfigDiscoverOauthRequest): Promise< model.EmailAccountConfigList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/config/discover/oauth";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling discoverOauth.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "EmailConfigDiscoverOauthRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "EmailAccountConfigList");
        return result;
    }

    /**
     * Discover email accounts by email address. Validates discovered accounts using login and password.             
     * @param request Discover email configuration request.
     */
    public async discoverPassword(request: model.EmailConfigDiscoverPasswordRequest): Promise< model.EmailAccountConfigList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/config/discover/password";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling discoverPassword.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "EmailConfigDiscoverPasswordRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "EmailAccountConfigList");
        return result;
    }
}
