import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [chars, setChars]  = useState([])
  useEffect(()=>{
    axios
    .get('https://swapi.dev/api/people/')
    .then(result =>{
      setChars(result.data.results)
      console.log(result.data.results)
    })
    console.log (chars)
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {chars.map(x => <Character chars = {x}/> )}
        
     
      
    </div>
    
  );
}

export default App;
