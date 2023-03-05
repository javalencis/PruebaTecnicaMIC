import React, { createContext, useState } from 'react'

export const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [openSideLeftMenu, setOpenSideLeftMenu] = useState(false)

  return (
    <AppContext.Provider
        value={{
            openSideLeftMenu,
            setOpenSideLeftMenu
        }}
    >
        {children}
    </AppContext.Provider>
  )
}
