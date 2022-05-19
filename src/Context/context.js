import React, { useContext, useState } from 'react'
export const AppContext = React.createContext()

export const FeaturesProvider = ({ children }) => {
  const [Pages, setPages] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [location, setLocation] = useState({})

  const displayModalHandler = () => {
    setShowModal(true)
  }

  const hideModalHandler = () => {
    setShowModal(false)
  }

  const displayMenuHandler = (page, location) => {
    setShowMenu(true)
    setPages([page])
    setLocation(location)
  }

  const hideMenuHandler = () => {
    setShowMenu(false)
  }
  return (
    <AppContext.Provider
      value={{
        Pages,
        showModal,
        showMenu,
        location,
        displayMenuHandler,
        hideMenuHandler,
        displayModalHandler,
        hideModalHandler,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
