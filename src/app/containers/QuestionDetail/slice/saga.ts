/*
 *
 * QuestionDetail Saga
 *
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import { actions as snackbarActions } from 'app/containers/Dashboard/slice';
import { request } from 'utils/request';
import { actions } from '.';

export function* get(payload) {
  try {
    const { response } = yield call(request, {
      url: `/question/${payload.payload}`,
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

export function* remove(payload) {
  try {
    const data = yield call(request, {
      url: `/question/${payload.payload}`,
      method: 'DELETE',
    });
    if (data) {
      yield put(actions.removeSucceed());
    } else {
      yield put(actions.removeFailed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Xoá câu hỏi thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(actions.removeFailed());
    yield put(
      snackbarActions.openSnackbar({
        message: 'Xoá câu hỏi thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* edit(payload) {
  try {
    const data = yield call(request, {
      url: `/question/${payload.payload._id}`,
      method: 'PUT',
      data: payload.payload,
    });
    if (data) {
      yield put(actions.editSucceed());
    } else {
      yield put(actions.editFailed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Chỉnh sửa câu hỏi thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(actions.editFailed());
    yield put(
      snackbarActions.openSnackbar({
        message: 'Chỉnh sửa câu hỏi thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* questionDetailSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.remove.type, remove);
  yield takeLatest(actions.edit.type, edit);
}
