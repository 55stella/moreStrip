import React from 'react'
import NavbarContainer from './NavbarContainer'
import { Link, Outlet } from 'react-router-dom'

const Sharedlayout = () => {
  return (
    <div><NavbarContainer/>
       <Outlet/>

    </div>
  )
}

export default Sharedlayout