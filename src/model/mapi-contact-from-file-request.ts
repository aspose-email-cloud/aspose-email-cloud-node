
// @ts-ignore
import * as model from "./index";
/**
 * Request model for mapiContactFromFile operation.
 */
export class MapiContactFromFileRequest {
    /**
     * File format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for mapiContactFromFile operation.
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
