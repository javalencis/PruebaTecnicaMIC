import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../styles/Elements.scss'

export const Elements = () => {
  const {shoppingCart, setOpenSideCart } = useContext(AppContext)
  const handleOpenSideCart = () => {
    setOpenSideCart(e=>!e)
  }

  return (
    <div className="Elements">
      <ul>
        <li><img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/faq___644975c18e3eaa506fbf13b6ad9c920b.svg" alt="" /></li>
        <li><img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/user-icon___ef462ae332ac1193a82a58bfde8ac473.svg" alt="" /></li>
        <li><img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/heart-icon___5e5273482e1c181e22053a06bc56956d.svg" alt="" /></li>
        <li><img src="https://moviesshopco.vtexassets.com/arquivos/map-locator-2.svg" alt="" /></li>
        <li onClick={handleOpenSideCart}><img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/shopping___eba0ed4ccfbadce9d287241eabeed60f.svg" alt="" />
        {
          shoppingCart.length>0 && ( <span className='cartIndicator'>{shoppingCart.length}</span>)
     
        }
        </li>
      </ul>
    </div>
  )
}
