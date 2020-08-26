// @ts-ignore
import * as model from "./index";
/**
 * Request model for downloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;

    /**
     * Request model for downloadFile operation.
     * @param path File path e.g. '/folder/file.ext'
     * @param storageName Storage name
     * @param versionId File version ID to download
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
