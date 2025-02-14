import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import ProjectList from '../components/ProjectList/ProjectList.jsx'

function Projects() {


  return (
    <div className='my-projects'>
        <Navbar title="MIS PROYECTOS"/>
        <div>
          <ProjectList/>
        </div>

    </div>
  )
}

export default Projects