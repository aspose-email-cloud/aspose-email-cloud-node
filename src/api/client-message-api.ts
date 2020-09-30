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
 * ClientMessageApi operations.
 */
export class ClientMessageApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * Add email message to specified folder in email account.             
     * @param request Append email request.
     */
    public async append(request: model.ClientMessageAppendRequest): Promise< model.ValueTOfString > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message/append";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling append.');
        }
    

        const requestOptions: rq.Options = {
            method: "POST",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientMessageAppendRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ValueTOfString");
        return Promise.resolve(result);
    }

    /**
     * Add email message from file to specified folder in email account.             
     * @param request contains request parameters
     */
    public async appendFile(request: model.ClientMessageAppendFileRequest): Promise< model.ValueTOfString > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message/file/append";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.account' is not null or undefined
        if (request.account === null || request.account === undefined) {
            throw new Error('Required parameter "request.account" was null or undefined when calling appendFile.');
        }
    
        // verify required parameter 'request.file' is not null or undefined
        if (request.file === null || request.file === undefined) {
            throw new Error('Required parameter "request.file" was null or undefined when calling appendFile.');
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

        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
        }

        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
        }

        if (request.markAsSent !== undefined) {
            queryParameters.markAsSent = ObjectSerializer.serialize(request.markAsSent, "boolean");
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
        const result =  ObjectSerializer.deserialize(response.body, "ValueTOfString");
        return Promise.resolve(result);
    }

    /**
     * Delete message.             
     * @param request Delete message request.
     */
    public async delete(request: model.ClientMessageDeleteRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling delete.');
        }
    

        const requestOptions: rq.Options = {
            method: "DELETE",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientMessageDeleteRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

    /**
     * Fetch message from email account             
     * @param request contains request parameters
     */
    public async fetch(request: model.ClientMessageFetchRequest): Promise< model.MailMessageBase > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.messageId' is not null or undefined
        if (request.messageId === null || request.messageId === undefined) {
            throw new Error('Required parameter "request.messageId" was null or undefined when calling fetch.');
        }
    
        // verify required parameter 'request.account' is not null or undefined
        if (request.account === null || request.account === undefined) {
            throw new Error('Required parameter "request.account" was null or undefined when calling fetch.');
        }
    
        if (request.messageId !== undefined) {
            queryParameters.messageId = ObjectSerializer.serialize(request.messageId, "string");
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

        if (request.type !== undefined) {
            queryParameters.type = ObjectSerializer.serialize(request.type, "string");
        }

        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "MailMessageBase");
        return Promise.resolve(result);
    }

    /**
     * Fetch message as file from email account             
     * @param request contains request parameters
     */
    public async fetchFile(request: model.ClientMessageFetchFileRequest): Promise< Buffer > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message/file";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.messageId' is not null or undefined
        if (request.messageId === null || request.messageId === undefined) {
            throw new Error('Required parameter "request.messageId" was null or undefined when calling fetchFile.');
        }
    
        // verify required parameter 'request.account' is not null or undefined
        if (request.account === null || request.account === undefined) {
            throw new Error('Required parameter "request.account" was null or undefined when calling fetchFile.');
        }
    
        if (request.messageId !== undefined) {
            queryParameters.messageId = ObjectSerializer.serialize(request.messageId, "string");
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

        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
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
     * Get messages from folder, filtered by query              The query string should have the following view.      The example of a simple expression:       '<Field name>' <Comparison operator> '<Field value>',  where &lt;Field Name&gt; - the name of a message field through which filtering is made, &lt;Comparison operator&gt; - comparison operators, as their name implies, allow to compare message field and specified value, &lt;Field value&gt; - value to be compared with a message field.      The number of simple expressions can make a compound one, ex.:     (<Simple expression 1> & <Simple expression 2>) | <Simple expression 3     >,  where \"&amp;\" - logical-AND operator, \"|\" - logical-OR operator      At present the following values are allowed as a field name (<Field name>):  \"To\" - represents a TO field of message, \"Text\" - represents string in the header or body of the message, \"Bcc\" - represents a BCC field of message, \"Body\" - represents a string in the body of message, \"Cc\" - represents a CC field of message, \"From\" - represents a From field of message, \"Subject\" - represents a string in the subject of message, \"InternalDate\" - represents an internal date of message, \"SentDate\" - represents a sent date of message      Additionally, the following field names are allowed for IMAP-protocol:  \"Answered\" - represents an /Answered flag of message \"Seen\" - represents a /Seen flag of message \"Flagged\" - represents a /Flagged flag of message \"Draft\" - represents a /Draft flag of message \"Deleted\" - represents a Deleted/ flag of message \"Recent\" - represents a Deleted/ flag of message \"MessageSize\" - represents a size (in bytes) of message      Additionally, the following field names are allowed for Exchange:  \"IsRead\" - Indicates whether the message has been read \"HasAttachment\" - Indicates whether or not the message has attachments \"IsSubmitted\" - Indicates whether the message has been submitted to the Outbox \"ContentClass\" - represents a content class of item      Additionally, the following field names are allowed for pst/ost files:  \"MessageClass\" - Represents a message class \"ContainerClass\" - Represents a folder container class \"Importance\" - Represents a message importance \"MessageSize\" - represents a size (in bytes) of message \"FolderName\" - represents a folder name \"ContentsCount\" - represents a total number of items in the folder \"UnreadContentsCount\" - represents the number of unread items in the folder. \"Subfolders\" - Indicates whether or not the folder has subfolders \"Read\" - the message is marked as having been read \"HasAttachment\" - the message has at least one attachment \"Unsent\" - the message is still being composed \"Unmodified\" - the message has not been modified since it was first saved (if unsent) or it was delivered (if sent) \"FromMe\" - the user receiving the message was also the user who sent the message \"Resend\" - the message includes a request for a resend operation with a non-delivery report \"NotifyRead\" - the user who sent the message has requested notification when a recipient first reads it \"NotifyUnread\" - the user who sent the message has requested notification when a recipient deletes it before reading or the Message object expires \"EverRead\" - the message has been read at least once      The field value (<Field value>) can take the following values:     For text fields - any string,     For date type fields - the string of \"d-MMM-yyy\" format, ex. \"10-Feb-2009\",     For flags (fields of boolean type) - either \"True\", or \"False\"              
     * @param request contains request parameters
     */
    public async list(request: model.ClientMessageListRequest): Promise< model.MailMessageBaseList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message/list";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.folder' is not null or undefined
        if (request.folder === null || request.folder === undefined) {
            throw new Error('Required parameter "request.folder" was null or undefined when calling list.');
        }
    
        // verify required parameter 'request.account' is not null or undefined
        if (request.account === null || request.account === undefined) {
            throw new Error('Required parameter "request.account" was null or undefined when calling list.');
        }
    
        if (request.folder !== undefined) {
            queryParameters.folder = ObjectSerializer.serialize(request.folder, "string");
        }

        if (request.account !== undefined) {
            queryParameters.account = ObjectSerializer.serialize(request.account, "string");
        }

        if (request.queryString !== undefined) {
            queryParameters.queryString = ObjectSerializer.serialize(request.queryString, "string");
        }

        if (request.storage !== undefined) {
            queryParameters.storage = ObjectSerializer.serialize(request.storage, "string");
        }

        if (request.accountStorageFolder !== undefined) {
            queryParameters.accountStorageFolder = ObjectSerializer.serialize(request.accountStorageFolder, "string");
        }

        if (request.recursive !== undefined) {
            queryParameters.recursive = ObjectSerializer.serialize(request.recursive, "boolean");
        }

        if (request.type !== undefined) {
            queryParameters.type = ObjectSerializer.serialize(request.type, "string");
        }

        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "MailMessageBaseList");
        return Promise.resolve(result);
    }

    /**
     * Move message to another folder.             
     * @param request Move message request.
     */
    public async move(request: model.ClientMessageMoveRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message/move";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling move.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientMessageMoveRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

    /**
     * Send an email specified by model in request.             
     * @param request Send email request.
     */
    public async send(request: model.ClientMessageSendRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling send.');
        }
    

        const requestOptions: rq.Options = {
            method: "POST",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientMessageSendRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

    /**
     * Send an email file.             
     * @param request contains request parameters
     */
    public async sendFile(request: model.ClientMessageSendFileRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message/file";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.account' is not null or undefined
        if (request.account === null || request.account === undefined) {
            throw new Error('Required parameter "request.account" was null or undefined when calling sendFile.');
        }
    
        // verify required parameter 'request.file' is not null or undefined
        if (request.file === null || request.file === undefined) {
            throw new Error('Required parameter "request.file" was null or undefined when calling sendFile.');
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

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }

    /**
     * Mark message as read or unread.             
     * @param request Delete message request.
     */
    public async setIsRead(request: model.ClientMessageSetIsReadRequest): Promise< any > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/client/message/set-is-read";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling setIsRead.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "ClientMessageSetIsReadRequest"),
        };

        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(null);
    }
}
