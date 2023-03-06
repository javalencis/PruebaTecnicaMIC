import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { Product } from './components/Product'
import { SideCart } from './components/SideCart'
import { SideLeftNav } from './components/SideLeftNav'
import { SideLeftNavWomen } from './components/SideLeftNavWomen'
import { AppContext } from './context/AppContext'


function App() {
  const {setOpenSideLeftMenu } = useContext(AppContext)

  return (
    <>
      <Header setOpenSideLeftMenu={setOpenSideLeftMenu}/>
      <Product/>
      <SideLeftNav />
      <SideLeftNavWomen/>
      <SideCart/>

    </>
  )
}

export default App
