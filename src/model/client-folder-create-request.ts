
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

// @ts-ignore
import * as model from "./index";

/**
 * Email Client create folder request.             
 */
export class ClientFolderCreateRequest extends model.ClientAccountBaseRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "parentFolder",
            baseName: "parentFolder",
            type: "string",
        },
        {
            name: "folderName",
            baseName: "folderName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClientFolderCreateRequest.attributeTypeMap);
    }

    /**
     * Path to parent folder.             
     */
    public parentFolder: string;
    /**
     * Folder name.             
     */
    public folderName: string;

    /**
     * Email Client create folder request.             
     * @param accountLocation Email client account configuration location on storage.             
     * @param parentFolder Path to parent folder.             
     * @param folderName Folder name.             
     */
    public constructor(
        accountLocation?: model.StorageFileLocation,
        parentFolder?: string,
        folderName?: string) {
        super();
        this.accountLocation = accountLocation;
        this.parentFolder = parentFolder;
        this.folderName = folderName;
    }
}

