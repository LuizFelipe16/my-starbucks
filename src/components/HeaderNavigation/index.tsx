import styles from './styles.module.scss';

const HeaderNavigation = () => (
  <header className={styles.navigation}>
    <img className={styles.logo} src="/logo.png" alt="Logo Starbucks" />

    <a href="#">HOME</a>
    <a href="#">MENU</a>
    <a href="#">IMPACTO SOCIAL</a>
  </header>
);

export { HeaderNavigation };