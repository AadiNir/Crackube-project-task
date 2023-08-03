import React from 'react'
import Search from '../assets/Search.png'
import Ele1 from '../Elements/Ele1'
import Notification from '../assets/Notification.png'
import Message from '../assets/Message.png'
import Setting from '../assets/Setting.png'
import Profile from '../assets/Ellipse.png'

function Navbar() {
  return (
    <div className='Nav1'>
        <div className="Nav">
            <img className='searchim' src={Search}/> 
            <input placeholder='Search here' className='search'/> 
            <div className='el1'>
                <Ele1 a={Notification} />   
                <Ele1 a={Message} />
                <Ele1 a={Setting}/>
            </div>  
          
            <img className='profilepic' src={Profile}/>
            <div className='txt1'>
                <p className='b'>Samantha</p>
                <p className='m'>Peterdraw.co</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar