// @ts-ignore
import * as model from "./index";
/**
 * Request model for storageExists operation.
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
        return this.model;
    }
        public storageName(storageName: string): StorageExistsRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}

