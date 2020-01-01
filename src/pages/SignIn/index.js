import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

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
  function handleSubmit(data) {
    console.tron.log(data);
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

        <button type="submit">Acessar</button>
        <Link to="/register">Criar uma conta Gratuita</Link>
      </Form>
    </>
  );
}
