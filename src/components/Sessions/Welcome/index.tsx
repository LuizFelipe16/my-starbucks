import { HeaderNavigation } from "../../HeaderNavigation";
import { scrollAnimationToSessionPageById } from "../../../utils/scrollAnimationToSessionPageById";

import styles from "./welcome.module.scss";

export function Welcome() {
  return (
    <section className={styles.welcome}>
      <HeaderNavigation />

      <div className={styles.content}>
        <h1>
          Não é só Café
          <br /> É <strong>Starbucks</strong>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit facere
          omnis molestiae error laborum eos, laudantium eaque qui odio aut
          quam quis aperiam debitis? Quos fugiat dignissimos iusto omnis ipsa?
        </p>
        <button type="button" onClick={() => scrollAnimationToSessionPageById("about")}>Saber mais</button>
      </div>

      <div className={styles.image}>
        <div className={styles.img}>
          <img className={styles.frappuccino} src="/frappuccino.png" alt="Frappuccino for Starbucks" />
        </div>
      </div>
    </section>
  );
}