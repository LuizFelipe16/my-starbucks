import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import styles from './styles.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.social_medias}>
      <a href="#">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
    </div>
  </div>
);

export { Footer };