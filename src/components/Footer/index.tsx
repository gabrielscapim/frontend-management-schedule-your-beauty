import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={ styles.footer }>
      <span>
        Copyright © 2023 Isabela Colli. All Rights Reserved.
      </span>
      <span>
        Designed and developed by Gabriel Scapim.
      </span>
    </footer>
  );
}

export default Footer;
