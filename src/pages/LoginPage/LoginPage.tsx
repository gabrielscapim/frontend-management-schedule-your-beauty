import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './LoginPage.module.css';
import login from '../../services/login';

function LoginPage() {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const { username, password } = state;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    return setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className={ styles['page-container'] }>
      <section className={ styles['login-container'] }>
        <Input
          id="login-input"
          label="Login"
          placeholder="Digite seu login"
          name="username"
          value={ username }
          handleChange={ handleChange }
        />
        <Input
          id="password-input"
          label="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={ password }
          handleChange={ handleChange }
        />
        <Button
          label="Entrar"
          handleClick={ async () => { await login(username, password); } }
        />
      </section>
    </main>
  );
}

export default LoginPage;
