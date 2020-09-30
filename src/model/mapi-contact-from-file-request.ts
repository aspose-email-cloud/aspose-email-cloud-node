// @ts-ignore
import * as model from "./index";
/**
 * Request model for MapiContactApi.fromFile operation.
 */
export class MapiContactFromFileRequest {
    /**
     * File format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for mapiContactFromFile operation.
     * @param format File format Enum, available values: VCard, WebDav, Msg
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}

export class MapiContactFromFileRequestBuilder {
    private model: MapiContactFromFileRequest
    public constructor(model: MapiContactFromFileRequest) {
        this.model = model;
    }
    public build(): MapiContactFromFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public format(format: string): MapiContactFromFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public file(file: Buffer): MapiContactFromFileRequestBuilder {
            this.model.file = file;
            return this;
        }
}
