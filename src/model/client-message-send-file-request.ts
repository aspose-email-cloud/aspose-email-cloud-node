// @ts-ignore
import * as model from "./index";
/**
 * Request model for clientMessageSendFile operation.
 */
export class ClientMessageSendFileRequest {
    /**
     * Email account
     */
    public account: string;

    /**
     * File to send
     */
    public file: Buffer;

    /**
     * Storage name where account file located.
     */
    public storage: string;

    /**
     * Folder in storage where account file located.
     */
    public accountStorageFolder: string;

    /**
     * Email file format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Request model for clientMessageSendFile operation.
     * @param account Email account
     * @param file File to send
     * @param storage Storage name where account file located.
     * @param accountStorageFolder Folder in storage where account file located.
     * @param format Email file format Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public constructor(
        account?: string, 
        file?: Buffer, 
        storage?: string, 
        accountStorageFolder?: string, 
        format?: string) {
        
        this.account = account;
        this.file = file;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.format = format;
    }
}

export class ClientMessageSendFileRequestBuilder {
    private model: ClientMessageSendFileRequest
    public constructor(model: ClientMessageSendFileRequest) {
        this.model = model;
    }
    public build(): ClientMessageSendFileRequest {
        return this.model;
    }
        public account(account: string): ClientMessageSendFileRequestBuilder {
            this.model.account = account;
            return this;
        }
        public file(file: Buffer): ClientMessageSendFileRequestBuilder {
            this.model.file = file;
            return this;
        }
        public storage(storage: string): ClientMessageSendFileRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientMessageSendFileRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public format(format: string): ClientMessageSendFileRequestBuilder {
            this.model.format = format;
            return this;
        }
}
