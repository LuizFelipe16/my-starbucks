import Head from "next/head";

import { CarouselSocial } from "../../components/CarouselSocial";
import { Footer } from "../../components/Footer";
import { HeaderNavigation } from "../../components/HeaderNavigation";

import styles from "./styles.module.scss";

export default function Social() {
  return (
    <>
      <Head><title>Impacto Social | Starbucks</title></Head>

      <main className={styles.social}>
        <HeaderNavigation />

        <h1>Uma empresa que trabalha com responsabilidade social</h1>

        <div className={styles.card_green}>
          <h2>
            Acreditamos que podemos e devemos gerar um impacto positivo <br />
            nas comunidades em que atuamos.
          </h2>
          <p>
            Desde que abrimos nossa primeira loja em 1971, buscamos a confiança e o
            respeito de nossos clientes, partners e vizinhos. Como? Tendo responsabilidade
            e fazendo coisas boas para o planeta e para as pessoas.
          </p>
        </div>

        <CarouselSocial />
      </main>

      <Footer />
    </>
  );
}