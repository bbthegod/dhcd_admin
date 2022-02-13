/*
 *
 * FileDetail State
 *
 */
export interface FileDetailState {
  file: FileUpload | undefined;
  loading: boolean;
  success: boolean;
  failures: boolean;
  redirect: boolean;
}
