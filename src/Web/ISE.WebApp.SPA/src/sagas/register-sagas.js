import { put, takeEvery, call } from 'redux-saga/effects';
import { Types, Creators } from '../store/register/register-duck';
import registerApi from 'store/register/register-api';

export function* registerAsync({ formValues }) {
  const { email, password, confirmPassword } = formValues;
  const registerModel = {
    email,
    senha: password,
    senhaConfirmacao: confirmPassword,
  };

  try {
    yield call(registerApi.postRegister, registerModel);
  } catch (err) {
    console.log(err);
  }
}

export default function* registerSagas() {
  yield takeEvery(Types.REGISTER_ASYNC, registerAsync);
}
