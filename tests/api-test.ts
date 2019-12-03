import { EmailApi } from '../src/api'
import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';

describe('EmailApi', function() {
    var api :EmailApi;
    var folder :string;
    var storage = 'First Storage';

    beforeAll(function() {
        api = new EmailApi(process.env.appSid, process.env.appKey, process.env.apiBaseUrl);
        folder = uuidv4();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    })

    it('HierarchicalObject', async function() {
        var calendarFile = await createCalendar();
        var calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        expect(calendar.body.name).toBe('CALENDAR');
        var filtered = calendar.body.internalProperties.filter(item => item.type == 'PrimitiveObject');
        expect(filtered.length).toBeGreaterThanOrEqual(3);
        var primitive = filtered[0] as models.PrimitiveObject;
        expect(primitive.value).toBeDefined();
    });

    it('FileTest', async function() {
        var calendarFile = await createCalendar();
        var path = folder + '/' + calendarFile;
        var downloaded = await api.downloadFile(new requests.DownloadFileRequest(path, storage));
        var calendarRaw = downloaded.body.toString()
        expect(calendarRaw).toContain('Organizer')
        await api.uploadFile(new requests.UploadFileRequest(path, downloaded.body, storage));
        var exist = await api.objectExists(new requests.ObjectExistsRequest(path, storage));
        expect(exist.body.exists).toBeTrue();
        var calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        var location = calendar.body.internalProperties
            .find(item => item.type == 'PrimitiveObject' && item.name == 'LOCATION') as models.PrimitiveObject;
        expect(location.value).toEqual('location');
    });

    it('Contact format', async function() {
        for(var format of ['VCard', 'Msg']) {
            var extension = (format == 'Msg') ? '.msg' : '.vcf';
            var fileName = uuidv4() + extension;
            await api.createContact(new requests.CreateContactRequest(
                format as 'VCard' | 'Msg',
                fileName,
                new models.HierarchicalObjectRequest(
                    new models.HierarchicalObject('CONTACT', undefined, []),
                    new models.StorageFolderLocation(storage, folder)
                )));
            var exists = await api.objectExists(new requests.ObjectExistsRequest(folder + '/' + fileName, storage));
            expect(exists.body.exists).toBeTrue();
        }
    });

    it('Date and time', async function() {
        var startDate = getDate(undefined, 24);
        startDate.setMilliseconds(0);
        var calendarFile = await createCalendar(startDate);
        var calendar = await api.getCalendar(new requests.GetCalendarRequest(calendarFile, folder, storage));
        var startDateProperty = calendar.body.internalProperties.find(item => item.name == 'STARTDATE') as models.PrimitiveObject;
        var factStartDate = new Date(startDateProperty.value);
        expect(factStartDate).toEqual(startDate);
    });

    async function createCalendar(startDate? : Date) :Promise<string> {
        var fileName = uuidv4() + '.ics';
        startDate = (startDate == null) ? getDate(undefined, 1) : startDate;
        var endDate = getDate(startDate, 1);
        await api.createCalendar(new requests.CreateCalendarRequest(
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
                new models.StorageFolderLocation(storage, folder)
            )
        ));
        return fileName;
    }

    function getDate(baseDate?: Date, addHours?:number) : Date {
        baseDate = (baseDate == null) ? new Date() : baseDate;
        addHours = (addHours == null) ? 0 : addHours;
        var hour = 60*60*1000;
        var result = new Date();
        result.setTime(baseDate.getTime() + addHours * hour);
        return result;
    }
  });