import React from 'react'

const Character = ({ name, height, mass, birth_year }) => {
  return(
    <div className='characters'>
        <h2>Name: {name}</h2>
        <h4>Height: {height}cm</h4>
        <h4>Weight: {mass}kg</h4>
        <p>Age: {birth_year}</p>
    </div>  
  )
}

export default Character