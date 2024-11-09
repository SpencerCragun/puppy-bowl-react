import {useState, useEffect } from 'react'

const PuppyList = ({ setShowList, setPuppyDetails  }) => {

const [puppies, setPuppies] = useState([]);
  
  useEffect(() => {
    const getPuppies = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`);
      const allPuppies = await response.json();
      setPuppies(allPuppies.data.players);
    }
    
    getPuppies();
  }, []);

  const puppyClicked = (puppy) => {
    setShowList(false)
    setPuppyDetails(puppy)
  }
  
  return (
    <ul>
      {puppies.map((singlePuppy) => {
        console.log(singlePuppy)
      return <li key={singlePuppy.id}>{singlePuppy.name}
      <button onClick={() => puppyClicked(singlePuppy)}>Puppy Details</button></li>
      })}
    </ul>
  )
}
  export default PuppyList



