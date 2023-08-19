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
 * ClientThreadApi operations.
 */
export class ClientThreadApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * Delete thread by id. All messages from thread will also be deleted.             
     * @param request Delete email thread request.
     */
    public async delete(request: model.ClientThreadDeleteRequest): Promise< void > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/thread";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling delete.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "DELETE",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientThreadDeleteRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
    }

    /**
     * Get message threads from folder. All messages are partly fetched (without email body and some other fields).             
     * @param request contains request parameters
     */
    public async getList(request: model.ClientThreadGetListRequest): Promise< model.EmailThreadList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/thread/list";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.folder' is not null or undefined
        if (request.folder === null || request.folder === undefined) {
            throw new Error('Required parameter "request.folder" was null or undefined when calling getList.');
        }
    
        // verify required parameter 'request.account' is not null or undefined
        if (request.account === null || request.account === undefined) {
            throw new Error('Required parameter "request.account" was null or undefined when calling getList.');
        }
    
        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
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

        if (request.updateFolderCache !== undefined) {
            queryParameters.updateFolderCache = ObjectSerializer.serialize(request.updateFolderCache, "boolean");
        }

        if (request.messagesCacheLimit !== undefined) {
            queryParameters.messagesCacheLimit = ObjectSerializer.serialize(request.messagesCacheLimit, "number");
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
        const result =  ObjectSerializer.deserialize(response.body, "EmailThreadList");
        return result;
    }

    /**
     * Get messages from thread by id. All messages are fully fetched. For accounts with CacheFile only cached messages will be returned.             
     * @param request contains request parameters
     */
    public async getMessages(request: model.ClientThreadGetMessagesRequest): Promise< model.EmailList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/thread/messages";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.threadId' is not null or undefined
        if (request.threadId === null || request.threadId === undefined) {
            throw new Error('Required parameter "request.threadId" was null or undefined when calling getMessages.');
        }
    
        // verify required parameter 'request.account' is not null or undefined
        if (request.account === null || request.account === undefined) {
            throw new Error('Required parameter "request.account" was null or undefined when calling getMessages.');
        }
    
        if (request.threadId !== undefined) {
            queryParameters.threadId = ObjectSerializer.serialize(request.threadId, "string");
        }

        if (request.account !== undefined) {
            queryParameters.account = ObjectSerializer.serialize(request.account, "string");
        }

        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
        }

        if (request.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(request.storage, "string");
        }

        if (request.accountStorageFolder !== undefined) {
            queryParameters.accountStorageFolder = ObjectSerializer.serialize(request.accountStorageFolder, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "EmailList");
        return result;
    }

    /**
     * Move thread to another folder.             
     * @param request Move thread request.
     */
    public async move(request: model.ClientThreadMoveRequest): Promise< void > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/thread/move";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling move.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientThreadMoveRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
    }

    /**
     * Mark all messages in thread as read or unread.             
     * @param request Email account specifier and IsRead flag.
     */
    public async setIsRead(request: model.ClientThreadSetIsReadRequest): Promise< void > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/thread/set-is-read";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling setIsRead.');
        }
    

        const requestOptions: IRequestOptions = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientThreadSetIsReadRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
    }
}
