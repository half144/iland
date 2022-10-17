import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"



const Auth = () => {

    return (
        <>
            <Navbar minimal={true} />
            <Outlet />
        </>

    )
}

export default Auth