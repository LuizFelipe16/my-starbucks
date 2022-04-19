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
          <a
            href="https://manyplaces-p.s3-sa-east-1.amazonaws.com/starbucks/site/cardapio-sb-brasil.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            Clique aqui para acessar nosso Cardápio Digital
          </a>
          <p>Cardápio sem preço. Consulte nossos baristas para saber mais</p>
        </div>

        <div className={styles.options}>
          <div>
            <h2>Tabela Nutricional <br /> Bebidas</h2>
            <a
              href="https://manyplaces-p.s3-sa-east-1.amazonaws.com/starbucks/site/tabela_nutricional_bebidas.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              Abrir
            </a>
          </div>
          <div className={styles.digital}>
            <h2>Tabela de <br /> Alergênicos</h2>
            <a
              href="https://manyplaces-p.s3-sa-east-1.amazonaws.com/starbucks/site/Tabela_Alergenicos_Bebidas_2019.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              Abrir
            </a>
          </div>
          <div>
            <h2>Tabela Nutricional <br /> Comidas</h2>
            <a
              href="https://manyplaces-p.s3-sa-east-1.amazonaws.com/starbucks/site/tabela_nutricional_food.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              Abrir
            </a>
          </div>
        </div>

        <img className={styles.coffee_singa} src="/singapore.png" alt="Coffee" />
        <div className={styles.coffee_choco}>
          <img className={styles.coffee_choco} src="/choco.png" alt="Coffee" />
        </div>
      </main>

      <Footer />
    </>
  );
}