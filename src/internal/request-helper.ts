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

import { Buffer } from "buffer";
import axios from "axios";

import { ApiError } from "./api-error";
import { Configuration } from "./configuration";
import { ObjectSerializer } from "./object-serializer";
import { IRequestOptions } from "./request-options";
import { IResponse } from "./response";
import { ModelError } from "../model";

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
export async function invokeApiMethod(requestOptions: IRequestOptions, confguration: Configuration, notApplyAuthToRequest?: boolean)
    : Promise<IResponse> {
    return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
}


/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
async function invokeApiMethodInternal(
    requestOptions: IRequestOptions,
    confguration: Configuration,
    notApplyAuthToRequest?: boolean): Promise<IResponse> {
    if (!requestOptions.headers) {
        requestOptions.headers = {};
    }

    requestOptions.headers["x-aspose-client"] = "node.js sdk";
    requestOptions.headers["x-aspose-client-version"] = "23.8.0";

    requestOptions.timeout = 600000;

    if (requestOptions.formData && requestOptions.body) {
        return Promise.reject("You can't send both form data and body.");
    }

    const auth = confguration.authentication;
    if (!confguration.onPremise && !notApplyAuthToRequest) {
        await auth.applyToRequest(requestOptions, confguration);
    }
    const contentType = getContentType(requestOptions);
    if (contentType) requestOptions.headers['Content-Type'] = contentType;
    try {
        const response = await axios({
            url: requestOptions.uri,
            method: requestOptions.method,
            headers: requestOptions.headers,
            data: getBody(requestOptions),
            timeout: requestOptions.timeout,
            responseType: requestOptions.isResponseFile ? 'arraybuffer' : 'json',
            params: requestOptions.qs
        });
        if (requestOptions.isResponseFile) return {body: Buffer.from(response.data)};
        return {body: response.data};
    } catch (error) {
        const response = error.response;
        if (response.status === 401 && !notApplyAuthToRequest) throw new ApiError("Authentication failed", response.status, null);
        let modelError: ModelError = null;
        const bodyContent = response.data;
        if (bodyContent) {
            if (bodyContent instanceof ArrayBuffer) {
                const utf8 = Buffer.from(bodyContent).toString();
                modelError = ObjectSerializer.deserialize(JSON.parse(utf8), "ModelError");
                throw new ApiError(modelError?.message ?? utf8, response.status, modelError);
            }
            if (bodyContent.Message) {
                throw new ApiError(bodyContent.Message, response.status, null);
            }
            modelError = ObjectSerializer.deserialize(bodyContent, "ModelError");
            throw new ApiError(modelError.message, response.status, bodyContent);
        }
        throw new ApiError('Unknown API error', response.status, null);
    }
}

function getBody(options: IRequestOptions): Buffer|string|any|null {
    switch(getContentType(options)) {
        case "multipart/form-data": return options.formData;
        case "application/json":
        case "application/octet-stream":
        case "application/x-www-form-urlencoded":
            return options.body;
        default: return null;
    }
}

function getContentType(options: IRequestOptions): string|null {
    if (options.json) return "application/json";
    if (options.formData) return "multipart/form-data";
    if (!options.body || options.body.length <= 0) return null;
    if (options.body instanceof Buffer) return "application/octet-stream";
    if (typeof options.body === 'string') return "application/x-www-form-urlencoded";
    return null;
}
