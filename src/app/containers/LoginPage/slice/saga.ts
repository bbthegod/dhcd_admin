/*
 *
 * LoginPage Saga
 *
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from '.';

export function* login(payload) {
  try {
    const { response } = yield call(request, {
      url: '/auth/login',
      method: 'POST',
      data: {
        username: payload.payload.username,
        password: payload.payload.password,
      },
    });
    if (response) {
      // if (response.user.role === 'admin') {
      yield put(actions.loginSucceed(response));
      // } else {
      //   yield put(actions.loginFailed());
      //   yield put(
      //     actions.openSnackbar({
      //       message: 'Bạn không có quyền đăng nhập',
      //       variant: 'error',
      //     }),
      //   );
      // }
    } else {
      yield put(actions.loginFailed());
      yield put(
        actions.openSnackbar({
          message: 'Đăng nhập thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (err) {
    yield put(actions.loginFailed());
    yield put(
      actions.openSnackbar({
        message: 'Đăng nhập thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.login.type, login);
}
