import { useContext } from 'react'
import '../styles/Header.scss'
import { Elements } from './Elements'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Search } from './Search'


export const Header = ({setOpenSideLeftMenu}) => {
  const handleOpenSide=()=>{
    setOpenSideLeftMenu(val => !val)
}
  return (
    <header className="Header">
      <div className='Hd-container'>
        <div className='Hd-MenuBurguer'>
          <img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/hamburguer___76273e1c61256646e4cd588748ee2756.svg" alt="" onClick={handleOpenSide}/>
          <Search view="tablet"/>
        </div>
        <Logo />
        <Navigation />
        <Search view="desktop" />
        <Elements />


      </div>

    </header>
  )
}
