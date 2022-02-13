/*
 *
 * QuestionDetail State
 *
 */
export interface QuestionDetailState {
  question: Question | undefined;
  loading: boolean;
  success: boolean;
  failures: boolean;
  redirect: boolean;
}
