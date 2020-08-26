// @ts-ignore
import * as model from "./index";
/**
 * Request model for clientMessageFetch operation.
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
     * Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef
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
     * @param format Base64 data format. Used only if type is set to Base64. Enum, available values: Eml, Msg, MsgUnicode, Mhtml, Html, Tnef
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
