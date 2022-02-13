/*
 *
 * Leaderboard State
 *
 */
export interface LeaderboardState {
  users: Play[];
  loading: boolean;
  success: boolean;
  failures: boolean;
}
