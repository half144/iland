import "./style.css"
import { BsApple } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    return (
        <div data-aos="fade-down" className="register">
            <div className="modalRegister">
                <BsApple size={30} />
                <h1>Criar conta</h1>
                <form id="register">
                    <input type="text" placeholder="Nome completo" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirmar senha" />
                    <button>Criar conta</button>
                </form>
                <p onClick={() => navigate("/login")}>Já tenho uma conta</p>
            </div>
        </div>
    )
}

export default Register