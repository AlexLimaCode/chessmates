import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
import 'swiper/css/pagination';
import Rey1 from '../images/Rey1.jpeg';
import Queen from '../images/Queen.png';
import Anillo from '../images/anillo.png';
import Arete from '../images/arete.png';
import Aretee from '../images/aretee.png';
import Bannerreyes from '../images/bannerreyes.png';
import Cadena from '../images/cadena.png';
import Capaa from '../images/capaaa.png';
import Collar from '../images/collar.png';
import Coronaa from '../images/coronaa.png';
import Flores from '../images/flores.png';
import Ojos from '../images/ojos.png';
import Pul from '../images/pul.png';


const SwiperExample = () => {

    return(
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={Coronaa} className="rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Collar} className="rounded-xl"  />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Pul} className="rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Aretee} className="rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Cadena} className="rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ojos} className="rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Flores} className="rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Arete} className="rounded-xl" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Anillo} className="rounded-xl" />
            </SwiperSlide>
      </Swiper>
    );
    
};




export default SwiperExample;