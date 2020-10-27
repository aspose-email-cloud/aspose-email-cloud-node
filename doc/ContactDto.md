# ContactDto

VCard document representation.             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----
**associatedPersons** | [**Array&lt;AssociatedPerson&gt;**](AssociatedPerson.md) | Associated persons.              | [optional] [default to undefined]
**attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) | Document attachments.              | [optional] [default to undefined]
**companyName** | **string** | Company name.              | [optional] [default to undefined]
**computerNetworkName** | **string** | Computer network.              | [optional] [default to undefined]
**customerId** | **string** | Customer id.              | [optional] [default to undefined]
**departmentName** | **string** | Department name.              | [optional] [default to undefined]
**displayName** | **string** | Display name.              | [optional] [default to undefined]
**emailAddresses** | [**Array&lt;EmailAddress&gt;**](EmailAddress.md) | Person's email addresses.              | [optional] [default to undefined]
**events** | [**Array&lt;CustomerEvent&gt;**](CustomerEvent.md) | Person's events.              | [optional] [default to undefined]
**fileAs** | **string** | A name used for sorting.              | [optional] [default to undefined]
**fileAsMapping** | **string** | Specifies how to generate and recompute the value of the dispidFileAs property when other contact name properties change. Coincides MS-OXPROPS revision 16.2 from 7/31/2014. Enum, available values: Empty, DisplayName, FirstName, LastName, Organization, LastFirstMiddle, OrgLastFirstMiddle, LastFirstMiddleOrg, LastFirstMiddle2, LastFirstMiddle3, OrgLastFirstMiddle2, OrgLastFirstMiddle3, LastFirstMiddleOrg2, LastFirstMiddleOrg3, LastFirstMiddleGen, FirstMiddleLastGen, LastFirstMiddleGen2, BestMatch, AccordingToLocale, None | [default to undefined]
**freeBusyLocation** | **string** | URL path from which a client can retrieve free/busy information for the contact as an iCal file.              | [optional] [default to undefined]
**gender** | **string** | Enum defines gender of a person. Enum, available values: Unspecified, Female, Male | [default to undefined]
**givenName** | **string** | Person's given name.              | [optional] [default to undefined]
**governmentIdNumber** | **string** | Government id number.              | [optional] [default to undefined]
**hobbies** | **string** | Person's hobbies.              | [optional] [default to undefined]
**initials** | **string** | Person's initials.              | [optional] [default to undefined]
**instantMessengers** | [**Array&lt;InstantMessengerAddress&gt;**](InstantMessengerAddress.md) | Person's instant messenger addresses.              | [optional] [default to undefined]
**jobTitle** | **string** | Person's job title.              | [optional] [default to undefined]
**language** | **string** | Language.              | [optional] [default to undefined]
**location** | **string** | Person's location.              | [optional] [default to undefined]
**middleName** | **string** | Person's middle name.              | [optional] [default to undefined]
**nickname** | **string** | Person's nickname.              | [optional] [default to undefined]
**notes** | **string** | Notes.              | [optional] [default to undefined]
**notesFormat** | **string** | Defines format of a text. Enum, available values: Text, Html | [default to undefined]
**officeLocation** | **string** | Office location.              | [optional] [default to undefined]
**organizationalIdNumber** | **string** | Contains an identifier for the mail user used within the mail user's organization.              | [optional] [default to undefined]
**phoneNumbers** | [**Array&lt;PhoneNumber&gt;**](PhoneNumber.md) | Person's phone numbers.              | [optional] [default to undefined]
**photo** | [**ContactPhoto**](ContactPhoto.md) | Person's photo.              | [optional] [default to undefined]
**physicalAddresses** | [**Array&lt;PostalAddress&gt;**](PostalAddress.md) | Person's physical addresses.              | [optional] [default to undefined]
**preferredTextEncoding** | **string** | Encoding for all text properties.              | [optional] [default to undefined]
**prefix** | **string** | A prefix of a full name such like Mr.(mister), Dr.(doctor) and so on.              | [optional] [default to undefined]
**profession** | **string** | A job position of a person in a company.              | [optional] [default to undefined]
**suffix** | **string** | A suffix of a full name such like Jr.(junior), Sr.(senior) and so on.              | [optional] [default to undefined]
**surname** | **string** | Person's surname.              | [optional] [default to undefined]
**urls** | [**Array&lt;Url&gt;**](Url.md) | Person's urls.              | [optional] [default to undefined]


## Example
```typescript
let contactDto = Models.contactDto()
    .attachments([
        Models.attachment()
            .name('attachment.txt')
            .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
            .build()])
    .displayName('Alex Thomas')
    .emailAddresses([
        Models.emailAddress()
            .category(Models.enumWithCustomOfEmailAddressCategory()
                .value('Custom')
                .description('Partners')
                .build())
            .displayName('Alex Thomas Partners')
            .preferred(true)
            .address('email@aspose.com')
            .build()])
    .gender('Male')
    .givenName('Alex')
    .phoneNumbers([
        Models.phoneNumber()
            .category(Models.enumWithCustomOfPhoneNumberCategory()
                .value('Office')
                .build())
            .number('+49 211 4247 21')
            .preferred(true)
            .build()])
    .profession('GENERAL DIRECTOR')
    .surname('Thomas')
    .urls([
        Models.url()
            .category(Models.enumWithCustomOfUrlCategory()
                .value('Work')
                .build())
            .preferred(true)
            .href('www.aspose.com')
            .build()])
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
