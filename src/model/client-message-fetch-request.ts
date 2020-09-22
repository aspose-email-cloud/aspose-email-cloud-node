// @ts-ignore
import * as model from "./index";
/**
 * Request model for ClientMessageApi.fetch operation.
 */
export class ClientMessageFetchRequest {
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
     * MailMessageBase type. Using this property you can fetch message in different formats (as EmailDto, MapiMessageDto or a file represented as Base64 string).              Enum, available values: Dto, Mapi, Base64
     */
    public type: string;

    /**
     * Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Request model for clientMessageFetch operation.
     * @param messageId Message identifier
     * @param account Email account
     * @param folder Account folder to fetch from (should be specified for some protocols such as IMAP)             
     * @param storage Storage name where account file located.
     * @param accountStorageFolder Folder in storage where account file located.
     * @param type MailMessageBase type. Using this property you can fetch message in different formats (as EmailDto, MapiMessageDto or a file represented as Base64 string).              Enum, available values: Dto, Mapi, Base64
     * @param format Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public constructor(
        messageId?: string, 
        account?: string, 
        folder?: string, 
        storage?: string, 
        accountStorageFolder?: string, 
        type?: string, 
        format?: string) {
        
        this.messageId = messageId;
        this.account = account;
        this.folder = folder;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.type = type;
        this.format = format;
    }
}

export class ClientMessageFetchRequestBuilder {
    private model: ClientMessageFetchRequest
    public constructor(model: ClientMessageFetchRequest) {
        this.model = model;
    }
    public build(): ClientMessageFetchRequest {
        return this.model;
    }
        public messageId(messageId: string): ClientMessageFetchRequestBuilder {
            this.model.messageId = messageId;
            return this;
        }
        public account(account: string): ClientMessageFetchRequestBuilder {
            this.model.account = account;
            return this;
        }
        public folder(folder: string): ClientMessageFetchRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public storage(storage: string): ClientMessageFetchRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientMessageFetchRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public type(type: string): ClientMessageFetchRequestBuilder {
            this.model.type = type;
            return this;
        }
        public format(format: string): ClientMessageFetchRequestBuilder {
            this.model.format = format;
            return this;
        }
}
