# Manage Emails in Cloud via Node.Js/Typescript REST SDK

[![npm](https://img.shields.io/npm/v/@asposecloud/aspose-email-cloud)](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud) [![License](https://img.shields.io/github/license/aspose-email-cloud/aspose-email-cloud-node)](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud) [![node](https://img.shields.io/node/v/@asposecloud/aspose-email-cloud)](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud)  [![types](https://img.shields.io/npm/types/@asposecloud/aspose-email-cloud)](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud) ![tests](https://github.com/aspose-email-cloud/aspose-email-cloud-node/workflows/tests/badge.svg)

[Aspose.Email Cloud SDK for Node.Js/Typescript](https://products.aspose.cloud/email/nodejs) is a REST API SDK for creating email applications that work with standard email file formats such as Outlook MSG, EML, iCalendar files and VCard.

This SDK allows you to work with Aspose.Email Cloud REST APIs in your Node.Js applications quickly and easily, with zero initial cost.

[Aspose.Email Cloud home](https://products.aspose.cloud/email/family)
[API Reference](https://apireference.aspose.cloud/email/)

# Cloud Email Processing Features
Aspose.Email Cloud is a REST API for creating email applications that work with standard email file formats. This SDK:
- Lets developers manipulate different emails' formats such as Outlook MSG, EML, VCard, and iCalendar files.
- Supports AI functions:
    - The Business card recognition.
    - The Name API for parsing and handling personal names.
- Has a built-in email client. This client provides:
    - Unified REST API for different email protocols: IMAP, POP3, SMTP, EWS, WebDav.
    - Virtual multi-account.
    - Message threads (POP3 accounts are also supported).
- Email configuration discovery.
- Disposable email address detection.

## New features in version 20.9

Aspose.Email Cloud SDK 20.9.0 is based on a new v4.0 REST API.

- All SDK functions are divided into groups (Email, Calendar, Contact, Client, Ai, Mapi, etc.).
- Unified file API provided for supported file types (Save, Get, Convert, AsFile, FromFile, AsMapi/AsDto).
- HierarchicalObject based API is removed.
- All models are stored in one folder/namespace.
- The request models are simplified.

See [Release notes](https://docs.aspose.cloud/email/aspose-email-cloud-20-9-release-notes/).

## How to use the SDK?
The complete source code is available in the [GIT repository](https://github.com/aspose-email-cloud/aspose-email-cloud-node/tree/master/src).

Use [SDK tutorials](https://docs.aspose.cloud/email/sdk-tutorials/).

SDK reference documentation is available in [this README](https://github.com/aspose-email-cloud/aspose-email-cloud-node/blob/master/doc/README.md).

### Prerequisites
To use this SDK, you need an App SID and an App Key; they can be looked up at [Aspose Cloud Dashboard](https://dashboard.aspose.cloud/#/apps) (it requires free registration in Aspose Cloud for this).

### Installation
You can use it directly in your project via the source code or get a [npm package](https://www.npmjs.com/package/@asposecloud/aspose-email-cloud).
From the command line:

    npm install @asposecloud/aspose-email-cloud --save

See more details about SDK installation in this tutorial: [SDK setup](https://docs.aspose.cloud/email/sdk-setup/).

### Usage examples
To use the API, you should create an EmailCloud object:
```typescript
var appKey = "Your App Key";
var appSid = "Your App SID";
var api = new EmailCloud(appSid, appKey);
```

#### Business cards recognition API

Use `AiBcrApi.parse` method to parse business card image to VCard DTO:

```typescript
var imageData = fs.readFileSync("path/to/image/to/parse.png");
var result = await api.ai.bcr.parse(new AiBcrParseRequest(
    imageData, undefined, undefined, true));
var contact = result.value[0];
```

[Product Page](https://products.aspose.cloud/email/nodejs) | [Documentation](https://docs.aspose.cloud/email/) | [Demo](https://products.aspose.app/email/family) | [API Reference](https://apireference.aspose.cloud/email/) | [Blog](https://blog.aspose.cloud/category/email/) | [Free support](https://forum.aspose.cloud/c/email) | [Free trial](https://dashboard.aspose.cloud/#/apps)
