
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navigationbar from './components/Navigationbar'

import Home from "./pages/Home"
import Products from './pages/ProductListing'
import Cart from "./pages/Cart"
import Checkout from './pages/Checkout'
import ProductPage from './pages/ProductPage'
import { BrowserRouter } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
    <Navigationbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/products/:id" element={<ProductPage/>}></Route>
      
     </Routes>
     
    </BrowserRouter>
  )
}

export default App
