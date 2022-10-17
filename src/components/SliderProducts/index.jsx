// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css"
import CardProduct from '../CardProduct';


const SliderProducts = ({ name, products }) => {

    return (
        <div className="sliderAreaView">
            <h1 data-aos="fade-right">{name}</h1>
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                navigation
                speed={600}
                className="sliderProducts"
                scrollbar={{ draggable: true }}
                slidesPerView={"auto"}
                spaceBetween={10}

            >
                {products && products.map(product => (
                    <SwiperSlide key={product.id}>
                        <CardProduct product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderProducts