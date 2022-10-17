import { useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import useGetProducts from "../../hooks/useGetProducts"
import "./style.css"

const Product = () => {
    const { id } = useParams()
    const [currentImage, setCurrentImage] = useState(1)
    const { products: product } = useGetProducts(`product/${id}`)
    const { addToCart } = useCart()


    return (

        <div className="product">
            {product && (
                <>
                    <div className="image">
                        <img data-aos="flip-right" id="currentImg" src={product.images[currentImage].value.srcSet.src} alt="" />
                        <div className="images">
                            {product.images.map((image, i) => (
                                <div data-aos="fade-right" key={image.value.srcSet.src} className="cardImgPreview">
                                    <img src={image.value.srcSet.src} alt="" onClick={() => setCurrentImage(i)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-aos="fade-down" className="details">
                        <h1>{product.productName}</h1>
                        <p>R$ {product.price}</p>
                        <button>comprar agora</button>
                        <p id="addCart" onClick={() => addToCart(product)}>adicionar ao carrinho</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Product