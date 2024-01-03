import styles from './MainPage.module.css';

function MainPage() {
  return (
    <section className={ styles['page-container'] }>
      <div>
        <h2>Bem vinda!</h2>
      </div>
      <div>
        <h3>
          Selecione alguma opção ao lado para navegar.
        </h3>
      </div>
    </section>
  );
}

export default MainPage;
