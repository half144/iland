import "./style.css"
import { BsApple } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <div data-aos="fade-down" className="loginPage">
            <div className="modalLogin">
                <BsApple size={30} />
                <h1>Entrar</h1>
                <form id="login">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button>Entrar</button>
                </form>
                <p onClick={() => navigate("/register")}>Criar conta</p>
            </div>
        </div>
    )
}

export default Login