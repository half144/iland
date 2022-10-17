// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css"
const Slider = () => {


    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation
            speed={1400}
            className="slideContainer"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000 }}

        >
            <SwiperSlide className='slideItem'>
                <img src="https://images-americanas.b2w.io/spacey/acom/2022/10/14/IPHONE-14-americanas-home-destaque-desktop-1250x3131-74d7e4615304.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className='slideItem'>
                <img src="https://s.mlcdn.com.br/banner/campanhas/1410largedeskiphone14lancamentopreta.png" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider