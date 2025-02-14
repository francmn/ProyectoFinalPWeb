import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import EpicsList from '../components/EpicsList/EpicsList.jsx'



function Epics() {


  return (
    <div className='my-epics'>
        <Navbar title="ÉPICAS"/>
        <EpicsList/>
    </div>
  )
}

export default Epics