// @ts-ignore
import * as model from "./index";
/**
 * Request model for FolderApi.moveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
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
     * Request model for moveFolder operation.
     * @param srcPath Folder path to move e.g. '/folder'
     * @param destPath Destination folder path to move to e.g '/dst'
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

export class MoveFolderRequestBuilder {
    private model: MoveFolderRequest
    public constructor(model: MoveFolderRequest) {
        this.model = model;
    }
    public build(): MoveFolderRequest {
        return this.model;
    }
        public srcPath(srcPath: string): MoveFolderRequestBuilder {
            this.model.srcPath = srcPath;
            return this;
        }
        public destPath(destPath: string): MoveFolderRequestBuilder {
            this.model.destPath = destPath;
            return this;
        }
        public srcStorageName(srcStorageName: string): MoveFolderRequestBuilder {
            this.model.srcStorageName = srcStorageName;
            return this;
        }
        public destStorageName(destStorageName: string): MoveFolderRequestBuilder {
            this.model.destStorageName = destStorageName;
            return this;
        }
}
