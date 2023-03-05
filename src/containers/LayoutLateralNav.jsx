import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/LayoutLateralNav.scss'

export const LayoutLateralNav = ({ children }) => {
  const { openSideLeftMenu, setOpenSideLeftMenu } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenSide = (e) => {
    if (e.target.className === "LayoutLateralNav") {
      setOpenSideLeftMenu(e => !e)
      setIsOpen(e=>!e)
    }
  }
  return (
    
      <div className='LayoutLateralNav'>
        {children}
      </div>
    
  )
}
