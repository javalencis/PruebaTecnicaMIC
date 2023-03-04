import { LayoutLateralNav } from '../containers/LayoutLateralNav'
import IconUser from '../assets/icons/user.svg'
import '../styles/SideLeftNav.scss'
export const SideLeftNav = () => {

    
    return (
        <LayoutLateralNav>
            <div className='SideLeftNav'>
                <div className='Sln-top'>
                    <p>¡HOLA!</p>
                    <button>
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
        </LayoutLateralNav>

    )
}
