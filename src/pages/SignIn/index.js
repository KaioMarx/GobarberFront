import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um Email Valido')
    .required('O Email e obrigatorio'),
  password: Yup.string()
    .min(6, 'No minino 6 caracteres')
    .required('A senha secreta e obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={Logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha Secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar uma conta Gratuita</Link>
      </Form>
    </>
  );
}
