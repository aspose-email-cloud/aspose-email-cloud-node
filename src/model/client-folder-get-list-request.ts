// @ts-ignore
import * as model from "./index";
/**
 * Request model for clientFolderGetList operation.
 */
export class ClientFolderGetListRequest {
    /**
     * Email account
     */
    public account: string;

    /**
     * Storage name where account file located
     */
    public storage: string;

    /**
     * Folder in storage where account file located
     */
    public accountStorageFolder: string;

    /**
     * Folder in which subfolders should be listed
     */
    public parentFolder: string;

    /**
     * Request model for clientFolderGetList operation.
     * @param account Email account
     * @param storage Storage name where account file located
     * @param accountStorageFolder Folder in storage where account file located
     * @param parentFolder Folder in which subfolders should be listed
     */
    public constructor(
        account?: string, 
        storage?: string, 
        accountStorageFolder?: string, 
        parentFolder?: string) {
        
        this.account = account;
        this.storage = storage;
        this.accountStorageFolder = accountStorageFolder;
        this.parentFolder = parentFolder;
    }
}
