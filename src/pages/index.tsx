import Head from 'next/head';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import styles from "../styles/sessions/welcome.module.scss";

function Page() {
  return (
    <>
      <Head><title>Starbucks</title></Head>
      <div className={styles.welcome}>
        <header className={styles.navigation}>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Contact</a>
        </header>

        <div className={styles.content}>
          <img src="/logo.png" alt="Logo Starbucks" />

          <div className={styles.texts}>
            <h1>
              It's not just Coffee
              <br /> It's <strong>Starbucks</strong>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit facere
              omnis molestiae error laborum eos, laudantium eaque qui odio aut
              quam quis aperiam debitis? Quos fugiat dignissimos iusto omnis ipsa?
            </p>
            <button>Learn More</button>
          </div>

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

        <div className={styles.image}>
          <div className={styles.img}>
            <img className={styles.frappuccino} src="/frappuccino.png" alt="Frappuccino for Starbucks" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;