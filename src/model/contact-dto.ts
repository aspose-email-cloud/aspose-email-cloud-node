/*
* MIT License

* Copyright (c) 2018-2020 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

// @ts-ignore
import * as model from "./index";

/**
 * VCard document representation.             
 */
export class ContactDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "associatedPersons",
            baseName: "associatedPersons",
            type: "Array<AssociatedPerson>",
        },
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<Attachment>",
        },
        {
            name: "companyName",
            baseName: "companyName",
            type: "string",
        },
        {
            name: "computerNetworkName",
            baseName: "computerNetworkName",
            type: "string",
        },
        {
            name: "customerId",
            baseName: "customerId",
            type: "string",
        },
        {
            name: "departmentName",
            baseName: "departmentName",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "displayName",
            type: "string",
        },
        {
            name: "emailAddresses",
            baseName: "emailAddresses",
            type: "Array<EmailAddress>",
        },
        {
            name: "events",
            baseName: "events",
            type: "Array<CustomerEvent>",
        },
        {
            name: "fileAs",
            baseName: "fileAs",
            type: "string",
        },
        {
            name: "fileAsMapping",
            baseName: "fileAsMapping",
            type: "string",
        },
        {
            name: "freeBusyLocation",
            baseName: "freeBusyLocation",
            type: "string",
        },
        {
            name: "gender",
            baseName: "gender",
            type: "string",
        },
        {
            name: "givenName",
            baseName: "givenName",
            type: "string",
        },
        {
            name: "governmentIdNumber",
            baseName: "governmentIdNumber",
            type: "string",
        },
        {
            name: "hobbies",
            baseName: "hobbies",
            type: "string",
        },
        {
            name: "initials",
            baseName: "initials",
            type: "string",
        },
        {
            name: "instantMessengers",
            baseName: "instantMessengers",
            type: "Array<InstantMessengerAddress>",
        },
        {
            name: "jobTitle",
            baseName: "jobTitle",
            type: "string",
        },
        {
            name: "language",
            baseName: "language",
            type: "string",
        },
        {
            name: "location",
            baseName: "location",
            type: "string",
        },
        {
            name: "middleName",
            baseName: "middleName",
            type: "string",
        },
        {
            name: "nickname",
            baseName: "nickname",
            type: "string",
        },
        {
            name: "notes",
            baseName: "notes",
            type: "string",
        },
        {
            name: "notesFormat",
            baseName: "notesFormat",
            type: "string",
        },
        {
            name: "officeLocation",
            baseName: "officeLocation",
            type: "string",
        },
        {
            name: "organizationalIdNumber",
            baseName: "organizationalIdNumber",
            type: "string",
        },
        {
            name: "phoneNumbers",
            baseName: "phoneNumbers",
            type: "Array<PhoneNumber>",
        },
        {
            name: "photo",
            baseName: "photo",
            type: "ContactPhoto",
        },
        {
            name: "physicalAddresses",
            baseName: "physicalAddresses",
            type: "Array<PostalAddress>",
        },
        {
            name: "preferredTextEncoding",
            baseName: "preferredTextEncoding",
            type: "string",
        },
        {
            name: "prefix",
            baseName: "prefix",
            type: "string",
        },
        {
            name: "profession",
            baseName: "profession",
            type: "string",
        },
        {
            name: "suffix",
            baseName: "suffix",
            type: "string",
        },
        {
            name: "surname",
            baseName: "surname",
            type: "string",
        },
        {
            name: "urls",
            baseName: "urls",
            type: "Array<Url>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ContactDto.attributeTypeMap;
    }

    /**
     * Associated persons.             
     */
    public associatedPersons: Array< model.AssociatedPerson >;
    /**
     * Document attachments.             
     */
    public attachments: Array< model.Attachment >;
    /**
     * Company name.             
     */
    public companyName: string;
    /**
     * Computer network.             
     */
    public computerNetworkName: string;
    /**
     * Customer id.             
     */
    public customerId: string;
    /**
     * Department name.             
     */
    public departmentName: string;
    /**
     * Display name.             
     */
    public displayName: string;
    /**
     * Person's email addresses.             
     */
    public emailAddresses: Array< model.EmailAddress >;
    /**
     * Person's events.             
     */
    public events: Array< model.CustomerEvent >;
    /**
     * A name used for sorting.             
     */
    public fileAs: string;
    /**
     * Specifies how to generate and recompute the value of the dispidFileAs property when other contact name properties change. Coincides MS-OXPROPS revision 16.2 from 7/31/2014. Enum, available values: Empty, DisplayName, FirstName, LastName, Organization, LastFirstMiddle, OrgLastFirstMiddle, LastFirstMiddleOrg, LastFirstMiddle2, LastFirstMiddle3, OrgLastFirstMiddle2, OrgLastFirstMiddle3, LastFirstMiddleOrg2, LastFirstMiddleOrg3, LastFirstMiddleGen, FirstMiddleLastGen, LastFirstMiddleGen2, BestMatch, AccordingToLocale, None
     */
    public fileAsMapping: string;
    /**
     * URL path from which a client can retrieve free/busy information for the contact as an iCal file.             
     */
    public freeBusyLocation: string;
    /**
     * Enum defines gender of a person. Enum, available values: Unspecified, Female, Male
     */
    public gender: string;
    /**
     * Person's given name.             
     */
    public givenName: string;
    /**
     * Government id number.             
     */
    public governmentIdNumber: string;
    /**
     * Person's hobbies.             
     */
    public hobbies: string;
    /**
     * Person's initials.             
     */
    public initials: string;
    /**
     * Person's instant messenger addresses.             
     */
    public instantMessengers: Array< model.InstantMessengerAddress >;
    /**
     * Person's job title.             
     */
    public jobTitle: string;
    /**
     * Language.             
     */
    public language: string;
    /**
     * Person's location.             
     */
    public location: string;
    /**
     * Person's middle name.             
     */
    public middleName: string;
    /**
     * Person's nickname.             
     */
    public nickname: string;
    /**
     * Notes.             
     */
    public notes: string;
    /**
     * Defines format of a text. Enum, available values: Text, Html
     */
    public notesFormat: string;
    /**
     * Office location.             
     */
    public officeLocation: string;
    /**
     * Contains an identifier for the mail user used within the mail user's organization.             
     */
    public organizationalIdNumber: string;
    /**
     * Person's phone numbers.             
     */
    public phoneNumbers: Array< model.PhoneNumber >;
    /**
     * Person's photo.             
     */
    public photo: model.ContactPhoto;
    /**
     * Person's physical addresses.             
     */
    public physicalAddresses: Array< model.PostalAddress >;
    /**
     * Encoding for all text properties.             
     */
    public preferredTextEncoding: string;
    /**
     * A prefix of a full name such like Mr.(mister), Dr.(doctor) and so on.             
     */
    public prefix: string;
    /**
     * A job position of a person in a company.             
     */
    public profession: string;
    /**
     * A suffix of a full name such like Jr.(junior), Sr.(senior) and so on.             
     */
    public suffix: string;
    /**
     * Person's surname.             
     */
    public surname: string;
    /**
     * Person's urls.             
     */
    public urls: Array< model.Url >;

    /**
     * VCard document representation.             
     * @param associatedPersons Associated persons.             
     * @param attachments Document attachments.             
     * @param companyName Company name.             
     * @param computerNetworkName Computer network.             
     * @param customerId Customer id.             
     * @param departmentName Department name.             
     * @param displayName Display name.             
     * @param emailAddresses Person's email addresses.             
     * @param events Person's events.             
     * @param fileAs A name used for sorting.             
     * @param fileAsMapping Specifies how to generate and recompute the value of the dispidFileAs property when other contact name properties change. Coincides MS-OXPROPS revision 16.2 from 7/31/2014. Enum, available values: Empty, DisplayName, FirstName, LastName, Organization, LastFirstMiddle, OrgLastFirstMiddle, LastFirstMiddleOrg, LastFirstMiddle2, LastFirstMiddle3, OrgLastFirstMiddle2, OrgLastFirstMiddle3, LastFirstMiddleOrg2, LastFirstMiddleOrg3, LastFirstMiddleGen, FirstMiddleLastGen, LastFirstMiddleGen2, BestMatch, AccordingToLocale, None
     * @param freeBusyLocation URL path from which a client can retrieve free/busy information for the contact as an iCal file.             
     * @param gender Enum defines gender of a person. Enum, available values: Unspecified, Female, Male
     * @param givenName Person's given name.             
     * @param governmentIdNumber Government id number.             
     * @param hobbies Person's hobbies.             
     * @param initials Person's initials.             
     * @param instantMessengers Person's instant messenger addresses.             
     * @param jobTitle Person's job title.             
     * @param language Language.             
     * @param location Person's location.             
     * @param middleName Person's middle name.             
     * @param nickname Person's nickname.             
     * @param notes Notes.             
     * @param notesFormat Defines format of a text. Enum, available values: Text, Html
     * @param officeLocation Office location.             
     * @param organizationalIdNumber Contains an identifier for the mail user used within the mail user's organization.             
     * @param phoneNumbers Person's phone numbers.             
     * @param photo Person's photo.             
     * @param physicalAddresses Person's physical addresses.             
     * @param preferredTextEncoding Encoding for all text properties.             
     * @param prefix A prefix of a full name such like Mr.(mister), Dr.(doctor) and so on.             
     * @param profession A job position of a person in a company.             
     * @param suffix A suffix of a full name such like Jr.(junior), Sr.(senior) and so on.             
     * @param surname Person's surname.             
     * @param urls Person's urls.             
     */
    public constructor(
        
        associatedPersons?: Array< model.AssociatedPerson >,
        attachments?: Array< model.Attachment >,
        companyName?: string,
        computerNetworkName?: string,
        customerId?: string,
        departmentName?: string,
        displayName?: string,
        emailAddresses?: Array< model.EmailAddress >,
        events?: Array< model.CustomerEvent >,
        fileAs?: string,
        fileAsMapping?: string,
        freeBusyLocation?: string,
        gender?: string,
        givenName?: string,
        governmentIdNumber?: string,
        hobbies?: string,
        initials?: string,
        instantMessengers?: Array< model.InstantMessengerAddress >,
        jobTitle?: string,
        language?: string,
        location?: string,
        middleName?: string,
        nickname?: string,
        notes?: string,
        notesFormat?: string,
        officeLocation?: string,
        organizationalIdNumber?: string,
        phoneNumbers?: Array< model.PhoneNumber >,
        photo?: model.ContactPhoto,
        physicalAddresses?: Array< model.PostalAddress >,
        preferredTextEncoding?: string,
        prefix?: string,
        profession?: string,
        suffix?: string,
        surname?: string,
        urls?: Array< model.Url >
    ) {
        
        this.associatedPersons = associatedPersons;
        this.attachments = attachments;
        this.companyName = companyName;
        this.computerNetworkName = computerNetworkName;
        this.customerId = customerId;
        this.departmentName = departmentName;
        this.displayName = displayName;
        this.emailAddresses = emailAddresses;
        this.events = events;
        this.fileAs = fileAs;
        this.fileAsMapping = fileAsMapping;
        this.freeBusyLocation = freeBusyLocation;
        this.gender = gender;
        this.givenName = givenName;
        this.governmentIdNumber = governmentIdNumber;
        this.hobbies = hobbies;
        this.initials = initials;
        this.instantMessengers = instantMessengers;
        this.jobTitle = jobTitle;
        this.language = language;
        this.location = location;
        this.middleName = middleName;
        this.nickname = nickname;
        this.notes = notes;
        this.notesFormat = notesFormat;
        this.officeLocation = officeLocation;
        this.organizationalIdNumber = organizationalIdNumber;
        this.phoneNumbers = phoneNumbers;
        this.photo = photo;
        this.physicalAddresses = physicalAddresses;
        this.preferredTextEncoding = preferredTextEncoding;
        this.prefix = prefix;
        this.profession = profession;
        this.suffix = suffix;
        this.surname = surname;
        this.urls = urls;
        
    }
}

/**
 *  ContactDto model builder
 */
export class ContactDtoBuilder {
    private readonly model: ContactDto;
    public constructor(model: ContactDto) {
        this.model = model;
    }

    /**
     * Build model.
     */
    public build(): ContactDto {
        return this.model;
    }

    /**
    * Associated persons.             
    */
    public associatedPersons(associatedPersons: Array< model.AssociatedPerson >): ContactDtoBuilder {
        this.model.associatedPersons = associatedPersons;
        return this;
    }
    /**
    * Document attachments.             
    */
    public attachments(attachments: Array< model.Attachment >): ContactDtoBuilder {
        this.model.attachments = attachments;
        return this;
    }
    /**
    * Company name.             
    */
    public companyName(companyName: string): ContactDtoBuilder {
        this.model.companyName = companyName;
        return this;
    }
    /**
    * Computer network.             
    */
    public computerNetworkName(computerNetworkName: string): ContactDtoBuilder {
        this.model.computerNetworkName = computerNetworkName;
        return this;
    }
    /**
    * Customer id.             
    */
    public customerId(customerId: string): ContactDtoBuilder {
        this.model.customerId = customerId;
        return this;
    }
    /**
    * Department name.             
    */
    public departmentName(departmentName: string): ContactDtoBuilder {
        this.model.departmentName = departmentName;
        return this;
    }
    /**
    * Display name.             
    */
    public displayName(displayName: string): ContactDtoBuilder {
        this.model.displayName = displayName;
        return this;
    }
    /**
    * Person's email addresses.             
    */
    public emailAddresses(emailAddresses: Array< model.EmailAddress >): ContactDtoBuilder {
        this.model.emailAddresses = emailAddresses;
        return this;
    }
    /**
    * Person's events.             
    */
    public events(events: Array< model.CustomerEvent >): ContactDtoBuilder {
        this.model.events = events;
        return this;
    }
    /**
    * A name used for sorting.             
    */
    public fileAs(fileAs: string): ContactDtoBuilder {
        this.model.fileAs = fileAs;
        return this;
    }
    /**
    * Specifies how to generate and recompute the value of the dispidFileAs property when other contact name properties change. Coincides MS-OXPROPS revision 16.2 from 7/31/2014. Enum, available values: Empty, DisplayName, FirstName, LastName, Organization, LastFirstMiddle, OrgLastFirstMiddle, LastFirstMiddleOrg, LastFirstMiddle2, LastFirstMiddle3, OrgLastFirstMiddle2, OrgLastFirstMiddle3, LastFirstMiddleOrg2, LastFirstMiddleOrg3, LastFirstMiddleGen, FirstMiddleLastGen, LastFirstMiddleGen2, BestMatch, AccordingToLocale, None
    */
    public fileAsMapping(fileAsMapping: string): ContactDtoBuilder {
        this.model.fileAsMapping = fileAsMapping;
        return this;
    }
    /**
    * URL path from which a client can retrieve free/busy information for the contact as an iCal file.             
    */
    public freeBusyLocation(freeBusyLocation: string): ContactDtoBuilder {
        this.model.freeBusyLocation = freeBusyLocation;
        return this;
    }
    /**
    * Enum defines gender of a person. Enum, available values: Unspecified, Female, Male
    */
    public gender(gender: string): ContactDtoBuilder {
        this.model.gender = gender;
        return this;
    }
    /**
    * Person's given name.             
    */
    public givenName(givenName: string): ContactDtoBuilder {
        this.model.givenName = givenName;
        return this;
    }
    /**
    * Government id number.             
    */
    public governmentIdNumber(governmentIdNumber: string): ContactDtoBuilder {
        this.model.governmentIdNumber = governmentIdNumber;
        return this;
    }
    /**
    * Person's hobbies.             
    */
    public hobbies(hobbies: string): ContactDtoBuilder {
        this.model.hobbies = hobbies;
        return this;
    }
    /**
    * Person's initials.             
    */
    public initials(initials: string): ContactDtoBuilder {
        this.model.initials = initials;
        return this;
    }
    /**
    * Person's instant messenger addresses.             
    */
    public instantMessengers(instantMessengers: Array< model.InstantMessengerAddress >): ContactDtoBuilder {
        this.model.instantMessengers = instantMessengers;
        return this;
    }
    /**
    * Person's job title.             
    */
    public jobTitle(jobTitle: string): ContactDtoBuilder {
        this.model.jobTitle = jobTitle;
        return this;
    }
    /**
    * Language.             
    */
    public language(language: string): ContactDtoBuilder {
        this.model.language = language;
        return this;
    }
    /**
    * Person's location.             
    */
    public location(location: string): ContactDtoBuilder {
        this.model.location = location;
        return this;
    }
    /**
    * Person's middle name.             
    */
    public middleName(middleName: string): ContactDtoBuilder {
        this.model.middleName = middleName;
        return this;
    }
    /**
    * Person's nickname.             
    */
    public nickname(nickname: string): ContactDtoBuilder {
        this.model.nickname = nickname;
        return this;
    }
    /**
    * Notes.             
    */
    public notes(notes: string): ContactDtoBuilder {
        this.model.notes = notes;
        return this;
    }
    /**
    * Defines format of a text. Enum, available values: Text, Html
    */
    public notesFormat(notesFormat: string): ContactDtoBuilder {
        this.model.notesFormat = notesFormat;
        return this;
    }
    /**
    * Office location.             
    */
    public officeLocation(officeLocation: string): ContactDtoBuilder {
        this.model.officeLocation = officeLocation;
        return this;
    }
    /**
    * Contains an identifier for the mail user used within the mail user's organization.             
    */
    public organizationalIdNumber(organizationalIdNumber: string): ContactDtoBuilder {
        this.model.organizationalIdNumber = organizationalIdNumber;
        return this;
    }
    /**
    * Person's phone numbers.             
    */
    public phoneNumbers(phoneNumbers: Array< model.PhoneNumber >): ContactDtoBuilder {
        this.model.phoneNumbers = phoneNumbers;
        return this;
    }
    /**
    * Person's photo.             
    */
    public photo(photo: model.ContactPhoto): ContactDtoBuilder {
        this.model.photo = photo;
        return this;
    }
    /**
    * Person's physical addresses.             
    */
    public physicalAddresses(physicalAddresses: Array< model.PostalAddress >): ContactDtoBuilder {
        this.model.physicalAddresses = physicalAddresses;
        return this;
    }
    /**
    * Encoding for all text properties.             
    */
    public preferredTextEncoding(preferredTextEncoding: string): ContactDtoBuilder {
        this.model.preferredTextEncoding = preferredTextEncoding;
        return this;
    }
    /**
    * A prefix of a full name such like Mr.(mister), Dr.(doctor) and so on.             
    */
    public prefix(prefix: string): ContactDtoBuilder {
        this.model.prefix = prefix;
        return this;
    }
    /**
    * A job position of a person in a company.             
    */
    public profession(profession: string): ContactDtoBuilder {
        this.model.profession = profession;
        return this;
    }
    /**
    * A suffix of a full name such like Jr.(junior), Sr.(senior) and so on.             
    */
    public suffix(suffix: string): ContactDtoBuilder {
        this.model.suffix = suffix;
        return this;
    }
    /**
    * Person's surname.             
    */
    public surname(surname: string): ContactDtoBuilder {
        this.model.surname = surname;
        return this;
    }
    /**
    * Person's urls.             
    */
    public urls(urls: Array< model.Url >): ContactDtoBuilder {
        this.model.urls = urls;
        return this;
    }
}

