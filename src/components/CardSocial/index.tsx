import styles from "./styles.module.scss";

interface ICardSocial {
  title: string;
  description: string;
  banner: string;
}

const CardSocial = ({ title, description, banner }: ICardSocial) => (
  <div
    className={styles.card}
    style={{
      backgroundImage: `url(${banner})`
    }}
  >
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">Saiba mais</a>
    </div>
  </div>
);

export { CardSocial };