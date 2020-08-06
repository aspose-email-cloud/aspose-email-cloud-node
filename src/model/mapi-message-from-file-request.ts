
// @ts-ignore
import * as model from "./index";
/**
 * Request model for mapiMessageFromFile operation.
 */
export class MapiMessageFromFileRequest {
    /**
     * File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for mapiMessageFromFile operation.
     * @param format File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}
