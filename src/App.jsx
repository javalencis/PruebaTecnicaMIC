import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { Product } from './components/Product'
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

    </>
  )
}

export default App
