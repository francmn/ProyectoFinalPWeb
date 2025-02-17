import React, { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Navbar.css";
import BackButton from "../BackButton/BackButton";
import { useLocation } from "react-router-dom";

export const Navbar = ({ title = "HOME" }) => {
  const [sidebar, setSidebar] = useState(false);
  // Alternar Sidebar
  const toggleSidebar = () => setSidebar(!sidebar); 

  const location = useLocation()


  
  return (
   
    <div className="navbar">
    { location.pathname === '/' || location.pathname === '/home' || location.pathname === '/settings' || location.pathname === '/my-projects' || location.pathname === '/my-stories' ? (
        <>
          <div onClick={toggleSidebar}></div>
        
            <div className="navbar-title">
               <h1>{title}</h1>
            </div>
       
          <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
        </>
      
      ) : (
        <>
        <BackButton/>
        <div className="navbar-title"> 
               <h1>{title}</h1>
        </div>
        </>
      )
    }
    </div>
  );
};

export default Navbar;
