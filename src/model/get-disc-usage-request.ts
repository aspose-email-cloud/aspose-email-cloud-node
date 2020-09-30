// @ts-ignore
import * as model from "./index";
/**
 * Request model for StorageApi.getDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Request model for getDiscUsage operation.
     * @param storageName Storage name
     */
    public constructor(
        storageName?: string) {
        
        this.storageName = storageName;
    }
}

export class GetDiscUsageRequestBuilder {
    private model: GetDiscUsageRequest
    public constructor(model: GetDiscUsageRequest) {
        this.model = model;
    }
    public build(): GetDiscUsageRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public storageName(storageName: string): GetDiscUsageRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}
