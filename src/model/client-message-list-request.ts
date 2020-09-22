// @ts-ignore
import * as model from "./index";
/**
 * Request model for clientMessageList operation.
 */
export class ClientMessageListRequest {
    /**
     * A folder in email account
     */
    public folder: string;

    /**
     * Email account
     */
    public account: string;

    /**
     * A MailQuery search string
     */
    public queryString: string;

    /**
     * Storage name where account file located
     */
    public storage: string;

    /**
     * Folder in storage where account file located
     */
    public accountStorageFolder: string;

    /**
     * Specifies that should message be searched in subfolders recursively
     */
    public recursive: boolean;

    /**
     * MailMessageBase type. Using this property you can get messages in different formats (as EmailDto, MapiMessageDto or a file represented as Base64 string).              Enum, available values: Dto, Mapi, Base64
     */
    public type: string;

    /**
     * Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public format: string;

    /**
     * Request model for clientMessageList operation.
     * @param folder A folder in email account
     * @param account Email account
     * @param queryString A MailQuery search string
     * @param storage Storage name where account file located
     * @param accountStorageFolder Folder in storage where account file located
     * @param recursive Specifies that should message be searched in subfolders recursively
     * @param type MailMessageBase type. Using this property you can get messages in different formats (as EmailDto, MapiMessageDto or a file represented as Base64 string).              Enum, available values: Dto, Mapi, Base64
     * @param format Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef, Oft
     */
    public constructor(
        folder?: string, 
        account?: string, 
        queryString?: string, 
        storage?: string, 
        accountStorageFolder?: string, 
        recursive?: boolean, 
        type?: string, 
        format?: string) {
        
        this.folder = folder;
        this.account = account;
        this.queryString = queryString;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.recursive = recursive;
        this.type = type;
        this.format = format;
    }
}

export class ClientMessageListRequestBuilder {
    private model: ClientMessageListRequest
    public constructor(model: ClientMessageListRequest) {
        this.model = model;
    }
    public build(): ClientMessageListRequest {
        return this.model;
    }
        public folder(folder: string): ClientMessageListRequestBuilder {
            this.model.folder = folder;
            return this;
        }
        public account(account: string): ClientMessageListRequestBuilder {
            this.model.account = account;
            return this;
        }
        public queryString(queryString: string): ClientMessageListRequestBuilder {
            this.model.queryString = queryString;
            return this;
        }
        public storage(storage: string): ClientMessageListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientMessageListRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public recursive(recursive: boolean): ClientMessageListRequestBuilder {
            this.model.recursive = recursive;
            return this;
        }
        public type(type: string): ClientMessageListRequestBuilder {
            this.model.type = type;
            return this;
        }
        public format(format: string): ClientMessageListRequestBuilder {
            this.model.format = format;
            return this;
        }
}
