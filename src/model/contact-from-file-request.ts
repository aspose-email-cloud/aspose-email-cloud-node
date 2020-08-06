
// @ts-ignore
import * as model from "./index";
/**
 * Request model for contactFromFile operation.
 */
export class ContactFromFileRequest {
    /**
     * File format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for contactFromFile operation.
     * @param format File format Enum, available values: VCard, WebDav, Msg
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}
