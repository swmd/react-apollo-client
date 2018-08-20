import { call, all, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { toastr } from 'react-redux-toastr';

import {
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
} from '../constants';

function* login(action) {
  
}

function* register(action) {
  
}

export default function* authSaga() {
  yield all([
    yield takeLatest(LOGIN, login),
    yield takeLatest(REGISTER, register),
  ]);
}
