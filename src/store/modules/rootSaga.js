import { all } from 'redux-saga/effects';

import authSaga from '~/store/modules/auth/sagas';

export default function* rootSaga() {
  return yield all([authSaga]);
}
