// @ts-ignore
import * as model from "./index";
/**
 * Request model for FileApi.deleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;

    /**
     * Request model for deleteFile operation.
     * @param path File path e.g. '/folder/file.ext'
     * @param storageName Storage name
     * @param versionId File version ID to delete
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

export class DeleteFileRequestBuilder {
    private model: DeleteFileRequest
    public constructor(model: DeleteFileRequest) {
        this.model = model;
    }
    public build(): DeleteFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public path(path: string): DeleteFileRequestBuilder {
            this.model.path = path;
            return this;
        }
        public storageName(storageName: string): DeleteFileRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
        public versionId(versionId: string): DeleteFileRequestBuilder {
            this.model.versionId = versionId;
            return this;
        }
}
