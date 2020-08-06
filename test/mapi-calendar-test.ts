import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import uuidv4 from "uuid/v4";
import {
    MapiCalendarAsFileRequest,
    MapiCalendarAttendeesDto,
    MapiCalendarDailyRecurrencePatternDto,
    MapiCalendarDto,
    MapiCalendarEventRecurrenceDto,
    MapiCalendarFromFileRequest,
    MapiCalendarGetRequest,
    MapiCalendarSaveRequest,
    MapiElectronicAddressDto,
    MapiRecipientDto,
    StorageFileLocation
} from "../src/model";


describe('MAPI calendar tests', function () {
    let td = suiteBase(this);

    it('Convert MAPI model to CalendarDto #pipeline', async () => {
        const mapiCalendarDto = getMapiCalendarDto();
        const calendarDto = await td.api().mapi.calendar.asCalendarDto(mapiCalendarDto);
        expect(mapiCalendarDto.subject).to.be.eq(calendarDto.summary);
        expect(mapiCalendarDto.location).to.be.eq(calendarDto.location);
    });

    it('Convert MAPI model to file #pipeline', async () => {
        const mapiCalendarDto = getMapiCalendarDto();
        const icsFile = await td.api().mapi.calendar.asFile(new MapiCalendarAsFileRequest('Ics', mapiCalendarDto));
        const icsString = icsFile.toString();
        expect(icsString).to.contain(mapiCalendarDto.location);
        const mapiCalendarDtoConverted = await td.api().mapi.calendar.fromFile(
            new MapiCalendarFromFileRequest(icsFile));
        expect(mapiCalendarDto.location).to.be.eq(mapiCalendarDtoConverted.location);
    });

    it('Mapi calendar storage test #pipeline', async () => {
        const mapiCalendarDto = getMapiCalendarDto();
        const fileName = uuidv4() + '.msg';
        await td.api().mapi.calendar.save(
            new MapiCalendarSaveRequest(new StorageFileLocation(td.storage(), td.folder(), fileName), mapiCalendarDto,
                'Msg'));
        const mapiCalendarFromStorage = await td.api().mapi.calendar.get(
            new MapiCalendarGetRequest(fileName, td.folder(), td.storage()));
        expect(mapiCalendarDto.location).to.be.eq(mapiCalendarFromStorage.location);
    });

    function getMapiCalendarDto(): MapiCalendarDto {
        const mapiCalendarDto = new MapiCalendarDto();
        const mapiRecipientDto = new MapiRecipientDto();
        mapiRecipientDto.addressType = "SMTP";
        mapiRecipientDto.displayName = "Attendee Name";
        mapiRecipientDto.emailAddress = "attendee@aspose.com";
        mapiRecipientDto.recipientType = "MapiTo";
        mapiCalendarDto.attendees = new MapiCalendarAttendeesDto([mapiRecipientDto]);
        mapiCalendarDto.clientIntent = ["Manager"];
        const recurrence = new MapiCalendarEventRecurrenceDto();
        const recurrencePatternDto = new MapiCalendarDailyRecurrencePatternDto();
        recurrencePatternDto.occurrenceCount = 10;
        recurrencePatternDto.weekStartDay = "Monday";
        recurrence.recurrencePattern = recurrencePatternDto;
        mapiCalendarDto.recurrence = recurrence;
        mapiCalendarDto.organizer = new MapiElectronicAddressDto(undefined, "organizer@aspose.com");
        mapiCalendarDto.busyStatus = "Tentative";
        mapiCalendarDto.startDate = td.getDate(undefined, 1);
        mapiCalendarDto.endDate = td.getDate(mapiCalendarDto.startDate, 1);
        mapiCalendarDto.location = "Some location";
        mapiCalendarDto.body = "Some description";
        mapiCalendarDto.bodyType = "PlainText";
        mapiCalendarDto.subject = "Some summary";
        return mapiCalendarDto;
    }
})
;