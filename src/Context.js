import React from 'react'
import { useContext, useState } from 'react'

const Appcontext = React.createContext()

const Context = ({children}) => {
    const[isMenuopen, setIsmenuOpen] = useState(false)
    const[isSidebarOpen, setIssidebarOpen] = useState(false)
    
const openSidebar = ()=>{
    setIssidebarOpen(true)
}
const closeSidebar = ()=>{
    setIssidebarOpen(false)
}
const openSubmenu = ()=>{
    setIsmenuOpen(true)
}
const closeSubmenu = ()=>{
    setIsmenuOpen(false)
}



  return (
    <Appcontext.Provider value ={{isSidebarOpen, isMenuopen, openSidebar,closeSidebar}}>
       {children}

    </Appcontext.Provider>
  )

   
}
export const useGlobalContex =()=>{
    return useContext(Appcontext)
}
export {Context}

export default Context