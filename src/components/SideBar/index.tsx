import styles from './SideBar.module.css';

function SideBar() {
  const location: string = window.location.href;
  const navLocationStyle = {
    backgroundColor: '#e3d5eb',
  };

  console.log(location);

  return (
    <aside className={ styles['side-bar'] }>
      <nav className={ styles.nav }>
        <a
          href="/agendamentos"
          style={ location.includes('agendamentos') ? navLocationStyle : {} }
        >
          <i className="bi bi-clock"> </i>
          Agendamentos
        </a>
        <a
          href="/"
          style={ location.includes('gerenciar-datas') ? navLocationStyle : {} }
        >
          <i className="bi bi-calendar"> </i>
          Gerenciar datas
        </a>
        <a
          href="/"
          style={ location.includes('cliented') ? navLocationStyle : {} }
        >
          <i className="bi bi-person"> </i>
          Clientes
        </a>
        <a
          href="/"
          style={ location.includes('financeiro') ? navLocationStyle : {} }
        >
          <i className="bi bi-graph-up-arrow"> </i>
          Financeiro
        </a>
      </nav>
    </aside>
  );
}

export default SideBar;
