/*
 *
 * SurveyPage Slice
 *
 */
import { createSlice } from 'utils/@reduxjs/toolkit';
import { surveyPageSaga } from './saga';
import { SurveyPageState } from './types';

export const initialState: SurveyPageState = {
  users: [],
  loading: false,
  success: false,
  failures: false,
};

const slice = createSlice({
  name: 'surveyPage',
  initialState,
  reducers: {
    get(state) {
      state.loading = true;
      state.success = false;
      state.failures = false;
    },
    getSucceed(state, actions) {
      state.users = actions.payload.data;
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

export const surveyPageSlice = { key: slice.name, reducer: slice.reducer, saga: surveyPageSaga };
