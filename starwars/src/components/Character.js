import React from 'react'

const Character = ({ name, homeworld, films, species }) => {
  return(
    <div className='characters'>
        <h2>{name}</h2>
        <h4>{homeworld}</h4>
        <h4>{species}</h4>
        <p>{films}</p>
    </div>  
  )
}

export default Character