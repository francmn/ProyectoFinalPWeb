import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AllStoriesList from '../components/StoriesList/AllStoriesList.jsx'

function Stories() {
  return (
    <div className='my-stories'>
      <Navbar title='MIS HISTORIAS'/>
      <AllStoriesList></AllStoriesList>
     </div>
  )
}

export default Stories