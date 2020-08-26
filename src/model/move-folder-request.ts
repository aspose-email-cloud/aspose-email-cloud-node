// @ts-ignore
import * as model from "./index";
/**
 * Request model for moveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Gets or sets srcPath
     */
    public srcPath: string;

    /**
     * Gets or sets destPath
     */
    public destPath: string;

    /**
     * Gets or sets srcStorageName
     */
    public srcStorageName: string;

    /**
     * Gets or sets destStorageName
     */
    public destStorageName: string;

    /**
     * Request model for moveFolder operation.
     * @param srcPath 
     * @param destPath 
     * @param srcStorageName 
     * @param destStorageName 
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
