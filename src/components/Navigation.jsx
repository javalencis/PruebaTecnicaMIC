import '../styles/Navigation.scss'
import { Menu } from './Menu'
export const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li className='MenuWomen'> <p>MUJER</p> 
          <Menu/>
        </li>
        <li><p>HOMBRE</p> </li>
        <li><p>NEW ARRIVALS</p> </li>
        <li className='isCheck'><p>BÁSICOS</p> </li>
        <li><p>OFERTAS</p> </li>
        <li><p>BLOG</p> </li>
      </ul>
    </nav>
  )
}
