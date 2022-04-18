import styles from './styles.module.scss';

export function About() {
  return (
    <div className={styles.about}>
      <h2>
        Conforme abrimos nossas lojas, permanecemos no
        compromisso com a saúde e bem-estar <br /> de nossos partners e consumidores.
      </h2>

      <div className={styles.content}>
        <div>
          <img className={styles.coffee} src="/coffee.png" alt="Coffee" />
        </div>

        <p>
          Queridos clientes, partners e amigos, estamos acompanhando a situação atual do
          Brasil em relação ao COVID-19, focados na segurança e bem estar dos nossos
          partners (como chamamos os nossos colaboradores) e clientes.
          As lojas abertas ou com entrega via delivery, através do nosso parceiro Rappi,
          estão seguindo as orientações das autoridades de saúde.
        </p>
      </div>
    </div>
  );
}