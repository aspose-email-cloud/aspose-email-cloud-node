// @ts-ignore
import * as model from "./index";
/**
 * Request model for FolderApi.getFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Request model for getFilesList operation.
     * @param path Folder path e.g. '/folder'
     * @param storageName Storage name
     */
    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

export class GetFilesListRequestBuilder {
    private model: GetFilesListRequest
    public constructor(model: GetFilesListRequest) {
        this.model = model;
    }
    public build(): GetFilesListRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public path(path: string): GetFilesListRequestBuilder {
            this.model.path = path;
            return this;
        }
        public storageName(storageName: string): GetFilesListRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}
