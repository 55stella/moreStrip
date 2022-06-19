import React from 'react'
import sublinks from './data'
import {useGlobalContex} from './Context'
import {FaTimes} from 'react-icons/fa'

const Sidebar = () => {
    const {isSidebarOpen,closeSidebar}= useGlobalContex()
    


  return (
    <main className= {`${isSidebarOpen ? 'sidebar-wrapper show':'sidebar-wrapper'}`}>
        <div className='sidebar'>
        {sublinks.map((item)=>{
            const{page, links} =item
            return <article className='sidebar-contents' >
                <h3>{page}</h3>
                <div className='sidebar-all-links'>
                    
                {links.map((item)=>{
                    const{url, icon, label} = item
                    return <a href={url} className='sidebar-links'>
                        {icon}
                        {label}
                    </a>
                })}
                </div>

             

            </article>
        })}
        <button onClick={closeSidebar} className='closesidebar'><FaTimes size={32}/></button>

        </div>
        

    </main>
  )
}

export default Sidebar