import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Product from "../pages/Product"
import Register from "../pages/Register"
import Search from "../pages/Search"
import Auth from "./auth"
import Store from "./store"


const Router = () => {

    return (
        <Routes>
            <Route element={<Store />}>
                <Route path="/" element={<Home />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="search" element={<Search />} />
            </Route>
            <Route element={<Auth />}>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    )
}

export default Router