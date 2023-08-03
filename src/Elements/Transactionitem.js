import React from 'react'

function Transactionitem(props) {
  return (
    <div className='Tlistvalue'>
    <div className='Tlistnew'>
        <div className='sq'></div>
        <p className='exi'>{props.name}</p>
        <p className='exnew'>{props.total}</p>
        <div className='ex2item'>
        <p className='ex2new'>{props.status}</p>
        </div>
    </div>
    </div>
  )
}

export default Transactionitem