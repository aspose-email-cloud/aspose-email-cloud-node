// @ts-ignore
import * as model from "./index";
/**
 * Request model for getDiscUsage operation.
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
