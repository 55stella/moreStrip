import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import logo from './images/logo.svg'
import { Link } from 'react-router-dom'
import {useGlobalContex} from './Context'

const Navbar = () => {
    const{openSidebar} =useGlobalContex()

  return (
    <section>
        <nav className='nav-bar'>
        <div>
            <img src={logo} alt='title' />
            
        </div>
        
        <div className='links'>
             <Link to ='/' className='nav-links'>Products</Link>
            <Link to ='/developers' className='nav-links'>Developers</Link>
            <Link to ='/company' className='nav-links'>Company</Link>
        </div>
        <button className='sign-in'>Signin</button>
        <button className='menu' onClick={openSidebar} ><AiOutlineMenu size ={30}/></button>
        
        </nav>

     
    </section>
  )
}

export default Navbar