// @ts-ignore
import * as model from "./index";
/**
 * Request model for CalendarApi.getAsAlternate operation.
 */
export class CalendarGetAsAlternateRequest {
    /**
     * iCalendar file name in storage
     */
    public fileName: string;

    /**
     * iCalendar method type Enum, available values: Create, Update, Cancel
     */
    public calendarAction: string;

    /**
     * The sequence id
     */
    public sequenceId: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Request model for calendarGetAsAlternate operation.
     * @param fileName iCalendar file name in storage
     * @param calendarAction iCalendar method type Enum, available values: Create, Update, Cancel
     * @param sequenceId The sequence id
     * @param folder Path to folder in storage
     * @param storage Storage name
     */
    public constructor(
        fileName?: string, 
        calendarAction?: string, 
        sequenceId?: string, 
        folder?: string, 
        storage?: string) {
        
        this.fileName = fileName;
        this.calendarAction = calendarAction;
        this.sequenceId = sequenceId;
        this.folder = folder;
        this.storage = storage;
    }
}

export class CalendarGetAsAlternateRequestBuilder {
    private model: CalendarGetAsAlternateRequest
    public constructor(model: CalendarGetAsAlternateRequest) {
        this.model = model;
    }
    public build(): CalendarGetAsAlternateRequest {
        return this.model;
    }
        public fileName(fileName: string): CalendarGetAsAlternateRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public calendarAction(calendarAction: string): CalendarGetAsAlternateRequestBuilder {
            this.model.calendarAction = calendarAction;
            return this;
        }
        public sequenceId(sequenceId: string): CalendarGetAsAlternateRequestBuilder {
            this.model.sequenceId = sequenceId;
            return this;
        }
        public folder(folder: string): CalendarGetAsAlternateRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): CalendarGetAsAlternateRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
