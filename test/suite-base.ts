import {EmailApi} from "../src/api";
import uuidv4 from "uuid/v4";
import * as requests from "../src/model/requests/requests";
import 'mocha';
import * as models from "../src/model/model";
import {Suite} from "mocha";

class SuiteBase {
    public api: () => EmailApi;
    public folder: () => string;
    public storage: () => string;
    constructor(getApi: () => EmailApi, getFolder: () => string, getStorage: () => string) {
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

    public async createCalendar(startDate?: Date): Promise<string> {
        const fileName = uuidv4() + '.ics';
        startDate = (startDate == null) ? this.getDate(undefined, 1) : startDate;
        const endDate = this.getDate(startDate, 1);
        await this.api().createCalendar(new requests.CreateCalendarRequest(
            fileName,
            new models.HierarchicalObjectRequest(
                new models.HierarchicalObject(
                    'CALENDAR',
                    undefined, [
                        new models.PrimitiveObject("LOCATION", undefined, "location"),
                        new models.PrimitiveObject("STARTDATE", undefined, startDate.toUTCString()),
                        new models.PrimitiveObject("ENDDATE", undefined, endDate.toUTCString()),
                        new models.HierarchicalObject("ORGANIZER", undefined, [
                            new models.PrimitiveObject("ADDRESS", undefined, "organizer@am.ru"),
                            new models.PrimitiveObject("DISPLAYNAME", undefined, "Organizer Name")
                        ]),
                        new models.HierarchicalObject("ATTENDEES", undefined, [
                            new models.IndexedHierarchicalObject("ATTENDEE", undefined, 0, [
                                new models.PrimitiveObject("ADDRESS", undefined, "attendee@am.ru"),
                                new models.PrimitiveObject("DISPLAYNAME", undefined, "Attendee Name")
                            ])
                        ])]
                ),
                new models.StorageFolderLocation(this.storage(), this.folder())
            )
        ));
        return fileName;
    }

    public getStorageFolderLocation(): models.StorageFolderLocation {
        return new models.StorageFolderLocation(this.storage(), this.folder());
    }
}

export function suiteBase(suite: Suite): SuiteBase {
    let api: EmailApi;
    let folder: string;
    const storage = 'First Storage';
    suite.timeout(100000);
    suite.beforeAll(async () => {
        api = new EmailApi(process.env.appSid, process.env.appKey, process.env.apiBaseUrl);
        const authUrl = process.env.authUrl;
        if (authUrl != null) api.configuration.authUrl = authUrl;
        folder = uuidv4();
        await api.createFolder(new requests.CreateFolderRequest(folder, storage));
    });
    suite.afterAll(async () => {
        await api.deleteFolder(new requests.DeleteFolderRequest(folder, storage, true));
    });

    return new SuiteBase(() => api, () => folder, () => storage);
}