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
 * AiNameApi operations.
 */
export class AiNameApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    /**
     * The call proposes k most probable names for given starting characters.             
     * @param request contains request parameters
     */
    public async complete(request: model.AiNameCompleteRequest): Promise< model.AiNameWeightedVariants > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/complete";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.name' is not null or undefined
        if (request.name === null || request.name === undefined) {
            throw new Error('Required parameter "request.name" was null or undefined when calling complete.');
        }
    
        if (request.name !== undefined) {
            queryParameters.name = ObjectSerializer.serialize(request.name, "string");
        }

        if (request.language !== undefined) {
            queryParameters.language = ObjectSerializer.serialize(request.language, "string");
        }

        if (request.location !== undefined) {
            queryParameters.location = ObjectSerializer.serialize(request.location, "string");
        }

        if (request.encoding !== undefined) {
            queryParameters.encoding = ObjectSerializer.serialize(request.encoding, "string");
        }

        if (request.script !== undefined) {
            queryParameters.script = ObjectSerializer.serialize(request.script, "string");
        }

        if (request.style !== undefined) {
            queryParameters.style = ObjectSerializer.serialize(request.style, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AiNameWeightedVariants");
        return Promise.resolve(result);
    }

    /**
     * Expands a person's name into a list of possible alternatives using options for expanding instructions.             
     * @param request contains request parameters
     */
    public async expand(request: model.AiNameExpandRequest): Promise< model.AiNameWeightedVariants > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/expand";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.name' is not null or undefined
        if (request.name === null || request.name === undefined) {
            throw new Error('Required parameter "request.name" was null or undefined when calling expand.');
        }
    
        if (request.name !== undefined) {
            queryParameters.name = ObjectSerializer.serialize(request.name, "string");
        }

        if (request.language !== undefined) {
            queryParameters.language = ObjectSerializer.serialize(request.language, "string");
        }

        if (request.location !== undefined) {
            queryParameters.location = ObjectSerializer.serialize(request.location, "string");
        }

        if (request.encoding !== undefined) {
            queryParameters.encoding = ObjectSerializer.serialize(request.encoding, "string");
        }

        if (request.script !== undefined) {
            queryParameters.script = ObjectSerializer.serialize(request.script, "string");
        }

        if (request.style !== undefined) {
            queryParameters.style = ObjectSerializer.serialize(request.style, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AiNameWeightedVariants");
        return Promise.resolve(result);
    }

    /**
     * Expands a person's parsed name into a list of possible alternatives using options for expanding instructions.             
     * @param request Parsed name with options.
     */
    public async expandParsed(request: model.AiNameParsedRequest): Promise< model.AiNameWeightedVariants > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/expand-parsed";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling expandParsed.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "AiNameParsedRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AiNameWeightedVariants");
        return Promise.resolve(result);
    }

    /**
     * Formats a person's name in correct case and name order using options for formatting instructions.             
     * @param request contains request parameters
     */
    public async format(request: model.AiNameFormatRequest): Promise< model.AiNameFormatted > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/format";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.name' is not null or undefined
        if (request.name === null || request.name === undefined) {
            throw new Error('Required parameter "request.name" was null or undefined when calling format.');
        }
    
        if (request.name !== undefined) {
            queryParameters.name = ObjectSerializer.serialize(request.name, "string");
        }

        if (request.language !== undefined) {
            queryParameters.language = ObjectSerializer.serialize(request.language, "string");
        }

        if (request.location !== undefined) {
            queryParameters.location = ObjectSerializer.serialize(request.location, "string");
        }

        if (request.encoding !== undefined) {
            queryParameters.encoding = ObjectSerializer.serialize(request.encoding, "string");
        }

        if (request.script !== undefined) {
            queryParameters.script = ObjectSerializer.serialize(request.script, "string");
        }

        if (request.format !== undefined) {
            queryParameters.format = ObjectSerializer.serialize(request.format, "string");
        }

        if (request.style !== undefined) {
            queryParameters.style = ObjectSerializer.serialize(request.style, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AiNameFormatted");
        return Promise.resolve(result);
    }

    /**
     * Formats a person's parsed name in correct case and name order using options for formatting instructions.             
     * @param request Parsed name with options.
     */
    public async formatParsed(request: model.AiNameParsedRequest): Promise< model.AiNameFormatted > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/format-parsed";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling formatParsed.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "AiNameParsedRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AiNameFormatted");
        return Promise.resolve(result);
    }

    /**
     * Detect person's gender from name string.             
     * @param request contains request parameters
     */
    public async genderize(request: model.AiNameGenderizeRequest): Promise< model.AiNameGenderHypothesisList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/genderize";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.name' is not null or undefined
        if (request.name === null || request.name === undefined) {
            throw new Error('Required parameter "request.name" was null or undefined when calling genderize.');
        }
    
        if (request.name !== undefined) {
            queryParameters.name = ObjectSerializer.serialize(request.name, "string");
        }

        if (request.language !== undefined) {
            queryParameters.language = ObjectSerializer.serialize(request.language, "string");
        }

        if (request.location !== undefined) {
            queryParameters.location = ObjectSerializer.serialize(request.location, "string");
        }

        if (request.encoding !== undefined) {
            queryParameters.encoding = ObjectSerializer.serialize(request.encoding, "string");
        }

        if (request.script !== undefined) {
            queryParameters.script = ObjectSerializer.serialize(request.script, "string");
        }

        if (request.style !== undefined) {
            queryParameters.style = ObjectSerializer.serialize(request.style, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AiNameGenderHypothesisList");
        return Promise.resolve(result);
    }

    /**
     * Detect person's gender from parsed name.             
     * @param request Gender detection request data.
     */
    public async genderizeParsed(request: model.AiNameParsedRequest): Promise< model.AiNameGenderHypothesisList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/genderize-parsed";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling genderizeParsed.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "AiNameParsedRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AiNameGenderHypothesisList");
        return Promise.resolve(result);
    }

    /**
     * Compare people's names. Uses options for comparing instructions.             
     * @param request contains request parameters
     */
    public async match(request: model.AiNameMatchRequest): Promise< model.AiNameMatchResult > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/match";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.name' is not null or undefined
        if (request.name === null || request.name === undefined) {
            throw new Error('Required parameter "request.name" was null or undefined when calling match.');
        }
    
        // verify required parameter 'request.otherName' is not null or undefined
        if (request.otherName === null || request.otherName === undefined) {
            throw new Error('Required parameter "request.otherName" was null or undefined when calling match.');
        }
    
        if (request.name !== undefined) {
            queryParameters.name = ObjectSerializer.serialize(request.name, "string");
        }

        if (request.otherName !== undefined) {
            queryParameters.otherName = ObjectSerializer.serialize(request.otherName, "string");
        }

        if (request.language !== undefined) {
            queryParameters.language = ObjectSerializer.serialize(request.language, "string");
        }

        if (request.location !== undefined) {
            queryParameters.location = ObjectSerializer.serialize(request.location, "string");
        }

        if (request.encoding !== undefined) {
            queryParameters.encoding = ObjectSerializer.serialize(request.encoding, "string");
        }

        if (request.script !== undefined) {
            queryParameters.script = ObjectSerializer.serialize(request.script, "string");
        }

        if (request.style !== undefined) {
            queryParameters.style = ObjectSerializer.serialize(request.style, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AiNameMatchResult");
        return Promise.resolve(result);
    }

    /**
     * Compare people's parsed names and attributes. Uses options for comparing instructions.             
     * @param request Parsed names to match.
     */
    public async matchParsed(request: model.AiNameMatchParsedRequest): Promise< model.AiNameMatchResult > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/match-parsed";
    
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling matchParsed.');
        }
    

        const requestOptions: rq.Options = {
            method: "PUT",
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(request, "AiNameMatchParsedRequest"),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AiNameMatchResult");
        return Promise.resolve(result);
    }

    /**
     * Parse name to components.             
     * @param request contains request parameters
     */
    public async parse(request: model.AiNameParseRequest): Promise< model.AiNameComponentList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/parse";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.name' is not null or undefined
        if (request.name === null || request.name === undefined) {
            throw new Error('Required parameter "request.name" was null or undefined when calling parse.');
        }
    
        if (request.name !== undefined) {
            queryParameters.name = ObjectSerializer.serialize(request.name, "string");
        }

        if (request.language !== undefined) {
            queryParameters.language = ObjectSerializer.serialize(request.language, "string");
        }

        if (request.location !== undefined) {
            queryParameters.location = ObjectSerializer.serialize(request.location, "string");
        }

        if (request.encoding !== undefined) {
            queryParameters.encoding = ObjectSerializer.serialize(request.encoding, "string");
        }

        if (request.script !== undefined) {
            queryParameters.script = ObjectSerializer.serialize(request.script, "string");
        }

        if (request.style !== undefined) {
            queryParameters.style = ObjectSerializer.serialize(request.style, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AiNameComponentList");
        return Promise.resolve(result);
    }

    /**
     * Parse person's name out of an email address.             
     * @param request contains request parameters
     */
    public async parseEmailAddress(request: model.AiNameParseEmailAddressRequest): Promise< model.AiNameExtractedList > {
        const localVarPath = this.configuration.getApiBaseUrl() + "/email/AiName/parse-email-address";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};
    
        // verify required parameter 'request.emailAddress' is not null or undefined
        if (request.emailAddress === null || request.emailAddress === undefined) {
            throw new Error('Required parameter "request.emailAddress" was null or undefined when calling parseEmailAddress.');
        }
    
        if (request.emailAddress !== undefined) {
            queryParameters.emailAddress = ObjectSerializer.serialize(request.emailAddress, "string");
        }

        if (request.language !== undefined) {
            queryParameters.language = ObjectSerializer.serialize(request.language, "string");
        }

        if (request.location !== undefined) {
            queryParameters.location = ObjectSerializer.serialize(request.location, "string");
        }

        if (request.encoding !== undefined) {
            queryParameters.encoding = ObjectSerializer.serialize(request.encoding, "string");
        }

        if (request.script !== undefined) {
            queryParameters.script = ObjectSerializer.serialize(request.script, "string");
        }

        if (request.style !== undefined) {
            queryParameters.style = ObjectSerializer.serialize(request.style, "string");
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
        const result =  ObjectSerializer.deserialize(response.body, "AiNameExtractedList");
        return Promise.resolve(result);
    }
}
