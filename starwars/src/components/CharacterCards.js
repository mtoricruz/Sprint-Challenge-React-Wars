// Write your Character component here
import React from 'react';
import Character from './Character'

const CharacterCards = ({ results }) => {
  return (
    <div className="character-container">
      {
        results.map(result => {
          return <Character character={result}/>
        })
      }
    </div>
  );
};

export default CharacterCards