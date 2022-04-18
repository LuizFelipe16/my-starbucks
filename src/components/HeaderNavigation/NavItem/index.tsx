import { ActiveLink } from "../ActiveLink";

import styles from './styles.module.scss';

interface INavItemProps {
  text: string;
  href: string;
}

const NavItem = ({ text, href }: INavItemProps) => (
  <ActiveLink href={href} passHref shouldMatchExactHref>
    <div className={`${styles.link}`}>
      <a href="#">{text}</a>
      <hr />
    </div>
  </ActiveLink>
);

export { NavItem };