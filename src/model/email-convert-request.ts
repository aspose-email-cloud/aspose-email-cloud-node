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

// @ts-ignore
import * as model from "./index";
// @ts-ignore
import { Buffer } from "buffer";

/**
 * Request model for EmailApi.convert operation.
 */
export class EmailConvertRequest {
    /**
     * File format to convert from. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public fromFormat: string;

    /**
     * File format to convert to. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public toFormat: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for emailConvert operation.
     * @param fromFormat File format to convert from. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param toFormat File format to convert to. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param file File to convert
     */
    public constructor(
        fromFormat?: string, 
        toFormat?: string, 
        file?: Buffer) {
        
        this.fromFormat = fromFormat;
        this.toFormat = toFormat;
        this.file = file;
    }
}

export class EmailConvertRequestBuilder {
    private model: EmailConvertRequest
    public constructor(model: EmailConvertRequest) {
        this.model = model;
    }
    public build(): EmailConvertRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fromFormat(fromFormat: string): EmailConvertRequestBuilder {
            this.model.fromFormat = fromFormat;
            return this;
        }
        public toFormat(toFormat: string): EmailConvertRequestBuilder {
            this.model.toFormat = toFormat;
            return this;
        }
        public file(file: Buffer): EmailConvertRequestBuilder {
            this.model.file = file;
            return this;
        }
}
