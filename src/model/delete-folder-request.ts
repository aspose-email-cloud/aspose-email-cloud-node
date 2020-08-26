// @ts-ignore
import * as model from "./index";
/**
 * Request model for deleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;

    /**
     * Request model for deleteFolder operation.
     * @param path Folder path e.g. '/folder'
     * @param storageName Storage name
     * @param recursive Enable to delete folders, subfolders and files
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
