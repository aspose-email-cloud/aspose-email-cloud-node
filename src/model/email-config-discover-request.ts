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

// @ts-ignore
import * as model from "./index";
// @ts-ignore
import { Buffer } from "buffer";

/**
 * Request model for EmailConfigApi.discover operation.
 */
export class EmailConfigDiscoverRequest {
    /**
     * Email address.
     */
    public address: string;

    /**
     * Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.             
     */
    public fastProcessing: boolean;

    /**
     * Request model for emailConfigDiscover operation.
     * @param address Email address.
     * @param fastProcessing Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.             
     */
    public constructor(
        address?: string, 
        fastProcessing?: boolean) {
        
        this.address = address;
        this.fastProcessing = fastProcessing;
    }
}

export class EmailConfigDiscoverRequestBuilder {
    private model: EmailConfigDiscoverRequest
    public constructor(model: EmailConfigDiscoverRequest) {
        this.model = model;
    }
    public build(): EmailConfigDiscoverRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public address(address: string): EmailConfigDiscoverRequestBuilder {
            this.model.address = address;
            return this;
        }
        public fastProcessing(fastProcessing: boolean): EmailConfigDiscoverRequestBuilder {
            this.model.fastProcessing = fastProcessing;
            return this;
        }
}
