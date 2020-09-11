// @ts-ignore
import * as model from "./index";
/**
 * Request model for emailConvert operation.
 */
export class EmailConvertRequest {
    /**
     * File format to convert to Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public fromFormat: string;

    /**
     * File format to convert from Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public toFormat: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for emailConvert operation.
     * @param fromFormat File format to convert to Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param toFormat File format to convert from Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
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
