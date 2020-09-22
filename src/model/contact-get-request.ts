// @ts-ignore
import * as model from "./index";
/**
 * Request model for contactGet operation.
 */
export class ContactGetRequest {
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
     * Request model for contactGet operation.
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

export class ContactGetRequestBuilder {
    private model: ContactGetRequest
    public constructor(model: ContactGetRequest) {
        this.model = model;
    }
    public build(): ContactGetRequest {
        return this.model;
    }
        public format(format: string): ContactGetRequestBuilder {
            this.model.format = format;
            return this;
        }
        public fileName(fileName: string): ContactGetRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): ContactGetRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ContactGetRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
