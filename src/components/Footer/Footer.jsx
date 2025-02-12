import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

function Footer() {
  const username = localStorage.getItem("username");
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname")


  return (
    <div className='footer'>

    <Link to="/settings">
    
          <h2><AiOutlineUser/>{" "}{name}{" "}
          {surname}
          {" ("}
          {username}
          {") "}
           </h2>
        </Link>
 
    </div>
    
  )
}

export default Footer