import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";

describe('Calendar tests', function() {
    let td = suiteBase(this);

    /*
     * HierarchicalObject serialization and deserialization test.
     * This test checks that BaseObject.Type field filled automatically by SDK
     * and properly used in serialization and deserialization
     */
    it('HierarchicalObject #pipeline', async function () {
        const calendarFile = await td.createCalendar();
        const calendar = await td.api().getCalendar(
            new requests.GetCalendarRequest(calendarFile, td.folder(), td.storage()));
        expect(calendar.body.name).to.be.equal('CALENDAR');
        const filtered = calendar.body.internalProperties.filter(item => item.type == 'PrimitiveObject');
        expect(filtered.length).to.be.at.least(3);
        const primitive = filtered[0] as models.PrimitiveObject;
        expect(primitive.value).to.not.be.undefined;
    });

    /**
     * Buffer support test
     */
    it('FileTest #pipeline', async function () {
        let calendarFile = await td.createCalendar();
        let path = td.folder() + '/' + calendarFile;
        const downloaded = await td.api().downloadFile(new requests.DownloadFileRequest(path, td.storage()));
        const calendarRaw = downloaded.body.toString();
        expect(calendarRaw).to.contain('Organizer')
        calendarFile = uuidv4() + '.ics'
        path = td.folder() + '/' + calendarFile;
        await td.api().uploadFile(new requests.UploadFileRequest(path, downloaded.body, td.storage()));
        const exist = await td.api().objectExists(new requests.ObjectExistsRequest(path, td.storage()));
        expect(exist.body.exists).to.be.ok;
        const calendar = await td.api().getCalendar(
            new requests.GetCalendarRequest(calendarFile, td.folder(), td.storage()));
        const location = calendar.body.internalProperties
            .find(item => item.type == 'PrimitiveObject' && item.name == 'LOCATION') as models.PrimitiveObject;
        expect(location.value).to.equal('location');
    });

    it('Check calendar converter #pipeline', async function () {
        const location = 'Some location';
        //Create DTO with specified location:
        let calendarDto = new models.CalendarDto();
        calendarDto.location = 'Some location';
        calendarDto.summary = 'Some summary';
        calendarDto.description = 'some description';
        calendarDto.startDate = td.getDate(undefined, 1);
        calendarDto.endDate = td.getDate(calendarDto.startDate, 1);
        calendarDto.organizer = new models.MailAddress('undefined', 'organizer@aspose.com');
        calendarDto.attendees = [new models.MailAddress('undefined', "attendee@aspose.com")];
        //We can convert this DTO to a MAPI or ICS file:
        let mapi = await td.api().convertCalendarModelToFile(new requests.ConvertCalendarModelToFileRequest(
            'Msg', calendarDto));
        //File content is available at mapi.body as a Buffer object
        //Let's convert this buffer to an ICS file:
        let ics = await td.api().convertCalendar(new requests.ConvertCalendarRequest(
            'Ics', mapi.body));
        //ICS is a text format. We can convert the buffer to a string and check that it
        //contains specified location as a substring:
        let icsString = ics.body.toString();
        expect(icsString).to.include(location);
        //We can also convert a file buffer back to a CalendarDto
        let dto = await td.api().getCalendarFileAsModel(new requests.GetCalendarFileAsModelRequest(ics.body));
        expect(dto.body.location).to.be.equal(location);
    });

    /**
     * Test Date serialization and deserialization.
     * Checks that SDK and Backend do not change Date during processing.
     * In most cases developer should carefully serialize and deserialize Date
     */
    it('Date #pipeline', async function () {
        const startDate = td.getDate(undefined, 24);
        startDate.setMilliseconds(0);
        const calendarFile = await td.createCalendar(startDate);
        const calendar = await td.api().getCalendar(
            new requests.GetCalendarRequest(calendarFile, td.folder(), td.storage()));
        const startDateProperty = calendar.body.internalProperties.find(
            item => item.name == 'STARTDATE') as models.PrimitiveObject;
        const factStartDate = new Date(startDateProperty.value);
        expect(factStartDate.getTime()).to.equal(startDate.getTime());
    });

    it('Create calendar email #pipeline', async function () {
        const calendar = new models.CalendarDto();
        calendar.attendees = [
            new models.MailAddress('Attendee Name', 'attendee@am.ru', 'Accepted')
        ];
        calendar.description = 'Some description';
        calendar.summary = 'Some summary';
        calendar.organizer = new models.MailAddress('Organizer Name', 'organizer@am.ru');
        calendar.startDate = td.getDate(undefined, 1);
        calendar.endDate = td.getDate(calendar.startDate, 1);
        calendar.location = 'Some location';
        const folderLocation = new models.StorageFolderLocation(td.storage(), td.folder());
        const calendarFile = uuidv4() + '.ics';
        await td.api().saveCalendarModel(
            new requests.SaveCalendarModelRequest(
                calendarFile,
                new models.StorageModelRqOfCalendarDto(
                    calendar,
                    folderLocation)));
        const exists = await td.api().objectExists(
            new requests.ObjectExistsRequest(td.folder() + '/' + calendarFile, td.storage()));
        expect(exists.body.exists).to.be.ok;

        const alternate = await td.api().convertCalendarModelToAlternate(
            new requests.ConvertCalendarModelToAlternateRequest(
                new models.CalendarDtoAlternateRq(calendar, 'Create')));

        const email = new models.EmailDto();
        email.alternateViews = [alternate.body];
        email.from = new models.MailAddress('From address', 'cloud.em@yandex.ru');
        email.to = [new models.MailAddress('To address', 'cloud.em@yandex.ru')];
        email.subject = 'Some subject';
        email.body = 'Some body';

        const emailFile = uuidv4() + '.eml';
        await td.api().saveEmailModel(
            new requests.SaveEmailModelRequest(
                'Eml', emailFile, new models.StorageModelRqOfEmailDto(
                    email, folderLocation)));

        const downloaded = await td.api().downloadFile(
            new requests.DownloadFileRequest(
                td.folder() + '/' + emailFile, td.storage()));
        const downloadedRaw = downloaded.body.toString();
        expect(downloadedRaw).to.contain('cloud.em@yandex.ru');
    });
});