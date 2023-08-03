import React from 'react'
import Union from '../assets/Union.png'
import Options from  '../Elements/Options'
import Home from '../assets/Home.png'
import Category from '../assets/Category.png'
import Discovery from '../assets/Discovery.png'
import Activity from '../assets/Activity.png'
import Graph from '../assets/Graph.png'
import Editsquare from '../assets/EditSquare.png'
import Notification1 from '../assets/Notification1.png'
import Wallet from '../assets/Wallet.png'
function Sidebar() {
  return (
        <div className='sidebar1'>
        <img className='titimg' src={Union}/>
            <p className='tittxt'>Iklan</p>
            <Options name="Dashboard" a={Home}/>
            <Options name="Campaign" a={Category}/>
            <Options name="Social Network" a={Discovery}/>
            <Options name="Spending" a={Activity}/>
            <Options name="Analytics" a={Graph}/>
            <Options name="Form Campaign" a={Editsquare}/>
            <Options name="Notification" a={Notification1}/>
            <Options name="Payment" a={Wallet}/>




        </div>
  )
}

export default Sidebar