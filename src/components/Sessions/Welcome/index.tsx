import { HeaderNavigation } from "../../HeaderNavigation";

import styles from "./welcome.module.scss";

export function Welcome() {
  return (
    <div className={styles.welcome}>
      <HeaderNavigation />

      <div className={styles.content}>
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

      <div className={styles.image}>
        <div className={styles.img}>
          <img className={styles.frappuccino} src="/frappuccino.png" alt="Frappuccino for Starbucks" />
        </div>
      </div>
    </div>
  );
}