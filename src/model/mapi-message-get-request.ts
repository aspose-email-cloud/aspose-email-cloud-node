// @ts-ignore
import * as model from "./index";
/**
 * Request model for mapiMessageGet operation.
 */
export class MapiMessageGetRequest {
    /**
     * Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef
     */
    public format: string;

    /**
     * Email document file name.
     */
    public fileName: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for mapiMessageGet operation.
     * @param format Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef
     * @param fileName Email document file name.
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     */
    public constructor(
        format?: string, 
        fileName?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}
