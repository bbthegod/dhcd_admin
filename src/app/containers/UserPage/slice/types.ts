/*
 *
 * UserPage State
 *
 */
export interface UserPageState {
  users: User[] | undefined;
  count: number;
  loading: boolean;
  success: boolean;
  failures: boolean;
}
