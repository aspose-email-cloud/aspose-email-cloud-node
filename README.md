# Aspose.Email Cloud SDK for Node.Js [![npm](https://img.shields.io/npm/v/@asposecloud/aspose-email-cloud)](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud) [![License](https://img.shields.io/github/license/aspose-email-cloud/aspose-email-cloud-node)](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud) [![node](https://img.shields.io/node/v/@asposecloud/aspose-email-cloud)](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud)  [![types](https://img.shields.io/npm/types/@asposecloud/aspose-email-cloud)](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud) ![tests](https://github.com/aspose-email-cloud/aspose-email-cloud-node/workflows/tests/badge.svg)
This repository contains Aspose.Email Cloud SDK for Node.Js source code. This SDK allows you to work with Aspose.Email Cloud REST APIs in your Node.Js applications quickly and easily, with zero initial cost.

[Aspose.Email Cloud home](https://products.aspose.cloud/email/family "Aspose.Email Cloud")  
[API Reference](https://apireference.aspose.cloud/email/)  

# Key features

Aspose.Email Cloud is a REST API for creating email applications that work with standard email file formats. This SDK:
- Lets developers manipulate different emails’ formats such as Outlook MSG, EML, VCard, and iCalendar files
- Has a built-in email client
- Supports AI functionalities:
    - The Business card recognition
    - The Name API for parsing and handling personal names

## How to use the SDK?
The complete source code is available in the GIT repository.
Use [reference documentation](https://github.com/aspose-email-cloud/aspose-email-cloud-node/blob/master/doc/README.md), [examples from this document](#usage-examples) and [wiki](https://github.com/aspose-email-cloud/aspose-email-cloud-node/wiki).

### Prerequisites
To use this SDK, you need an App SID and an App Key; they can be looked up at [Aspose Cloud Dashboard](https://dashboard.aspose.cloud/#/apps) (it requires free registration in Aspose Cloud for this).

### Installation
You can use it directly in your project via the source code or get a [npm package](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud)
From the command line:

	npm install @asposecloud/aspose-email-cloud --save

### Usage examples
To use the API, you should create an EmailApi object:
```typescript
var appKey = "Your App Key";
var appSid = "Your App SID";
var api = new EmailApi(appSid, appKey);
```

#### Business cards recognition API
See examples below:

<details open>
    <summary>Parse business card images to VCard contact files</summary>

```typescript
var folder = 'some/folder/on/storage';
var storage = 'First Storage'; //Your storage name
var imageData = fs.readFileSync('some/business/card/image/file/on/disk');
var storageFileName = 'someFileName.png'; //Supports different image formats: PNG, JPEG, BMP, TIFF, GIF, etc.
// Upload business card image to storage
await api.uploadFile(new requests.UploadFileRequest(folder + '/' + storageFileName, imageData, storage));
var outFolder = 'some/other/folder/on/storage'; //Business card recognition results will be saved here
await api.createFolder(new requests.CreateFolderRequest(outFolder, storage));
// Call business card recognition action
var result = await api.aiBcrParseStorage(
    new requests.AiBcrParseStorageRequest(new models.AiBcrParseStorageRq(
        null,
        [new models.AiBcrImageStorageFile( //We can process multiple images in one request
            true, //the image contains only one business card (you can upload image with multiple cards on it)
            new models.StorageFileLocation(storage, folder, storageFileName))],
        new models.StorageFolderLocation(storage, outFolder))));
// Get file name from recognition result
var contactFile = result.body.value[0]; //result.body.value can contain multiple files, if we sent multicard images or multiple images
// You can download the VCard file, which produced by the recognition method ...
var contactBinary = await api.downloadFile(new requests.DownloadFileRequest(
    contactFile.folderPath + '/' + contactFile.fileName, storage));
// ... and print it to console
console.log(contactBinary.body.toString());
// Also, you can get VCard object properties’ list using Contact API
var contactProperties = await api.getContactProperties(new requests.GetContactPropertiesRequest(
    'vcard', contactFile.fileName, contactFile.folderPath, contactFile.storage));
//All VCard’s properties are available as a list. Complex properties are represented as hierarchical structures.
//Let's print all primitive properties’ values:
contactProperties.body.internalProperties
    .filter(property => property.type == 'PrimitiveObject')
    .map(property => property as models.PrimitiveObject)
    .forEach(property =>
        console.log('Property name:' + property.name + ' value:' + property.value));
```
</details>

<details>
    <summary>Parse images directly, without the using of a storage</summary>

```typescript
//Read image from file and convert it to Base64 string
var imageData = fs.readFileSync('some/business/card/image/file/on/disk').toString('base64');
var result = await api.aiBcrParse(new requests.AiBcrParseRequest(
    new models.AiBcrBase64Rq(undefined, [new models.AiBcrBase64Image(true, imageData)])));
//Result contains all recognized VCard objects (only the one in our case)
var contactProperties = result.body.value[0];
//VCard object is available as a list of properties, without any external calls:
contactProperties.internalProperties
    .filter(property => property.type == 'PrimitiveObject')
    .map(property => property as models.PrimitiveObject)
    .forEach(property =>
        console.log('Property name:' + property.name + ' value:' + property.value));
```
</details>

#### Name API
See examples below:
<details open>
    <summary>Detect a person's gender by name</summary>

```typescript
var result = await api.aiNameGenderize(new requests.AiNameGenderizeRequest('John Cane'));
//the result contains a list of hypothesis about a person's gender.
//all hypothesis include score, so you can use the most scored version, which will be the first in a list:
console.log(result.body.value[0].gender); //prints 'Male'
```
</details>

<details>
    <summary>Format person's name using defined format</summary>

```typescript
var result = await api.aiNameFormat(new requests.AiNameFormatRequest(
    'Mr. John Michael Cane', undefined, undefined, undefined, undefined, '%t%L%f%m'));
console.log(result.body.name); //prints 'Mr. Cane J. M.'
```
</details>

<details>
    <summary>Compare the names to find out if they belong to the same person or not</summary>

```typescript
var first = 'John Michael Cane';
var second = 'Cane J.';
var result = await api.aiNameMatch(new requests.AiNameMatchRequest(
    first, second));
console.log(result.body.similarity > 0.5); //prints 'true', names look similar
```
</details>

<details>
    <summary>Expand a person's name into a list of possible alternatives</summary>

```typescript
var result = await api.aiNameExpand(new requests.AiNameExpandRequest(
    'Smith Bobby'));
var names = result.body.names
    .map(weighted => weighted.name)
    .forEach(name => console.log(name)); //prints 'Mr. Smith', 'B. Smith', etc.
```
</details>

<details>
    <summary>Get k most probable names for given starting characters</summary>

```typescript
var prefix = 'Dav';
var result = await api.aiNameComplete(new requests.AiNameCompleteRequest(
    prefix));
var names = result.body.names
    .map(weighted => prefix + weighted.name)
    .forEach(name => console.log(name)); //prints 'David', 'Dave', 'Davis', etc.
```
</details>

<details>
    <summary>Parse out a person's name from an email address.</summary>

```typescript
var result = await api.aiNameParseEmailAddress(new requests.AiNameParseEmailAddressRequest(
    'john-cane@gmail.com'));
var extractedValues = result.body.value
    .map(extracted => extracted.name)
    .reduce((accumulator, value) => accumulator.concat(value));
var givenName = extractedValues.find(extracted => extracted.category == 'GivenName');
var surname = extractedValues.find(extracted => extracted.category == 'Surname');
console.log(givenName.value); // 'John'
console.log(surname.value); // 'Cane'
```
</details>

# Licensing
All Aspose.Email Cloud SDKs, helper scripts and templates are licensed under [MIT License](LICENSE).

# Resources
+ [**SDK reference documentation**](doc/README.md)
+ [**Website**](https://www.aspose.cloud)
+ [**Product Home**](https://products.aspose.cloud/Email/cloud)
+ [**Documentation**](https://docs.aspose.cloud/display/Emailcloud/Home)
+ [**API Reference**](https://apireference.aspose.cloud/email/)
+ [**Free Support Forum**](https://forum.aspose.cloud/c/email)
+ [**Paid Support Helpdesk**](https://helpdesk.aspose.cloud/)
+ [**Blog**](https://blog.aspose.cloud/category/aspose-products/aspose-email-cloud/)
+ [**Git repository: Aspose.Email Cloud SDK for .Net**](https://github.com/aspose-email-cloud/aspose-email-cloud-dotnet)
+ [**Git repository: Aspose.Email Cloud SDK for Ruby**](https://github.com/aspose-email-cloud/aspose-email-cloud-ruby)
+ [**Git repository: Aspose.Email Cloud SDK for Python**](https://github.com/aspose-email-cloud/aspose-email-cloud-python)
+ [**Git repository: Aspose.Email Cloud SDK for PHP**](https://github.com/aspose-email-cloud/aspose-email-cloud-php)
+ [**Git repository: Aspose.Email Cloud SDK for Typescript**](https://github.com/aspose-email-cloud/aspose-email-cloud-node)
+ [**Git repository: Aspose.Email Cloud SDK for Java**](https://github.com/aspose-email-cloud/aspose-email-cloud-java)
