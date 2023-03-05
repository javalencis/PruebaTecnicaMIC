import { LayoutLateralNav } from '../containers/LayoutLateralNav'

import '../styles/SideLeftNav.scss'
import { useContext} from 'react'
import { AppContext } from '../context/AppContext'
export const SideLeftNav = () => {
    const {openSideLeftMenu,setOpenSideLeftMenu} = useContext(AppContext);

    const handleOpenSide=()=>{
        setOpenSideLeftMenu(val => !val)
    }
   
    return (    
        <>
          
            <div className={openSideLeftMenu ? 'SideLeftNav expanded':'SideLeftNav collapsed'}>
                <div className='Sln-top'>
                    <p>¡HOLA!</p>
                    <button onClick={handleOpenSide}>
                        X
                    </button>
                </div>
                <div className='Sln-menu'>
                    <ul className='Sln-menu--top'>
                        <li>MUJER</li>
                        <li>HOMBRE</li>
                    </ul>
                    <ul className='Sln-menu--center'>
                        <li>NEW ARRIVALS</li>
                        <li>BÁSICOS</li>
                        <li>OFERTAS</li>
                    </ul>
                    <ul className='Sln-menu--bottom'>
                        <li>MI CUENTA</li>
                        <li>MIS FAVORITOS</li>
                        <li>TIENDAS</li>
                        <li>TE AYUDAMOS</li>
                    </ul>
                </div>
            </div>
            <div className={openSideLeftMenu ? 'Sln-bg expanded' : 'Sln-bg collapsed'}
            onClick={handleOpenSide}
            ></div>
        </>

    )
}
