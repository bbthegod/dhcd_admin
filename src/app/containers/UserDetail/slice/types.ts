/*
 *
 * UserDetail State
 *
 */
export interface UserDetailState {
  user: User | undefined;
  play: Play | undefined;
  loading: boolean;
  success: boolean;
  failures: boolean;
  redirect: boolean;
}
