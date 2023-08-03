import React from 'react'

function Transactionlist(props) {
  return (
        <div className='Tlist'>
            <div className='sq'></div>
            <p >{props.name}</p>
            <p className='ex'>{props.total}</p>
            <p className='ex2'>{props.status}</p>
        </div>
  )
}

export default Transactionlist