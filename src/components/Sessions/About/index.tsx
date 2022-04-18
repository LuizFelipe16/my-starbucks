import styles from './styles.module.scss';

export function About() {
  return (
    <section className={styles.about}>
      <h2>
        Conforme abrimos nossas lojas, permanecemos no
        compromisso com a saúde e bem-estar <br /> de nossos partners e consumidores.
      </h2>

      <div className={styles.content}>
        <div className={styles.image_coffee}>
          <img className={styles.coffee} src="/coffee.png" alt="Coffee" />
        </div>

        <div className={styles.texts}>
          <p>
            Queridos clientes, partners e amigos, estamos acompanhando a situação atual do
            Brasil em relação ao COVID-19, focados na segurança e bem estar dos nossos
            partners (como chamamos os nossos colaboradores) e clientes.
            As lojas abertas ou com entrega via delivery, através do nosso parceiro Rappi,
            estão seguindo as orientações das autoridades de saúde.
          </p>
          <button>Baixe nosso app e veja as lojas em funcionamento</button>
        </div>

      </div>
    </section>
  );
}