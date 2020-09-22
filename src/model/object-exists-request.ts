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

export class ObjectExistsRequestBuilder {
    private model: ObjectExistsRequest
    public constructor(model: ObjectExistsRequest) {
        this.model = model;
    }
    public build(): ObjectExistsRequest {
        return this.model;
    }
        public path(path: string): ObjectExistsRequestBuilder {
            this.model.path = path;
            return this;
        }
        public storageName(storageName: string): ObjectExistsRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
        public versionId(versionId: string): ObjectExistsRequestBuilder {
            this.model.versionId = versionId;
            return this;
        }
}
