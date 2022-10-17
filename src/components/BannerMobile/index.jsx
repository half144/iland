// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css"


const BannerMobile = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation
            speed={1400}
            className="slideContainerMobile"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000 }}

        >
            <SwiperSlide className='slideItemMobile'>
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-pro-202209_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1661181418349" alt="" />
            </SwiperSlide>
            <SwiperSlide className='slideItemMobile'>
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s8-202209_GEO_BR_FMT_WHH?wid=658&hei=900&fmt=p-jpg&qlt=95&.v=1661792334239" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default BannerMobile