import '../styles/Header.scss'
import { Elements } from './Elements'
import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { Search } from './Search'


export const Header = () => {
  return (
    <header className="Header">
        <Logo/>
        <Navigation/>
        <Search/>
        <Elements/>
    </header>
  )
}
