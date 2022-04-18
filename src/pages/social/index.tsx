import Head from "next/head";
import { CardSocial } from "../../components/CardSocial";

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

        <CardSocial
          title="Comunidade"
          description={`
            Como bons vizinhos, sempre que podemos, nos envolvemos em
            esforços locais para unir as pessoas e criar uma
            mudança positiva.
          `}
          banner="/community-banner.jpg"
        />
        <CardSocial
          title="Meio Ambiente"
          description={`
            Estamos buscando formas de minimizar o impacto ambiental de
            nossos produtos, lidar com as mudanças ambientais e inspirar
            outros a fazerem o mesmo.
          `}
          banner="/sourcing-banner.jpg"
        />
        <CardSocial
          title="Fornecimento Ético"
          description={`
            Estamos comprometidos em comprar e servir o café da mais alt
            qualidade, cultivado de forma responsável e comercializado com ética
            para ajudar a criar um futuro melhor para os produtores.
          `}
          banner="/environment-banner.jpg"
        />
      </main>

      <Footer />
    </>
  );
}