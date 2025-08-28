import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashBoard from './pages/DashBoard'
import products from './../data.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'

function App() {
  const [isRegistered, setIsRegister] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage setIsRegister={setIsRegister}/>}></Route>
          <Route path='/dashBoard' element={<DashBoard  products={products} />}></Route>
          <Route path='/dashBoard/:ID/*' exact element={<ProductInfo />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
