// @ts-ignore
import * as model from "./index";
/**
 * Request model for moveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * Request model for moveFolder operation.
     * @param srcPath Folder path to move e.g. '/folder'
     * @param destPath Destination folder path to move to e.g '/dst'
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     */
    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}
