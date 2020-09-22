// @ts-ignore
import * as model from "./index";
/**
 * Request model for CalendarApi.getList operation.
 */
export class CalendarGetListRequest {
    /**
     * Path to folder in storage.
     */
    public folder: string;

    /**
     * Count of items on page.
     */
    public itemsPerPage: number;

    /**
     * Page number.
     */
    public pageNumber: number;

    /**
     * Storage name.
     */
    public storage: string;

    /**
     * Request model for calendarGetList operation.
     * @param folder Path to folder in storage.
     * @param itemsPerPage Count of items on page.
     * @param pageNumber Page number.
     * @param storage Storage name.
     */
    public constructor(
        folder?: string, 
        itemsPerPage?: number, 
        pageNumber?: number, 
        storage?: string) {
        
        this.folder = folder;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
        this.storage = storage;
    }
}

export class CalendarGetListRequestBuilder {
    private model: CalendarGetListRequest
    public constructor(model: CalendarGetListRequest) {
        this.model = model;
    }
    public build(): CalendarGetListRequest {
        return this.model;
    }
        public folder(folder: string): CalendarGetListRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public itemsPerPage(itemsPerPage: number): CalendarGetListRequestBuilder {
            this.model.itemsPerPage = itemsPerPage;
            return this;
        }
        public pageNumber(pageNumber: number): CalendarGetListRequestBuilder {
            this.model.pageNumber = pageNumber;
            return this;
        }
        public storage(storage: string): CalendarGetListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
}
