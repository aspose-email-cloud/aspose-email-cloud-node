// @ts-ignore
import * as model from "./index";
/**
 * Request model for createFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for createFolder operation.
     * @param path 
     * @param storageName 
     */
    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}
