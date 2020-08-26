// @ts-ignore
import * as model from "./index";
/**
 * Request model for deleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Gets or sets recursive
     */
    public recursive: boolean;

    /**
     * Request model for deleteFolder operation.
     * @param path 
     * @param storageName 
     * @param recursive 
     */
    public constructor(
        path?: string, 
        storageName?: string, 
        recursive?: boolean) {
        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}
