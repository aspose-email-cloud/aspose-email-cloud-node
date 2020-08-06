
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
 * Parse business card images from Storage request             
 */
export class AiBcrParseStorageRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "outFolder",
            baseName: "outFolder",
            type: "StorageFolderLocation",
        },
        {
            name: "images",
            baseName: "images",
            type: "Array<AiBcrImageStorageFile>",
        },
        {
            name: "options",
            baseName: "options",
            type: "AiBcrOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiBcrParseStorageRequest.attributeTypeMap;
    }

    /**
     * Parse output folder location on storage             
     */
    public outFolder: model.StorageFolderLocation;
    
    /**
     * Images to parse.             
     */
    public images: Array< model.AiBcrImageStorageFile >;
    
    /**
     * Recognition options.             
     */
    public options: model.AiBcrOptions;
    

    /**
     * Parse business card images from Storage request             
     * @param outFolder Parse output folder location on storage             
     * @param images Images to parse.             
     * @param options Recognition options.             
     */
    public constructor(
        outFolder?: model.StorageFolderLocation,
        images?: Array< model.AiBcrImageStorageFile >,
        options?: model.AiBcrOptions) {
        
        this.outFolder = outFolder;
        this.images = images;
        this.options = options;
    }
}

