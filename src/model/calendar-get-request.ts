// @ts-ignore
import * as model from "./index";
/**
 * Request model for calendarGet operation.
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
