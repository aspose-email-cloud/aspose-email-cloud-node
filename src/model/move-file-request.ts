// @ts-ignore
import * as model from "./index";
/**
 * Request model for moveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
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
     * File version ID to move
     */
    public versionId: string;

    /**
     * Request model for moveFile operation.
     * @param srcPath Source file path e.g. '/src.ext'
     * @param destPath Destination file path e.g. '/dest.ext'
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     * @param versionId File version ID to move
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
