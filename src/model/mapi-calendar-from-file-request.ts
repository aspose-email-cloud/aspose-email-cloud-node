
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
