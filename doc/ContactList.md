# ContactList

List of VCard documents             

## Properties
Name | Type | Description | Notes
---- | ---- | ----------- | -----

 Parent class: [ListResponseOfContactDto](ListResponseOfContactDto.md)


## Example
```typescript
let contactList = Models.contactList()
    .value([
        Models.contactDto()
            .attachments([
                Models.attachment()
                    .name('attachment.txt')
                    .base64Data('U29tZSBmaWxlIGNvbnRlbnQ=')
                    .build()])
            .displayName('Alex Thomas')
            .emailAddresses([
                Models.emailAddress()
                    .category(Models.enumWithCustom<EmailAddressCategory>()
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
                    .category(Models.enumWithCustom<PhoneNumberCategory>()
                        .value('Office')
                        .build())
                    .number('+49 211 4247 21')
                    .preferred(true)
                    .build()])
            .profession('GENERAL DIRECTOR')
            .surname('Thomas')
            .urls([
                Models.url()
                    .category(Models.enumWithCustom<UrlCategory>()
                        .value('Work')
                        .build())
                    .preferred(true)
                    .href('www.aspose.com')
                    .build()])
            .build()])
    .build();
```


[[Back to Model list]](README.md#documentation-for-models) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to README]](README.md)
