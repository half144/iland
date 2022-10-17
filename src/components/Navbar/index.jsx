import "./style.css"
import { BsSearch, BsCartFill, BsApple, BsPersonCircle } from "react-icons/bs"
import { useCart } from "../../context/CartContext"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Navbar = ({ minimal }) => {
    const { setIsOpenCart, counter } = useCart()
    const [query, setQuery] = useState("")
    const [minimalHeader, setMinimalHeader] = useState(minimal || false)
    const navigate = useNavigate()

    const handleSearch = e => {
        e.preventDefault()
        navigate(`/search?q=${query}`)
    }
    const handleCart = () => {
        setIsOpenCart(true)
    }
    useEffect(() => {
        const scrollListener = () => {
            if (scrollY > 73) {
                setMinimalHeader(true)
            } else {
                setMinimalHeader(false)
            }
        }
        if (!minimal) {
            window.addEventListener('scroll', scrollListener);
        }
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <nav style={{ "borderBottom": !minimal && "8px solid #a200ff" }}>
            <header id="header" className={minimalHeader ? "glassHeader" : ""} style={{
                "justifyContent": minimalHeader ? "space-evenly" : "space-around",
                "height": minimalHeader ? 40 : 70,
                "backgroundColor": !minimalHeader && "black",
            }}>
                <div className="logo" style={{
                    "order": minimalHeader && 2
                }}>
                    <Link to={"/"}>
                        <BsApple color="white" size={22} />
                    </Link>
                    {!minimalHeader && <h1 id="logo">iland</h1>}

                </div>
                {!minimalHeader && (
                    <form onSubmit={handleSearch} className={minimalHeader ? "minimal" : "search"}>
                        <input onChange={e => setQuery(e.target.value)} type="text" placeholder="buscar por produto" />
                        <BsSearch size={22} color="white" id="iconSearch" />
                    </form>
                )}
                <div onClick={() => navigate("/login")} className="login" style={{
                    "order": minimalHeader && 1
                }}>
                    <BsPersonCircle size={22} cursor="pointer" />
                    {!minimalHeader && <p>entre ou crie sua conta</p>}
                </div>
                <div className="cartHeaderArea" style={{
                    "order": minimalHeader && 3
                }}>
                    <BsCartFill color="white" size={22} cursor="pointer" onClick={handleCart} />
                    <div id="counter">{counter}</div>
                </div>

            </header>
            {!minimal && (
                <div className="navigations">
                    <ul>
                        <li>Iphones</li>
                        <li>Macbooks</li>
                        <li>Apple Whatchs</li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar