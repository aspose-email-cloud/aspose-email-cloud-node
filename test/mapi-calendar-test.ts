import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import uuidv4 from "uuid/v4";
import {
    Models,
    MapiCalendarAsFileRequest,
    MapiCalendarAttendeesDto,
    MapiCalendarDailyRecurrencePatternDto,
    MapiCalendarDto,
    MapiCalendarEventRecurrenceDto,
    MapiCalendarFromFileRequest,
    MapiElectronicAddressDto,
    MapiRecipientDto
} from "..";


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
            Models.mapiCalendarSaveRequest()
                .storageFile(Models.storageFileLocation()
                    .storage(td.storage())
                    .folderPath(td.folder())
                    .fileName(fileName)
                    .build())
                .format('Msg')
                .value(mapiCalendarDto)
                .build());
        const mapiCalendarFromStorage = await td.api().mapi.calendar.get(
            Models.mapiCalendarGetRequest()
                .fileName(fileName)
                .folder(td.folder())
                .storage(td.storage())
                .build());
        expect(mapiCalendarDto.location).to.be.eq(mapiCalendarFromStorage.location);
    });

    function getMapiCalendarDto(): MapiCalendarDto {
        return Models.mapiCalendarDto()
            .attendees(Models.mapiCalendarAttendeesDto()
                .appointmentRecipients([
                    Models.mapiRecipientDto()
                        .emailAddress('organizer@aspose.com')
                        .addressType('SMTP')
                        .displayName('Organizer Name')
                        .recipientType('MapiTo')
                        .build(),
                    Models.mapiRecipientDto()
                        .emailAddress('attendee@aspose.com')
                        .addressType('SMTP')
                        .displayName('Attendee Name')
                        .recipientType('MapiTo')
                        .build()])
                .build())
            .busyStatus('Tentative')
            .clientIntent([
                'Manager'])
            .endDate(new Date())
            .location('Some location')
            .recurrence(Models.mapiCalendarEventRecurrenceDto()
                .recurrencePattern(Models.mapiCalendarRecurrencePatternDto()
                    .frequency('Daily')
                    .occurrenceCount(10)
                    .weekStartDay('Monday')
                    .build())
                .build())
            .startDate(new Date())
            .organizer(Models.mapiElectronicAddressDto()
                .emailAddress('organizer@aspose.com')
                .build())
            .body('Some description')
            .subject('Some summary')
            .build();
    }
})
;