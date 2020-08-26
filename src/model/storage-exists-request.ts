// @ts-ignore
import * as model from "./index";
/**
 * Request model for storageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Gets or sets storageName
     */
    public storageName: string;

    /**
     * Request model for storageExists operation.
     * @param storageName 
     */
    public constructor(
        storageName?: string) {
        
        this.storageName = storageName;
    }
}

