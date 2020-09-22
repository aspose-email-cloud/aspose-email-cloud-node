// @ts-ignore
import * as model from "./index";
/**
 * Request model for FileApi.downloadFile operation.
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

    /**
     * Request model for downloadFile operation.
     * @param path File path e.g. '/folder/file.ext'
     * @param storageName Storage name
     * @param versionId File version ID to download
     */
    public constructor(
        path?: string, 
        storageName?: string, 
        versionId?: string) {
        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

export class DownloadFileRequestBuilder {
    private model: DownloadFileRequest
    public constructor(model: DownloadFileRequest) {
        this.model = model;
    }
    public build(): DownloadFileRequest {
        return this.model;
    }
        public path(path: string): DownloadFileRequestBuilder {
            this.model.path = path;
            return this;
        }
        public storageName(storageName: string): DownloadFileRequestBuilder {
            this.model.storageName = storageName;
            return this;
        }
        public versionId(versionId: string): DownloadFileRequestBuilder {
            this.model.versionId = versionId;
            return this;
        }
}
