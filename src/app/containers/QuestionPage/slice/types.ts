/*
 *
 * QuestionPage State
 *
 */
export interface QuestionPageState {
  questions: Question[];
  count: number;
  loading: boolean;
  success: boolean;
  failures: boolean;
}
