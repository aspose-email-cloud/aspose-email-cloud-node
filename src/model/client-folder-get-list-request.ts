// @ts-ignore
import * as model from "./index";
/**
 * Request model for ClientFolderApi.getList operation.
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

export class ClientFolderGetListRequestBuilder {
    private model: ClientFolderGetListRequest
    public constructor(model: ClientFolderGetListRequest) {
        this.model = model;
    }
    public build(): ClientFolderGetListRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public account(account: string): ClientFolderGetListRequestBuilder {
            this.model.account = account;
            return this;
        }
        public storage(storage: string): ClientFolderGetListRequestBuilder {
            this.model.storage = storage;
            return this;
        }
        public accountStorageFolder(accountStorageFolder: string): ClientFolderGetListRequestBuilder {
            this.model.accountStorageFolder = accountStorageFolder;
            return this;
        }
        public parentFolder(parentFolder: string): ClientFolderGetListRequestBuilder {
            this.model.parentFolder = parentFolder;
            return this;
        }
}
