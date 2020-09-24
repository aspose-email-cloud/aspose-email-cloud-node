// @ts-ignore
import * as model from "./index";
/**
 * Request model for ClientAccountApi.get operation.
 */
export class ClientAccountGetRequest {
    /**
     * File name on storage.
     */
    public fileName: string;

    /**
     * Folder on storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for clientAccountGet operation.
     * @param fileName File name on storage.
     * @param folder Folder on storage.
     * @param storage Storage name.
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

export class ClientAccountGetRequestBuilder {
    private model: ClientAccountGetRequest
    public constructor(model: ClientAccountGetRequest) {
        this.model = model;
    }
    public build(): ClientAccountGetRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): ClientAccountGetRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): ClientAccountGetRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ClientAccountGetRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
