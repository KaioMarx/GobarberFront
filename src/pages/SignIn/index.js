import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import Logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={Logo} alt="Gobarber" />

      <Form onSubmit={handleSubmit}>
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
