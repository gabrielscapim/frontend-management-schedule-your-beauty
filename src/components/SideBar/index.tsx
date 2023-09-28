import styles from './SideBar.module.css';

function SideBar() {
  return (
    <aside className={ styles['side-bar'] }>
      <nav className={ styles.nav }>
        <a href="/">
          <i className="bi bi-clock"> </i>
          Agendamentos
        </a>
        <a href="/">
          <i className="bi bi-calendar"> </i>
          Gerenciar datas
        </a>
        <a href="/">
          <i className="bi bi-person"> </i>
          Clientes
        </a>
        <a href="/">
          <i className="bi bi-graph-up-arrow"> </i>
          Financeiro
        </a>
      </nav>
    </aside>
  );
}

export default SideBar;
