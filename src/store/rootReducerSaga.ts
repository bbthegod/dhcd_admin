import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { loginPageSlice } from 'app/containers/LoginPage/slice';
import { userPageSlice } from 'app/containers/UserPage/slice';
import { questionPageSlice } from 'app/containers/QuestionPage/slice';
import { leaderboardSlice } from 'app/containers/Leaderboard/slice';
import { userDetailSlice } from 'app/containers/UserDetail/slice';
import { questionDetailSlice } from 'app/containers/QuestionDetail/slice';
import { dashboardSlice } from 'app/containers/Dashboard/slice';
import { filePageSlice } from 'app/containers/FilePage/slice';
import { fileDetailSlice } from 'app/containers/FileDetail/slice';
import { controlPageSlice } from 'app/containers/ControlPage/slice';
import { surveyPageSlice } from 'app/containers/SurveyPage/slice';
// GENERATE NEW IMPORT ABOVE, DO NOT DELETE IT

const slices = [
  loginPageSlice,
  userPageSlice,
  questionPageSlice,
  leaderboardSlice,
  userDetailSlice,
  questionDetailSlice,
  dashboardSlice,
  filePageSlice,
  fileDetailSlice,
  controlPageSlice,
  surveyPageSlice,
  // GENERATE NEW SLICE ABOVE, DO NOT DELETE IT
];

export function rootReducer() {
  if (slices.length === 0) {
    return {};
  } else {
    let tree = {};
    for (let reducer of slices) {
      tree[reducer.key] = reducer.reducer;
    }
    return combineReducers(tree);
  }
}

export function* rootSaga() {
  const sagas = yield slices.map(item => item.saga());
  yield all(sagas);
}
