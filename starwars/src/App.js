import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"; // import axios to fetch Star Wars data
import CharacterCards from "./components/CharacterCards";

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // assign url variable to the base url of the API key link
const url = "https://swapi.py4e.com/api/people/";

const App = () => {

  const [starWarsData, setStarWarsData] = useState(null);

  // useEffect to axios the API needed.
  useEffect(() => {
    axios.get(`${url}`)
      .then(res => {
        console.log(res.data);
        setStarWarsData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  if (!starWarsData) {
    return null;
  }

  return (
    <div className="App">
      <h1>Space ID Card Applicants</h1>
      <CharacterCards results={starWarsData.results} />
    </div>
  );
}

export default App;
