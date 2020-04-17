// Write your Character component here
import React from 'react';
import Character from './Character'

const CharacterCards = ({ results }) => {
  return (
    <div className="character-container">
      {
        results.map((result, id) => {
          return <Character name={result.name} height={result.height} mass={result.mass} birth_year={result.birth_year} key={id}/>
        })
      }
    </div>
  );
};

export default CharacterCards