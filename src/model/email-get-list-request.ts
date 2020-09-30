// @ts-ignore
import * as model from "./index";
/**
 * Request model for EmailApi.getList operation.
 */
export class EmailGetListRequest {
    /**
     * Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Count of items on page.
     */
    public itemsPerPage: number;

    /**
     * Page number.
     */
    public pageNumber: number;

    /**
     * Request model for emailGetList operation.
     * @param format Email document format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     * @param folder Path to folder in storage.
     * @param storage Storage name.
     * @param itemsPerPage Count of items on page.
     * @param pageNumber Page number.
     */
    public constructor(
        format?: string, 
        folder?: string, 
        storage?: string, 
        itemsPerPage?: number, 
        pageNumber?: number) {
        
        this.format = format;
        this.folder = folder;
        this.storage = storage;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
    }
}

export class EmailGetListRequestBuilder {
    private model: EmailGetListRequest
    public constructor(model: EmailGetListRequest) {
        this.model = model;
    }
    public build(): EmailGetListRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public format(format: string): EmailGetListRequestBuilder {
            this.model.format = format;
            return this;
        }
        public folder(folder: string): EmailGetListRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): EmailGetListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public itemsPerPage(itemsPerPage: number): EmailGetListRequestBuilder {
            this.model.itemsPerPage = itemsPerPage;
            return this;
        }
        public pageNumber(pageNumber: number): EmailGetListRequestBuilder {
            this.model.pageNumber = pageNumber;
            return this;
        }
}
