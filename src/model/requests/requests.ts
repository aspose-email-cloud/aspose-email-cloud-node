
import * as model from "../model";


/**
 * Request model for addCalendarAttachment operation.
 */
export class AddCalendarAttachmentRequest {
    /**
     * Calendar file name in storage
     */
    public name: string;

    /**
     * Attachment file name in storage
     */
    public attachment: string;

    /**
     * Storage name and folder path for calendar and attachment files
     */
    public request: model.AddAttachmentRequest;

    public constructor(
        name?: string, 
        attachment?: string, 
        request?: model.AddAttachmentRequest) {
        
        this.name = name;
        this.attachment = attachment;
        this.request = request;
    }
}

/**
 * Request model for addContactAttachment operation.
 */
export class AddContactAttachmentRequest {
    /**
     * Contact document format
     */
    public format: 'VCard' | 'WebDav' | 'Msg';

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Attachment name
     */
    public attachment: string;

    /**
     * Add attachment request
     */
    public request: model.AddAttachmentRequest;

    public constructor(
        format?: 'VCard' | 'WebDav' | 'Msg', 
        name?: string, 
        attachment?: string, 
        request?: model.AddAttachmentRequest) {
        
        this.format = format;
        this.name = name;
        this.attachment = attachment;
        this.request = request;
    }
}

/**
 * Request model for addEmailAttachment operation.
 */
export class AddEmailAttachmentRequest {
    /**
     * Attachment file name
     */
    public attachmentName: string;

    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * Storage info to specify location of email document and attachment files
     */
    public request: model.AddAttachmentRequest;

    public constructor(
        attachmentName?: string, 
        fileName?: string, 
        request?: model.AddAttachmentRequest) {
        
        this.attachmentName = attachmentName;
        this.fileName = fileName;
        this.request = request;
    }
}

/**
 * Request model for addMapiAttachment operation.
 */
export class AddMapiAttachmentRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Attachment file name
     */
    public attachment: string;

    /**
     * Add attachment request
     */
    public request: model.AddAttachmentRequest;

    public constructor(
        name?: string, 
        attachment?: string, 
        request?: model.AddAttachmentRequest) {
        
        this.name = name;
        this.attachment = attachment;
        this.request = request;
    }
}

/**
 * Request model for appendEmailMessage operation.
 */
export class AppendEmailMessageRequest {
    /**
     * Append email request
     */
    public request: model.AppendEmailBaseRequest;

    public constructor(
        request?: model.AppendEmailBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for appendMimeMessage operation.
 */
export class AppendMimeMessageRequest {
    /**
     * Append email request
     */
    public request: model.AppendEmailMimeBaseRequest;

    public constructor(
        request?: model.AppendEmailMimeBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for copyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;

    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string, 
        versionId?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for copyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for createCalendar operation.
 */
export class CreateCalendarRequest {
    /**
     * Calendar file name in storage
     */
    public name: string;

    /**
     * Gets or sets request
     */
    public request: model.HierarchicalObjectRequest;

    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for createContact operation.
 */
export class CreateContactRequest {
    /**
     * Contact document format
     */
    public format: 'VCard' | 'WebDav' | 'Msg';

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Create contact request
     */
    public request: model.HierarchicalObjectRequest;

    public constructor(
        format?: 'VCard' | 'WebDav' | 'Msg', 
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.format = format;
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for createEmail operation.
 */
export class CreateEmailRequest {
    /**
     * Email document file name in storage
     */
    public fileName: string;

    /**
     * An email document and optional Storage info to specify where the file should be located
     */
    public request: model.CreateEmailRequest;

    public constructor(
        fileName?: string, 
        request?: model.CreateEmailRequest) {
        
        this.fileName = fileName;
        this.request = request;
    }
}

/**
 * Request model for createEmailFolder operation.
 */
export class CreateEmailFolderRequest {
    /**
     * Create folder request
     */
    public request: model.CreateFolderBaseRequest;

    public constructor(
        request?: model.CreateFolderBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for createFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for createMapi operation.
 */
export class CreateMapiRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Create document request
     */
    public request: model.HierarchicalObjectRequest;

    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for deleteCalendarProperty operation.
 */
export class DeleteCalendarPropertyRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * Indexed property name
     */
    public memberName: string;

    /**
     * Property index path
     */
    public index: string;

    /**
     * Storage detail to specify iCalendar file location
     */
    public request: model.StorageFolderLocation;

    public constructor(
        name?: string, 
        memberName?: string, 
        index?: string, 
        request?: model.StorageFolderLocation) {
        
        this.name = name;
        this.memberName = memberName;
        this.index = index;
        this.request = request;
    }
}

/**
 * Request model for deleteContactProperty operation.
 */
export class DeleteContactPropertyRequest {
    /**
     * Contact document format
     */
    public format: 'VCard' | 'WebDav' | 'Msg';

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Indexed property name
     */
    public memberName: string;

    /**
     * Property index
     */
    public index: number;

    /**
     * Calendar document location in storage information
     */
    public folder: model.StorageFolderLocation;

    public constructor(
        format?: 'VCard' | 'WebDav' | 'Msg', 
        name?: string, 
        memberName?: string, 
        index?: number, 
        folder?: model.StorageFolderLocation) {
        
        this.format = format;
        this.name = name;
        this.memberName = memberName;
        this.index = index;
        this.folder = folder;
    }
}

/**
 * Request model for deleteEmailFolder operation.
 */
export class DeleteEmailFolderRequest {
    /**
     * Delete folder request
     */
    public request: model.DeleteFolderBaseRequest;

    public constructor(
        request?: model.DeleteFolderBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for deleteEmailMessage operation.
 */
export class DeleteEmailMessageRequest {
    /**
     * Delete message request
     */
    public request: model.DeleteMessageBaseRequest;

    public constructor(
        request?: model.DeleteMessageBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for deleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;

    public constructor(
        path?: string, 
        storageName?: string, 
        versionId?: string) {
        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for deleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;

    public constructor(
        path?: string, 
        storageName?: string, 
        recursive?: boolean) {
        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for deleteMapiAttachment operation.
 */
export class DeleteMapiAttachmentRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Attachment name or index
     */
    public attachment: string;

    /**
     * Document file storage location info
     */
    public storage: model.StorageFolderLocation;

    public constructor(
        name?: string, 
        attachment?: string, 
        storage?: model.StorageFolderLocation) {
        
        this.name = name;
        this.attachment = attachment;
        this.storage = storage;
    }
}

/**
 * Request model for deleteMapiProperties operation.
 */
export class DeleteMapiPropertiesRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Properties that should be deleted
     */
    public request: model.HierarchicalObjectRequest;

    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for downloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;

    public constructor(
        path?: string, 
        storageName?: string, 
        versionId?: string) {
        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for fetchEmailMessage operation.
 */
export class FetchEmailMessageRequest {
    /**
     * Message identifier
     */
    public messageId: string;

    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (should be specified for POP/IMAP accounts and should be SMTP account)
     */
    public secondAccount: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    public constructor(
        messageId?: string, 
        firstAccount?: string, 
        secondAccount?: string, 
        storage?: string, 
        storageFolder?: string) {
        
        this.messageId = messageId;
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storage = storage;
        this.storageFolder = storageFolder;
    }
}

/**
 * Request model for getCalendar operation.
 */
export class GetCalendarRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getCalendarAttachment operation.
 */
export class GetCalendarAttachmentRequest {
    /**
     * iCalendar document file name
     */
    public name: string;

    /**
     * Attachment name or index
     */
    public attachment: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    public constructor(
        name?: string, 
        attachment?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.attachment = attachment;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getCalendarList operation.
 */
export class GetCalendarListRequest {
    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Count of items on page
     */
    public itemsPerPage: number;

    /**
     * Page number
     */
    public pageNumber: number;

    /**
     * Storage name
     */
    public storage: string;

    public constructor(
        folder?: string, 
        itemsPerPage?: number, 
        pageNumber?: number, 
        storage?: string) {
        
        this.folder = folder;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
        this.storage = storage;
    }
}

/**
 * Request model for getContactAttachment operation.
 */
export class GetContactAttachmentRequest {
    /**
     * Contact document format
     */
    public format: 'VCard' | 'WebDav' | 'Msg';

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Attachment name or index
     */
    public attachment: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    public constructor(
        format?: 'VCard' | 'WebDav' | 'Msg', 
        name?: string, 
        attachment?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.name = name;
        this.attachment = attachment;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getContactList operation.
 */
export class GetContactListRequest {
    /**
     * Contact document format
     */
    public format: 'VCard' | 'WebDav' | 'Msg';

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Count of items on page
     */
    public itemsPerPage: number;

    /**
     * Page number
     */
    public pageNumber: number;

    public constructor(
        format?: 'VCard' | 'WebDav' | 'Msg', 
        folder?: string, 
        storage?: string, 
        itemsPerPage?: number, 
        pageNumber?: number) {
        
        this.format = format;
        this.folder = folder;
        this.storage = storage;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
    }
}

/**
 * Request model for getContactProperties operation.
 */
export class GetContactPropertiesRequest {
    /**
     * Contact document format
     */
    public format: 'VCard' | 'WebDav' | 'Msg';

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    public constructor(
        format?: 'VCard' | 'WebDav' | 'Msg', 
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.format = format;
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;

    public constructor(
        storageName?: string) {
        
        this.storageName = storageName;
    }
}

/**
 * Request model for getEmail operation.
 */
export class GetEmailRequest {
    /**
     * Email document file name in storage
     */
    public fileName: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    public constructor(
        fileName?: string, 
        storage?: string, 
        folder?: string) {
        
        this.fileName = fileName;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getEmailAttachment operation.
 */
export class GetEmailAttachmentRequest {
    /**
     * Attachment name
     */
    public attachment: string;

    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    public constructor(
        attachment?: string, 
        fileName?: string, 
        storage?: string, 
        folder?: string) {
        
        this.attachment = attachment;
        this.fileName = fileName;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getEmailProperty operation.
 */
export class GetEmailPropertyRequest {
    /**
     * A property name
     */
    public propertyName: string;

    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    public constructor(
        propertyName?: string, 
        fileName?: string, 
        storage?: string, 
        folder?: string) {
        
        this.propertyName = propertyName;
        this.fileName = fileName;
        this.storage = storage;
        this.folder = folder;
    }
}

/**
 * Request model for getFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for getFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    public constructor(
        path?: string, 
        storageName?: string) {
        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for getMapiAttachment operation.
 */
export class GetMapiAttachmentRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Attachment name or index
     */
    public attachment: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    public constructor(
        name?: string, 
        attachment?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.attachment = attachment;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getMapiAttachments operation.
 */
export class GetMapiAttachmentsRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for getMapiList operation.
 */
export class GetMapiListRequest {
    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    /**
     * Count of items on page
     */
    public itemsPerPage: number;

    /**
     * Page number
     */
    public pageNumber: number;

    public constructor(
        folder?: string, 
        storage?: string, 
        itemsPerPage?: number, 
        pageNumber?: number) {
        
        this.folder = folder;
        this.storage = storage;
        this.itemsPerPage = itemsPerPage;
        this.pageNumber = pageNumber;
    }
}

/**
 * Request model for getMapiProperties operation.
 */
export class GetMapiPropertiesRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Path to folder in storage
     */
    public folder: string;

    /**
     * Storage name
     */
    public storage: string;

    public constructor(
        name?: string, 
        folder?: string, 
        storage?: string) {
        
        this.name = name;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for listEmailFolders operation.
 */
export class ListEmailFoldersRequest {
    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (should be specified for POP/IMAP accounts and should be SMTP account)
     */
    public secondAccount: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * Folder in which subfolders should be listed
     */
    public parentFolder: string;

    public constructor(
        firstAccount?: string, 
        secondAccount?: string, 
        storage?: string, 
        storageFolder?: string, 
        parentFolder?: string) {
        
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storage = storage;
        this.storageFolder = storageFolder;
        this.parentFolder = parentFolder;
    }
}

/**
 * Request model for listEmailMessages operation.
 */
export class ListEmailMessagesRequest {
    /**
     * A folder in email account
     */
    public folder: string;

    /**
     * A MailQuery search string
     */
    public queryString: string;

    /**
     * Email account
     */
    public firstAccount: string;

    /**
     * Additional email account (should be specified for POP/IMAP accounts and should be SMTP account)
     */
    public secondAccount: string;

    /**
     * Storage name where account file(s) located
     */
    public storage: string;

    /**
     * Folder in storage where account file(s) located
     */
    public storageFolder: string;

    /**
     * Specifies that should message be searched in subfolders recursively
     */
    public recursive: boolean;

    public constructor(
        folder?: string, 
        queryString?: string, 
        firstAccount?: string, 
        secondAccount?: string, 
        storage?: string, 
        storageFolder?: string, 
        recursive?: boolean) {
        
        this.folder = folder;
        this.queryString = queryString;
        this.firstAccount = firstAccount;
        this.secondAccount = secondAccount;
        this.storage = storage;
        this.storageFolder = storageFolder;
        this.recursive = recursive;
    }
}

/**
 * Request model for moveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;

    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string, 
        versionId?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for moveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    public constructor(
        srcPath?: string, 
        destPath?: string, 
        srcStorageName?: string, 
        destStorageName?: string) {
        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for objectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;

    public constructor(
        path?: string, 
        storageName?: string, 
        versionId?: string) {
        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for saveMailAccount operation.
 */
export class SaveMailAccountRequest {
    /**
     * Email account information
     */
    public request: model.SaveEmailAccountRequest;

    public constructor(
        request?: model.SaveEmailAccountRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for saveMailOAuthAccount operation.
 */
export class SaveMailOAuthAccountRequest {
    /**
     * Email account information
     */
    public request: model.SaveOAuthEmailAccountRequest;

    public constructor(
        request?: model.SaveOAuthEmailAccountRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for sendEmail operation.
 */
export class SendEmailRequest {
    /**
     * Send email request
     */
    public request: model.SendEmailBaseRequest;

    public constructor(
        request?: model.SendEmailBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for sendEmailMime operation.
 */
export class SendEmailMimeRequest {
    /**
     * Send email request
     */
    public request: model.SendEmailMimeBaseRequest;

    public constructor(
        request?: model.SendEmailMimeBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for setEmailProperty operation.
 */
export class SetEmailPropertyRequest {
    /**
     * A property name that should be changed
     */
    public propertyName: string;

    /**
     * Email document file name
     */
    public fileName: string;

    /**
     * A property that should be changed and optional Storage info to specify             where the file located
     */
    public request: model.SetEmailPropertyRequest;

    public constructor(
        propertyName?: string, 
        fileName?: string, 
        request?: model.SetEmailPropertyRequest) {
        
        this.propertyName = propertyName;
        this.fileName = fileName;
        this.request = request;
    }
}

/**
 * Request model for setEmailReadFlag operation.
 */
export class SetEmailReadFlagRequest {
    /**
     * Message is read request
     */
    public request: model.SetMessageReadFlagAccountBaseRequest;

    public constructor(
        request?: model.SetMessageReadFlagAccountBaseRequest) {
        
        this.request = request;
    }
}

/**
 * Request model for storageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;

    public constructor(
        storageName?: string) {
        
        this.storageName = storageName;
    }
}

/**
 * Request model for updateCalendarProperties operation.
 */
export class UpdateCalendarPropertiesRequest {
    /**
     * iCalendar file name in storage
     */
    public name: string;

    /**
     * Calendar properties update request
     */
    public request: model.HierarchicalObjectRequest;

    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for updateContactProperties operation.
 */
export class UpdateContactPropertiesRequest {
    /**
     * Contact document format
     */
    public format: 'VCard' | 'WebDav' | 'Msg';

    /**
     * Contact document file name
     */
    public name: string;

    /**
     * Properties that should be updated/added
     */
    public request: model.HierarchicalObjectRequest;

    public constructor(
        format?: 'VCard' | 'WebDav' | 'Msg', 
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.format = format;
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for updateMapiProperties operation.
 */
export class UpdateMapiPropertiesRequest {
    /**
     * Document file name
     */
    public name: string;

    /**
     * Properties that should be updated/added
     */
    public request: model.HierarchicalObjectRequest;

    public constructor(
        name?: string, 
        request?: model.HierarchicalObjectRequest) {
        
        this.name = name;
        this.request = request;
    }
}

/**
 * Request model for uploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;

    public constructor(
        path?: string, 
        file?: Buffer, 
        storageName?: string) {
        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}
