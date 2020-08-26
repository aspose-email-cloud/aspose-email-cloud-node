// @ts-ignore
import * as model from "./index";
/**
 * Request model for objectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;

    /**
     * Request model for objectExists operation.
     * @param path File or folder path e.g. '/file.ext' or '/folder'
     * @param storageName Storage name
     * @param versionId File version ID
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
