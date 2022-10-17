import { Link } from "react-router-dom"
import "./style.css"


const CardProduct = ({ product }) => {

    return (
        <Link to={`/product/${product.id}`}>
            <div data-aos="flip-right" className="card" >
                <div data-aos="fade-left" className="productName">
                    <p>{product.productName}</p>
                </div>
                <img data-aos="fade-up" src={product.posterImg.src} alt={product.posterImg.alt} />

                <div data-aos="zoom-out" className="buyArea">
                    <p>R$ {product.price}</p>
                    <button>comprar</button>
                </div>
            </div>
        </Link>

    )
}


export default CardProduct