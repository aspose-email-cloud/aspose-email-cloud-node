import {EmailCloud} from "../src/api";
import uuidv4 from "uuid/v4";
import 'mocha';
import {Suite} from "mocha";
import {CreateFolderRequest, DeleteFolderRequest, StorageFolderLocation} from "../src/model";

class SuiteBase {
    public api: () => EmailCloud;
    public folder: () => string;
    public storage: () => string;
    constructor(getApi: () => EmailCloud, getFolder: () => string, getStorage: () => string) {
        this.api = getApi;
        this.folder = getFolder;
        this.storage = getStorage;
    }

    public getDate(baseDate?: Date, addHours?: number): Date {
        baseDate = (baseDate == null) ? new Date() : baseDate;
        addHours = (addHours == null) ? 0 : addHours;
        const hour = 60 * 60 * 1000;
        const result = new Date();
        result.setTime(baseDate.getTime() + addHours * hour);
        return result;
    }

    public getStorageFolderLocation(): StorageFolderLocation {
        return new StorageFolderLocation(this.storage(), this.folder());
    }
}

export function suiteBase(suite: Suite): SuiteBase {
    let api: EmailCloud;
    let folder: string;
    const storage = 'First Storage';
    suite.timeout(100000);
    suite.beforeAll(async () => {
        api = new EmailCloud(process.env.appSid, process.env.appKey, process.env.apiBaseUrl);
        const authUrl = process.env.authUrl;
        if (authUrl != null) api.configuration.authUrl = authUrl;
        folder = uuidv4();
        await api.cloudStorage.folder.createFolder(new CreateFolderRequest(folder, storage));
    });
    suite.afterAll(async () => {
        await api.cloudStorage.folder.deleteFolder(new DeleteFolderRequest(folder, storage, true));
    });

    return new SuiteBase(() => api, () => folder, () => storage);
}