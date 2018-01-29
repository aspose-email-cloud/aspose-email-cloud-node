/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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

import http = require("http");
import request = require("request");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

/**
 * Library for communicating with the Aspose.Email Cloud API
 */
export class EmailApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Get document
     * @param requestObj contains request parameters
     */
    public async emailGetDocument(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling emailGetDocument.');
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
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
        return Promise.resolve({body: result, response});
    }

    /**
     * Get email attachment
     * @param requestObj contains request parameters
     */
    public async emailGetEmailAttachment(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{name}/attachments/{attachName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "attachName" + "}", String(requestObj.attachName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling emailGetEmailAttachment.');
        }

        // verify required parameter 'requestObj.attachName' is not null or undefined
        if (requestObj.attachName === null || requestObj.attachName === undefined) {
            throw new Error('Required parameter "requestObj.attachName" was null or undefined when calling emailGetEmailAttachment.');
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
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
        return Promise.resolve({body: result, response});
    }

    /**
     * Get email property
     * @param requestObj contains request parameters
     */
    public async emailGetEmailProperty(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{name}/properties/{propertyName}"
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName))
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling emailGetEmailProperty.');
        }

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling emailGetEmailProperty.');
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
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
        return Promise.resolve({body: result, response});
    }

    /**
     * Post add email attachment
     * @param requestObj contains request parameters
     */
    public async emailPostAddEmailAttachment(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.EmailDocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{name}/attachments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling emailPostAddEmailAttachment.');
        }

        // verify required parameter 'requestObj.attachName' is not null or undefined
        if (requestObj.attachName === null || requestObj.attachName === undefined) {
            throw new Error('Required parameter "requestObj.attachName" was null or undefined when calling emailPostAddEmailAttachment.');
        }

        if (requestObj.attachName !== undefined) {
            queryParameters.attachName = ObjectSerializer.serialize(requestObj.attachName, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
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
        const result =  ObjectSerializer.deserialize(response.body, "EmailDocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Put creatw new email
     * @param requestObj contains request parameters
     */
    public async emailPutCreateNewEmail(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.EmailDocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling emailPutCreateNewEmail.');
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.email, "EmailDocument"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "EmailDocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Put set email property
     * @param requestObj contains request parameters
     */
    public async emailPutSetEmailProperty(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.EmailPropertyResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{name}/properties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling emailPutSetEmailProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling emailPutSetEmailProperty.');
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.property, "EmailProperty"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "EmailPropertyResponse");
        return Promise.resolve({body: result, response});
    }

}
/**
 * Library for communicating with the Aspose.Email Cloud API
 */
export class EmailClientApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Append message
     * @param requestObj contains request parameters
     */
    public async emailClientAppendMessage(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/Append";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.mailPath !== undefined) {
            queryParameters.mailPath = ObjectSerializer.serialize(requestObj.mailPath, "string");
        }

        if (requestObj.markAsSent !== undefined) {
            queryParameters.markAsSent = ObjectSerializer.serialize(requestObj.markAsSent, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
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
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Append mime message
     * @param requestObj contains request parameters
     */
    public async emailClientAppendMimeMessage(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/AppendMime";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.markAsSent !== undefined) {
            queryParameters.markAsSent = ObjectSerializer.serialize(requestObj.markAsSent, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.base64MimeMessage, "string"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Create folder
     * @param requestObj contains request parameters
     */
    public async emailClientCreateFolder(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/CreateFolder";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.parentFolder !== undefined) {
            queryParameters.parentFolder = ObjectSerializer.serialize(requestObj.parentFolder, "string");
        }

        if (requestObj.name !== undefined) {
            queryParameters.name = ObjectSerializer.serialize(requestObj.name, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
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
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async emailClientDeleteFolder(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/DeleteFolder";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.deletePermanently !== undefined) {
            queryParameters.deletePermanently = ObjectSerializer.serialize(requestObj.deletePermanently, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
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
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete message
     * @param requestObj contains request parameters
     */
    public async emailClientDeleteMessage(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/DeleteMessage";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.messageId !== undefined) {
            queryParameters.messageId = ObjectSerializer.serialize(requestObj.messageId, "string");
        }

        if (requestObj.deletePermanently !== undefined) {
            queryParameters.deletePermanently = ObjectSerializer.serialize(requestObj.deletePermanently, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
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
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Fetch message
     * @param requestObj contains request parameters
     */
    public async emailClientFetchMessage(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.MimeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/Fetch";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.messageId !== undefined) {
            queryParameters.messageId = ObjectSerializer.serialize(requestObj.messageId, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
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
        const result =  ObjectSerializer.deserialize(response.body, "MimeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * List folders
     * @param requestObj contains request parameters
     */
    public async emailClientListFolders(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.ListFoldersResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/ListFolders";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.parentFolder !== undefined) {
            queryParameters.parentFolder = ObjectSerializer.serialize(requestObj.parentFolder, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
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
        const result =  ObjectSerializer.deserialize(response.body, "ListFoldersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * List messages
     * @param requestObj contains request parameters
     */
    public async emailClientListMessages(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.ListResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/ListMessages";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.recursive !== undefined) {
            queryParameters.recursive = ObjectSerializer.serialize(requestObj.recursive, "boolean");
        }

        if (requestObj.queryString !== undefined) {
            queryParameters.queryString = ObjectSerializer.serialize(requestObj.queryString, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
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
        const result =  ObjectSerializer.deserialize(response.body, "ListResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Save mail account
     * @param requestObj contains request parameters
     */
    public async emailClientSaveMailAccount(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/SaveMailAccount";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.storage' is not null or undefined
        if (requestObj.storage === null || requestObj.storage === undefined) {
            throw new Error('Required parameter "requestObj.storage" was null or undefined when calling emailClientSaveMailAccount.');
        }

        // verify required parameter 'requestObj.accountName' is not null or undefined
        if (requestObj.accountName === null || requestObj.accountName === undefined) {
            throw new Error('Required parameter "requestObj.accountName" was null or undefined when calling emailClientSaveMailAccount.');
        }

        // verify required parameter 'requestObj.host' is not null or undefined
        if (requestObj.host === null || requestObj.host === undefined) {
            throw new Error('Required parameter "requestObj.host" was null or undefined when calling emailClientSaveMailAccount.');
        }

        // verify required parameter 'requestObj.port' is not null or undefined
        if (requestObj.port === null || requestObj.port === undefined) {
            throw new Error('Required parameter "requestObj.port" was null or undefined when calling emailClientSaveMailAccount.');
        }

        // verify required parameter 'requestObj.login' is not null or undefined
        if (requestObj.login === null || requestObj.login === undefined) {
            throw new Error('Required parameter "requestObj.login" was null or undefined when calling emailClientSaveMailAccount.');
        }

        // verify required parameter 'requestObj.password' is not null or undefined
        if (requestObj.password === null || requestObj.password === undefined) {
            throw new Error('Required parameter "requestObj.password" was null or undefined when calling emailClientSaveMailAccount.');
        }

        // verify required parameter 'requestObj.securityOptions' is not null or undefined
        if (requestObj.securityOptions === null || requestObj.securityOptions === undefined) {
            throw new Error('Required parameter "requestObj.securityOptions" was null or undefined when calling emailClientSaveMailAccount.');
        }

        // verify required parameter 'requestObj.protocolType' is not null or undefined
        if (requestObj.protocolType === null || requestObj.protocolType === undefined) {
            throw new Error('Required parameter "requestObj.protocolType" was null or undefined when calling emailClientSaveMailAccount.');
        }

        // verify required parameter 'requestObj.description' is not null or undefined
        if (requestObj.description === null || requestObj.description === undefined) {
            throw new Error('Required parameter "requestObj.description" was null or undefined when calling emailClientSaveMailAccount.');
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName !== undefined) {
            queryParameters.accountName = ObjectSerializer.serialize(requestObj.accountName, "string");
        }

        if (requestObj.host !== undefined) {
            queryParameters.host = ObjectSerializer.serialize(requestObj.host, "string");
        }

        if (requestObj.port !== undefined) {
            queryParameters.port = ObjectSerializer.serialize(requestObj.port, "number");
        }

        if (requestObj.login !== undefined) {
            queryParameters.login = ObjectSerializer.serialize(requestObj.login, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.securityOptions !== undefined) {
            queryParameters.securityOptions = ObjectSerializer.serialize(requestObj.securityOptions, "number");
        }

        if (requestObj.protocolType !== undefined) {
            queryParameters.protocolType = ObjectSerializer.serialize(requestObj.protocolType, "number");
        }

        if (requestObj.description !== undefined) {
            queryParameters.description = ObjectSerializer.serialize(requestObj.description, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
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
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Save mail oauth account
     * @param requestObj contains request parameters
     */
    public async emailClientSaveMailOAuthAccount(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/SaveMailOAuthAccount";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.storage' is not null or undefined
        if (requestObj.storage === null || requestObj.storage === undefined) {
            throw new Error('Required parameter "requestObj.storage" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.accountName' is not null or undefined
        if (requestObj.accountName === null || requestObj.accountName === undefined) {
            throw new Error('Required parameter "requestObj.accountName" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.host' is not null or undefined
        if (requestObj.host === null || requestObj.host === undefined) {
            throw new Error('Required parameter "requestObj.host" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.port' is not null or undefined
        if (requestObj.port === null || requestObj.port === undefined) {
            throw new Error('Required parameter "requestObj.port" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.login' is not null or undefined
        if (requestObj.login === null || requestObj.login === undefined) {
            throw new Error('Required parameter "requestObj.login" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.clientId' is not null or undefined
        if (requestObj.clientId === null || requestObj.clientId === undefined) {
            throw new Error('Required parameter "requestObj.clientId" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.clientSecret' is not null or undefined
        if (requestObj.clientSecret === null || requestObj.clientSecret === undefined) {
            throw new Error('Required parameter "requestObj.clientSecret" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.refreshToken' is not null or undefined
        if (requestObj.refreshToken === null || requestObj.refreshToken === undefined) {
            throw new Error('Required parameter "requestObj.refreshToken" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.securityOptions' is not null or undefined
        if (requestObj.securityOptions === null || requestObj.securityOptions === undefined) {
            throw new Error('Required parameter "requestObj.securityOptions" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.protocolType' is not null or undefined
        if (requestObj.protocolType === null || requestObj.protocolType === undefined) {
            throw new Error('Required parameter "requestObj.protocolType" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        // verify required parameter 'requestObj.description' is not null or undefined
        if (requestObj.description === null || requestObj.description === undefined) {
            throw new Error('Required parameter "requestObj.description" was null or undefined when calling emailClientSaveMailOAuthAccount.');
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName !== undefined) {
            queryParameters.accountName = ObjectSerializer.serialize(requestObj.accountName, "string");
        }

        if (requestObj.host !== undefined) {
            queryParameters.host = ObjectSerializer.serialize(requestObj.host, "string");
        }

        if (requestObj.port !== undefined) {
            queryParameters.port = ObjectSerializer.serialize(requestObj.port, "number");
        }

        if (requestObj.login !== undefined) {
            queryParameters.login = ObjectSerializer.serialize(requestObj.login, "string");
        }

        if (requestObj.clientId !== undefined) {
            queryParameters.clientId = ObjectSerializer.serialize(requestObj.clientId, "string");
        }

        if (requestObj.clientSecret !== undefined) {
            queryParameters.clientSecret = ObjectSerializer.serialize(requestObj.clientSecret, "string");
        }

        if (requestObj.refreshToken !== undefined) {
            queryParameters.refreshToken = ObjectSerializer.serialize(requestObj.refreshToken, "string");
        }

        if (requestObj.securityOptions !== undefined) {
            queryParameters.securityOptions = ObjectSerializer.serialize(requestObj.securityOptions, "number");
        }

        if (requestObj.protocolType !== undefined) {
            queryParameters.protocolType = ObjectSerializer.serialize(requestObj.protocolType, "number");
        }

        if (requestObj.description !== undefined) {
            queryParameters.description = ObjectSerializer.serialize(requestObj.description, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
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
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Send
     * @param requestObj contains request parameters
     */
    public async emailClientSend(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/Send";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.mailPath !== undefined) {
            queryParameters.mailPath = ObjectSerializer.serialize(requestObj.mailPath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
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
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Send Mime
     * @param requestObj contains request parameters
     */
    public async emailClientSendMime(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/SendMime";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.base64MimeMessage, "string"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set read flag
     * @param requestObj contains request parameters
     */
    public async emailClientSetReadFlag(requestObj: model.Request): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/SetReadFlag";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.accountName1 !== undefined) {
            queryParameters.accountName1 = ObjectSerializer.serialize(requestObj.accountName1, "string");
        }

        if (requestObj.accountName2 !== undefined) {
            queryParameters.accountName2 = ObjectSerializer.serialize(requestObj.accountName2, "string");
        }

        if (requestObj.messageId !== undefined) {
            queryParameters.messageId = ObjectSerializer.serialize(requestObj.messageId, "string");
        }

        if (requestObj.isRead !== undefined) {
            queryParameters.isRead = ObjectSerializer.serialize(requestObj.isRead, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
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
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

}
