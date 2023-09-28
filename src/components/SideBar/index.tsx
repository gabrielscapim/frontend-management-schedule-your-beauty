import { useEffect, useState } from 'react';
import styles from './SideBar.module.css';

function SideBar() {
  const location = window.location.href;
  const navLocationStyle = {
    backgroundColor: '#e3d5eb',
  };
  const displayNoneStyle = {
    display: 'none',
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  return (
    <aside className={ styles['side-bar'] }>
      <nav className={ styles.nav }>
        <a
          href="/agendamentos"
          style={ location.includes('agendamentos') ? navLocationStyle : {} }
        >
          <i className="bi bi-clock"> </i>
          <h5 style={ width <= 824 ? displayNoneStyle : {} }>
            Agendamentos
          </h5>
        </a>
        <a
          href="/"
          style={ location.includes('gerenciar-datas') ? navLocationStyle : {} }
        >
          <i className="bi bi-calendar"> </i>
          <h5 style={ width <= 824 ? displayNoneStyle : {} }>
            Datas
          </h5>
        </a>
        <a
          href="/"
          style={ location.includes('cliented') ? navLocationStyle : {} }
        >
          <i className="bi bi-person"> </i>
          <h5 style={ width <= 824 ? displayNoneStyle : {} }>
            Clientes
          </h5>
        </a>
        <a
          href="/"
          style={ location.includes('financeiro') ? navLocationStyle : {} }
        >
          <i className="bi bi-graph-up-arrow"> </i>
          <h5 style={ width <= 824 ? displayNoneStyle : {} }>
            Financeiro
          </h5>
        </a>
      </nav>
    </aside>
  );
}

export default SideBar;
