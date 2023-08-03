import React from 'react'
import Transactionlist from './Transactionlist'
import Transactionitem from './Transactionitem'

function LatestTransaction() {
  return (
    <div className='LatestTransaction'>
        <p className='p1'>LatestTransaction</p>
        <div className='LT1'>
        <div className='headlist'>
        <Transactionlist name="NameADS" total="Total Spent" status="status"/>
        </div>
        <div className='headlistnew'>
        <Transactionitem name="50% OFF Floor Lamp Get it Now!" total="$539.28" status="Paid"/>
        <Transactionitem name="50% OFF Floor Lamp Get it Now!" total="$349.28" status="Paid"/>
        <Transactionitem name="Lorem Ipsum sit dolor amet" total="$569.28" status="Paid"/>
        <Transactionitem name="50% OFF Floor Lamp Get it Now!" total="$564.28" status="Paid"/>
        <Transactionitem name="Lorem Ipsum sit dolor amet" total="$507.28" status="Paid"/>
        <Transactionitem name="Lorem Ipsum sit 50% OFF" total="$123.28" status="Paid"/>
        </div>
      
        </div>
    </div>
  )
}

export default LatestTransaction