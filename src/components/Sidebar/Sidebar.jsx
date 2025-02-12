import { Link } from 'react-router-dom';
import './Sidebar.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Footer from '../Footer/Footer';

export const Sidebar = ({ sidebar, closeSidebar }) => {
  return (
    <>

      <div className="hamburger-icon" onClick={closeSidebar}>

        {sidebar ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      
    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      
          <div className='nav-menu-top'>

            <div className="nav-menu-logo">
              <Link to="/home">
                <span className="logo">Project Manager</span>
              </Link>
            </div>
          </div>
      <nav className='nav-menu-middle'>
        <ul className="nav-menu-items" onClick={closeSidebar}>
              
          <li className="nav-text">
            <Link to="/home">DASHBOARD</Link>
          </li>
          <li className="nav-text">
            <Link to="/my-projects">MIS PROYECTOS</Link>
          </li>
          <li className="nav-text">
            <Link to="/my-stories">MIS HISTORIAS</Link>
          </li>
          <li className="nav-text">
            <Link to="/settings">CONFIGURACIÓN</Link>
          </li> 
          <li className='nav-text'>
          </li>
          </ul>
          </nav>  
      <div className='nav-menu-bottom'>
       <Footer/>
      </div> 
      </div>
    </>
  );
};
