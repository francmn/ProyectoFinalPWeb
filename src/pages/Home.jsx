import React from "react";
import '../styles.css'
import Navbar from "../components/Navbar/Navbar";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Home = () => {
  const name = localStorage.getItem("name")

  return (
    <div className="contenedor">
    
    <Navbar/>    
    <div className="welcome"> Bienvenid@, {name}.</div>
    <div className="calendar"> <Calendar/> </div>
  
  </div>
    
  );
};

export default Home;
