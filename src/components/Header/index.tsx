import styles from './Header.module.css';

function Header() {
  return (
    <header className={ styles.header }>
      <span>
        IC Management
      </span>
      <button>
        Sair
      </button>
    </header>
  );
}

export default Header;
