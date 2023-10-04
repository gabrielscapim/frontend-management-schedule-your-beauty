import styles from './SideBar.module.css';

function SideBar() {
  const location = window.location.href;
  const navLocationStyle = {
    backgroundColor: '#e3d5eb',
  };

  return (
    <aside className={ styles['side-bar'] }>
      <nav className={ styles.nav }>
        <span>
          IC Management
        </span>
        <a
          href="/agendamentos"
          style={ location.includes('agendamentos') ? navLocationStyle : {} }
        >
          <i className="bi bi-calendar"> </i>
          <h5>
            AGENDAMENTOS
          </h5>
        </a>
        <a
          href="/datas"
          style={ location.includes('datas') ? navLocationStyle : {} }
        >
          <i className="bi bi-clock"> </i>
          <h5>
            HORÁRIOS
          </h5>
        </a>
        <a
          href="/"
          style={ location.includes('clientes') ? navLocationStyle : {} }
        >
          <i className="bi bi-person"> </i>
          <h5>
            CLIENTES
          </h5>
        </a>
        <a
          href="/"
          style={ location.includes('financeiro') ? navLocationStyle : {} }
        >
          <i className="bi bi-graph-up-arrow"> </i>
          <h5>
            FINANCEIRO
          </h5>
        </a>
        <a
          href="/"
        >
          <i className="bi bi-box-arrow-right"> </i>
          <h5>
            SAIR
          </h5>
        </a>
      </nav>
    </aside>
  );
}

export default SideBar;
