import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import Shops from './pages/Shops/Shops'
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="pages">
          <Routes>
            <Route path="/shops" element={<Shops />}></Route>
            <Route path="/shoppingcart" element={<ShoppingCart />}></Route>{' '}
          </Routes>{' '}
        </main>{' '}
      </BrowserRouter>{' '}
    </div>
  )
}

export default App
