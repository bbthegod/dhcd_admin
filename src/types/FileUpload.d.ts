interface FileUpload {
  _id: string;
  filename: string;
  url?: string;
  file?: File;
  allowDelegate?: boolean;
}
