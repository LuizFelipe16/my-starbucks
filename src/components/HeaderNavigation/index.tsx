import { useBreakpointValue } from "@chakra-ui/react";
import { NavItem } from './NavItem';
import { SidebarNav } from "./SidebarNav";

import styles from './styles.module.scss';

const HeaderNavigation = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return (
      <SidebarNav />
    );
  }

  return (
    <header className={styles.navigation}>
      <img className={styles.logo} src="/logo.png" alt="Logo Starbucks" />

      <div>
        <NavItem text="HOME" href="/" />
        <NavItem text="MENU" href="/menu" />
        <NavItem text="IMPACTO SOCIAL" href="/social" />
      </div>

      <a href="#">Entrar</a>
    </header>
  )
}

export { HeaderNavigation };