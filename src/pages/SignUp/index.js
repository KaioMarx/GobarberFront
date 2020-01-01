import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Necessario um Nome'),
  email: Yup.string()
    .email('Informe um Email Valido')
    .required('Necessario o Email'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('Necessario a Senha'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={Logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu Nome" />
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha Secreta"
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Ja tenho Login</Link>
      </Form>
    </>
  );
}
