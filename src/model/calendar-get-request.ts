// @ts-ignore
import * as model from "./index";
/**
 * Request model for CalendarApi.get operation.
 */
export class CalendarGetRequest {
    /**
     * iCalendar file name in storage.
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
     * Request model for calendarGet operation.
     * @param fileName iCalendar file name in storage.
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

export class CalendarGetRequestBuilder {
    private model: CalendarGetRequest
    public constructor(model: CalendarGetRequest) {
        this.model = model;
    }
    public build(): CalendarGetRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): CalendarGetRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): CalendarGetRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): CalendarGetRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
