/*
 *
 * Leaderboard Slice
 *
 */
import { createSlice } from 'utils/@reduxjs/toolkit';
import { leaderboardSaga } from './saga';
import { LeaderboardState } from './types';

export const initialState: LeaderboardState = {
  users: [],
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    get(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSucceed(state, actions) {
      state.users = actions.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions } = slice;

export const leaderboardSlice = { key: slice.name, reducer: slice.reducer, saga: leaderboardSaga };
