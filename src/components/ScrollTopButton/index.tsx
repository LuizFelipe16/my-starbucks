import { animateScroll } from 'react-scroll';

import styles from './styles.module.scss';

const ScrollTopButton = () => (
  <button
    type="button"
    onClick={() => animateScroll.scrollToTop({ duration: 1000 })}
    className={styles.scroll_top_button}
  >
    Voltar ao topo da página
  </button>
);

export { ScrollTopButton };