// @ts-ignore
import * as model from "./index";
/**
 * Request model for clientMessageFetchFile operation.
 */
export class ClientMessageFetchFileRequest {
    /**
     * Message identifier
     */
    public messageId: string;

    /**
     * Email account
     */
    public account: string;

    /**
     * Account folder to fetch from (should be specified for some protocols such as IMAP)             
     */
    public folder: string;

    /**
     * Storage name where account file located.
     */
    public storage: string;

    /**
     * Folder in storage where account file located.
     */
    public accountStorageFolder: string;

    /**
     * Fetched message file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Request model for clientMessageFetchFile operation.
     * @param messageId Message identifier
     * @param account Email account
     * @param folder Account folder to fetch from (should be specified for some protocols such as IMAP)             
     * @param storage Storage name where account file located.
     * @param accountStorageFolder Folder in storage where account file located.
     * @param format Fetched message file format. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public constructor(
        messageId?: string, 
        account?: string, 
        folder?: string, 
        storage?: string, 
        accountStorageFolder?: string, 
        format?: string) {
        
        this.messageId = messageId;
        this.account = account;
        this.folder = folder;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.format = format;
    }
}

export class ClientMessageFetchFileRequestBuilder {
    private model: ClientMessageFetchFileRequest
    public constructor(model: ClientMessageFetchFileRequest) {
        this.model = model;
    }
    public build(): ClientMessageFetchFileRequest {
        return this.model;
    }
        public messageId(messageId: string): ClientMessageFetchFileRequestBuilder {
            this.model.messageId = messageId;
            return this;
        }
        public account(account: string): ClientMessageFetchFileRequestBuilder {
            this.model.account = account;
            return this;
        }
        public folder(folder: string): ClientMessageFetchFileRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ClientMessageFetchFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientMessageFetchFileRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public format(format: string): ClientMessageFetchFileRequestBuilder {
            this.model.format = format;
            return this;
        }
}
