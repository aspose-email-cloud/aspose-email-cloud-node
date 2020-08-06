
// @ts-ignore
import * as model from "./index";
/**
 * Request model for emailGetAsFile operation.
 */
export class EmailGetAsFileRequest {
    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef
     */
    public format: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for emailGetAsFile operation.
     * @param fileName Email document file name
     * @param format File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        fileName?: string, 
        format?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.format = format;
        this.storage = storage;
        this.folder = folder;
    }
}
