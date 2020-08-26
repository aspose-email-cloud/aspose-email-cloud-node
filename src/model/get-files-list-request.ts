// @ts-ignore
import * as model from "./index";
/**
 * Request model for getFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for getFilesList operation.
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
