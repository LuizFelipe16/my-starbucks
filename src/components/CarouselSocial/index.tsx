import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardSocial } from "./CardSocial";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import styles from './styles.module.scss';

const CarouselSocial = () => (
  <div className={styles.carousel_social}>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <CardSocial
          title="Comunidade"
          description={`Como bons vizinhos, sempre que podemos, nos envolvemos em esforços locais para unir as pessoas e criar uma mudança positiva.`}
          banner="/community-banner.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <CardSocial
          title="Meio Ambiente"
          description={`Estamos buscando formas de minimizar o impacto ambiental de nossos produtos, lidar com as mudanças ambientais e inspirar outros a fazerem o mesmo.`}
          banner="/sourcing-banner.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <CardSocial
          title="Fornecimento Ético"
          description={`Estamos comprometidos em comprar e servir o café da mais alta qualidade, cultivado de forma responsável e comercializado com ética para ajudar a criar um futuro melhor para os produtores.`}
          banner="/environment-banner.jpg"
        />
      </SwiperSlide>
    </Swiper>
  </div>
);

export { CarouselSocial };