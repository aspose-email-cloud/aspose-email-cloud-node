
// @ts-ignore
import * as model from "./index";
/**
 * Request model for clientThreadGetMessages operation.
 */
export class ClientThreadGetMessagesRequest {
    /**
     * Thread identifier
     */
    public threadId: string;

    /**
     * Email account
     */
    public account: string;

    /**
     * Specifies account folder to get thread from             
     */
    public folder: string;

    /**
     * Storage name where account file located
     */
    public storage: string;

    /**
     * Folder in storage where account file located
     */
    public accountStorageFolder: string;

    /**
     * Request model for clientThreadGetMessages operation.
     * @param threadId Thread identifier
     * @param account Email account
     * @param folder Specifies account folder to get thread from             
     * @param storage Storage name where account file located
     * @param accountStorageFolder Folder in storage where account file located
     */
    public constructor(
        threadId?: string, 
        account?: string, 
        folder?: string, 
        storage?: string, 
        accountStorageFolder?: string) {
        
        this.threadId = threadId;
        this.account = account;
        this.folder = folder;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
    }
}
