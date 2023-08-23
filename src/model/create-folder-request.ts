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
 * Request model for FolderApi.createFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Request model for createFolder operation.
     * @param path Folder path to create e.g. 'folder_1/folder_2/'
     * @param storageName Storage name
     */
    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

export class CreateFolderRequestBuilder {
    private model: CreateFolderRequest
    public constructor(model: CreateFolderRequest) {
        this.model = model;
    }
    public build(): CreateFolderRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public path(path: string): CreateFolderRequestBuilder {
            this.model.path = path;
            return this;
        }
        public storageName(storageName: string): CreateFolderRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}
