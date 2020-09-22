// @ts-ignore
import * as model from "./index";
/**
 * Request model for ContactApi.getList operation.
 */
export class ContactGetListRequest {
    /**
     * Contact document format. Enum, available values: VCard, WebDav, Msg
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
     * Request model for contactGetList operation.
     * @param format Contact document format. Enum, available values: VCard, WebDav, Msg
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

export class ContactGetListRequestBuilder {
    private model: ContactGetListRequest
    public constructor(model: ContactGetListRequest) {
        this.model = model;
    }
    public build(): ContactGetListRequest {
        return this.model;
    }
        public format(format: string): ContactGetListRequestBuilder {
            this.model.format = format;
            return this;
        }
        public folder(folder: string): ContactGetListRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ContactGetListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public itemsPerPage(itemsPerPage: number): ContactGetListRequestBuilder {
            this.model.itemsPerPage = itemsPerPage;
            return this;
        }
        public pageNumber(pageNumber: number): ContactGetListRequestBuilder {
            this.model.pageNumber = pageNumber;
            return this;
        }
}
