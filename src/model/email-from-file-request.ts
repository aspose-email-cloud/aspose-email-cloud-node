// @ts-ignore
import * as model from "./index";
/**
 * Request model for EmailApi.fromFile operation.
 */
export class EmailFromFileRequest {
    /**
     *  Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * File to convert
     */
    public file: Buffer;

    /**
     * Request model for emailFromFile operation.
     * @param format  Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param file File to convert
     */
    public constructor(
        format?: string, 
        file?: Buffer) {
        
        this.format = format;
        this.file = file;
    }
}

export class EmailFromFileRequestBuilder {
    private model: EmailFromFileRequest
    public constructor(model: EmailFromFileRequest) {
        this.model = model;
    }
    public build(): EmailFromFileRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public format(format: string): EmailFromFileRequestBuilder {
            this.model.format = format;
            return this;
        }
        public file(file: Buffer): EmailFromFileRequestBuilder {
            this.model.file = file;
            return this;
        }
}
