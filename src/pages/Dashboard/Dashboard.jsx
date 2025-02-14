import React from "react";
import './Dashboard.css'
import Navbar from "../../components/Navbar/Navbar";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const Dashboard = () => {
  const username = localStorage.getItem("username")
  const name = localStorage.getItem("name")
  console.log(username);

  return (
    <div>
    
    <Navbar title="HOME"/>    
    <div className="welcome"> Bienvenid@, {name}.</div>
    <div >
    </div>
    <div className="calendar"> <Calendar/> </div>
    
   
   {/*
   <h1>Resumen:</h1>
    <h2>Proyectos activos: </h2>
    <h2>Épicas: </h2>
    <h2>Historias: </h2>
    <h2>Tareas: </h2>
    */}
    </div>
    
  );
};

export default Dashboard;
