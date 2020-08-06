import uuidv4 from 'uuid/v4';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import {
    CalendarAsAlternateRequest,
    CalendarAsFileRequest,
    CalendarConvertRequest,
    CalendarDto,
    CalendarFromFileRequest,
    CalendarSaveRequest,
    DailyRecurrencePatternDto,
    DownloadFileRequest,
    EmailDto,
    EmailSaveRequest,
    MailAddress,
    ObjectExistsRequest,
    StorageFileLocation
} from "..";

describe('Calendar tests', function () {
    let td = suiteBase(this);

    it('Check calendar converter #pipeline', async function () {
        //Create DTO with specified location:
        let calendarDto = getCalendarDto();
        //We can convert this DTO to a MAPI or ICS file:
        let mapi = await td.api().calendar.asFile(new CalendarAsFileRequest('Msg', calendarDto));
        //File content is available at mapi.body as a Buffer object
        //Let's convert this buffer to an ICS file:
        let ics = await td.api().calendar.convert(new CalendarConvertRequest('Ics', mapi));
        //ICS is a text format. We can convert the buffer to a string and check that it
        //contains specified location as a substring:
        let icsString = ics.toString();
        expect(icsString).to.include(calendarDto.location);
        //We can also convert a file buffer back to a CalendarDto
        let dto = await td.api().calendar.fromFile(new CalendarFromFileRequest(ics));
        expect(dto.location).to.be.equal(calendarDto.location);
    });

    it('Create calendar email #pipeline', async function () {
        const calendar = getCalendarDto();
        const calendarFile = uuidv4() + '.ics';
        await td.api().calendar.save(new CalendarSaveRequest(
            new StorageFileLocation(td.storage(), td.folder(), calendarFile), calendar));
        const exists = await td.api().cloudStorage.storage.objectExists(
            new ObjectExistsRequest(td.folder() + '/' + calendarFile, td.storage()));
        expect(exists.exists).to.be.ok;

        const alternate = await td.api().calendar.asAlternate(new CalendarAsAlternateRequest(calendar, 'Create'));

        const email = new EmailDto();
        email.alternateViews = [alternate];
        email.from = new MailAddress('From address', 'cloud.em@yandex.ru');
        email.to = [new MailAddress('To address', 'cloud.em@yandex.ru')];
        email.subject = 'Some subject';
        email.body = 'Some body';

        const emailFile = uuidv4() + '.eml';
        await td.api().email.save(
            new EmailSaveRequest(new StorageFileLocation(td.storage(), td.folder(), emailFile), email, 'Eml'));

        const downloaded = await td.api().cloudStorage.file.downloadFile(
            new DownloadFileRequest(td.folder() + '/' + emailFile, td.storage()));
        const downloadedRaw = downloaded.toString();
        expect(downloadedRaw).to.contain('cloud.em@yandex.ru');
    });

    it('Convert model to MapiModel #pipeline', async () => {
        const calendarDto = getCalendarDto();
        const mapiCalendarDto = await td.api().calendar.asMapi(calendarDto);
        expect(calendarDto.location).to.be.eq(mapiCalendarDto.location);
        expect('MapiCalendarDailyRecurrencePatternDto').to.be.eq(
            mapiCalendarDto.recurrence.recurrencePattern.discriminator);
    });

    function getCalendarDto(): CalendarDto {
        let calendar = new CalendarDto();
        calendar.attendees = [
            new MailAddress('Attendee Name', 'attendee@am.ru', 'Accepted')
        ];
        calendar.description = 'Some description';
        calendar.summary = 'Some summary';
        calendar.organizer = new MailAddress('Organizer Name', 'organizer@am.ru');
        calendar.startDate = td.getDate(undefined, 1);
        calendar.endDate = td.getDate(calendar.startDate, 1);
        calendar.location = 'Some location';
        calendar.recurrence = new DailyRecurrencePatternDto(undefined, 10, undefined, "Monday");
        return calendar;
    }
});