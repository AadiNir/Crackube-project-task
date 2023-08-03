import React from 'react'
import CBbox from '../Elements/CBbox'
import LatestTransaction from '../Elements/LatestTransaction'
import Paymentdue from '../Elements/Paymentdue'

function Homepage() {
  return (
    <div className='Homepage'>
        <div className='Homeinside'>
            <p className='Hometext'>New Campaign</p>
            <CBbox/>
            <LatestTransaction/>
            <Paymentdue/>
        </div>
    </div>
  )
}

export default Homepage