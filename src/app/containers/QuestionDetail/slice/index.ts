/*
 *
 * QuestionDetail Slice
 *
 */
import { createSlice } from 'utils/@reduxjs/toolkit';
import { questionDetailSaga } from './saga';
import { QuestionDetailState } from './types';

export const initialState: QuestionDetailState = {
  question: undefined,
  loading: false,
  success: false,
  failures: false,
  redirect: false,
};

const slice = createSlice({
  name: 'questionDetail',
  initialState,
  reducers: {
    get(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSucceed(state, actions) {
      state.question = actions.payload;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getFailed(state) {
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
    cleanup(state) {
      state.question = undefined;
      state.loading = true;
      state.success = false;
      state.failures = false;
      state.redirect = false;
    },
  },
});

export const { actions } = slice;

export const questionDetailSlice = { key: slice.name, reducer: slice.reducer, saga: questionDetailSaga };
