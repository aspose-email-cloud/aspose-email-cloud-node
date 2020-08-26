// @ts-ignore
import * as model from "./index";
/**
 * Request model for getDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for getDiscUsage operation.
     * @param storageName 
     */
    public constructor(
        storageName?: string) {
        
        this.storageName = storageName;
    }
}
