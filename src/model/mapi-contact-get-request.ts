// @ts-ignore
import * as model from "./index";
/**
 * Request model for MapiContactApi.get operation.
 */
export class MapiContactGetRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * Contact document file name.
     */
    public fileName: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for mapiContactGet operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
     * @param fileName Contact document file name.
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     */
    public constructor(
        format?: string, 
        fileName?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

export class MapiContactGetRequestBuilder {
    private model: MapiContactGetRequest
    public constructor(model: MapiContactGetRequest) {
        this.model = model;
    }
    public build(): MapiContactGetRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public format(format: string): MapiContactGetRequestBuilder {
            this.model.format = format;
            return this;
        }
        public fileName(fileName: string): MapiContactGetRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): MapiContactGetRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): MapiContactGetRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
