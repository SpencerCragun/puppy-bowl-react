import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import {useState, useEffect } from 'react'

function App() {
  
  const [puppies, setPuppies] = useState([]);
  
  useEffect(() => {
    const getPuppies = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`);
      const allPuppies = await response.json();
      setPuppies(allPuppies.data.players);
    }
    
    getPuppies();

    
  }, []);

  



  return (
    <>
      <h1>Puppy Bowl 2024</h1>
      <h2>The Puppies!</h2>
      <div className='puppy-list'>
        <ul>
          {puppies.map((singlePuppy) => {
            return <li>{singlePuppy.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
