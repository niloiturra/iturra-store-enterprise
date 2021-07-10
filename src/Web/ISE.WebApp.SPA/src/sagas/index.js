import { all, fork } from 'redux-saga/effects';
import registerSagas from './register-sagas';

export default function* rootSaga() {
  yield all([fork(registerSagas)]);
}
