import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Menu } from "./Menu";
import '../styles/SideLeftNavWomen.scss'

export const SideLeftNavWomen = () => {
    const { openSideLeftMenuWm, setOpenSideLeftMenuWm } = useContext(AppContext);

    const handleOpenSide = () => {
        setOpenSideLeftMenuWm(val => !val)
    }
    return (
        <>
            <div className={openSideLeftMenuWm ? 'SideLeftNav expanded' : 'SideLeftNav collapsed'}>
                <div className='Sln-top'>
                    <p>¡HOLA!</p>
                    <button onClick={handleOpenSide}>
                        X
                    </button>
                </div>
                <div className='Sln-menu'>
                    <button className="Sln-menu--button" onClick={handleOpenSide}>
                        VOLVER
                    </button>
                    <div className="Sln-menu--wm">
                        <div className='menu--wm-top'>
                            <h2>Mujer</h2>
                            <p>Ver todo</p>
                        </div>
                        <nav>
                            <ul>
                                <li>Camisetas <span></span></li>
                                <li>Pijamas<span></span></li>
                                <li>Ropa interior<span></span></li>
                                <li>Chaquetas y Buzos<span></span></li>
                                <li>Joggers,pantalones y shorts<span></span></li>
                                <li>Calzado<span></span></li>
                                <li>Accesorios<span></span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={openSideLeftMenuWm ? 'Sln-bg expanded' : 'Sln-bg collapsed'}
                onClick={handleOpenSide}
            ></div>
        </>
    )
}
