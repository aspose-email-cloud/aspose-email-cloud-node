// @ts-ignore
import * as model from "./index";
/**
 * Request model for emailGetList operation.
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
