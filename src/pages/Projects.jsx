import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'



function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://lamansysfaketaskmanagerapi.onrender.com/api/projects')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setProjects(data);
    
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])


  return (
    <div className='my-projects'>
        <Navbar title="MY PROJECTS"/>
        <div>
          
        </div>

    </div>
  )
}

export default Projects