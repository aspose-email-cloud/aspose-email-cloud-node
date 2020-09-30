// @ts-ignore
import * as model from "./index";
/**
 * Request model for StorageApi.exists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Request model for storageExists operation.
     * @param storageName Storage name
     */
    public constructor(
        storageName?: string) {
        
        this.storageName = storageName;
    }
}

export class StorageExistsRequestBuilder {
    private model: StorageExistsRequest
    public constructor(model: StorageExistsRequest) {
        this.model = model;
    }
    public build(): StorageExistsRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public storageName(storageName: string): StorageExistsRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}

