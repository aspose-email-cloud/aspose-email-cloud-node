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
