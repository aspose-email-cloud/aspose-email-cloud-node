// @ts-ignore
import * as model from "./index";
/**
 * Request model for contactGetAsFile operation.
 */
export class ContactGetAsFileRequest {
    /**
     * Calendar document file name
     */
    public fileName: string;

    /**
     * File format Enum, available values: VCard, WebDav, Msg
     */
    public toFormat: string;

    /**
     * File format to convert from Enum, available values: VCard, WebDav, Msg
     */
    public fromFormat: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Request model for contactGetAsFile operation.
     * @param fileName Calendar document file name
     * @param toFormat File format Enum, available values: VCard, WebDav, Msg
     * @param fromFormat File format to convert from Enum, available values: VCard, WebDav, Msg
     * @param storage Storage name
     * @param folder Path to folder in storage
     */
    public constructor(
        fileName?: string, 
        toFormat?: string, 
        fromFormat?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.toFormat = toFormat;
        this.fromFormat = fromFormat;
        this.storage = storage;
        this.folder = folder;
    }
}

export class ContactGetAsFileRequestBuilder {
    private model: ContactGetAsFileRequest
    public constructor(model: ContactGetAsFileRequest) {
        this.model = model;
    }
    public build(): ContactGetAsFileRequest {
        return this.model;
    }
        public fileName(fileName: string): ContactGetAsFileRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public toFormat(toFormat: string): ContactGetAsFileRequestBuilder {
            this.model.toFormat = toFormat;
            return this;
        }
        public fromFormat(fromFormat: string): ContactGetAsFileRequestBuilder {
            this.model.fromFormat = fromFormat;
            return this;
        }
        public storage(storage: string): ContactGetAsFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public folder(folder: string): ContactGetAsFileRequestBuilder {
            this.model.folder = folder;
            return this;
        }
}
