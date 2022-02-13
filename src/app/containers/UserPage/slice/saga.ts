/*
 *
 * UserPage Saga
 *
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import serialize from 'utils/serialize';
import { actions } from '.';
import { actions as snackbarActions } from 'app/containers/Dashboard/slice';

let lastQuery = {};

export function* get(payload) {
  lastQuery = payload.payload;
  try {
    const { response } = yield call(request, {
      url: `/user?${serialize(lastQuery)}`,
      method: 'GET',
    });
    if (response) {
      yield put(actions.getSucceed(response));
    } else {
      yield put(actions.getFailed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Lấy dữ liệu thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (err) {
    yield put(actions.getFailed());
    yield put(
      snackbarActions.openSnackbar({
        message: 'Lấy dữ liệu thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* create(payload) {
  try {
    const data = yield call(request, {
      url: `/user`,
      method: 'POST',
      data: payload.payload,
    });
    if (data) {
      yield put(actions.createSucceed());
      yield put(actions.get(lastQuery));
    } else {
      yield put(actions.createFailed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Tạo người dùng thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(actions.createFailed());
    yield put(
      snackbarActions.openSnackbar({
        message: 'Tạo người dùng thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* userPageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.create.type, create);
}
