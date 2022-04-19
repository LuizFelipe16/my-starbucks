import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ScrollTopButton } from '../ScrollTopButton';

import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <div>
        <h1>Sobre nós</h1>
        <p>Nossa empresa</p>
        <p>Nosso café</p>
        <p>Atendimento ao cliente</p>
      </div>

      <div>
        <h1>Impacto Social</h1>
        <p>Comunidade</p>
        <p>Meio Ambiente</p>
        <p>Histórias Starbucks</p>
      </div>

      <div>
        <h1>Starbucks Rewards</h1>
        <p>Baixe o Aplicativo</p>
        <p>Termos e condições do Starbucks Card</p>
        <p>Termos e condições do Starbucks Promoções</p>
      </div>

      <div>
        <ScrollTopButton />
      </div>
    </div>

    <hr />
    <div>
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

      <p>Política de privacidade | Política de troca de produto | Termos de uso | Política de Cookies</p>

      <p>2022 by Luiz Felipe.</p>
    </div>
  </footer>
);

export { Footer };