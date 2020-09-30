// @ts-ignore
import * as model from "./index";
/**
 * Request model for ContactApi.fromFile operation.
 */
export class ContactFromFileRequest {
    /**
     * File format Enum, available values: VCard, WebDav, Msg
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for contactFromFile operation.
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

export class ContactFromFileRequestBuilder {
    private model: ContactFromFileRequest
    public constructor(model: ContactFromFileRequest) {
        this.model = model;
    }
    public build(): ContactFromFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public format(format: string): ContactFromFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public file(file: Buffer): ContactFromFileRequestBuilder {
            this.model.file = file;
            return this;
        }
}
