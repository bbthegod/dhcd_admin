/*
 *
 * FilePage State
 *
 */
export interface FilePageState {
  files: FileUpload[];
  count: number;
  loading: boolean;
  success: boolean;
  failures: boolean;
}
