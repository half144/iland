import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"



const Store = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Store