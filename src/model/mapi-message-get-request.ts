// @ts-ignore
import * as model from "./index";
/**
 * Request model for MapiMessageApi.get operation.
 */
export class MapiMessageGetRequest {
    /**
     * Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Email document file name.
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
     * Request model for mapiMessageGet operation.
     * @param format Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param fileName Email document file name.
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

export class MapiMessageGetRequestBuilder {
    private model: MapiMessageGetRequest
    public constructor(model: MapiMessageGetRequest) {
        this.model = model;
    }
    public build(): MapiMessageGetRequest {
        return this.model;
    }
        public format(format: string): MapiMessageGetRequestBuilder {
            this.model.format = format;
            return this;
        }
        public fileName(fileName: string): MapiMessageGetRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): MapiMessageGetRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): MapiMessageGetRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
