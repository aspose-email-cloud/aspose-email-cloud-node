// @ts-ignore
import * as model from "./index";
/**
 * Request model for calendarFromFile operation.
 */
export class CalendarFromFileRequest {
    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for calendarFromFile operation.
     * @param file File to convert
     */
    public constructor(
        file?: Buffer) {
        
        this.file = file;
    }
}

export class CalendarFromFileRequestBuilder {
    private model: CalendarFromFileRequest
    public constructor(model: CalendarFromFileRequest) {
        this.model = model;
    }
    public build(): CalendarFromFileRequest {
        return this.model;
    }
        public file(file: Buffer): CalendarFromFileRequestBuilder {
            this.model.file = file;
            return this;
        }
}
