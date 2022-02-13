/*
 *
 * UserDetail Slice
 *
 */
import { createSlice } from 'utils/@reduxjs/toolkit';
import { userDetailSaga } from './saga';
import { UserDetailState } from './types';

export const initialState: UserDetailState = {
  user: undefined,
  play: undefined,
  loading: false,
  success: false,
  failures: false,
  redirect: false,
};

const slice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    get(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSucceed(state, actions) {
      state.user = actions.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    getPlay(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getPlaySucceed(state, actions) {
      state.play = actions.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getPlayFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    remove(state, actions) {
      state.loading = true;
      state.success = false;
      state.failures = false;
      state.redirect = false;
    },
    removeSucceed(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
      state.redirect = true;
    },
    removeFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
      state.redirect = false;
    },
    edit(state, actions) {
      state.loading = true;
      state.success = false;
      state.failures = false;
      state.redirect = false;
    },
    editSucceed(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
      state.redirect = true;
    },
    editFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
      state.redirect = false;
    },
    reset(state, actions) {
      state.loading = true;
      state.success = false;
      state.failures = false;
      state.redirect = false;
    },
    resetSucceed(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
      state.redirect = true;
    },
    resetFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
      state.redirect = false;
    },
    cleanup(state) {
      state.user = undefined;
      state.play = undefined;
      state.loading = true;
      state.success = false;
      state.failures = false;
      state.redirect = false;
    },
  },
});

export const { actions } = slice;

export const userDetailSlice = { key: slice.name, reducer: slice.reducer, saga: userDetailSaga };
