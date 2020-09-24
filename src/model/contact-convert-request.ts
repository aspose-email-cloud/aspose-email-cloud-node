// @ts-ignore
import * as model from "./index";
/**
 * Request model for ContactApi.convert operation.
 */
export class ContactConvertRequest {
    /**
     * File format to convert to Enum, available values: VCard, WebDav, Msg
     */
    public toFormat: string;

    /**
     * File format to convert from Enum, available values: VCard, WebDav, Msg
     */
    public fromFormat: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for contactConvert operation.
     * @param toFormat File format to convert to Enum, available values: VCard, WebDav, Msg
     * @param fromFormat File format to convert from Enum, available values: VCard, WebDav, Msg
     * @param file File to convert
     */
    public constructor(
        toFormat?: string, 
        fromFormat?: string, 
        file?: Buffer) {
        
        this.toFormat = toFormat;
        this.fromFormat = fromFormat;
        this.file = file;
    }
}

export class ContactConvertRequestBuilder {
    private model: ContactConvertRequest
    public constructor(model: ContactConvertRequest) {
        this.model = model;
    }
    public build(): ContactConvertRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public toFormat(toFormat: string): ContactConvertRequestBuilder {
            this.model.toFormat = toFormat;
            return this;
        }
        public fromFormat(fromFormat: string): ContactConvertRequestBuilder {
            this.model.fromFormat = fromFormat;
            return this;
        }
        public file(file: Buffer): ContactConvertRequestBuilder {
            this.model.file = file;
            return this;
        }
}
