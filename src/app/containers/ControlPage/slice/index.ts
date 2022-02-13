/*
 *
 * ControlPage Slice
 *
 */
import { createSlice } from 'utils/@reduxjs/toolkit';
import { controlPageSaga } from './saga';
import { ControlPageState } from './types';

export const initialState: ControlPageState = {
  data: [],
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'controlPage',
  initialState,
  reducers: {
    startQuiz(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    startQuizSucceed(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    startQuizFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    clearQuiz(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    clearQuizSucceed(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    clearQuizFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    resetCheckin(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    resetCheckinSucceed(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    resetCheckinFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions } = slice;

export const controlPageSlice = { key: slice.name, reducer: slice.reducer, saga: controlPageSaga };
