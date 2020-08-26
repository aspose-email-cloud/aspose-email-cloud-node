// @ts-ignore
import * as model from "./index";
/**
 * Request model for downloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * Gets or sets path
     */
    public path: string;

    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Gets or sets versionId
     */
    public versionId: string;

    /**
     * Request model for downloadFile operation.
     * @param path 
     * @param storageName 
     * @param versionId 
     */
    public constructor(
        path?: string, 
        storageName?: string, 
        versionId?: string) {
        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}
