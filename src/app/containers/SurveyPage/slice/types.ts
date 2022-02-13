/*
 *
 * SurveyPage State
 *
 */
export interface SurveyPageState {
  users: User[] | undefined;
  loading: boolean;
  success: boolean;
  failures: boolean;
}
