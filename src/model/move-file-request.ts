// @ts-ignore
import * as model from "./index";
/**
 * Request model for moveFile operation.
 */
export class MoveFileRequest {
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
     * Gets or sets versionId
     */
    public versionId: string;

    /**
     * Request model for moveFile operation.
     * @param srcPath 
     * @param destPath 
     * @param srcStorageName 
     * @param destStorageName 
     * @param versionId 
     */
    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string, 
        versionId?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}
