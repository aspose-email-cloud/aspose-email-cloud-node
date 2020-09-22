// @ts-ignore
import * as model from "./index";
/**
 * Request model for mapiCalendarFromFile operation.
 */
export class MapiCalendarFromFileRequest {
    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for mapiCalendarFromFile operation.
     * @param file File to convert
     */
    public constructor(
        file?: Buffer) {
        
        this.file = file;
    }
}

export class MapiCalendarFromFileRequestBuilder {
    private model: MapiCalendarFromFileRequest
    public constructor(model: MapiCalendarFromFileRequest) {
        this.model = model;
    }
    public build(): MapiCalendarFromFileRequest {
        return this.model;
    }
        public file(file: Buffer): MapiCalendarFromFileRequestBuilder {
            this.model.file = file;
            return this;
        }
}
