import styles from './SideBar.module.css';

function SideBar() {
  return (
    <aside className={ styles['side-bar'] }>
      <nav className={ styles.nav }>
        <a href="/">Agendamentos</a>
        <a href="/">Clientes</a>
        <a href="/">Financeiro</a>
      </nav>
    </aside>
  );
}

export default SideBar;
