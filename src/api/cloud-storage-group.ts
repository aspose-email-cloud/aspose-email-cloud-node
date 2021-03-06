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

import { Configuration } from "../internal/configuration";


    
import { FileApi } from "./file-api";
    
import { FolderApi } from "./folder-api";
    
import { StorageApi } from "./storage-api";
    
    
/**
 * Cloud file storage operations.
 */
export class CloudStorageGroup {
    
    private readonly _file: FileApi;
    
    private readonly _folder: FolderApi;
    
    private readonly _storage: StorageApi;
    

    
    /**
     *  File operations controller
     */
    public get file(): FileApi {
        return this._file;
    }
    
    /**
     *  Folder operations controller
     */
    public get folder(): FolderApi {
        return this._folder;
    }
    
    /**
     *  Storage operations controller
     */
    public get storage(): StorageApi {
        return this._storage;
    }
    


    constructor(configuration: Configuration)
    {
    
        this._file = new FileApi(configuration);
    
        this._folder = new FolderApi(configuration);
    
        this._storage = new StorageApi(configuration);
    
    }
}
