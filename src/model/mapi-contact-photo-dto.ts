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
 * Contains data and type of contact's photo.             
 */
export class MapiContactPhotoDto extends model.ContactPhoto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MapiContactPhotoDto.attributeTypeMap);
    }


    /**
     * Contains data and type of contact's photo.             
     * @param photoImageFormat MapiContact photo image format./nEnum, available values: Undefined, Jpeg, Gif, Wmf, Bmp, Tiff
     * @param base64Data Photo serialized as base64 string.             
     */
    public constructor(
        
        photoImageFormat?: string,
        base64Data?: string
        
    ) {
        super();
        this.photoImageFormat = photoImageFormat;
        this.base64Data = base64Data;
        
    }
}

/**
 *  MapiContactPhotoDto model builder
 */
export class MapiContactPhotoDtoBuilder {
    private readonly model: MapiContactPhotoDto;
    public constructor(model: MapiContactPhotoDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): MapiContactPhotoDto {
        return this.model;
    }

    /**
    * MapiContact photo image format./nEnum, available values: Undefined, Jpeg, Gif, Wmf, Bmp, Tiff
    */
    public photoImageFormat(photoImageFormat: string): MapiContactPhotoDtoBuilder {
        this.model.photoImageFormat = photoImageFormat;
        return this;
    }
    /**
    * Photo serialized as base64 string.             
    */
    public base64Data(base64Data: string): MapiContactPhotoDtoBuilder {
        this.model.base64Data = base64Data;
        return this;
    }
}

