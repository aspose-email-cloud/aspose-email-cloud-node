// @ts-ignore
import * as model from "./index";
/**
 * Request model for CalendarApi.convert operation.
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

export class CalendarConvertRequestBuilder {
    private model: CalendarConvertRequest
    public constructor(model: CalendarConvertRequest) {
        this.model = model;
    }
    public build(): CalendarConvertRequest {
        return this.model;
    }
        public format(format: string): CalendarConvertRequestBuilder {
            this.model.format = format;
            return this;
        }
        public file(file: Buffer): CalendarConvertRequestBuilder {
            this.model.file = file;
            return this;
        }
}
