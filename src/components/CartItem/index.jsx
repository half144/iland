
const CartItem = ({ product }) => {

    return (
        <div className="cartItem">
            <div className="productItemCart">
                <img src={product.posterImg.src} alt="" />
                <p id="nameProductCart">{product.productName}</p>
            </div>
            <p id="priceProductCart">{product.price}</p>
        </div>
    )
}

export default CartItem