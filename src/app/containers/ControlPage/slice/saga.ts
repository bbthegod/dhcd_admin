/*
 *
 * ControlPage Saga
 *
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as snackbarActions } from 'app/containers/Dashboard/slice';
import { request } from 'utils/request';
import { actions } from '.';

export function* startQuiz() {
  try {
    const response = yield call(request, {
      url: '/play/start/quiz',
      method: 'GET',
    });
    if (response) {
      yield put(actions.startQuizSucceed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Phát bài thi thành công',
          variant: 'success',
        }),
      );
    } else {
      yield put(actions.startQuizFailed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Phát bài thi thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (err) {
    yield put(actions.startQuizFailed());
    yield put(
      snackbarActions.openSnackbar({
        message: 'Phát bài thi thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* clearQuiz() {
  try {
    const response = yield call(request, {
      url: '/play/clear/quiz',
      method: 'GET',
    });
    if (response) {
      yield put(actions.clearQuizSucceed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Reset bài thi thành công',
          variant: 'success',
        }),
      );
    } else {
      yield put(actions.clearQuizFailed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Reset bài thi thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (err) {
    yield put(actions.clearQuizFailed());
    yield put(
      snackbarActions.openSnackbar({
        message: 'Reset bài thi thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* resetCheckin() {
  try {
    const response = yield call(request, {
      url: '/user/reset/checkin',
      method: 'GET',
    });
    if (response) {
      yield put(actions.resetCheckinSucceed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Reset điểm danh thành công',
          variant: 'success',
        }),
      );
    } else {
      yield put(actions.resetCheckinFailed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Reset điểm danh thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (err) {
    yield put(actions.resetCheckinFailed());
    yield put(
      snackbarActions.openSnackbar({
        message: 'Reset điểm danh thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* controlPageSaga() {
  yield takeLatest(actions.startQuiz.type, startQuiz);
  yield takeLatest(actions.clearQuiz.type, clearQuiz);
  yield takeLatest(actions.resetCheckin.type, resetCheckin);
}
