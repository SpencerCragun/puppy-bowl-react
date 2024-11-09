import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import {useState, useEffect } from 'react'
import PuppyList from './components/PuppyList'
import AddPuppy from './components/AddPuppy'
import PuppyDetails from './components/PuppyDetails'

function App() {

  const [showList, setShowList] = useState(true)
  const [puppyDetails, setPuppyDetails] = useState({});


  return (
    <>
      <h1>Puppy Bowl 2024</h1>
      <h2>The Puppies!</h2>
     
      <div className='puppy-list'>
        {
          showList ? <PuppyList setShowList={setShowList} setPuppyDetails={setPuppyDetails}/> : 
          <PuppyDetails puppyDetails={puppyDetails}/>
        }
      </div>
      <div className='add-puppy'>
        <AddPuppy />
      </div>
    </>
  )
}

export default App
