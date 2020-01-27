import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Seu Nome Completo" />
        <Input name="email" type="email" placeholder="Seu Endereco de e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua Senha Atual"
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua Nova Senha Secreta"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme Sua Nova Senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do Gobarber</button>
    </Container>
  );
}
