// @ts-ignore
import * as model from "./index";
/**
 * Request model for MapiCalendarApi.get operation.
 */
export class MapiCalendarGetRequest {
    /**
     * Calendar file name in storage.
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
     * Request model for mapiCalendarGet operation.
     * @param fileName Calendar file name in storage.
     * @param folder Path to folder in storage.
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

export class MapiCalendarGetRequestBuilder {
    private model: MapiCalendarGetRequest
    public constructor(model: MapiCalendarGetRequest) {
        this.model = model;
    }
    public build(): MapiCalendarGetRequest {
        return this.model;
    }
        public fileName(fileName: string): MapiCalendarGetRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): MapiCalendarGetRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): MapiCalendarGetRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
