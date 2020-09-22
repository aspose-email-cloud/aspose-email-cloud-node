// @ts-ignore
import * as model from "./index";
/**
 * Request model for FolderApi.createFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Request model for createFolder operation.
     * @param path Folder path to create e.g. 'folder_1/folder_2/'
     * @param storageName Storage name
     */
    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

export class CreateFolderRequestBuilder {
    private model: CreateFolderRequest
    public constructor(model: CreateFolderRequest) {
        this.model = model;
    }
    public build(): CreateFolderRequest {
        return this.model;
    }
        public path(path: string): CreateFolderRequestBuilder {
            this.model.path = path;
            return this;
        }
        public storageName(storageName: string): CreateFolderRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}
