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
