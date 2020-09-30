// @ts-ignore
import * as model from "./index";
/**
 * Request model for CalendarApi.getAsFile operation.
 */
export class CalendarGetAsFileRequest {
    /**
     * Calendar document file name.
     */
    public fileName: string;

    /**
     * File format. Enum, available values: Ics, Msg
     */
    public format: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Request model for calendarGetAsFile operation.
     * @param fileName Calendar document file name.
     * @param format File format. Enum, available values: Ics, Msg
     * @param storage Storage name.
     * @param folder Path to folder in storage.
     */
    public constructor(
        fileName?: string, 
        format?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.format = format;
        this.storage = storage;
        this.folder = folder;
    }
}

export class CalendarGetAsFileRequestBuilder {
    private model: CalendarGetAsFileRequest
    public constructor(model: CalendarGetAsFileRequest) {
        this.model = model;
    }
    public build(): CalendarGetAsFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public fileName(fileName: string): CalendarGetAsFileRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public format(format: string): CalendarGetAsFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public storage(storage: string): CalendarGetAsFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public folder(folder: string): CalendarGetAsFileRequestBuilder {
            this.model.folder = folder;
            return this;
        }
}
