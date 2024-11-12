import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'


function Epics() {

  const [epics, setEpics] = useState([])

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
    <div className='my-epics'>
        <Navbar title="MY EPICS"/>
        <div>
          
        </div>

    </div>
  )
}

export default Epics