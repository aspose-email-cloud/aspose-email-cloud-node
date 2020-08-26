// @ts-ignore
import * as model from "./index";
/**
 * Request model for contactConvert operation.
 */
export class ContactConvertRequest {
    /**
     * File format to convert to Enum, available values: VCard, WebDav, Msg
     */
    public toFormat: string;

    /**
     * File format to convert from Enum, available values: VCard, WebDav, Msg
     */
    public fromFormat: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for contactConvert operation.
     * @param toFormat File format to convert to Enum, available values: VCard, WebDav, Msg
     * @param fromFormat File format to convert from Enum, available values: VCard, WebDav, Msg
     * @param file File to convert
     */
    public constructor(
        toFormat?: string, 
        fromFormat?: string, 
        file?: Buffer) {
        
        this.toFormat = toFormat;
        this.fromFormat = fromFormat;
        this.file = file;
    }
}
