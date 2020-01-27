import React from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function AvatarInput() {
  function handleChange(e) { }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src="https://api.adorable.io/avatars/50/abott@adorable.png"
          alt=""
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          id="avatar"
        />
      </label>
    </Container>
  );
}
