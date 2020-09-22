// @ts-ignore
import * as model from "./index";
/**
 * Request model for copyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
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
     * File version ID to copy
     */
    public versionId: string;

    /**
     * Request model for copyFile operation.
     * @param srcPath Source file path e.g. '/folder/file.ext'
     * @param destPath Destination file path
     * @param srcStorageName Source storage name
     * @param destStorageName Destination storage name
     * @param versionId File version ID to copy
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

export class CopyFileRequestBuilder {
    private model: CopyFileRequest
    public constructor(model: CopyFileRequest) {
        this.model = model;
    }
    public build(): CopyFileRequest {
        return this.model;
    }
        public srcPath(srcPath: string): CopyFileRequestBuilder {
            this.model.srcPath = srcPath;
            return this;
        }
        public destPath(destPath: string): CopyFileRequestBuilder {
            this.model.destPath = destPath;
            return this;
        }
        public srcStorageName(srcStorageName: string): CopyFileRequestBuilder {
            this.model.srcStorageName = srcStorageName;
            return this;
        }
        public destStorageName(destStorageName: string): CopyFileRequestBuilder {
            this.model.destStorageName = destStorageName;
            return this;
        }
        public versionId(versionId: string): CopyFileRequestBuilder {
            this.model.versionId = versionId;
            return this;
        }
}
