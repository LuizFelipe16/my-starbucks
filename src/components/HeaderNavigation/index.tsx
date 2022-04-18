import styles from './styles.module.scss';

const HeaderNavigation = () => (
  <header className={styles.navigation}>
    <img className={styles.logo} src="/logo.png" alt="Logo Starbucks" />

    <a href="#">Home</a>
    <a href="#">Menu</a>
    <a href="#">Contact</a>
  </header>
);

export { HeaderNavigation };