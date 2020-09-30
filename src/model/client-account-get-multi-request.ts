// @ts-ignore
import * as model from "./index";
/**
 * Request model for ClientAccountApi.getMulti operation.
 */
export class ClientAccountGetMultiRequest {
    /**
     * File name on storage
     */
    public fileName: string;

    /**
     * Folder on storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for clientAccountGetMulti operation.
     * @param fileName File name on storage
     * @param folder Folder on storage
     * @param storage Storage name
     */
    public constructor(
        fileName?: string, 
        folder?: string, 
        storage?: string) {
        
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

export class ClientAccountGetMultiRequestBuilder {
    private model: ClientAccountGetMultiRequest
    public constructor(model: ClientAccountGetMultiRequest) {
        this.model = model;
    }
    public build(): ClientAccountGetMultiRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): ClientAccountGetMultiRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): ClientAccountGetMultiRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ClientAccountGetMultiRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
