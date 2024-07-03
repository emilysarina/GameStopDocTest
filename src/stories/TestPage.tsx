import React from 'react';

import { Header } from './Header';
import {Button} from './Button';
import { Input } from './Input';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Tast Page for Storybook</h2>
        <Input
        label={'name'}/>
        <Button
        primary={true}
        label={'Button'}
        />
      </section>
    </article>
  );
};
