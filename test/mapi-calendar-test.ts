import * as requests from '../src/model/requests/requests';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import uuidv4 from "uuid/v4";


describe('MAPI calendar tests', function() {
    let td = suiteBase(this);

    it('Convert MAPI model to CalendarDto #pipeline', async () => {
        const mapiCalendarDto = getMapiCalendarDto();
        const calendarDto = await td.api().convertMapiCalendarModelToCalendarModel(
            new requests.ConvertMapiCalendarModelToCalendarModelRequest(mapiCalendarDto));
        expect(mapiCalendarDto.subject).to.be.eq(calendarDto.body.summary);
        expect(mapiCalendarDto.location).to.be.eq(calendarDto.body.location);
    });

    it('Convert MAPI model to file #pipeline', async () => {
        const mapiCalendarDto = getMapiCalendarDto();
        const icsFile = await td.api().convertMapiCalendarModelToFile(
            new requests.ConvertMapiCalendarModelToFileRequest('Ics', mapiCalendarDto));
        const icsString = icsFile.body.toString();
        expect(icsString).to.contain(mapiCalendarDto.location);
        const mapiCalendarDtoConverted = await td.api().getCalendarFileAsMapiModel(
            new requests.GetCalendarFileAsMapiModelRequest(icsFile.body));
        expect(mapiCalendarDto.location).to.be.eq(mapiCalendarDtoConverted.body.location);
    });

    it('Mapi calendar storage test #pipeline', async () => {
        const mapiCalendarDto = getMapiCalendarDto();
        const fileName = uuidv4() + '.msg';
        await td.api().saveMapiCalendarModel(
            new requests.SaveMapiCalendarModelRequest(fileName, "Msg",
                new models.StorageModelRqOfMapiCalendarDto(mapiCalendarDto, td.getStorageFolderLocation())));
        const mapiCalendarFromStorage = await td.api().getMapiCalendarModel(
            new requests.GetMapiCalendarModelRequest(fileName, td.folder(), td.storage()));
        expect(mapiCalendarDto.location).to.be.eq(mapiCalendarFromStorage.body.location);
    });

    function getMapiCalendarDto(): models.MapiCalendarDto {
        const mapiCalendarDto = new models.MapiCalendarDto();
        const mapiRecipientDto = new models.MapiRecipientDto();
        mapiRecipientDto.addressType = "SMTP";
        mapiRecipientDto.displayName = "Attendee Name";
        mapiRecipientDto.emailAddress = "attendee@aspose.com";
        mapiRecipientDto.recipientType = "MapiTo";
        mapiCalendarDto.attendees = new models.MapiCalendarAttendeesDto([mapiRecipientDto]);
        mapiCalendarDto.clientIntent = ["Manager"];
        const recurrence = new models.MapiCalendarEventRecurrenceDto();
        const recurrencePatternDto = new models.MapiCalendarDailyRecurrencePatternDto();
        recurrencePatternDto.occurrenceCount = 10;
        recurrencePatternDto.weekStartDay = "Monday";
        recurrence.recurrencePattern = recurrencePatternDto;
        mapiCalendarDto.recurrence = recurrence;
        mapiCalendarDto.organizer = new models.MapiElectronicAddressDto(undefined, "organizer@aspose.com");
        mapiCalendarDto.busyStatus = "Tentative";
        mapiCalendarDto.startDate = td.getDate(undefined, 1);
        mapiCalendarDto.endDate = td.getDate(mapiCalendarDto.startDate, 1);
        mapiCalendarDto.location = "Some location";
        mapiCalendarDto.body = "Some description";
        mapiCalendarDto.bodyType = "PlainText";
        mapiCalendarDto.subject = "Some summary";
        return mapiCalendarDto;
    }
});