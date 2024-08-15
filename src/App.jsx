import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import Profile from './components/profile/Profile'
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <>
      <CartProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>

            <Footer />
          </Router>
        </div>
      </CartProvider>
    </>
  )
}

export default App
