import React from 'react'

function Options(props) {
  return (
    <div className='optionsmain'>
        <img className='optionsimg' src={props.a}/>
        <p className='optionst'>{props.name}</p>
    </div>
  )
}

export default Options