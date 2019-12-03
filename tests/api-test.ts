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