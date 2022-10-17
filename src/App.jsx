import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { useCart } from './context/CartContext'
import useAOS from './hooks/useAos'
import Router from './routes'

function App() {
  const { isOpenCart } = useCart()
  useEffect(() => {
    useAOS({ duration: 800, once: true })
  }, [])

  return (
    <BrowserRouter>
      <Cart isOpen={isOpenCart} />
      <div className="App">
        <div className="container">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
