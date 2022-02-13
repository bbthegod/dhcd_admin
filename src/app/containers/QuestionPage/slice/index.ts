/*
 *
 * QuestionPage Slice
 *
 */
import { createSlice } from 'utils/@reduxjs/toolkit';
import { questionPageSaga } from './saga';
import { QuestionPageState } from './types';

export const initialState: QuestionPageState = {
  questions: [],
  count: 0,
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'questionPage',
  initialState,
  reducers: {
    get(state, payload) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSucceed(state, actions) {
      state.questions = actions.payload.data;
      state.count = actions.payload.count;
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    getFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
    create(state, actions) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    createSucceed(state) {
      state.loading = false;
      state.success = true;
      state.failures = false;
    },
    createFailed(state) {
      state.loading = false;
      state.success = false;
      state.failures = true;
    },
  },
});

export const { actions } = slice;

export const questionPageSlice = { key: slice.name, reducer: slice.reducer, saga: questionPageSaga };
