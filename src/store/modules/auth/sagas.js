import { takeLatest, all, put, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Access is Only for Providers');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    // history fica antes do yield(*return of generators)
    yield put(signInSucess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticacao, Verifique Seus Dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    toast.error('Erro no cadastro, Verifique Seus Dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

// takeLatest receive the Action of Request Data
// signIn function is Assync Request in Redux
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
