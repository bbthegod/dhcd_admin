/*
 *
 * FilePage Saga
 *
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import { actions as snackbarActions } from 'app/containers/Dashboard/slice';
import serialize from 'utils/serialize';
import { request } from 'utils/request';
import { actions } from '.';

let lastQuery = {};

function buildFormData(formData, data, parentKey?) {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      // );
    });
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
}

function jsonToFormData(data) {
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
}

export function* get(payload) {
  const newQuery = payload.payload;
  lastQuery = { ...lastQuery, ...newQuery };
  try {
    const { response } = yield call(request, {
      url: `/file?${serialize(lastQuery)}`,
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
      url: `/file`,
      method: 'POST',
      data: jsonToFormData(payload.payload),
    });
    if (data) {
      yield put(actions.createSucceed());
      yield put(actions.get(lastQuery));
    } else {
      yield put(actions.createFailed());
      yield put(
        snackbarActions.openSnackbar({
          message: 'Tạo tài liệu thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(actions.createFailed());
    yield put(
      snackbarActions.openSnackbar({
        message: 'Tạo câu hỏi thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* filePageSaga() {
  yield takeLatest(actions.get.type, get);
  yield takeLatest(actions.create.type, create);
}
