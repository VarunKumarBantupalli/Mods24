import React from 'react'
import Navbar from '../Navbar'
import Body from '../body/Body'
import { useState } from 'react'

const Home = () => {

  const [requiredData, setRequiredData] = useState([]);
  return (
    <div>
            <Navbar setRequiredData={setRequiredData} />
            <Body requiredData={requiredData} />
      
    </div>
  )
}

export default Home
