// @ts-ignore
import * as model from "./index";
/**
 * Request model for StorageApi.getFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Request model for getFileVersions operation.
     * @param path File path e.g. '/file.ext'
     * @param storageName Storage name
     */
    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

export class GetFileVersionsRequestBuilder {
    private model: GetFileVersionsRequest
    public constructor(model: GetFileVersionsRequest) {
        this.model = model;
    }
    public build(): GetFileVersionsRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public path(path: string): GetFileVersionsRequestBuilder {
            this.model.path = path;
            return this;
        }
        public storageName(storageName: string): GetFileVersionsRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}
