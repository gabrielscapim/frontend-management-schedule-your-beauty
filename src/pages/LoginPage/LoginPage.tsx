import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './LoginPage.module.css';
import login from '../../services/login';

function LoginPage() {
  const navigate = useNavigate();
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

  const handleLogin = async () => {
    try {
      const token = await login(username, password);

      localStorage.setItem('token', token);
      localStorage.setItem('tokenGenerationTime', JSON.stringify(Date.now()));
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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
          handleClick={ handleLogin }
        />
      </section>
    </main>
  );
}

export default LoginPage;
