// @ts-ignore
import * as model from "./index";
/**
 * Request model for uploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for uploadFile operation.
     * @param path 
     * @param file File to upload
     * @param storageName 
     */
    public constructor(
        path?: string, 
        file?: Buffer, 
        storageName?: string) {
        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}
