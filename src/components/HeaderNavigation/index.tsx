import { NavItem } from './NavItem';

import styles from './styles.module.scss';

const HeaderNavigation = () => (
  <header className={styles.navigation}>
    <img className={styles.logo} src="/logo.png" alt="Logo Starbucks" />

    <div>
      <NavItem text="HOME" href="/" />
      <NavItem text="MENU" href="/menu" />
      <NavItem text="IMPACTO SOCIAL" href="/social" />
    </div>

    <a href="#">Entrar</a>
  </header>
);

export { HeaderNavigation };