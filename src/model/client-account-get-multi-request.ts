// @ts-ignore
import * as model from "./index";
/**
 * Request model for clientAccountGetMulti operation.
 */
export class ClientAccountGetMultiRequest {
    /**
     * File name on storage
     */
    public fileName: string;

    /**
     * Folder on storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for clientAccountGetMulti operation.
     * @param fileName File name on storage
     * @param folder Folder on storage
     * @param storage Storage name
     */
    public constructor(
        fileName?: string, 
        folder?: string, 
        storage?: string) {
        
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}
