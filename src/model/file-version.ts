
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
 * File Version
 */
export class FileVersion extends model.StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;

    /**
     * File Version
     * @param name File or folder name.
     * @param isFolder True if it is a folder.
     * @param modifiedDate File or folder last modified DateTime.
     * @param size File or folder size.
     * @param path File or folder path.
     * @param versionId File Version ID.
     * @param isLatest Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public constructor(
        
        name?: string,
        isFolder?: boolean,
        modifiedDate?: Date,
        size?: number,
        path?: string,
        versionId?: string,
        isLatest?: boolean
    ) {
        super();
        this.name = name;
        this.isFolder = isFolder;
        this.modifiedDate = modifiedDate;
        this.size = size;
        this.path = path;
        this.versionId = versionId;
        this.isLatest = isLatest;
        
    }
}



