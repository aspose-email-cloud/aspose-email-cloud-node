// @ts-ignore
import * as model from "./index";
/**
 * Request model for FolderApi.deleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;

    /**
     * Request model for deleteFolder operation.
     * @param path Folder path e.g. '/folder'
     * @param storageName Storage name
     * @param recursive Enable to delete folders, subfolders and files
     */
    public constructor(
        path?: string, 
        storageName?: string, 
        recursive?: boolean) {
        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

export class DeleteFolderRequestBuilder {
    private model: DeleteFolderRequest
    public constructor(model: DeleteFolderRequest) {
        this.model = model;
    }
    public build(): DeleteFolderRequest {
        return this.model;
    }
        public path(path: string): DeleteFolderRequestBuilder {
            this.model.path = path;
            return this;
        }
        public storageName(storageName: string): DeleteFolderRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
        public recursive(recursive: boolean): DeleteFolderRequestBuilder {
            this.model.recursive = recursive;
            return this;
        }
}
