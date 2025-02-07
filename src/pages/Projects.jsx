import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProjectList from '../components/ProjectList'



function Projects() {


  return (
    <div className='my-projects'>
        <Navbar title="MY PROJECTS"/>
        <div>
          <ProjectList/>
        </div>

    </div>
  )
}

export default Projects