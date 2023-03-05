import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { SideLeftNav } from './components/SideLeftNav'
import { SideLeftNavWomen } from './components/SideLeftNavWomen'
import { AppContext } from './context/AppContext'


function App() {
  const { openSideLeftMenu,setOpenSideLeftMenu } = useContext(AppContext)

  return (
    <>
      <Header setOpenSideLeftMenu={setOpenSideLeftMenu}/>
      <SideLeftNav />
      <SideLeftNavWomen/>

    </>
  )
}

export default App
