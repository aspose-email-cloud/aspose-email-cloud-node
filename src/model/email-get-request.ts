// @ts-ignore
import * as model from "./index";
/**
 * Request model for emailGet operation.
 */
export class EmailGetRequest {
    /**
     * Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Email document file name.
     */
    public fileName: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for emailGet operation.
     * @param format Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param fileName Email document file name.
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     */
    public constructor(
        format?: string, 
        fileName?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

export class EmailGetRequestBuilder {
    private model: EmailGetRequest
    public constructor(model: EmailGetRequest) {
        this.model = model;
    }
    public build(): EmailGetRequest {
        return this.model;
    }
        public format(format: string): EmailGetRequestBuilder {
            this.model.format = format;
            return this;
        }
        public fileName(fileName: string): EmailGetRequestBuilder {
            this.model.fileName = fileName;
            return this;
        }
        public folder(folder: string): EmailGetRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): EmailGetRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
