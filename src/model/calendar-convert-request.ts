// @ts-ignore
import * as model from "./index";
/**
 * Request model for calendarConvert operation.
 */
export class CalendarConvertRequest {
    /**
     * File format. Enum, available values: Ics, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for calendarConvert operation.
     * @param format File format. Enum, available values: Ics, Msg
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}
