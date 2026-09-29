export type UploadFileStatus = 'uploaded' | 'error';

export type UploadFile = {
  id: string;
  name: string;
  size?: number;
  status: UploadFileStatus;
  helperText?: string;
};

export type UploadValidationOptions = {
  maxFiles: number;
  maxSize: number;
  acceptedFormats: string[];
};
