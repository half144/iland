import CardProduct from "../CardProduct"
import "./style.css"

const Products = ({ name, products }) => {

    return (
        <div className="products">
            <h1 data-aos="fade-right">{name}</h1>
            <div className="productsArea">
                {products && products.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}


export default Products