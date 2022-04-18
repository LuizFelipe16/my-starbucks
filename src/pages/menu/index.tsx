import Head from "next/head";

import { Footer } from "../../components/Footer";
import { HeaderNavigation } from "../../components/HeaderNavigation";

import styles from "./styles.module.scss";

export default function Menu() {
  return (
    <>
      <Head><title>Menu | Starbucks</title></Head>

      <main className={styles.menu}>
        <HeaderNavigation />

        <div className={styles.header_texts}>
          <h1>CARDÁPIO</h1>
          <p>Cardápio sem preço. Consulte nossos baristas para saber mais</p>
        </div>

        <div className={styles.options}>
          <div>
            <h2>Tabela Nutricional <br /> Bebidas</h2>
            <a href="#"> Ver mais</a>
          </div>
          <div className={styles.digital}>
            <h2>Tabela de <br /> Alergênicos</h2>
            <a href="#"> Ver mais</a>
          </div>
          <div>
            <h2>Tabela Nutricional <br /> Comidas</h2>
            <a href="#"> Ver mais</a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}