// @ts-ignore
import * as model from "./index";
/**
 * Request model for FileApi.uploadFile operation.
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

    /**
     * Request model for uploadFile operation.
     * @param path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     * @param file File to upload
     * @param storageName Storage name
     */
    public constructor(
        path?: string, 
        file?: Buffer, 
        storageName?: string) {
        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

export class UploadFileRequestBuilder {
    private model: UploadFileRequest
    public constructor(model: UploadFileRequest) {
        this.model = model;
    }
    public build(): UploadFileRequest {
        return this.model;
    }
        public path(path: string): UploadFileRequestBuilder {
            this.model.path = path;
            return this;
        }
        public file(file: Buffer): UploadFileRequestBuilder {
            this.model.file = file;
            return this;
        }
        public storageName(storageName: string): UploadFileRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
}
