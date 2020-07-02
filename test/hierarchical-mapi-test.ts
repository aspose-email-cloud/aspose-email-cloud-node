import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";


describe('Hierarchical MAPI tests', function() {
    let td = suiteBase(this);

    it('Create MAPI file #pipeline', async function () {
        const fileName = uuidv4() + '.msg';
        await td.api().createMapi(new requests.CreateMapiRequest(
            fileName, new models.HierarchicalObjectRequest(
                new models.HierarchicalObject("IPM.Contact", undefined, [
                    new models.PrimitiveObject("Tag:'PidTagMessageClass':0x1A:String", undefined, "IPM.Contact"),
                    new models.PrimitiveObject("Tag:'PidTagSubject':0x37:String"),
                    new models.PrimitiveObject("Tag:'PidTagSubjectPrefix':0x3D:String"),
                    new models.PrimitiveObject("Tag:'PidTagMessageFlags':0xE07:Integer32", undefined, "8"),
                    new models.PrimitiveObject("Tag:'PidTagNormalizedSubject':0xE1D:String"),
                    new models.PrimitiveObject("Tag:'PidTagBody':0x1000:String"),
                    new models.PrimitiveObject("Tag:'PidTagStoreSupportMask':0x340D:Integer32", undefined, "265849"),
                    new models.PrimitiveObject("Tag:'PidTagSurname':0x3A11:String", undefined, "Surname"),
                    new models.PrimitiveObject("Tag:'PidTagOtherTelephoneNumber':0x3A1F:String", undefined,
                        "+79123456789"),
                    new models.PrimitiveObject("Tag:'':0x6662:Integer32", undefined, "0"),
                    new models.PrimitiveObject(
                        "Lid:'PidLidAddressBookProviderArrayType':0x8029:Integer32:00062004-0000-0000-c000-000000000046",
                        undefined, "1")
                ]),
                new models.StorageFolderLocation(td.storage(), td.folder()))));
        const exist = await td.api().objectExists(new requests.ObjectExistsRequest(td.folder() + "/" + fileName, td.storage()));
        expect(exist.body.exists).to.be.ok;
    });

    it('Add attachment to MAPI #pipeline', async function () {
        const fileName = await td.createCalendar();
        const attachmentName = await td.createCalendar();
        await td.api().addMapiAttachment(new requests.AddMapiAttachmentRequest(
            fileName, attachmentName, new models.AddAttachmentRequest(
                new models.StorageFolderLocation(td.storage(), td.folder()),
                new models.StorageFolderLocation(td.storage(), td.folder()))));
        const downloaded = await td.api().getCalendarAttachment(new requests.GetCalendarAttachmentRequest(
            fileName, attachmentName, td.folder(), td.storage()));
        const calendarRaw = downloaded.body.toString();
        expect(calendarRaw).to.contain('Aspose Ltd')
    });

    it('Get MAPI properties #pipeline', async function () {
        const fileName = await td.createCalendar();
        const properties = await td.api().getMapiProperties(new requests.GetMapiPropertiesRequest(
            fileName, td.folder(), td.storage()));
        expect(properties.body.hierarchicalObject.name).to.contain("IPM.Schedule");
    });
});