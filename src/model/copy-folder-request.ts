// @ts-ignore
import * as model from "./index";
/**
 * Request model for copyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
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
     * Request model for copyFolder operation.
     * @param srcPath Source folder path e.g. '/src'
     * @param destPath Destination folder path e.g. '/dst'
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

export class CopyFolderRequestBuilder {
    private model: CopyFolderRequest
    public constructor(model: CopyFolderRequest) {
        this.model = model;
    }
    public build(): CopyFolderRequest {
        return this.model;
    }
        public srcPath(srcPath: string): CopyFolderRequestBuilder {
            this.model.srcPath = srcPath;
            return this;
        }
        public destPath(destPath: string): CopyFolderRequestBuilder {
            this.model.destPath = destPath;
            return this;
        }
        public srcStorageName(srcStorageName: string): CopyFolderRequestBuilder {
            this.model.srcStorageName = srcStorageName;
            return this;
        }
        public destStorageName(destStorageName: string): CopyFolderRequestBuilder {
            this.model.destStorageName = destStorageName;
            return this;
        }
}
