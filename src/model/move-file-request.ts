// @ts-ignore
import * as model from "./index";
/**
 * Request model for FileApi.moveFile operation.
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

export class MoveFileRequestBuilder {
    private model: MoveFileRequest
    public constructor(model: MoveFileRequest) {
        this.model = model;
    }
    public build(): MoveFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public srcPath(srcPath: string): MoveFileRequestBuilder {
            this.model.srcPath = srcPath;
            return this;
        }
        public destPath(destPath: string): MoveFileRequestBuilder {
            this.model.destPath = destPath;
            return this;
        }
        public srcStorageName(srcStorageName: string): MoveFileRequestBuilder {
            this.model.srcStorageName = srcStorageName;
            return this;
        }
        public destStorageName(destStorageName: string): MoveFileRequestBuilder {
            this.model.destStorageName = destStorageName;
            return this;
        }
        public versionId(versionId: string): MoveFileRequestBuilder {
            this.model.versionId = versionId;
            return this;
        }
}
