import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <main className={ styles['page-container'] }>
      <section>
        <Input
          id="login-input"
          label="Login"
          placeholder="Digite seu login"
          handleChange={ () => {} }
        />
        <Input
          id="password-input"
          label="Senha"
          placeholder="Digite sua senha"
          handleChange={ () => {} }
        />
        <Button
          label="Entrar"
          handleClick={ () => {} }
        />
      </section>
    </main>
  );
}

export default LoginPage;
