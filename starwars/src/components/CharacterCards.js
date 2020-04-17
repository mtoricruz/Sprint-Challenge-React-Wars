// Write your Character component here
import React from 'react';
import Character from './Character'
import styled from "styled-components"

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
`

const CharacterContainer = styled.div`
    background-color: white;
    opacity: 90%;
    width: 40%;
    padding-top: 3%;
    padding-bottom: 3%;
    margin: 2%;
    border-radius: 20px;
`

const CharacterCards = ({ results }) => {
  return (
    <ContentContainer>  
        <CharacterContainer className="character-container">
        {
            results.map((result, id) => {
            return <Character name={result.name} height={result.height} mass={result.mass} birth_year={result.birth_year} key={id}/>
            })
        }
        </CharacterContainer>
    </ContentContainer>    
  );
};

export default CharacterCards