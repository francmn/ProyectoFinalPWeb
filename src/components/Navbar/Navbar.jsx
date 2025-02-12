import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Sidebar } from "../Sidebar/Sidebar";
import { IconContext } from "react-icons";
import "./Navbar.css";

export const Navbar = ({ title }) => {
  const [sidebar, setSidebar] = useState(false); // Estado del Sidebar

  // Alternar Sidebar
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "whitesmoke" }}>
      <div className="navbar">
        <div onClick={toggleSidebar}>
        </div>
        <div className="navbar-title">
          <h1>{title}</h1>
        </div>
      </div>
      <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar} />
    </IconContext.Provider>
  );
};

export default Navbar;
