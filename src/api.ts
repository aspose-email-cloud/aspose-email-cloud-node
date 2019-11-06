
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

import request = require("request");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/object-serializer";
import { invokeApiMethod } from "./internal/request-helper";
import * as model from "./model/model";
import * as requestModels from "./model/requests/requests";

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
     * Adds an attachment to iCalendar file
     * @param requestObj contains request parameters
     */
    public async addCalendarAttachment(requestObj: requestModels.AddCalendarAttachmentRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Calendar/{name}/attachments/{attachment}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "attachment" + "}", String(requestObj.attachment));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling addCalendarAttachment.');
        }

        // verify required parameter 'requestObj.attachment' is not null or undefined
        if (requestObj.attachment === null || requestObj.attachment === undefined) {
            throw new Error('Required parameter "requestObj.attachment" was null or undefined when calling addCalendarAttachment.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling addCalendarAttachment.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "AddAttachmentRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Add attachment to contact document
     * @param requestObj contains request parameters
     */
    public async addContactAttachment(requestObj: requestModels.AddContactAttachmentRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/{format}/{name}/attachments/{attachment}"
            .replace("{" + "format" + "}", String(requestObj.format))
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "attachment" + "}", String(requestObj.attachment));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling addContactAttachment.');
        }

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling addContactAttachment.');
        }

        // verify required parameter 'requestObj.attachment' is not null or undefined
        if (requestObj.attachment === null || requestObj.attachment === undefined) {
            throw new Error('Required parameter "requestObj.attachment" was null or undefined when calling addContactAttachment.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling addContactAttachment.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "AddAttachmentRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Adds an attachment to Email document
     * @param requestObj contains request parameters
     */
    public async addEmailAttachment(requestObj: requestModels.AddEmailAttachmentRequest): Promise<{response: request.RequestResponse, body: model.EmailDocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{fileName}/attachments/{attachmentName}"
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName))
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling addEmailAttachment.');
        }

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling addEmailAttachment.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling addEmailAttachment.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "AddAttachmentRequest"),
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
     * Add attachment to document
     * @param requestObj contains request parameters
     */
    public async addMapiAttachment(requestObj: requestModels.AddMapiAttachmentRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi/{name}/attachments/{attachment}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "attachment" + "}", String(requestObj.attachment));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling addMapiAttachment.');
        }

        // verify required parameter 'requestObj.attachment' is not null or undefined
        if (requestObj.attachment === null || requestObj.attachment === undefined) {
            throw new Error('Required parameter "requestObj.attachment" was null or undefined when calling addMapiAttachment.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling addMapiAttachment.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "AddAttachmentRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Adds an email from *.eml file to specified folder in email account
     * @param requestObj contains request parameters
     */
    public async appendEmailMessage(requestObj: requestModels.AppendEmailMessageRequest): Promise<{response: request.RequestResponse, body: model.EmailPropertyResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/Append";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling appendEmailMessage.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "AppendEmailBaseRequest"),
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

    /**
     * Adds an email from MIME to specified folder in email account
     * @param requestObj contains request parameters
     */
    public async appendMimeMessage(requestObj: requestModels.AppendMimeMessageRequest): Promise<{response: request.RequestResponse, body: model.ValueResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/AppendMime";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling appendMimeMessage.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "AppendEmailMimeBaseRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ValueResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: requestModels.CopyFileRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }

        if (requestObj.destPath !== undefined) {
            queryParameters.destPath = ObjectSerializer.serialize(requestObj.destPath, "string");
        }

        if (requestObj.srcStorageName !== undefined) {
            queryParameters.srcStorageName = ObjectSerializer.serialize(requestObj.srcStorageName, "string");
        }

        if (requestObj.destStorageName !== undefined) {
            queryParameters.destStorageName = ObjectSerializer.serialize(requestObj.destStorageName, "string");
        }

        if (requestObj.versionId !== undefined) {
            queryParameters.versionId = ObjectSerializer.serialize(requestObj.versionId, "string");
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
        return Promise.resolve({body: null, response});
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: requestModels.CopyFolderRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }

        if (requestObj.destPath !== undefined) {
            queryParameters.destPath = ObjectSerializer.serialize(requestObj.destPath, "string");
        }

        if (requestObj.srcStorageName !== undefined) {
            queryParameters.srcStorageName = ObjectSerializer.serialize(requestObj.srcStorageName, "string");
        }

        if (requestObj.destStorageName !== undefined) {
            queryParameters.destStorageName = ObjectSerializer.serialize(requestObj.destStorageName, "string");
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
        return Promise.resolve({body: null, response});
    }

    /**
     * Create calendar file
     * @param requestObj contains request parameters
     */
    public async createCalendar(requestObj: requestModels.CreateCalendarRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Calendar/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling createCalendar.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling createCalendar.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "HierarchicalObjectRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Create contact document
     * @param requestObj contains request parameters
     */
    public async createContact(requestObj: requestModels.CreateContactRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/{format}/{name}"
            .replace("{" + "format" + "}", String(requestObj.format))
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling createContact.');
        }

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling createContact.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling createContact.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "HierarchicalObjectRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Create an email document
     * @param requestObj contains request parameters
     */
    public async createEmail(requestObj: requestModels.CreateEmailRequest): Promise<{response: request.RequestResponse, body: model.EmailDocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{fileName}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling createEmail.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling createEmail.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "CreateEmailRequest"),
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
     * Create new folder in email account
     * @param requestObj contains request parameters
     */
    public async createEmailFolder(requestObj: requestModels.CreateEmailFolderRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/CreateFolder";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling createEmailFolder.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "CreateFolderBaseRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: requestModels.CreateFolderRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
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
        return Promise.resolve({body: null, response});
    }

    /**
     * Create new document
     * @param requestObj contains request parameters
     */
    public async createMapi(requestObj: requestModels.CreateMapiRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling createMapi.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling createMapi.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "HierarchicalObjectRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Deletes indexed property by index and name. To delete Reminder attachment, use path ReminderAttachment/{ReminderIndex}/{AttachmentIndex}
     * @param requestObj contains request parameters
     */
    public async deleteCalendarProperty(requestObj: requestModels.DeleteCalendarPropertyRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Calendar/{name}/properties/{memberName}/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "memberName" + "}", String(requestObj.memberName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteCalendarProperty.');
        }

        // verify required parameter 'requestObj.memberName' is not null or undefined
        if (requestObj.memberName === null || requestObj.memberName === undefined) {
            throw new Error('Required parameter "requestObj.memberName" was null or undefined when calling deleteCalendarProperty.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteCalendarProperty.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling deleteCalendarProperty.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "StorageFolderLocation"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Delete property from indexed property list
     * @param requestObj contains request parameters
     */
    public async deleteContactProperty(requestObj: requestModels.DeleteContactPropertyRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/{format}/{name}/properties/{memberName}/{index}"
            .replace("{" + "format" + "}", String(requestObj.format))
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "memberName" + "}", String(requestObj.memberName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling deleteContactProperty.');
        }

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteContactProperty.');
        }

        // verify required parameter 'requestObj.memberName' is not null or undefined
        if (requestObj.memberName === null || requestObj.memberName === undefined) {
            throw new Error('Required parameter "requestObj.memberName" was null or undefined when calling deleteContactProperty.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteContactProperty.');
        }

        // verify required parameter 'requestObj.folder' is not null or undefined
        if (requestObj.folder === null || requestObj.folder === undefined) {
            throw new Error('Required parameter "requestObj.folder" was null or undefined when calling deleteContactProperty.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.folder, "StorageFolderLocation"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Delete a folder in email account
     * @param requestObj contains request parameters
     */
    public async deleteEmailFolder(requestObj: requestModels.DeleteEmailFolderRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/DeleteFolder";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling deleteEmailFolder.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "DeleteFolderBaseRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Delete message from email account by id
     * @param requestObj contains request parameters
     */
    public async deleteEmailMessage(requestObj: requestModels.DeleteEmailMessageRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/DeleteMessage";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling deleteEmailMessage.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "DeleteMessageBaseRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: requestModels.DeleteFileRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
        }

        if (requestObj.versionId !== undefined) {
            queryParameters.versionId = ObjectSerializer.serialize(requestObj.versionId, "string");
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
        return Promise.resolve({body: null, response});
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: requestModels.DeleteFolderRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
        }

        if (requestObj.recursive !== undefined) {
            queryParameters.recursive = ObjectSerializer.serialize(requestObj.recursive, "boolean");
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
        return Promise.resolve({body: null, response});
    }

    /**
     * Remove attachment from document
     * @param requestObj contains request parameters
     */
    public async deleteMapiAttachment(requestObj: requestModels.DeleteMapiAttachmentRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi/{name}/attachments/{attachment}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "attachment" + "}", String(requestObj.attachment));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteMapiAttachment.');
        }

        // verify required parameter 'requestObj.attachment' is not null or undefined
        if (requestObj.attachment === null || requestObj.attachment === undefined) {
            throw new Error('Required parameter "requestObj.attachment" was null or undefined when calling deleteMapiAttachment.');
        }

        // verify required parameter 'requestObj.storage' is not null or undefined
        if (requestObj.storage === null || requestObj.storage === undefined) {
            throw new Error('Required parameter "requestObj.storage" was null or undefined when calling deleteMapiAttachment.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.storage, "StorageFolderLocation"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Delete document properties
     * @param requestObj contains request parameters
     */
    public async deleteMapiProperties(requestObj: requestModels.DeleteMapiPropertiesRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi/{name}/properties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteMapiProperties.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling deleteMapiProperties.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "HierarchicalObjectRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: requestModels.DownloadFileRequest): Promise<{response: request.RequestResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
        }

        if (requestObj.versionId !== undefined) {
            queryParameters.versionId = ObjectSerializer.serialize(requestObj.versionId, "string");
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
     * Fetch message mime from email account
     * @param requestObj contains request parameters
     */
    public async fetchEmailMessage(requestObj: requestModels.FetchEmailMessageRequest): Promise<{response: request.RequestResponse, body: model.MimeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/Fetch";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.messageId' is not null or undefined
        if (requestObj.messageId === null || requestObj.messageId === undefined) {
            throw new Error('Required parameter "requestObj.messageId" was null or undefined when calling fetchEmailMessage.');
        }

        // verify required parameter 'requestObj.firstAccount' is not null or undefined
        if (requestObj.firstAccount === null || requestObj.firstAccount === undefined) {
            throw new Error('Required parameter "requestObj.firstAccount" was null or undefined when calling fetchEmailMessage.');
        }

        if (requestObj.messageId !== undefined) {
            queryParameters.messageId = ObjectSerializer.serialize(requestObj.messageId, "string");
        }

        if (requestObj.firstAccount !== undefined) {
            queryParameters.firstAccount = ObjectSerializer.serialize(requestObj.firstAccount, "string");
        }

        if (requestObj.secondAccount !== undefined) {
            queryParameters.secondAccount = ObjectSerializer.serialize(requestObj.secondAccount, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.storageFolder !== undefined) {
            queryParameters.storageFolder = ObjectSerializer.serialize(requestObj.storageFolder, "string");
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
     * Get calendar file properties
     * @param requestObj contains request parameters
     */
    public async getCalendar(requestObj: requestModels.GetCalendarRequest): Promise<{response: request.RequestResponse, body: model.HierarchicalObject}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Calendar/{name}/properties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getCalendar.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "HierarchicalObject");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get iCalendar document attachment by name
     * @param requestObj contains request parameters
     */
    public async getCalendarAttachment(requestObj: requestModels.GetCalendarAttachmentRequest): Promise<{response: request.RequestResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Calendar/{name}/attachments/{attachment}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "attachment" + "}", String(requestObj.attachment));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getCalendarAttachment.');
        }

        // verify required parameter 'requestObj.attachment' is not null or undefined
        if (requestObj.attachment === null || requestObj.attachment === undefined) {
            throw new Error('Required parameter "requestObj.attachment" was null or undefined when calling getCalendarAttachment.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
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
     * Get iCalendar files list in folder on storage
     * @param requestObj contains request parameters
     */
    public async getCalendarList(requestObj: requestModels.GetCalendarListRequest): Promise<{response: request.RequestResponse, body: model.ListResponseOfHierarchicalObjectResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Calendar";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.folder' is not null or undefined
        if (requestObj.folder === null || requestObj.folder === undefined) {
            throw new Error('Required parameter "requestObj.folder" was null or undefined when calling getCalendarList.');
        }

        // verify required parameter 'requestObj.itemsPerPage' is not null or undefined
        if (requestObj.itemsPerPage === null || requestObj.itemsPerPage === undefined) {
            throw new Error('Required parameter "requestObj.itemsPerPage" was null or undefined when calling getCalendarList.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling getCalendarList.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.itemsPerPage !== undefined) {
            queryParameters.itemsPerPage = ObjectSerializer.serialize(requestObj.itemsPerPage, "number");
        }

        if (requestObj.pageNumber !== undefined) {
            queryParameters.pageNumber = ObjectSerializer.serialize(requestObj.pageNumber, "number");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "ListResponseOfHierarchicalObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get attachment file by name
     * @param requestObj contains request parameters
     */
    public async getContactAttachment(requestObj: requestModels.GetContactAttachmentRequest): Promise<{response: request.RequestResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/{format}/{name}/attachments/{attachment}"
            .replace("{" + "format" + "}", String(requestObj.format))
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "attachment" + "}", String(requestObj.attachment));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getContactAttachment.');
        }

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getContactAttachment.');
        }

        // verify required parameter 'requestObj.attachment' is not null or undefined
        if (requestObj.attachment === null || requestObj.attachment === undefined) {
            throw new Error('Required parameter "requestObj.attachment" was null or undefined when calling getContactAttachment.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
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
     * Get contact list from storage folder
     * @param requestObj contains request parameters
     */
    public async getContactList(requestObj: requestModels.GetContactListRequest): Promise<{response: request.RequestResponse, body: model.ListResponseOfHierarchicalObjectResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/{format}"
            .replace("{" + "format" + "}", String(requestObj.format));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getContactList.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.itemsPerPage !== undefined) {
            queryParameters.itemsPerPage = ObjectSerializer.serialize(requestObj.itemsPerPage, "number");
        }

        if (requestObj.pageNumber !== undefined) {
            queryParameters.pageNumber = ObjectSerializer.serialize(requestObj.pageNumber, "number");
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
        const result =  ObjectSerializer.deserialize(response.body, "ListResponseOfHierarchicalObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get contact document properties
     * @param requestObj contains request parameters
     */
    public async getContactProperties(requestObj: requestModels.GetContactPropertiesRequest): Promise<{response: request.RequestResponse, body: model.HierarchicalObject}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/{format}/{name}/properties"
            .replace("{" + "format" + "}", String(requestObj.format))
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getContactProperties.');
        }

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getContactProperties.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "HierarchicalObject");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: requestModels.GetDiscUsageRequest): Promise<{response: request.RequestResponse, body: model.DiscUsage}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/disc";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get email document
     * @param requestObj contains request parameters
     */
    public async getEmail(requestObj: requestModels.GetEmailRequest): Promise<{response: request.RequestResponse, body: model.EmailDocument}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{fileName}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling getEmail.');
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
        const result =  ObjectSerializer.deserialize(response.body, "EmailDocument");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get email attachment by name
     * @param requestObj contains request parameters
     */
    public async getEmailAttachment(requestObj: requestModels.GetEmailAttachmentRequest): Promise<{response: request.RequestResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{fileName}/attachments"
            .replace("{" + "attachment" + "}", String(requestObj.attachment))
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.attachment' is not null or undefined
        if (requestObj.attachment === null || requestObj.attachment === undefined) {
            throw new Error('Required parameter "requestObj.attachment" was null or undefined when calling getEmailAttachment.');
        }

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling getEmailAttachment.');
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
     * Get an email document property by its name
     * @param requestObj contains request parameters
     */
    public async getEmailProperty(requestObj: requestModels.GetEmailPropertyRequest): Promise<{response: request.RequestResponse, body: model.EmailPropertyResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{fileName}/properties/{propertyName}"
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName))
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling getEmailProperty.');
        }

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling getEmailProperty.');
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
        const result =  ObjectSerializer.deserialize(response.body, "EmailPropertyResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: requestModels.GetFileVersionsRequest): Promise<{response: request.RequestResponse, body: model.FileVersions}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: requestModels.GetFilesListRequest): Promise<{response: request.RequestResponse, body: model.FilesList}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get document attachment as file stream
     * @param requestObj contains request parameters
     */
    public async getMapiAttachment(requestObj: requestModels.GetMapiAttachmentRequest): Promise<{response: request.RequestResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi/{name}/attachments/{attachment}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "attachment" + "}", String(requestObj.attachment));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getMapiAttachment.');
        }

        // verify required parameter 'requestObj.attachment' is not null or undefined
        if (requestObj.attachment === null || requestObj.attachment === undefined) {
            throw new Error('Required parameter "requestObj.attachment" was null or undefined when calling getMapiAttachment.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
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
     * Get document attachment list
     * @param requestObj contains request parameters
     */
    public async getMapiAttachments(requestObj: requestModels.GetMapiAttachmentsRequest): Promise<{response: request.RequestResponse, body: model.ListResponseOfString}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi/{name}/attachments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getMapiAttachments.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "ListResponseOfString");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get document list from storage folder
     * @param requestObj contains request parameters
     */
    public async getMapiList(requestObj: requestModels.GetMapiListRequest): Promise<{response: request.RequestResponse, body: model.ListResponseOfHierarchicalObjectResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.itemsPerPage !== undefined) {
            queryParameters.itemsPerPage = ObjectSerializer.serialize(requestObj.itemsPerPage, "number");
        }

        if (requestObj.pageNumber !== undefined) {
            queryParameters.pageNumber = ObjectSerializer.serialize(requestObj.pageNumber, "number");
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
        const result =  ObjectSerializer.deserialize(response.body, "ListResponseOfHierarchicalObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get document properties
     * @param requestObj contains request parameters
     */
    public async getMapiProperties(requestObj: requestModels.GetMapiPropertiesRequest): Promise<{response: request.RequestResponse, body: model.HierarchicalObjectResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi/{name}/properties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getMapiProperties.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "HierarchicalObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get folders list in email account
     * @param requestObj contains request parameters
     */
    public async listEmailFolders(requestObj: requestModels.ListEmailFoldersRequest): Promise<{response: request.RequestResponse, body: model.ListFoldersResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/ListFolders";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.firstAccount' is not null or undefined
        if (requestObj.firstAccount === null || requestObj.firstAccount === undefined) {
            throw new Error('Required parameter "requestObj.firstAccount" was null or undefined when calling listEmailFolders.');
        }

        if (requestObj.firstAccount !== undefined) {
            queryParameters.firstAccount = ObjectSerializer.serialize(requestObj.firstAccount, "string");
        }

        if (requestObj.secondAccount !== undefined) {
            queryParameters.secondAccount = ObjectSerializer.serialize(requestObj.secondAccount, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.storageFolder !== undefined) {
            queryParameters.storageFolder = ObjectSerializer.serialize(requestObj.storageFolder, "string");
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
     * Get messages from folder, filtered by query The query string should have the following view.  The example of a simple expression:   '<Field name>' <Comparison operator> '<Field value>',  where &lt;Field Name&gt; - the name of a message field through which filtering is made, &lt;Comparison operator&gt; - comparison operators, as their name implies, allow to compare message field and specified value, &lt;Field value&gt; - value to be compared with a message field.  The number of simple expressions can make a compound one, ex.: (<Simple expression 1> & <Simple expression 2>) | <Simple expression 3>,  where \"&amp;\" - logical-AND operator, \"|\" - logical-OR operator  At present the following values are allowed as a field name (<Field name>):  \"To\" - represents a TO field of message, \"Text\" - represents string in the header or body of the message, \"Bcc\" - represents a BCC field of message, \"Body\" - represents a string in the body of message, \"Cc\" - represents a CC field of message, \"From\" - represents a From field of message, \"Subject\" - represents a string in the subject of message, \"InternalDate\" - represents an internal date of message, \"SentDate\" - represents a sent date of message  Additionally, the following field names are allowed for IMAP-protocol:  \"Answered\" - represents an /Answered flag of message \"Seen\" - represents a /Seen flag of message \"Flagged\" - represents a /Flagged flag of message \"Draft\" - represents a /Draft flag of message \"Deleted\" - represents a Deleted/ flag of message \"Recent\" - represents a Deleted/ flag of message \"MessageSize\" - represents a size (in bytes) of message  Additionally, the following field names are allowed for Exchange:  \"IsRead\" - Indicates whether the message has been read \"HasAttachment\" - Indicates whether or not the message has attachments \"IsSubmitted\" - Indicates whether the message has been submitted to the Outbox \"ContentClass\" - represents a content class of item  Additionally, the following field names are allowed for pst/ost files:  \"MessageClass\" - Represents a message class \"ContainerClass\" - Represents a folder container class \"Importance\" - Represents a message importance \"MessageSize\" - represents a size (in bytes) of message \"FolderName\" - represents a folder name \"ContentsCount\" - represents a total number of items in the folder \"UnreadContentsCount\" - represents the number of unread items in the folder. \"Subfolders\" - Indicates whether or not the folder has subfolders \"Read\" - the message is marked as having been read \"HasAttachment\" - the message has at least one attachment \"Unsent\" - the message is still being composed \"Unmodified\" - the message has not been modified since it was first saved (if unsent) or it was delivered (if sent) \"FromMe\" - the user receiving the message was also the user who sent the message \"Resend\" - the message includes a request for a resend operation with a non-delivery report \"NotifyRead\" - the user who sent the message has requested notification when a recipient first reads it \"NotifyUnread\" - the user who sent the message has requested notification when a recipient deletes it before reading or the Message object expires \"EverRead\" - the message has been read at least once  The field value (<Field value>) can take the following values: For text fields - any string, For date type fields - the string of \"d-MMM-yyy\" format, ex. \"10-Feb-2009\", For flags (fields of boolean type) - either \"True\", or \"False\"
     * @param requestObj contains request parameters
     */
    public async listEmailMessages(requestObj: requestModels.ListEmailMessagesRequest): Promise<{response: request.RequestResponse, body: model.ListMessagesResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/ListMessages";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.folder' is not null or undefined
        if (requestObj.folder === null || requestObj.folder === undefined) {
            throw new Error('Required parameter "requestObj.folder" was null or undefined when calling listEmailMessages.');
        }

        // verify required parameter 'requestObj.queryString' is not null or undefined
        if (requestObj.queryString === null || requestObj.queryString === undefined) {
            throw new Error('Required parameter "requestObj.queryString" was null or undefined when calling listEmailMessages.');
        }

        // verify required parameter 'requestObj.firstAccount' is not null or undefined
        if (requestObj.firstAccount === null || requestObj.firstAccount === undefined) {
            throw new Error('Required parameter "requestObj.firstAccount" was null or undefined when calling listEmailMessages.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.queryString !== undefined) {
            queryParameters.queryString = ObjectSerializer.serialize(requestObj.queryString, "string");
        }

        if (requestObj.firstAccount !== undefined) {
            queryParameters.firstAccount = ObjectSerializer.serialize(requestObj.firstAccount, "string");
        }

        if (requestObj.secondAccount !== undefined) {
            queryParameters.secondAccount = ObjectSerializer.serialize(requestObj.secondAccount, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.storageFolder !== undefined) {
            queryParameters.storageFolder = ObjectSerializer.serialize(requestObj.storageFolder, "string");
        }

        if (requestObj.recursive !== undefined) {
            queryParameters.recursive = ObjectSerializer.serialize(requestObj.recursive, "boolean");
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
        const result =  ObjectSerializer.deserialize(response.body, "ListMessagesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: requestModels.MoveFileRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }

        if (requestObj.destPath !== undefined) {
            queryParameters.destPath = ObjectSerializer.serialize(requestObj.destPath, "string");
        }

        if (requestObj.srcStorageName !== undefined) {
            queryParameters.srcStorageName = ObjectSerializer.serialize(requestObj.srcStorageName, "string");
        }

        if (requestObj.destStorageName !== undefined) {
            queryParameters.destStorageName = ObjectSerializer.serialize(requestObj.destStorageName, "string");
        }

        if (requestObj.versionId !== undefined) {
            queryParameters.versionId = ObjectSerializer.serialize(requestObj.versionId, "string");
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
        return Promise.resolve({body: null, response});
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: requestModels.MoveFolderRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }

        if (requestObj.destPath !== undefined) {
            queryParameters.destPath = ObjectSerializer.serialize(requestObj.destPath, "string");
        }

        if (requestObj.srcStorageName !== undefined) {
            queryParameters.srcStorageName = ObjectSerializer.serialize(requestObj.srcStorageName, "string");
        }

        if (requestObj.destStorageName !== undefined) {
            queryParameters.destStorageName = ObjectSerializer.serialize(requestObj.destStorageName, "string");
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
        return Promise.resolve({body: null, response});
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: requestModels.ObjectExistsRequest): Promise<{response: request.RequestResponse, body: model.ObjectExist}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
        }

        if (requestObj.versionId !== undefined) {
            queryParameters.versionId = ObjectSerializer.serialize(requestObj.versionId, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve({body: result, response});
    }

    /**
     * Create email account file (*.account) with login/password authentication
     * @param requestObj contains request parameters
     */
    public async saveMailAccount(requestObj: requestModels.SaveMailAccountRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/SaveMailAccount";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling saveMailAccount.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "SaveEmailAccountRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Create email account file (*.account) with OAuth
     * @param requestObj contains request parameters
     */
    public async saveMailOAuthAccount(requestObj: requestModels.SaveMailOAuthAccountRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/SaveMailOAuthAccount";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling saveMailOAuthAccount.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "SaveOAuthEmailAccountRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Send an email from *.eml file located on storage
     * @param requestObj contains request parameters
     */
    public async sendEmail(requestObj: requestModels.SendEmailRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/Send";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling sendEmail.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "SendEmailBaseRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Send an email specified by MIME in request
     * @param requestObj contains request parameters
     */
    public async sendEmailMime(requestObj: requestModels.SendEmailMimeRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/SendMime";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling sendEmailMime.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "SendEmailMimeBaseRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Set email document property value
     * @param requestObj contains request parameters
     */
    public async setEmailProperty(requestObj: requestModels.SetEmailPropertyRequest): Promise<{response: request.RequestResponse, body: model.EmailPropertyResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/{fileName}/properties/{propertyName}"
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName))
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling setEmailProperty.');
        }

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling setEmailProperty.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling setEmailProperty.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "SetEmailPropertyRequest"),
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

    /**
     * Sets \"Message is read\" flag
     * @param requestObj contains request parameters
     */
    public async setEmailReadFlag(requestObj: requestModels.SetEmailReadFlagRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/SetReadFlag";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling setEmailReadFlag.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "SetMessageReadFlagAccountBaseRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: requestModels.StorageExistsRequest): Promise<{response: request.RequestResponse, body: model.StorageExist}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
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
        const result =  ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update calendar file properties
     * @param requestObj contains request parameters
     */
    public async updateCalendarProperties(requestObj: requestModels.UpdateCalendarPropertiesRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Calendar/{name}/properties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateCalendarProperties.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling updateCalendarProperties.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "HierarchicalObjectRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Update contact document properties
     * @param requestObj contains request parameters
     */
    public async updateContactProperties(requestObj: requestModels.UpdateContactPropertiesRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Contact/{format}/{name}/properties"
            .replace("{" + "format" + "}", String(requestObj.format))
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling updateContactProperties.');
        }

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateContactProperties.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling updateContactProperties.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "HierarchicalObjectRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Update document properties
     * @param requestObj contains request parameters
     */
    public async updateMapiProperties(requestObj: requestModels.UpdateMapiPropertiesRequest): Promise<{response: request.RequestResponse, body?: any; }> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/Mapi/{name}/properties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateMapiProperties.');
        }

        // verify required parameter 'requestObj.request' is not null or undefined
        if (requestObj.request === null || requestObj.request === undefined) {
            throw new Error('Required parameter "requestObj.request" was null or undefined when calling updateMapiProperties.');
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, "HierarchicalObjectRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({body: null, response});
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: requestModels.UploadFileRequest): Promise<{response: request.RequestResponse, body: model.FilesUploadResult}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }

        if (requestObj.storageName !== undefined) {
            queryParameters.storageName = ObjectSerializer.serialize(requestObj.storageName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }
        useFormData = true;

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
        const result =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve({body: result, response});
    }

}
