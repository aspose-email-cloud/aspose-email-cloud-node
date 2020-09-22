// @ts-ignore
import * as model from "./index";
/**
 * Request model for mapiMessageFromFile operation.
 */
export class MapiMessageFromFileRequest {
    /**
     * File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for mapiMessageFromFile operation.
     * @param format File format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}

export class MapiMessageFromFileRequestBuilder {
    private model: MapiMessageFromFileRequest
    public constructor(model: MapiMessageFromFileRequest) {
        this.model = model;
    }
    public build(): MapiMessageFromFileRequest {
        return this.model;
    }
        public format(format: string): MapiMessageFromFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public file(file: Buffer): MapiMessageFromFileRequestBuilder {
            this.model.file = file;
            return this;
        }
}
