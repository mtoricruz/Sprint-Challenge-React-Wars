import React from 'react'
import styled from 'styled-components'

const Info = styled.h4`
    &:hover {
        color:red;
        transition: all 0.6s ease-in-out;
        font-size: 24px;
    }
    transition: all 0.5s ease-in-out;
    background-color: black;
    margin-right: 30%;
    margin-left: 30%;
`

const Character = ({ name, height, mass, birth_year }) => {
  return(
    <div className='characters'>
        <h2>Name: {name}</h2>
        <Info className="height">Height: {height}cm</Info>
        <Info className="weight">Weight: {mass}kg</Info>
        <Info className="age">Age: {birth_year}</Info>
    </div>  
  )
}

export default Character