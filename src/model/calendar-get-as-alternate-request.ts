
// @ts-ignore
import * as model from "./index";
/**
 * Request model for calendarGetAsAlternate operation.
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
