import BannerMobile from "../../components/BannerMobile"
import BannerPresentation from "../../components/BannerPresentation"
import Products from "../../components/Products"
import Slider from "../../components/Slider"
import SliderProducts from "../../components/SliderProducts"
import useGetProducts from "../../hooks/useGetProducts"
import "./style.css"


const Home = () => {
    const { products: iphones } = useGetProducts("iphones")
    const { products: mac } = useGetProducts("mac")
    return (
        <div className="home">
            <BannerMobile />
            <Slider />
            <Products name={"Iphones"} products={iphones} />
            <SliderProducts name={"Mac"} products={mac} />
            <BannerPresentation />
        </div>
    )
}

export default Home