# UploadFileRequest

Request model for FileApi.uploadFile

## Properties

Name | Type | Description | Notes
---- | ---- | ----------- | -----
**path** | **string**| Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.              |
**file** | **byte[]**| File to upload |
**storageName** | **string**| Storage name | [optional]

## Example
```typescript
let request = Models.UploadFileRequest()
    .path('/storage/path/to/file.ext')
    .file(fs.readFileSync('/local/file/system/path/to/file.ext'))
    .storageName('First Storage')
    .build();
```
