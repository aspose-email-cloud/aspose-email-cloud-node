
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
 * Parsed name component             
 */
export class AiNameComponent {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "string",
        },
        {
            name: "category",
            baseName: "category",
            type: "string",
        },
        {
            name: "score",
            baseName: "score",
            type: "number",
        },
        {
            name: "position",
            baseName: "position",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AiNameComponent.attributeTypeMap;
    }

    /**
     * Component value             
     */
    public value: string;
    /**
     * Name component category. Enum, available values: Unknown, Mononym, Score, Format, FirstInitial, FirstName, MiddleInitial, MiddleName, MiddleNickname, MiddleSobriquet, MiddleMaidenName, MiddlePatronym, MiddleMatronym, LastInitial, LastName, LastNobiliaryParticle, LastNominalConjunction, LastPaternalSurname, LastMaternalSurname, PrefixTitle, PostfixGenerationalTitle, PostfixPostnominalLetters, ArabicIsm, ArabicKunya, ArabicNasab, ArabicSlaqab, ArabicNisbah
     */
    public category: string;
    /**
     * Score from 0.0 to 1.0             
     */
    public score: number;
    /**
     * Component position from 0             
     */
    public position: number;

    /**
     * Parsed name component             
     * @param value Component value             
     * @param category Name component category. Enum, available values: Unknown, Mononym, Score, Format, FirstInitial, FirstName, MiddleInitial, MiddleName, MiddleNickname, MiddleSobriquet, MiddleMaidenName, MiddlePatronym, MiddleMatronym, LastInitial, LastName, LastNobiliaryParticle, LastNominalConjunction, LastPaternalSurname, LastMaternalSurname, PrefixTitle, PostfixGenerationalTitle, PostfixPostnominalLetters, ArabicIsm, ArabicKunya, ArabicNasab, ArabicSlaqab, ArabicNisbah
     * @param score Score from 0.0 to 1.0             
     * @param position Component position from 0             
     */
    public constructor(
        
        value?: string,
        category?: string,
        score?: number,
        position?: number
    ) {
        
        this.value = value;
        this.category = category;
        this.score = score;
        this.position = position;
        
    }
}



