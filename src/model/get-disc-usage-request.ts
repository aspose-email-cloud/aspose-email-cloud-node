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
        return this.model;
    }
        public storageName(storageName: string): GetDiscUsageRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}
