import {Link, NavLink} from 'react-router-dom'
import { AiOutlineMenu, AiOutlineLeft, AiOutlineClose, AiOutlineUser } from "react-icons/ai"
import { useContext, useState } from 'react'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import Title from './Title'

export const Navbar = ({title}) => {

    const [sidebar, setSidebar] = useState(false) 

    const showSidebar = () => setSidebar(!sidebar)


    return(

        <IconContext.Provider value={{color: 'whitesmoke'}}>
        <>
            <div className='navbar'>
                <Link to="#" className='menu-bars'>
                <div>
                    <AiOutlineMenu size="1.2em" onClick={showSidebar}/>
                 </div>
                </Link>

                <h1>{title}</h1>

                <Link to="/home">

               <span className='logo'>
                PM
                 </span> 
                 </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>             
                <ul className='nav-menu-items' onClick={showSidebar}> 
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars' >
                            <AiOutlineClose size='1em'/>

                        </Link>
                    </li>
                    <Link to="/home">
                    <li className='logo'>
                        PM
                    </li>
                    </Link>
                    <hr></hr>
                    
                    {SidebarData.map((item, index) => { 
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>      
                            <span>{item.title}</span>
                              
                            </Link>
                        </li>
                           
                    )
                    }
                    )
                    }

                    <hr></hr>

                    <li className='nav-text'>
                    
                        <Link to="/settings">
                            
                        <AiOutlineUser size='1.3em'/><span>fran.cmn</span>
                        </Link>

                    </li>

                </ul> 
            </nav>         
        </>
        </IconContext.Provider>
    )
}

export default Navbar