import { BsXCircleFill } from "react-icons/bs"
import { useCart } from "../../context/CartContext"
import CartItem from "../CartItem"
import "./style.css"

const Cart = ({ isOpen }) => {
    const { setIsOpenCart, cartItems, total } = useCart()
    const handleCart = () => {
        setIsOpenCart(false)
    }

    return (
        <div className="cart" style={{
            "transform": isOpen ? "translateX(0px)" : "translateX(700px)"
        }}>
            <div className="headerCart">
                <BsXCircleFill size={40} color={"black"} cursor={"pointer"} onClick={handleCart} />
            </div>
            <div className="cartItems">
                {cartItems && cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} product={cartItem} />
                ))}
            </div>
            <div className="total">
                <p>Total: <b>R${total}</b></p>
                <button>concluir compra</button>
            </div>
        </div>
    )
}

export default Cart