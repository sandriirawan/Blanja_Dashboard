import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Product from '../pages/product'
import Transaction from '../pages/transaction'
import Category from '../pages/category'
import User from '../pages/user'
import Sidebar from '../component/sidebar'

function Router() {
  return (
    <>
  <BrowserRouter>
  <Sidebar>
  <Routes>
  <Route path='/' element={<Dashboard/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/transaction' element={<Transaction/>}/>
    <Route path='/user' element={<User/>}/>
  </Routes>
  </Sidebar>
  </BrowserRouter>
    </>
  )
}

export default Router